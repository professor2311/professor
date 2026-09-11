import React, { useState, useEffect } from 'react';

interface GuidedWalkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const GuidedWalkModal: React.FC<GuidedWalkModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes
  const [isActive, setIsActive] = useState(false);
  const [stepPhase, setStepPhase] = useState<'breathe' | 'walk' | 'reflect'>('breathe');

  useEffect(() => {
    if (!isOpen) {
      setSecondsLeft(300);
      setIsActive(false);
      return;
    }
    setIsActive(true);
  }, [isOpen]);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsActive(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, onComplete]);

  // Phase updates based on time remaining
  useEffect(() => {
    if (secondsLeft > 240) {
      setStepPhase('breathe');
    } else if (secondsLeft > 60) {
      setStepPhase('walk');
    } else {
      setStepPhase('reflect');
    }
  }, [secondsLeft]);

  if (!isOpen) return null;

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fbf8ff] rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#edecff] flex flex-col items-center text-center relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#b1f0ce]/40 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-[#d3e3ff]/40 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#707973] hover:text-[#181a2e] shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Nature Icon */}
        <div className="w-16 h-16 rounded-full bg-[#b1f0ce] text-[#0f5238] flex items-center justify-center shadow-md mb-4 animate-pulse">
          <span className="material-symbols-outlined text-[32px]">park</span>
        </div>

        <span className="text-[11px] font-bold text-[#0f5238] uppercase tracking-wider mb-1">
          {stepPhase === 'breathe'
            ? 'Phase 1: Grounding Breath'
            : stepPhase === 'walk'
            ? 'Phase 2: Gentle Walking Pacing'
            : 'Phase 3: Soft Re-entry'}
        </span>

        <h3 className="text-[22px] font-bold text-[#181a2e]">5-Minute Mindful Walk</h3>
        <p className="text-[13px] text-[#404943] mt-1 mb-6 px-3 leading-relaxed">
          {stepPhase === 'breathe'
            ? 'Stand up, roll your shoulders back, and take three deep diaphragmatic breaths.'
            : stepPhase === 'walk'
            ? 'Step away from your display. Look at greenery or a distant window, allowing your eyes to unfocus.'
            : 'Savor the renewed clarity. Hydrate and prepare your mind for relaxed focus.'}
        </p>

        {/* Big Countdown Timer */}
        <div className="text-[52px] font-black tracking-tight text-[#0f5238] font-mono mb-6 leading-none">
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>

        {/* Play / Pause / Complete Controls */}
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => setIsActive(!isActive)}
            className="flex-1 h-12 rounded-full bg-[#0f5238] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-md hover:opacity-90 active:scale-95 transition"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isActive ? 'pause' : 'play_arrow'}
            </span>
            <span>{isActive ? 'Pause' : 'Resume'}</span>
          </button>

          <button
            onClick={() => {
              onComplete();
              onClose();
            }}
            className="px-4 h-12 rounded-full bg-white border border-[#bfc9c1] text-[#181a2e] text-[13px] font-semibold hover:bg-[#f4f2ff] active:scale-95 transition"
          >
            Finish Early
          </button>
        </div>
      </div>
    </div>
  );
};
