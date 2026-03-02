import type { Metadata } from "next";
import TermsOfUse from "@/components/TermsOfUse";
export const metadata: Metadata = {
  title: "Terms of Use · JAM Foundation",
  description: "Terms and conditions for using the JAM Foundation website.",
};
export default function TermsOfUsePage() { return <TermsOfUse />; }
