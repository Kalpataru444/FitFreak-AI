import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  ArrowRight, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Dumbbell 
} from 'lucide-react';

interface Goal {
  _id: string;
  type: string;
  targetWeight: number;
  pace: string;
  dailyCalories?: number;
}

interface GoalsPageProps {
  onNavigate: (route: string) => void;
}

export const GoalsPage: React.FC<GoalsPageProps> = ({ onNavigate }) => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      _id: 'goal-1',
      type: 'build_muscle',
      targetWeight: 75,
      pace: 'normal',
      dailyCalories: 2600,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    type: 'build_muscle',
    targetWeight: '',
    pace: 'normal',
    dailyCalories: '',
  });

  const goalTypeMap: Record<string, string> = {
    lose_weight: 'Lose Weight',
    gain_weight: 'Gain Weight',
    build_muscle: 'Build Muscle',
    maintain: 'Maintain',
    endurance: 'Endurance',
  };

  const paceMap: Record<string, string> = {
    slow: 'Slow',
    normal: 'Normal',
    fast: 'Fast',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.targetWeight) return;

    const newGoal: Goal = {
      _id: `goal-${Date.now()}`,
      type: form.type,
      targetWeight: Number(form.targetWeight),
      pace: form.pace,
      dailyCalories: form.dailyCalories ? Number(form.dailyCalories) : undefined,
    };

    setGoals([...goals, newGoal]);
    setForm({ type: 'build_muscle', targetWeight: '', pace: 'normal', dailyCalories: '' });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setGoals(goals.filter((g) => g._id !== id));
  };

  return (
    <div className="space-y-6 text-left max-w-4xl mx-auto py-2">
      <div className="flex items-center justify-between border-b border-violet-900/30 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <Target className="w-7 h-7 text-violet-400" />
            <span>Your Goals</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Define your targets to automatically generate dynamic weekly workout and meal plans.
          </p>
        </div>

        {!showForm && goals.length > 0 && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-950/50 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Goal</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {goals.length === 0 && !showForm && (
        <div className="p-12 text-center rounded-3xl bg-[#0c0819] border border-violet-900/40 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-950/60 border border-violet-500/40 flex items-center justify-center text-violet-300">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">No goals yet 🎯</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
            Start your fitness journey by creating your first personalized target.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-all shadow-md cursor-pointer"
          >
            + Create Goal
          </button>
        </div>
      )}

      {/* Toggleable Create Goal Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#0c0819] border border-violet-500/40 space-y-4 shadow-xl">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Create New Fitness Goal
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400 font-mono">Goal Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
                required
              >
                <option value="lose_weight">Lose Weight</option>
                <option value="gain_weight">Gain Weight</option>
                <option value="build_muscle">Build Muscle</option>
                <option value="maintain">Maintain</option>
                <option value="endurance">Endurance</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400 font-mono">Target Weight (kg)</label>
              <input
                type="number"
                value={form.targetWeight}
                onChange={(e) => setForm({ ...form, targetWeight: e.target.value })}
                placeholder="e.g. 72"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400 font-mono">Progression Pace</label>
              <select
                value={form.pace}
                onChange={(e) => setForm({ ...form, pace: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
                required
              >
                <option value="slow">Slow (Gentle progression)</option>
                <option value="normal">Normal (Recommended)</option>
                <option value="fast">Fast (Intense)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400 font-mono">Daily Calories (Optional)</label>
              <input
                type="number"
                value={form.dailyCalories}
                onChange={(e) => setForm({ ...form, dailyCalories: e.target.value })}
                placeholder="e.g. 2400"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-violet-900/40 focus:border-violet-500 text-white text-xs outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-all cursor-pointer shadow-md shadow-violet-950/40"
            >
              Create Goal & Plan
            </button>
          </div>
        </form>
      )}

      {/* Goals List */}
      {goals.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => (
            <div
              key={goal._id}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c0819] border border-violet-900/30 hover:border-violet-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                  <h3 className="text-lg font-bold text-white font-mono">
                    {goalTypeMap[goal.type] || goal.type}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-950 border border-violet-500/30 text-violet-300">
                    {paceMap[goal.pace] || goal.pace} Pace
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-mono">
                  <div><strong>Target:</strong> {goal.targetWeight} kg</div>
                  {goal.dailyCalories && (
                    <div><strong>Calories:</strong> {goal.dailyCalories} kcal</div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-violet-900/30">
                <button
                  onClick={() => handleDelete(goal._id)}
                  className="p-2 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-950/30 transition-colors cursor-pointer"
                  title="Delete Goal"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/plans')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>View Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
