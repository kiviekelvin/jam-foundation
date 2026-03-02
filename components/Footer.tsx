"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
const jamLogo = "/jam-logo.png";

const footerLinks = [
  {
    heading: "About",
    color: "text-jam-sage",
    links: [
      { label: "Our Approach",          to: "/our-approach" },
      { label: "Founder's Message",     to: "/founders-message" },
      { label: "Governance",            to: "/governance" },
      { label: "Legal Status",          to: "/legal-status" },
    ],
  },
  {
    heading: "Our Work",
    color: "text-jam-orange",
    links: [
      { label: "Projects",              to: "/projects" },
      { label: "Impact",                to: "/impact" },
      { label: "Stories From the Field",to: "/stories" },
      { label: "Photo Gallery",         to: "/gallery" },
      { label: "Media & Press",         to: "/media" },
    ],
  },
  {
    heading: "Get Involved",
    color: "text-jam-purple",
    links: [
      { label: "The JAM Circle",        to: "/jam-circle" },
      { label: "Volunteer",             to: "/volunteer" },
      { label: "Partners",              to: "/partners" },
      { label: "Why Donate",            to: "/why-donate" },
      { label: "Contact Us",            to: "/contact" },
    ],
  },
  {
    heading: "Transparency & Legal",
    color: "text-jam-clay",
    links: [
      { label: "Financial Transparency",to: "/financial-transparency" },
      { label: "FAQs",                  to: "/faqs" },
      { label: "Privacy Policy",        to: "/privacy-policy" },
      { label: "Terms of Use",          to: "/terms-of-use" },
      { label: "Non-Discrimination",    to: "/non-discrimination" },
    ],
  },
];

const socials = [
  { icon: Facebook,  href: "https://facebook.com/jamfafrica",         label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/jamfafrica",        label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com/jamfafrica",          label: "Twitter / X" },
  { icon: Linkedin,  href: "https://linkedin.com/company/jamfafrica", label: "LinkedIn" },
  { icon: Youtube,   href: "https://youtube.com/@jamfafrica",         label: "YouTube" },
];

const Footer = () => (
  <footer className="section-charcoal">

    {/* JAM Circle CTA banner */}
    <div className="bg-jam-sage/15 border-b border-jam-sage/20">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <p className="text-white font-bold text-sm">Prefer to make lasting impact?</p>
          <p className="text-white/50 text-xs">Monthly giving from $20/month helps us plan, respond, and rebuild, month after month.</p>
        </div>
        <Link
          href="/jam-circle"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-jam-sage text-white text-sm font-semibold hover:bg-jam-sage/90 hover:-translate-y-0.5 transition-all duration-200"
        >
          Join the JAM Circle <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    <div className="container mx-auto px-4 pt-16 pb-10">

      {/* Top — logo + tagline + links */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-14">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/">
            <img src={jamLogo} alt="JAM Foundation" className="h-14 w-auto rounded-lg mb-4" />
          </Link>
          <p className="text-xs text-white/40 leading-relaxed mb-5">
            Restoring dignity, rebuilding livelihoods, and protecting the next generation — across Nigeria and beyond.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/25 hover:text-jam-sage transition-colors duration-200"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className={`text-xs font-bold uppercase tracking-[0.2em] ${col.color} mb-4`}>
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Contact info */}
        <div className="flex flex-wrap items-center gap-5 text-xs text-white/30">
          <a href="mailto:info@jamfafrica.org" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5" /> info@jamfafrica.org
          </a>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> +234-567-891-0000
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Nigeria
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/20 text-center md:text-right">
          © {new Date().getFullYear()} JAM Foundation (Joshua Ahante Memorial Foundation).<br className="hidden md:block" />
          Incorporated Trustee · Nigeria · All donations used strictly in line with our mission.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;