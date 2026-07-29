import React from 'react';
import { Contradiction } from '../../types';
import { AlertOctagon, Scale, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ContradictionCenterViewProps {
  contradictions: Contradiction[];
  lang: 'fa' | 'en';
}

export const ContradictionCenterView: React.FC<ContradictionCenterViewProps> = ({ contradictions, lang }) => {
  const isFa = lang === 'fa';

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'مرکز شناسايي و حل تناقضات (Contradiction Center)' : 'Contradiction Center & Conflict Resolution Workspace'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'تحلیل تناقضات بین مدلهای هوش مصنوعی و اسناد گمرکی و لوجستیکی' : 'Side-by-side claim conflict analysis and primary-source resolution'}
            </p>
          </div>
        </div>
      </div>

      {/* Contradictions List */}
      <div className="space-y-6">
        {contradictions.map((ctr) => (
          <div key={ctr.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-rose-400 font-bold">{ctr.id}</span>
                <h3 className="text-sm font-bold text-slate-100">{ctr.topic}</h3>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                  ctr.severity === 'HIGH' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  SEVERITY: {ctr.severity}
                </span>

                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  STATUS: {ctr.resolutionStatus}
                </span>
              </div>
            </div>

            {/* Side-by-Side Claims Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Claim A */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono border-b border-slate-800 pb-2">
                  <span className="text-amber-400 font-bold">Claim A ({ctr.claimA.modelName})</span>
                  <span className="text-slate-400">Tier {ctr.claimA.sourceTier}</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  "{ctr.claimA.canonicalClaim}"
                </p>
                <span className="text-[10px] text-slate-500 font-mono block">
                  Source: {ctr.claimA.sourceTitle || ctr.claimA.documentId}
                </span>
              </div>

              {/* Claim B */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-bold">Claim B ({ctr.claimB.modelName})</span>
                  <span className="text-slate-400">Tier {ctr.claimB.sourceTier}</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  "{ctr.claimB.canonicalClaim}"
                </p>
                <span className="text-[10px] text-slate-500 font-mono block">
                  Source: {ctr.claimB.sourceTitle || ctr.claimB.documentId}
                </span>
              </div>

            </div>

            {/* Contradiction Reason & Resolution */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-rose-500/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>{isFa ? 'علت تناقض و تحلیل کارشناسی:' : 'Root Cause of Contradiction:'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed dir-auto">
                {isFa && ctr.contradictionReasonFa ? ctr.contradictionReasonFa : ctr.contradictionReason}
              </p>

              {ctr.resolutionNotes && (
                <div className="pt-2 border-t border-slate-800 text-emerald-400 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">{isFa ? 'نتیجه و تصمیم نهایی:' : 'Resolution Outcome:'}</span>
                    <span className="text-slate-300">{ctr.resolutionNotes}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
