import React, { useState } from 'react';
import { User, LogOut, Edit3, Shield, Award, Check } from 'lucide-react';

interface UserData {
  _id: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  height: number;
  currentWeight: number;
  activityLevel: string;
  bmi: number;
  tdee: number;
  createdAt: string;
  updatedAt: string;
  friends: any[];
}

interface ProfilePageProps {
  user: UserData;
  currentStreak: number;
  onUpdateUser: (updated: Partial<UserData>) => void;
  onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  currentStreak,
  onUpdateUser,
  onLogout,
}) => {
  const [editing, setEditing] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    gender: user.gender,
    height: user.height,
    currentWeight: user.currentWeight,
    activityLevel: user.activityLevel,
  });

  const badges = [
    { day: 1, title: 'Squire' },
    { day: 3, title: 'Page' },
    { day: 7, title: 'Knight' },
    { day: 14, title: 'Champion' },
    { day: 30, title: 'Lord / Lady' },
    { day: 50, title: 'Baron / Baroness' },
    { day: 100, title: 'Royalty' },
  ];

  const unlockedBadges = badges.filter((badge) => currentStreak >= badge.day);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser(formData);
    setEditing(false);
    setMsg('Profile updated successfully.');
    setTimeout(() => setMsg(''), 2500);
  };

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Sidebar */}
        <aside className="md:col-span-4 p-6 rounded-3xl bg-[#0c0919] border border-violet-900/30 space-y-6 text-center shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-3xl font-bold font-mono shadow-lg shadow-violet-950/60">
            {user.name.charAt(0)}
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-xs font-mono text-slate-400 mt-0.5">{user.email}</p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setEditing(!editing);
                setMsg('');
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-violet-950/60 hover:bg-violet-900/80 border border-violet-500/40 text-violet-200 transition-all cursor-pointer"
            >
              {editing ? 'Cancel Editing' : 'Edit Profile'}
            </button>
            <button
              onClick={onLogout}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 text-rose-300 transition-all cursor-pointer"
            >
              Logout
            </button>
          </div>

          <div className="pt-4 border-t border-violet-900/30 space-y-2 text-xs font-mono text-left">
            <div className="flex justify-between">
              <span className="text-slate-400">BMI:</span>
              <span className="text-emerald-400 font-bold">{user.bmi}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">TDEE:</span>
              <span className="text-violet-300 font-bold">{user.tdee} kcal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Joined:</span>
              <span className="text-slate-300">{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </aside>

        {/* Main Details */}
        <main className="md:col-span-8 space-y-6">
          <div className="p-6 rounded-3xl bg-[#0c0919] border border-violet-900/30 space-y-5 shadow-xl">
            <h3 className="text-base font-bold text-white font-mono flex items-center justify-between">
              <span>Profile Details</span>
              {msg && <span className="text-xs text-emerald-400 font-normal">{msg}</span>}
            </h3>

            {!editing ? (
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Name:</span>
                  <div className="text-white font-bold text-sm mt-0.5">{user.name}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Email:</span>
                  <div className="text-white font-bold text-sm mt-0.5 truncate">{user.email}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Age:</span>
                  <div className="text-white font-bold text-sm mt-0.5">{user.age} yrs</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Gender:</span>
                  <div className="text-white font-bold text-sm mt-0.5 capitalize">{user.gender}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Height:</span>
                  <div className="text-white font-bold text-sm mt-0.5">{user.height} cm</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Current Weight:</span>
                  <div className="text-white font-bold text-sm mt-0.5">{user.currentWeight} kg</div>
                </div>
                <div className="col-span-2 p-3 rounded-xl bg-slate-950/60 border border-violet-900/20">
                  <span className="text-slate-400">Activity Level:</span>
                  <div className="text-white font-bold text-sm mt-0.5 capitalize">{user.activityLevel}</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Height (cm)</label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Current Weight (kg)</label>
                    <input
                      type="number"
                      value={formData.currentWeight}
                      onChange={(e) => setFormData({ ...formData, currentWeight: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-xs font-mono text-slate-400">Activity Level</label>
                    <select
                      value={formData.activityLevel}
                      onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 text-xs text-white outline-none"
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light</option>
                      <option value="moderate">Moderate</option>
                      <option value="active">Active</option>
                      <option value="very_active">Very active</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Account Metadata */}
          <div className="p-5 rounded-2xl bg-[#0c0919] border border-violet-900/30 text-xs font-mono text-slate-400 space-y-1.5 shadow-xl">
            <h4 className="font-bold text-white uppercase text-[11px] mb-2">Account Metadata</h4>
            <div><strong>User ID:</strong> {user._id}</div>
            <div><strong>Last Updated:</strong> {new Date(user.updatedAt).toLocaleString()}</div>
            <div><strong>Friends:</strong> {user.friends?.length || 0}</div>
          </div>

          {/* Unlocked Badges */}
          <div className="p-5 rounded-2xl bg-[#0c0919] border border-violet-900/30 space-y-3 shadow-xl">
            <h4 className="font-bold text-white uppercase text-xs font-mono">
              Unlocked Badges ({unlockedBadges.length}/{badges.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {unlockedBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>{badge.title} ({badge.day}d)</span>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};
