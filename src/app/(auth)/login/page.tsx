"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake API call delay for cinematic loading effect
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] relative flex items-center justify-center p-4 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-100 text-slate-50 overflow-hidden">
      
      {/* 🌌 Ambient Deep Space Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>
      
      {/* Cinematic Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-[spin_40s_linear_infinite] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>

      {/* 🚀 Back to Home Button */}
      <Link href="/" className="absolute top-8 left-8 group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors z-20">
        <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </div>
        Back to Home
      </Link>

      {/* ✨ The Holographic Login Card Wrapper */}
      <div className="relative w-full max-w-[420px] z-10 group perspective">
        
        {/* Animated Glow Behind Card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        {/* The Card Itself */}
        <div className="relative w-full rounded-[2rem] border border-white/10 bg-[#050505]/80 backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] p-8 sm:p-10 overflow-hidden">
          
          {/* Subtle Sweeping Glare */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>

          <div className="relative z-10">
            {/* Logo & Header */}
            <div className="flex flex-col items-center text-center mb-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 p-[1px] shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
                <div className="w-full h-full bg-black/95 rounded-[15px] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-sm text-slate-400 mt-2 font-medium">
                  Enter your credentials to access the workspace.
                </p>
              </div>
            </div>

            {/* Futuristic Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative group/input">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-fuchsia-500/50 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-500"></div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-600 transition-all focus:border-indigo-500/50 focus:bg-[#0f0f0f]"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#" className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative group/input">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-fuchsia-500/50 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-500"></div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="relative w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-600 transition-all focus:border-indigo-500/50 focus:bg-[#0f0f0f]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-2">
                {/* Magic Glowing Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none group/btn disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] transition-shadow duration-500"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#6366f1_50%,#c084fc_100%)] opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-[#030712] px-8 py-2 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover/btn:bg-[#030712]/70 gap-2">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-fuchsia-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        Sign In to Workspace
                        <svg className="w-4 h-4 text-fuchsia-400 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>

            </form>

            {/* Footer */}
            <div className="mt-8 text-center border-t border-white/5 pt-6">
              <p className="text-sm text-slate-500">
                Don't have an account?{" "}
                <Link href="/" className="font-semibold text-white hover:text-fuchsia-400 transition-colors">
                  Contact Admin
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}