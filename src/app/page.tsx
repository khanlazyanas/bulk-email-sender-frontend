"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-100 text-slate-50">
      
      {/* 🌌 Ultra-Deep Space & Holographic Aurora */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Rotating Ambient Orbs */}
      <div className="absolute top-[-30%] left-[-10%] w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none animate-[spin_40s_linear_infinite]"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none animate-[spin_30s_linear_infinite_reverse]"></div>
      <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🚀 Cinematic Top Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/[0.03] backdrop-blur-3xl">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-b from-indigo-400 to-fuchsia-600 p-[1px] shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_40px_0px_rgba(139,92,246,0.7)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-full h-full bg-black/95 backdrop-blur-2xl rounded-[15px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <span className="font-bold tracking-tight text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-fuchsia-300 transition-all duration-500">MailSender<span className="text-fuchsia-500">.</span></span>
        </div>
        
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/login" className="hidden sm:block text-sm font-semibold text-slate-400 hover:text-white transition-colors tracking-wide">
            Sign In
          </Link>
          
          <Link href="/login" className="relative inline-flex h-10 sm:h-11 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] transition-all duration-500">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#a855f7_50%,#E2CBFF_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#050505] px-5 sm:px-7 py-1 text-xs sm:text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-[#050505]/60 gap-2">
              Start Building
            </span>
          </Link>
        </div>
      </nav>

      {/* ✨ Cinematic Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 relative">
          
          {/* Floating Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Premium Pill Badge */}
          <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] cursor-default group hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors relative z-10">Next.js Architecture Live</span>
          </div>

          {/* Epic God-Tier Heading with Breathing Glow */}
          <div className="space-y-4 sm:space-y-6 relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 leading-[1.1] pb-2 drop-shadow-2xl">
              Outreach, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400 filter drop-shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-pulse">
                Perfected for Scale.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed px-4 sm:px-0">
              The ultimate bulk email engine. Lightning-fast UI, real-time analytics, and a developer-first ecosystem built for modern teams.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-6 sm:pt-8 relative z-10 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              href="/login" 
              className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none group w-full sm:w-auto hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.7)] transition-shadow duration-500"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#6366f1_50%,#c084fc_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-[#020202] px-10 py-2 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-[#020202]/70 gap-3">
                Deploy Campaign
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-fuchsia-400 group-hover:text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link 
              href="https://github.com/khanlazyanas/bulk-email-sender-frontend" 
              target="_blank"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-300 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl transition-all backdrop-blur-xl shadow-lg"
            >
              <svg className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View GitHub Repo
            </Link>
          </div>
        </div>

        {/* 💻 The Masterpiece: 3D Holographic Dashboard Mockup */}
        <div className="mt-20 sm:mt-28 w-full max-w-6xl mx-auto relative group perspective px-2 sm:px-6" style={{ perspective: '2500px' }}>
          
          {/* 🔥 FIXED FOR MOBILE: Floating Holographic Metric Card (Left) 🔥 */}
          {/* Using `flex` instead of `hidden`, and carefully positioning via negative margins and smaller scales on mobile */}
          <div className="absolute -left-2 sm:-left-12 -top-6 sm:top-20 z-40 flex flex-col gap-1 bg-[#050505]/95 backdrop-blur-3xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] animate-[bounce_4s_infinite] pointer-events-none scale-[0.75] sm:scale-100 origin-top-left">
            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Delivery Rate</div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">99.8%</div>
            <div className="text-[9px] sm:text-[10px] text-emerald-500/80 flex items-center gap-1"><svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> +2.4% today</div>
          </div>

          {/* 🔥 FIXED FOR MOBILE: Floating Holographic Metric Card (Right) 🔥 */}
          <div className="absolute -right-2 sm:-right-8 -bottom-6 sm:bottom-32 z-40 flex flex-col gap-1 bg-[#050505]/95 backdrop-blur-3xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] animate-[bounce_5s_infinite_0.5s] pointer-events-none scale-[0.75] sm:scale-100 origin-bottom-right">
            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Emails Sent</div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">1.2M+</div>
            <div className="flex -space-x-1.5 sm:-space-x-2 mt-1">
               <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-500 border border-[#050505]"></div>
               <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 border border-[#050505]"></div>
               <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 border border-[#050505]"></div>
            </div>
          </div>

          {/* Intense Glowing Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[100%] h-[90%] sm:h-[100%] bg-indigo-600/20 blur-[100px] sm:blur-[150px] rounded-[3rem] group-hover:bg-fuchsia-600/25 transition-all duration-1000 pointer-events-none"></div>
          
          {/* Main 3D Container - Scaled softly for mobile */}
          <div className="relative rounded-xl sm:rounded-[2rem] border border-white/10 bg-[#030303]/90 backdrop-blur-3xl shadow-[0_0_100px_-20px_rgba(139,92,246,0.4)] [transform:rotateX(5deg)_scale(1)] sm:[transform:rotateX(15deg)_scale(0.95)_translateY(-20px)] sm:group-hover:[transform:rotateX(0deg)_scale(1)_translateY(0)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden mt-4">
            
            {/* The Glare Sweep Effect */}
            <div className="absolute inset-0 z-50 bg-gradient-to-tr from-white/0 via-white/[0.07] to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>

            {/* Top Browser Bar */}
            <div className="flex items-center gap-2 px-3 sm:px-5 py-3 sm:py-4 border-b border-white/5 bg-white/[0.01]">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
              <div className="ml-3 sm:ml-6 px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.03] text-[10px] sm:text-xs text-slate-400 font-semibold font-mono border border-white/5 flex items-center gap-2 shadow-inner">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                app.mailsender.com/dashboard
              </div>
            </div>

            {/* 🔥 Ultra-Premium Dashboard UI Inside 🔥 */}
            <div className="bg-[#010101] aspect-[4/3] sm:aspect-[21/9] relative flex overflow-hidden">
               {/* Precision Grid Pattern */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
               
               {/* Left Sidebar (Hidden on ultra-small screens for realism) */}
               <div className="hidden md:flex flex-col w-[280px] h-full border-r border-white/5 p-6 space-y-8 bg-white/[0.01] relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center animate-pulse"><div className="w-3 h-3 bg-indigo-400 rounded-sm"></div></div>
                    <div className="h-5 w-24 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-5 w-full bg-white/[0.08] rounded-md border border-white/[0.02]"></div>
                    <div className="h-5 w-5/6 bg-white/[0.03] rounded-md"></div>
                    <div className="h-5 w-4/5 bg-white/[0.03] rounded-md"></div>
                    <div className="h-5 w-full bg-white/[0.03] rounded-md"></div>
                  </div>
                  
                  {/* Dynamic Sidebar Chart */}
                  <div className="mt-auto h-32 w-full bg-gradient-to-t from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-xl relative overflow-hidden">
                     <div className="absolute bottom-0 w-full h-[2px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
                  </div>
               </div>

               {/* Main Content Area */}
               <div className="flex-1 p-4 sm:p-8 relative z-10 flex flex-col gap-4 sm:gap-8">
                  {/* Top Header Fake */}
                  <div className="flex justify-between items-center w-full">
                     <div className="space-y-1 sm:space-y-2">
                        <div className="h-6 sm:h-8 w-32 sm:w-48 bg-white/10 rounded-lg"></div>
                        <div className="h-3 sm:h-4 w-20 sm:w-32 bg-white/5 rounded-md"></div>
                     </div>
                     <div className="flex gap-2 sm:gap-4 items-center">
                        <div className="h-8 sm:h-10 w-20 sm:w-32 bg-white/5 border border-white/10 rounded-lg"></div>
                        <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-[2px]"><div className="w-full h-full bg-black rounded-full"></div></div>
                     </div>
                  </div>
                  
                  {/* High-End Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                     <div className="h-20 sm:h-28 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/30 transition-colors duration-700">
                        <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-500/10 blur-xl rounded-full"></div>
                        <div className="h-3 sm:h-4 w-16 sm:w-24 bg-white/20 rounded"></div>
                        <div className="h-6 sm:h-8 w-20 sm:w-32 bg-white/80 rounded"></div>
                     </div>
                     <div className="h-20 sm:h-28 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-fuchsia-500/30 transition-colors duration-700 delay-100">
                        <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-fuchsia-500/10 blur-xl rounded-full"></div>
                        <div className="h-3 sm:h-4 w-16 sm:w-24 bg-white/20 rounded"></div>
                        <div className="h-6 sm:h-8 w-20 sm:w-32 bg-white/80 rounded"></div>
                     </div>
                     <div className="hidden sm:flex h-28 bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex-col justify-between relative overflow-hidden group-hover:border-rose-500/30 transition-colors duration-700 delay-200">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-xl rounded-full"></div>
                        <div className="h-4 w-24 bg-white/20 rounded"></div>
                        <div className="h-8 w-32 bg-white/80 rounded"></div>
                     </div>
                  </div>

                  {/* 📈 REAL-TIME SVG LINE CHART 📈 */}
                  <div className="flex-1 bg-white/[0.01] border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center mb-4 sm:mb-6 z-10">
                       <div className="h-4 sm:h-5 w-24 sm:w-40 bg-white/20 rounded"></div>
                       <div className="h-5 sm:h-6 w-16 sm:w-24 bg-white/5 rounded-full border border-white/10"></div>
                    </div>
                    
                    {/* The Chart Vector Graph */}
                    <div className="absolute inset-x-0 bottom-0 h-[60%] sm:h-[70%] w-full flex items-end">
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-indigo-500/5 to-transparent w-full [clip-path:polygon(0%_100%,0%_60%,15%_65%,35%_40%,50%_50%,70%_20%,85%_35%,100%_10%,100%_100%)]"></div>
                      
                      <svg className="w-full h-full preserve-3d" viewBox="0 0 1000 300" preserveAspectRatio="none">
                        <path 
                          d="M0,200 C150,220 200,100 350,150 C500,200 600,50 700,80 C850,120 950,20 1000,40" 
                          fill="none" 
                          stroke="url(#gradient)" 
                          strokeWidth="6" 
                          className="drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] animate-[pulse_4s_ease-in-out_infinite]"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="50%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#fb7185" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Glowing Data Point on the chart */}
                      <div className="absolute right-[30%] top-[25%] w-3 h-3 sm:w-4 sm:h-4 bg-fuchsia-400 rounded-full border-[3px] sm:border-4 border-black shadow-[0_0_20px_rgba(217,70,239,1)] animate-pulse"></div>
                    </div>
                  </div>
               </div>

               {/* Bottom Epic Glow Fade */}
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* 🌟 NEW: Core Features / Social Proof Section */}
        <div className="mt-32 sm:mt-40 max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10 border-t border-white/[0.05] pt-16">
          <div className="text-center mb-12">
             <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase">Engineered for absolute performance</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Lightning Delivery</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Global edge network integration ensuring your emails hit the primary inbox within milliseconds.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(217,70,239,0.1)]">
                <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Real-time Telemetry</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Live streaming of open rates, bounces, and click-throughs straight to your command center.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Developer First API</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Seamlessly integrate with our robust REST endpoints. Built by developers, for developers.</p>
            </div>
          </div>

          {/* 💻 API Code Terminal Mockup (100x Developer Credibility) */}
          <div className="max-w-4xl mx-auto w-full bg-[#050505] rounded-[2rem] border border-white/10 shadow-[0_0_80px_-20px_rgba(168,85,247,0.2)] overflow-hidden">
             <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">api/send.ts</div>
                <div className="w-12"></div> {/* spacer for centering */}
             </div>
             <div className="p-6 sm:p-8 text-sm sm:text-base font-mono leading-relaxed text-slate-300 overflow-x-auto">
                <p><span className="text-fuchsia-400">import</span> {`{ MailSender }`} <span className="text-fuchsia-400">from</span> <span className="text-emerald-300">'@mailsender/node'</span>;</p>
                <br />
                <p><span className="text-indigo-400">const</span> mail <span className="text-fuchsia-400">=</span> <span className="text-indigo-400">new</span> <span className="text-amber-200">MailSender</span>(process.env.<span className="text-rose-300">MAILSENDER_API_KEY</span>);</p>
                <br />
                <p><span className="text-fuchsia-400">await</span> mail.<span className="text-amber-200">campaigns</span>.<span className="text-amber-200">send</span>({`{`}</p>
                <p className="pl-6">audience_id: <span className="text-emerald-300">'aud_live_9a8b7c'</span>,</p>
                <p className="pl-6">subject: <span className="text-emerald-300">'Welcome to the Future of Outreach 🚀'</span>,</p>
                <p className="pl-6">template: <span className="text-emerald-300">'temp_welcome_v2'</span>,</p>
                <p className="pl-6">track_telemetry: <span className="text-indigo-400">true</span></p>
                <p>{`});`}</p>
                <br />
                <p className="text-slate-600 italic">// Campaign deployed to 10,000+ nodes in 120ms.</p>
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}