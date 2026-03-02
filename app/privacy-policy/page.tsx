import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";
export const metadata: Metadata = {
  title: "Privacy Policy · JAM Foundation",
  description: "JAM Foundation's privacy policy. Learn how we collect, use, and protect your personal information.",
};
export default function PrivacyPolicyPage() { return <PrivacyPolicy />; }
