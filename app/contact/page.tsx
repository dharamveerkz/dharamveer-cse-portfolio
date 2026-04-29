import Link from "next/link";

// Reusable SVG Icon Component for brand logos
const BrandIcon = ({ svg, label }) => (
  <span 
    className="flex-shrink-0 w-6 h-6" 
    role="img" 
    aria-label={label}
    dangerouslySetInnerHTML={{ __html: svg }} 
  />
);

// Brand SVGs (sourced from https://simpleicons.org/)
const BRAND_SVGS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  leetcode: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.695 17.311c.243-.383.624-.458.966-.28l2.46 1.277c.246.128.546.083.743-.11l3.92-3.842a.682.682 0 0 1 .868-.074l2.28 1.566c.262.18.61.15.837-.072l6.82-6.688a.68.68 0 0 1 .86-.072l2.46 1.68c.31.212.39.63.177.94l-1.35 1.96c-.212.31-.63.39-.94.178l-1.99-1.36-6.25 6.13a.682.682 0 0 1-.868.074l-2.28-1.566-3.49 3.42a.682.682 0 0 1-.868.074l-3.28-1.704c-.334-.174-.46-.586-.286-.92l.88-1.69z"/></svg>`,
  devto: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.58 8.02v7.96h1.44V9.63h.04l1.68 6.35h1.22l1.67-6.35h.05v6.35h1.44V8.02h-2.02L11.37 13h-.05L9.6 8.02H7.58zm12.84 0h-3.8v1.36h1.68v6.6h1.44V9.38h1.68V8.02zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 17.97L4.58 13.62 19.54 3.5l-13.06 18.47z"/><path d="M12.01 12.01l-3.12 6.94 7.2-7.2z"/></svg>`,
};

export default function Contact() {
  const contactDetails = {
    name: "Dharamveer Kumar",
    email: "dharamveerkumar774@mail.com",
    phone: "+91 79037 97952",
    location: "Patna, Bihar, India",
    whatsapp: "https://wa.me/917903797952",
  };

  const techLinks = [
    { name: "GitHub", href: "https://github.com/dharamveerkr", icon: BRAND_SVGS.github, desc: "Code repositories" },
    { name: "LeetCode", href: "https://leetcode.com/dharamveerkr", icon: BRAND_SVGS.leetcode, desc: "Problem solving" },
    { name: "Dev.to", href: "https://dev.to/dharamveerkr", icon: BRAND_SVGS.devto, desc: "Technical blogs" },
    { name: "Discord", href: "https://discord.gg/8UNmN7eD", icon: BRAND_SVGS.discord, desc: "Community chats" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/dharamveerkr", icon: BRAND_SVGS.linkedin },
    { name: "Twitter", href: "https://twitter.com/imdharamvrr", icon: BRAND_SVGS.twitter },
    { name: "Instagram", href: "https://instagram.com/imdharamvrr", icon: BRAND_SVGS.instagram },
    { name: "Facebook", href: "https://facebook.com/imdharamvrr", icon: BRAND_SVGS.facebook },
    { name: "Telegram", href: "https://t.me/imdharamvrr", icon: BRAND_SVGS.telegram },
  ];

  return (    <section className="px-6 py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">/ Contact</p>
          <h2 className="font-playfair text-4xl font-black mb-4">Let's Connect</h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            Open to opportunities, collaborations, and tech discussions. Let's build something amazing together!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
            <p className="text-xs text-blue-200 uppercase mb-1">Name</p>
            <p className="font-semibold">{contactDetails.name}</p>
          </div>
          <div className="p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
            <p className="text-xs text-blue-200 uppercase mb-1">Location</p>
            <p className="font-semibold">{contactDetails.location}</p>
          </div>
          <div className="p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
            <p className="text-xs text-blue-200 uppercase mb-1">Phone</p>
            <a href={`tel:${contactDetails.phone}`} className="font-semibold hover:text-blue-200">
              {contactDetails.phone}
            </a>
          </div>
          <div className="p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
            <p className="text-xs text-blue-200 uppercase mb-1">Email</p>
            <a href={`mailto:${contactDetails.email}`} className="font-semibold hover:text-blue-200 break-all">
              {contactDetails.email}
            </a>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={`mailto:${contactDetails.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition shadow-lg"
          >
            <BrandIcon svg={BRAND_SVGS.twitter} label="Email" /> Send Email
          </a>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-lg"
          >
            {/* WhatsApp SVG */}            <span className="flex-shrink-0 w-6 h-6" role="img" aria-label="WhatsApp"
              dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>` }}
            /> WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BrandIcon svg={BRAND_SVGS.github} label="Technology" /> Technology Profiles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group"
                >
                  <BrandIcon svg={link.icon} label={link.name} />
                  <div>
                    <p className="font-semibold group-hover:text-blue-200 transition">{link.name}</p>
                    <p className="text-xs text-blue-200">{link.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BrandIcon svg={BRAND_SVGS.linkedin} label="Social" /> Social Media
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group"
                  aria-label={link.name}
                >
                  <BrandIcon svg={link.icon} label={link.name} />
                  <span className="font-medium group-hover:text-blue-200 transition">{link.name}</span>
                </a>
              ))}            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-blue-200/80">
          <p>📍 Based in Patna, Bihar • Available for remote work worldwide</p>
          <p className="mt-2">Response time: Usually within 24 hours</p>
        </div>
      </div>
    </section>
  );
}