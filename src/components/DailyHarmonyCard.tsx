import React from 'react';

interface DailyHarmonyCardProps {
  score: number;
  movementPct: number;
  digitalRhythmPct: number;
  restPct: number;
  offlinePct: number;
  screenPct: number;
  onViewInsights: () => void;
}

export const DailyHarmonyCard: React.FC<DailyHarmonyCardProps> = ({
  score,
  movementPct,
  digitalRhythmPct,
  restPct,
  offlinePct,
  screenPct,
  onViewInsights,
}) => {
  // SVG circle calculations
  // Circumference 2 * PI * 50 = 314.16
  // Offset = 314.16 * (1 - pct/100)
  const outerOffset = 314.16 * (1 - movementPct / 100);
  // Inner circumference 2 * PI * 38 = 238.76
  const innerOffset = 238.76 * (1 - digitalRhythmPct / 100);

  return (
    <section className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#edecff] relative overflow-hidden flex flex-col gap-4">
      {/* Top Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-[12px] font-bold text-[#0f5238] uppercase tracking-wider">
            Daily Harmony Index
          </span>
          <span className="text-[20px] font-bold text-[#181a2e] leading-tight mt-0.5">
            Mindful &amp; Active
          </span>
        </div>
        <button
          onClick={onViewInsights}
          aria-label="Score history"
          className="w-9 h-9 rounded-full bg-[#f4f2ff] hover:bg-[#e6e6ff] flex items-center justify-center text-[#436086] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">insights</span>
        </button>
      </div>

      {/* Radial Gauge Visual Presentation */}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-1">
        <div className="relative flex items-center justify-center w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Outer track */}
            <circle
              className="text-[#e6e6ff]"
              cx="60"
              cy="60"
              fill="transparent"
              r="50"
              stroke="currentColor"
              strokeWidth="9"
            />
            {/* Outer Progress (Movement) */}
            <circle
              className="text-[#2d6a4f] transition-all duration-700 ease-out"
              cx="60"
              cy="60"
              fill="transparent"
              r="50"
              stroke="currentColor"
              strokeDasharray="314.16"
              strokeDashoffset={outerOffset}
              strokeLinecap="round"
              strokeWidth="9"
            />
            {/* Inner track */}
            <circle
              className="text-[#edecff]"
              cx="60"
              cy="60"
              fill="transparent"
              r="38"
              stroke="currentColor"
              strokeWidth="6"
            />
            {/* Inner Progress (Digital Rhythm) */}
            <circle
              className="text-[#436086] transition-all duration-700 ease-out"
              cx="60"
              cy="60"
              fill="transparent"
              r="38"
              stroke="currentColor"
              strokeDasharray="238.76"
              strokeDashoffset={innerOffset}
              strokeLinecap="round"
              strokeWidth="6"
            />
          </svg>

          {/* Center Score */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[44px] font-extrabold text-[#181a2e] leading-none tracking-tight">
              {score}
            </span>
            <span className="text-[11px] font-bold text-[#0f5238] mt-1 tracking-wider uppercase">
              {score >= 80 ? 'OPTIMAL' : 'GOOD'}
            </span>
          </div>
        </div>

        {/* Breakdown Metric Pills */}
        <div className="flex flex-col gap-2.5 w-full sm:w-48">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f4f2ff]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2d6a4f]"></span>
              <span className="text-[12px] font-medium text-[#181a2e]">Physical Movement</span>
            </div>
            <span className="text-[13px] font-bold text-[#181a2e]">{movementPct}%</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f4f2ff]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#436086]"></span>
              <span className="text-[12px] font-medium text-[#181a2e]">Digital Rhythm</span>
            </div>
            <span className="text-[13px] font-bold text-[#181a2e]">{digitalRhythmPct}%</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f4f2ff]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#95d4b3]"></span>
              <span className="text-[12px] font-medium text-[#181a2e]">Rest &amp; Hydration</span>
            </div>
            <span className="text-[13px] font-bold text-[#181a2e]">{restPct}%</span>
          </div>
        </div>
      </div>

      {/* Soft Equilibrium Bar */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex justify-between items-center text-[#404943] text-[11px] font-semibold">
          <span>Offline Living: {offlinePct}%</span>
          <span>Mindful Screen: {screenPct}%</span>
        </div>
        <div className="h-2.5 w-full bg-[#edecff] rounded-full overflow-hidden flex">
          <div
            className="bg-[#2d6a4f] h-full rounded-l-full transition-all duration-500"
            style={{ width: `${offlinePct}%` }}
          ></div>
          <div
            className="bg-[#436086] h-full rounded-r-full transition-all duration-500"
            style={{ width: `${screenPct}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
