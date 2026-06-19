import type { Metadata } from "next";
import { SitePage } from "../components/SitePage";

export const metadata: Metadata = {
  title: "Contact | CFOmics",
  description:
    "Contact CFOmics at office@cfomics.com for finance advisory, technology advisory, compliance readiness, partnerships and assessment inquiries.",
};

export default function Contact() {
  return <SitePage page="contact" />;
}
