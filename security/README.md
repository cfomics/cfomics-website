# CFOmics Product Security Program

## Purpose

This directory contains the product security documentation, procedures,
automation, and evidence for the CFOmics website.

The implementation is designed as a practical reference aligned with:

- EU Cyber Resilience Act
- BSI TR-03183
- secure software development practices
- software supply-chain security
- vulnerability handling practices

The current website is used as a practical CRA laboratory. Its formal
classification under the CRA is assessed separately and must not be assumed
solely because these controls are implemented.

## Product

- Product: CFOmics Website
- Version: 0.1.0
- Repository: https://github.com/cfomics/cfomics-website
- Hosting: Vercel
- Framework: Next.js
- Package manager: npm
- Security owner: Svilen Mirchev

## Security domains

### Product inventory

Location: `inventory/`

Contains the product description, ownership, assets, external services,
technology, lifecycle, and CRA scope assessment.

### Architecture

Location: `architecture/`

Contains system boundaries, components, trust boundaries, interfaces,
data flows, and foreseeable deployment scenarios.

### Software supply chain and SBOM

Location: `sbom/`

Contains SBOM generation and validation scripts, generated CycloneDX
documents, BSI gap reports, and supporting documentation.

### Vulnerability management

Location: `vulnerability-management/`

Contains vulnerability triage records, accepted risks, remediation records,
and closed findings.

### Policies and procedures

Locations:

- `policies/`
- `procedures/`

Define security requirements and the operational activities used to meet them.

### Evidence

Location: `evidence/`

Contains evidence of build verification, security checks, reviews, releases,
and other performed activities.

### Templates

Location: `templates/`

Contains reusable templates for assessments, vulnerability triage, risk
acceptance, release reviews, and evidence records.

## Current implementation status

| Capability | Status |
|---|---|
| Reproducible dependency installation | Implemented |
| Linting | Implemented |
| Production build verification | Implemented |
| CycloneDX 1.6 SBOM generation | Implemented locally |
| SBOM dependency graph | Implemented |
| PURL coverage | Implemented |
| License coverage | Implemented |
| SHA-512 coverage | Implemented |
| BSI SBOM metadata enrichment | Planned |
| Automated CI security pipeline | Planned |
| Continuous vulnerability monitoring | Planned |
| Coordinated vulnerability disclosure | Planned |
| security.txt | Planned |
| Release attestation | Planned |

## Evidence principle

Each security activity should produce evidence showing:

1. what was assessed or performed;
2. when it was performed;
3. which product version or commit was assessed;
4. which tool and version were used;
5. what the result was;
6. which findings remain open;
7. who reviewed or accepted the result.
