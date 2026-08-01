"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Holographic logout transition
    router.push("/login");
  };

  return (
    <header className="h-20 bg-[#020202]/80 backdrop-blur-2xl border-b border-white/[0.05] flex items-center justify-between px-6 lg:px-8 flex-shrink-0 relative z-50 sticky top-0">
      
      {/* 🌟 Very subtle bottom glow for the header */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Workspace Breadcrumb/Title */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="h-6 w-[2px] bg-white/10 rounded-full"></div>
          <span className="text-xs font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            Main Workspace
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        
        {/* System Status Indicator (Premium Touch) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">System Optimal</span>
        </div>

        {/* Cinematic Notification Bell */}
        <button className="relative p-2 text-slate-400 hover:text-fuchsia-400 transition-colors group">
          <div className="absolute top-2 right-2.5 w-2 h-2 bg-fuchsia-500 rounded-full border-2 border-[#020202] shadow-[0_0_8px_rgba(217,70,239,0.8)] group-hover:animate-ping"></div>
          <div className="absolute top-2 right-2.5 w-2 h-2 bg-fuchsia-500 rounded-full border-2 border-[#020202]"></div>
          <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

        <div className="flex items-center gap-5">
          {/* Holographic User Avatar */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative h-9 w-9 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center font-bold text-sm text-white shadow-inner">
              M
            </div>
            {/* Online Status Dot */}
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#020202] rounded-full"></div>
          </div>

          {/* Disconnect / Logout Button */}
          <button 
            onClick={handleLogout}
            className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-rose-400 transition-colors flex items-center gap-2 group"
          >
            <span className="hidden sm:block">Disconnect</span>
            <svg className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}