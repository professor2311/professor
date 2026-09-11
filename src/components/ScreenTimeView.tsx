import React, { useState } from 'react';

interface AppUsage {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  limitMinutes: number;
  color: string;
  icon: string;
}

export const ScreenTimeView: React.FC = () => {
  const [apps, setApps] = useState<AppUsage[]>([
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'Social Media',
      durationMinutes: 45,
      limitMinutes: 60,
      color: '#9b452e',
      icon: 'photo_camera',
    },
    {
      id: 'slack',
      name: 'Work Communication',
      category: 'Productivity',
      durationMinutes: 70,
      limitMinutes: 90,
      color: '#436086',
      icon: 'chat',
    },
    {
      id: 'notion',
      name: 'Notes & Journal',
      category: 'Reflection',
      durationMinutes: 28,
      limitMinutes: 45,
      color: '#0f5238',
      icon: 'edit_note',
    },
    {
      id: 'books',
      name: 'Kindle & Reading',
      category: 'Mindful Reading',
      durationMinutes: 22,
      limitMinutes: 60,
      color: '#2d6a4f',
      icon: 'menu_book',
    },
  ]);

  const totalMinutes = apps.reduce((sum, a) => sum + a.durationMinutes, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMins = totalMinutes % 60;

  return (
    <div className="flex flex-col gap-5 animate-fadeIn pb-10">
      {/* Header */}
      <div>
        <span className="text-[12px] font-bold text-[#436086] uppercase tracking-wider">
          Digital Equilibrium
        </span>
        <h1 className="text-[24px] font-bold text-[#181a2e]">Screen Time &amp; Focus</h1>
      </div>

      {/* Main summary card */}
      <div className="bg-white rounded-2xl p-5 border border-[#edecff] shadow-sm flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#404943] uppercase tracking-wider">
              Total Screen Exposure
            </span>
            <span className="text-[32px] font-extrabold text-[#181a2e]">
              {totalHours}h {remainingMins}m
            </span>
            <span className="text-[12px] text-[#0f5238] font-semibold">
              ✓ 1h 15m under your 3h 30m daily balance target
            </span>
          </div>

          <div className="px-3 py-1 rounded-full bg-[#d3e3ff] text-[#001c39] text-[11px] font-bold">
            Calm Zone
          </div>
        </div>

        {/* Stacked bar */}
        <div className="h-3 w-full bg-[#edecff] rounded-full overflow-hidden flex">
          {apps.map((a) => {
            const pct = (a.durationMinutes / totalMinutes) * 100;
            return (
              <div
                key={a.id}
                style={{ width: `${pct}%`, backgroundColor: a.color }}
                className="h-full first:rounded-l-full last:rounded-r-full"
                title={`${a.name}: ${a.durationMinutes}m`}
              />
            );
          })}
        </div>
      </div>

      {/* App Limits Breakdown */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] font-bold text-[#181a2e]">App Windows &amp; Limits</h2>
          <span className="text-[11px] text-[#707973]">Gentle on-device alerts</span>
        </div>

        <div className="flex flex-col gap-2">
          {apps.map((app) => {
            const pct = Math.min(100, Math.round((app.durationMinutes / app.limitMinutes) * 100));
            const isNearLimit = pct >= 75;

            return (
              <div
                key={app.id}
                className="bg-white p-4 rounded-2xl border border-[#edecff] shadow-xs flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: app.color }}
                    >
                      <span className="material-symbols-outlined text-[18px]">{app.icon}</span>
                    </div>
                    <div>
                      <span className="text-[14px] font-bold text-[#181a2e]">{app.name}</span>
                      <span className="text-[11px] text-[#707973] block">{app.category}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[13px] font-bold text-[#181a2e]">
                      {app.durationMinutes}m{' '}
                      <span className="text-[11px] text-[#707973]">/ {app.limitMinutes}m</span>
                    </span>
                    {isNearLimit && (
                      <span className="text-[10px] font-bold text-[#7c2e19] block">
                        75% used · Check-in sent
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full bg-[#f4f2ff] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: isNearLimit ? '#ba1a1a' : app.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
