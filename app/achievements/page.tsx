const achievements = [
  { icon: "🎯", text: "99.24% accuracy on brain tumor classification model (PyTorch/CNN)" },
  { icon: "📜", text: "5 NPTEL certification courses in AI/ML & Core CS" },
  { icon: "🤝", text: "Hacktoberfest contributor — 4+ open-source repositories" },
  { icon: "⚡", text: "10+ projects built with Next.js, React, Python, and ML frameworks" },
  { icon: "📚", text: "Core CS expertise: DSA, DBMS, OS, Algorithms, Machine Learning" },
  { icon: "👥", text: "Core team member & lead coordinator for college technical initiatives" },
  { icon: "🌐", text: "Founded College Alumni Association — built mentorship & engagement systems" },
  { icon: "🏆", text: "Award winner in photography & inter-college competitions" },
  { icon: "🤖", text: "Advanced AI practitioner — leveraging AI & automation for development & productivity" }
];

export default function Achievements() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ Key Achievements</p>
      <h2 className="font-playfair text-4xl font-black mb-8 text-slate-900">Milestones & Impact</h2>
      
      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <div 
            key={i} 
            className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <span className="text-2xl flex-shrink-0">{a.icon}</span>
            <p className="text-slate-700 font-medium text-sm leading-snug">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}