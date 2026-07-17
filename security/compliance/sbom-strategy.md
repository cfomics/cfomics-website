# SBOM Strategy

## Purpose

This document describes the Software Bill of Materials (SBOM) strategy used by the CFOmics CRA Reference Implementation.

The objective is not only to comply with the Cyber Resilience Act (CRA), but also to establish a practical maturity model that can be applied to both modern and legacy products.

---

# Standards

The implementation is based on:

- EU Cyber Resilience Act (CRA)
- CycloneDX 1.6
- BSI TR-03183-2
- NTIA SBOM Guidance

---

# SBOM Objectives

An SBOM is used to:

- identify third-party software
- support vulnerability management
- improve incident response
- support coordinated vulnerability disclosure
- enable software supply chain transparency

---

# Maturity Levels

## Level 1 – CRA Baseline

Objective:

Meet the minimum legal expectation of the CRA.

Characteristics:

- CycloneDX format
- machine-readable
- generated automatically
- production dependencies
- top-level dependencies
- generated for every release

This level is intended for:

- legacy products
- initial adoption
- minimum regulatory compliance

---

## Level 2 – Operational SBOM

Additional capabilities:

- transitive dependencies
- complete dependency graph
- package relationships
- vulnerability correlation
- automated quality validation

This level enables:

- operational vulnerability management
- faster impact analysis
- automated tooling

---

## Level 3 – BSI Target

Additional capabilities:

- BSI metadata
- component creator
- source references
- executable references
- hashes
- deployment relationships
- higher SBOM quality score

This level represents the long-term target for actively maintained products.

---

# Current Implementation

| Capability | Tool |
|------------|------|
| SBOM generation | cdxgen |
| Format | CycloneDX 1.6 |
| Quality validation | sbomqs |
| Vulnerability scanning | Grype |
| Secret scanning | Gitleaks |

---

# Legacy Product Strategy

Not all products can immediately achieve Level 3.

Recommended rollout:

1. Generate a CRA-compliant SBOM.
2. Cover production top-level dependencies.
3. Gradually improve dependency depth.
4. Introduce BSI-specific metadata where technically feasible.
5. Continuously improve SBOM quality.

---

# Future Roadmap

- Dependency-Track
- OpenVEX
- Sigstore Attestations
- Signed SBOMs
- Release Evidence
