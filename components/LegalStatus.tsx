"use client";
import Layout from "@/components/Layout";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Globe, FileCheck, Heart, Landmark, Receipt } from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Legal Name",
    content: "Joshua Ahante Memorial Foundation (JAM Foundation). 'JAM Foundation' is our operational and public-facing name.",
    accent: "text-jam-sage",
    border: "border-jam-sage",
    bg: "bg-jam-sage/10",
  },
  {
    icon: Globe,
    title: "Country of Registration",
    content: "Nigeria — Registered and operating under Nigerian law as a nonprofit organization dedicated to Education, Empowerment, and Environment programs.",
    accent: "text-jam-orange",
    border: "border-jam-orange",
    bg: "bg-jam-orange/10",
  },
  {
    icon: FileCheck,
    title: "Registration",
    content: "Registered with the Corporate Affairs Commission (CAC) of Nigeria as a nonprofit organization.",
    accent: "text-jam-purple",
    border: "border-jam-purple",
    bg: "bg-jam-purple/10",
  },
  {
    icon: Heart,
    title: "Nonprofit Status",
    content: "JAM Foundation is a not-for-profit organization. All donations are exclusively used for charitable programs, community development, and humanitarian impact. No part of funds is distributed as profit.",
    accent: "text-jam-clay",
    border: "border-jam-clay",
    bg: "bg-jam-clay/10",
  },
  {
    icon: Landmark,
    title: "Banking & Donation Handling",
    content: "We maintain dedicated nonprofit bank accounts. Donations are segregated by program, audited and reconciled regularly, with strict financial controls.",
    accent: "text-jam-sage",
    border: "border-jam-sage",
    bg: "bg-jam-sage/10",
  },
  {
    icon: Receipt,
    title: "Tax-Deductibility",
    content: "Nigeria: Donations may qualify for limited tax relief. US/Canada/Europe: We are seeking recognition from partner organizations to facilitate tax-deductible donations. We provide official receipts for all donations.",
    accent: "text-jam-orange",
    border: "border-jam-orange",
    bg: "bg-jam-orange/10",
  },
];

const LegalStatus = () => (
  <Layout>
    <PageHero
      title="Legal Status & Registration"
      subtitle="Donors want to know that their contributions go to a legitimate, registered nonprofit. Here's everything you need to know."
      accent="clay"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* CAC Registration highlight */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-8 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <FileCheck className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">CAC Registration Number</p>
              <p className="text-white font-extrabold text-2xl tracking-wide">1234567890</p>
              <p className="text-white/50 text-sm mt-1">Corporate Affairs Commission of Nigeria — Verified Nonprofit</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Sections */}
        <div className="space-y-4 mb-14">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <div className={`flex gap-5 bg-card border border-border rounded-xl p-6 border-l-4 ${s.border}`}>
                <div className={`h-9 w-9 rounded-lg ${s.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <s.icon className={`h-4 w-4 ${s.accent}`} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-foreground mb-1.5">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-lg font-bold text-foreground mb-2">Ready to make an impact?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Your donation goes to a verified, registered nonprofit with strict financial controls and full accountability.
            </p>
            <Link href="/donate" className="btn-primary">Donate Now</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default LegalStatus;