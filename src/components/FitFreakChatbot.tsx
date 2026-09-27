import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Trash2, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Dumbbell, 
  Apple, 
  ChevronRight 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface FitFreakChatbotProps {
  userSession: { email: string; name: string; role: string } | null;
  onNavigateTo: (view: string) => void;
}

const DEFAULT_SUGGESTIONS = [
  'How do I calculate my daily protein target?',
  'What is the proper bar path for Back Squats?',
  'How do I maintain my 5-day workout streak?',
  'I feel knee discomfort during lunges. What should I adjust?',
];

export const FitFreakChatbot: React.FC<FitFreakChatbotProps> = ({ userSession, onNavigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Hey${userSession ? ` ${userSession.name}` : ''}! I'm your FitFreak AI contextual coach. Ask me about your workout form, daily missions, macro breakdowns, or how to break through plateaus safely.`,
      timestamp: 'Just now',
    },
  ]);
  const [inputDraft, setInputDraft] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputDraft).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputDraft('');
    setIsTyping(true);

    // Contextual responses matching FitFreak AI knowledge base & safety rules
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('protein') || lower.includes('macro') || lower.includes('calories') || lower.includes('diet')) {
        reply = `For optimal muscle synthesis and recovery, aim for 1.6g to 2.2g of protein per kilogram of target body weight. Using the FitFreak Volumetric Food Scanner on the home page, you can snapshot meals to calibrate macros without manual weighing. Remember to distribute your protein across 3 to 4 meals for steady leucine delivery.`;
      } else if (lower.includes('squat') || lower.includes('knee') || lower.includes('form') || lower.includes('biomechanic')) {
        reply = `Biomechanical Form Tip: Maintain a tripod foot stance (big toe, pinky toe, heel), push your knees outward along your second toe to avoid valgus cave, and brace your intra-abdominal core to maintain a neutral lumbar spine (target 175°-180°). If you experience joint discomfort, reduce the load and verify depth with our 33-point Pose Kinematics checker!`;
      } else if (lower.includes('streak') || lower.includes('coin') || lower.includes('xp') || lower.includes('reward')) {
        reply = `Every completed daily mission earns you 50 XP and 20 FitFreak Coins! Keeping your daily workout streak active multiplies your XP gains. Check out the 'Plans' tab to check off today's missions and 'Coins & Streaks' to redeem cyber skins and boosters.`;
      } else if (lower.includes('sore') || lower.includes('hurt') || lower.includes('pain') || lower.includes('fatigue')) {
        reply = `Safety note: FitFreak AI detects acute strain vs. normal DOMS. If you have sharp joint pain or elevated central fatigue (low HRV), adjust today's session to an active recovery walk and gentle mobility. Remember: FitFreak provides training guidance, not clinical medical advice.`;
      } else {
        reply = `Great question! In FitFreak AI, we align daily missions with your primary target (weight loss, muscle hypertrophy, or endurance). You can set your specific timeline in 'Goals', follow your customized split in 'Plans', and log body weight in 'Progress' to keep your streak burning!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: reply,
          timestamp: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 750);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: `Chat history cleared. How can I help you train with biomechanical precision today?`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#0c0819] border border-violet-500/40 shadow-2xl flex flex-col overflow-hidden mb-3 animate-fade-in backdrop-blur-2xl">
          
          {/* Header */}
          <div className="p-4 bg-violet-950/70 border-b border-violet-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>FitFreak AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <span className="text-[10px] font-mono text-violet-300">
                  {userSession ? `Synced: ${userSession.name}` : 'Local Guidance Engine'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearHistory}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors cursor-pointer"
                title="Clear conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="px-3 py-2 bg-slate-950/60 border-b border-violet-900/30 flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-slate-300">
            <button
              type="button"
              onClick={() => {
                onNavigateTo('demos');
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-lg bg-violet-950/40 hover:bg-violet-900/60 border border-violet-700/30 text-violet-300 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>AI Kinematics</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateTo('features');
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-lg bg-violet-950/40 hover:bg-violet-900/60 border border-violet-700/30 text-violet-300 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Streaks & Goals</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateTo('login');
                setIsOpen(false);
              }}
              className="px-2.5 py-1 rounded-lg bg-violet-950/40 hover:bg-violet-900/60 border border-violet-700/30 text-violet-300 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Login Portal</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3.5 text-left text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="flex items-center gap-1 mb-1 text-[10px] font-mono text-slate-400">
                  <span>{msg.role === 'user' ? 'You' : 'FitFreak AI'}</span>
                  <span>·</span>
                  <span>{msg.timestamp}</span>
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-none shadow-md shadow-violet-950/40'
                      : 'bg-slate-900/90 text-slate-200 border border-violet-900/40 rounded-bl-none shadow-md'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-violet-900/30 w-fit text-violet-300 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                <span>FitFreak AI is thinking...</span>
              </div>
            )}
          </div>

          {/* Prompt Suggestions */}
          {!isTyping && messages.length <= 3 && (
            <div className="px-3 pb-2 flex flex-col gap-1 text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Suggested queries:</span>
              <div className="flex flex-wrap gap-1.5">
                {DEFAULT_SUGGESTIONS.slice(0, 2).map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(sug)}
                    className="text-[10px] px-2 py-1 rounded-lg bg-violet-950/50 hover:bg-violet-900/60 border border-violet-800/30 text-violet-300 hover:text-white transition-all text-left cursor-pointer truncate max-w-full"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-950/90 border-t border-violet-900/40 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputDraft}
              onChange={(e) => setInputDraft(e.target.value)}
              placeholder="Ask fitness question or form tip..."
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-violet-900/40 focus:border-violet-500 text-white placeholder:text-slate-500 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputDraft.trim() || isTyping}
              className="p-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-40 transition-all cursor-pointer"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold shadow-xl shadow-violet-950/80 hover:shadow-violet-600/40 flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-violet-400/40"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs font-mono font-medium">Close Coach</span>
          </>
        ) : (
          <>
            <Bot className="w-5 h-5 text-violet-200" />
            <span className="text-xs font-mono font-medium">Ask FitFreak AI</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </>
        )}
      </button>

    </div>
  );
};
