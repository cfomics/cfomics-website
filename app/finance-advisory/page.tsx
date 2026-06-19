import type { Metadata } from "next";
import { SitePage } from "../components/SitePage";

export const metadata: Metadata = {
  title: "Finance Advisory | CFOmics",
  description:
    "CFOmics finance advisory services including CFO services, financial reporting, budgeting and forecasting, internal controls, finance transformation and accounting process advisory.",
};

export default function FinanceAdvisory() {
  return <SitePage page="finance" />;
}
