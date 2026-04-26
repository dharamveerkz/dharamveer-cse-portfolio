import Link from "next/link";
export default function Home() {
  const techs = ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "TensorFlow", "Tailwind CSS"];
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6">
      <div className="max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Open to Opportunities
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-black tracking-tight">Dharamveer <span className="text-blue-600">Kumar</span></h1>
        <p className="text-lg md:text-xl text-slate-600 font-light">Software Engineer & Full-Stack Developer</p>
        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">Building scalable web applications, intelligent AI solutions, and data-driven systems. Specializing in real-world projects that bridge engineering rigor with product impact.</p>
        <div className="flex flex-wrap justify-center gap-3 font-mono text-xs font-medium">
          {techs.map(t => <span key={t} className="px-3 py-1 bg-white border border-blue-200 rounded-md text-blue-700 shadow-sm">{t}</span>)}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">View Projects →</Link>
          <Link href="/contact" className="px-6 py-3 bg-white border border-slate-200 text-slate-800 font-semibold rounded-lg hover:border-blue-300 hover:text-blue-600 transition">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
