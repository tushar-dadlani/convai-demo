import {ConvAI} from "@/components/ConvAI";
import AgentSuggestions from '@/components/AgentSuggestions';

export default function Home() {
    const exampleSuggestions = [
        "How do I say 'hello' or 'hi' in Hindi?",
        "Can you help me practice introducing myself?",
        "I want to learn how to ask for directions—like, where's the metro?",
        "How do I order food in a restaurant without it being too spicy?",
        "What should I say if I want to buy something in a market?",
        "Can you teach me how to politely ask for help?",
        "What’s the best way to say I don’t speak much Hindi?",
        "How do I ask someone their name and tell them mine?",
        "If I feel sick, how can I tell someone in Hindi?",
        "Can we roleplay a short conversation I might have with a local?"
    ];

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-row gap-8 row-start-2 items-start justify-center w-full max-w-6xl">
                {/* Suggestions Column (Left) */}
                <div className="w-1/2">
                    <AgentSuggestions 
                        title="Try asking something like:" 
                        suggestions={exampleSuggestions} 
                    />
                </div>

                {/* ConvAI Column (Right) */}
                <div className="w-1/2">
                    <ConvAI/>
                </div>
            </main>
        </div>
    );
}
