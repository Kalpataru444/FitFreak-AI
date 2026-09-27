import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  User, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface LoginPageProps {
  onLoginSuccess: (user: any) => void;
  onNavigateHome: () => void;
  initialMode?: 'login' | 'register';
}

export const LoginPage: React.FC<LoginPageProps> = ({ 
  onLoginSuccess, 
  onNavigateHome,
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('178');
  const [currentWeight, setCurrentWeight] = useState('75');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const performLogin = (customName?: string, customEmail?: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const chosenEmail = customEmail || email.trim() || 'athlete@fitfreak.ai';
      const chosenName = customName || name.trim() || chosenEmail.split('@')[0];
      const capitalized = chosenName.charAt(0).toUpperCase() + chosenName.slice(1);
      
      const userPayload = {
        _id: 'usr_athlete_101',
        name: capitalized || 'Alex Mercer',
        email: chosenEmail,
        age: age ? Number(age) : 24,
        gender: gender || 'male',
        height: height ? Number(height) : 178,
        currentWeight: currentWeight ? Number(currentWeight) : 75,
        activityLevel: 'moderate',
        bmi: 23.7,
        tdee: 2520,
        createdAt: '2026-01-10T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
        friends: ['usr_sarah', 'usr_david'],
      };

      onLoginSuccess(userPayload);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    performLogin();
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center relative z-20">
      
      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-6 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to FitFreak AI Home</span>
        </button>

        <BrandLogo size="sm" showText={false} />
      </div>

      {/* Main Form Container Card */}
      <div className="w-full max-w-md rounded-3xl bg-[#0c0919]/95 border border-violet-500/40 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-2xl text-left relative overflow-hidden">
        
        {/* Glow corner accents */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

        {/* 1-CLICK INSTANT ENTRY BUTTON */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/80 via-purple-950/80 to-indigo-950/80 border border-violet-400/40 space-y-2 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-violet-300 font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Instant Athlete Access</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              One-Click
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Open all website features (Goals, Plans, Progress, Community, Profile) immediately:
          </p>
          <button
            type="button"
            onClick={() => performLogin('Alex Mercer', 'alex.mercer@fitfreak.ai')}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-900/50 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-violet-200" />
            <span>{loading ? 'Opening Features...' : 'Enter Website as Demo Athlete →'}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-violet-900/40 w-full" />
          <span className="bg-[#0c0919] px-3 text-[11px] font-mono text-slate-500 uppercase tracking-widest relative">
            Or Sign In With Account
          </span>
        </div>

        {/* Tab Toggle: Login vs Register */}
        <div className="flex rounded-xl bg-slate-950/80 p-1 border border-violet-900/40">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        <div>
          <h2 
            className="text-2xl font-bold italic text-white font-brand"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {mode === 'login' ? 'Account Login' : 'Create an Account'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'login'
              ? 'Enter your email to access your goals, workout splits, and streak coins.'
              : 'Register your athlete profile to start generating weekly missions.'}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-mono">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="24"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-mono">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-mono">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="athlete@fitfreak.ai"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300 font-mono">Password</label>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-violet-500/30 cursor-pointer"
          >
            <span>{mode === 'login' ? 'Sign In & Open Website' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center">
          <p className="text-[11px] text-slate-500">
            End-to-End local encrypted profile storage · MIT Open Source
          </p>
        </div>

      </div>
    </div>
  );
};
