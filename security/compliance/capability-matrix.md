# CRA Product Security Capability Matrix

Version: 0.1

---

# Purpose

This document defines the Product Security capabilities required for software products with digital elements.

It is intentionally **capability-based**, not vendor-based.

The objective is to define **what capabilities a product team must implement**, independently of the specific tools used.

Each capability identifies:

- business objective
- security objective
- addressed risk
- acceptance criteria
- ownership
- reference implementation
- enterprise alternatives
- expected evidence
- CRA mapping
- BSI mapping

---

# Capability Status

| Capability | Status |
|------------|--------|
| Product Inventory | Implemented |
| Software Bill of Materials | Implemented |
| SBOM Validation | Planned |
| Software Composition Analysis | Planned |
| Secret Detection | Planned |
| Static Application Security Testing | Planned |
| Continuous Vulnerability Monitoring | Planned |
| Vulnerability Exploitability Assessment | Planned |
| Secure Release | Planned |
| Coordinated Vulnerability Disclosure | Planned |

---

# Capability 1 — Product Inventory

## Business Objective

Know exactly which product is being secured.

## Security Objective

Maintain an accurate inventory of software products, components and owners.

## Risk Addressed

Unknown or unmanaged products cannot be secured or maintained.

## Acceptance Criteria

- Product is uniquely identified.
- Product owner is assigned.
- Security owner is assigned.
- Repository is documented.
- Deployment environment is documented.
- Technology stack is documented.

## Owner

Development Team

Product Security

## Reference Implementation

Markdown inventory.

## Enterprise Alternatives

- ServiceNow
- Jira Assets
- PLM

## Evidence

- Product Inventory
- Asset Inventory

## CRA Mapping

Technical Documentation

## BSI Mapping

Product Metadata

---

# Capability 2 — Software Bill of Materials

## Business Objective

Know every software component contained in the product.

## Security Objective

Generate a complete machine-readable Software Bill of Materials.

## Risk Addressed

Unknown third-party components cannot be monitored for vulnerabilities.

## Acceptance Criteria

- CycloneDX 1.6 or newer
- Machine-readable JSON
- Generated automatically
- Generated for every release
- Includes dependency graph
- Includes package URLs
- Includes licenses
- Includes cryptographic hashes

## Owner

Development Team

Product Security

## Reference Implementation

- CycloneDX cdxgen

## Enterprise Alternatives

- Black Duck
- Anchore Enterprise
- Snyk
- JFrog Xray

## Evidence

- CycloneDX SBOM
- SBOM generation logs

## CRA Mapping

Annex I Part II

## BSI Mapping

TR-03183-2

---

# Capability 3 — SBOM Validation

## Business Objective

Ensure generated SBOM satisfies quality requirements.

## Security Objective

Detect incomplete or invalid SBOMs before release.

## Risk Addressed

Incomplete SBOM reduces vulnerability management effectiveness.

## Acceptance Criteria

- SBOM validates successfully
- Required metadata exists
- PURL coverage verified
- License coverage verified
- Dependency graph verified

## Owner

Product Security

## Reference Implementation

- sbomqs

## Enterprise Alternatives

- Black Duck validation
- Internal validation

## Evidence

- Validation report

## CRA Mapping

Machine-readable SBOM

## BSI Mapping

TR-03183-2 Validation

---

# Capability 4 — Software Composition Analysis

## Business Objective

Identify vulnerable third-party software.

## Security Objective

Detect known vulnerabilities before release.

## Risk Addressed

Shipping software containing publicly known vulnerabilities.

## Acceptance Criteria

- Dependency scan executed
- CVEs identified
- Severity assigned
- Findings reviewed

## Owner

Development Team

Product Security

## Reference Implementation

- Grype
- OSV Scanner

## Enterprise Alternatives

- Black Duck
- Snyk
- Mend

## Evidence

- Vulnerability Report

## CRA Mapping

Vulnerability Handling

## BSI Mapping

Component Monitoring

