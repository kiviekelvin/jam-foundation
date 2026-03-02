import type { Metadata } from "next";
import FinancialTransparency from "@/components/FinancialTransparency";
export const metadata: Metadata = {
  title: "Financial Transparency · JAM Foundation",
  description: "See how JAM Foundation uses your donations. We are committed to full financial transparency.",
};
export default function FinancialTransparencyPage() { return <FinancialTransparency />; }
