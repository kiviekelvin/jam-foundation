import type { Metadata } from "next";
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "Contact Us · JAM Foundation",
  description: "Get in touch with JAM Foundation. We'd love to hear from you.",
};
export default function ContactPage() { return <Contact />; }
