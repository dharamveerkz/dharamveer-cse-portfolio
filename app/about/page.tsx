export default function About() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ About</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Academic Foundation & Technical Journey</h2>
      <blockquote className="text-lg italic text-slate-600 border-l-4 border-blue-400 pl-4 mb-6">"I engineer systems that solve real problems. From full-stack web apps to AI models trained on real-world data, I combine academic rigor with hands-on development."</blockquote>
      <p className="text-slate-600 mb-4 leading-relaxed">B.Tech CSE graduate from Bakhtiyarpur College of Engineering, Patna, with deep focus on Data Structures, Algorithms, DBMS, Machine Learning, and Web Technologies. After core academics, I doubled down on modern full-stack and AI/ML engineering through structured self-paced learning and real-world project development.</p>
      <p className="text-slate-600 mb-8 leading-relaxed">I've shipped production-ready systems — from a 27-file school ERP with JWT auth and RBAC to a brain tumor classifier achieving 99.24% accuracy — and actively contributed to open source via Hacktoberfest 2023.</p>
      
      <h3 className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wide mb-3">Post-Grad Upskilling</h3>
      <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs font-medium">
        {["Next.js 14+", "React 18", "TypeScript", "Server Actions", "Prisma ORM", "Redis", "PyTorch", "FastAPI", "Docker basics", "CI/CD"].map(s => (
          <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700">{s}</span>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { d: "🎓 B.Tech — Computer Science & Engineering", s: "Bakhtiyarpur College of Engineering, Patna", g: "CGPA: 7.66 / 10" },
          { d: "📚 I.Sc (PCM)", s: "Holy Kids International School, Chhapra", g: "82%" },
          { d: "📚 Matriculation", s: "Shiksha Niketan School, Hajipur", g: "86.3%" }
        ].map((edu, i) => (
          <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-lg shadow-sm">
            <div className="font-bold text-slate-900">{edu.d}</div>
            <div className="text-sm text-slate-600 mb-2">{edu.s}</div>
            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 font-mono font-bold text-xs rounded">{edu.g}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
