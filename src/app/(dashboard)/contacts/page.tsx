"use client";

import { useState, useMemo } from "react";

export default function ContactsPage() {
  // Expanded Fake contacts data for testing Search & Pagination
  const [contacts] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul.s@example.com", status: "Subscribed", addedOn: "Aug 1, 2026" },
    { id: 2, name: "Amit Kumar", email: "amit.k@techcorp.in", status: "Subscribed", addedOn: "Jul 28, 2026" },
    { id: 3, name: "Priya Singh", email: "priya.design@studio.com", status: "Bounced", addedOn: "Jul 25, 2026" },
    { id: 4, name: "Neha Gupta", email: "neha.g@startup.io", status: "Unsubscribed", addedOn: "Jul 20, 2026" },
    { id: 5, name: "Vikram Verma", email: "vikram.v@agency.com", status: "Subscribed", addedOn: "Jul 15, 2026" },
    { id: 6, name: "Suresh Raina", email: "suresh.r@sports.io", status: "Subscribed", addedOn: "Jul 10, 2026" },
    { id: 7, name: "Anita Desai", email: "anita.d@books.com", status: "Bounced", addedOn: "Jul 05, 2026" },
    { id: 8, name: "Kabir Khan", email: "kabir.k@movies.in", status: "Subscribed", addedOn: "Jun 30, 2026" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Real-time Filtering Logic (Search + Status)
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesSearch = 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contact.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || 
        contact.status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchTerm, statusFilter]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredContacts.slice(startIndex, endIndex);

  // Handlers for Resetting Page on Filter Change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 while searching
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to page 1 while filtering
  };

  return (
    <div className="space-y-8 relative z-10 pt-4 pb-12">
      
      {/* 🌌 Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 mb-4">
            <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="text-xs font-semibold text-fuchsia-300 tracking-wide uppercase">Audience Network</span>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-tight">
            Contact Database
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Manage your synchronized email subscribers and segmented lists.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-slate-300 rounded-xl text-sm font-semibold hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
            Import CSV
          </button>
          
          <button className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1px] focus:outline-none group/btn hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] transition-shadow duration-500">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#4f46e5_50%,#c084fc_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-[#030712] px-6 py-2 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover/btn:bg-[#030712]/70 gap-2">
              <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              Add Node
            </span>
          </button>
        </div>
      </div>

      {/* Database Container */}
      <div className="relative group perspective">
        
        <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>

        <div className="relative bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-[0_0_80px_-20px_rgba(0,0,0,1)] overflow-hidden">
          
          {/* Filters and Search Bar */}
          <div className="p-5 border-b border-white/5 bg-white/[0.01] flex flex-col sm:flex-row justify-between gap-4 items-center">
            
            <div className="relative w-full sm:w-96 group/search">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 rounded-xl blur opacity-0 group-focus-within/search:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500 group-focus-within/search:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Query database by name or email..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-600 transition-all focus:bg-[#0f0f0f] text-sm font-medium"
                />
              </div>
            </div>
            
            <div className="w-full sm:w-auto relative group/select">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 rounded-xl blur opacity-0 group-focus-within/select:opacity-100 transition duration-500"></div>
              <div className="relative">
                <select 
                  value={statusFilter}
                  onChange={handleStatusChange}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl text-sm focus:outline-none text-slate-300 appearance-none pr-10 cursor-pointer"
                >
                  <option value="all" className="bg-[#0a0a0a]">All Status</option>
                  <option value="subscribed" className="bg-[#0a0a0a]">Subscribed</option>
                  <option value="bounced" className="bg-[#0a0a0a]">Bounced</option>
                  <option value="unsubscribed" className="bg-[#0a0a0a]">Unsubscribed</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="overflow-x-auto custom-scrollbar min-h-[300px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  <th className="px-6 py-5 w-12 text-center">
                    <input type="checkbox" className="rounded border-white/20 bg-[#0a0a0a] accent-indigo-500 cursor-pointer" />
                  </th>
                  <th className="px-6 py-5">Identifier</th>
                  <th className="px-6 py-5">Network Address</th>
                  <th className="px-6 py-5">Node Status</th>
                  <th className="px-6 py-5">Integration Date</th>
                  <th className="px-6 py-5 text-right">Execute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentData.length > 0 ? (
                  currentData.map((contact) => (
                    <tr key={contact.id} className="hover:bg-white/[0.03] transition-colors group">
                      <td className="px-6 py-4 text-center">
                        <input type="checkbox" className="rounded border-white/20 bg-[#0a0a0a] accent-indigo-500 cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{contact.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-400 font-mono tracking-tight group-hover:text-slate-300 transition-colors">{contact.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${
                          contact.status === "Subscribed" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]" :
                          contact.status === "Bounced" ? "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_15px_-3px_rgba(244,63,94,0.2)]" :
                          "bg-slate-500/10 text-slate-400 border-slate-500/20"
                        }`}>
                          {contact.status === "Subscribed" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)] animate-pulse"></span>}
                          {contact.status === "Bounced" && <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,1)]"></span>}
                          {contact.status === "Unsubscribed" && <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>}
                          {contact.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {contact.addedOn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="text-slate-400 hover:text-indigo-400 transition-colors font-semibold">Edit</button>
                          <button className="text-slate-400 hover:text-rose-400 transition-colors font-semibold">Drop</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500 text-sm font-medium">
                      No matching records found in the database.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Dynamic Pagination Footer */}
          <div className="px-6 py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#020202]">
            <p className="text-xs text-slate-500 font-medium">
              Viewing block <span className="text-white font-bold">{filteredContacts.length === 0 ? 0 : startIndex + 1}</span> to <span className="text-white font-bold">{Math.min(endIndex, filteredContacts.length)}</span> of <span className="text-indigo-400 font-bold">{filteredContacts.length}</span> records
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-1.5 border border-white/10 rounded-lg text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/10 hover:text-white transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
              >
                Prev
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-4 py-1.5 border border-white/10 rounded-lg text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/10 hover:text-white transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}