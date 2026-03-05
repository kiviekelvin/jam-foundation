"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Users, Sprout, FileCheck, BarChart2, RefreshCw } from "lucide-react";

const budgetRows = [
  { label: "Programs (direct implementation)", amount: "$180,000", pct: 72, color: "bg-jam-sage", textColor: "text-jam-sage" },
  { label: "Administration & Staff", amount: "$40,000", pct: 16, color: "bg-jam-orange", textColor: "text-jam-orange" },
  { label: "Fundraising & Awareness", amount: "$30,000", pct: 12, color: "bg-jam-purple", textColor: "text-jam-purple" },
];

const programAreas = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Life skills training, leadership programs, and displaced children returning to school.",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "Vocational training, income support, and economic recovery for mothers and youth.",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
  },
  {
    icon: Sprout,
    title: "Environment & Livelihood",
    desc: "Climate-smart farming, solar food preservation, and greenhouse systems for displaced families.",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
  },
];

const commitments = [
  {
    icon: BarChart2,
    title: "Commitment to Reporting",
    desc: "Monthly updates via email for all donors, annual impact reports with statistics, stories, and photos, and transparent financial reporting in line with international nonprofit standards.",
  },
  {
    icon: FileCheck,
    title: "Audited Accounts",
    desc: "While JAM Foundation is a young organization, we are committed to publishing audited accounts annually. Once available, they will be published here and in our annual reports.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "We share both our successes and our challenges. Donors don't expect perfection, they expect honesty. That's what we deliver.",
  },
];

const FinancialTransparency = () => (
  <Layout>
    <PageHero
      title="Financial Transparency"
      subtitle="Honest. Accountable. Intentional."
      accent="sage"
    />

    {/* Trust bar */}
    <div className="bg-jam-charcoal border-b border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { label: "CAC Registered Nonprofit", value: "Nigeria" },
            { label: "Programs Allocation", value: "72%" },
            { label: "Annual Budget", value: "$250K" },
            { label: "Fiscal Year", value: "2026" },
          ].map((t) => (
            <div key={t.label} className="text-center">
              <p className="text-white font-extrabold text-xl">{t.value}</p>
              <p className="text-white/40 text-xs mt-0.5 font-medium">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">

        <AnimatedSection>
          <p className="text-muted-foreground text-lg mb-16 leading-relaxed max-w-3xl">
            Every donation goes toward creating real impact for vulnerable children, youth, mothers, and displaced communities across Nigeria. Here's exactly how we use it.
          </p>
        </AnimatedSection>

        {/* Budget breakdown */}
        <AnimatedSection delay={0.05}>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-8">Annual Budget, Fiscal Year 2026</h2>

            {/* Visual bar */}
            <div className="flex rounded-full overflow-hidden h-5 mb-8">
              {budgetRows.map((row) => (
                <div
                  key={row.label}
                  className={`${row.color} h-full`}
                  style={{ width: `${row.pct}%` }}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mb-10">
              {budgetRows.map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${row.color} shrink-0`} />
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className={`text-sm font-bold ${row.textColor}`}>{row.pct}%</span>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-jam-sage">
                    <th className="text-left py-3 text-foreground font-bold">Category</th>
                    <th className="text-right py-3 text-foreground font-bold">Allocation (USD)</th>
                    <th className="text-right py-3 text-foreground font-bold">% of Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRows.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-3.5 text-muted-foreground">{row.label}</td>
                      <td className="text-right text-muted-foreground">{row.amount}</td>
                      <td className={`text-right font-bold ${row.textColor}`}>{row.pct}%</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3.5 text-foreground font-bold">Total</td>
                    <td className="text-right text-foreground font-bold">$250,000</td>
                    <td className="text-right text-foreground font-bold">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* Programs breakdown */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-xl font-bold text-foreground mb-6">Where Program Funds Go</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {programAreas.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.07}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <div className={`h-10 w-10 ${p.accentLight} rounded-lg flex items-center justify-center mb-4`}>
                    <p.icon className={`h-5 w-5 ${p.accentText}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${p.accentText}`}>{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Commitments */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-xl font-bold text-foreground mb-6">Our Commitments to Donors</h2>
          <div className="space-y-4 mb-16">
            {commitments.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.07}>
                <div className="flex gap-5 bg-muted border border-border rounded-xl p-6">
                  <div className="h-10 w-10 bg-jam-sage/15 rounded-lg flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-jam-sage" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Legal link + CTA */}
        <AnimatedSection>
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-1">Verify Our Registration</h3>
              <p className="text-sm text-muted-foreground">View our CAC registration details, nonprofit status, and legal information.</p>
            </div>
            <Link href="/legal-status" className="btn-outline shrink-0">Legal Status →</Link>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Your trust allows us to plan strategically, act effectively, and deliver consistently.
            </p>
            <Link href="/donate" className="btn-primary px-10 py-4">Donate Now</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default FinancialTransparency;