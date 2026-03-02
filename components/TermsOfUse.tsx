"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Monitor, Heart, AlertTriangle, Lock, Copyright, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: Monitor,
    title: "Use of Website",
    content: "You may use our website for lawful purposes only. All content including text, images, logos, and graphics is owned by JAM Foundation. You may not reproduce or use our content for commercial purposes without written permission.",
  },
  {
    icon: Heart,
    title: "Donations",
    content: "All donations are voluntary. By donating, you acknowledge that you are giving for charitable purposes. We are committed to using donations responsibly and for the intended programs.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: "JAM Foundation is not responsible for any loss or damage resulting from the use of this website. External links are provided for informational purposes only and do not constitute endorsement.",
  },
  {
    icon: Lock,
    title: "Privacy",
    content: (
      <>
        Your privacy is important to us. Please refer to our{" "}
        <Link href="/privacy-policy" className="text-jam-sage font-semibold hover:underline underline-offset-4">
          Privacy Policy
        </Link>{" "}
        to understand how we collect, store, and use your data.
      </>
    ),
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content: "All content is protected by copyright. You may view, download, or print content for personal use only. Commercial use is prohibited without prior written consent from JAM Foundation.",
  },
  {
    icon: RefreshCw,
    title: "Changes to These Terms",
    content: "JAM Foundation may update these Terms at any time. Updates will be posted on this page. Your continued use of the website constitutes acceptance of any updated terms.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        If you have questions about these terms, email us at{" "}
        <a href="mailto:info@jamfafrica.org" className="text-jam-sage font-semibold hover:underline underline-offset-4">
          info@jamfafrica.org
        </a>.
      </>
    ),
  },
];

const TermsOfUse = () => (
  <Layout>
    <PageHero
      title="Terms of Use"
      subtitle="By using this website (www.jamfafrica.org), you agree to the following terms and conditions."
      accent="sage"
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        <AnimatedSection>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
            Last updated: 2026. Please read these terms carefully before using our website or making a donation.
          </p>
        </AnimatedSection>

        <div className="space-y-4 mb-12">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div className="flex gap-5 bg-card border border-border rounded-xl p-6">
                <div className="h-10 w-10 bg-jam-sage/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-jam-sage" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground mb-1.5">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <span className="text-border">·</span>
            <Link href="/non-discrimination" className="text-muted-foreground hover:text-foreground transition-colors">Non-Discrimination Policy</Link>
            <span className="text-border">·</span>
            <Link href="/legal-status" className="text-muted-foreground hover:text-foreground transition-colors">Legal Status</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default TermsOfUse;