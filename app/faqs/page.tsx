import type { Metadata } from "next";
import FAQs from "@/components/FAQs";
export const metadata: Metadata = {
  title: "FAQs · JAM Foundation",
  description: "Answers to frequently asked questions about JAM Foundation, our programs, and how your donations are used.",
};
export default function FAQsPage() { return <FAQs />; }
