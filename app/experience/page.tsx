const roles = [
  { role: "T&P Cell Core Member & Social Media Lead", org: "Bakhtiyarpur College of Engineering, Patna", date: "2023 – 2024", bullets: ["Managed all official college social media during placement season", "Produced placement highlights, recruiter spotlights, alumni success stories", "Executed data-driven content calendars with trend-based posting"] },
  { role: "Alumni Association — Management Team & Content Strategist", org: "Bakhtiyarpur College of Engineering, Patna", date: "2023 – 2024", bullets: ["Managed alumni engagement, networking events, mentorship promotions", "Designed monthly alumni spotlight series — boosted interaction by 40%", "Built reusable content templates for announcements & reunions"] },
  { role: "Media Team Lead", org: "NGO Aashraya", date: "2023 – Present", bullets: ["Led media team for social-impact campaigns: plantation, blood donation, awareness events", "Managed Instagram with content calendar, reels, stories, and community engagement", "Designed all event branding: banners, volunteer IDs, digital creatives"] },
];

export default function Experience() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">/ Leadership & Experience</p>
      <h2 className="font-playfair text-4xl font-black mb-8">Campus Impact & Community Work</h2>
      <div className="relative border-l-2 border-blue-200 ml-4 space-y-10">
        {roles.map((r, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-blue-400 rounded-full"></div>
            <h3 className="font-bold text-lg text-slate-900">{r.role}</h3>
            <p className="text-blue-600 font-semibold text-sm">{r.org}</p>
            <p className="font-mono text-xs text-slate-500 mb-3">{r.date}</p>
            <ul className="list-none space-y-2">
              {r.bullets.map((b, j) => <li key={j} className="text-slate-600 text-sm pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-600">{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
