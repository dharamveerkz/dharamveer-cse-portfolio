import Link from "next/link";
export default function Contact() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white text-center">
      <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">/ Contact</p>
      <h2 className="font-playfair text-4xl font-black mb-4">Let's Build Something Together</h2>
      <p className="text-blue-100 max-w-xl mx-auto mb-10">Open to full-time roles, freelance projects, and collaborations in full-stack development, AI/ML, and data engineering. Based in Bihar, India — available remotely worldwide.</p>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Link href="mailto:dharamveer@example.com" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">✉️ Email</Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">💼 LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">⌨️ GitHub</a>
      </div>
      <Link href="mailto:dharamveer@example.com" className="font-mono text-xl font-bold border-b-2 border-white/40 hover:border-white transition pb-1">dharamveer@example.com</Link>
    </section>
  );
}
