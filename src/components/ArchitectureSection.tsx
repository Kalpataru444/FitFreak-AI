import React, { useState } from 'react';
import { 
  GitBranch, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink, 
  Cpu, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  Boxes,
  Bot
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const repoUrl = 'https://github.com/Surjendu-Pal/FitFreak-AI';
  const cloneCmd = 'git clone https://github.com/Surjendu-Pal/FitFreak-AI.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const pipelineStages = [
    {
      step: '01',
      title: 'React 19 & Vite 7 Frontend',
      tech: 'React 19 · Vite · Three.js 3D Viewport',
      desc: 'High-performance dark aesthetic client interface. Runs sub-20ms 33-point MediaPipe pose estimation directly in browser GPU memory without server video uploads.',
    },
    {
      step: '02',
      title: 'Express 5 Security & Validation',
      tech: 'Express 5 · Context Allowlist · JWT',
      desc: 'Backend API validating incoming user sessions, goals, weights, and daily missions. Strips restricted parameters and enforces strict payload validation.',
    },
    {
      step: '03',
      title: 'MongoDB Persistent Persistence',
      tech: 'MongoDB · Mongoose Schemas',
      desc: 'Stores encrypted user profiles, formulated weekly plans, measurable daily missions, weight trajectories, XP rankings, and daily streak logs.',
    },
    {
      step: '04',
      title: 'Local Ollama AI Inference',
      tech: 'Ollama http://127.0.0.1:11434 · qwen3:4b',
      desc: 'Zero cloud-AI key exposure. Ingests local fitness context, applies the FitFreak safety prompt (rejecting unsafe restriction or purging), and returns contextual guidance.',
    },
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14 text-left">
        <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
          04. Engineering & Technology Stack
        </div>
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white tracking-tight font-brand"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          High-Performance Architecture Built for Privacy
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          FitFreak AI is open source on GitHub. Explore the local AI inference pipeline, computer vision engine, and gamified MongoDB backend architected by Surjendu Pal.
        </p>
      </div>

      {/* GitHub Repository Quick Card */}
      <div className="rounded-2xl bg-[#0d091d] border border-violet-500/30 p-6 sm:p-8 mb-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-violet-900/30">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-mono text-violet-300">Surjendu-Pal / FitFreak-AI</span>
              <span className="text-[11px] font-mono bg-violet-950/60 text-emerald-400 px-2 py-0.5 rounded border border-violet-500/20">
                Public Repository
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">
              github.com/Surjendu-Pal/FitFreak-AI
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Privacy-aware gamified fitness app: React 19, Vite, Express, MongoDB, and local Ollama inference (qwen3:4b).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-violet-950/40 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Terminal Clone Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-violet-900/40 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-300 overflow-x-auto w-full sm:w-auto">
            <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="text-violet-400 select-none">$</span>
            <span className="text-slate-200 select-all">{cloneCmd}</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-900/30 hover:bg-violet-900/50 text-violet-300 hover:text-white border border-violet-700/30 transition-all shrink-0 cursor-pointer"
            title="Copy git clone command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Clone'}</span>
          </button>
        </div>
      </div>

      {/* 4-Stage Architectural Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {pipelineStages.map((stage) => (
          <div
            key={stage.step}
            className="p-6 rounded-2xl bg-[#0c0819] border border-violet-900/30 hover:border-violet-500/40 transition-colors flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xl font-black font-mono text-violet-400/80">
                  {stage.step}
                </span>
                <span className="text-[11px] font-mono text-slate-500">Architecture Layer</span>
              </div>
              <h3 className="text-base font-bold text-white">
                {stage.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-violet-900/30">
              <span className="text-[11px] font-mono text-violet-300">
                {stage.tech}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Medical Boundary Statement */}
      <div className="mt-12 p-6 rounded-2xl bg-violet-950/20 border border-violet-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-white">Safety Boundary Prompt:</span> FitFreak AI explicitly rejects dangerous restriction, dehydration, purging, and excessive exercise. Women's Wellness entries are excluded from AI context.
          </div>
        </div>
        <div className="text-[11px] font-mono text-violet-300 shrink-0">
          Ollama qwen3:4b Guardrailed
        </div>
      </div>

    </section>
  );
};
