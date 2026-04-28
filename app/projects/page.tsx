const projects = [
  { 
    title: "Brain Tumor Classification", 
    desc: "Attention-enhanced CNN using ResNet-18 with CBAM attention mechanism. Deployed as an interactive Streamlit web app.", 
    stack: ["Python", "PyTorch", "ResNet-18", "CBAM", "Streamlit"], 
    badge: "AI / ML", 
    highlight: "99.24% Accuracy",
    demoUrl: "https://your-brain-tumor-app.streamlit.app",
    githubUrl: "https://github.com/your-username/brain-tumor-classification"
  },
  { 
    title: "Job Recommendation Engine", 
    desc: "Analyzes resume text using TF-IDF & semantic embeddings to match candidates with optimal career paths.", 
    stack: ["Python", "NLP", "TensorFlow", "Flask", "Scikit-learn"], 
    badge: "AI / ML",
    demoUrl: "https://smartjobrecommendation.streamlit.app/",
    githubUrl: "https://github.com/dharamveerkz/SmartJob_recommendation"
  },
  { 
    title: "Vidyalaya ERP System", 
    desc: "Role-based school management platform with attendance, grade management, fee processing, and secure JWT authentication.", 
    stack: ["React 18", "Node.js", "MySQL", "JWT", "RBAC"], 
    badge: "Full-Stack", 
    highlight: "27-File Production System",
    demoUrl: "https://vidyalaya-erp-demo.vercel.app",
    githubUrl: "https://github.com/your-username/vidyalaya-erp"
  },
  { 
    title: "My Photography Hub", 
    desc: "A personal photography portfolio with integrated micro-learning.", 
    stack: ["React", "Tailwind", "TypeScript", "terser", "sharp"], 
    badge: "SaaS",
    demoUrl: "https://dharamveer-photography-hub.vercel.app/",
    githubUrl: "https://github.com/dharamveerkz/my-photography-gallery"
  },
  { 
    title: "internwin- Educational Platform", 
    desc: "High-performance internship platform with verified certificates & ABC Bank credits.", 
    stack: ["Next.js 16", "Tailwind", "mongodb", "Framer Motion"], 
    badge: "Frontend",
    highlight: "Live Sync Across Devices",
    demoUrl: "https://internwin-platform-three.vercel.app/",
    githubUrl: "https://github.com/dharamveerkz/internwin-platform"
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ Portfolio</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Projects Built for Real Impact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="relative p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all">
            <span className={`absolute top-6 right-6 px-2 py-1 text-xs font-bold uppercase rounded border ${p.badge.includes("AI") ? "bg-blue-50 text-blue-700 border-blue-200" : p.badge.includes("Full") ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-slate-50 text-slate-700 border-slate-200"}`}>{p.badge}</span>
            <h3 className="font-playfair text-xl font-bold mb-2">{p.title}</h3>
            {p.highlight && <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600 pl-2 py-1 rounded-r mb-2">{p.highlight}</div>}
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map(s => <span key={s} className="px-2 py-1 bg-blue-50 border border-blue-100 rounded text-xs font-mono text-blue-700">{s}</span>)}
            </div>
            <div className="flex gap-3">
              {p.demoUrl ? (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition inline-block"
                >
                  Live Demo ↗
                </a>
              ) : (
                <span className="px-4 py-2 bg-slate-100 text-slate-400 text-sm font-semibold rounded cursor-default">Demo Unavailable</span>
              )}
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white border border-slate-200 text-sm font-semibold rounded hover:border-blue-300 hover:text-blue-600 transition inline-block"
                >
                  GitHub ↗
                </a>
              ) : (
                <span className="px-4 py-2 bg-slate-100 text-slate-400 text-sm font-semibold rounded cursor-default">Code Private</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}