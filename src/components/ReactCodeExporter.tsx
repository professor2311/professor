import React, { useState } from 'react';
import { Copy, Check, Download, Code2, Sparkles } from 'lucide-react';
import { SAMPLE_PROTOTYPES } from '../data/samplePrototypes';

interface ReactCodeExporterProps {
  activePrototypeId: string;
  customCode: string;
}

export const ReactCodeExporter: React.FC<ReactCodeExporterProps> = ({
  activePrototypeId,
  customCode,
}) => {
  const [copied, setCopied] = useState(false);

  // Generate clean React component code
  const activeProto = SAMPLE_PROTOTYPES.find((p) => p.id === activePrototypeId);
  const componentName = activeProto ? activeProto.name.replace(/[^a-zA-Z0-9]/g, '') : 'StitchCustomScreen';

  const rawHtml = activeProto ? activeProto.htmlCode : customCode || '<div>No code available</div>';

  // Convert HTML class to className and style attributes for React TSX snippet
  const jsxCode = `import React from 'react';

/**
 * Stitch UI Component: ${activeProto?.name || 'Custom Stitch Screen'}
 * Generated from Stitch Project #11981712750920454555
 */
export const ${componentName}: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 antialiased font-sans">
      ${rawHtml
        .replace(/class="/g, 'className="')
        .replace(/style="width: 80%"/g, "style={{ width: '80%' }}")
        .replace(/<!--[\s\S]*?-->/g, '')
        .trim()}
    </div>
  );
};

export default ${componentName};
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsxCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsxCode], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentName}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-neutral-800 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">React + Tailwind TSX Export</h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Production-ready React functional component with standard TSX props and Tailwind utility classes.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-xs font-medium transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .tsx</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy React Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Container */}
      <div className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="text-xs font-mono text-neutral-400 ml-2">{componentName}.tsx</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-400">TypeScript React</span>
        </div>

        <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto max-h-[500px] leading-relaxed select-all">
          {jsxCode}
        </pre>
      </div>
    </div>
  );
};
