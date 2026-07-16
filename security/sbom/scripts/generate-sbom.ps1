param(
    [string]$ProductVersion = "0.1.0",
    [string]$CdxgenVersion = "12.7.1"
)

$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (
    Join-Path $PSScriptRoot "..\..\.."
)

$outputDirectory = Join-Path `
    $projectRoot `
    "security\sbom\generated"

$outputFile = Join-Path `
    $outputDirectory `
    "cfomics-$ProductVersion.cdx.json"

New-Item `
    -ItemType Directory `
    -Force `
    -Path $outputDirectory |
    Out-Null

Write-Host "Generating CFOmics CycloneDX SBOM..."
Write-Host "Product version: $ProductVersion"
Write-Host "cdxgen version: $CdxgenVersion"
Write-Host "Output: $outputFile"

Push-Location $projectRoot

try {
    & npx.cmd `
        --yes `
        "@cyclonedx/cdxgen@$CdxgenVersion" `
        -t npm `
        -o $outputFile `
        --spec-version 1.6

    if ($LASTEXITCODE -ne 0) {
        throw "cdxgen exited with code $LASTEXITCODE."
    }

    if (-not (Test-Path $outputFile)) {
        throw "SBOM output file was not created."
    }

    $sbom = Get-Content $outputFile -Raw |
        ConvertFrom-Json

    if ($sbom.bomFormat -ne "CycloneDX") {
        throw "Unexpected SBOM format: $($sbom.bomFormat)"
    }

    if ($sbom.specVersion -ne "1.6") {
        throw "Unexpected CycloneDX version: $($sbom.specVersion)"
    }

    Write-Host ""
    Write-Host "SBOM generation completed."
    Write-Host "Components: $($sbom.components.Count)"
    Write-Host "Dependency nodes: $($sbom.dependencies.Count)"
}
finally {
    Pop-Location
}
