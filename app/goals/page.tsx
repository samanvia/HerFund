'use client';
import { AbigailData } from '@/data';

export default function GoalsPage() {
  // Add this "If" statement to prevent the crash
  if (!AbigailData || !AbigailData.loans) {
    return <div className="p-10 text-center font-bold">Loading Abigail's Goals...</div>;
  }

  const loan = AbigailData.loans;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Sticking with Rose Gold */}
      <div className="bg-rose-gold p-4 flex justify-between items-center text-white border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span>☰</span>
          <span className="uppercase tracking-widest text-sm font-black">Goals ⌵</span>
        </div>
        <span className="text-xl font-black">⋮</span>
      </div>

      <div className="p-6 space-y-8 flex flex-col items-center">
        {/* Search/Query Bar (Matches Wireframe #6) */}
        <div className="relative w-full">
          <span className="absolute left-3 top-2 text-gray-400 font-bold">🔍</span>
          <input 
            className="w-full border-4 border-black rounded-full py-2 px-10 italic font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs focus:outline-none" 
            placeholder="progress on loans?" 
          />
        </div>

        {/* FidAi Alert Bubble (Matches Wireframe #9) */}
        <div className="bg-[#4E6C50] text-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black leading-tight text-center w-full uppercase tracking-tighter">
          Congratulations! You're closer to paying off your student loans.
        </div>

        {/* THE PIE CHART (Sketch Style) */}
        <div className="relative w-48 h-48 border-4 border-black rounded-full bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center">
          {/* This creates the 70% 'Paid' slice using a CSS gradient */}
          <div 
            className="w-full h-full" 
            style={{ 
              background: `conic-gradient(var(--rose-gold) 0% ${loan.percent}%, white ${loan.percent}% 100%)` 
            }}
          ></div>
          
          {/* Hand-drawn divider line effect */}
          <div className="absolute top-0 left-1/2 w-1.5 h-full bg-black -translate-x-1/2 rotate-[125deg] opacity-20"></div>
          
          {/* Center Overlay (Optional, makes it a Donut chart if you want) */}
          <div className="absolute w-24 h-24 bg-white border-4 border-black rounded-full flex flex-col items-center justify-center">
            <span className="text-xs font-black italic">{loan.percent}%</span>
            <span className="text-[8px] uppercase">Paid</span>
          </div>
        </div>

        {/* PROGRESS BAR & COUNTER */}
        <div className="w-full space-y-4">
          <div className="text-center">
            <div className="w-full h-10 border-4 border-black rounded-xl bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex">
              {/* Progress Fill */}
              <div 
                className="bg-watermelon h-full border-r-4 border-black transition-all duration-1000"
                style={{ width: `${loan.percent}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="border-4 border-black bg-white px-8 py-2 font-black text-xs uppercase tracking-tighter italic shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              You have ${loan.remaining.toLocaleString()} remaining
            </div>
          </div>
        </div>

        {/* Navigation Indicator Dots at the bottom */}
        <div className="flex gap-2 mt-auto pb-4">
          <div className="w-2 h-2 rounded-full border-2 border-black bg-black"></div>
          <div className="w-2 h-2 rounded-full border-2 border-black bg-white"></div>
          <div className="w-2 h-2 rounded-full border-2 border-black bg-white"></div>
        </div>
      </div>
    </div>
  );
}