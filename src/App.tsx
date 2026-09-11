import React, { useState } from 'react';
import { BalanceNavTab, HabitItem, WorkoutEntry } from './types';
import { BalanceHeader } from './components/BalanceHeader';
import { DailyHarmonyCard } from './components/DailyHarmonyCard';
import { VitalityGrid } from './components/VitalityGrid';
import { MindfulResetCard } from './components/MindfulResetCard';
import { HabitsChecklist } from './components/HabitsChecklist';
import { GuidedWalkModal } from './components/GuidedWalkModal';
import { LogWorkoutModal } from './components/LogWorkoutModal';
import { ActivityView } from './components/ActivityView';
import { ScreenTimeView } from './components/ScreenTimeView';
import { GoalsView } from './components/GoalsView';
import { InsightsView } from './components/InsightsView';
import { UserProfileModal } from './components/UserProfileModal';
import { StitchProjectDrawer } from './components/StitchProjectDrawer';
import { STITCH_RAW_HTML } from './data/stitchProjectCode';

export default function App() {
  const [activeNav, setActiveNav] = useState<BalanceNavTab>('today');

  // Core Vitality & Health Metric States (Initialized with Elena's Stitch data)
  const [steps, setSteps] = useState(8420);
  const stepsGoal = 10000;

  const [activeMins, setActiveMins] = useState(42);
  const activeGoal = 45;

  const [calories, setCalories] = useState(485);

  const [waterLiters, setWaterLiters] = useState(1.8);
  const waterGoalLiters = 2.5;

  const screenTimeHours = 2;
  const screenTimeMinutes = 15;
  const screenLimitHours = 3;
  const screenLimitMinutes = 30;

  // Habits State
  const [habits, setHabits] = useState<HabitItem[]>([
    {
      id: 'h-1',
      title: 'Morning mindful hydration (500ml)',
      completed: true,
    },
    {
      id: 'h-2',
      title: '20-min morning yoga & posture flow',
      completed: true,
    },
    {
      id: 'h-3',
      title: 'Screen-free 45 min before sleep',
      subtitle: 'Scheduled at 10:15 PM',
      completed: false,
    },
    {
      id: 'h-4',
      title: 'Afternoon outdoor reset',
      completed: false,
    },
  ]);

  // Workout History
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([
    {
      id: 'w-1',
      type: 'Morning Yoga Flow',
      durationMins: 20,
      calories: 110,
      time: '7:45 AM',
      notes: 'Calm posture realignment',
    },
    {
      id: 'w-2',
      type: 'Brisk Walk',
      durationMins: 22,
      calories: 120,
      time: '12:15 PM',
      notes: 'Park trail lunch stroll',
    },
  ]);

  // Modal & Mode States
  const [isResetDismissed, setIsResetDismissed] = useState(false);
  const [isWalkModalOpen, setIsWalkModalOpen] = useState(false);
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isStitchInfoOpen, setIsStitchInfoOpen] = useState(false);
  const [windDownMode, setWindDownMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Habit interactions
  const handleToggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const next = !h.completed;
          showToast(next ? `Completed: "${h.title}"` : `Marked incomplete`);
          return { ...h, completed: next };
        }
        return h;
      })
    );
  };

  const handleAddHabit = (title: string, subtitle?: string) => {
    const newH: HabitItem = {
      id: `h-${Date.now()}`,
      title,
      subtitle,
      completed: false,
    };
    setHabits((prev) => [...prev, newH]);
    showToast(`Added new habit: "${title}"`);
  };

  const handleDeleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
    showToast('Habit removed');
  };

  // Add water action (+250ml)
  const handleAddWater = () => {
    setWaterLiters((prev) => {
      const next = Math.min(3.5, Number((prev + 0.25).toFixed(2)));
      showToast(`Logged +250ml water (Total: ${next}L) 💧`);
      return next;
    });
  };

  // Add workout action
  const handleSaveWorkout = (
    type: string,
    duration: number,
    calBurn: number,
    notes?: string
  ) => {
    const newEntry: WorkoutEntry = {
      id: `w-${Date.now()}`,
      type,
      durationMins: duration,
      calories: calBurn,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      notes,
    };
    setWorkouts((prev) => [newEntry, ...prev]);
    setActiveMins((prev) => prev + duration);
    setCalories((prev) => prev + calBurn);
    setSteps((prev) => prev + duration * 110);
    showToast(`Logged ${duration}m ${type} (+${calBurn} kcal)`);
  };

  // Mindful walk completion
  const handleCompleteWalk = () => {
    setActiveMins((prev) => prev + 5);
    setCalories((prev) => prev + 25);
    setSteps((prev) => prev + 450);
    showToast('Mindful 5-minute walk completed! Feeling renewed. 🌿');
  };

  // Calculate dynamic Daily Harmony Index
  const completedHabitsRatio = habits.filter((h) => h.completed).length / habits.length;
  const movementRatio = Math.min(1, steps / stepsGoal);
  const harmonyScore = Math.min(
    99,
    Math.round(60 + movementRatio * 20 + completedHabitsRatio * 15 + (waterLiters >= 2.0 ? 5 : 0))
  );

  return (
    <div
      className={`min-h-screen text-[#181a2e] flex flex-col font-sans transition-colors duration-500 ${
        windDownMode ? 'bg-[#f4edf2] text-[#2d2f44]' : 'bg-[#fbf8ff]'
      }`}
    >
      {/* Fixed Header */}
      <BalanceHeader
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenStitchInfo={() => setIsStitchInfoOpen(true)}
      />

      {/* Wind Down Mode Active Indicator */}
      {windDownMode && (
        <div className="fixed top-16 left-0 right-0 z-30 bg-[#ffdbd2] text-[#7c2e19] px-4 py-1.5 text-center text-[12px] font-semibold flex items-center justify-center gap-1.5 shadow-xs animate-fadeIn">
          <span className="material-symbols-outlined text-[16px]">nightlight</span>
          <span>Wind-Down Sanctuary Active · Blue light & notifications dampened</span>
          <button
            onClick={() => setWindDownMode(false)}
            className="ml-3 underline font-bold hover:opacity-80"
          >
            Turn off
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 w-full max-w-md mx-auto px-5 pb-24 ${windDownMode ? 'pt-24' : 'pt-20'}`}>
        {/* TODAY SCREEN (Primary Stitch View) */}
        {activeNav === 'today' && (
          <div className="flex flex-col gap-5">
            {/* Header Greeting & Status Badges */}
            <section className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#436086] tracking-wide uppercase">
                  Thursday, Oct 24
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b1f0ce] text-[#002114] shadow-xs">
                  <span className="text-sm">🌿</span>
                  <span className="text-[11px] font-bold">12-day streak</span>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-[28px] font-extrabold text-[#181a2e] tracking-tight leading-tight">
                  Good afternoon, Elena
                </h1>
                <p className="text-[14px] text-[#404943] mt-0.5">
                  Your daytime rhythms are in beautiful sync.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e6e6ff] text-[#436086] text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[15px]">lock</span>
                  <span>On-device privacy active</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#edecff] text-[#404943] text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f5238]"></span>
                  <span>Updated just now</span>
                </div>
              </div>
            </section>

            {/* Hero Daily Balance Score Card */}
            <DailyHarmonyCard
              score={harmonyScore}
              movementPct={92}
              digitalRhythmPct={78}
              restPct={88}
              offlinePct={68}
              screenPct={32}
              onViewInsights={() => setActiveNav('insights')}
            />

            {/* At-a-glance 4-card Quick Stats Grid */}
            <VitalityGrid
              steps={steps}
              stepsGoal={stepsGoal}
              activeMins={activeMins}
              activeGoal={activeGoal}
              calories={calories}
              screenTimeHours={screenTimeHours}
              screenTimeMinutes={screenTimeMinutes}
              screenLimitHours={screenLimitHours}
              screenLimitMinutes={screenLimitMinutes}
              waterLiters={waterLiters}
              waterGoalLiters={waterGoalLiters}
              onAddWater={handleAddWater}
              onOpenActivity={() => setActiveNav('activity')}
              onOpenScreenTime={() => setActiveNav('screen-time')}
            />

            {/* Personalized Gentle Suggestion Card */}
            <MindfulResetCard
              onStartWalk={() => setIsWalkModalOpen(true)}
              onDismiss={() => setIsResetDismissed(true)}
              isDismissed={isResetDismissed}
              onRestore={() => setIsResetDismissed(false)}
            />

            {/* Gentle Alert Notice */}
            <section className="rounded-2xl p-4 bg-[#ffdbd2]/50 border border-[#ffb4a1]/50 flex items-start gap-3 shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#9b452e] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-bold text-[#7c2e19]">App Window Check-in</span>
                <p className="text-[13px] text-[#181a2e] leading-snug">
                  You're at 75% of your Instagram limit today (45m / 60m). A gentle heads-up to stay
                  present and protect your evening peace.
                </p>
              </div>
            </section>

            {/* Quick Habits Checklist */}
            <HabitsChecklist
              habits={habits}
              onToggleHabit={handleToggleHabit}
              onAddHabit={handleAddHabit}
              onDeleteHabit={handleDeleteHabit}
            />

            {/* Quick Action Floating Dock */}
            <section className="flex items-center justify-center gap-3 pt-1">
              <button
                onClick={() => setIsWorkoutModalOpen(true)}
                className="flex-1 h-12 rounded-full bg-[#0f5238] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#0e5138] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                <span>Log Workout</span>
              </button>

              <button
                onClick={() => {
                  const nextMode = !windDownMode;
                  setWindDownMode(nextMode);
                  showToast(
                    nextMode
                      ? 'Wind-Down Sanctuary Mode activated 🌙'
                      : 'Daylight rhythm restored ☀️'
                  );
                }}
                className={`flex-1 h-12 rounded-full text-[14px] font-bold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 ${
                  windDownMode
                    ? 'bg-[#ffdbd2] text-[#7c2e19] ring-2 ring-[#7c2e19]'
                    : 'bg-[#d3e3ff] text-[#001c39] hover:bg-[#abc8f4]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {windDownMode ? 'light_mode' : 'nightlight'}
                </span>
                <span>{windDownMode ? 'Daylight Mode' : 'Wind-Down Mode'}</span>
              </button>
            </section>
          </div>
        )}

        {/* ACTIVITY VIEW */}
        {activeNav === 'activity' && (
          <ActivityView
            steps={steps}
            stepsGoal={stepsGoal}
            activeMins={activeMins}
            calories={calories}
            workouts={workouts}
            onOpenLogWorkout={() => setIsWorkoutModalOpen(true)}
          />
        )}

        {/* SCREEN TIME VIEW */}
        {activeNav === 'screen-time' && <ScreenTimeView />}

        {/* GOALS & STREAKS VIEW */}
        {activeNav === 'goals' && <GoalsView />}

        {/* INSIGHTS VIEW */}
        {activeNav === 'insights' && <InsightsView />}
      </main>

      {/* Bottom Sticky Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fbf8ff]/90 backdrop-blur-xl border-t border-[#edecff]/80 shadow-[0_-4px_24px_rgba(0,0,0,0.03)]">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
          <button
            onClick={() => setActiveNav('today')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
              activeNav === 'today' ? 'text-[#0f5238] font-bold' : 'text-[#404943] hover:text-[#181a2e]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                activeNav === 'today' ? 'scale-110' : ''
              }`}
            >
              spa
            </span>
            <span className="text-[11px] mt-0.5">Today</span>
          </button>

          <button
            onClick={() => setActiveNav('activity')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
              activeNav === 'activity'
                ? 'text-[#0f5238] font-bold'
                : 'text-[#404943] hover:text-[#181a2e]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                activeNav === 'activity' ? 'scale-110' : ''
              }`}
            >
              directions_walk
            </span>
            <span className="text-[11px] mt-0.5">Activity</span>
          </button>

          <button
            onClick={() => setActiveNav('screen-time')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
              activeNav === 'screen-time'
                ? 'text-[#0f5238] font-bold'
                : 'text-[#404943] hover:text-[#181a2e]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                activeNav === 'screen-time' ? 'scale-110' : ''
              }`}
            >
              bedtime
            </span>
            <span className="text-[11px] mt-0.5">Screen Time</span>
          </button>

          <button
            onClick={() => setActiveNav('goals')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
              activeNav === 'goals' ? 'text-[#0f5238] font-bold' : 'text-[#404943] hover:text-[#181a2e]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                activeNav === 'goals' ? 'scale-110' : ''
              }`}
            >
              task_alt
            </span>
            <span className="text-[11px] mt-0.5">Goals</span>
          </button>

          <button
            onClick={() => setActiveNav('insights')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
              activeNav === 'insights'
                ? 'text-[#0f5238] font-bold'
                : 'text-[#404943] hover:text-[#181a2e]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                activeNav === 'insights' ? 'scale-110' : ''
              }`}
            >
              auto_awesome
            </span>
            <span className="text-[11px] mt-0.5">Insights</span>
          </button>
        </div>
      </nav>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-[#181a2e] text-white px-4 py-2.5 rounded-full text-[13px] font-semibold shadow-xl flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[18px] text-[#b1f0ce]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals & Dialogs */}
      <GuidedWalkModal
        isOpen={isWalkModalOpen}
        onClose={() => setIsWalkModalOpen(false)}
        onComplete={handleCompleteWalk}
      />

      <LogWorkoutModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        onSaveWorkout={handleSaveWorkout}
      />

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenStitch={() => setIsStitchInfoOpen(true)}
      />

      <StitchProjectDrawer
        isOpen={isStitchInfoOpen}
        onClose={() => setIsStitchInfoOpen(false)}
        rawHtml={STITCH_RAW_HTML}
      />
    </div>
  );
}
