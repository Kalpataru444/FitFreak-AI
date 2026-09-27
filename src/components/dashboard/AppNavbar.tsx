import React from 'react';
import { 
  FaHome, 
  FaBullseye, 
  FaClipboardList, 
  FaChartLine, 
  FaUsers, 
  FaUser, 
  FaSignOutAlt,
  FaCoins,
  FaFire,
  FaQuestionCircle
} from 'react-icons/fa';

interface AppNavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onLogout: () => void;
}

export const AppNavbar: React.FC<AppNavbarProps> = ({
  currentRoute,
  onNavigate,
  onLogout,
}) => {
  const navLinks = [
    { route: '/', title: 'Home', icon: FaHome },
    { route: '/goals', title: 'Goals', icon: FaBullseye },
    { route: '/plans', title: 'Plans', icon: FaClipboardList },
    { route: '/progress', title: 'Progress', icon: FaChartLine },
    { route: '/current-streak', title: 'Streak & Badges', icon: FaFire },
    { route: '/coins', title: 'Coins & Shop', icon: FaCoins },
    { route: '/community', title: 'Community', icon: FaUsers },
    { route: '/profile', title: 'Profile', icon: FaUser },
    { route: '/help', title: 'Help & Mentors', icon: FaQuestionCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-20 sm:w-24 bg-[#0f001e]/90 backdrop-blur-xl border-r border-violet-500/20 shadow-[2px_0_20px_rgba(140,0,255,0.3)] flex flex-col justify-between items-center py-5 z-40">
      
      {/* Rotated Gradient Logo Wordmark matching FitFreak-AI */}
      <div 
        onClick={() => onNavigate('/')}
        className="font-bold text-sm tracking-wider bg-gradient-to-b from-[#dcb6ff] via-[#b675ff] to-[#802aff] bg-clip-text text-transparent [writing-mode:vertical-rl] rotate-180 mb-3 hover:scale-105 transition-transform cursor-pointer select-none font-sans drop-shadow-[0_2px_8px_rgba(140,0,255,0.8)]"
        title="FitFreak AI - Home"
      >
        FitFreak AI
      </div>

      {/* Nav Links */}
      <ul className="list-none flex flex-col gap-2.5 p-0 m-0 w-full items-center overflow-y-auto flex-1 justify-center py-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = currentRoute === link.route;
          return (
            <li key={link.route} className="w-full flex justify-center">
              <button
                onClick={() => onNavigate(link.route)}
                title={link.title}
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] scale-110'
                    : 'text-[#e0d7ff] hover:text-[#dcb6ff] hover:bg-gradient-to-br hover:from-violet-900/40 hover:to-indigo-900/40 hover:shadow-[0_0_12px_rgba(140,0,255,0.5)] hover:scale-105'
                }`}
              >
                <Icon />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Logout button matching Navbar.jsx */}
      <div className="w-full px-2.5">
        <button
          onClick={onLogout}
          title="Logout"
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#dcb6ff] via-[#b675ff] to-[#802aff] hover:from-rose-500 hover:to-rose-600 text-[#0a0015] hover:text-white font-bold text-sm shadow-[0_4px_14px_rgba(140,0,255,0.6)] transition-all flex items-center justify-center cursor-pointer hover:scale-105"
        >
          <FaSignOutAlt />
        </button>
      </div>

    </nav>
  );
};
