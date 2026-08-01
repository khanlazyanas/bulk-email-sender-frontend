"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  // Premium SVG Icons replacing standard emojis
  const navItems = [
    { 
      name: "Dashboard", 
      href: "/dashboard", 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      name: "Compose Email", 
      href: "/compose", 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: "Contact Database", 
      href: "/contacts", 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  return (
    <aside className="w-64 bg-[#020202]/90 backdrop-blur-3xl border-r border-white/[0.05] flex-shrink-0 hidden md:flex flex-col h-full relative z-40">
      
      {/* Subtle Side Glow */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>

      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-white/[0.05]">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 p-[1px] shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]">
            <div className="w-full h-full bg-black/95 rounded-[11px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 font-black">M</span>
            </div>
          </div>
          Mail<span className="text-fuchsia-500">Sender</span>
        </h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2 custom-scrollbar">
        <div className="px-3 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Main Menu</div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden ${
                isActive 
                  ? "text-white bg-indigo-500/10 border border-indigo-500/20 shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]" 
                  : "text-slate-400 hover:text-white hover:bg-white/[0.02] border border-transparent"
              }`}
            >
              {/* Active State Glow background */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 opacity-50 pointer-events-none"></div>
              )}
              
              {/* Active State Left Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-400 to-fuchsia-400 rounded-r-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
              )}

              <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" : "group-hover:text-fuchsia-400"}`}>
                {item.icon}
              </span>
              <span className="relative z-10 tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Futuristic Telemetry/Usage Widget */}
      <div className="p-4 border-t border-white/[0.05] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="bg-[#050505] p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
          {/* Inner ambient glow */}
          <div className="absolute -inset-10 bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
          
          <div className="relative z-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">System Quota</p>
            
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400 font-medium">Packets Sent</span>
              <span className="font-bold text-white font-mono tracking-tight">4,250 <span className="text-slate-500">/ 10k</span></span>
            </div>
            
            {/* Glowing Progress Bar */}
            <div className="w-full bg-[#0a0a0a] rounded-full h-1.5 border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 blur-sm w-[42.5%]"></div>
              <div 
                className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 h-full rounded-full relative shadow-[0_0_10px_rgba(168,85,247,0.8)]" 
                style={{ width: "42.5%" }}
              >
                {/* Pulse highlight on the progress bar */}
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 rounded-full blur-[1px] animate-pulse"></div>
              </div>
            </div>
            <p className="text-[10px] text-emerald-400 mt-3 font-semibold flex items-center gap-1.5 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Network Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}