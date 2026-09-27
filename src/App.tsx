import React, { useState } from 'react';
import { ThreeVisualBackground } from './components/ThreeVisualBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { RealWorldProblemSection } from './components/RealWorldProblemSection.tsx';
import { InteractiveAIDemo } from './components/InteractiveAIDemo.tsx';
import { FeatureBentoGrid } from './components/FeatureBentoGrid.tsx';
import { ArchitectureSection } from './components/ArchitectureSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LoginPage } from './components/LoginPage.tsx';
import { FitFreakChatbot } from './components/FitFreakChatbot.tsx';

// Protected App Components matching Surjendu-Pal/FitFreak-AI
import { AppNavbar } from './components/dashboard/AppNavbar.tsx';
import { UserProfileSidebar } from './components/dashboard/UserProfileSidebar.tsx';
import { CalendarWidget } from './components/dashboard/CalendarWidget.tsx';
import { GoalsPage } from './components/dashboard/GoalsPage.tsx';
import { PlansPage } from './components/dashboard/PlansPage.tsx';
import { ProgressPage } from './components/dashboard/ProgressPage.tsx';
import { CommunityPage } from './components/dashboard/CommunityPage.tsx';
import { CoinsPage } from './components/dashboard/CoinsPage.tsx';
import { CurrentStreakPage } from './components/dashboard/CurrentStreakPage.tsx';
import { ProfilePage } from './components/dashboard/ProfilePage.tsx';
import { HelpPage } from './components/dashboard/HelpPage.tsx';
import { Sparkles, ArrowRight, Zap, Target, ClipboardList, TrendingUp, Users, User as UserIcon } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<any | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [currentStreak, setCurrentStreak] = useState<number>(5);
  const [longestStreak, setLongestStreak] = useState<number>(14);
  const [coins, setCoins] = useState<number>(60);

  const defaultDemoUser = {
    _id: 'usr_athlete_101',
    name: 'Alex Mercer',
    email: 'alex.mercer@fitfreak.ai',
    age: 26,
    gender: 'male',
    height: 180,
    currentWeight: 76.5,
    activityLevel: 'active',
    bmi: 23.6,
    tdee: 2680,
    createdAt: '2026-01-15T00:00:00.000Z',
    updatedAt: new Date().toISOString(),
    friends: ['usr_sarah', 'usr_david'],
  };

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Opens a feature, auto-logging in as demo athlete if not already logged in
  const handleOpenFeature = (route: string = '/goals') => {
    if (!user) {
      setUser(defaultDemoUser);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    setCurrentRoute('/goals');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentRoute('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemos = () => {
    const el = document.getElementById('demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If user wants to see Login/Register page
  if (currentRoute === '/login' || currentRoute === '/register') {
    return (
      <div className="relative min-h-screen bg-[#07050e] text-slate-100 overflow-x-hidden selection:bg-violet-600 selection:text-white">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ThreeVisualBackground />
        </div>
        <LoginPage 
          initialMode={currentRoute === '/register' ? 'register' : 'login'}
          onLoginSuccess={handleLoginSuccess}
          onNavigateHome={() => handleNavigate('/')}
        />
      </div>
    );
  }

  // If user is LOGGED IN, render the authentic FitFreak-AI layout matching Surjendu-Pal/FitFreak-AI
  if (user) {
    return (
      <div className="relative min-h-screen bg-[#0a0015] text-slate-100 overflow-x-hidden selection:bg-violet-600 selection:text-white flex">
        
        {/* Subtle Background Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <ThreeVisualBackground />
        </div>

        {/* 1. Left Vertical Sidebar Navbar (96px) matching FitFreak-AI */}
        <AppNavbar 
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />

        {/* 2. Middle Main Content matching client/src/App.css */}
        <main className="flex-1 min-w-0 pl-20 sm:pl-28 pr-4 lg:pr-72 py-6 relative z-10">
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            
            {/* Top Quick Status Bar */}
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-violet-900/30 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">FitFreak AI Core</span>
                <span>/</span>
                <span className="text-violet-300 capitalize font-bold">
                  {currentRoute === '/' ? 'Home Showcase' : currentRoute.replace('/', '').replace('-', ' ')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavigate('/current-streak')}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  title="View Streak Telemetry"
                >
                  <span>🔥 {currentStreak}d streak</span>
                </button>
                <span>·</span>
                <button
                  onClick={() => handleNavigate('/coins')}
                  className="flex items-center gap-1 text-violet-300 hover:text-white transition-colors cursor-pointer"
                  title="View Coin Wallet"
                >
                  <span>👜 {coins} 🪙</span>
                </button>
              </div>
            </div>

            {/* Active Protected Page Content */}
            {currentRoute === '/' && (
              <div className="space-y-8">
                {/* Active Session Notification Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/80 to-indigo-950/80 border border-violet-500/40 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-base">⚡</span>
                    <span className="text-slate-200">
                      Logged in as <strong>{user.name}</strong> ({user.email}). Ready to train?
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleNavigate('/goals')}
                      className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono font-semibold transition-all cursor-pointer shadow-md"
                    >
                      Open Your Goals →
                    </button>
                    <button
                      onClick={() => handleNavigate('/plans')}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-violet-900/50 text-violet-200 font-mono font-semibold transition-all cursor-pointer border border-violet-500/30"
                    >
                      Daily Plans
                    </button>
                  </div>
                </div>

                <HeroSection 
                  onExploreDemo={scrollToDemos} 
                  onOpenFeatures={handleOpenFeature}
                  onGoToLogin={() => handleNavigate('/goals')}
                  user={user}
                />
                <RealWorldProblemSection />
                <InteractiveAIDemo />
                <FeatureBentoGrid />
                <ArchitectureSection />
                <Footer />
              </div>
            )}

            {currentRoute === '/goals' && (
              <GoalsPage onNavigate={handleNavigate} />
            )}

            {currentRoute === '/plans' && (
              <PlansPage onNavigate={handleNavigate} />
            )}

            {currentRoute === '/progress' && (
              <ProgressPage 
                currentStreak={currentStreak}
                longestStreak={longestStreak}
                coins={coins}
                onNavigate={handleNavigate}
              />
            )}

            {currentRoute === '/community' && (
              <CommunityPage />
            )}

            {currentRoute === '/coins' && (
              <CoinsPage coins={coins} />
            )}

            {currentRoute === '/current-streak' && (
              <CurrentStreakPage 
                currentStreak={currentStreak}
                longestStreak={longestStreak}
                onNavigate={handleNavigate}
              />
            )}

            {currentRoute === '/profile' && (
              <ProfilePage 
                user={user}
                currentStreak={currentStreak}
                onUpdateUser={(updated) => setUser({ ...user, ...updated })}
                onLogout={handleLogout}
              />
            )}

            {currentRoute === '/help' && (
              <HelpPage />
            )}

          </div>
        </main>

        {/* 3. Right Sticky Profile Section (264px) matching FitFreak-AI */}
        <aside className="hidden lg:flex w-68 fixed top-0 right-0 h-screen p-4 flex-col gap-4 bg-[#0f001e]/85 backdrop-blur-xl border-l border-violet-900/40 shadow-2xl overflow-y-auto z-30">
          <UserProfileSidebar user={user} />
          <CalendarWidget />
        </aside>

        {/* 4. FitFreak Floating AI Assistant Chatbot */}
        <FitFreakChatbot 
          userSession={user}
          onNavigateTo={handleNavigate}
        />

      </div>
    );
  }

  // If user is NOT logged in, render the flagship Home page with entry to all features and login
  return (
    <div className="relative min-h-screen bg-[#07050e] text-slate-100 overflow-x-hidden selection:bg-violet-600 selection:text-white">
      
      {/* Top Floating Feature Announcement Banner */}
      <div className="bg-gradient-to-r from-violet-950/90 via-purple-900/90 to-indigo-950/90 border-b border-violet-500/30 py-2.5 px-4 text-center text-xs font-mono text-slate-200 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">FitFreak AI Platform:</span>
            <span className="hidden sm:inline text-violet-300">
              Personalized Workouts · 33-pt Form Tracking · Streak Rewards
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleOpenFeature('/goals')}
              className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-[11px] shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
              <span>Enter Website Features (Demo Athlete)</span>
            </button>
            <button
              onClick={() => handleNavigate('/login')}
              className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-violet-500/30 text-[11px] transition-all cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* 3D WebGL Kinetic Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeVisualBackground />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar 
          onLoginClick={() => handleNavigate('/login')}
          onExploreDemo={scrollToDemos}
          onNavigateToFeature={handleOpenFeature}
          user={user}
          onLogout={handleLogout}
        />

        {/* Hero Section with parameters consistent with Home.jsx and direct entry points */}
        <HeroSection 
          onExploreDemo={scrollToDemos}
          onOpenFeatures={handleOpenFeature}
          onGoToLogin={() => handleNavigate('/login')}
          user={user}
        />

        {/* The Real-World Fitness Problem & Solutions Breakdown */}
        <RealWorldProblemSection />

        {/* Hands-On Interactive AI Intelligence Lab */}
        <InteractiveAIDemo />

        {/* Feature Bento Grid (Kinematics, Biometrics, WhatsApp, Edge Privacy) */}
        <FeatureBentoGrid />

        {/* Open-Source Engineering Architecture & GitHub Repo */}
        <ArchitectureSection />

        {/* Global Footer */}
        <Footer />

      </div>

      {/* Persistent Floating Contextual AI Coach Assistant */}
      <FitFreakChatbot 
        userSession={null}
        onNavigateTo={handleOpenFeature}
      />

    </div>
  );
}
