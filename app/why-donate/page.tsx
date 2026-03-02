import type { Metadata } from "next";
import WhyDonate from "@/components/WhyDonate";
export const metadata: Metadata = {
  title: "Why Donate · JAM Foundation",
  description: "Understand the impact of your donation to JAM Foundation and why giving matters for Africa's most vulnerable communities.",
};
export default function WhyDonatePage() { return <WhyDonate />; }
