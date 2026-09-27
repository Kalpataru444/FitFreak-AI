import React from 'react';
import { 
  Camera, 
  Watch, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  MessageSquare, 
  Sparkles, 
  Activity, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import watchImg from '../assets/images/biometric_neural_sync_1790433861272.jpg';

export const FeatureBentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14 text-left">
        <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
          03. System Architecture & Core Modules
        </div>
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white tracking-tight font-brand"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Engineered for Biological & Biomechanical Mastery
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Every layer of FitFreak AI is constructed to bridge computer vision, clinical sports physiology, and automated nutrition into a single unified client-first ecosystem.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Bento 1: Large Marquee Card (Col 8) - Real-time Kinematic Computer Vision */}
        <div className="md:col-span-8 rounded-3xl bg-[#0c0919] border border-violet-500/25 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-500/30 text-violet-300">
                <Camera className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400">
                Latency &lt; 20ms
              </span>
            </div>

            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold italic text-white font-brand"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Sub-20ms 3D Computer Vision Kinematics
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Using MediaPipe 33-point skeletal landmark detection running directly on your phone's GPU, FitFreak AI tracks joint rotation, eccentric-to-concentric bar paths, and spinal curvature at 60 FPS without uploading video to any server.
              </p>
            </div>
          </div>

          {/* Interactive Feature Visual inside Card */}
          <div className="mt-8 pt-6 border-t border-violet-900/30 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-xs font-mono text-slate-400">Barbell Path</div>
              <div className="text-base font-bold font-mono text-white mt-0.5">True Vertical</div>
              <div className="text-[11px] text-slate-500">±1.2cm deviation</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Lumbar Safety</div>
              <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">178° Neutral</div>
              <div className="text-[11px] text-slate-500">Zero shear risk</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Rep Cadence</div>
              <div className="text-base font-bold font-mono text-violet-300 mt-0.5">3-1-1 Tempo</div>
              <div className="text-[11px] text-slate-500">Time under tension</div>
            </div>
          </div>
        </div>

        {/* Bento 2: Medium Card (Col 4) - Biometric Hardware Sync */}
        <div className="md:col-span-4 rounded-3xl bg-[#0c0919] border border-violet-500/25 overflow-hidden flex flex-col justify-between relative group shadow-2xl">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={watchImg}
              alt="Athlete smart fitness watch biometric sync"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0919] via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#07050e]/80 backdrop-blur-md border border-violet-500/30 text-violet-300">
              <Watch className="w-4 h-4" />
            </div>
          </div>

          <div className="p-6 text-left space-y-2">
            <div className="text-xs font-mono text-violet-400 uppercase">Wearable Synchronization</div>
            <h3 
              className="text-xl font-bold italic text-white font-brand"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Autoregulated CNS Recovery
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Syncs with Apple Watch, Whoop, Garmin, and Oura. If your HRV indicates elevated systemic fatigue, FitFreak automatically reduces working set volume by 15% to prevent overtraining.
            </p>
          </div>
        </div>

        {/* Bento 3: Medium Card (Col 4) - Autonomous WhatsApp Digital Assistant */}
        <div className="md:col-span-4 rounded-3xl bg-[#0c0919] border border-violet-500/25 p-7 flex flex-col justify-between text-left relative shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-500/30 text-violet-300">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-violet-300">24/7 AI Companion</span>
            </div>

            <div>
              <h3 
                className="text-xl font-bold italic text-white font-brand"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Autonomous WhatsApp Assistant
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Direct integration with WhatsApp. Snap a photo of a restaurant menu to ask: "What should I eat to hit my remaining 45g of protein?", or receive smart nudges when workout time approaches.
              </p>
            </div>
          </div>

          {/* Mini Simulated Chat Bubble */}
          <div className="mt-6 p-3 rounded-xl bg-slate-950/80 border border-violet-900/30 space-y-2 text-xs">
            <div className="text-violet-300 font-mono text-[10px]">FitFreak AI Bot · 8:15 PM</div>
            <div className="text-slate-200">
              "You're 32g short on protein today before your 11 PM sleep window. A shake with 1 scoop isolate + 200g Greek yogurt will hit target perfectly!"
            </div>
          </div>
        </div>

        {/* Bento 4: Large Card (Col 8) - Edge Privacy & Zero Cloud Storage */}
        <div className="md:col-span-8 rounded-3xl bg-[#0c0919] border border-violet-500/25 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-500/30 text-violet-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400">
                Client-Side Encryption
              </span>
            </div>

            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold italic text-white font-brand"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                100% Zero-Knowledge Edge Privacy Architecture
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Most fitness apps upload your workout videos and biometric telemetry to remote cloud databases for advertising profiling. FitFreak AI performs all computer vision inference directly on your device. Video frames are discarded immediately after joint coordinates are calculated.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-violet-900/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Zero server video retention</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>AES-256 local encrypted SQLite</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>No 3rd-party ad tracking SDKs</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
