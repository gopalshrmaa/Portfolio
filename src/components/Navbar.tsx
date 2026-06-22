import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#070617]/60 via-transparent backdrop-blur-sm border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-xl font-semibold text-pink-400">Pari <span className="text-white">Jain</span></a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#stack" className="hover:text-white transition">Stack</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-medium hover:opacity-95 transition">Hire me</a>
        </div>
      </div>
    </nav>
  );
}
