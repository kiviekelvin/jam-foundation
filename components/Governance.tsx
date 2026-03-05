"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const trustees = [
  {
    name: "Princess Ahante",
    role: "Founder & Trustee",
    bio: "Development practitioner committed to education, youth empowerment, and sustainable community development.",
    image: "/images/princess-ahante.png",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
  },
  {
    name: "Kelvin Kivie",
    role: "Trustee",
    bio: "Background in governance, nonprofit sector, and community leadership.",
    image: "/images/team/kelvin-kivie.jpg",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
  },
  {
    name: "Kesse Kelsy",
    role: "Trustee",
    bio: "Experience in governance, corporate, and public-sector leadership.",
    image: "/images/team/kesse-kelsy.jpg",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
  },
];

const advisors = [
  { name: "Saddiq Balewa", role: "Education & Youth Development Advisor" },
  { name: "Jesse Yugudah", role: "Climate & Food Security Advisor" },
  { name: "Eric Umoru", role: "Nonprofit Governance & Strategy Advisor" },
  { name: "Dr. Judith Yetu", role: "Advisory Board Member" },
];

const Governance = () => (
  <Layout>
    <PageHero
      title="Governance & Leadership"
      subtitle={`"Effective change requires both compassion and accountability."`}
      accent="purple"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        <AnimatedSection>
          <p className="text-muted-foreground text-lg mb-16 leading-relaxed max-w-3xl">
            JAM Foundation is guided by a leadership structure designed to ensure integrity, accountability, and responsible stewardship of donor funds.
          </p>
        </AnimatedSection>

        {/* Board of Trustees */}
        <div className="mb-20">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">Board of Trustees</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              The Board ensures the organization operates in line with its mission, funds are used responsibly, programs deliver measurable impact, and leadership is held to clear standards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {trustees.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Role badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${t.accent} text-primary-foreground rounded`}>
                        {t.role}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-base mb-2">{t.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-sm text-muted-foreground mt-6 max-w-2xl">
              JAM Foundation maintains a collective decision-making structure, ensuring that no single individual controls organizational or financial decisions.
            </p>
          </AnimatedSection>
        </div>

        {/* Advisory Board */}
        <div>
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">Advisory Board</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Advisory Board members provide strategic guidance and technical expertise but do not participate in daily operations or financial management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {advisors.map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-muted border border-border rounded-xl p-5 card-hover">
                  {/* Initials avatar */}
                  <div className="h-10 w-10 rounded-full bg-jam-purple/15 flex items-center justify-center shrink-0">
                    <span className="text-jam-purple text-sm font-bold">
                      {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{a.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Link to transparency page */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 bg-card border border-border rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Financial Transparency</h3>
              <p className="text-muted-foreground text-sm">See how donor funds are managed and allocated across our programs.</p>
            </div>
            <Link href="/financial-transparency" className="btn-outline shrink-0">Learn More</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Governance;