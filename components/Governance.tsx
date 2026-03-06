"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { X } from "lucide-react";

const trustees = [
  {
    number: "01",
    name: "Ahante Princess",
    role: "Chairman, Board of Trustees",
    bio: "A seasoned Marketing and Communications Specialist with over a decade of experience bridging advocacy, humanitarian engagement, and sustainable development. As an entrepreneur and founder, she has built and led multidisciplinary teams across Technology, Agriculture, Human Capital Development, and Sustainable Development, guided by an unwavering commitment to impact and institutional accountability.",
    image: "/images/team/princess-ahante.png",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
  },
  {
    number: "02",
    name: "Ahante Kelvin",
    role: "Board Secretary",
    bio: "A skilled Software Developer and Programmer with over seven years of experience delivering impactful digital solutions. Beyond his technical craft, Kelvin has trained and mentored more than 1,000 young people in software and web development, embodying the Foundation's belief that technology, in the right hands, becomes a tool for generational transformation.",
    image: "/images/team/ahante-kelvin.png",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
  },
  {
    number: "03",
    name: "Ahante Kesse",
    role: "Trustee",
    bio: "A Biologist and emerging Biotechnologist with a fervent dedication to climate action and environmental conservation. Through active volunteerism in conservation and climate initiatives, and leadership roles within student and sustainability networks, Kesse champions youth-led innovation as a cornerstone of Africa's environmental future.",
    image: "/images/team/ahante-kesse.jpg",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
  },
];

interface Advisor {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string[];
}

const advisors: Advisor[] = [
  {
    name: "Barr. Sokombaa C. Egbeja",
    role: "Tax Attorney & Legislative Educator",
    image: "/images/team/sokombaa-egbeja.jpg",
    shortBio: "Distinguished Nigerian lawyer with expertise spanning litigation, legislative reform, and regulatory consulting at the highest levels.",
    fullBio: [
      "Sokombaa C. Egbeja is a distinguished Nigerian lawyer whose career reflects both exceptional academic pedigree and a deep dedication to law, policy, and public service. A First Class graduate (summa cum laude) of the University of Jos. Barr Sokombaa's professional journey spans litigation, legislative reform, and regulatory consulting at the highest levels.",
      "He began his legal career at D. D. Dodo (SAN) & Co., where he distinguished himself in high-stakes election petition tribunals across gubernatorial, senatorial, and presidential chambers. His trajectory deepened through strategic engagements with the Policy and Legal Advocacy Centre (PLAC) and the National Institute for Legislative and Democratic Studies (NILDS), including a secondment to the Senate's Rules and Business Committee at the National Assembly. In 2024, he was elected Speaker of the Model Legislative Assembly, a testament to his legislative standing and peer recognition.",
      "As pioneer Head of Faculty at the Centre for Faith-Based Policy in Abuja, he contributed significantly to legislative education and policy development. He also leads The Unorthodox Mentoring, a platform through which he empowers young people to realise their potential.",
    ],
  },
  {
    name: "Barr. Eric Umoru",
    role: "Lawyer & International Development Professional",
    image: "/images/team/eric-umoru.jpg",
    shortBio: "Seasoned international development professional with a distinguished record of driving systemic change across policy, human rights, and social inclusion in Nigeria and beyond.",
    fullBio: [
      "Eric Umoru is a lawyer and seasoned international development professional with a distinguished record of driving systemic change across policy, human rights, and social inclusion in Nigeria and beyond. His expertise spans policy reform, counter-trafficking, gender equality, child protection, and political economy analysis. Bringing both legal rigour and on-the-ground development experience to every engagement.",
      "Most recently, Eric served as Social Protection and Inclusion Advisor on the USAID-funded Strengthening Civic Advocacy and Local Engagement (SCALE) Project, implemented by Palladium International across 32 states in Nigeria. In this role, he led the delivery of interventions addressing Trafficking in Persons, Sexual and Gender-Based Violence, and Child Early and Forced Marriage. Working with civil society organisations to achieve landmark policy outcomes, including advances on the 5 Gender Bills, Women's Empowerment legislation, Disability Rights, Sexual Assault Referral Centres (SARCs), and the Administration of Criminal Justice Laws. His career portfolio also includes project management under the UK-FCDO, World Bank, and European Union.",
      "Eric holds a Master's degree in International Law and Diplomacy from the University of Lagos and a Certificate in Public Policy Analysis from the London School of Economics and Political Science. A published researcher and writer on trafficking, child protection, and women's rights, he was recognised in 2020 by the Lagos State Government for his outstanding contributions to combating trafficking in persons and child exploitation.",
    ],
  },
  {
    name: "Dr. Christian Musa",
    role: "Humanitarian Medical Doctor & Health Systems Specialist",
    image: "/images/team/christian-musa.jpg",
    shortBio: "Accomplished humanitarian medical doctor with extensive field experience in emergency response, health systems strengthening, and nutrition programme management across Nigeria's most complex crisis contexts.",
    fullBio: [
      "Dr. Christian Musa is an accomplished humanitarian medical doctor with extensive field experience spanning emergency response, health systems strengthening, nutrition programme management, and immunisation delivery across some of Nigeria's most complex crisis contexts; including Borno, Zamfara, and Katsina States.",
      "Currently serving as Health and Nutrition Program Manager at Première Urgence Internationale (PUI), Dr. Musa designs and oversees comprehensive healthcare programmes, develops proposals for institutional donors, and leads coordination with UN agencies including UNICEF, WHO, and UNFPA. His career with INTERSOS further demonstrated his operational depth, from managing Nigeria's EU-funded COVAX COVID-19 vaccination programme, coordinating 43 vaccination teams across Borno State, to supervising stabilisation centres for severe acute malnutrition (SAM) in line with WHO and national protocols.",
      "A specialist in the integration of routine immunisation with COVID-19 vaccination strategies, Dr. Musa brings both clinical expertise and programme leadership to the intersection of public health and humanitarian action. Beyond his institutional roles, he is deeply committed to the holistic wellbeing of communities, championing climate change awareness, fitness, and livelihood development through his platform GlobalAID_DrMaffy, where he leads a team of young advocates toward sustainable health and wealth creation.",
    ],
  },
];

