import React, { useState } from 'react';

interface LogWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveWorkout: (type: string, duration: number, calories: number, notes?: string) => void;
}

const WORKOUT_TYPES = [
  { id: 'walk', label: 'Brisk Walk', icon: 'directions_walk', calPerMin: 5 },
  { id: 'yoga', label: 'Yoga & Flow', icon: 'self_improvement', calPerMin: 4 },
  { id: 'cycling', label: 'Outdoor Cycling', icon: 'directions_bike', calPerMin: 8 },
  { id: 'strength', label: 'Mindful Strength', icon: 'fitness_center', calPerMin: 7 },
  { id: 'run', label: 'Gentle Jog', icon: 'sprint', calPerMin: 10 },
];

export const LogWorkoutModal: React.FC<LogWorkoutModalProps> = ({
  isOpen,
  onClose,
  onSaveWorkout,
}) => {
  const [selectedType, setSelectedType] = useState(WORKOUT_TYPES[0].id);
  const [duration, setDuration] = useState(30);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const currentType = WORKOUT_TYPES.find((t) => t.id === selectedType) || WORKOUT_TYPES[0];
  const calculatedCalories = duration * currentType.calPerMin;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveWorkout(currentType.label, duration, calculatedCalories, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fbf8ff] rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#edecff] flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#b1f0ce] text-[#0f5238] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">fitness_center</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#181a2e]">Log Activity</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#707973] hover:text-[#181a2e] shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Workout Type Selector */}
          <div>
            <label className="text-[12px] font-bold text-[#404943] uppercase tracking-wider mb-2 block">
              Movement Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {WORKOUT_TYPES.map((type) => (
                <button
                  type="button"
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition active:scale-95 ${
                    selectedType === type.id
                      ? 'bg-[#0f5238] text-white border-[#0f5238] shadow-sm'
                      : 'bg-white text-[#181a2e] border-[#edecff] hover:bg-[#f4f2ff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{type.icon}</span>
                  <span className="text-[11px] font-semibold">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[12px] font-bold text-[#404943] uppercase tracking-wider">
                Duration
              </label>
              <span className="text-[14px] font-bold text-[#0f5238]">{duration} minutes</span>
            </div>
            <input
              type="range"
              min="5"
              max="120"
              step="5"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-[#0f5238] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#707973] mt-1">
              <span>5m</span>
              <span>30m</span>
              <span>60m</span>
              <span>120m</span>
            </div>
          </div>

          {/* Estimated Energy */}
          <div className="p-3 bg-white rounded-xl border border-[#edecff] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c2e19] text-[20px]">local_fire_department</span>
              <span className="text-[12px] text-[#404943]">Estimated Burn:</span>
            </div>
            <span className="text-[14px] font-bold text-[#7c2e19]">~{calculatedCalories} kcal</span>
          </div>

          {/* Notes */}
          <div>
            <label className="text-[12px] font-bold text-[#404943] uppercase tracking-wider mb-1 block">
              Mindful Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Sunny trail, steady rhythm, deep breathing"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-[13px] px-3 py-2 rounded-xl bg-white border border-[#edecff] text-[#181a2e] focus:outline-none focus:ring-1 focus:ring-[#0f5238]"
            />
          </div>

          {/* Submit */}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-11 rounded-full bg-[#e6e6ff] text-[#404943] text-[13px] font-semibold hover:bg-[#d7d8f4] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-11 rounded-full bg-[#0f5238] text-white text-[13px] font-semibold hover:bg-[#0e5138] shadow-sm transition"
            >
              Log Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
