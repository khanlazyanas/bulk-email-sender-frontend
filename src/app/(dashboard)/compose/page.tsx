"use client";

import { useState } from "react";

export default function ComposePage() {
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Fake API call delay (Backend API yahan connect hogi)
    setTimeout(() => {
      setIsSending(false);
      alert("Campaign sent successfully! 🚀");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Compose Campaign</h1>
        <p className="text-sm text-slate-500 mt-1">Create and send bulk emails to your contact lists.</p>
      </div>

      {/* Main Composer Form */}
      <form onSubmit={handleSendEmail} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* Form Fields Section */}
        <div className="p-6 space-y-5">
          
          {/* Target List Selection */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-2 md:gap-4">
            <label className="text-sm font-medium text-slate-700 md:text-right">To :</label>
            <select 
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700"
            >
              <option value="">Select a contact list...</option>
              <option value="all">All Subscribers (4,250 contacts)</option>
              <option value="active">Active Users (2,100 contacts)</option>
              <option value="inactive">Inactive Users (850 contacts)</option>
            </select>
          </div>

          {/* Subject Line */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-2 md:gap-4">
            <label className="text-sm font-medium text-slate-700 md:text-right">Subject :</label>
            <input 
              type="text" 
              required
              placeholder="Enter your compelling subject line..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-900 font-medium"
            />
          </div>

          <hr className="border-slate-100 my-2" />

          {/* Fake Rich Text Editor Toolbar (Visuals Only for SaaS feel) */}
          <div className="border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2 overflow-x-auto">
              <button type="button" className="p-1.5 text-slate-600 hover:bg-slate-200 rounded text-sm font-bold w-8">B</button>
              <button type="button" className="p-1.5 text-slate-600 hover:bg-slate-200 rounded text-sm italic w-8">I</button>
              <button type="button" className="p-1.5 text-slate-600 hover:bg-slate-200 rounded text-sm underline w-8">U</button>
              <div className="w-px h-5 bg-slate-300 mx-1"></div>
              <button type="button" className="p-1.5 text-slate-600 hover:bg-slate-200 rounded text-sm flex items-center gap-1">
                <span>🔗</span> Link
              </button>
              <button type="button" className="p-1.5 text-slate-600 hover:bg-slate-200 rounded text-sm flex items-center gap-1">
                <span>🖼️</span> Image
              </button>
              <div className="w-px h-5 bg-slate-300 mx-1"></div>
              <select className="text-sm bg-transparent border-none focus:outline-none text-slate-600 cursor-pointer">
                <option>Normal Text</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
            </div>
            
            {/* Email Body Textarea */}
            <textarea 
              required
              rows={12}
              placeholder="Write your email content here... (HTML tags will be supported when connected to the backend editor)"
              className="w-full p-4 resize-y outline-none text-slate-700 bg-white min-h-[300px]"
            ></textarea>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button 
            type="button"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 hover:bg-slate-200 rounded-lg"
          >
            Save as Draft
          </button>
          
          <button 
            type="submit"
            disabled={isSending}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Campaign...
              </>
            ) : (
              <>
                <span>🚀</span> Send Campaign
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}