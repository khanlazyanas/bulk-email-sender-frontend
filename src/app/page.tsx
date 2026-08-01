import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 relative overflow-hidden">
      
      {/* Background Decorative Blur Effect for SaaS look */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="max-w-lg w-full text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
            v2.0 Frontend Migration
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Bulk Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sender</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            A high-performance, modern solution for managing your email marketing campaigns.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/login" 
            className="group inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Go to Dashboard
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}