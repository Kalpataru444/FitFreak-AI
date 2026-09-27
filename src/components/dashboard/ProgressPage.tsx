import React from 'react';
import { Flame, Coins, Calendar, ChevronRight } from 'lucide-react';

interface ProgressPageProps {
  currentStreak: number;
  longestStreak: number;
  coins: number;
  onNavigate: (route: string) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  currentStreak,
  longestStreak,
  coins,
  onNavigate,
}) => {
  const year = new Date().getFullYear();

  // Generate 12 months with sample consistency activity
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="space-y-8 text-left max-w-4xl mx-auto py-2">
      
      {/* Header */}
      <div className="border-b border-violet-900/30 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Calendar className="w-7 h-7 text-violet-400" />
          <span>Progress & Activity Tracker</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Review your yearly workout consistency, streak milestones, and coin wallet.
        </p>
      </div>

      {/* Stats Container (Clickable cards matching Progress.jsx) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Streak Box */}
        <div
          onClick={() => onNavigate('/current-streak')}
          className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/50 hover:bg-violet-950/20 transition-all cursor-pointer shadow-xl space-y-2 group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-amber-400">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>Current Streak</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-3xl font-black font-mono text-white">
            {currentStreak} days
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Longest Streak: <span className="text-violet-300 font-bold">{longestStreak} days</span>
          </div>
        </div>

        {/* Coin Wallet Box */}
        <div
          onClick={() => onNavigate('/coins')}
          className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/50 hover:bg-violet-950/20 transition-all cursor-pointer shadow-xl space-y-2 group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-violet-300">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>Coin Wallet</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-3xl font-black font-mono text-amber-400">
            👜 {coins} 🪙
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Earned from daily plans and check-ins
          </div>
        </div>

      </div>

      {/* Calendar Heatmap matching calendar-wrapper in Progress.jsx */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0919] border border-violet-900/30 space-y-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white font-mono flex items-center gap-2">
            <span>{year} Workout Consistency Heatmap</span>
          </h2>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#4caf50]" />
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#2a2a2a]" />
              <span>Rest / Missed</span>
            </div>
          </div>
        </div>

        {/* 12-Month Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {months.map((m, mIdx) => (
            <div key={m} className="p-3 rounded-xl bg-slate-950/70 border border-violet-900/30 space-y-2">
              <div className="text-xs font-mono font-bold text-violet-300 text-center">
                {m}
              </div>
              <div className="grid grid-cols-5 gap-1 justify-center">
                {Array.from({ length: 28 }).map((_, dIdx) => {
                  const completed = (mIdx * 3 + dIdx) % 3 !== 0;
                  return (
                    <div
                      key={dIdx}
                      className="w-3 h-3 rounded-sm transition-colors"
                      style={{ backgroundColor: completed ? '#4caf50' : '#2a2a2a' }}
                      title={`${m} Day ${dIdx + 1}: ${completed ? 'Completed' : 'Rest'}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
