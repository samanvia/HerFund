'use client'; // Top line is important for interactive buttons!

import Link from 'next/link';

export default function Dashboard() {
  // This is the list of items. "item" refers to one of these at a time.
  const menuItems = [
    { name: 'Income', path: '/income', color: 'bg-[#D14D72]' }, // Pink
    { name: 'Budgeting', path: '/budgeting', color: 'bg-[#F7C8E0]' }, // Light Pink
    { name: 'Goals', path: '/goals', color: 'bg-[#B4CFB0]' }, // Green
    { name: 'Investing', path: '/investing', color: 'bg-[#4E6C50]' }, // Dark Green
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Pink Header from your Balsamiq sketch */}
      <div className="bg-[#D14D72] p-4 flex justify-between items-center text-white font-bold border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span>☰</span>
          <span className="uppercase tracking-widest text-sm">Main ⌵</span>
        </div>
        <span className="text-xl">⋮</span>
      </div>

      {/* Buttons Grid */}
      <div className="p-6 grid grid-cols-1 gap-6">
        {menuItems.map((item) => (
          <Link 
            href={item.path} 
            key={item.name}
            className={`border-4 border-black p-6 rounded-xl flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all ${item.color}`}
          >
            <span className="font-black uppercase text-xl tracking-tighter text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* 5. THE ASK FIDAI BUTTON (Matches your wireframe #4) */}
      <div className="p-6 pt-0">
        <Link 
          href="/chatbot" 
          className="w-full bg-[#4E6C50] border-4 border-black p-4 rounded-xl flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
        >
          <span className="text-2xl"></span>
          <span className="font-black uppercase text-lg text-white tracking-widest">
            Ask FidAi
          </span>
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="mt-auto p-4 flex justify-center gap-2"></div>

      {/* Bottom Navigation Indicator (from sketch) */}
      <div className="mt-auto p-4 flex justify-center gap-2">
        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}