import React from 'react';
import { ArrowLeft, Flame, Shield, Trophy } from 'lucide-react';

interface CurrentStreakPageProps {
  currentStreak: number;
  longestStreak: number;
  onNavigate: (route: string) => void;
}

export const CurrentStreakPage: React.FC<CurrentStreakPageProps> = ({
  currentStreak,
  longestStreak,
  onNavigate,
}) => {
  const leaderboard = [
    { username: 'JohnDoe', streak: 120 },
    { username: 'FitQueen', streak: 95 },
    { username: 'IronMan', streak: 75 },
    { username: 'Zayed', streak: 60 },
    { username: 'Alex', streak: 45 },
  ];

  const badges = [
    { day: 1, title: 'Squire' },
    { day: 3, title: 'Page' },
    { day: 7, title: 'Knight' },
    { day: 14, title: 'Champion' },
    { day: 30, title: 'Lord / Lady' },
    { day: 50, title: 'Baron / Baroness' },
    { day: 100, title: 'Royalty' },
  ];

  const nextBadge = badges.find((badge) => badge.day > currentStreak);
  const daysLeft = nextBadge ? nextBadge.day - currentStreak : 0;

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      <button
        onClick={() => onNavigate('/progress')}
        className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-violet-900/30 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>⬅ Back to Progress</span>
      </button>

      {/* Streak Info Box */}
      <div className="p-7 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#0c0919] to-orange-950/30 border border-amber-500/40 space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
          <Flame className="w-4 h-4 fill-amber-400" />
          <span>Your Streak Telemetry</span>
        </div>
        <div className="text-4xl font-black font-mono text-white">
          {currentStreak} Days
        </div>
        <p className="text-xs text-slate-400 font-mono">
          Longest Streak: <span className="text-violet-300 font-bold">{longestStreak} Days</span>
        </p>
        <p className="text-xs sm:text-sm text-slate-200 pt-1 leading-relaxed">
          {nextBadge
            ? `Keep going! Only ${daysLeft} more day${daysLeft > 1 ? 's' : ''} to unlock your "${nextBadge.title}" badge!`
            : "You're a champion! Keep maintaining your streak!"}
        </p>
      </div>

      {/* Badge Tier Box */}
      <div className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 space-y-4 shadow-xl">
        <h2 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
          Badge Tiers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {badges.map((badge, idx) => {
            const unlocked = currentStreak >= badge.day;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-center space-y-2 transition-all ${
                  unlocked
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    : 'bg-slate-950/60 border-violet-900/20 text-slate-500'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-slate-900 flex items-center justify-center border border-violet-900/30">
                  <Shield className={`w-5 h-5 ${unlocked ? 'text-amber-400 fill-amber-400/20' : 'text-slate-600'}`} />
                </div>
                <div className="font-bold font-mono text-xs">{badge.title}</div>
                <div className="text-[10px] font-mono">
                  {unlocked ? 'Unlocked' : `${badge.day}d`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard Box */}
      <div className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <h2 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
            Sample Streak Leaderboard
          </h2>
        </div>
        <p className="text-xs text-slate-400">
          Example rankings. Live community rankings are coming soon.
        </p>

        <ul className="divide-y divide-violet-900/20">
          {leaderboard.map((user, index) => (
            <li key={index} className="py-2.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-bold w-6">#{index + 1}</span>
                <span className="text-white font-medium">{user.username}</span>
              </div>
              <span className="text-amber-400 font-bold">{user.streak} Days</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
