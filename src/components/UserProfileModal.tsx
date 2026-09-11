import React from 'react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStitch: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenStitch,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fbf8ff] rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#edecff] flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#181a2e]">Profile &amp; Security</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#707973] hover:text-[#181a2e] shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* User Card */}
        <div className="bg-white p-4 rounded-2xl border border-[#edecff] flex items-center gap-3.5 shadow-xs">
          <img
            alt="Elena"
            className="w-14 h-14 rounded-full object-cover border-2 border-[#b1f0ce]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZpbJCwJXQRFMN75i_V2OXh26eMgVNwFpKl9R7TiQ54k1Pw4in-esTr-1LNt-5o1Kjt4qYy27WRzS-QY009EJAaY_QNm_Mn7gGp4T9IHU_0Rkhfldamn7IcJ6X3vVk6uCFqlNG03Np-cq6NuZVhFJTOWMSYb1ySJhK7RGIBKxRFU1VEtJuurxE9nEsV9b--AbLg7B_181BBl9W9eQ8S37pXpPMFxHjsUF_BfvEaCJsQdVcV8iwg86PQ"
          />
          <div className="flex flex-col">
            <span className="text-[17px] font-bold text-[#181a2e]">Elena Vance</span>
            <span className="text-[12px] text-[#404943]">elena.vance@mindful.io</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-[#0f5238]">
              <span className="w-2 h-2 rounded-full bg-[#0f5238]"></span>
              <span>12-day streak active</span>
            </div>
          </div>
        </div>

        {/* On-device Security Status */}
        <div className="bg-[#e6e6ff]/60 p-4 rounded-2xl border border-[#d3e3ff] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#436086]">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
            <span className="text-[13px] font-bold">On-Device Privacy Engine</span>
          </div>
          <p className="text-[12px] text-[#404943] leading-relaxed">
            Your biometric telemetry, screen time, and mindful habits are processed purely on this
            device. No personal habit data is transferred to external servers.
          </p>
        </div>

        {/* Device Integrations */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold text-[#707973] uppercase tracking-wider">
            Connected Sensors
          </span>
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#edecff] text-[13px]">
            <div className="flex items-center gap-2 text-[#181a2e]">
              <span className="material-symbols-outlined text-[18px] text-[#0f5238]">watch</span>
              <span>Smart Fitness Watch</span>
            </div>
            <span className="text-[11px] font-bold text-[#0f5238]">Synced</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#edecff] text-[13px]">
            <div className="flex items-center gap-2 text-[#181a2e]">
              <span className="material-symbols-outlined text-[18px] text-[#436086]">smartphone</span>
              <span>Screen Time Digital Wellbeing</span>
            </div>
            <span className="text-[11px] font-bold text-[#0f5238]">Active</span>
          </div>
        </div>

        {/* Stitch Project Action */}
        <div className="pt-1 flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenStitch();
            }}
            className="w-full h-11 rounded-full bg-[#0f5238] text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#0e5138] transition"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>View Stitch Project #11981712750920454555</span>
          </button>
        </div>
      </div>
    </div>
  );
};
