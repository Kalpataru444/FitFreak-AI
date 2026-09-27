FitFreak AI 🏋️‍♂️⚡
Next-generation privacy-first, gamified AI fitness platform solving real-world workout procrastination and training plateaus.
![Image](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![Image](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Image](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Image](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Image](https://img.shields.io/badge/License-MIT-yellow.svg)
📌 Overview
FitFreak AI is an intelligent fitness ecosystem engineered to help athletes overcome workout procrastination, maintain unbreakable consistency, and train with biomechanical precision.
It seamlessly integrates an immersive 3D interactive home showcase with a gamified 3-column athlete dashboard that manages custom goals, daily mission splits, annual calendar consistency, unlocked badge tiers, coin rewards, and real-time contextual AI guidance.
🚀 Key Features
1. 🏠 Flagship Home & Interactive AI Intelligence Lab
Dynamic 3D WebGL Mesh: Ambient kinetic wireframe background built with Three.js.
Biomechanical Form Lab: Real-time 33-point computer vision kinematics simulator tracking joint angles (e.g. knee flexion, hip alignment) and rep counts with zero server video retention.
Volumetric Meal Macro Vision: Instant food detection previewing calorie breakdowns, macronutrient grams (protein, carbs, fats), and bioavailability scores.
Typewriter Proposition & Community Feedback: Interactive reviews toggle and direct parameter chips matching the core repository philosophy.
1-Click Instant Demo Athlete Entry: Open and explore all website features in one click as athlete Alex Mercer.
2. 🛡️ Authentic 3-Column Athlete Dashboard (Post-Login)
Matching the exact architecture and styling of Surjendu-Pal/FitFreak-AI:
👈 Left Vertical Sidebar Navigation (Navbar.jsx)
Fixed 96px vertical navigation with the iconic rotated gradient FitFreak AI wordmark.
Rapid navigation across all modules via standard react-icons/fa icons:
🏠 Home (FaHome): Return to the interactive home showcase.
🎯 Goals (FaBullseye): Formulate targets and generate splits.
📋 Plans (FaClipboardList): Daily schedule and task completion.
📈 Progress (FaChartLine): Annual consistency calendar.
🔥 Streak & Badges (FaFire): Unlocked badges and community rankings.
🪙 Coins & Shop (FaCoins): Coin wallet and fitness gear rewards.
👥 Community (FaUsers): Connect across fitness channels.
👤 Profile (FaUser): Body metrics, BMI, TDEE, and settings.
❓ Help & Mentors (FaQuestionCircle): Workout videos and coach directory.
🚪 Logout (FaSignOutAlt): Secure session termination.
🎯 Interactive Core Modules (main.main-content)
Your Goals (/goals):
Add goals by type (Lose Weight, Gain Weight, Build Muscle, Maintain, Endurance).
Configure target weight (kg), pace (Slow, Normal, Fast), and daily caloric ceiling.
Automatically creates corresponding weekly workout and nutrition plans with 1-click "View Plan" navigation.
Daily Plans (/plans):
Top help banner with 1-click navigation to workout tutorials.
Daily progression cards showing dynamic completion percentages and animated progress bars.
View Details Modal: Interactive checklists for exercises (sets × reps) and meals (calories) with live celebration feedback.
Progress Tracker (/progress):
Two clickable summary boxes for Current Streak and Coin Wallet.
12-month dual-column calendar heatmap showing completed vs. missed workout days.
Current Streak & Badges (/current-streak):
Real-time streak counter and longest streak record.
7-Tier Badge Progression: Squire (1d), Page (3d), Knight (7d), Champion (14d), Lord/Lady (30d), Baron/Baroness (50d), and Royalty (100d).
Community streak leaderboard ranking.
Coin Wallet & Rewards Shop (/coins):
Coin balance display earned through plan completion.
Fitness gear shop (Protein Powder, Skipping Rope, Dumbbells, Yoga Mat).
Rewards information popup modal.
Community Hub (/community):
Curated hubs and direct links for Reddit (r/Fitness, r/Bodybuilding), WhatsApp fitness motivation groups, Discord servers, Telegram channels, and Facebook groups.
Athlete Profile (/profile):
Live metric calculator for BMI and TDEE based on height, weight, age, and activity level.
In-place profile editor to modify personal stats and avatar.
Account metadata audit log and unlocked badge gallery.
Help & Mentorship (/help):
Trainer directory featuring specialized coaches with rates, experience, and social contacts.
Curated beginner workout video library.
👉 Right Sticky Profile Sidebar (UserProfile.jsx + Calendar.jsx)
Athlete Identity: Avatar initial, name, age, height, weight, gender indicator (♂/♀/⚧), BMI, and TDEE.
Monthly 6×7 Calendar Widget: Month-by-month grid with completed, missed, and today status indicators.
🤖 Floating Contextual AI Coach (Chatbot.jsx)
Accessible anywhere in the application for quick training guidance, nutrition calculations, and prompt suggestions.
🛠️ Tech Stack & Architecture
Layer	Technologies
Frontend Framework	React 19 + Vite
Language	TypeScript
Styling & Design	Tailwind CSS v4 + @theme typography
Icons & Graphics	React Icons (react-icons/fa), Lucide React
3D & Visuals	Three.js WebGL Kinetic Wireframe Engine
Interactivity	Canvas Confetti for mission milestones
Backend & Routing	Express REST API proxy + Client-side Route State Manager
📂 Project Structure
code
Text
├── src/
│   ├── assets/
│   │   └── images/                # High-fidelity visual assets & photos
│   ├── components/
│   │   ├── dashboard/             # Authentic FitFreak-AI dashboard views
│   │   │   ├── AppNavbar.tsx      # 96px vertical navigation with react-icons/fa
│   │   │   ├── CalendarWidget.tsx # 6x7 monthly activity calendar
│   │   │   ├── CoinsPage.tsx      # Coin balance & reward shop catalog
│   │   │   ├── CommunityPage.tsx  # Reddit, Discord, WhatsApp & Telegram cards
│   │   │   ├── CurrentStreakPage.tsx # Streak telemetry & 7-tier badges
│   │   │   ├── GoalsPage.tsx      # Goal onboarding & target formulation
│   │   │   ├── HelpPage.tsx       # Mentors & workout video library
│   │   │   ├── PlansPage.tsx      # Daily missions with modal check-offs
│   │   │   ├── ProfilePage.tsx    # Personal bio, BMI/TDEE & editable stats
│   │   │   └── UserProfileSidebar.tsx # Right sticky mini profile widget
│   │   ├── ArchitectureSection.tsx# Open-source technical architecture
│   │   ├── BrandLogo.tsx          # 3D violet ribbon 'F' brand vector logo
│   │   ├── FeatureBentoGrid.tsx   # Asymmetric bento grid of capabilities
│   │   ├── FitFreakChatbot.tsx    # Contextual floating AI assistant
│   │   ├── Footer.tsx             # Global footer & repository links
│   │   ├── HeroSection.tsx        # Hero with typewriter proposition & CTAs
│   │   ├── InteractiveAIDemo.tsx  # Biomechanics kinematics & meal scanner
│   │   ├── LoginPage.tsx          # Authentication & 1-click athlete demo login
│   │   ├── Navbar.tsx             # Home navigation & feature quick links
│   │   ├── RealWorldProblemSection.tsx # Real-world problems & solutions
│   │   └── ThreeVisualBackground.tsx   # Ambient 3D kinetic mesh background
│   ├── App.tsx                    # Core app container & routing logic
│   ├── index.css                  # Tailwind CSS v4 root styling & fonts
│   └── main.tsx                   # React 19 application entry point
├── package.json                   # Dependencies & build scripts
├── metadata.json                  # AI Studio Applet configuration
└── README.md                      # Project documentation
⚡ Quick Start
1. Prerequisites
Node.js: version 18.x or higher
npm or yarn
2. Clone the Repository
code
Bash
git clone https://github.com/Surjendu-Pal/FitFreak-AI.git
cd FitFreak-AI
3. Install Dependencies
code
Bash
npm install
4. Run Development Server
code
Bash
npm run dev
Open your browser at http://localhost:3000 to launch FitFreak AI.
5. Build for Production
code
Bash
npm run build
🔒 Privacy & Edge AI Commitment
Zero Cloud Video Storage: Computer vision joint inference runs locally in the client session; camera frames are never transmitted to external servers.
Client-Side Profile Security: Athlete stats, weights, and goal telemetry are securely encapsulated.
🤝 Contributing
Contributions, feedback, and pull requests are warmly welcome!
Fork the Project (https://github.com/Surjendu-Pal/FitFreak-AI/fork)
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
