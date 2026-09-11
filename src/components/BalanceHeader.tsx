import React from 'react';

interface BalanceHeaderProps {
  onOpenProfile: () => void;
  onOpenStitchInfo: () => void;
}

export const BalanceHeader: React.FC<BalanceHeaderProps> = ({
  onOpenProfile,
  onOpenStitchInfo,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fbf8ff]/90 backdrop-blur-xl border-b border-[#edecff]/60 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-md mx-auto h-16 px-5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <img
            alt="Balance Brand Logo"
            className="h-8 w-auto object-contain rounded-md"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XIooDqJQRJIGeZ0YlE8WLVBiwUiuqqUlETQdBy88FNew4pgjAWI-ZrCNqiH8bLaSrJpQWCu2D0t9X0FUlQgGZ9nZunECF6GE48RzCYgGbahrZBMDuqMX_FKJY6K0NS7g5jACXjtiqNdzF2nfNUEoFgvMvn7IZIDv7qPZlM9k9ri2WoiZm_q2X8zFSWUHxuX9EwxSa9N48VYeifKR7hbP7oTvvi7ILHSRUlZqOa3ssc6M8ROCG14Bxh2Lc"
            onError={(e) => {
              // Graceful fallback if external asset fails
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-[18px] font-bold text-[#0f5238] tracking-tight leading-none">Balance</span>
            <span className="text-[11px] font-semibold text-[#404943] tracking-wide mt-0.5">Today</span>
          </div>
        </div>

        {/* Actions & Profile */}
        <div className="flex items-center gap-2">
          {/* Stitch Project Badge */}
          <button
            onClick={onOpenStitchInfo}
            title="Stitch Project #11981712750920454555 Details & Code"
            className="flex items-center gap-1.5 bg-[#d3e3ff]/70 hover:bg-[#d3e3ff] text-[#001c39] px-2.5 py-1 rounded-full text-[11px] font-semibold transition shadow-xs"
          >
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span className="hidden sm:inline">Stitch</span>
          </button>

          {/* On-Device Security Pill */}
          <div className="flex items-center gap-1 bg-[#e6e6ff] text-[#436086] px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            <span className="material-symbols-outlined text-[15px]">verified_user</span>
            <span>On-Device</span>
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            aria-label="User Profile"
            className="w-9 h-9 rounded-full overflow-hidden border border-[#edecff] flex items-center justify-center active:scale-95 transition-transform shadow-xs hover:ring-2 hover:ring-[#0f5238]/20"
          >
            <img
              alt="Elena Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZpbJCwJXQRFMN75i_V2OXh26eMgVNwFpKl9R7TiQ54k1Pw4in-esTr-1LNt-5o1Kjt4qYy27WRzS-QY009EJAaY_QNm_Mn7gGp4T9IHU_0Rkhfldamn7IcJ6X3vVk6uCFqlNG03Np-cq6NuZVhFJTOWMSYb1ySJhK7RGIBKxRFU1VEtJuurxE9nEsV9b--AbLg7B_181BBl9W9eQ8S37pXpPMFxHjsUF_BfvEaCJsQdVcV8iwg86PQ"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
