import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const dimensions = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 38, text: 'text-2xl' },
    lg: { icon: 54, text: 'text-3xl' },
    xl: { icon: 72, text: 'text-4xl' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision recreation of the uploaded FitFreak AI logo symbol */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-2xl p-1.5 transition-transform duration-300 hover:scale-105"
        style={{
          width: dimensions.icon * 1.15,
          height: dimensions.icon * 1.15,
          background: 'linear-gradient(145deg, rgba(168, 85, 247, 0.22) 0%, rgba(124, 58, 237, 0.12) 100%)',
          border: '1px solid rgba(192, 132, 252, 0.3)',
          boxShadow: '0 0 25px -4px rgba(139, 92, 246, 0.45)',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(139,92,246,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ff-grad-primary" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="45%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
            <linearGradient id="ff-grad-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DDD6FE" />
              <stop offset="35%" stopColor="#A855F7" />
              <stop offset="80%" stopColor="#7E22CE" />
              <stop offset="100%" stopColor="#581C87" />
            </linearGradient>
            <linearGradient id="ff-grad-plate" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dumbbell bar horizontal stem */}
          <rect x="22" y="46.5" width="56" height="7" rx="3.5" fill="url(#ff-grad-plate)" />

          {/* Left barbell plates (graduated rounded discs) */}
          <rect x="18" y="41" width="5" height="18" rx="2.5" fill="url(#ff-grad-plate)" />
          <rect x="24" y="37" width="6" height="26" rx="3" fill="url(#ff-grad-plate)" />
          <rect x="31" y="44" width="3" height="12" rx="1.5" fill="url(#ff-grad-plate)" />

          {/* Right barbell plates (graduated rounded discs) */}
          <rect x="66" y="44" width="3" height="12" rx="1.5" fill="url(#ff-grad-plate)" />
          <rect x="70" y="37" width="6" height="26" rx="3" fill="url(#ff-grad-plate)" />
          <rect x="77" y="41" width="5" height="18" rx="2.5" fill="url(#ff-grad-plate)" />

          {/* Dynamic ribbon F body with 3D folding curves */}
          {/* Top curve and upper bar of F */}
          <path
            d="M 43 23 C 54 22, 69 22, 73 29 C 75 33, 71 39, 63 39 C 55 39, 49 39, 44 40 Z"
            fill="url(#ff-grad-ribbon)"
          />
          {/* Main vertical curved stem of F */}
          <path
            d="M 52 23 C 43 24, 38 31, 38 43 C 38 56, 47 70, 38 81 C 36 83, 44 83, 48 77 C 54 68, 55 57, 56 46 C 56 36, 56 26, 52 23 Z"
            fill="url(#ff-grad-primary)"
          />
          {/* Center horizontal arm of F */}
          <path
            d="M 44 45 C 50 45, 62 44, 69 48 C 70 51, 67 55, 61 55 C 55 55, 48 55, 42 56 Z"
            fill="url(#ff-grad-ribbon)"
          />

          {/* 4-point Sparkle Star in top right */}
          <path
            d="M 77 15 Q 77 22 71 23 Q 77 24 77 31 Q 78 24 85 23 Q 78 22 77 15 Z"
            fill="#C084FC"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Brand Name Typography matching exact style from user image */}
      {showText && (
        <div className="flex items-baseline tracking-normal">
          <span 
            className={`font-brand font-black italic text-white ${dimensions.text} tracking-tight`}
            style={{
              fontStyle: 'italic',
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            FitFreak
          </span>
          <span 
            className={`font-brand font-black italic ml-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 ${dimensions.text}`}
            style={{
              fontStyle: 'italic',
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: '0 0 16px rgba(168,85,247,0.4)',
            }}
          >
            AI
          </span>
        </div>
      )}
    </div>
  );
};
