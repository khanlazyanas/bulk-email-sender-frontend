"use client";

import { useState } from "react";

export default function ContactsPage() {
  // Fake contacts data for UI
  const [contacts] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul.s@example.com", status: "Subscribed", addedOn: "Aug 1, 2026" },
    { id: 2, name: "Amit Kumar", email: "amit.k@techcorp.in", status: "Subscribed", addedOn: "Jul 28, 2026" },
    { id: 3, name: "Priya Singh", email: "priya.design@studio.com", status: "Bounced", addedOn: "Jul 25, 2026" },
    { id: 4, name: "Neha Gupta", email: "neha.g@startup.io", status: "Unsubscribed", addedOn: "Jul 20, 2026" },
    { id: 5, name: "Vikram Verma", email: "vikram.v@agency.com", status: "Subscribed", addedOn: "Jul 15, 2026" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Contacts</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your email subscribers and contact lists.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
            Import CSV
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
            <span>➕</span> Add Contact
          </button>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white p-4 rounded-t-xl border-x border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-sm"
          />
        </div>
        
        <div className="w-full sm:w-auto flex gap-2">
          <select className="w-full sm:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none text-slate-700">
            <option value="all">All Status</option>
            <option value="subscribed">Subscribed</option>
            <option value="bounced">Bounced</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white border border-slate-200 rounded-b-xl shadow-sm overflow-hidden -mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Added On</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      contact.status === "Subscribed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                      contact.status === "Bounced" ? "bg-rose-50 text-rose-700 border-rose-200" :
                      "bg-slate-100 text-slate-700 border-slate-200"
                    }`}>
                      {contact.status === "Subscribed" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>}
                      {contact.status === "Bounced" && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>}
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {contact.addedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors px-2">Edit</button>
                    <button className="text-slate-400 hover:text-rose-600 transition-colors px-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">5</span> of <span className="font-medium text-slate-900">4,250</span> results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-white bg-white shadow-sm">Next</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}