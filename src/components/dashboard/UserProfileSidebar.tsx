import React from 'react';

interface UserProfileSidebarProps {
  user: {
    name: string;
    email: string;
    age: number;
    gender: string;
    height: number;
    currentWeight: number;
    bmi: number;
    tdee: number;
    createdAt: string;
  };
}

export const UserProfileSidebar: React.FC<UserProfileSidebarProps> = ({ user }) => {
  const genderIcon =
    user.gender?.toLowerCase() === 'male'
      ? '♂'
      : user.gender?.toLowerCase() === 'female'
      ? '♀'
      : '⚧';

  return (
    <div className="p-4 rounded-2xl bg-[#0c0919] border border-violet-900/30 text-left space-y-4 shadow-xl">
      {/* Avatar + Name / Age */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-lg font-bold font-mono shadow-md">
          {(user.name || 'U').charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-white font-mono truncate max-w-[140px]">
            {user.name}
          </div>
          <div className="text-xs text-violet-300 font-mono">
            {user.age ?? 'N/A'} yrs
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="pt-2 border-t border-violet-900/30 space-y-1.5 text-xs font-mono text-slate-300">
        <div><strong>Height:</strong> {user.height ?? 'N/A'} cm</div>
        <div><strong>Weight:</strong> {user.currentWeight ?? 'N/A'} kg</div>
        <div><strong>Gender:</strong> <span className="text-violet-400 font-bold ml-1">{genderIcon}</span></div>
      </div>

      {/* BMI, TDEE, Joined */}
      <div className="pt-2 border-t border-violet-900/30 space-y-1.5 text-xs font-mono text-slate-300">
        <div><strong>BMI:</strong> <span className="text-emerald-400 font-bold">{user.bmi ?? 'N/A'}</span></div>
        <div><strong>TDEE:</strong> <span className="text-violet-300 font-bold">{user.tdee ?? 'N/A'} kcal</span></div>
        <div className="text-[11px] text-slate-500">
          <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};
