param(
    [string]$ProductVersion = "0.1.0"
)

$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (
    Join-Path $PSScriptRoot "..\..\.."
)

$sbomFile = Join-Path `
    $projectRoot `
    "security\sbom\generated\cfomics-$ProductVersion.cdx.json"

$reportDirectory = Join-Path `
    $projectRoot `
    "security\sbom\reports"

$reportFile = Join-Path `
    $reportDirectory `
    "cfomics-$ProductVersion-validation.txt"

if (-not (Test-Path $sbomFile)) {
    throw "SBOM file not found: $sbomFile"
}

New-Item `
    -ItemType Directory `
    -Force `
    -Path $reportDirectory |
    Out-Null

$sbom = Get-Content $sbomFile -Raw |
    ConvertFrom-Json

$components = @($sbom.components)
$dependencies = @($sbom.dependencies)

function Test-Property {
    param(
        [object]$Component,
        [string]$PropertyName
    )

    return @(
        $Component.properties |
        Where-Object { $_.name -eq $PropertyName }
    ).Count -gt 0
}

$results = foreach ($component in $components) {
    $licenses = @($component.licenses)

    $hasLicense = $false

    foreach ($licenseEntry in $licenses) {
        if (
            $licenseEntry.license.id -or
            $licenseEntry.license.name -or
            $licenseEntry.expression
        ) {
            $hasLicense = $true
        }
    }

    $hasSha512 = @(
        $component.hashes |
        Where-Object { $_.alg -eq "SHA-512" }
    ).Count -gt 0

    [PSCustomObject]@{
        Name       = $component.name
        Version    = $component.version
        Purl       = [bool]$component.purl
        License    = $hasLicense
        SHA512     = $hasSha512
        Filename   = Test-Property `
            -Component $component `
            -PropertyName "bsi:component:filename"
        Executable = Test-Property `
            -Component $component `
            -PropertyName "bsi:component:executable"
        Archive    = Test-Property `
            -Component $component `
            -PropertyName "bsi:component:archive"
        Structured = Test-Property `
            -Component $component `
            -PropertyName "bsi:component:structured"
    }
}

$documentChecks = [ordered]@{
    "CycloneDX format" = $sbom.bomFormat -eq "CycloneDX"
    "CycloneDX 1.6" = $sbom.specVersion -eq "1.6"
    "Serial number present" = [bool]$sbom.serialNumber
    "Timestamp present" = [bool]$sbom.metadata.timestamp
    "Product name present" = [bool]$sbom.metadata.component.name
    "Product version present" = [bool]$sbom.metadata.component.version
    "Creator present" = (
        [bool]$sbom.metadata.authors -or
        [bool]$sbom.metadata.manufacture -or
        [bool]$sbom.metadata.supplier
    )
    "Components present" = $components.Count -gt 0
    "Dependency graph present" = $dependencies.Count -gt 0
}

$mandatoryFailures = @()

foreach ($check in $documentChecks.GetEnumerator()) {
    if (-not $check.Value) {
        $mandatoryFailures += $check.Key
    }
}

if (($results | Where-Object { -not $_.Purl }).Count -gt 0) {
    $mandatoryFailures += "One or more components are missing PURL"
}

if (($results | Where-Object { -not $_.License }).Count -gt 0) {
    $mandatoryFailures += "One or more components are missing license information"
}

if (($results | Where-Object { -not $_.SHA512 }).Count -gt 0) {
    $mandatoryFailures += "One or more components are missing SHA-512"
}

$bsiGaps = @()

if (($results | Where-Object { -not $_.Filename }).Count -gt 0) {
    $bsiGaps += "BSI filename property missing"
}

if (($results | Where-Object { -not $_.Executable }).Count -gt 0) {
    $bsiGaps += "BSI executable property missing"
}

if (($results | Where-Object { -not $_.Archive }).Count -gt 0) {
    $bsiGaps += "BSI archive property missing"
}

if (($results | Where-Object { -not $_.Structured }).Count -gt 0) {
    $bsiGaps += "BSI structured property missing"
}

$validationStatus = if ($mandatoryFailures.Count -eq 0) {
    "PASS"
}
else {
    "FAIL"
}

$bsiStatus = if ($bsiGaps.Count -eq 0) {
    "PASS"
}
else {
    "GAPS IDENTIFIED"
}

$documentCheckText = foreach ($check in $documentChecks.GetEnumerator()) {
    "{0}: {1}" -f $check.Key, $check.Value
}

@"
CFOmics SBOM Validation Report

Generated: $(Get-Date -Format "yyyy-MM-ddTHH:mm:ssK")
Product version: $ProductVersion
SBOM file: $sbomFile

Overall validation status: $validationStatus
BSI enrichment status: $bsiStatus

Document-level checks
---------------------
$($documentCheckText -join "`r`n")

Component coverage
------------------
Components: $($components.Count)
Dependency nodes: $($dependencies.Count)
Components with PURL: $(($results | Where-Object Purl).Count) / $($results.Count)
Components with license: $(($results | Where-Object License).Count) / $($results.Count)
Components with SHA-512: $(($results | Where-Object SHA512).Count) / $($results.Count)
Components with BSI filename: $(($results | Where-Object Filename).Count) / $($results.Count)
Components with BSI executable property: $(($results | Where-Object Executable).Count) / $($results.Count)
Components with BSI archive property: $(($results | Where-Object Archive).Count) / $($results.Count)
Components with BSI structured property: $(($results | Where-Object Structured).Count) / $($results.Count)

Mandatory failures
------------------
$(if ($mandatoryFailures.Count -eq 0) {
    "None"
}
else {
    $mandatoryFailures -join "`r`n"
})

BSI gaps
--------
$(if ($bsiGaps.Count -eq 0) {
    "None"
}
else {
    $bsiGaps -join "`r`n"
})
"@ | Set-Content -Encoding utf8 $reportFile

Write-Host ""
Write-Host "SBOM validation completed."
Write-Host "Validation status: $validationStatus"
Write-Host "BSI status: $bsiStatus"
Write-Host "Report: $reportFile"

if ($mandatoryFailures.Count -gt 0) {
    exit 1
}
