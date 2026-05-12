'use client';
import { AbigailData } from '@/data';

export default function BudgetingPage() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Pink Header */}
      <div className="bg-watermelon p-4 flex justify-between items-center text-white border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span>☰</span>
          <span className="uppercase tracking-widest text-sm">Budgeting ⌵</span>
        </div>
        <span className="text-xl font-black">⋮</span>
      </div>

      <div className="p-6 space-y-6">
        {/* FidAi Insight Bubble */}
        <div className="bg-[#4E6C50] text-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-bold leading-tight relative">
          <p>This month, you've spent $324 on 'Food'.</p>
          <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-black"></div>
        </div>

        {/* Budget Bars (Matches Wireframe #5) */}
        <div className="space-y-3">
          {AbigailData.budget.map((item) => {
            const percent = (item.spent / item.limit) * 100;
            return (
              <div key={item.category} className="space-y-1">
                <div className="flex justify-between items-end border-4 border-black rounded-lg overflow-hidden h-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {/* The Progress Fill */}
                  <div 
                    className={`${item.color} h-full border-r-4 border-black flex items-center px-3`}
                    style={{ width: `${percent}%` }}
                  >
                    <span className="font-black uppercase text-[10px] whitespace-nowrap text-white drop-shadow-md">
                      {item.category}
                    </span>
                  </div>
                  {/* The Remaining Value */}
                  <div className="flex-1 bg-white h-full flex items-center justify-end px-3">
                    <span className="font-black text-[10px]">${item.spent}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Date/Calendar Footer Placeholder */}
        <div className="mt-auto border-4 border-black rounded-xl p-3 flex justify-center items-center gap-4 bg-white italic font-bold text-xs">
          <span>05/11/2026</span>
          <span className="text-xl">📅</span>
        </div>
      </div>
    </div>
  );
}