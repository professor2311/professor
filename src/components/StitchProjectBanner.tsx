import React from 'react';
import { ExternalLink, Copy, Check, Info, ArrowRight } from 'lucide-react';

interface StitchProjectBannerProps {
  projectId: string;
  onOpenImporter: () => void;
}

export const StitchProjectBanner: React.FC<StitchProjectBannerProps> = ({
  projectId,
  onOpenImporter,
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);
  const stitchUrl = `https://stitch.withgoogle.com/projects/${projectId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(stitchUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-950/40 via-neutral-900 to-indigo-950/40 border-b border-neutral-800/80 px-4 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-start sm:items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-200">Google Stitch Project Target:</span>
              <code className="px-2 py-0.5 rounded bg-neutral-950 text-cyan-300 font-mono text-[11px] border border-neutral-800">
                {projectId}
              </code>
              <button
                onClick={handleCopy}
                className="text-neutral-400 hover:text-white transition flex items-center space-x-1"
                title="Copy Stitch Project URL"
              >
                {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="text-[11px]">{copiedLink ? 'Copied' : 'Copy Link'}</span>
              </button>
            </div>
            <p className="text-neutral-400 mt-0.5">
              Stitch requires your active Google account credentials to export. Click <span className="text-neutral-200 font-medium">Export → Copy Code</span> in Stitch to render your custom screens directly here, or explore the pre-loaded prototypes below.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
          <a
            href={stitchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition font-medium text-xs border border-neutral-700/60"
          >
            <span>Open in Stitch</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onOpenImporter}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition font-medium text-xs shadow-sm"
          >
            <span>Paste Exported Code</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
