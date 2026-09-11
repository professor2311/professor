import React, { useState } from 'react';
import { Code, Play, RotateCcw, Check, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { SAMPLE_PROTOTYPES } from '../data/samplePrototypes';

interface CodeImporterProps {
  customCode: string;
  onSaveCode: (code: string) => void;
  onSelectSample: (prototypeId: string) => void;
  activePrototypeId: string;
}

export const CodeImporter: React.FC<CodeImporterProps> = ({
  customCode,
  onSaveCode,
  onSelectSample,
  activePrototypeId,
}) => {
  const [code, setCode] = useState(customCode);
  const [isSaved, setIsSaved] = useState(false);
  const [promptInput, setPromptInput] = useState('');

  const handleApply = () => {
    onSaveCode(code);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleClear = () => {
    setCode('');
    onSaveCode('');
  };

  const handlePromptGenerate = () => {
    if (!promptInput.trim()) return;
    // Generate a clean Stitch-style UI structure from the prompt description
    const cleanTitle = promptInput.trim().slice(0, 40);
    const generatedHtml = `<!-- Stitch UI Generated for: "${cleanTitle}" -->
<div class="bg-neutral-950 text-neutral-100 min-h-screen p-6 font-sans">
  <header class="flex items-center justify-between pb-6 border-b border-neutral-800">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30">
        ⚡
      </div>
      <div>
        <h1 class="text-xl font-bold tracking-tight">${cleanTitle}</h1>
        <p class="text-xs text-neutral-400">Created with Stitch AI Design System</p>
      </div>
    </div>
    <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
      + New Action
    </button>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
    <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Primary Metric</p>
      <div class="mt-2 text-3xl font-bold text-white">98.4%</div>
      <p class="text-xs text-emerald-400 mt-2">↑ 3.2% compared to last cycle</p>
    </div>
    <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Throughput</p>
      <div class="mt-2 text-3xl font-bold text-white">1,420 req/s</div>
      <p class="text-xs text-neutral-400 mt-2">System operating within target SLA</p>
    </div>
    <div class="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">Active State</p>
      <div class="mt-2 text-3xl font-bold text-blue-400">Optimal</div>
      <p class="text-xs text-neutral-400 mt-2">All background workers synchronized</p>
    </div>
  </div>

  <div class="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
    <h2 class="text-base font-semibold mb-3">Live Feed & Activities</h2>
    <div class="space-y-3">
      <div class="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
        <div>
          <p class="text-sm font-medium text-neutral-200">System Workflow Initialized</p>
          <p class="text-xs text-neutral-500">Auto-configured from "${cleanTitle}"</p>
        </div>
        <span class="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">Active</span>
      </div>
    </div>
  </div>
</div>`;

    setCode(generatedHtml);
    onSaveCode(generatedHtml);
    setPromptInput('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span>Stitch Code Importer & Transformer</span>
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Paste the HTML, CSS, or Tailwind markup from Google Stitch to immediately test, preview, and build upon it.
          </p>
        </div>

        {/* Quick Sample Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium mr-1">Load Stitch Archetypes:</span>
          {SAMPLE_PROTOTYPES.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                onSelectSample(p.id);
                setCode(p.htmlCode);
              }}
              className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                activePrototypeId === p.id
                  ? 'bg-blue-600/20 border-blue-500/50 text-blue-300 font-semibold'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
              }`}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Section: Prompt Generator & Paste Code */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Quick prompt generator & guidelines */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
            <div className="flex items-center space-x-2 text-sm font-semibold text-neutral-200 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Or Describe Your Stitch Project</span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">
              If you have not copied the code from Stitch yet, type the prompt or screen description to generate the UI scaffold instantly:
            </p>
            <div className="space-y-3">
              <textarea
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="e.g. AI Content Writer dashboard with credit meter, prompt template cards, and tone selector..."
                rows={3}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
              <button
                onClick={handlePromptGenerate}
                disabled={!promptInput.trim()}
                className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow-sm"
              >
                <span>Scaffold Stitch Screen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-400 space-y-3">
            <div className="flex items-center space-x-2 font-medium text-neutral-300">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>How to Export From Stitch</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1.5 text-neutral-400 leading-relaxed">
              <li>Open your project at <a href="https://stitch.withgoogle.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">stitch.withgoogle.com</a>.</li>
              <li>Select your desired screen on the canvas.</li>
              <li>Click the <span className="text-neutral-200 font-medium">Export</span> icon in the top navigation bar.</li>
              <li>Select <span className="text-neutral-200 font-medium">Copy HTML/CSS</span>.</li>
              <li>Paste the code into the editor on the right and click <span className="text-neutral-200 font-medium">Apply Code</span>.</li>
            </ol>
          </div>
        </div>

        {/* Right Column: Code Editor */}
        <div className="lg:col-span-2 flex flex-col rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl">
          {/* Editor Action Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs font-mono text-neutral-400 ml-2">stitch-design.html</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleClear}
                className="text-xs px-2.5 py-1 rounded text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition"
              >
                Clear
              </button>
              <button
                onClick={handleApply}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition"
              >
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Applied!</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Apply Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Textarea for code */}
          <div className="relative flex-1 min-h-[420px]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste exported HTML & Tailwind CSS from Google Stitch here..."
              className="w-full h-full p-4 bg-neutral-950 text-neutral-200 font-mono text-xs leading-relaxed focus:outline-none resize-y min-h-[420px]"
              spellCheck={false}
            />
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/60 border-t border-neutral-800 text-[11px] text-neutral-500">
            <span>{code.split('\n').length} lines · {code.length} characters</span>
            <span className="text-neutral-400">Tailwind CSS v4 supported</span>
          </div>
        </div>
      </div>
    </div>
  );
};
