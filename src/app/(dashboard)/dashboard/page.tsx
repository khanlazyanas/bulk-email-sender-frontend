"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  // Real-time refreshing state
  const [isRefreshing, setIsRefreshing] = useState(true);

  // Initial load simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsRefreshing(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSyncData = () => {
    setIsRefreshing(true);
    // Simulate API network delay
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  // Fake stats data for UI
  const stats = [
    { label: "Total Outbound", value: "45,231", trend: "+12.5%", isPositive: true, icon: "🚀", color: "indigo" },
    { label: "Average Open Rate", value: "32.4%", trend: "+2.1%", isPositive: true, icon: "👁️", color: "fuchsia" },
    { label: "Click-Through Rate", value: "12.8%", trend: "-0.4%", isPositive: false, icon: "⚡", color: "rose" },
    { label: "Bounce Rate", value: "1.2%", trend: "-0.1%", isPositive: true, icon: "🛡️", color: "emerald" }, 
  ];

  const recentCampaigns = [
    { id: 1, name: "Q3 Marketing Newsletter", date: "Aug 1, 2026", status: "Completed", sent: 12500 },
    { id: 2, name: "Product Update v2.0", date: "Jul 28, 2026", status: "Completed", sent: 8400 },
    { id: 3, name: "Welcome Series - Batch A", date: "Jul 25, 2026", status: "Draft", sent: 0 },
    { id: 4, name: "Inactive Users Re-engagement", date: "Jul 20, 2026", status: "Completed", sent: 3200 },
  ];

  return (
    <div className="space-y-8 relative z-10 pt-4 pb-12">
      
      {/* 🌌 Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mb-4 cursor-default">
            <span className={`w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,1)] ${isRefreshing ? 'animate-ping' : 'animate-pulse'}`}></span>
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Command Center</span>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Monitor real-time telemetry and campaign performance metrics.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Sync Data Button */}
          <button 
            onClick={handleSyncData}
            disabled={isRefreshing}
            className="px-4 py-2.5 bg-white/[0.03] border border-white/10 text-slate-300 rounded-xl text-sm font-semibold hover:bg-white/10 hover:text-white transition-all backdrop-blur-md flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg 
              className={`w-4 h-4 text-indigo-400 transition-transform duration-500 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="hidden sm:block">{isRefreshing ? 'Syncing...' : 'Sync Data'}</span>
          </button>

          {/* Magic Compose Button */}
          <Link 
            href="/compose"
            className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1px] focus:outline-none group/btn hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-shadow duration-500"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#4f46e5_50%,#c084fc_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-[#030712] px-6 py-2 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover/btn:bg-[#030712]/70 gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              New Broadcast
            </span>
          </Link>
        </div>
      </div>

      {/* ✨ Holographic Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className={`group relative bg-[#050505]/80 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl transition-all duration-500 overflow-hidden ${isRefreshing ? 'opacity-60 blur-[2px] scale-[0.98]' : 'hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'}`}>
            
            {/* Inner Hover Glow */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 blur-3xl rounded-full opacity-0 transition-opacity duration-700 ${!isRefreshing && 'group-hover:opacity-20'} ${
              stat.color === 'indigo' ? 'bg-indigo-500' : 
              stat.color === 'fuchsia' ? 'bg-fuchsia-500' : 
              stat.color === 'rose' ? 'bg-rose-500' : 'bg-emerald-500'
            }`}></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-white/[0.05] transition-colors">
                <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{stat.icon}</span>
              </div>
              
              {!isRefreshing ? (
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border ${
                  stat.isPositive 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]" 
                    : "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_15px_-3px_rgba(244,63,94,0.2)]"
                }`}>
                  {stat.isPositive ? (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  )}
                  {stat.trend}
                </span>
              ) : (
                <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
              )}
            </div>
            
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
              {isRefreshing ? (
                <div className="h-9 w-24 bg-white/10 rounded-lg animate-pulse mt-1"></div>
              ) : (
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  {stat.value}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 💻 Cinematic Recent Campaigns Table */}
      <div className={`relative group perspective pt-4 transition-all duration-700 ${isRefreshing ? 'opacity-70 blur-[1px]' : 'opacity-100 blur-0'}`}>
        
        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>

        <div className="relative bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-[0_0_80px_-20px_rgba(0,0,0,1)] overflow-hidden">
          
          <div className="px-6 py-5 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold text-white tracking-wide">Recent Operations</h2>
              {isRefreshing && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span></span>}
            </div>
            <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider">View Log</button>
          </div>
          
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  <th className="px-6 py-5">Campaign Protocol</th>
                  <th className="px-6 py-5">Timestamp</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5 text-right">Packets Sent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-white/[0.03] transition-colors group/row">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-slate-200 group-hover/row:text-white transition-colors flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-slate-400 group-hover/row:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        {isRefreshing ? <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div> : campaign.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-400 font-mono tracking-tight group-hover/row:text-slate-300 transition-colors">
                        {isRefreshing ? <div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div> : campaign.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isRefreshing ? (
                        <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
                      ) : (
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${
                          campaign.status === "Completed" 
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]" 
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]"
                        }`}>
                          {campaign.status === "Completed" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]"></span>}
                          {campaign.status === "Draft" && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,1)] animate-pulse"></span>}
                          {campaign.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 font-mono flex justify-end">
                        {isRefreshing ? <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div> : campaign.sent.toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}