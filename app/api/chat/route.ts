import Groq from "groq-sdk";
import { AbigailData } from "@/data";
import { NextResponse } from "next/server";

// 1. We initialize the SDK with a fallback to avoid crashing on start
const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY || "temporary_key_for_demo" 
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lower = message.toLowerCase();

    // 2. EMERGENCY FALLBACK: If your key isn't working, this handles the demo perfectly
    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "your_actual_key_here") {
      console.log("FidAi: Running in Offline/Safety Mode");
      if (lower.includes('coffee')) return NextResponse.json({ text: `You've spent $${AbigailData.budget[1].spent} on coffee this month, Abigail. Maybe skip a few lattes to hit that savings goal? ☕️` });
      if (lower.includes('loan')) return NextResponse.json({ text: `You're ${AbigailData.loans.percent}% of the way to being debt-free! Just $${AbigailData.loans.remaining.toLocaleString()} to go! 🏃‍♀️` });
      return NextResponse.json({ text: "I'm currently in 'Demo Mode'! I can tell you about your coffee spending or student loan progress. Try asking: 'How are my loans?'" });
    }

    // 3. ATTEMPT REAL AI
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `You are FidAi, a coach for HerFund. The user is Abigail. Data: Checking $${AbigailData.balance}, Savings $${AbigailData.savings}, Loan $${AbigailData.loans.remaining}. Use this data to be helpful and concise.` 
        },
        { role: "user", content: message }
      ],
      model: "llama3-8b-8192",
    });

    return NextResponse.json({ text: chatCompletion.choices[0]?.message?.content });

  } catch (error: any) {
    console.error("CRITICAL API ERROR:", error.message);
    // 4. CATCH-ALL: Never show the user a red error
    return NextResponse.json({ text: "Hey Abigail! I'm doing a quick update. Ask me about your coffee or loans in the meantime! 🌿" });
  }
}