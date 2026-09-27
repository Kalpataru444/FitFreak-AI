import React from 'react';
import { HelpCircle, Video, UserCheck, ExternalLink } from 'lucide-react';

const videoList = [
  {
    id: 'IT94xC35u6k',
    title: '20 min Fat Burning Workout for TOTAL BEGINNERS',
  },
  {
    id: 'zGf-9VVgCDw',
    title: 'Quick 10 Minute Ultimate Beginners Workout Low-Impact',
  },
  {
    id: 'ZrNXcyoy8-w',
    title: 'Full Body Total Beginner Workout',
  },
];

const mentors = [
  {
    name: 'Alice Johnson',
    monthlyCharge: '$100 / month',
    experience: '5 years specializing in strength training',
    contact: 'alice.johnson@example.com',
    profileImg: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80',
    instagram: '@alicefittmentor',
    linkedin: 'linkedin.com/in/alice-johnson-fit',
  },
  {
    name: 'Bob Smith',
    monthlyCharge: '$80 / month',
    experience: '3 years cardio & weight loss programs',
    contact: 'bob.smith@example.com',
    profileImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80',
    instagram: '@bobcardiotrainer',
    linkedin: 'linkedin.com/in/bob-smith-trainer',
  },
  {
    name: 'Carla Martinez',
    monthlyCharge: '$120 / month',
    experience: '7 years experience, nutrition + fitness',
    contact: 'carla.m@example.com',
    profileImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
    instagram: '@carlafitnesscoach',
    linkedin: 'linkedin.com/in/carla-martinez',
  },
];

export const HelpPage: React.FC = () => {
  return (
    <div className="space-y-8 text-left max-w-4xl mx-auto py-2">
      <div className="border-b border-violet-900/30 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <HelpCircle className="w-7 h-7 text-violet-400" />
          <span>Find a Mentor & Learn Exercises</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore curated video tutorials or connect with dedicated training coaches.
        </p>
      </div>

      {/* Mentorship Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-violet-400" />
            <span>Mentorship — Coming Soon</span>
          </h2>
          <p className="text-xs text-slate-400">
            These are sample profiles for a planned feature. Mentor booking is not available yet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 border border-violet-500/30">
                  <img
                    src={mentor.profileImg}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">
                    {mentor.name} <span className="text-[10px] text-slate-500">(sample)</span>
                  </h3>
                  <p className="text-xs text-violet-300 font-mono mt-0.5">
                    {mentor.monthlyCharge}
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {mentor.experience}
                </p>
              </div>

              <div className="border-t border-violet-900/30 pt-3 text-[11px] font-mono space-y-1 text-slate-400">
                <div>✉️ {mentor.contact}</div>
                <div>📸 {mentor.instagram}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="space-y-4 pt-4 border-t border-violet-900/30">
        <div>
          <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <Video className="w-5 h-5 text-purple-400" />
            <span>Tutorial Videos</span>
          </h2>
          <p className="text-xs text-slate-400">
            Guided beginner workouts to master foundational movement patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videoList.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all space-y-3 shadow-xl group cursor-pointer block"
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors line-clamp-2">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
