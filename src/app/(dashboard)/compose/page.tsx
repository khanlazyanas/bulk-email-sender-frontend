"use client";

import { useState, useRef } from "react";

export default function ComposePage() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Reference for our custom Rich Text Editor
  const editorRef = useRef<HTMLDivElement>(null);

  // Form State Management (Content yahan se hata diya gaya hai)
  const [formData, setFormData] = useState({
    target: "",
    subject: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 🚀 Magic Function: Format text in the editor
  const handleFormat = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleAddLink = () => {
    const url = prompt("Enter the URL link (e.g., https://example.com):");
    if (url) {
      handleFormat("createLink", url);
    }
  };

  const handleAddMedia = () => {
    const url = prompt("Enter the Image URL:");
    if (url) {
      handleFormat("insertImage", url);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Grab the final HTML content from our custom editor ONLY on submit
    const finalContent = editorRef.current?.innerHTML || "";
    
    // Check if empty or just a break tag
    if (!finalContent.trim() || finalContent === "<br>") {
      alert("Holographic message sequence cannot be empty!");
      return;
    }

    setIsSending(true);
    setShowSuccess(false);

    // Fake API call delay
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      
      // Reset form fields
      setFormData({
        target: "",
        subject: "",
      });
      
      // Clear the visual editor perfectly
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }

      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 relative z-10 pt-4 pb-12">
      
      {/* 🌌 Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Page Header */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">New Broadcast</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 tracking-tight">
          Compose Campaign
        </h1>
        <p className="text-sm text-slate-400 mt-2 font-medium">
          Deploy high-performance bulk emails to your segmented contact lists.
        </p>
      </div>

      {/* ✨ The Holographic Composer Form */}
      <div className="relative group perspective">
        
        {/* Animated Glow Behind Card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-indigo-500/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
        
        <form onSubmit={handleSendEmail} className="relative bg-[#050505]/90 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-[0_0_80px_-20px_rgba(139,92,246,0.3)] overflow-hidden">
          
          {/* Subtle Glare Effect */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>

          {/* Premium Success Notification */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSuccess ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 p-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-bold text-emerald-400 tracking-wide">Holographic Campaign Transmitted Successfully!</p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8 relative z-10">
            
            {/* Target List Selection */}
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-3 md:gap-6">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider md:text-right">To :</label>
              <div className="relative group/input">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-fuchsia-500/50 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-500"></div>
                <select 
                  name="target"
                  value={formData.target}
                  onChange={handleInputChange}
                  required
                  className="relative w-full px-4 py-3.5 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none text-white appearance-none transition-all focus:bg-[#0f0f0f] cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0a0a0a] text-slate-500">Select a target network...</option>
                  <option value="all" className="bg-[#0a0a0a]">All Subscribers (4,250 nodes)</option>
                  <option value="active" className="bg-[#0a0a0a]">Active Users (2,100 nodes)</option>
                  <option value="inactive" className="bg-[#0a0a0a]">Inactive Users (850 nodes)</option>
                </select>
                {/* Custom Select Arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Subject Line */}
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-3 md:gap-6">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider md:text-right">Subject :</label>
              <div className="relative group/input">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-fuchsia-500/50 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-500"></div>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter a high-converting subject line..."
                  className="relative w-full px-4 py-3.5 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none text-white placeholder-slate-600 transition-all focus:bg-[#0f0f0f] font-medium"
                />
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>

            {/* 💻 FULLY FUNCTIONAL Cinematic Rich Text Editor UI */}
            <div className="relative group/editor">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 rounded-2xl blur opacity-0 group-focus-within/editor:opacity-100 transition duration-500"></div>
              
              <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a] flex flex-col transition-all">
                
                {/* Editor Toolbar */}
                <div className="bg-[#111111] border-b border-white/5 px-4 py-3 flex items-center gap-2 overflow-x-auto custom-scrollbar">
                  <div className="flex bg-white/[0.03] rounded-lg p-1 border border-white/5">
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => handleFormat("bold")} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md text-sm font-bold w-9 transition-colors">B</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => handleFormat("italic")} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md text-sm italic w-9 transition-colors">I</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => handleFormat("underline")} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md text-sm underline w-9 transition-colors">U</button>
                  </div>
                  
                  <div className="w-px h-6 bg-white/10 mx-2"></div>
                  
                  <div className="flex bg-white/[0.03] rounded-lg p-1 border border-white/5">
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={handleAddLink} className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md text-sm flex items-center gap-2 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      Link
                    </button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={handleAddMedia} className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md text-sm flex items-center gap-2 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      Media
                    </button>
                  </div>

                  <div className="w-px h-6 bg-white/10 mx-2"></div>
                  
                  <select 
                    onChange={(e) => handleFormat("formatBlock", e.target.value)}
                    className="text-sm bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 focus:outline-none text-slate-300 cursor-pointer outline-none"
                  >
                    <option value="P" className="bg-[#0a0a0a]">Normal Text</option>
                    <option value="H1" className="bg-[#0a0a0a]">Heading 1</option>
                    <option value="H2" className="bg-[#0a0a0a]">Heading 2</option>
                  </select>
                </div>
                
                {/* 🚀 Our Custom contentEditable Div behaving like a textarea without re-render crashes! */}
                <div 
                  ref={editorRef}
                  contentEditable
                  data-placeholder="Initiate your message sequence here..."
                  className="w-full p-6 outline-none text-slate-300 bg-transparent min-h-[250px] leading-relaxed custom-scrollbar cursor-text empty:before:content-[attr(data-placeholder)] empty:before:text-slate-600 [&_b]:font-bold [&_b]:text-white [&_i]:italic [&_i]:text-white [&_u]:underline [&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:text-white [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3 [&_a]:text-indigo-400 [&_a]:underline [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-4 [&_img]:border [&_img]:border-white/10"
                ></div>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="px-6 py-5 bg-[#020202] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              type="button"
              className="w-full sm:w-auto text-sm font-semibold text-slate-400 hover:text-white transition-colors px-6 py-3 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10"
            >
              Save to Drafts
            </button>
            
            {/* The Magic Send Button */}
            <button 
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none group/btn disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-all"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#4f46e5_50%,#c084fc_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-[#030712] px-8 py-2 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover/btn:bg-[#030712]/70 gap-2">
                {isSending ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting...
                  </>
                ) : (
                  <>
                    Deploy Campaign
                    <svg className="w-4 h-4 text-indigo-400 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}