const Governance = () => {
  const [activeAdvisor, setActiveAdvisor] = useState<Advisor | null>(null);

  return (
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
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col">
                    <div className="relative h-60 overflow-hidden bg-muted">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <span className={`absolute top-3 left-3 text-xs font-extrabold ${t.accentText} opacity-60`}>
                        {t.number}
                      </span>
                      <div className="absolute bottom-3 left-3">
                        <span className={`inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${t.accent} text-white rounded`}>
                          {t.role}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
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
                Advisory Board members provide strategic guidance and technical expertise but do not participate in daily operations or financial management. Click any member to read their full biography.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5">
              {advisors.map((a, i) => (
                <AnimatedSection key={a.name} delay={i * 0.08}>
                  <button
                    onClick={() => setActiveAdvisor(a)}
                    className="w-full text-left bg-card border border-border rounded-xl overflow-hidden hover:border-jam-purple/40 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-sm mb-0.5">{a.name}</h3>
                      <p className="text-xs text-jam-purple font-medium mb-3">{a.role}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{a.shortBio}</p>
                      <p className="text-xs text-jam-purple font-semibold mt-3 group-hover:underline underline-offset-4">
                        Read full bio →
                      </p>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Transparency link */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 bg-card border border-border rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Financial Transparency</h3>
                <p className="text-muted-foreground text-sm">See how donor funds are managed and allocated across our programs.</p>
              </div>
              <Link href="/financial-transparency" className="btn-outline shrink-0">View Report</Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Advisory Board Modal */}
      {activeAdvisor && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveAdvisor(null)}
        >
          <div
            className="bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-5 p-7 border-b border-border sticky top-0 bg-background">
              <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted shrink-0">
                <img src={activeAdvisor.image} alt={activeAdvisor.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-foreground text-lg leading-tight">{activeAdvisor.name}</h2>
                <p className="text-jam-purple text-sm font-medium mt-0.5">{activeAdvisor.role}</p>
              </div>
              <button
                onClick={() => setActiveAdvisor(null)}
                className="h-9 w-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="p-7 space-y-4">
              {activeAdvisor.fullBio.map((para, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Governance;