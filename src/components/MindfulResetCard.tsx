import React from 'react';

interface MindfulResetCardProps {
  onStartWalk: () => void;
  onDismiss: () => void;
  isDismissed: boolean;
  onRestore: () => void;
}

export const MindfulResetCard: React.FC<MindfulResetCardProps> = ({
  onStartWalk,
  onDismiss,
  isDismissed,
  onRestore,
}) => {
  if (isDismissed) {
    return (
      <div className="p-3 bg-[#f4f2ff] rounded-xl border border-dashed border-[#edecff] flex items-center justify-between text-[12px] text-[#404943]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-[#0f5238]">park</span>
          <span>Mindful reset prompt gently dismissed</span>
        </div>
        <button
          onClick={onRestore}
          className="text-[#0f5238] font-bold underline hover:opacity-80"
        >
          Restore
        </button>
      </div>
    );
  }

  return (
    <section className="bg-[#f4f2ff] rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#e6e6ff] relative overflow-hidden flex flex-col gap-4 transition-all">
      <div className="flex gap-3.5">
        <div className="w-12 h-12 rounded-full bg-[#b1f0ce] flex-shrink-0 flex items-center justify-center text-[#0f5238] shadow-sm">
          <span className="material-symbols-outlined text-[24px]">park</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#0f5238] uppercase tracking-wider font-bold">
              Mindful Reset Prompt
            </span>
            <span className="text-[11px] text-[#404943]">· 2m ago</span>
          </div>
          <p className="text-[14px] text-[#181a2e] leading-relaxed">
            You've enjoyed 55 minutes of focused screen time. How about a soothing 5-minute stretch or
            a brisk garden stroll to renew your focus?
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2.5 pt-1">
        <button
          onClick={onStartWalk}
          className="h-11 px-5 rounded-full bg-[#0f5238] text-white text-[14px] font-semibold flex items-center gap-2 shadow-sm hover:bg-[#0e5138] active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">directions_walk</span>
          <span>Start 5-min walk</span>
        </button>
        <button
          onClick={onDismiss}
          className="h-11 px-4 rounded-full bg-[#e6e6ff] text-[#404943] text-[13px] font-semibold hover:text-[#181a2e] hover:bg-[#d7d8f4] active:scale-95 transition-all"
        >
          Dismiss gently
        </button>
      </div>
    </section>
  );
};
