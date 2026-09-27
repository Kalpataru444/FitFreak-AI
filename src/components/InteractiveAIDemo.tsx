import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Activity, 
  Utensils, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  Scan, 
  Sliders, 
  Layers, 
  Zap, 
  ChevronRight 
} from 'lucide-react';
import mealScannerImg from '../assets/images/meal_vision_scanner_1790433849680.jpg';

export const InteractiveAIDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biomechanics' | 'meal'>('biomechanics');

  // Biomechanics Simulator State
  const [exercise, setExercise] = useState<'squat' | 'deadlift' | 'press' | 'curl'>('squat');
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [repCount, setRepCount] = useState(3);

  // Meal Vision State
  const [selectedMeal, setSelectedMeal] = useState<number>(0);
  const [isScanning, setIsScanning] = useState(false);
  const [loggedNotification, setLoggedNotification] = useState<string | null>(null);

  // Exercises data
  const exerciseConfigs = {
    squat: {
      name: 'Barbell Back Squat',
      targetMuscles: 'Quadriceps · Gluteus Maximus · Adductors',
      optimalAngleRange: '80° - 90° Knee Angle',
      getAngle: (p: number) => Math.round(170 - (170 - 85) * Math.sin((p / 100) * Math.PI)),
      getHipAngle: (p: number) => Math.round(175 - (175 - 72) * Math.sin((p / 100) * Math.PI)),
      getCue: (p: number) => {
        if (p < 20) return 'Descend with controlled eccentric tempo. Brace core.';
        if (p < 55) return 'Tracking hip hinge. Knee tracking over second toe.';
        if (p >= 55 && p <= 75) return 'Optimal depth reached below parallel. Drive upwards!';
        return 'Squeeze glutes at top lockout. Neutral cervical alignment.';
      },
      status: 'Optimal Depth Verified',
    },
    deadlift: {
      name: 'Conventional Barbell Deadlift',
      targetMuscles: 'Hamstrings · Erector Spinae · Lats · Glutes',
      optimalAngleRange: '45° - 55° Hip Hinge',
      getAngle: (p: number) => Math.round(165 - (165 - 110) * Math.sin((p / 100) * Math.PI)),
      getHipAngle: (p: number) => Math.round(170 - (170 - 55) * Math.sin((p / 100) * Math.PI)),
      getCue: (p: number) => {
        if (p < 30) return 'Pull slack out of bar. Engage lats and lock thoracic spine.';
        if (p < 70) return 'Bar path is 99% vertical. Push floor away through mid-foot.';
        return 'Lock hips through. Avoid excessive lumbar hyperextension.';
      },
      status: 'Spine Neutral at 179°',
    },
    press: {
      name: 'Standing Overhead Press',
      targetMuscles: 'Anterior Deltoids · Triceps · Serratus Anterior',
      optimalAngleRange: '175° - 180° Shoulder Lockout',
      getAngle: (p: number) => Math.round(85 + (180 - 85) * Math.sin((p / 100) * Math.PI)),
      getHipAngle: (p: number) => 180,
      getCue: (p: number) => {
        if (p < 30) return 'Tight glutes, braced abs. Clear chin on the ascent.';
        if (p < 70) return 'Drive bar straight upwards over base of neck.';
        return 'Full active shoulder elevation at lockout. Squeeze overhead.';
      },
      status: 'Vertical Bar Path Verified',
    },
    curl: {
      name: 'Incline Dumbbell Bicep Curl',
      targetMuscles: 'Biceps Brachii (Long Head) · Brachialis',
      optimalAngleRange: '40° - 165° Elbow ROM',
      getAngle: (p: number) => Math.round(160 - (160 - 45) * Math.sin((p / 100) * Math.PI)),
      getHipAngle: (p: number) => 135,
      getCue: (p: number) => {
        if (p < 35) return 'Maintain fixed elbow position. Supinate wrist outward.';
        if (p < 75) return 'Peak contraction. Avoid forward shoulder swinging.';
        return 'Controlled 3-second eccentric stretch down to full extension.';
      },
      status: 'Zero Momentum Detected',
    },
  };

  // Run rep animation cycle
  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setRepCount((r) => (r >= 10 ? 1 : r + 1));
          return 0;
        }
        return prev + 2.5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Meals data for the Meal Scanner demo
  const sampleMeals = [
    {
      id: 0,
      name: 'Wild Alaskan Salmon & Quinoa Bowl',
      category: 'Lean Hypertrophy Fuel',
      weightGrams: 480,
      calories: 615,
      protein: 48,
      carbs: 52,
      fats: 22,
      fiber: 8,
      bioavailability: '98/100',
      ingredients: [
        { item: 'Wild Sockeye Salmon Fillet', mass: '200g', calories: 280, protein: 40, carbs: 0, fat: 12 },
        { item: 'Organic Tri-Color Quinoa', mass: '160g', calories: 220, protein: 7, carbs: 40, fat: 3 },
        { item: 'Haas Avocado Slices', mass: '60g', calories: 95, protein: 1, carbs: 5, fat: 9 },
        { item: 'Steamed Baby Spinach & Microgreens', mass: '60g', calories: 20, protein: 2, carbs: 3, fat: 0 },
      ],
      aiConfidence: '99.2%',
    },
    {
      id: 1,
      name: 'Grass-Fed Ribeye & Roasted Sweet Potato',
      category: 'Powerlifting High-Protein Rebuild',
      weightGrams: 520,
      calories: 780,
      protein: 62,
      carbs: 58,
      fats: 32,
      fiber: 7,
      bioavailability: '99/100',
      ingredients: [
        { item: 'Grass-Fed Ribeye Steak', mass: '240g', calories: 510, protein: 56, carbs: 0, fat: 30 },
        { item: 'Roasted Japanese Sweet Potato', mass: '200g', calories: 210, protein: 4, carbs: 48, fat: 1 },
        { item: 'Grilled Asparagus Spears', mass: '80g', calories: 60, protein: 2, carbs: 10, fat: 1 },
      ],
      aiConfidence: '98.7%',
    },
    {
      id: 2,
      name: 'Pro-Anabolic Greek Yogurt & Berry Parfait',
      category: 'Pre-Workout Rapid Digest',
      weightGrams: 350,
      calories: 390,
      protein: 38,
      carbs: 44,
      fats: 4,
      fiber: 6,
      bioavailability: '96/100',
      ingredients: [
        { item: '0% Fat Icelandic Skyr / Greek Yogurt', mass: '250g', calories: 180, protein: 32, carbs: 10, fat: 0 },
        { item: 'Hydrolyzed Whey Isolate Blend', mass: '20g', calories: 80, protein: 18, carbs: 1, fat: 0 },
        { item: 'Wild Blueberries & Raspberries', mass: '80g', calories: 50, protein: 1, carbs: 12, fat: 0 },
      ],
      aiConfidence: '97.9%',
    },
  ];

  const currentExercise = exerciseConfigs[exercise];
  const currentJointAngle = currentExercise.getAngle(progress);
  const currentHipAngle = currentExercise.getHipAngle(progress);
  const currentCue = currentExercise.getCue(progress);

  const handleScanMeal = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setLoggedNotification(`Successfully logged ${sampleMeals[selectedMeal].name} (+${sampleMeals[selectedMeal].protein}g Protein)!`);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#A855F7', '#6366F1', '#EC4899'],
      });
      setTimeout(() => setLoggedNotification(null), 4000);
    }, 1100);
  };

  return (
    <section id="demos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12 text-left">
        <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
          02. Interactive Intelligence Lab
        </div>
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white tracking-tight font-brand"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Test FitFreak AI's Neural Engines Right Here
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Experience how sub-20ms computer vision pose kinematics and single-shot volumetric food scanning operate in real time without downloading an app.
        </p>
      </div>

      {/* Main Mode Toggle Buttons (Anti-slop compliant segmented tabs) */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab('biomechanics')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'biomechanics'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/40 border border-violet-400/40'
              : 'bg-[#0f0b1c] text-slate-400 hover:text-slate-200 hover:bg-violet-950/30 border border-violet-900/30'
          }`}
        >
          <Activity className="w-4 h-4 text-violet-300" />
          <span>Real-Time Biomechanics & Rep Checker</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('meal')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'meal'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/40 border border-violet-400/40'
              : 'bg-[#0f0b1c] text-slate-400 hover:text-slate-200 hover:bg-violet-950/30 border border-violet-900/30'
          }`}
        >
          <Utensils className="w-4 h-4 text-violet-300" />
          <span>Computer Vision Volumetric Food Scanner</span>
        </button>
      </div>

      {/* TAB 1: Real-time Biomechanics & Rep Checker */}
      {activeTab === 'biomechanics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Skeletal Telemetry Canvas */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0919] border border-violet-500/30 overflow-hidden shadow-2xl backdrop-blur-xl relative">
            
            {/* Top Toolbar */}
            <div className="p-4 bg-violet-950/30 border-b border-violet-900/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Mediapipe 33-Point Skeleton HUD
                </span>
              </div>

              {/* Exercise Selector Buttons */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-violet-900/30">
                {(['squat', 'deadlift', 'press', 'curl'] as const).map((exKey) => (
                  <button
                    key={exKey}
                    type="button"
                    onClick={() => {
                      setExercise(exKey);
                      setProgress(0);
                    }}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      exercise === exKey
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {exKey.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Skeletal Visualizer Stage */}
            <div className="relative aspect-[16/11] bg-gradient-to-b from-[#090614] via-[#0d091e] to-[#07050e] flex items-center justify-center p-6 overflow-hidden">
              
              {/* Perspective grid lines */}
              <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

              {/* Dynamic SVG Biomechanical Skeleton */}
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <defs>
                  <linearGradient id="bone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <radialGradient id="joint-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="40%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </radialGradient>
                </defs>

                {/* Ground plane indicator */}
                <line x1="60" y1="350" x2="340" y2="350" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Render Exercise Specific Joint Kinematics */}
                {(() => {
                  const factor = Math.sin((progress / 100) * Math.PI); // 0 to 1 back to 0
                  
                  // Base squat motion coordinates
                  if (exercise === 'squat') {
                    const hipY = 190 + factor * 65;
                    const hipX = 200 - factor * 18;
                    const kneeY = 270 + factor * 12;
                    const kneeX = 225 + factor * 22;
                    const headY = 90 + factor * 65;
                    const shoulderY = 120 + factor * 65;
                    const shoulderX = 205 - factor * 8;

                    return (
                      <g>
                        {/* Barbell Across Traps */}
                        <line x1={shoulderX - 70} y1={shoulderY} x2={shoulderX + 70} y2={shoulderY} stroke="#E9D5FF" strokeWidth="6" strokeLinecap="round" />
                        <circle cx={shoulderX - 65} cy={shoulderY} r="14" fill="#9333EA" stroke="#C084FC" strokeWidth="2" />
                        <circle cx={shoulderX + 65} cy={shoulderY} r="14" fill="#9333EA" stroke="#C084FC" strokeWidth="2" />

                        {/* Head & Neck */}
                        <circle cx={shoulderX} cy={headY} r="18" fill="url(#joint-glow)" />
                        <line x1={shoulderX} y1={headY + 18} x2={shoulderX} y2={shoulderY} stroke="url(#bone-grad)" strokeWidth="4" />

                        {/* Torso / Spine */}
                        <line x1={shoulderX} y1={shoulderY} x2={hipX} y2={hipY} stroke="url(#bone-grad)" strokeWidth="5" strokeLinecap="round" />

                        {/* Thigh (Hip to Knee) */}
                        <line x1={hipX} y1={hipY} x2={kneeX} y2={kneeY} stroke="url(#bone-grad)" strokeWidth="5" strokeLinecap="round" />

                        {/* Shin (Knee to Ankle) */}
                        <line x1={kneeX} y1={kneeY} x2="215" y2="345" stroke="url(#bone-grad)" strokeWidth="5" strokeLinecap="round" />

                        {/* Foot */}
                        <line x1="205" y1="345" x2="245" y2="345" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />

                        {/* Arm / Grip on Barbell */}
                        <line x1={shoulderX} y1={shoulderY} x2={shoulderX - 30} y2={shoulderY - 5} stroke="url(#bone-grad)" strokeWidth="3" />

                        {/* Key Joint Nodes */}
                        <circle cx={shoulderX} cy={shoulderY} r="6" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2" />
                        <circle cx={hipX} cy={hipY} r="7" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />
                        <circle cx={kneeX} cy={kneeY} r="8" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <circle cx="215" cy="345" r="6" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />

                        {/* Knee Angle Arc Indicator */}
                        <text x={kneeX + 18} y={kneeY + 4} fill="#34D399" fontSize="13" fontWeight="bold" fontFamily="monospace">
                          {currentJointAngle}°
                        </text>
                      </g>
                    );
                  }

                  // Default for other exercises (Deadlift, Press, Curl)
                  const deadliftHipY = 210 - factor * 40;
                  const deadliftKneeY = 275 - factor * 15;
                  const deadliftShoulderY = 135 - factor * 45;

                  return (
                    <g>
                      {/* Barbell on Floor rising */}
                      <line x1="120" y1={330 - factor * 140} x2="280" y2={330 - factor * 140} stroke="#E9D5FF" strokeWidth="6" strokeLinecap="round" />
                      <circle cx="130" cy={330 - factor * 140} r="16" fill="#9333EA" stroke="#C084FC" strokeWidth="2" />
                      <circle cx="270" cy={330 - factor * 140} r="16" fill="#9333EA" stroke="#C084FC" strokeWidth="2" />

                      {/* Head */}
                      <circle cx="200" cy={deadliftShoulderY - 30} r="18" fill="url(#joint-glow)" />
                      {/* Torso */}
                      <line x1="200" y1={deadliftShoulderY} x2={200 - (1 - factor) * 35} y2={deadliftHipY} stroke="url(#bone-grad)" strokeWidth="5" strokeLinecap="round" />
                      {/* Legs */}
                      <line x1={200 - (1 - factor) * 35} y1={deadliftHipY} x2={210 + (1 - factor) * 15} y2={deadliftKneeY} stroke="url(#bone-grad)" strokeWidth="5" />
                      <line x1={210 + (1 - factor) * 15} y1={deadliftKneeY} x2="205" y2="345" stroke="url(#bone-grad)" strokeWidth="5" />
                      {/* Arms gripping barbell */}
                      <line x1="200" y1={deadliftShoulderY} x2="200" y2={330 - factor * 140} stroke="url(#bone-grad)" strokeWidth="4" />
                      
                      {/* Angle label */}
                      <text x="240" y={deadliftHipY} fill="#34D399" fontSize="13" fontWeight="bold" fontFamily="monospace">
                        {currentHipAngle}°
                      </text>
                    </g>
                  );
                })()}
              </svg>

              {/* Floating Real-Time Joint Telemetry Box */}
              <div className="absolute top-4 left-4 bg-[#07050e]/85 backdrop-blur-md p-3 rounded-xl border border-violet-500/30 text-xs font-mono space-y-1.5 text-left">
                <div className="text-slate-400">
                  Target Joint: <span className="text-white font-bold">{currentExercise.optimalAngleRange}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{currentExercise.status}</span>
                </div>
                <div className="text-[11px] text-violet-300">
                  Current Angle: <span className="text-white font-bold tabular-nums">{currentJointAngle}°</span>
                </div>
              </div>

              {/* Live Rep Counter Display */}
              <div className="absolute top-4 right-4 bg-[#07050e]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-violet-500/30 text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Live Rep Count</div>
                <div className="text-2xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300 tabular-nums">
                  {repCount} <span className="text-xs text-slate-400">/ 10</span>
                </div>
              </div>
            </div>

            {/* Bottom Real-Time AI Coaching Voice & Tempo Strip */}
            <div className="p-4 bg-[#0b0717] border-t border-violet-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-300">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span>Audio Coach Feedback:</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  Kinematic Score: 98.2%
                </div>
              </div>

              <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/20 text-xs text-slate-200 font-medium text-left">
                "{currentCue}"
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors cursor-pointer"
                >
                  {isAnimating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isAnimating ? 'Pause Rep' : 'Resume Rep'}</span>
                </button>

                <div className="flex items-center gap-2 flex-1 max-w-xs">
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">Phase:</span>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-violet-300 tabular-nums w-8 text-right">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side: Exercise Specifications & Why It Matters */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0e0a1c] border border-violet-900/40 space-y-4">
              <div className="text-xs font-mono uppercase text-violet-400">
                Exercise Analysis
              </div>
              <h3 
                className="text-2xl font-bold italic text-white font-brand"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {currentExercise.name}
              </h3>
              <p className="text-xs text-slate-400">
                Primary Driver: <span className="text-slate-200">{currentExercise.targetMuscles}</span>
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-violet-500/20">
                  <div className="font-semibold text-white mb-1">How FitFreak AI Evaluates Every Rep:</div>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>Tracks knee-over-toe alignment to prevent medial meniscus shear.</li>
                    <li>Calculates barbell path deviation relative to the lifter's mid-foot.</li>
                    <li>Warns immediately if concentric velocity drops below threshold failure.</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20">
                  <div className="font-semibold text-violet-300 mb-1">Local Edge Processing:</div>
                  <p className="text-slate-400">
                    Video frames never leave your phone. Calculations run on your device's Neural Engine via optimized WebAssembly and TensorFlow Lite.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/Surjendu-Pal/FitFreak-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <span>Inspect Pose Kinematics Source on GitHub</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: Computer Vision Volumetric Food Scanner */}
      {activeTab === 'meal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Meal Scanner Visualizer */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0919] border border-violet-500/30 overflow-hidden shadow-2xl backdrop-blur-xl relative">
            
            {/* Top Toolbar with Meal Switcher */}
            <div className="p-4 bg-violet-950/30 border-b border-violet-900/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Volumetric Meal Scanner AR
                </span>
              </div>

              {/* Sample meal options */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-violet-900/30">
                {sampleMeals.map((meal, idx) => (
                  <button
                    key={meal.id}
                    type="button"
                    onClick={() => setSelectedMeal(idx)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      selectedMeal === idx
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Meal {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Meal AR Image with Holographic Macro Overlays */}
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img
                src={mealScannerImg}
                alt="FitFreak AI High-Protein Food Vision Scanner with AR Macro Ring"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
              />

              {/* Holographic AR Scanning Line */}
              {isScanning && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/25 to-transparent h-16 w-full animate-bounce pointer-events-none" />
              )}

              {/* Bounding box annotations over the food plate */}
              <div className="absolute inset-0 p-6 pointer-events-none flex flex-col justify-between">
                
                {/* Top badges */}
                <div className="flex justify-between items-start">
                  <div className="bg-[#07050e]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-violet-500/30 text-xs font-mono text-white">
                    Dishes Detected: <span className="text-violet-300 font-bold">{sampleMeals[selectedMeal].ingredients.length} items</span>
                  </div>
                  <div className="bg-[#07050e]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-violet-500/30 text-xs font-mono text-emerald-400 font-bold">
                    Confidence: {sampleMeals[selectedMeal].aiConfidence}
                  </div>
                </div>

                {/* Floating AR macro ring summary */}
                <div className="self-end bg-[#07050e]/90 backdrop-blur-md p-4 rounded-xl border border-violet-500/30 text-right space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Estimated Total</div>
                  <div className="text-2xl font-black font-mono text-white tabular-nums">
                    {sampleMeals[selectedMeal].calories} <span className="text-xs text-violet-400 font-normal">KCAL</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono pt-1">
                    <span className="text-purple-300 font-bold">{sampleMeals[selectedMeal].protein}g P</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-blue-300 font-bold">{sampleMeals[selectedMeal].carbs}g C</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-amber-300 font-bold">{sampleMeals[selectedMeal].fats}g F</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-[#0b0717] border-t border-violet-900/30 flex items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-xs font-semibold text-white">
                  {sampleMeals[selectedMeal].name}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Calculated Volume: {sampleMeals[selectedMeal].weightGrams}g mass
                </div>
              </div>

              <button
                type="button"
                onClick={handleScanMeal}
                disabled={isScanning}
                className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 disabled:opacity-50 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-violet-900/40 cursor-pointer"
              >
                <Scan className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Analyzing Volumetrics...' : 'Re-Scan Plate'}</span>
              </button>
            </div>

            {/* Notification alert on log */}
            {loggedNotification && (
              <div className="absolute bottom-16 left-4 right-4 bg-emerald-950/90 border border-emerald-400/40 p-3 rounded-xl text-xs text-emerald-200 flex items-center gap-2 shadow-xl animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{loggedNotification}</span>
              </div>
            )}

          </div>

          {/* Right Column: Ingredient Breakdown & Nutritional Bioavailability */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0e0a1c] border border-violet-900/40 space-y-5">
              <div>
                <div className="text-xs font-mono uppercase text-violet-400">
                  Macro Composition Breakdown
                </div>
                <h3 
                  className="text-2xl font-bold italic text-white font-brand mt-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {sampleMeals[selectedMeal].name}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  Category: <span className="text-violet-300">{sampleMeals[selectedMeal].category}</span>
                </div>
              </div>

              {/* Macro Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-purple-300 font-semibold">Protein (High-Leucine)</span>
                    <span className="text-white font-bold tabular-nums">{sampleMeals[selectedMeal].protein}g</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: `${(sampleMeals[selectedMeal].protein / 70) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-blue-300 font-semibold">Carbohydrates (Glycogen)</span>
                    <span className="text-white font-bold tabular-nums">{sampleMeals[selectedMeal].carbs}g</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${(sampleMeals[selectedMeal].carbs / 80) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-amber-300 font-semibold">Healthy Lipids & Omega-3</span>
                    <span className="text-white font-bold tabular-nums">{sampleMeals[selectedMeal].fats}g</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(sampleMeals[selectedMeal].fats / 45) * 100}%` }} />
                  </div>
                </div>
              </div>

              {/* Segmented Detected Ingredients Table */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                  Segmented Plate Entities:
                </div>
                <div className="space-y-2">
                  {sampleMeals[selectedMeal].ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-violet-900/20 text-xs">
                      <div>
                        <div className="font-medium text-slate-200">{ing.item}</div>
                        <div className="text-[11px] font-mono text-slate-400">{ing.mass}</div>
                      </div>
                      <div className="text-right font-mono text-violet-300 font-semibold">
                        {ing.calories} kcal · {ing.protein}g P
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bioavailability index */}
              <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Digestive Bio-Availability</div>
                  <div className="text-[11px] text-slate-400">Amino acid profile & fiber density</div>
                </div>
                <div className="text-base font-mono font-bold text-emerald-400 tabular-nums">
                  {sampleMeals[selectedMeal].bioavailability}
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </section>
  );
};
