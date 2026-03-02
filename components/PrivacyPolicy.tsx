"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Database, Settings, Mail, Cookie, Shield, Globe, UserCheck, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: "When you visit our website or make a donation, we may collect personal information (name, email, address, phone), donation details, and website usage data. We collect this to provide better services and ensure donations are used effectively.",
  },
  {
    icon: Settings,
    title: "How We Use Your Information",
    content: "Your information may be used to process donations safely, send updates about project progress or impact stories, provide newsletters and invitations, and improve our website. We will never sell, trade, or rent your information to third parties.",
  },
  {
    icon: Mail,
    title: "Email Communications",
    content: "You may receive monthly newsletters, program updates, and occasional requests for support. You can unsubscribe at any time using the link provided in every email.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: "Our website uses basic cookies to improve browsing experience and track anonymous site traffic. No sensitive personal information is stored in cookies. You can disable cookies in your browser settings.",
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: "JAM Foundation implements strong security measures to protect donor information, ensure safe online donations, and maintain integrity and confidentiality of your personal data.",
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: "Some services may use third-party providers such as payment processors, email platforms, and analytics tools. These providers are contractually required to protect your data and cannot use it for their own purposes.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: (
      <>
        You have the right to access your personal data, request corrections, request removal from our mailing list, and ask questions about how your data is used. Contact us at{" "}
        <a href="mailto:info@jamfafrica.org" className="text-jam-sage font-semibold hover:underline underline-offset-4">
          info@jamfafrica.org
        </a>.
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    content: "We may update this policy occasionally. Updates will be posted on this page, and significant changes will be communicated via email.",
  },
];

const PrivacyPolicy = () => (
  <Layout>
    <PageHero
      title="Privacy Policy"
      subtitle="Your trust is our priority. Here's exactly how we handle your personal information."
      accent="sage"
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        <AnimatedSection>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
            Last updated: 2026. At JAM Foundation, we take your privacy seriously. When you support our mission or interact with our website, your personal information is protected, used responsibly, and never sold.
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
            <Link href="/non-discrimination" className="text-muted-foreground hover:text-foreground transition-colors">Non-Discrimination Policy</Link>
            <span className="text-border">·</span>
            <Link href="/legal-status" className="text-muted-foreground hover:text-foreground transition-colors">Legal Status</Link>
            <span className="text-border">·</span>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;