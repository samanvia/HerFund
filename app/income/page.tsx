'use client';
import { AbigailData } from '@/data';

export default function IncomePage() {
  return (
    <div className="flex flex-col h-full bg-white font-sans">
      
      {/* Change bg-watermelon to bg-rose-gold here */}
<div className="bg-rose-gold p-4 flex justify-between items-center text-white border-b-4 border-black">
  <div className="flex items-center gap-2">
    <span>☰</span>
    <span className="font-black uppercase tracking-widest text-sm flex items-center gap-1">
      Income <span className="text-[10px]">⌵</span>
    </span>
  </div>
  <span className="text-xl font-black">⋮</span>
</div>

      <div className="p-6 space-y-6">
        
        {/* 2. THE CALENDAR WIDGET */}
        <div className="border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
          <div className="flex justify-between items-center mb-4 font-black border-b-2 border-black pb-2 px-2">
            <span>‹</span>
            <span className="text-xs tracking-tighter">MAY 2026</span>
            <span>›</span>
          </div>
          
          <div className="grid grid-cols-7 gap-y-3 text-center text-[10px] font-black">
            {['S','M','T','W','T','F','S'].map(d => (
              <span key={d} className="text-gray-400">{d}</span>
            ))}
            
            {/* Generating 31 days with Day 11 highlighted in blue per prototype */}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isSelected = day === 11;
              return (
                <div key={day} className="flex justify-center items-center h-6">
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    isSelected ? 'bg-blue-400 text-white shadow-inner' : ''
                  }`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Small calendar/list icons at bottom of widget */}
          <div className="flex justify-center gap-4 mt-4 border-t-2 border-black pt-2">
            <span className="border-2 border-black px-2 py-0.5 rounded text-[10px]">||</span>
            <span className="text-lg">📅</span>
          </div>
        </div>

        {/* 3. SEARCH BAR (Sketch Style) */}
        <div className="relative group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">🔍</span>
          <input 
            className="w-full border-4 border-black rounded-full py-2 pl-12 pr-4 italic font-bold placeholder:text-gray-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none" 
            placeholder="search" 
          />
        </div>

        {/* 4. ACCOUNT BARS (Using Backend Data) */}
        <div className="space-y-4">
          {/* Checking Account Bar */}
          <div className="bg-[#B4CFB0] border-4 border-black p-4 flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span className="font-black italic uppercase text-xs tracking-tighter">
              Checking ..1234
            </span>
            <span className="font-black text-sm">
              ${AbigailData.balance.toLocaleString()}
            </span>
          </div>
          
          {/* Savings Account Bar */}
          <div className="bg-[#F7C8E0] border-4 border-black p-4 flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span className="font-black italic uppercase text-xs tracking-tighter">
              Savings ..5678
            </span>
            <span className="font-black text-sm">
              ${AbigailData.savings.toLocaleString()}
            </span>
          </div>
        </div>

        {/* 5. NAVIGATION INDICATOR (Bottom Bar) */}
        <div className="flex justify-center gap-2 pt-4 opacity-30">
          <div className="w-10 h-1.5 bg-black rounded-full"></div>
          <div className="w-10 h-1.5 bg-black rounded-full"></div>
          <div className="w-10 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}