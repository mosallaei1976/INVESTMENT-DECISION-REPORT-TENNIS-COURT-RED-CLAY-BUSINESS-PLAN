import React from 'react';
import { RiskItem } from '../../types';
import { ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface RiskRegisterViewProps {
  risks: RiskItem[];
  lang: 'fa' | 'en';
}

export const RiskRegisterView: React.FC<RiskRegisterViewProps> = ({ risks, lang }) => {
  const isFa = lang === 'fa';

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'سجل ریسک و انطباق حقوقی/تحریمی (Risk & Compliance Register)' : 'Risk & Compliance Matrix'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'ارزیابی ریسک‌های بانکی، تحریم، گمرک، کیفیت فنی و الزامات ITF به همراه راهکارهای کاهش ریسک' : 'Quantified risk matrix: Probability, impact, mitigations, and verification gating'}
            </p>
          </div>
        </div>
      </div>

      {/* Risks Table */}
      <div className="space-y-4">
        {risks.map((risk) => (
          <div key={risk.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-rose-400 font-bold">{risk.id}</span>
                <span className="text-xs font-bold text-slate-200">
                  {isFa && risk.titleFa ? risk.titleFa : risk.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  Category: {risk.category}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold">
                  Score: {risk.riskScore} (P:{risk.probability} x I:{risk.impact})
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed dir-auto">
              {risk.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-400 block">{isFa ? 'راهکار کاهش ریسک (Mitigation Strategy):' : 'Mitigation Strategy:'}</span>
                <p className="text-slate-300">{risk.mitigation}</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 block">{isFa ? 'شرط راستی‌آزمایی (Verification Requirement):' : 'Verification Requirement:'}</span>
                <p className="text-slate-300">{risk.verificationRequired}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
