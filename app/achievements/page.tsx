const achievements = [
  { icon: "📱", text: "Managed 5+ official college social media pages simultaneously" },
  { icon: "📈", text: "Grew Instagram organic reach 3× during placement season" },
  { icon: "🎨", text: "Designed 200+ visual assets for events, campaigns, and branding" },
  { icon: "👩‍💻", text: "Trained 15+ student volunteers in content creation and basic design" },
  { icon: "🎪", text: "Coordinated 10+ college-wide events with unified visual identity" },
  { icon: "🏗️", text: "Built reusable content systems adopted by multiple student bodies" },
  { icon: "🧠", text: "AI model achieving 99.24% accuracy on medical image classification" },
  { icon: "🏆", text: "Photography award winner — inter-school competition" },
];

export default function Achievements() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ Key Achievements</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Milestones & Impact</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="text-2xl flex-shrink-0">{a.icon}</span>
            <p className="text-slate-700 font-medium text-sm leading-snug">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
