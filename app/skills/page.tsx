const categories = [
  {
    icon: "🧩",
    domain: "Core CSE",
    tags: ["DSA", "Problem Solving", "OOPs", "DBMS", "OS", "Computer Networks"]
  },
  {
    icon: "🧠",
    domain: "Full Stack (Next.js)",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Next.js APIs", "Server Actions", "REST APIs", "JWT Auth"]
  },
  {
    icon: "🗄️",
    domain: "Database",
    tags: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"]
  },
  {
    icon: "🚀",
    domain: "Deployment & Tools",
    tags: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code"]
  },
  {
    icon: "🎨",
    domain: "Design & Visual",
    tags: ["UI/UX Design", "Graphic Design", "Branding", "Visual Storytelling"]
  },
  {
    icon: "🤖",
    domain: "AI / ML",
    tags: ["LLMs", "PyTorch", "Torchvision", "TorchCAM", "NumPy", "Matplotlib", "Scikit-learn", "OpenCV", "Streamlit"]
  },
  {
    icon: "📸",
    domain: "Extracurricular",
    tags: ["Photography", "Photo Editing", "Video Editing", "Social Media Strategy", "Content Creation"]
  }
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