---

# Capability 5 — Secret Detection

## Business Objective

Prevent credential exposure.

## Security Objective

Detect secrets committed to source code.

## Risk Addressed

Credential leakage.

## Acceptance Criteria

- Repository scanned
- Findings reviewed
- No active secrets remain

## Owner

Development Team

## Reference Implementation

- Gitleaks

## Enterprise Alternatives

- GitHub Advanced Security
- GitGuardian

## Evidence

- Secret Scan Report

## CRA Mapping

Secure Development

## BSI Mapping

Secure Development Practices

---

# Capability 6 — Static Application Security Testing

## Business Objective

Improve software quality.

## Security Objective

Identify insecure coding practices.

## Risk Addressed

Security defects introduced during development.

## Acceptance Criteria

- Source code scanned
- Findings triaged
- Critical issues resolved before release

## Owner

Development Team

Product Security

## Reference Implementation

- Semgrep

## Enterprise Alternatives

- Coverity
- Checkmarx
- Fortify

## Evidence

- SAST Report

## CRA Mapping

Security by Design

## BSI Mapping

Secure Development

---

# Capability 7 — Continuous Vulnerability Monitoring

## Business Objective

Detect newly disclosed vulnerabilities after release.

## Security Objective

Continuously monitor released software.

## Risk Addressed

Previously released products becoming vulnerable.

## Acceptance Criteria

- Continuous monitoring enabled
- New CVEs detected
- Notifications generated

## Owner

Product Security

## Reference Implementation

- Dependency-Track

## Enterprise Alternatives

- Black Duck

## Evidence

- Monitoring Reports

## CRA Mapping

Post-release Vulnerability Handling

## BSI Mapping

Continuous Monitoring

---

# Capability 8 — Vulnerability Exploitability Assessment

## Business Objective

Prioritize remediation efforts.

## Security Objective

Determine whether discovered vulnerabilities affect the product.

## Risk Addressed

Wasting effort on vulnerabilities that are not applicable.

## Acceptance Criteria

- Every relevant vulnerability assessed
- Exploitability documented
- Decision recorded

## Owner

Product Security

## Reference Implementation

- OpenVEX

## Enterprise Alternatives

- Vendor PSIRT
- Internal PSIRT

## Evidence

- VEX Document

## CRA Mapping

Vulnerability Handling

## BSI Mapping

Vulnerability Assessment

---

# Capability 9 — Secure Release

## Business Objective

Produce trustworthy software releases.

## Security Objective

Ensure releases are reproducible and verifiable.

## Risk Addressed

Release tampering or missing security evidence.

## Acceptance Criteria

- Build completed
- Security checks passed
- SBOM attached
- Release evidence archived

## Owner

Release Management

Product Security

## Reference Implementation

- GitHub Actions
- GitHub Artifact Attestations

## Enterprise Alternatives

- Enterprise CI/CD Platform

## Evidence

- Release Evidence
- Build Logs
- SBOM
- Attestation

## CRA Mapping

Secure Updates

## BSI Mapping

Release Integrity

---

# Capability 10 — Coordinated Vulnerability Disclosure

## Business Objective

Receive vulnerability reports from external researchers.

## Security Objective

Provide a documented vulnerability disclosure process.

## Risk Addressed

Responsible disclosure becomes difficult or impossible.

## Acceptance Criteria

- security.txt published
- Disclosure policy available
- Security contact documented

## Owner

Product Security

## Reference Implementation

- security.txt
- Disclosure Policy

## Enterprise Alternatives

- Corporate PSIRT

## Evidence

- security.txt
- Disclosure Policy

## CRA Mapping

Article 13

## BSI Mapping

Coordinated Vulnerability Disclosure

---

# Guiding Principle

Capabilities define **what must be achieved**.

Reference implementations demonstrate **one possible implementation**.

Enterprise organizations may replace the reference implementation with commercial tooling, provided that the capability, acceptance criteria and evidence remain equivalent.
