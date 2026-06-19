import type { Metadata } from "next";
import { SitePage } from "../components/SitePage";

export const metadata: Metadata = {
  title: "Services | CFOmics",
  description:
    "Integrated finance, risk and technology advisory services for finance operations, compliance readiness, governance, IT risk and technology advisory.",
};

export default function Services() {
  return <SitePage page="services" />;
}
