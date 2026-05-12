'use client';
import { useState } from 'react';
import { AbigailData } from '@/data';

export default function InvestingPage() {
  // Start with FZROX as the default
  const [selectedFund, setSelectedFund] = useState(AbigailData.portfolio[0]);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-rose-gold p-4 flex justify-between items-center text-white font-bold border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span>🌿</span>
          <span className="uppercase tracking-widest text-sm font-black italic">HerFund</span>
        </div>
        <span className="text-xl font-black">⋮</span>
      </div>

      <div className="p-6 space-y-6">
        {/* 1. PORTFOLIO LIST (Now Clickable!) */}
        <div className="border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-blue-100 p-2 border-b-2 border-black font-black text-[10px] uppercase tracking-widest text-center">
            Tap a fund to view details
          </div>
          {AbigailData.portfolio.map((stock) => (
            <button 
              key={stock.ticker} 
              onClick={() => setSelectedFund(stock)}
              className={`w-full flex justify-between p-3 border-b-2 border-black last:border-b-0 font-bold text-sm transition-colors ${
                selectedFund.ticker === stock.ticker ? 'bg-petal/50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span>{stock.ticker}</span>
              <span className="text-green-600">{stock.change}</span>
            </button>
          ))}
        </div>

        {/* 2. DYNAMIC STOCK DETAIL (Updates based on click) */}
        <div className="border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white space-y-3 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-black text-sm leading-tight">{selectedFund.name}</h2>
              <p className="text-[10px] text-gray-500 italic uppercase">Ticker: {selectedFund.ticker}</p>
            </div>
            <div className="bg-black text-white text-[8px] px-2 py-1 rounded font-black uppercase shadow-[2px_2px_0px_0px_rgba(229,178,169,1)]">
              Live
            </div>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black">${(selectedFund.value / 40).toFixed(2)}</span>
            <span className="text-[10px] text-green-600 font-bold">{selectedFund.change} (1M)</span>
          </div>

          {/* SQUIGGLY CHART (Changes color based on fund) */}
          <div className="h-24 border-2 border-black rounded-lg bg-gray-50 relative overflow-hidden">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d={selectedFund.ticker === 'FZROX' ? "M0,80 L20,70 L40,85 L60,30 L80,45 L100,15" : "M0,50 L25,45 L50,60 L75,20 L100,35"} 
                  fill="none" 
                  stroke={selectedFund.ticker === 'FBGRX' ? '#4E6C50' : '#D14D72'} 
                  strokeWidth="5" 
                />
             </svg>
          </div>

          {/* FidAi SMART RESPONSE */}
          <div className="bg-[#B4CFB0] border-4 border-black p-3 rounded-xl text-[11px] font-bold leading-tight relative mt-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
             <p className="text-gray-900 mb-1 uppercase underline italic">FidAi Insight:</p>
             {selectedFund.ticker === 'FZROX' && <p>This fund covers almost every US company. Great for long-term "set and forget" growth!</p>}
             {selectedFund.ticker === 'FZILX' && <p>International diversification is key! This gives you exposure to tech giants outside the US.</p>}
             {selectedFund.ticker === 'FBGRX' && <p>Focuses on high-growth companies like Apple and Nvidia. Higher risk, but higher potential! 🚀</p>}
          </div>
        </div>

        {/* 3. QUICK ACTION BUTTON */}
        <button className="w-full bg-watermelon border-4 border-black text-white font-black py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm active:shadow-none active:translate-y-1 active:translate-x-1">
          Invest More in {selectedFund.ticker}
        </button>
      </div>
    </div>
  );
}