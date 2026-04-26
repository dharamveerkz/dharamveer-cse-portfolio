import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm mt-auto">
      <p>© {new Date().getFullYear()} Dharamveer Kumar · Built with care · <Link href="/" className="text-blue-400 hover:underline">Back to top ↑</Link></p>
    </footer>
  );
}
