param(
    [string]$ProductVersion = "0.1.0"
)

$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (
    Join-Path $PSScriptRoot "..\..\.."
)

$inputFile = Join-Path `
    $projectRoot `
    "security\sbom\generated\cfomics-$ProductVersion.cdx.json"

$outputFile = Join-Path `
    $projectRoot `
    "security\sbom\generated\cfomics-$ProductVersion.bsi-enriched.cdx.json"

if (-not (Test-Path $inputFile)) {
    throw "Input SBOM not found: $inputFile"
}

$sbom = Get-Content $inputFile -Raw |
    ConvertFrom-Json

function Add-Or-Replace-Property {
    param(
        [object]$Component,
        [string]$Name,
        [string]$Value
    )

    $existing = @($Component.properties)

    $filtered = @(
        $existing |
        Where-Object { $_.name -ne $Name }
    )

    $newProperty = [PSCustomObject]@{
        name  = $Name
        value = $Value
    }

    $Component.properties = @($filtered + $newProperty)
}

function Get-Component-Filename {
    param(
        [object]$Component
    )

    if ($Component.name -and $Component.version) {
        return "$($Component.name)-$($Component.version).tgz"
    }

    if ($Component.name) {
        return "$($Component.name).tgz"
    }

    return "unknown-component.tgz"
}

function Get-Component-Classification {
    param(
        [object]$Component
    )

    $name = [string]$Component.name
    $type = [string]$Component.type

    $isExecutable = "non-executable"
    $isArchive = "archive"
    $isStructured = "structured"

    if ($type -eq "application") {
        $isExecutable = "executable"
        $isArchive = "no archive"
        $isStructured = "structured"
    }

    if (
        $name -match "sharp|swc|oxide|lightningcss|resolver-binding"
    ) {
        $isExecutable = "executable"
        $isArchive = "archive"
        $isStructured = "structured"
    }

    return [PSCustomObject]@{
        Executable = $isExecutable
        Archive    = $isArchive
        Structured = $isStructured
    }
}

foreach ($component in @($sbom.components)) {
    $classification = Get-Component-Classification `
        -Component $component

    Add-Or-Replace-Property `
        -Component $component `
        -Name "bsi:component:filename" `
        -Value (Get-Component-Filename -Component $component)

    Add-Or-Replace-Property `
        -Component $component `
        -Name "bsi:component:executable" `
        -Value $classification.Executable

    Add-Or-Replace-Property `
        -Component $component `
        -Name "bsi:component:archive" `
        -Value $classification.Archive

    Add-Or-Replace-Property `
        -Component $component `
        -Name "bsi:component:structured" `
        -Value $classification.Structured
}

$sbom |
    ConvertTo-Json -Depth 100 |
    Set-Content -Encoding utf8 $outputFile

Write-Host ""
Write-Host "SBOM enrichment completed."
Write-Host "Input: $inputFile"
Write-Host "Output: $outputFile"
Write-Host "Components enriched: $(@($sbom.components).Count)"
