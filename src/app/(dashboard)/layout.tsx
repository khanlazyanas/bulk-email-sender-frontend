import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#000000] text-slate-50 overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-100 font-sans relative">
      
      {/* 🌌 Universal Deep Space Grid for Entire Dashboard */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>

      {/* Fixed Sidebar */}
      <div className="relative z-20 h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        
        {/* Top Header */}
        <div className="relative z-20">
          <Header />
        </div>
        
        {/* Page Content (Scrollable) */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative custom-scrollbar">
          
          {/* Subtle Inner Glow for the entire workspace */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-fuchsia-500/[0.02] pointer-events-none z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {children}
          </div>
          
        </main>
      </div>
      
    </div>
  );
}