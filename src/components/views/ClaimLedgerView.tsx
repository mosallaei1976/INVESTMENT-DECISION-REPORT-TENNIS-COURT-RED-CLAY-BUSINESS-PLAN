import React, { useState } from 'react';
import { Claim, ClaimType, EvidenceStatus } from '../../types';
import { ListFilter, Search, Filter, ShieldCheck, AlertCircle, HelpCircle, AlertTriangle, Layers } from 'lucide-react';

interface ClaimLedgerViewProps {
  claims: Claim[];
  lang: 'fa' | 'en';
}

export const ClaimLedgerView: React.FC<ClaimLedgerViewProps> = ({ claims, lang }) => {
  const isFa = lang === 'fa';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [expandedClaimId, setExpandedClaimId] = useState<string | null>(null);

  const categories = Array.from(new Set(claims.map(c => c.category)));

  const filteredClaims = claims.filter(c => {
    const matchesSearch =
      c.canonicalClaim.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.canonicalClaimFa && c.canonicalClaimFa.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.originalText.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCategory === 'ALL' || c.category === selectedCategory;
    const matchesType = selectedType === 'ALL' || c.claimType === selectedType;
    const matchesStatus = selectedStatus === 'ALL' || c.evidenceStatus === selectedStatus;

    return matchesSearch && matchesCat && matchesType && matchesStatus;
  });

  const getTypeBadgeStyle = (type: ClaimType) => {
    switch (type) {
      case 'FACT':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'ESTIMATE':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'ASSUMPTION':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'OPINION':
      case 'RECOMMENDATION':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusBadgeStyle = (status: EvidenceStatus) => {
    switch (status) {
      case 'VERIFIED':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'SUPPORTED':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'UNVERIFIED_CONSENSUS':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'CONFLICTED':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/15 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <ListFilter className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                {isFa ? 'دفتر ادعاهای اتمی استخراج‌شده (Atomic Claim Ledger)' : 'Atomic Claim Ledger'}
              </h2>
              <p className="text-xs text-slate-400">
                {isFa ? 'نرمال‌سازی ادعاها با تفکیک واقعیت تاییدشده، تخمین و فرضیه' : 'Normalized claims grouped by evidence tier, confidence, and status'}
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            {isFa ? `تعداد کل: ${filteredClaims.length} از ${claims.length}` : `Showing ${filteredClaims.length} of ${claims.length} claims`}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={isFa ? 'جستجو در ادعاها...' : 'Search claims or sources...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">{isFa ? 'همه دسته‌بندی‌ها' : 'All Categories'}</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">{isFa ? 'همه انواع (Fact/Estimate/Assumption)' : 'All Claim Types'}</option>
              <option value="FACT">FACT (واقعیت)</option>
              <option value="ESTIMATE">ESTIMATE (تخمین)</option>
              <option value="ASSUMPTION">ASSUMPTION (فرضیه)</option>
              <option value="RECOMMENDATION">RECOMMENDATION (توصیه)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">{isFa ? 'همه وضعیت‌های شواهد' : 'All Evidence Statuses'}</option>
              <option value="VERIFIED">VERIFIED (تایید شده)</option>
              <option value="SUPPORTED">SUPPORTED (پشتیبانی‌شده)</option>
              <option value="UNVERIFIED_CONSENSUS">UNVERIFIED CONSENSUS (اجماع بدون سند)</option>
              <option value="CONFLICTED">CONFLICTED (دارای تناقض)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Claim Ledger Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-3.5">{isFa ? 'کد / مدل' : 'ID / Model'}</th>
                <th className="p-3.5 min-w-[280px]">{isFa ? 'ادعای اتمی کانونی' : 'Canonical Claim Statement'}</th>
                <th className="p-3.5">{isFa ? 'دسته‌بندی' : 'Category'}</th>
                <th className="p-3.5">{isFa ? 'نوع ادعا' : 'Type'}</th>
                <th className="p-3.5">{isFa ? 'سطح منبع' : 'Tier'}</th>
                <th className="p-3.5">{isFa ? 'وضعیت شواهد' : 'Evidence Status'}</th>
                <th className="p-3.5">{isFa ? 'اطمینان' : 'Confidence'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredClaims.map((claim) => {
                const isExpanded = expandedClaimId === claim.id;

                return (
                  <React.Fragment key={claim.id}>
                    <tr
                      onClick={() => setExpandedClaimId(isExpanded ? null : claim.id)}
                      className="hover:bg-slate-800/50 cursor-pointer transition"
                    >
                      <td className="p-3.5 font-mono">
                        <span className="text-amber-400 font-bold block">{claim.id}</span>
                        <span className="text-[10px] text-slate-400">{claim.modelName}</span>
                      </td>

                      <td className="p-3.5">
                        <p className="font-semibold text-slate-200 leading-snug line-clamp-2">
                          {isFa && claim.canonicalClaimFa ? claim.canonicalClaimFa : claim.canonicalClaim}
                        </p>
                        {claim.numericValue !== undefined && (
                          <span className="inline-block mt-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-800/40">
                            Value: {claim.numericValue} {claim.unit}
                          </span>
                        )}
                      </td>

                      <td className="p-3.5">
                        <span className="text-[11px] text-slate-300 bg-slate-950 px-2 py-1 rounded border border-slate-800 whitespace-nowrap">
                          {claim.category}
                        </span>
                      </td>

                      <td className="p-3.5 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-bold font-mono ${getTypeBadgeStyle(claim.claimType)}`}>
                          {claim.claimType}
                        </span>
                      </td>

                      <td className="p-3.5 font-mono whitespace-nowrap">
                        <span className="text-[11px] text-slate-300">
                          Tier {claim.sourceTier}
                        </span>
                      </td>

                      <td className="p-3.5 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold font-mono ${getStatusBadgeStyle(claim.evidenceStatus)}`}>
                          {claim.evidenceStatus}
                        </span>
                      </td>

                      <td className="p-3.5 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">{claim.confidenceScore}%</span>
                          <div className="w-12 bg-slate-800 rounded-full h-1 overflow-hidden">
                            <div
                              className="bg-amber-400 h-full rounded-full"
                              style={{ width: `${claim.confidenceScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded Detail Drawer */}
                    {isExpanded && (
                      <tr className="bg-slate-950/90">
                        <td colSpan={7} className="p-4 space-y-3 border-t border-slate-800/80">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <span className="text-xs font-bold text-amber-400 block">Original Supporting Excerpt:</span>
                              <p className="text-xs text-slate-300 font-mono bg-slate-900 p-3 rounded-xl border border-slate-800 leading-relaxed">
                                "{claim.originalText}"
                              </p>
                            </div>

                            <div className="space-y-2 text-xs">
                              <div>
                                <span className="text-slate-500 block">Source Document:</span>
                                <span className="text-slate-200 font-medium">{claim.sourceTitle || claim.documentId}</span>
                              </div>
                              <div>
                                <span className="text-slate-500 block">Geography / Scope:</span>
                                <span className="text-slate-200 font-medium">{claim.geography}</span>
                              </div>
                              {claim.verificationNotes && (
                                <div>
                                  <span className="text-amber-400 font-bold block">Verification Audit Notes:</span>
                                  <p className="text-slate-300 bg-amber-500/5 p-2 rounded border border-amber-500/20">
                                    {claim.verificationNotes}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
