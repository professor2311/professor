import React, { useRef, useEffect } from 'react';
import { ViewportMode, StitchPrototype } from '../types';
import { SAMPLE_PROTOTYPES } from '../data/samplePrototypes';
import { RefreshCw, Smartphone, Tablet, Monitor, Sparkles, ExternalLink, Code } from 'lucide-react';

interface PrototypeViewerProps {
  activeCode: string;
  viewport: ViewportMode;
  setViewport: (vp: ViewportMode) => void;
  activePrototypeId: string;
  onSelectPrototype: (id: string) => void;
  onOpenCodeImporter: () => void;
}

export const PrototypeViewer: React.FC<PrototypeViewerProps> = ({
  activeCode,
  viewport,
  setViewport,
  activePrototypeId,
  onSelectPrototype,
  onOpenCodeImporter,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updateIframeContent = () => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
    if (!doc) return;

    // Build the complete document with Tailwind and Inter/Google Sans fonts
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #0a0a0a;
      color: #f5f5f5;
    }
  </style>
</head>
<body>
  ${activeCode || '<div class="p-12 text-center text-neutral-400">No code provided. Paste code in the Importer tab.</div>'}
</body>
</html>`;

    doc.open();
    doc.write(fullHtml);
    doc.close();
  };

  useEffect(() => {
    updateIframeContent();
  }, [activeCode]);

  const activePrototype = SAMPLE_PROTOTYPES.find((p) => p.id === activePrototypeId);

  // Viewport width styling
  let containerStyle = 'w-full max-w-full';
  if (viewport === 'tablet') {
    containerStyle = 'w-[768px] max-w-full border-[12px] border-neutral-800 rounded-[32px] shadow-2xl overflow-hidden';
  } else if (viewport === 'mobile') {
    containerStyle = 'w-[375px] max-w-full border-[12px] border-neutral-800 rounded-[36px] shadow-2xl overflow-hidden';
  }

  return (
    <div className="flex flex-col h-[calc(100vh-130px)] bg-neutral-950">
      {/* Sub-bar with prototype chips & controls */}
      <div className="px-4 py-3 bg-neutral-900/80 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Prototype Archetypes */}
        <div className="flex items-center space-x-2 overflow-x-auto py-1">
          <span className="text-neutral-400 font-medium whitespace-nowrap">Stitch Archetypes:</span>
          {SAMPLE_PROTOTYPES.map((proto) => (
            <button
              key={proto.id}
              onClick={() => onSelectPrototype(proto.id)}
              className={`px-3 py-1.5 rounded-lg border transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePrototypeId === proto.id
                  ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 font-medium'
                  : 'bg-neutral-800/60 border-neutral-700/40 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <span>{proto.name}</span>
            </button>
          ))}
          <button
            onClick={onOpenCodeImporter}
            className={`px-3 py-1.5 rounded-lg border transition whitespace-nowrap flex items-center space-x-1.5 ${
              activePrototypeId === 'custom'
                ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 font-medium'
                : 'bg-neutral-800/60 border-neutral-700/40 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Custom Export</span>
          </button>
        </div>

        {/* Viewport & Refresh */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded ${viewport === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
              title="Desktop (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded ${viewport === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
              title="Tablet (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded ${viewport === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
              title="Mobile (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={updateIframeContent}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition"
            title="Reload Preview"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 overflow-auto bg-neutral-950 p-4 sm:p-6 flex items-center justify-center">
        <div className={`transition-all duration-300 h-full min-h-[600px] flex flex-col bg-neutral-900 ${containerStyle}`}>
          {/* Mock device status bar if mobile/tablet */}
          {viewport === 'mobile' && (
            <div className="bg-neutral-900 text-neutral-400 text-[10px] px-6 py-1.5 flex justify-between items-center select-none border-b border-neutral-800">
              <span>9:41</span>
              <div className="w-16 h-3 bg-neutral-800 rounded-full mx-auto"></div>
              <div className="flex items-center space-x-1 font-mono">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {viewport === 'tablet' && (
            <div className="bg-neutral-900 text-neutral-400 text-[10px] px-6 py-1 flex justify-center items-center select-none border-b border-neutral-800">
              <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            title="Stitch Design Sandbox"
            className="w-full flex-1 border-0 bg-neutral-950"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </div>
  );
};
