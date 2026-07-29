import React from 'react';
import { Claim } from '../../types';
import { Users, Sparkles, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

interface ModelComparisonViewProps {
  claims: Claim[];
  lang: 'fa' | 'en';
}

export const ModelComparisonView: React.FC<ModelComparisonViewProps> = ({ claims, lang }) => {
  const isFa = lang === 'fa';

  const models = Array.from(new Set(claims.map(c => c.modelName)));

  // Group claims by topic / category
  const categories = Array.from(new Set(claims.map(c => c.category)));

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'ماتریس مقایسه مدل‌های هوش مصنوعی (AI Model Comparison)' : 'AI Model Comparison & Output Cross-Analysis'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'مقایسه خروجی‌های Gemini 3.6, Claude 3.5, GPT-4o, DeepSeek R1 و متخصصان انسانی' : 'Compare research statements side-by-side across models without loss of model identity'}
            </p>
          </div>
        </div>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((m, idx) => {
          const modelClaims = claims.filter(c => c.modelName === m);
          const factsCount = modelClaims.filter(c => c.claimType === 'FACT').length;

          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-amber-400 font-mono">{m}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {modelClaims.length} {isFa ? 'ادعا' : 'claims'}
                </span>
              </div>

              <div className="flex justify-between text-xs text-slate-400 font-mono pt-1">
                <span>{isFa ? 'واقعیت تایید شده:' : 'Facts:'} {factsCount}</span>
                <span>{isFa ? 'تخمین:' : 'Estimates:'} {modelClaims.length - factsCount}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-Analysis by Category */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-400" />
          <span>{isFa ? 'ارزیابی تطبیقی ادعاها به تفکیک موضوع' : 'Comparative Analysis by Research Category'}</span>
        </h3>

        <div className="space-y-4">
          {categories.map((cat, idx) => {
            const catClaims = claims.filter(c => c.category === cat);

            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block">
                  {cat}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {catClaims.map((claim) => (
                    <div key={claim.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-1.5">
                        <span className="text-purple-300 font-bold">{claim.modelName}</span>
                        <span className="text-slate-400">{claim.claimType}</span>
                      </div>

                      <p className="text-xs text-slate-200 font-medium leading-snug">
                        {isFa && claim.canonicalClaimFa ? claim.canonicalClaimFa : claim.canonicalClaim}
                      </p>

                      <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400">
                        <span>Tier {claim.sourceTier}</span>
                        <span className="text-emerald-400 font-bold">{claim.confidenceScore}% Conf</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
