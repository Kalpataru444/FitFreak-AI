import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { 
  Github, 
  Menu, 
  X, 
  ArrowUpRight, 
  LogIn, 
  Sparkles, 
  Target, 
  ClipboardList, 
  TrendingUp, 
  Users, 
  User, 
  LogOut,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onExploreDemo: () => void;
  onNavigateToFeature?: (route: string) => void;
  user?: any | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onLoginClick, 
  onExploreDemo,
  onNavigateToFeature,
  user,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const homeSections = [
    { label: 'The Problem', href: '#problem' },
    { label: 'AI Kinematics & Scanner', href: '#demos' },
    { label: 'Core Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
  ];

  const appFeatures = [
    { label: '🎯 Your Goals', route: '/goals', desc: 'Custom goals & targets' },
    { label: '📋 Daily Plans', route: '/plans', desc: 'Interactive workout & meals' },
    { label: '📈 Progress & Streaks', route: '/progress', desc: 'Calendar & milestones' },
    { label: '👥 Community Hub', route: '/community', desc: 'Reddit, Discord, WhatsApp' },
    { label: '👤 Athlete Profile', route: '/profile', desc: 'Badges & body metrics' },
  ];

  const handleOpenFeature = (route: string) => {
    setFeaturesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToFeature) {
      onNavigateToFeature(route);
    } else {
      onLoginClick();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07050e]/90 border-b border-violet-900/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone */}
        <a href="#" className="flex items-center group transition-transform active:scale-98">
          <BrandLogo size="md" />
        </a>

        {/* Clean text navigation links for the Home Page */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          
          {/* Website Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-violet-950/40 hover:bg-violet-900/50 border border-violet-500/30 text-violet-200 hover:text-white transition-all text-xs font-semibold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Website Features</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {featuresDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#0d091e] border border-violet-500/30 shadow-2xl p-2 space-y-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-violet-400 font-bold border-b border-violet-900/40">
                  FitFreak AI Modules
                </div>
                {appFeatures.map((feat) => (
                  <button
                    key={feat.route}
                    onClick={() => handleOpenFeature(feat.route)}
                    className="w-full text-left p-2 rounded-xl hover:bg-violet-950/60 transition-colors flex flex-col group cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-violet-300">
                      {feat.label}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {feat.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Home Section Anchors */}
          {homeSections.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors duration-200 group whitespace-nowrap text-xs sm:text-sm"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 group-hover:w-full transition-all duration-200 ease-out" />
            </a>
          ))}
        </nav>

        {/* Primary actions: GitHub + Enter into Login page */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Surjendu-Pal/FitFreak-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-violet-500/20 rounded-xl transition-all whitespace-nowrap"
            title="View open-source repository on GitHub"
          >
            <Github className="w-3.5 h-3.5 text-violet-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          {user ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleOpenFeature('/goals')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-900/40 transition-all cursor-pointer"
              >
                <span>Dashboard ({user.name})</span>
              </button>
              {onLogout && (
                <button
                  type="button"
                  onClick={onLogout}
                  title="Sign Out"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 border border-violet-900/30 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={onLoginClick}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-900/40 hover:shadow-violet-600/30 transition-all active:scale-98 whitespace-nowrap cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 text-violet-200" />
              <span>Sign In / Enter App</span>
            </button>
          )}
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0c0819] border-b border-violet-900/30 space-y-3">
          
          <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/20 space-y-2">
            <div className="text-[11px] font-mono uppercase text-violet-400 font-bold">
              Website Features
            </div>
            <div className="grid grid-cols-2 gap-2">
              {appFeatures.map((feat) => (
                <button
                  key={feat.route}
                  onClick={() => handleOpenFeature(feat.route)}
                  className="p-2 rounded-lg bg-slate-900 text-left text-xs font-semibold text-slate-200 hover:text-white hover:bg-violet-900/50 cursor-pointer"
                >
                  {feat.label}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {homeSections.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-200 hover:bg-violet-950/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-violet-900/30 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-950/50 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>{user ? 'Open Dashboard' : 'Sign In / Enter App'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
