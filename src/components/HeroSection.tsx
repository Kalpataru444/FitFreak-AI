import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Flame, 
  TrendingUp, 
  Dumbbell, 
  Apple, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  Activity, 
  X,
  Play
} from 'lucide-react';
import cyberGymHero from '../assets/images/cybernetic_workout_hero_1790433836025.jpg';

interface HeroSectionProps {
  onExploreDemo: () => void;
  onOpenFeatures: (route?: string) => void;
  onGoToLogin: () => void;
  user?: any | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreDemo, 
  onOpenFeatures,
  onGoToLogin,
  user
}) => {
  // Typing subtitle animation matching Home.jsx in Surjendu-Pal/FitFreak-AI
  const fullText = "Overcome your fitness procrastination and achieve your goals!";
  const [typedText, setTypedText] = useState("");
  const [showReviews, setShowReviews] = useState(false);

  // Interactive mini simulation in the hero card
  const [repCount, setRepCount] = useState(5);
  const [kneeAngle, setKneeAngle] = useState(91);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typingInterval);
    }, 38);
    return () => clearInterval(typingInterval);
  }, []);

  const handleSimulateRep = () => {
    setIsSimulating(true);
    setKneeAngle(115);
    setTimeout(() => {
      setKneeAngle(88);
      setRepCount((prev) => (prev >= 10 ? 1 : prev + 1));
      setIsSimulating(false);
    }, 700);
  };

  // Real reviews from Home.jsx
  const authenticReviews = [
    { name: "Alice", role: "Daily Streak Champion", review: "FitFreak AI helped me finally stick to my daily workouts!" },
    { name: "John", role: "Strength Athlete", review: "Love the streak feature, keeps me motivated every day." },
    { name: "Sophie", role: "Nutrition & Mobility", review: "The nutrition guidance and progress tracking are top-notch." },
  ];

  // 5 Core Features matching Home.jsx with direct links to website features
  const coreFeatures = [
    { text: "Maintain streaks to earn rewards", emoji: "💪", route: "/current-streak" },
    { text: "Track your progress and stats", emoji: "📊", route: "/progress" },
    { text: "Personalized workouts and plans", emoji: "🏋️‍♂️", route: "/plans" },
    { text: "Smart nutrition guidance", emoji: "🥗", route: "/plans" },
    { text: "Join the community and stay motivated", emoji: "🤝", route: "/community" },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Proposition, Typing Text & Core Parameters */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Metadata Release Tag */}
          <div className="flex items-center gap-2 text-xs font-mono text-violet-300/90 tracking-wide uppercase">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FitFreak AI Core</span>
            <span aria-hidden="true" className="text-violet-600">·</span>
            <span>Local AI Inference</span>
            <span aria-hidden="true" className="text-violet-600">·</span>
            <span>Open Source</span>
          </div>

          {/* Main Headline in exact brand font */}
          <div className="space-y-3">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tight text-white leading-[1.08] text-balance font-brand"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.7)',
              }}
            >
              FitFreak{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400">
                AI
              </span>
            </h1>

            {/* Typing Subtitle from Home.jsx */}
            <p className="text-base sm:text-xl text-purple-200 font-mono font-medium min-h-[1.75rem] flex items-center">
              <span>{typedText}</span>
              <span className="inline-block w-2 h-5 bg-violet-400 ml-1 animate-pulse" />
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed pt-1">
              Turns your personal profile and primary goals into structured weekly plans, measurable daily missions, real-time computer vision kinematics, and contextual AI coaching.
            </p>
          </div>

          {/* 5 Core Feature Parameters from Home.jsx - Clickable to open that exact feature */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {coreFeatures.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onOpenFeatures(item.route)}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-violet-950/20 hover:bg-violet-900/40 border border-violet-900/30 hover:border-violet-500/50 text-xs text-slate-200 hover:text-white transition-all text-left cursor-pointer group"
                title={`Open ${item.text}`}
              >
                <span className="text-base select-none group-hover:scale-110 transition-transform">{item.emoji}</span>
                <span className="font-medium group-hover:text-violet-300 transition-colors">{item.text}</span>
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {/* Get Started -> enters website features directly */}
            <button
              type="button"
              onClick={() => onOpenFeatures('/goals')}
              className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-violet-900/40 hover:shadow-violet-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-violet-200" />
              <span>Get Started →</span>
            </button>

            {/* Enter Website / Demo Access */}
            <button
              type="button"
              onClick={onGoToLogin}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-violet-950/80 border border-violet-500/40 rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer hover:border-violet-400"
            >
              <span>{user ? `Dashboard (${user.name})` : 'Enter Website / Login'}</span>
            </button>

            {/* Test Interactive AI Demos */}
            <button
              type="button"
              onClick={onExploreDemo}
              className="px-5 py-3.5 text-sm font-semibold text-violet-300 hover:text-white bg-violet-950/50 hover:bg-violet-900/70 border border-violet-500/40 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Activity className="w-4 h-4 text-violet-400" />
              <span>Test AI Kinematics Demo</span>
            </button>

            {/* Get Reviews Toggle matching Home.jsx */}
            <button
              type="button"
              onClick={() => setShowReviews(!showReviews)}
              className="px-4 py-3.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-violet-900/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>{showReviews ? "Close Reviews" : "Get Reviews"}</span>
            </button>
          </div>

          {/* Conditional Floating Reviews from Home.jsx */}
          {showReviews && (
            <div className="p-4 rounded-2xl bg-[#0c0919]/95 border border-violet-500/40 space-y-3 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between text-xs font-mono text-violet-300 pb-2 border-b border-violet-900/40">
                <span>Community Athlete Feedback</span>
                <button
                  type="button"
                  onClick={() => setShowReviews(false)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {authenticReviews.map((rev, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-violet-900/30 space-y-1.5 text-left">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{rev.review}"
                    </p>
                    <div className="text-[11px] font-bold text-violet-300 font-mono">
                      — {rev.name} <span className="font-normal text-slate-500">({rev.role})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Adjacency Parameter Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-violet-900/30">
            <div>
              <div className="text-xl font-bold font-mono text-white tabular-nums">0.02s</div>
              <div className="text-xs text-slate-400 mt-0.5">Local Inference Latency</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-purple-300 tabular-nums">33-Point</div>
              <div className="text-xs text-slate-400 mt-0.5">3D Skeletal Tracking</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-white tabular-nums">Weekly</div>
              <div className="text-xs text-slate-400 mt-0.5">Custom Split Generation</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-purple-300 tabular-nums">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">On-Device Edge Privacy</div>
            </div>
          </div>

        </div>

        {/* Right Column: Live Interactive Biomechanical HUD & Visual Showcase */}
        <div className="lg:col-span-5 relative">
          
          {/* Cybernetic Glow Backdrop */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-2xl opacity-25 -z-10 animate-pulse" />

          {/* Main Card Container */}
          <div className="relative rounded-2xl bg-[#0c0918]/90 border border-violet-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
            
            {/* Header Telemetry Bar */}
            <div className="px-5 py-3.5 bg-violet-950/40 border-b border-violet-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-slate-200 uppercase tracking-wider font-semibold">
                  CV Kinematics: Back Squat
                </span>
              </div>
              <span className="text-[11px] font-mono text-violet-300">
                FPS: 60 · MediaPipe Engine
              </span>
            </div>

            {/* Visual Screen with Generated Aesthetic Image & Holographic HUD */}
            <div className="relative aspect-[16/10] overflow-hidden group">
              <img
                src={cyberGymHero}
                alt="FitFreak AI Biomechanical Skeleton Tracker in Cybernetic Gym"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0918] via-transparent to-black/30 pointer-events-none" />

              {/* Holographic Angle Callout */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-violet-500/40 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-white font-bold tabular-nums">
                  Knee Angle: {kneeAngle}°
                </span>
              </div>

              {/* Rep Count Indicator */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-violet-500/40 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-mono text-purple-200 font-bold tabular-nums">
                  Rep #{repCount} (Clean)
                </span>
              </div>

              {/* Live Form Guidance Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-violet-950/85 backdrop-blur-md border border-violet-400/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-100 font-medium">
                    Depth Parallel · Zero Lumbar Shear Detected
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleSimulateRep}
                  disabled={isSimulating}
                  className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-mono text-[11px] font-semibold transition-all shrink-0 cursor-pointer disabled:opacity-60"
                >
                  {isSimulating ? 'Tracking...' : 'Simulate Rep'}
                </button>
              </div>

            </div>

            {/* Bottom Hardware Telemetry Bar */}
            <div className="p-4 bg-slate-950/80 border-t border-violet-900/40 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-1.5 rounded-lg bg-violet-950/30">
                <div className="text-[10px] text-slate-400 uppercase">Latency</div>
                <div className="text-emerald-400 font-bold">18 ms</div>
              </div>
              <div className="p-1.5 rounded-lg bg-violet-950/30">
                <div className="text-[10px] text-slate-400 uppercase">Spine Vector</div>
                <div className="text-purple-300 font-bold">178° Neutral</div>
              </div>
              <div className="p-1.5 rounded-lg bg-violet-950/30">
                <div className="text-[10px] text-slate-400 uppercase">Privacy</div>
                <div className="text-white font-bold">Local Only</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
