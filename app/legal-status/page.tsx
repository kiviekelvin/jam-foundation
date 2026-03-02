import type { Metadata } from "next";
import LegalStatus from "@/components/LegalStatus";
export const metadata: Metadata = {
  title: "Legal Status · JAM Foundation",
  description: "JAM Foundation is a CAC registered nonprofit organization in Nigeria. View our legal registration and compliance documents.",
};
export default function LegalStatusPage() { return <LegalStatus />; }
