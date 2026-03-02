"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    category: "About JAM Foundation",
    accent: "text-jam-sage",
    accentBg: "bg-jam-sage",
    items: [
      {
        q: "Is JAM Foundation religious or political?",
        a: "No. JAM Foundation is a non-religious, non-political organization. We serve communities based on need alone — regardless of faith, ethnicity, or political affiliation.",
      },
      {
        q: "Where does JAM Foundation operate?",
        a: "We currently focus on underserved, rural, and conflict-affected communities in Nigeria, with plans to scale across Africa as partnerships and funding grow.",
      },
      {
        q: "Is JAM Foundation a registered nonprofit?",
        a: "Yes. JAM Foundation (Joshua Ahante Memorial Foundation) is registered with the Corporate Affairs Commission (CAC) of Nigeria as a nonprofit organization. Our CAC registration number is 1234567890.",
      },
      {
        q: "What makes JAM Foundation different from other NGOs?",
        a: "We don't treat poverty, hunger, climate change, and lack of education as separate problems — because they aren't. Our integrated approach addresses these challenges together, combining immediate response, recovery, and long-term resilience in every program we run.",
      },
    ],
  },
  {
    category: "Donating & Giving",
    accent: "text-jam-orange",
    accentBg: "bg-jam-orange",
    items: [
      {
        q: "Do you accept international donations?",
        a: "Yes. JAM Foundation welcomes support from donors around the world. We provide official receipts for all donations for accounting and reporting purposes.",
      },
      {
        q: "Can I restrict my donation to a specific project?",
        a: "Yes. Donors may designate their contributions to specific programs or focus areas such as Her Future Fund, Nourish to Survive, or Farm Without Land.",
      },
      {
        q: "Is my donation tax-deductible?",
        a: "In Nigeria, donations may qualify for limited tax relief under Nigerian law. For US, Canada, and Europe: JAM Foundation is currently seeking recognition from partner organizations to facilitate tax-deductible donations. We encourage international donors to consult their tax advisors. We provide official receipts for all donations.",
      },
      {
        q: "What is the JAM Circle?",
        a: "The JAM Circle is our monthly giving community. Members give between $20–$200/month to provide consistent, long-term support for our programs. Monthly giving allows JAM Foundation to plan better, respond faster, and walk alongside families as they rebuild. Members receive monthly field updates, impact stories, and insights from the founder.",
      },
      {
        q: "How do I know my donation is making a difference?",
        a: "We provide program updates, impact stories, and periodic reports. Transparency is central to our work — donors receive honest updates on both successes and challenges. You can also view our Financial Transparency page to see exactly how funds are allocated.",
      },
    ],
  },
  {
    category: "Programs & Impact",
    accent: "text-jam-purple",
    accentBg: "bg-jam-purple",
    items: [
      {
        q: "How do you select communities to work in?",
        a: "We focus on conflict-affected communities, displaced families, and underserved rural areas — places often overlooked yet most in need of sustained support. We work with local leaders and community organizations to identify the areas of greatest need.",
      },
      {
        q: "Do your programs provide handouts or long-term support?",
        a: "We focus on long-term solutions, not short-term relief. Every program is designed to build skills, income, independence, and resilience — so that people can stand on their own. We ask not just 'What do people need today?' but 'What will help them stand on their own tomorrow?'",
      },
      {
        q: "How do you measure the impact of your programs?",
        a: "We track the number of beneficiaries reached, outputs (training completed, systems installed, children supported), and outcomes (income changes, food access, school retention rates). We publish periodic reports and are committed to sharing both our progress and our challenges.",
      },
    ],
  },
  {
    category: "Partnering & Getting Involved",
    accent: "text-jam-clay",
    accentBg: "bg-jam-clay",
    items: [
      {
        q: "How can I partner with JAM Foundation?",
        a: "We welcome partnerships with individuals, corporations, foundations, NGOs, and community organizations. Visit our Partners page or contact us directly to start a conversation about how we can collaborate.",
      },
      {
        q: "Can I volunteer with JAM Foundation?",
        a: "Yes. We welcome field volunteers, remote volunteers (content, research, digital), and mentors who can share skills in leadership, entrepreneurship, or technical areas. Visit our Volunteer page to submit an expression of interest.",
      },
      {
        q: "Can JAM Foundation speak at events or panels?",
        a: "Yes. Representatives of JAM Foundation are available for panels, conferences, podcasts, webinars, and NGO discussions. Topics include education in crisis settings, youth empowerment, climate-smart agriculture, and women-led recovery. Contact our media team at media@jamfafrica.org.",
      },
    ],
  },
];

const AccordionItem = ({ q, a, accent }: { q: string; a: string; accent: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-semibold text-foreground text-sm leading-snug group-hover:text-foreground/80 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 mt-0.5 transition-transform duration-300 text-muted-foreground ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQs = () => (
  <Layout>
    <PageHero
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about JAM Foundation, our programs, and how to get involved."
      accent="orange"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="space-y-10 mb-16">
          {faqCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 0.07}>
              <div>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`h-2 w-8 rounded-full ${cat.accentBg}`} />
                  <h2 className={`text-sm font-bold uppercase tracking-widest ${cat.accent}`}>{cat.category}</h2>
                </div>

                {/* Accordion */}
                <div className="bg-card border border-border rounded-xl px-6">
                  {cat.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} accent={cat.accent} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-10 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              We promise to use funds responsibly, respect donor intent, communicate honestly, and center the dignity of the communities we serve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary">Donate Now</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white hover:text-jam-charcoal transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default FAQs;