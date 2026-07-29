import React, { useState } from 'react';
import { BusinessPlanSection } from '../../types';
import { BookOpen, Search, Download, Copy, Check, FileText, Sparkles, Tag } from 'lucide-react';

interface BusinessPlanViewProps {
  sections: BusinessPlanSection[];
  lang: 'fa' | 'en';
  onExportMarkdown: () => void;
}

export const BusinessPlanView: React.FC<BusinessPlanViewProps> = ({
  sections,
  lang,
  onExportMarkdown
}) => {
  const isFa = lang === 'fa';
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const filteredSections = sections.filter(sec => {
    const term = searchTerm.toLowerCase();
    return (
      sec.titleEn.toLowerCase().includes(term) ||
      (sec.titleFa && sec.titleFa.toLowerCase().includes(term)) ||
      sec.contentMarkdown.toLowerCase().includes(term) ||
      (sec.contentMarkdownFa && sec.contentMarkdownFa.toLowerCase().includes(term)) ||
      sec.summary.toLowerCase().includes(term)
    );
  });

  const handleCopySection = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSectionId(id);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  const getTagBadgeStyle = (tag: BusinessPlanSection['evidenceTag']) => {
    switch (tag) {
      case 'FACT / VERIFIED':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'SUPPORTED':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'ESTIMATE':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'RECOMMENDATION':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      default:
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Controls */}
      <div className="bg-[#0D1117] border border-[#2D333B] rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D333B] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#D4AF37]">
                {isFa ? 'طرح کسب‌وکار صادرات خاک تنیس به اروپا (۲۴ بخش)' : 'European Clay Court Business Plan (24 Sections)'}
              </h2>
              <p className="text-xs text-[#8B949E]">
                {isFa ? 'طرح کامل عملیاتی با برچسب‌گذاری دقیق شواهد [FACT], [ESTIMATE], [SUPPORTED]' : 'Evidence-tagged, fully structured Business Plan for Mohammad\'s Iranian Clay Export'}
              </p>
            </div>
          </div>

          <button
            onClick={onExportMarkdown}
            className="px-4 py-2 bg-[#D4AF37] hover:bg-amber-400 text-[#0A0C10] font-bold rounded-xl text-xs flex items-center gap-2 transition shadow-md shadow-amber-950/30 self-start sm:self-center"
          >
            <Download className="w-4 h-4" />
            <span>{isFa ? 'دانلود کامل (Markdown .md)' : 'Export Full Plan (.md)'}</span>
          </button>
        </div>

        {/* Search & Filter */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#8B949E] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder={isFa ? 'جستجو در بخش‌های طرح کسب‌وکار...' : 'Search within Business Plan sections...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0A0C10] border border-[#30363D] rounded-xl pl-9 pr-3 py-2 text-xs text-[#E0E0E0] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {filteredSections.map((sec) => (
          <div id={`sec-${sec.id}`} key={sec.id} className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 space-y-4 shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-xl bg-[#0A0C10] text-[#D4AF37] border border-[#D4AF37]/30 font-bold font-mono text-xs">
                  {sec.titleNumber}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#E0E0E0]">
                    {sec.titleEn}
                  </h3>
                  {sec.titleFa && (
                    <span className="text-xs text-[#D4AF37]/90 font-medium block mt-0.5 dir-rtl">
                      {sec.titleFa}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono border ${getTagBadgeStyle(sec.evidenceTag)}`}>
                  [{sec.evidenceTag}]
                </span>

                <button
                  onClick={() => handleCopySection(sec.id, isFa && sec.contentMarkdownFa ? sec.contentMarkdownFa : sec.contentMarkdown)}
                  className="px-2.5 py-1 rounded-lg bg-[#0A0C10] hover:bg-[#1C2128] text-[#E0E0E0] text-[11px] font-mono flex items-center gap-1 border border-[#30363D] transition"
                >
                  {copiedSectionId === sec.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8B949E]" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Summary Excerpt */}
            <p className="text-xs text-[#D4AF37] font-medium bg-[#0A0C10] p-3 rounded-xl border border-[#D4AF37]/20">
              {sec.summary}
            </p>

            {/* Content Display */}
            <div className="bg-[#0A0C10] rounded-xl p-5 border border-[#30363D] text-xs text-[#E0E0E0] leading-relaxed space-y-3 font-mono whitespace-pre-wrap dir-auto">
              {isFa && sec.contentMarkdownFa ? sec.contentMarkdownFa : sec.contentMarkdown}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
