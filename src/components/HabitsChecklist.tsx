import React, { useState } from 'react';
import { HabitItem } from '../types';

interface HabitsChecklistProps {
  habits: HabitItem[];
  onToggleHabit: (id: string) => void;
  onAddHabit: (title: string, subtitle?: string) => void;
  onDeleteHabit: (id: string) => void;
}

export const HabitsChecklist: React.FC<HabitsChecklistProps> = ({
  habits,
  onToggleHabit,
  onAddHabit,
  onDeleteHabit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const completedCount = habits.filter((h) => h.completed).length;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddHabit(newTitle.trim(), newSubtitle.trim() || undefined);
    setNewTitle('');
    setNewSubtitle('');
    setShowAddForm(false);
  };

  return (
    <section className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[17px] font-bold text-[#181a2e]">Mindful Habits</h2>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#b1f0ce] text-[#002114]">
            {completedCount} of {habits.length} done
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="text-[12px] font-bold text-[#0f5238] hover:underline"
          >
            {showAddForm ? 'Cancel' : '+ Add'}
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-[12px] font-bold text-[#436086] hover:underline"
          >
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Add Habit Inline Form */}
      {showAddForm && (
        <form
          onSubmit={handleCreate}
          className="p-3.5 bg-white rounded-2xl border border-[#b1f0ce] shadow-sm flex flex-col gap-2.5 animate-fadeIn"
        >
          <input
            type="text"
            placeholder="Habit title (e.g. 10m breathwork session)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full text-[13px] px-3 py-2 rounded-xl bg-[#f4f2ff] border border-[#edecff] text-[#181a2e] focus:outline-none focus:ring-1 focus:ring-[#0f5238]"
            autoFocus
          />
          <input
            type="text"
            placeholder="Optional subtitle/time (e.g. Daily at 8:00 AM)"
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
            className="w-full text-[12px] px-3 py-1.5 rounded-xl bg-[#f4f2ff] border border-[#edecff] text-[#404943] focus:outline-none focus:ring-1 focus:ring-[#0f5238]"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-3 py-1 text-[12px] rounded-lg bg-[#e6e6ff] text-[#404943]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 text-[12px] font-semibold rounded-lg bg-[#0f5238] text-white"
            >
              Save Habit
            </button>
          </div>
        </form>
      )}

      {/* Habits List */}
      <div className="flex flex-col gap-2">
        {habits.map((habit) => {
          return (
            <div
              key={habit.id}
              className={`flex items-center justify-between p-3 px-4 rounded-2xl bg-white shadow-[0_1px_6px_rgba(0,0,0,0.02)] border border-[#edecff] transition-all ${
                habit.completed ? 'opacity-85' : ''
              }`}
            >
              <label className="flex items-center gap-3 cursor-pointer flex-1 select-none">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => onToggleHabit(habit.id)}
                  className="w-5 h-5 rounded-full text-[#0f5238] accent-[#0f5238] cursor-pointer"
                />
                <div className="flex flex-col">
                  <span
                    className={`text-[14px] text-[#181a2e] font-medium leading-snug transition-all ${
                      habit.completed ? 'line-through opacity-70' : ''
                    }`}
                  >
                    {habit.title}
                  </span>
                  {habit.subtitle && (
                    <span className="text-[11px] text-[#404943] mt-0.5">{habit.subtitle}</span>
                  )}
                </div>
              </label>

              <div className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    habit.completed ? 'text-[#0f5238]' : 'text-[#bfc9c1]'
                  }`}
                >
                  {habit.completed
                    ? 'check_circle'
                    : habit.subtitle?.includes('PM') || habit.subtitle?.includes('AM')
                    ? 'schedule'
                    : 'radio_button_unchecked'}
                </span>

                {isEditing && (
                  <button
                    onClick={() => onDeleteHabit(habit.id)}
                    className="w-7 h-7 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center hover:opacity-90 ml-1"
                    title="Delete habit"
                  >
                    <span className="material-symbols-outlined text-[15px]">delete</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
