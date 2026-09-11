import React from 'react';

interface VitalityGridProps {
  steps: number;
  stepsGoal: number;
  activeMins: number;
  activeGoal: number;
  calories: number;
  screenTimeHours: number;
  screenTimeMinutes: number;
  screenLimitHours: number;
  screenLimitMinutes: number;
  waterLiters: number;
  waterGoalLiters: number;
  onAddWater: () => void;
  onOpenActivity: () => void;
  onOpenScreenTime: () => void;
}

export const VitalityGrid: React.FC<VitalityGridProps> = ({
  steps,
  stepsGoal,
  activeMins,
  activeGoal,
  calories,
  screenTimeHours,
  screenTimeMinutes,
  screenLimitHours,
  screenLimitMinutes,
  waterLiters,
  waterGoalLiters,
  onAddWater,
  onOpenActivity,
  onOpenScreenTime,
}) => {
  const stepsPct = Math.min(100, Math.round((steps / stepsGoal) * 100));
  const activePct = Math.min(100, Math.round((activeMins / activeGoal) * 100));
  const screenTotalMinutes = screenTimeHours * 60 + screenTimeMinutes;
  const screenLimitTotalMinutes = screenLimitHours * 60 + screenLimitMinutes;
  const screenPct = Math.min(100, Math.round((screenTotalMinutes / screenLimitTotalMinutes) * 100));
  const waterPct = Math.min(100, Math.round((waterLiters / waterGoalLiters) * 100));
  const cupsRemaining = Math.max(0, Math.ceil((waterGoalLiters - waterLiters) / 0.25));

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold text-[#181a2e]">Vitality &amp; Focus Today</h2>
        <span className="text-[12px] font-semibold text-[#436086]">4 of 4 tracked</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Steps Card */}
        <div
          onClick={onOpenActivity}
          className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edecff] flex flex-col justify-between h-36 cursor-pointer hover:border-[#b1f0ce] transition active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-[#b1f0ce] flex items-center justify-center text-[#002114]">
              <span className="material-symbols-outlined text-[18px]">directions_walk</span>
            </div>
            <span className="text-[11px] font-bold text-[#0f5238]">{stepsPct}%</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[22px] font-bold text-[#181a2e] leading-tight">
              {steps.toLocaleString()}
            </span>
            <span className="text-[11px] text-[#404943]">/ {stepsGoal.toLocaleString()} steps</span>
          </div>

          <div className="w-full bg-[#e6e6ff] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#2d6a4f] h-full rounded-full transition-all duration-500"
              style={{ width: `${stepsPct}%` }}
            ></div>
          </div>
        </div>

        {/* Active Minutes Card */}
        <div
          onClick={onOpenActivity}
          className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edecff] flex flex-col justify-between h-36 cursor-pointer hover:border-[#ffdbd2] transition active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-[#ffdbd2] flex items-center justify-center text-[#3c0800]">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
            <span className="text-[11px] font-bold text-[#7c2e19]">{calories} kcal</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[22px] font-bold text-[#181a2e] leading-tight">
              {activeMins}{' '}
              <span className="text-[14px] font-normal text-[#404943]">min</span>
            </span>
            <span className="text-[11px] text-[#404943]">Goal: {activeGoal} min daily</span>
          </div>

          <div className="w-full bg-[#e6e6ff] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#9b452e] h-full rounded-full transition-all duration-500"
              style={{ width: `${activePct}%` }}
            ></div>
          </div>
        </div>

        {/* Screen Time Card */}
        <div
          onClick={onOpenScreenTime}
          className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edecff] flex flex-col justify-between h-36 cursor-pointer hover:border-[#d3e3ff] transition active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-[#d3e3ff] flex items-center justify-center text-[#001c39]">
              <span className="material-symbols-outlined text-[18px]">phonelink_ring</span>
            </div>
            <span className="text-[11px] font-bold text-[#436086]">Calm</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[22px] font-bold text-[#181a2e] leading-tight">
              {screenTimeHours}h {screenTimeMinutes}m
            </span>
            <span className="text-[11px] text-[#404943]">
              {screenLimitHours}h {screenLimitMinutes}m limit
            </span>
          </div>

          <div className="w-full bg-[#e6e6ff] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#436086] h-full rounded-full transition-all duration-500"
              style={{ width: `${screenPct}%` }}
            ></div>
          </div>
        </div>

        {/* Water Card with Quick Add Tap */}
        <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edecff] flex flex-col justify-between h-36 group relative">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-[#b3d1fd] flex items-center justify-center text-[#3c597f]">
              <span className="material-symbols-outlined text-[18px]">water_drop</span>
            </div>
            <button
              onClick={onAddWater}
              title="Add 250ml water"
              className="text-[11px] font-bold text-[#436086] bg-[#f4f2ff] hover:bg-[#b3d1fd]/40 px-2 py-0.5 rounded-full flex items-center gap-0.5 transition active:scale-95"
            >
              <span>+250ml</span>
            </button>
          </div>

          <div className="flex flex-col">
            <span className="text-[22px] font-bold text-[#181a2e] leading-tight">
              {waterLiters.toFixed(1)}{' '}
              <span className="text-[14px] font-normal text-[#404943]">L</span>
            </span>
            <span className="text-[11px] text-[#404943]">
              {cupsRemaining > 0 ? `${cupsRemaining} cups left` : 'Goal reached! 🎉'}
            </span>
          </div>

          <div className="w-full bg-[#e6e6ff] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#3c597f] h-full rounded-full transition-all duration-500"
              style={{ width: `${waterPct}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
