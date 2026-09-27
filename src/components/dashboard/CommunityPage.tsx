import React from 'react';
import { Users, ExternalLink } from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const communities = [
    {
      platform: 'Reddit',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reddit.svg',
      description:
        'Join some of the most active gym and fitness subreddits where enthusiasts share tips, routines, and progress.',
      links: [
        { name: 'r/Fitness', url: 'https://www.reddit.com/r/Fitness/' },
        { name: 'r/Bodybuilding', url: 'https://www.reddit.com/r/bodybuilding/' },
        { name: 'r/ProgressPics', url: 'https://www.reddit.com/r/progresspics/' },
        { name: 'r/WeightRoom', url: 'https://www.reddit.com/r/weightroom/' },
      ],
    },
    {
      platform: 'WhatsApp',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg',
      description:
        'Find WhatsApp fitness groups to connect with people locally and share daily motivation.',
      links: [
        {
          name: 'Fitness Motivation Group',
          url: 'https://chat.whatsapp.com/BXo12345abcFitness',
        },
        {
          name: 'Home Workout Support',
          url: 'https://chat.whatsapp.com/HWk67890xyzSupport',
        },
      ],
    },
    {
      platform: 'Discord',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg',
      description:
        'Join active Discord servers to chat in real-time about workouts, diets, and bodybuilding advice.',
      links: [
        { name: 'The Fitness Discord', url: 'https://discord.gg/fitness' },
        { name: 'Gym Bros Community', url: 'https://discord.gg/gymbros' },
      ],
    },
    {
      platform: 'Telegram',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg',
      description:
        'Stay updated with fitness news and tips via Telegram channels and groups.',
      links: [
        {
          name: 'Gym Motivation Channel',
          url: 'https://t.me/gymmotivation',
        },
        {
          name: 'Fitness Discussion Group',
          url: 'https://t.me/fitnessdiscussion',
        },
      ],
    },
    {
      platform: 'Facebook Groups',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
      description:
        'Join Facebook fitness groups to interact with thousands of fitness lovers globally.',
      links: [
        {
          name: 'Global Fitness & Health Community',
          url: 'https://www.facebook.com/groups/globalfitnesscommunity',
        },
        {
          name: 'Home Workout & Nutrition',
          url: 'https://www.facebook.com/groups/homeworkoutnutrition',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      <div className="border-b border-violet-900/30 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Users className="w-7 h-7 text-violet-400" />
          <span>🏋️ Community Hub</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Connect with like-minded fitness enthusiasts across platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div
            key={community.platform}
            className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center p-2.5">
                <img
                  src={community.logo}
                  alt={community.platform}
                  className="w-full h-full object-contain filter invert opacity-90"
                />
              </div>
              <h2 className="text-lg font-bold text-white font-mono">
                {community.platform}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {community.description}
              </p>
            </div>

            <ul className="space-y-2 border-t border-violet-900/30 pt-4">
              {community.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-violet-300 hover:text-white flex items-center justify-between group transition-colors"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
