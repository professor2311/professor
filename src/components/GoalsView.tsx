import React from 'react';

export const GoalsView: React.FC = () => {
  const days = [
    { day: 'M', active: true, num: 14 },
    { day: 'T', active: true, num: 15 },
    { day: 'W', active: true, num: 16 },
    { day: 'T', active: true, num: 17 },
    { day: 'F', active: true, num: 18 },
    { day: 'S', active: true, num: 19 },
    { day: 'S', active: true, num: 20 },
    { day: 'M', active: true, num: 21 },
    { day: 'T', active: true, num: 22 },
    { day: 'W', active: true, num: 23 },
    { day: 'T', active: true, num: 24, current: true },
    { day: 'F', active: false, num: 25 },
    { day: 'S', active: false, num: 26 },
    { day: 'S', active: false, num: 27 },
  ];

  const badges = [
    {
      title: '12-Day Streak',
      desc: 'Consistent daily harmony rhythm',
      icon: 'local_fire_department',
      color: '#b1f0ce',
      textColor: '#002114',
    },
    {
      title: 'Digital Sanctuary',
      desc: 'Under 3h screen time for 7 straight days',
      icon: 'spa',
      color: '#d3e3ff',
      textColor: '#001c39',
    },
    {
      title: 'Deep Hydration',
      desc: '2.5L water target met 5 days this week',
      icon: 'water_drop',
      color: '#b3d1fd',
      textColor: '#3c597f',
    },
    {
      title: 'Mindful Morning',
      desc: 'Yoga and daylight flow logged before 9am',
      icon: 'wb_sunny',
      color: '#ffdbd2',
      textColor: '#3c0800',
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fadeIn pb-10">
      {/* Header */}
      <div>
        <span className="text-[12px] font-bold text-[#436086] uppercase tracking-wider">
          Continuity &amp; Growth
        </span>
        <h1 className="text-[24px] font-bold text-[#181a2e]">Milestones &amp; Streaks</h1>
      </div>

      {/* Streak Banner */}
      <div className="bg-white rounded-2xl p-5 border border-[#edecff] shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#b1f0ce] text-[#0f5238] flex items-center justify-center text-2xl shadow-xs">
              🌿
            </div>
            <div>
              <span className="text-[20px] font-bold text-[#181a2e] block">12-Day Rhythm Streak</span>
              <span className="text-[12px] text-[#404943]">Your best streak this autumn!</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold text-[#0f5238] bg-[#b1f0ce] px-2.5 py-1 rounded-full">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Days visualization */}
        <div>
          <span className="text-[11px] font-bold text-[#707973] uppercase tracking-wider block mb-2">
            October Progression
          </span>
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {days.slice(0, 7).map((d, i) => (
              <div
                key={i}
                className={`py-2 rounded-xl flex flex-col items-center gap-1 ${
                  d.active ? 'bg-[#0f5238] text-white' : 'bg-[#f4f2ff] text-[#707973]'
                }`}
              >
                <span className="text-[10px] font-semibold">{d.day}</span>
                <span className="text-[12px] font-bold">{d.num}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5 text-center mt-1.5">
            {days.slice(7, 14).map((d, i) => (
              <div
                key={i}
                className={`py-2 rounded-xl flex flex-col items-center gap-1 relative ${
                  d.current
                    ? 'bg-[#2d6a4f] text-white ring-2 ring-[#b1f0ce]'
                    : d.active
                    ? 'bg-[#0f5238] text-white'
                    : 'bg-[#f4f2ff] text-[#bfc9c1]'
                }`}
              >
                <span className="text-[10px] font-semibold">{d.day}</span>
                <span className="text-[12px] font-bold">{d.num}</span>
                {d.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b1f0ce] absolute bottom-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges Earned */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[16px] font-bold text-[#181a2e]">Earned Milestones</h2>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl border border-[#edecff] shadow-xs flex flex-col justify-between h-36"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-xs"
                style={{ backgroundColor: b.color, color: b.textColor }}
              >
                <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
              </div>

              <div>
                <span className="text-[14px] font-bold text-[#181a2e] block leading-tight">
                  {b.title}
                </span>
                <span className="text-[11px] text-[#707973] mt-0.5 block leading-snug">{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
