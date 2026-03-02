"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Monitor, GraduationCap } from "lucide-react";

const WEB3FORMS_KEY = "70760373-741a-43d2-89a1-44b91ed77ae9";

const opportunities = [
  {
    icon: MapPin,
    title: "Field Volunteering",
    desc: "Work directly in communities across Nigeria on our programs.",
    items: ["Greenhouse farming projects", "Nutrition programs", "Community education initiatives"],
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
  },
  {
    icon: Monitor,
    title: "Remote Volunteering",
    desc: "Support our work from anywhere in the world.",
    items: ["Social media & content creation", "Research & report writing", "Digital fundraising campaigns"],
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Skills",
    desc: "Share your expertise to help communities grow.",
    items: ["Life skills & leadership training", "Entrepreneurship mentoring", "Impactful training sessions"],
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
  },
];

const reasons = [
  { title: "Make Real Impact", desc: "Your time directly supports communities rebuilding from crisis." },
  { title: "Gain Experience", desc: "Work on real programs across education, health, and livelihoods." },
  { title: "Join a Movement", desc: "Become part of a growing network of change-makers across Africa." },
];

const Volunteer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Volunteer Application — JAM Foundation");
    formData.append("from_name", "JAM Foundation Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        setError("Something went wrong. Please email us directly at info@jamfafrica.org");
      }
    } catch {
      setError("Network error. Please email us directly at info@jamfafrica.org");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Volunteer & Get Involved"
        subtitle={`"Your hands, your ideas, your energy can help rebuild futures."`}
        accent="orange"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Why Volunteer */}
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-5 mb-20">
              {reasons.map((r, i) => (
                <div key={r.title} className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-2xl font-extrabold text-jam-orange mb-1">0{i + 1}</p>
                  <h3 className="font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Opportunity Cards */}
          <AnimatedSection delay={0.05}>
            <h2 className="text-2xl font-bold text-foreground mb-8">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-5 mb-20">
              {opportunities.map((opp, i) => (
                <AnimatedSection key={opp.title} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-xl p-7 h-full flex flex-col">
                    <div className={`h-10 w-10 ${opp.accentLight} rounded-lg flex items-center justify-center mb-5`}>
                      <opp.icon className={`h-5 w-5 ${opp.accentText}`} />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{opp.title}</h3>
                    <p className="text-xs text-muted-foreground mb-5">{opp.desc}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {opp.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${opp.accent}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Form / Success */}
          {submitted ? (
            <AnimatedSection>
              <div className="bg-jam-charcoal rounded-2xl p-12 text-center max-w-2xl mx-auto">
                <div className="h-16 w-16 bg-jam-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Thank you for stepping up!</h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  We review every application carefully and will reach out if there's a suitable opportunity that matches your skills and availability.
                </p>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.1}>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-2">Volunteer Application</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill in the form below and we'll be in touch when opportunities arise.</p>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input name="fullName" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input name="email" required type="email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Country *</label>
                      <input name="country" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Availability *</label>
                      <select name="availability" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                        <option value="">Select...</option>
                        <option>Short-term</option>
                        <option>Long-term</option>
                        <option>Remote / Virtual</option>
                        <option>On-ground</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Area of Interest *</label>
                    <select name="areaOfInterest" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <option value="">Select...</option>
                      <option>Field Volunteering</option>
                      <option>Remote / Digital Support</option>
                      <option>Mentorship & Skills Training</option>
                      <option>Fundraising & Awareness</option>
                      <option>Research & Writing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Relevant Skills or Experience</label>
                    <input name="skills" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. teaching, graphic design, farming, social media..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to volunteer?</label>
                    <textarea name="message" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" required className="mt-1 rounded shrink-0" />
                      I understand this is an expression of interest and does not guarantee placement.
                    </label>
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;