import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Github, Shield, ArrowUpRight, LogIn, ExternalLink } from 'lucide-react';

interface FooterProps {
  onGoToLogin?: () => void;
  onGoToRegister?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onGoToLogin = () => {}, 
  onGoToRegister = () => {} 
}) => {
  return (
    <footer className="w-full bg-[#06040b] border-t border-violet-900/30 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Brand, Mission, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Proposition */}
          <div className="md:col-span-6 space-y-4 text-left">
            <BrandLogo size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              FitFreak AI turns your personal profile and primary goals into structured weekly plans, measurable daily missions, real progress views, XP, streaks, and contextual fitness guidance with on-device computer vision.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Surjendu-Pal/FitFreak-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-violet-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Surjendu-Pal/FitFreak-AI</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Home Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Home Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-violet-300 transition-colors">
                  Overview & Subtitle
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-violet-300 transition-colors">
                  The Real-World Fitness Problem
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-violet-300 transition-colors">
                  AI Kinematics & Macro Vision
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-violet-300 transition-colors">
                  Streaks & Core Capabilities
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-violet-300 transition-colors">
                  System Architecture & Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Member Access & Account */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Account Portal
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onGoToLogin}
                  className="hover:text-white text-violet-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In to Your Account</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onGoToRegister}
                  className="hover:text-white text-slate-300 transition-colors cursor-pointer"
                >
                  Create New Athlete Account
                </button>
              </li>
              <li className="flex items-center gap-1.5 pt-2 text-emerald-400 font-mono text-[11px]">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>Local AI & Encrypted Context</span>
              </li>
              <li className="text-[11px] text-slate-500 font-mono">
                Creator: Surjendu Pal
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Copyright & License */}
        <div className="pt-8 border-t border-violet-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} FitFreak AI. All rights reserved.</span>
            <span>·</span>
            <span>Project Repository: Surjendu-Pal/FitFreak-AI</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Surjendu-Pal/FitFreak-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub Source
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
