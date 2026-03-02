import type { Metadata } from "next";
import Governance from "@/components/Governance";
export const metadata: Metadata = {
  title: "Governance · JAM Foundation",
  description: "Learn about JAM Foundation's governance structure, board of directors, and organizational policies.",
};
export default function GovernancePage() { return <Governance />; }
