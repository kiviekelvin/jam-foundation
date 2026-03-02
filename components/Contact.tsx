"use client";
import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle, Heart, Users, Mic2, HandshakeIcon } from "lucide-react";

const WEB3FORMS_KEY = "02821bd7-5dd8-4d15-82ee-75dab7203c98";


const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@jamfafrica.org",
    href: "mailto:info@jamfafrica.org",
    sub: "We respond within 2 business days",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234-567-891-0000",
    href: "tel:+2345678910000",
    sub: "Mon–Fri, 9am–5pm WAT",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria",
    href: null,
    sub: "Serving communities across Nigeria",
  },
];

const quickLinks = [
  { icon: Heart,         label: "Donate",    desc: "Support our programs",          to: "/donate" },
  { icon: HandshakeIcon, label: "Partner",   desc: "Collaborate with us",           to: "/partners" },
  { icon: Users,         label: "Volunteer", desc: "Get involved on the ground",    to: "/volunteer" },
  { icon: Mic2,          label: "Media",     desc: "Press & interview requests",    to: "/media" },
];

const Contact = () => {
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
    formData.append("subject", "New Contact Form Submission — JAM Foundation");
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
        title="Contact JAM Foundation"
        subtitle="Have a question, suggestion, or inquiry? We'd love to hear from you."
        accent="sage"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Quick links */}
          <AnimatedSection>
            <p className="text-sm text-muted-foreground mb-4 font-medium">Looking for something specific?</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
              {quickLinks.map((q) => (
                <Link
                  key={q.label}
                  href={q.to}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-jam-sage/50 transition-all duration-200 group"
                >
                  <div className="h-9 w-9 bg-jam-sage/10 rounded-lg flex items-center justify-center shrink-0">
                    <q.icon className="h-4 w-4 text-jam-sage" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm group-hover:text-jam-sage transition-colors">{q.label}</p>
                    <p className="text-xs text-muted-foreground">{q.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* Left — contact info */}
            <AnimatedSection delay={0.05} className="md:col-span-2">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                      <div className="h-10 w-10 bg-jam-sage/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-jam-sage" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-semibold text-foreground text-sm hover:text-jam-sage transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground text-sm">{item.value}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Media email note */}
                <div className="mt-6 bg-muted border border-border rounded-xl p-5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">For media inquiries</span>, please use{" "}
                    <a href="mailto:media@jamfafrica.org" className="text-jam-sage font-semibold hover:underline underline-offset-4">
                      media@jamfafrica.org
                    </a>{" "}
                    for faster response.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — form or success */}
            <div className="md:col-span-3">
              {submitted ? (
                <AnimatedSection>
                  <div className="bg-jam-charcoal rounded-2xl p-12 text-center">
                    <div className="h-16 w-16 bg-jam-sage rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Thank you for reaching out.</h2>
                    <p className="text-white/70 leading-relaxed mb-8">
                      Your message has been received. A member of our team will get back to you within 2 business days.
                    </p>
                    <Link href="/" className="btn-primary">Back to Home</Link>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection delay={0.1}>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-4"
                  >
                    <h2 className="text-xl font-bold text-foreground mb-2">Send Us a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input name="fullName" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                        <input name="email" required type="email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                        <input name="phone" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                        <select name="subject" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                          <option value="">Select...</option>
                          <option>General Inquiry</option>
                          <option>Donation Question</option>
                          <option>Project Information</option>
                          <option>Partnership</option>
                          <option>Media</option>
                          <option>Volunteering</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-2.5 text-sm text-muted-foreground cursor-pointer">
                        <input type="checkbox" required className="mt-1 rounded shrink-0" />
                        I consent to JAM Foundation contacting me regarding this inquiry.
                      </label>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
                </AnimatedSection>
              )}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;