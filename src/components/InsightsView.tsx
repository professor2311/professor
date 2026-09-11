import React from 'react';

export const InsightsView: React.FC = () => {
  const weeklyTrends = [
    { day: 'Fri', score: 79 },
    { day: 'Sat', score: 88 },
    { day: 'Sun', score: 85 },
    { day: 'Mon', score: 81 },
    { day: 'Tue', score: 84 },
    { day: 'Wed', score: 82 },
    { day: 'Thu', score: 86, isToday: true },
  ];

  const insights = [
    {
      title: 'Circadian Screen Discipline',
      desc: 'Putting screens into wind-down mode 45 minutes before sleep correlated with 18% quicker rest onset over your 12-day streak.',
      tag: 'Rest Rhythms',
      icon: 'bedtime',
      color: '#d3e3ff',
      textColor: '#001c39',
    },
    {
      title: 'Midday Vitality Rebound',
      desc: 'Taking short 5-minute outdoor walks between 1:00 PM and 3:00 PM maintained your cognitive focus index above 85% all afternoon.',
      tag: 'Movement Flow',
      icon: 'park',
      color: '#b1f0ce',
      textColor: '#002114',
    },
    {
      title: 'Hydration Front-Loading',
      desc: 'Drinking 1.5L before 2:00 PM eliminated late-afternoon dehydration headaches for 4 consecutive days.',
      tag: 'Vitality',
      icon: 'water_drop',
      color: '#b3d1fd',
      textColor: '#3c597f',
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fadeIn pb-10">
      {/* Header */}
      <div>
        <span className="text-[12px] font-bold text-[#436086] uppercase tracking-wider">
          On-Device Intelligence
        </span>
        <h1 className="text-[24px] font-bold text-[#181a2e]">Harmony Analytics</h1>
      </div>

      {/* Weekly Score Trend */}
      <div className="bg-white rounded-2xl p-5 border border-[#edecff] shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#707973] uppercase tracking-wider">
              7-Day Balance Trajectory
            </span>
            <span className="text-[20px] font-bold text-[#181a2e] block mt-0.5">
              83.5 Average Score
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#0f5238] bg-[#b1f0ce] px-2.5 py-1 rounded-full">
            +4.2% vs last week
          </span>
        </div>

        {/* 7-bar chart */}
        <div className="flex items-end justify-between h-32 pt-6 px-1 border-b border-[#f4f2ff]">
          {weeklyTrends.map((w, i) => {
            const heightPct = Math.round((w.score / 100) * 100);
            return (
              <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                <span className="text-[11px] font-bold text-[#181a2e]">{w.score}</span>
                <div className="w-7 bg-[#f4f2ff] h-20 rounded-t-lg relative flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      w.isToday ? 'bg-[#0f5238]' : 'bg-[#2d6a4f]/70'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                <span
                  className={`text-[11px] font-semibold ${
                    w.isToday ? 'text-[#0f5238] font-bold' : 'text-[#707973]'
                  }`}
                >
                  {w.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* On-Device AI Insights */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#181a2e]">Personalized Patterns</h2>
          <div className="flex items-center gap-1 text-[11px] text-[#436086]">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span>Private &amp; local</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-[#edecff] shadow-xs flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.color, color: item.textColor }}
                  >
                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#181a2e]">{item.title}</span>
                </div>
                <span className="text-[10px] font-bold text-[#436086] bg-[#f4f2ff] px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              <p className="text-[13px] text-[#404943] leading-relaxed pl-9">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
