import React, { useState } from 'react';
import { Coins, X, Info } from 'lucide-react';

interface CoinsPageProps {
  coins: number;
}

const shopItems = [
  {
    id: 1,
    name: 'Protein Powder',
    price: 50,
    img: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80',
  },
  {
    id: 2,
    name: 'Skipping Rope',
    price: 20,
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  },
  {
    id: 3,
    name: 'Dumbbells',
    price: 100,
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
  },
  {
    id: 4,
    name: 'Yoga Mat',
    price: 40,
    img: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80',
  },
];

export const CoinsPage: React.FC<CoinsPageProps> = ({ coins }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      <div className="border-b border-violet-900/30 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Coins className="w-7 h-7 text-amber-400" />
          <span>Total FitFreak Coins: {coins} 🪙</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Demo rewards — coin earning and redemption are coming soon.
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="mt-2 text-xs font-mono text-violet-400 hover:text-violet-300 flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
        >
          <Info className="w-3.5 h-3.5" />
          <span>💡 About rewards</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="space-y-3">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-sm font-bold text-white font-mono">{item.name}</h3>
              <p className="text-xs font-bold text-amber-400 font-mono">{item.price} 🪙</p>
            </div>

            <button
              disabled
              className="w-full py-2 rounded-xl bg-slate-900 border border-violet-900/30 text-slate-500 font-mono text-xs cursor-not-allowed"
            >
              Coming soon
            </button>
          </div>
        ))}
      </div>

      {/* About Rewards Popup Modal matching popup-overlay in Coins.jsx */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#0c0919] border border-violet-500/40 p-6 space-y-4 text-left shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-violet-900/30 pb-3">
              <h3 className="text-base font-bold text-white font-mono">FitFreak Rewards</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rewards for consistent activity are planned. These sample items cannot be purchased yet, and completing tasks does not currently award coins in the demo environment.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
