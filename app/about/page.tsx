export default function About() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ About</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Academic Foundation & Technical Journey</h2>
      <blockquote className="text-lg italic text-slate-600 border-l-4 border-blue-400 pl-4 mb-6">B.Tech CSE graduate from Bakhtiyarpur College of Engineering, Patna, with strong foundations in Data Structures, Algorithms, and System Design. I combine academic knowledge with modern full-stack and AI/ML engineering practices.</blockquote>
      <p className="text-slate-600 mb-4 leading-relaxed">I build scalable applications using Next.js, React, TypeScript, and Python-based AI frameworks, focusing on clean architecture, performance, and user-centric solutions.</p>
      <p className="text-slate-600 mb-8 leading-relaxed">Currently seeking opportunities in Full-Stack Development, AI/ML Engineering, or Data Analytics to build impactful, data-driven solutions.</p>
      
      <h3 className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wide mb-3">
  Post-Grad Upskilling
</h3>

<div className="flex flex-wrap gap-2 mb-6 font-mono text-xs font-medium">
  {[
    "Next.js 16",
    "Data Analytics (SQL, Power BI)",
    "Backend Scaling (FastAPI, Microservices)",
    "DevOps (Docker, Deployment Pipelines)",
    "AI Integration (LLMs, Automation)"
  ].map(s => (
    <span
      key={s}
      className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700"
    >
      {s}
    </span>
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
