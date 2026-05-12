'use client';
import { useState, useEffect, useRef } from 'react';
import { AbigailData } from '@/data';

export default function ChatbotPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // NEW: Track API loading state
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi Abigail! I see you've reached 70% of your student loan goal. That's amazing! How can I help you grow today?" }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- UPDATED handleChat FUNCTION ---
  const handleChat = async () => {
    if (!input.trim() || isLoading) return;

    // 1. Add Abigail's message to the UI
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Call the API route we created in app/api/chat/route.ts
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // 3. Add the REAL AI response to the UI
      setMessages((prev) => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      // Fallback if API fails
      setMessages((prev) => [...prev, { role: 'ai', text: "FidAi is having a moment. Try again? 🔌" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-rose-gold p-4 flex justify-between items-center text-white border-b-4 border-black">
        <div className="flex items-center gap-2">
          <span>☰</span>
          <span className="uppercase tracking-widest text-sm font-black italic text-shadow-sm">FidAi Assistant</span>
        </div>
        <span className="text-xl font-bold">🤖</span>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-petal/20">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-sm ${
              m.role === 'user' ? 'bg-rose-gold text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        
        {/* NEW: Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-gray-100 p-3 border-4 border-black rounded-2xl animate-pulse font-black text-[10px] uppercase">
               FidAi is typing...
             </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t-4 border-black">
        <div className="flex gap-2">
          <input 
            className="flex-1 border-4 border-black rounded-full py-2 px-4 italic font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none" 
            placeholder={isLoading ? "FidAi is thinking..." : "Ask FidAi..."} 
            value={input}
            disabled={isLoading} // Disable input while waiting
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleChat()}
          />
          <button 
            onClick={handleChat}
            disabled={isLoading}
            className={`${isLoading ? 'bg-gray-400' : 'bg-watermelon'} text-white border-4 border-black rounded-full px-6 py-2 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5`}
          >
            {isLoading ? '...' : 'SEND'}
          </button>
        </div>
      </div>
    </div>
  );
}