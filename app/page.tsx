'use client';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-full p-8 bg-petal">
      
      {/* 1. TOP LOGO SECTION */}
      <div className="flex flex-col items-center mt-12 text-center">
        <div className="w-32 h-32 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
          <span className="text-6xl"></span> {/* Or use 🌹 or 💰 */}
        </div>
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
          HerFund
        </h1>
        <div className="h-1.5 w-24 bg-watermelon mt-1 border-2 border-black"></div>
        <p className="mt-6 text-sm font-bold text-gray-600 max-w-[250px] leading-tight">
          Bloom into financial independence with AI-powered investing.
        </p>
      </div>

      {/* 2. BUTTON SECTION (Matches Wireframe #1) */}
      <div className="w-full space-y-5 mb-12">
        <Link 
          href="/dashboard" 
          className="block w-full bg-rose-gold border-4 border-black text-white font-black py-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center uppercase tracking-widest text-xl active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
        >
          Sign In
        </Link>
        
        <button className="w-full bg-white border-4 border-black text-black font-black py-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest text-xl active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all">
          Create Account
        </button>
        
        <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pt-4">
          Powered by Fidelity
        </p>
      </div>

      {/* 3. DECORATIVE ELEMENTS (Optional, matches the "hand-drawn" feel) */}
      <div className="absolute top-10 right-10 opacity-20 rotate-12 text-4xl">✨</div>
      <div className="absolute bottom-40 left-10 opacity-20 -rotate-12 text-4xl">📈</div>
    </div>
  );
}