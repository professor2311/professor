import React from 'react';
import { WorkoutEntry } from '../types';

interface ActivityViewProps {
  steps: number;
  stepsGoal: number;
  activeMins: number;
  calories: number;
  workouts: WorkoutEntry[];
  onOpenLogWorkout: () => void;
}

export const ActivityView: React.FC<ActivityViewProps> = ({
  steps,
  stepsGoal,
  activeMins,
  calories,
  workouts,
  onOpenLogWorkout,
}) => {
  const hourlySteps = [
    { hour: '8am', val: 1200 },
    { hour: '10am', val: 2400 },
    { hour: '12pm', val: 1800 },
    { hour: '2pm', val: 1600 },
    { hour: '4pm', val: 1420 },
    { hour: '6pm', val: 0 },
    { hour: '8pm', val: 0 },
  ];

  const maxStepVal = 3000;

  return (
    <div className="flex flex-col gap-5 animate-fadeIn pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[12px] font-bold text-[#436086] uppercase tracking-wider">
            Movement &amp; Vitality
          </span>
          <h1 className="text-[24px] font-bold text-[#181a2e]">Daily Activity</h1>
        </div>
        <button
          onClick={onOpenLogWorkout}
          className="px-4 py-2 rounded-full bg-[#0f5238] text-white text-[12px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          <span>Log Activity</span>
        </button>
      </div>

      {/* Main Movement Stats */}
      <div className="bg-white rounded-2xl p-5 border border-[#edecff] shadow-sm flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[13px] font-bold text-[#181a2e]">Hourly Pacing</span>
          <span className="text-[11px] text-[#0f5238] font-semibold">Active Rhythms</span>
        </div>

        {/* Bar chart */}
        <div className="flex items-end justify-between h-28 pt-4 px-2 border-b border-[#f4f2ff]">
          {hourlySteps.map((item, idx) => {
            const heightPct = Math.round((item.val / maxStepVal) * 100);
            return (
              <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                <div className="w-6 bg-[#f4f2ff] h-20 rounded-t-md relative flex items-end overflow-hidden">
                  <div
                    className="w-full bg-[#2d6a4f] rounded-t-md transition-all duration-500"
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#707973] font-medium">{item.hour}</span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2 text-center pt-1">
          <div className="p-2.5 rounded-xl bg-[#f4f2ff]">
            <span className="text-[11px] text-[#404943] block">Total Steps</span>
            <span className="text-[16px] font-bold text-[#181a2e]">{steps.toLocaleString()}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#f4f2ff]">
            <span className="text-[11px] text-[#404943] block">Active Time</span>
            <span className="text-[16px] font-bold text-[#0f5238]">{activeMins}m</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#f4f2ff]">
            <span className="text-[11px] text-[#404943] block">Energy</span>
            <span className="text-[16px] font-bold text-[#7c2e19]">{calories} kcal</span>
          </div>
        </div>
      </div>

      {/* Today's Logged Workouts */}
      <div className="flex flex-col gap-2.5">
        <h2 className="text-[16px] font-bold text-[#181a2e]">Recorded Sessions</h2>
        {workouts.length === 0 ? (
          <div className="p-6 bg-white rounded-2xl border border-[#edecff] text-center text-[13px] text-[#707973]">
            No manual sessions logged yet today.
          </div>
        ) : (
          workouts.map((w) => (
            <div
              key={w.id}
              className="bg-white p-3.5 px-4 rounded-2xl border border-[#edecff] shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b1f0ce] text-[#002114] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#181a2e]">{w.type}</span>
                  <span className="text-[11px] text-[#404943]">
                    {w.time} · {w.durationMins} mins {w.notes ? `· "${w.notes}"` : ''}
                  </span>
                </div>
              </div>
              <span className="text-[12px] font-bold text-[#7c2e19]">+{w.calories} kcal</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
