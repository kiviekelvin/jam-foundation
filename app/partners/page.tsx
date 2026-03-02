import type { Metadata } from "next";
import Partners from "@/components/Partners";
export const metadata: Metadata = {
  title: "Our Partners · JAM Foundation",
  description: "Meet the organizations and individuals partnering with JAM Foundation to create lasting change across Africa.",
};
export default function PartnersPage() { return <Partners />; }
