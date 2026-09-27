import React, { useState } from 'react';
import { 
  ClipboardList, 
  HelpCircle, 
  CheckCircle2, 
  X, 
  Dumbbell, 
  Utensils, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Exercise {
  _id: string;
  name: string;
  sets: number;
  reps: number;
  done: boolean;
}

interface Meal {
  _id: string;
  name: string;
  calories: number;
  taken: boolean;
}

interface DayPlan {
  day: number;
  calories: number;
  exercises: Exercise[];
  meals: Meal[];
}

interface PlansPageProps {
  onNavigate: (route: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onNavigate }) => {
  const [plans, setPlans] = useState<DayPlan[]>([
    {
      day: 1,
      calories: 2500,
      exercises: [
        { _id: 'e1', name: 'Barbell Back Squats', sets: 4, reps: 8, done: true },
        { _id: 'e2', name: 'Leg Press (Quad Focus)', sets: 3, reps: 10, done: true },
        { _id: 'e3', name: 'Hamstring Romanian Deadlifts', sets: 3, reps: 10, done: false },
        { _id: 'e4', name: 'Standing Calf Raises', sets: 4, reps: 15, done: false },
      ],
      meals: [
        { _id: 'm1', name: 'Oatmeal & Whey Protein with Blueberries', calories: 550, taken: true },
        { _id: 'm2', name: 'Grilled Chicken, Brown Rice & Broccoli', calories: 750, taken: true },
        { _id: 'm3', name: 'Greek Yogurt & Almond Snack', calories: 350, taken: false },
        { _id: 'm4', name: 'Salmon Fillet with Quinoa & Asparagus', calories: 850, taken: false },
      ],
    },
    {
      day: 2,
      calories: 2450,
      exercises: [
        { _id: 'e5', name: 'Incline Dumbbell Bench Press', sets: 4, reps: 8, done: false },
        { _id: 'e6', name: 'Overhead Military Press', sets: 3, reps: 10, done: false },
        { _id: 'e7', name: 'Cable Tricep Pushdowns', sets: 3, reps: 12, done: false },
      ],
      meals: [
        { _id: 'm5', name: 'Egg White Omelet & Avocado Toast', calories: 600, taken: false },
        { _id: 'm6', name: 'Turkey Breast Wrap with Sweet Potato', calories: 750, taken: false },
      ],
    },
    {
      day: 3,
      calories: 2200,
      exercises: [],
      meals: [
        { _id: 'm7', name: 'High-Protein Smoothie Bowl', calories: 500, taken: false },
        { _id: 'm8', name: 'Grass-fed Beef Stir Fry', calories: 800, taken: false },
      ],
    },
  ]);

  const [activeDay, setActiveDay] = useState<DayPlan | null>(null);

  const markItem = (dayNum: number, type: 'exercise' | 'meal', itemId: string) => {
    setPlans((prev) =>
      prev.map((dp) => {
        if (dp.day !== dayNum) return dp;
        if (type === 'exercise') {
          return {
            ...dp,
            exercises: dp.exercises.map((ex) =>
              ex._id === itemId ? { ...ex, done: true } : ex
            ),
          };
        } else {
          return {
            ...dp,
            meals: dp.meals.map((meal) =>
              meal._id === itemId ? { ...meal, taken: true } : meal
            ),
          };
        }
      })
    );

    setActiveDay((prev) => {
      if (!prev || prev.day !== dayNum) return prev;
      if (type === 'exercise') {
        return {
          ...prev,
          exercises: prev.exercises.map((ex) =>
            ex._id === itemId ? { ...ex, done: true } : ex
          ),
        };
      } else {
        return {
          ...prev,
          meals: prev.meals.map((meal) =>
            meal._id === itemId ? { ...meal, taken: true } : meal
          ),
        };
      }
    });

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#10B981'],
    });
  };

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-violet-900/30 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <ClipboardList className="w-7 h-7 text-violet-400" />
            <span>Personalized Workout & Meal Plans</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Follow your day-by-day training schedule, mark workouts done, and hit your nutrition milestones.
          </p>
        </div>
      </div>

      {/* Help Banner matching Help Section in Plan.jsx */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/60 to-purple-950/40 border border-violet-500/30 flex items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-violet-300 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-200">
            Having problems with your exercises or need technique guidance?
          </p>
        </div>
        <button
          onClick={() => onNavigate('/help')}
          className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          Get Help
        </button>
      </div>

      {/* Day Progress Cards List */}
      <div className="grid grid-cols-1 gap-4">
        {plans.map((dayPlan) => {
          const totalItems = (dayPlan.exercises?.length || 0) + (dayPlan.meals?.length || 0);
          const completedItems =
            (dayPlan.exercises?.filter((ex) => ex.done).length || 0) +
            (dayPlan.meals?.filter((meal) => meal.taken).length || 0);
          const percentage = totalItems ? Math.round((completedItems / totalItems) * 100) : 100;

          return (
            <div
              key={dayPlan.day}
              className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl"
            >
              <div className="space-y-2 flex-1 w-full">
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <h2 className="text-lg font-bold text-white font-mono">
                    Day {dayPlan.day}
                  </h2>
                  <span className="text-xs font-mono text-violet-300">
                    {dayPlan.exercises.length === 0 ? '🛌 Recovery Day' : `${dayPlan.exercises.length} Exercises · ${dayPlan.meals.length} Meals`}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-violet-900/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-emerald-400 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {percentage}% Completed ({completedItems}/{totalItems} items)
                </div>
              </div>

              <button
                onClick={() => setActiveDay(dayPlan)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-violet-950/80 border border-violet-500/30 rounded-xl transition-all shrink-0 cursor-pointer shadow-md w-full sm:w-auto"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>

      {/* View Details Modal matching activeDay modal in Plan.jsx */}
      {activeDay && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveDay(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-[#0c0919] border border-violet-500/40 p-6 sm:p-8 space-y-6 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-violet-900/30 pb-3">
              <div>
                <h2 className="text-xl font-bold text-white font-mono">
                  Day {activeDay.day} Schedule
                </h2>
                <p className="text-xs font-mono text-violet-400">
                  Target Intake: {activeDay.calories} Calories
                </p>
              </div>
              <button
                onClick={() => setActiveDay(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-violet-950 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Exercises Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-violet-400" />
                <span>Exercises</span>
              </h3>

              {activeDay.exercises?.length ? (
                <div className="space-y-2">
                  {activeDay.exercises.map((ex) => (
                    <div
                      key={ex._id}
                      className="p-3 rounded-xl bg-slate-950/70 border border-violet-900/30 flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="text-slate-200">
                        {ex.name} ({ex.sets}x{ex.reps})
                      </span>
                      <button
                        disabled={ex.done}
                        onClick={() => markItem(activeDay.day, 'exercise', ex._id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          ex.done
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 cursor-default'
                            : 'bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-sm'
                        }`}
                      >
                        {ex.done ? '✅ Done' : 'Mark Done'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-violet-950/20 text-slate-400 text-xs font-mono">
                  🛌 Active Recovery Day — Light walking and stretching
                </div>
              )}
            </div>

            {/* Meals Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-purple-400" />
                <span>Planned Meals</span>
              </h3>

              {activeDay.meals?.length ? (
                <div className="space-y-2">
                  {activeDay.meals.map((meal) => (
                    <div
                      key={meal._id}
                      className="p-3 rounded-xl bg-slate-950/70 border border-violet-900/30 flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="text-slate-200">
                        {meal.name} ({meal.calories} cal)
                      </span>
                      <button
                        disabled={meal.taken}
                        onClick={() => markItem(activeDay.day, 'meal', meal._id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          meal.taken
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 cursor-default'
                            : 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer shadow-sm'
                        }`}
                      >
                        {meal.taken ? '🍽 Taken' : 'Mark Taken'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-violet-950/20 text-slate-400 text-xs font-mono">
                  🛌 Recovery Nutrition Focus
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
