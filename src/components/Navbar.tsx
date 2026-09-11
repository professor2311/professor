import React from 'react';
import { Layers, Monitor, Tablet, Smartphone, ExternalLink, Code2, Eye, Play, Sparkles } from 'lucide-react';
import { ViewportMode, ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  viewport: ViewportMode;
  setViewport: (vp: ViewportMode) => void;
  projectId: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  viewport,
  setViewport,
  projectId
}) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Project Reference */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-[1px] shadow-sm">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div className="truncate">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm tracking-tight text-white">Stitch Studio</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Connected
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-neutral-400">
              <span className="font-mono text-[11px] text-neutral-400">Project #{projectId.slice(0, 10)}...</span>
              <a
                href={`https://stitch.withgoogle.com/projects/${projectId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center hover:text-cyan-400 transition-colors ml-1"
                title="Open in Google Stitch"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="hidden md:flex items-center p-1 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'preview'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Design Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'interactive'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive App</span>
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'import'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Import / Paste</span>
          </button>
          <button
            onClick={() => setActiveTab('react-code')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'react-code'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Export Code</span>
          </button>
        </div>

        {/* Viewport Control & Stitch Link */}
        <div className="flex items-center space-x-2">
          {activeTab === 'preview' && (
            <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
              <button
                onClick={() => setViewport('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded ${
                  viewport === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewport('tablet')}
                title="Tablet View"
                className={`p-1.5 rounded ${
                  viewport === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                title="Mobile View"
                className={`p-1.5 rounded ${
                  viewport === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <a
            href={`https://stitch.withgoogle.com/projects/${projectId}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition"
          >
            <span>Open Stitch</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Mobile Submenu Tabs */}
      <div className="flex md:hidden px-4 pb-2.5 overflow-x-auto gap-2 text-xs font-medium border-t border-neutral-800/80 pt-2">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap ${
            activeTab === 'preview' ? 'bg-neutral-800 text-white' : 'text-neutral-400'
          }`}
        >
          Design Preview
        </button>
        <button
          onClick={() => setActiveTab('interactive')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap ${
            activeTab === 'interactive' ? 'bg-emerald-500/20 text-emerald-400' : 'text-neutral-400'
          }`}
        >
          Interactive App
        </button>
        <button
          onClick={() => setActiveTab('import')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap ${
            activeTab === 'import' ? 'bg-neutral-800 text-white' : 'text-neutral-400'
          }`}
        >
          Import / Paste
        </button>
        <button
          onClick={() => setActiveTab('react-code')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap ${
            activeTab === 'react-code' ? 'bg-neutral-800 text-white' : 'text-neutral-400'
          }`}
        >
          Export Code
        </button>
      </div>
    </header>
  );
};
