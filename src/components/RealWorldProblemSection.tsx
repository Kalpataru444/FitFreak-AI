import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Activity, UtensilsCrossed, HeartPulse, MessageSquare } from 'lucide-react';

export const RealWorldProblemSection: React.FC = () => {
  const [activeProblem, setActiveProblem] = useState<number>(0);

  const problems = [
    {
      id: 0,
      title: 'Biomechanical Breakdown & Injury',
      stat: '82% of lifters',
      statLabel: 'train with undetected form compensations causing joint trauma',
      icon: Activity,
      traditional: {
        heading: 'The Status Quo',
        points: [
          'Lifters train without a certified coach watching every single rep.',
          'Spinal flexion, valgus knee cave, and uneven hip drive go unnoticed under fatigue.',
          'Result: Chronic lower back pain, rotator cuff impingements, and training layoffs.',
        ],
      },
      fitfreak: {
        heading: 'The FitFreak AI Solution',
        points: [
          'Sub-20ms 33-point skeletal tracking measures joint angles via standard phone camera.',
          'Acoustic real-time cues alert you mid-concentric phase before form failure occurs.',
          'Generates post-set kinematic heatmaps showing barbell bar-path velocity and symmetry.',
        ],
      },
    },
    {
      id: 1,
      title: 'Manual Calorie Logging Friction',
      stat: '91% abandonment',
      statLabel: 'of manual food logging apps within 14 days due to tedious typing',
      icon: UtensilsCrossed,
      traditional: {
        heading: 'The Status Quo',
        points: [
          'Weighing food on scales and manually typing every single ingredient into search bars.',
          'Misjudging portion sizes in restaurant dishes by 35%–50% on average.',
          'Friction leads to skipped logs, diet abandonment, and frustrating fat-loss plateaus.',
        ],
      },
      fitfreak: {
        heading: 'The FitFreak AI Solution',
        points: [
          'Single-shot Computer Vision Food Scanner identifies mixed dishes and portion volumes.',
          'Instant breakdown of protein, carbs, healthy fats, and bio-available micronutrients.',
          'Logs complex meals in 3 seconds directly to your encrypted daily macro dashboard.',
        ],
      },
    },
    {
      id: 2,
      title: 'Rigid "Cookie-Cutter" Routines',
      stat: '64% overtraining',
      statLabel: 'due to static workout plans ignoring poor sleep and high CNS fatigue',
      icon: HeartPulse,
      traditional: {
        heading: 'The Status Quo',
        points: [
          'Pre-made PDF spreadsheets dictate heavy lifting regardless of actual recovery.',
          'Ignores sleep deprivation, low Heart Rate Variability (HRV), and muscle soreness.',
          'Causes central nervous system burnout, chronic fatigue, and stalled muscle growth.',
        ],
      },
      fitfreak: {
        heading: 'The FitFreak AI Solution',
        points: [
          'Autoregulated Progressive Overload syncs daily with your wearable biometrics.',
          'Automatically scales load, set volume, and RPE if your HRV indicates suppressed recovery.',
          'Optimizes hypertrophy stimulus while safeguarding tendon integrity and systemic energy.',
        ],
      },
    },
    {
      id: 3,
      title: 'Expensive Coaches & Zero Follow-Through',
      stat: '$150/hr cost',
      statLabel: 'makes elite personal coaching inaccessible for 95% of fitness enthusiasts',
      icon: MessageSquare,
      traditional: {
        heading: 'The Status Quo',
        points: [
          'Private trainers cost upwards of $600 to $1,500/month for minimal actual touchpoints.',
          'Generic generic reminder notifications get silenced and ignored after week two.',
          'No immediate guidance when ordering food at a restaurant or traveling abroad.',
        ],
      },
      fitfreak: {
        heading: 'The FitFreak AI Solution',
        points: [
          'Autonomous WhatsApp AI companion with personalized conversational intelligence.',
          'Sends contextual reminders when your daily protein intake is lagging before bedtime.',
          'Ask questions, snap restaurant menus for meal recommendations, and receive real-time answers.',
        ],
      },
    },
  ];

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Editorial Section Header */}
      <div className="max-w-3xl mb-14 text-left">
        <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
          01. The Problem Space
        </div>
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white tracking-tight font-brand"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Why Modern Fitness Is Broken — And How AI Rebuilds It
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Fitness isn't failing because people lack willpower. It fails because human biology requires continuous, real-time adaptation that static spreadsheets, generic YouTube tutorials, and manual food logs simply cannot deliver.
        </p>
      </div>

      {/* Interactive Problem Switcher Tabs (Anti-slop compliant segmented control) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[#0e091d] rounded-2xl border border-violet-900/30 mb-8">
        {problems.map((prob) => {
          const Icon = prob.icon;
          const isSelected = activeProblem === prob.id;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveProblem(prob.id)}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-violet-600/30 border border-violet-400/40 text-white shadow-lg shadow-violet-950/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-violet-950/20 border border-transparent'
              }`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-violet-600 text-white' : 'bg-slate-900 text-violet-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold truncate">{prob.title}</div>
                <div className="text-[11px] font-mono text-violet-300/80 truncate">{prob.stat}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Before vs After Comparison Card */}
      {(() => {
        const current = problems[activeProblem];
        return (
          <div className="rounded-2xl bg-[#0d091a] border border-violet-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Stat Banner */}
            <div className="mb-8 pb-6 border-b border-violet-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 tabular-nums">
                  {current.stat}
                </div>
                <div className="text-sm text-slate-300 mt-1 max-w-xl">
                  {current.statLabel}
                </div>
              </div>
              <div className="text-xs font-mono text-violet-400 bg-violet-950/40 px-3 py-1.5 rounded-lg border border-violet-500/20 self-start sm:self-center">
                Problem Matrix #{current.id + 1}
              </div>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Problem / Status Quo Box */}
              <div className="rounded-xl p-6 bg-slate-950/60 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{current.traditional.heading}</span>
                </div>
                <ul className="space-y-3">
                  {current.traditional.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FitFreak Solution Box */}
              <div className="rounded-xl p-6 bg-violet-950/30 border border-violet-500/30 space-y-4 relative">
                <div className="flex items-center gap-2 text-violet-300 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{current.fitfreak.heading}</span>
                </div>
                <ul className="space-y-3">
                  {current.fitfreak.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        );
      })()}

    </section>
  );
};
