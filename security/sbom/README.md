# Software Bill of Materials

## Objective

Generate and retain a machine-processable SBOM for each released version of
the CFOmics website.

## Format

Primary format:

- CycloneDX JSON
- Specification version 1.6

## Generator

- Tool: cdxgen
- Version: 12.7.1
- Execution model: temporary external CLI through npx
- Supported execution runtime: Node.js 22

The generator is intentionally not installed as an application dependency.
This prevents the SBOM tool and its dependency tree from becoming part of the
product dependency inventory.

## Current output

The current generated SBOM is stored in:

`generated/cfomics-0.1.0.cdx.json`

## Current validation results

- CycloneDX 1.6: PASS
- Product metadata: PASS
- Timestamp: PASS
- Serial number: PASS
- Creator information: PASS
- Components: 427
- Dependency nodes: 428
- Components with PURL: 427 / 427
- Components with license information: 427 / 427
- Components with SHA-512: 427 / 427

## BSI TR-03183-2 gaps

The following BSI-specific properties are not currently produced by cdxgen:

- filename;
- executable property;
- archive property;
- structured property.

The baseline SBOM must therefore not yet be described as fully conformant with
BSI TR-03183-2.

## Separation of information

The SBOM contains component and dependency information.

Vulnerability and exploitability information must be maintained separately in:

- vulnerability triage records;
- VEX documents;
- security advisories;
- CSAF documents, where applicable.

## Release principle

A fresh SBOM must be generated for every released product version and whenever
the product component set changes.
