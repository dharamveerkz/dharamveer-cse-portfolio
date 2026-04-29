import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaTelegram } from 'react-icons/fa';
import { SiLeetcode, SiDevdotto, SiDiscord, SiInstagram } from 'react-icons/si';

export default function Contact() {
  const contactDetails = {
    name: "Dharamveer Kumar",
    email: "dharamveerkumar774@mail.com",
    phone: "+91 79037 97952",
    location: "Patna, Bihar, India",
    whatsapp: "https://wa.me/917903797952",
  };

  const techLinks = [
    { name: "GitHub", href: "https://github.com/dharamveerkr", icon: <FaGithub />, desc: "Code repositories" },
    { name: "LeetCode", href: "https://leetcode.com/dharamveerkr", icon: <SiLeetcode />, desc: "Problem solving" },
    { name: "Dev.to", href: "https://dev.to/dharamveerkr", icon: <SiDevdotto />, desc: "Technical blogs" },
    { name: "Discord", href: "https://discord.gg/8UNmN7eD", icon: <SiDiscord />, desc: "Community chats" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/dharamveerkr", icon: <FaLinkedin /> },
    { name: "Twitter", href: "https://twitter.com/imdharamvrr", icon: <FaTwitter /> },
    { name: "Instagram", href: "https://instagram.com/imdharamvrr", icon: <SiInstagram /> },
    { name: "Facebook", href: "https://facebook.com/imdharamvrr", icon: <FaFacebook /> },
    { name: "Telegram", href: "https://t.me/imdharamvrr", icon: <FaTelegram /> },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white">
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
          </div>          <div className="p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
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
            <FaTwitter className="w-5 h-5" /> Send Email
          </a>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-lg"
          >
            <SiTelegram className="w-5 h-5" /> WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaGithub className="w-6 h-6" /> Technology Profiles
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
                  <span className="text-2xl text-white group-hover:text-blue-200 transition">{link.icon}</span>
                  <div>
                    <p className="font-semibold group-hover:text-blue-200 transition">{link.name}</p>                    <p className="text-xs text-blue-200">{link.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaLinkedin className="w-6 h-6" /> Social Media
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
                  <span className="text-xl text-white group-hover:text-blue-200 transition">{link.icon}</span>
                  <span className="font-medium group-hover:text-blue-200 transition">{link.name}</span>
                </a>
              ))}
            </div>
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