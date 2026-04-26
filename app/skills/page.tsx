const categories = [
  { icon: "🎨", domain: "Frontend", tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion", "Figma"] },
  { icon: "⚙️", domain: "Backend", tags: ["Node.js", "Express", "Python", "Flask", "FastAPI", "REST APIs", "JWT Auth", "RBAC"] },
  { icon: "🤖", domain: "AI / ML", tags: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Streamlit", "NLP", "CNN", "ResNet"] },
  { icon: "📊", domain: "Data Analytics", tags: ["SQL", "PostgreSQL", "MongoDB", "Data Cleaning", "ETL Pipelines", "Matplotlib", "Seaborn"] },
  { icon: "🗄️", domain: "Databases", tags: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Supabase", "Firebase", "Redis"] },
  { icon: "🚀", domain: "DevOps & Tools", tags: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code", "Docker", "Linux CLI"] },
];

export default function Skills() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ Technical Expertise</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Tools & Technologies</h2>
      <p className="text-slate-600 mb-10 max-w-2xl">A full-spectrum engineering toolkit spanning frontend, backend, AI/ML, data analytics, databases, and DevOps.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">{cat.icon}</div>
            <h3 className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{cat.domain}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map(t => <span key={t} className="px-2 py-1 bg-white border border-blue-100 rounded text-xs text-slate-600 font-mono">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
