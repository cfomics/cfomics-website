import type { Metadata } from "next";
import { SitePage } from "../components/SitePage";

export const metadata: Metadata = {
  title: "Technology Advisory | CFOmics",
  description:
    "CFOmics technology advisory services including NIS2, DORA, PCI DSS, SWIFT CSP, ISO 27001, ISO 42001, Cyber Resilience Act readiness, IT risk, security and compliance advisory.",
};

export default function TechnologyAdvisory() {
  return <SitePage page="technology" />;
}
