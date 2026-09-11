import React, { useState } from 'react';

interface StitchProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rawHtml: string;
}

export const StitchProjectDrawer: React.FC<StitchProjectDrawerProps> = ({
  isOpen,
  onClose,
  rawHtml,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'tsx' | 'raw'>('info');

  if (!isOpen) return null;

  const reactTsxCode = `import React from 'react';
import App from './App';

/**
 * Balance - Mindful Rhythm & Health
 * Converted from Google Stitch Project: #11981712750920454555
 * Platform: Google Stitch (Labs)
 */
export default function BalanceApp() {
  return <App />;
}
`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fbf8ff] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#edecff] flex flex-col gap-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#edecff] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0f5238] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-[#181a2e]">Stitch Project Integration</h3>
              <p className="text-[11px] text-[#707973]">Project ID: 11981712750920454555</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#707973] hover:text-[#181a2e] shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex rounded-xl bg-[#edecff] p-1 text-[12px] font-bold text-[#404943]">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-1.5 rounded-lg transition ${
              activeTab === 'info' ? 'bg-white text-[#0f5238] shadow-xs' : 'hover:text-[#181a2e]'
            }`}
          >
            Project Summary
          </button>
          <button
            onClick={() => setActiveTab('tsx')}
            className={`flex-1 py-1.5 rounded-lg transition ${
              activeTab === 'tsx' ? 'bg-white text-[#0f5238] shadow-xs' : 'hover:text-[#181a2e]'
            }`}
          >
            React TSX
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            className={`flex-1 py-1.5 rounded-lg transition ${
              activeTab === 'raw' ? 'bg-white text-[#0f5238] shadow-xs' : 'hover:text-[#181a2e]'
            }`}
          >
            Raw Stitch HTML
          </button>
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'info' && (
            <div className="flex flex-col gap-3 text-[13px] text-[#404943]">
              <div className="p-4 rounded-2xl bg-white border border-[#edecff] flex flex-col gap-2">
                <span className="text-[11px] font-bold text-[#0f5238] uppercase tracking-wider">
                  Connected Source
                </span>
                <p className="text-[14px] font-semibold text-[#181a2e]">
                  Google Stitch Design: Balance Health &amp; Digital Rhythm
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <a
                    href="https://stitch.withgoogle.com/projects/11981712750920454555"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#0f5238] bg-[#b1f0ce]/50 hover:bg-[#b1f0ce] px-3 py-1.5 rounded-full transition"
                  >
                    <span>Open in Stitch</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#e6e6ff]/40 border border-[#d3e3ff] flex flex-col gap-1.5">
                <span className="text-[12px] font-bold text-[#181a2e]">
                  Active Design Conversion:
                </span>
                <p className="text-[12px] leading-relaxed">
                  The raw HTML and Tailwind markup exported from Google Stitch has been converted into
                  a reactive TypeScript + React application with live habit toggling, audio/countdown
                  timers, workout logging, and on-device insights.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tsx' && (
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-[#181a2e] text-[#b1f0ce] text-[11px] font-mono overflow-x-auto max-h-64 select-all">
                {reactTsxCode}
              </pre>
              <button
                onClick={() => handleCopy(reactTsxCode)}
                className="mt-2 w-full h-10 rounded-full bg-[#0f5238] text-white text-[12px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#0e5138] transition shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copied ? 'Copied to Clipboard!' : 'Copy React Component Code'}</span>
              </button>
            </div>
          )}

          {activeTab === 'raw' && (
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-[#181a2e] text-[#d3e3ff] text-[11px] font-mono overflow-x-auto max-h-64 select-all">
                {rawHtml.slice(0, 1500)}
                {rawHtml.length > 1500 ? '\n\n...[Full Stitch Code in Workspace]...' : ''}
              </pre>
              <button
                onClick={() => handleCopy(rawHtml)}
                className="mt-2 w-full h-10 rounded-full bg-[#0f5238] text-white text-[12px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#0e5138] transition shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copied ? 'Copied HTML!' : 'Copy Full Stitch HTML'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
