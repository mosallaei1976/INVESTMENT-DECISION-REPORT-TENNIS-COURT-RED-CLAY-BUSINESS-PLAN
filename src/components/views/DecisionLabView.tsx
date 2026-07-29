import React, { useState } from 'react';
import {
  FlaskConical,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  DollarSign,
  Award,
  TrendingUp,
  Search,
  Filter,
  Columns,
  Grid,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Sparkles,
  ArrowRightLeft,
  FileText,
  Quote,
  ExternalLink,
  Layers,
  Database
} from 'lucide-react';
import { DecisionLabOption, Claim, EvidenceStatus } from '../../types';

interface DecisionLabViewProps {
  options: DecisionLabOption[];
  claims?: Claim[];
  lang: 'fa' | 'en';
}

export const DecisionLabView: React.FC<DecisionLabViewProps> = ({
  options,
  claims = [],
  lang
}) => {
  const isFa = lang === 'fa';

  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');
  const [expandedOptionId, setExpandedOptionId] = useState<string | null>(null);

  // Selection for side-by-side comparison mode
  const [compareIdA, setCompareIdA] = useState<string>(options[0]?.id || '');
  const [compareIdB, setCompareIdB] = useState<string>(options[1]?.id || '');

  const groups = [
    { id: 'ALL', nameFa: 'همه تصمیمات استراتژیک', nameEn: 'All Strategic Decisions' },
    { id: 'PROCESSING_LOCATION', nameFa: '۱. فرآوری در ایران یا اروپا؟', nameEn: '1. Processing: Iran vs Europe' },
    { id: 'JURISDICTION_HQ', nameFa: '۲. کدام کشور شرکت بزنم؟', nameEn: '2. Jurisdiction: NL / BE / DE / UAE' },
    { id: 'LOGISTICS_FORMAT', nameFa: '۳. ارسال فله یا کیسه‌ای؟', nameEn: '3. Logistics: Bulk vs Finished Bag' },
    { id: 'GO_TO_MARKET', nameFa: '۴. Distributor یا دفتر مستقیم؟', nameEn: '4. GTM: Distributor vs Direct Sales' }
  ];

  const filteredOptions = options.filter((opt) => {
    const matchesGroup = selectedGroup === 'ALL' || opt.questionGroup === selectedGroup;
    const titleText = `${opt.title} ${opt.titleFa} ${opt.subtitle} ${opt.subtitleFa}`.toLowerCase();
    const matchesSearch = titleText.includes(searchTerm.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  const optionA = options.find((o) => o.id === compareIdA) || options[0];
  const optionB = options.find((o) => o.id === compareIdB) || options[1];

  const toggleExpand = (id: string) => {
    setExpandedOptionId(expandedOptionId === id ? null : id);
  };

  const getEvidenceStatusBadgeClass = (status: EvidenceStatus) => {
    switch (status) {
      case 'VERIFIED':
        return 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30';
      case 'SUPPORTED':
        return 'bg-blue-500/15 text-blue-400 border border-blue-500/30';
      case 'UNVERIFIED_CONSENSUS':
        return 'bg-amber-500/15 text-[#D4AF37] border border-amber-500/30';
      case 'SINGLE_SOURCE':
        return 'bg-purple-500/15 text-purple-400 border border-purple-500/30';
      case 'CONFLICTED':
        return 'bg-rose-500/15 text-rose-400 border border-rose-500/30';
      case 'REJECTED':
        return 'bg-red-900/30 text-red-400 border border-red-500/30';
      default:
        return 'bg-gray-800 text-gray-300 border border-gray-700';
    }
  };

  const getEvidenceStatusText = (status: EvidenceStatus) => {
    switch (status) {
      case 'VERIFIED':
        return isFa ? 'تأییدشده قطعی' : 'Verified Fact';
      case 'SUPPORTED':
        return isFa ? 'پشتیبانی‌شده با سند' : 'Strongly Supported';
      case 'UNVERIFIED_CONSENSUS':
        return isFa ? 'اجماع غیرمرجع هوش مصنوعی' : 'Unverified AI Consensus';
      case 'SINGLE_SOURCE':
        return isFa ? 'تک‌منبعی' : 'Single Source';
      case 'CONFLICTED':
        return isFa ? 'دارای تناقض' : 'Conflicted';
      case 'REJECTED':
        return isFa ? 'ردشده' : 'Rejected';
      default:
        return isFa ? 'در انتظار بررسی' : 'Pending Verification';
    }
  };

  const getMatchedClaimsForOption = (opt: DecisionLabOption): Claim[] => {
    if (!claims || claims.length === 0) return [];

    return claims.filter((c) => {
      // 1. Explicit linkedClaimIds
      if (opt.linkedClaimIds && opt.linkedClaimIds.includes(c.id)) return true;

      // 2. Mentioned in verifiedClaims or unverifiedClaims string
      const inVerified = opt.verifiedClaims.some((vc) => vc.includes(c.id));
      const inUnverified = opt.unverifiedClaims.some((uc) => uc.includes(c.id));
      if (inVerified || inUnverified) return true;

      // 3. Fallback matching by category relevance
      if (
        opt.questionGroup === 'PROCESSING_LOCATION' &&
        ['Processing Options', 'Product & Technical', 'Raw Materials', 'Unit Economics'].includes(c.category)
      ) {
        return true;
      }
      if (
        opt.questionGroup === 'JURISDICTION_HQ' &&
        ['Sanctions & Banking', 'Customs & VAT', 'Grants & Incentives'].includes(c.category)
      ) {
        return true;
      }
      if (
        opt.questionGroup === 'LOGISTICS_FORMAT' &&
        ['Logistics & Freight', 'Packaging', 'Customs & VAT'].includes(c.category)
      ) {
        return true;
      }
      if (
        opt.questionGroup === 'GO_TO_MARKET' &&
        ['Go-to-Market', 'Competitors & Price', 'Target Markets', 'Unit Economics'].includes(c.category)
      ) {
        return true;
      }

      return false;
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-[#0D1117] border border-[#2D333B] rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#161B22] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" />
                {isFa ? 'آزمایشگاه تصمیم‌گیری و سناریوهای استراتژیک' : 'Strategic Decision Lab & Trade-Off Engine'}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#D4AF37] tracking-tight">
              {isFa ? 'ارزیابی دقیق گزینه‌های کلیدی کسب‌وکار' : 'Analytical Evaluation of Strategic Choices'}
            </h2>

            <p className="text-sm text-[#E0E0E0] leading-relaxed dir-auto">
              {isFa
                ? 'تحلیل کامل هر تصمیم کلیدی (فرآوری در ایران vs اروپا، ثبت شرکت هلند vs بلژیک vs آلمان vs امارات، صادرات فله vs کیسه‌ای و Distributor vs دفتر مستقیم) شامل مزایا، معایب، شواهد موافق و مخالف، ادعاهای تایید شده، ریسک‌ها و هزینه‌ها.'
                : 'Deep analytical trade-off comparison for key strategic dilemmas: Processing location, jurisdiction, shipping format, and go-to-market channels.'}
            </p>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-2 self-start lg:self-center bg-[#161B22] p-1.5 rounded-xl border border-[#30363D]">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                viewMode === 'cards'
                  ? 'bg-[#D4AF37] text-[#0A0C10] font-bold shadow'
                  : 'text-[#8B949E] hover:text-[#E0E0E0]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>{isFa ? 'کارت‌های تصمیم' : 'Decision Cards'}</span>
            </button>

            <button
              onClick={() => setViewMode('compare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                viewMode === 'compare'
                  ? 'bg-[#D4AF37] text-[#0A0C10] font-bold shadow'
                  : 'text-[#8B949E] hover:text-[#E0E0E0]'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>{isFa ? 'مقایسه پایاپای' : 'Side-by-Side'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
        
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-[#D4AF37] shrink-0 ml-1" />
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGroup(g.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                selectedGroup === g.id
                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] font-bold'
                  : 'bg-[#0A0C10] border-[#30363D] text-[#8B949E] hover:text-[#E0E0E0] hover:border-[#8B949E]'
              }`}
            >
              {isFa ? g.nameFa : g.nameEn}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-[#8B949E] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder={isFa ? 'جستجو در گزینه‌های تصمیم...' : 'Search decision options...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0A0C10] border border-[#30363D] rounded-xl pl-9 pr-3 py-2 text-xs text-[#E0E0E0] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* VIEW MODE 1: DECISION CARDS */}
      {viewMode === 'cards' && (
        <div className="space-y-6">
          {filteredOptions.map((opt) => {
            const isExpanded = expandedOptionId === opt.id;
            const matchedClaims = getMatchedClaimsForOption(opt);

            return (
              <div
                key={opt.id}
                className={`bg-[#161B22] border rounded-2xl p-6 transition shadow-xl space-y-6 ${
                  opt.isRecommended
                    ? 'border-[#D4AF37]/60 ring-1 ring-[#D4AF37]/20 shadow-[#D4AF37]/5'
                    : 'border-[#30363D]'
                }`}
              >
                {/* Top Title & Metrics Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#30363D] pb-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0A0C10] text-[#D4AF37] border border-[#D4AF37]/30">
                        {isFa ? opt.questionGroupFa : opt.questionGroupEn}
                      </span>
                      {opt.isRecommended && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {isFa ? 'گزینه پیشنهادی و منتخب' : 'Recommended Option'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-extrabold text-[#E0E0E0]">
                      {isFa ? opt.titleFa : opt.title}
                    </h3>
                    <p className="text-xs text-[#8B949E] dir-auto">
                      {isFa ? opt.subtitleFa : opt.subtitle}
                    </p>
                  </div>

                  {/* Metrics Badge */}
                  <div className="flex items-center gap-4 shrink-0 bg-[#0A0C10] p-3 rounded-xl border border-[#30363D]">
                    <div className="text-center px-2">
                      <span className="text-[10px] text-[#8B949E] block mb-0.5">{isFa ? 'امتیاز نهایی' : 'Final Score'}</span>
                      <span className="text-2xl font-black text-[#D4AF37] font-mono">{opt.finalScore} / 100</span>
                    </div>

                    <div className="h-8 w-px bg-[#30363D]" />

                    <div className="text-center px-2">
                      <span className="text-[10px] text-[#8B949E] block mb-0.5">{isFa ? 'سطح اطمینان' : 'Confidence'}</span>
                      <span className="text-xl font-bold text-emerald-400 font-mono">{opt.confidenceLevel}%</span>
                    </div>
                  </div>
                </div>

                {/* Cost & Summary Highlight */}
                <div className="bg-[#0A0C10] p-4 rounded-xl border border-[#30363D] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs">
                    <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[#8B949E] font-medium">{isFa ? 'برآورد هزینه تقریبی:' : 'Approximate Cost:'}</span>
                    <span className="text-[#E0E0E0] font-bold font-mono">{isFa ? opt.approximateCostsFa : opt.approximateCosts}</span>
                  </div>

                  <button
                    onClick={() => toggleExpand(opt.id)}
                    className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{isExpanded ? (isFa ? 'بستن جزئیات' : 'Hide Details') : (isFa ? 'مشاهده جزئیات کامل' : 'Show All Details')}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Core Columns: Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pros */}
                  <div className="bg-[#0A0C10] border border-emerald-500/20 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-bold text-emerald-400">
                        {isFa ? 'مزایای اصلی (Pros)' : 'Key Advantages'}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {(isFa ? opt.prosFa : opt.pros).map((pro, idx) => (
                        <li key={idx} className="text-xs text-[#E0E0E0] flex items-start gap-2 leading-relaxed dir-auto">
                          <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="bg-[#0A0C10] border border-rose-500/20 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 border-b border-rose-500/20 pb-2">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <h4 className="text-xs font-bold text-rose-400">
                        {isFa ? 'معایب و چالش‌ها (Cons)' : 'Key Disadvantages'}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {(isFa ? opt.consFa : opt.cons).map((con, idx) => (
                        <li key={idx} className="text-xs text-[#E0E0E0] flex items-start gap-2 leading-relaxed dir-auto">
                          <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Linked Evidence Snippets Section */}
                <div className="bg-[#0D1117] border border-[#D4AF37]/30 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#30363D] pb-2">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#D4AF37]" />
                      <h4 className="text-xs font-bold text-[#D4AF37]">
                        {isFa ? 'شواهد مستخرج از دفترچه ادعاها (Claim Ledger Verification Snippets)' : 'Linked Evidence Snippets from Claim Ledger'}
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#161B22] text-[#D4AF37] border border-[#D4AF37]/30">
                      {matchedClaims.length} {isFa ? 'ادعای پیوست‌شده' : 'linked claims'}
                    </span>
                  </div>

                  {matchedClaims.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {matchedClaims.map((claim) => (
                        <div
                          key={claim.id}
                          className="bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl p-3 text-xs space-y-2 transition shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-[#0A0C10] text-[#D4AF37] border border-[#D4AF37]/30">
                                {claim.id}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getEvidenceStatusBadgeClass(claim.evidenceStatus)}`}>
                                {getEvidenceStatusText(claim.evidenceStatus)}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>{claim.confidenceScore}%</span>
                            </div>
                          </div>

                          <p className="font-semibold text-[#E0E0E0] leading-relaxed dir-auto">
                            {isFa ? (claim.canonicalClaimFa || claim.canonicalClaim) : claim.canonicalClaim}
                          </p>

                          {claim.evidenceExcerpt && (
                            <div className="bg-[#0A0C10] p-2.5 rounded-lg border border-[#30363D] text-[11px] text-[#8B949E] italic dir-auto flex items-start gap-1.5">
                              <Quote className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span className="line-clamp-3 font-normal">"{claim.evidenceExcerpt}"</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between text-[10px] text-[#8B949E] pt-1 border-t border-[#30363D]/60 flex-wrap gap-1">
                            <div className="flex items-center gap-1.5 overflow-hidden">
                              <span className="truncate">{isFa ? 'منبع:' : 'Source:'} <strong className="text-[#E0E0E0]">{claim.sourceTitle}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="px-1.5 py-0.5 rounded bg-[#0A0C10] text-[9px] font-bold text-[#D4AF37] border border-[#30363D]">
                                {claim.modelName}
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-[#0A0C10] text-[9px] font-bold text-[#8B949E] border border-[#30363D]">
                                Tier {claim.sourceTier}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-3 text-xs text-[#8B949E]">
                      {isFa ? 'هیچ ادعایی مستقیماً برای این گزینه پیوست نشده است.' : 'No direct claim snippets linked to this option.'}
                    </div>
                  )}
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="space-y-6 pt-4 border-t border-[#30363D] animate-fadeIn">
                    
                    {/* Evidence: Supporting vs Opposing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Supporting Evidence */}
                      <div className="bg-[#0A0C10] border border-blue-500/20 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 border-b border-blue-500/20 pb-2">
                          <ShieldCheck className="w-4 h-4 text-blue-400" />
                          <h4 className="text-xs font-bold text-blue-400">
                            {isFa ? 'شواهد موافق (Supporting Evidence)' : 'Supporting Evidence'}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {(isFa ? opt.supportingEvidenceFa : opt.supportingEvidence).map((ev, idx) => (
                            <li key={idx} className="text-xs text-[#E0E0E0] flex items-start gap-2 leading-relaxed dir-auto">
                              <span className="text-blue-400 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Opposing Evidence */}
                      <div className="bg-[#0A0C10] border border-amber-500/20 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 border-b border-amber-500/20 pb-2">
                          <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                          <h4 className="text-xs font-bold text-[#D4AF37]">
                            {isFa ? 'شواهد مخالف و نقدها (Opposing Evidence)' : 'Opposing Evidence'}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {(isFa ? opt.opposingEvidenceFa : opt.opposingEvidence).map((ev, idx) => (
                            <li key={idx} className="text-xs text-[#E0E0E0] flex items-start gap-2 leading-relaxed dir-auto">
                              <span className="text-[#D4AF37] font-bold shrink-0 mt-0.5">⚠</span>
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Claims: Verified vs Needing Verification */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Verified Claims */}
                      <div className="bg-[#0A0C10] border border-[#30363D] rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 border-b border-[#30363D] pb-2">
                          <Award className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-xs font-bold text-emerald-400">
                            {isFa ? 'ادعاهای تأییدشده (Verified Claims)' : 'Verified Claims'}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {(isFa ? opt.verifiedClaimsFa : opt.verifiedClaims).map((cl, idx) => (
                            <li key={idx} className="text-xs text-[#E0E0E0] bg-[#161B22] p-2 rounded-lg border border-[#30363D] leading-relaxed dir-auto">
                              {cl}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Claims Needing Verification */}
                      <div className="bg-[#0A0C10] border border-[#30363D] rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 border-b border-[#30363D] pb-2">
                          <HelpCircle className="w-4 h-4 text-purple-400" />
                          <h4 className="text-xs font-bold text-purple-400">
                            {isFa ? 'ادعاهای نیازمند راستی‌آزمایی (Unverified Claims)' : 'Claims Needing Verification'}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {(isFa ? opt.unverifiedClaimsFa : opt.unverifiedClaims).map((cl, idx) => (
                            <li key={idx} className="text-xs text-[#E0E0E0] bg-[#161B22] p-2 rounded-lg border border-[#30363D] leading-relaxed dir-auto">
                              {cl}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Risks Section */}
                    <div className="bg-[#0A0C10] border border-rose-500/20 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2 border-b border-rose-500/20 pb-2">
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                        <h4 className="text-xs font-bold text-rose-400">
                          {isFa ? 'ارزیابی ریسک‌های کلیدی (Key Risks)' : 'Key Risk Factors'}
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(isFa ? opt.risksFa : opt.risks).map((r, idx) => (
                          <div key={idx} className="bg-[#161B22] p-2.5 rounded-lg border border-rose-500/20 text-xs text-[#E0E0E0] flex items-center gap-2 dir-auto">
                            <span className="text-rose-400 font-bold shrink-0">⚠</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: SIDE-BY-SIDE COMPARISON */}
      {viewMode === 'compare' && (
        <div className="space-y-6">
          
          {/* Option Selectors */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Option A Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4AF37] block">
                {isFa ? 'گزینه اول (Option A):' : 'Select Option A:'}
              </label>
              <select
                value={compareIdA}
                onChange={(e) => setCompareIdA(e.target.value)}
                className="w-full bg-[#0A0C10] border border-[#30363D] rounded-xl px-3 py-2 text-xs text-[#E0E0E0] focus:outline-none focus:border-[#D4AF37]"
              >
                {options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {isFa ? opt.titleFa : opt.title} ({opt.finalScore}/100)
                  </option>
                ))}
              </select>
            </div>

            {/* Option B Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-emerald-400 block">
                {isFa ? 'گزینه دوم (Option B):' : 'Select Option B:'}
              </label>
              <select
                value={compareIdB}
                onChange={(e) => setCompareIdB(e.target.value)}
                className="w-full bg-[#0A0C10] border border-[#30363D] rounded-xl px-3 py-2 text-xs text-[#E0E0E0] focus:outline-none focus:border-[#D4AF37]"
              >
                {options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {isFa ? opt.titleFa : opt.title} ({opt.finalScore}/100)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Option A Column */}
            {optionA && (
              <div className="bg-[#161B22] border border-[#D4AF37]/40 rounded-2xl p-6 space-y-6 shadow-xl">
                <div className="border-b border-[#30363D] pb-4 space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0A0C10] text-[#D4AF37] border border-[#D4AF37]/30">
                    {isFa ? optionA.questionGroupFa : optionA.questionGroupEn}
                  </span>
                  <h3 className="text-lg font-bold text-[#D4AF37]">
                    {isFa ? optionA.titleFa : optionA.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono pt-1">
                    <div>
                      <span className="text-[#8B949E] block">{isFa ? 'امتیاز نهایی:' : 'Score:'}</span>
                      <span className="text-xl font-black text-[#D4AF37]">{optionA.finalScore} / 100</span>
                    </div>
                    <div>
                      <span className="text-[#8B949E] block">{isFa ? 'اطمینان:' : 'Confidence:'}</span>
                      <span className="text-xl font-bold text-emerald-400">{optionA.confidenceLevel}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[#8B949E] font-bold block mb-1">{isFa ? 'هزینه تقریبی:' : 'Approx Cost:'}</span>
                    <span className="text-[#E0E0E0] font-mono font-bold bg-[#0A0C10] p-2 rounded-lg border border-[#30363D] block">
                      {isFa ? optionA.approximateCostsFa : optionA.approximateCosts}
                    </span>
                  </div>

                  <div>
                    <span className="text-emerald-400 font-bold block mb-1">{isFa ? 'مزایا:' : 'Pros:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionA.prosFa : optionA.pros).map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-rose-400 font-bold block mb-1">{isFa ? 'معایب:' : 'Cons:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionA.consFa : optionA.cons).map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-blue-400 font-bold block mb-1">{isFa ? 'شواهد موافق:' : 'Supporting Evidence:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionA.supportingEvidenceFa : optionA.supportingEvidence).map((se, i) => (
                        <li key={i}>{se}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#D4AF37] font-bold block mb-1">{isFa ? 'شواهد مخالف:' : 'Opposing Evidence:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionA.opposingEvidenceFa : optionA.opposingEvidence).map((oe, i) => (
                        <li key={i}>{oe}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Option A Claim Snippets */}
                  <div className="pt-2 border-t border-[#30363D] space-y-2">
                    <span className="text-[#D4AF37] font-bold block">{isFa ? 'ادعاهای پیوست‌شده از دفترچه:' : 'Linked Claim Snippets:'}</span>
                    <div className="space-y-2">
                      {getMatchedClaimsForOption(optionA).slice(0, 3).map((cl) => (
                        <div key={cl.id} className="bg-[#0A0C10] p-2 rounded-lg border border-[#30363D] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] text-[#D4AF37]">{cl.id}</span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${getEvidenceStatusBadgeClass(cl.evidenceStatus)}`}>
                              {getEvidenceStatusText(cl.evidenceStatus)}
                            </span>
                          </div>
                          <p className="text-[11px] font-medium text-[#E0E0E0] dir-auto">{isFa ? (cl.canonicalClaimFa || cl.canonicalClaim) : cl.canonicalClaim}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Option B Column */}
            {optionB && (
              <div className="bg-[#161B22] border border-emerald-500/40 rounded-2xl p-6 space-y-6 shadow-xl">
                <div className="border-b border-[#30363D] pb-4 space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0A0C10] text-emerald-400 border border-emerald-500/30">
                    {isFa ? optionB.questionGroupFa : optionB.questionGroupEn}
                  </span>
                  <h3 className="text-lg font-bold text-emerald-400">
                    {isFa ? optionB.titleFa : optionB.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono pt-1">
                    <div>
                      <span className="text-[#8B949E] block">{isFa ? 'امتیاز نهایی:' : 'Score:'}</span>
                      <span className="text-xl font-black text-emerald-400">{optionB.finalScore} / 100</span>
                    </div>
                    <div>
                      <span className="text-[#8B949E] block">{isFa ? 'اطمینان:' : 'Confidence:'}</span>
                      <span className="text-xl font-bold text-emerald-400">{optionB.confidenceLevel}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[#8B949E] font-bold block mb-1">{isFa ? 'هزینه تقریبی:' : 'Approx Cost:'}</span>
                    <span className="text-[#E0E0E0] font-mono font-bold bg-[#0A0C10] p-2 rounded-lg border border-[#30363D] block">
                      {isFa ? optionB.approximateCostsFa : optionB.approximateCosts}
                    </span>
                  </div>

                  <div>
                    <span className="text-emerald-400 font-bold block mb-1">{isFa ? 'مزایا:' : 'Pros:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionB.prosFa : optionB.pros).map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-rose-400 font-bold block mb-1">{isFa ? 'معایب:' : 'Cons:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionB.consFa : optionB.cons).map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-blue-400 font-bold block mb-1">{isFa ? 'شواهد موافق:' : 'Supporting Evidence:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionB.supportingEvidenceFa : optionB.supportingEvidence).map((se, i) => (
                        <li key={i}>{se}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#D4AF37] font-bold block mb-1">{isFa ? 'شواهد مخالف:' : 'Opposing Evidence:'}</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#E0E0E0] dir-auto">
                      {(isFa ? optionB.opposingEvidenceFa : optionB.opposingEvidence).map((oe, i) => (
                        <li key={i}>{oe}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Option B Claim Snippets */}
                  <div className="pt-2 border-t border-[#30363D] space-y-2">
                    <span className="text-emerald-400 font-bold block">{isFa ? 'ادعاهای پیوست‌شده از دفترچه:' : 'Linked Claim Snippets:'}</span>
                    <div className="space-y-2">
                      {getMatchedClaimsForOption(optionB).slice(0, 3).map((cl) => (
                        <div key={cl.id} className="bg-[#0A0C10] p-2 rounded-lg border border-[#30363D] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] text-emerald-400">{cl.id}</span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${getEvidenceStatusBadgeClass(cl.evidenceStatus)}`}>
                              {getEvidenceStatusText(cl.evidenceStatus)}
                            </span>
                          </div>
                          <p className="text-[11px] font-medium text-[#E0E0E0] dir-auto">{isFa ? (cl.canonicalClaimFa || cl.canonicalClaim) : cl.canonicalClaim}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
