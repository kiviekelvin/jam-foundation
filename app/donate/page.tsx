import type { Metadata } from "next";
import { Suspense } from "react";
import Donate from "@/components/Donate";
export const metadata: Metadata = {
  title: "Donate · JAM Foundation",
  description: "Your donation creates real, measurable change in the lives of vulnerable communities across Africa.",
};
export default function DonatePage() {
  return <Suspense fallback={null}><Donate /></Suspense>;
}
