import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HerFund | Fidelity Hackathon",
  description: "Financial empowerment for Gen-Z women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 1. We set the background of the whole browser to a light gray to make the "phone" pop */}
      <body className="bg-gray-100 min-h-full flex justify-center items-start sm:py-10">
        
        {/* 2. THE PHONE FRAME: This forces the app to be phone-shaped */}
        <div className="w-full max-w-[400px] h-[852px] bg-petal shadow-2xl overflow-hidden flex flex-col border-[8px] border-gray-800 rounded-[3rem] relative">
          
          {/* 3. The Pink Header (Matches your Wireframes) */}
          <nav className="bg-watermelon p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-2">
              <span className="text-xl">☰</span>
              <span className="font-bold tracking-widest uppercase text-sm">Main</span>
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </nav>

          {/* 4. The Content Area: This is where your different pages will scroll */}
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            {children}
          </main>

          {/* 5. Home Indicator (That little bar at the bottom of iPhones) */}
          <div className="h-6 flex justify-center items-center bg-white/50">
            <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>

      </body>
    </html>
  );
}