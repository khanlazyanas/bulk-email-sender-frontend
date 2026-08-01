import Link from "next/link";

export default function DashboardPage() {
  // Ye temporary dummy data hai UI design ke liye. 
  // Baad me ise Hono API se replace karenge.
  const stats = [
    { label: "Total Emails Sent", value: "45,231", trend: "+12.5%", isPositive: true, icon: "📤" },
    { label: "Average Open Rate", value: "32.4%", trend: "+2.1%", isPositive: true, icon: "📖" },
    { label: "Click-Through Rate", value: "12.8%", trend: "-0.4%", isPositive: false, icon: "🖱️" },
    { label: "Bounce Rate", value: "1.2%", trend: "-0.1%", isPositive: true, icon: "⚠️" }, // Kam bounce rate accha hota hai
  ];

  const recentCampaigns = [
    { id: 1, name: "Q3 Marketing Newsletter", date: "Aug 1, 2026", status: "Completed", sent: 12500 },
    { id: 2, name: "Product Update v2.0", date: "Jul 28, 2026", status: "Completed", sent: 8400 },
    { id: 3, name: "Welcome Series - Batch A", date: "Jul 25, 2026", status: "Draft", sent: 0 },
    { id: 4, name: "Inactive Users Re-engagement", date: "Jul 20, 2026", status: "Completed", sent: 3200 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Monitor your email campaign performance and statistics.</p>
        </div>
        <Link 
          href="/compose"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          <span>✏️</span> Compose Email
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.isPositive ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
              }`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Campaigns Table Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent Campaigns</h2>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="px-6 py-3">Campaign Name</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Emails Sent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {recentCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {campaign.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {campaign.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === "Completed" 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-right font-medium">
                    {campaign.sent.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}