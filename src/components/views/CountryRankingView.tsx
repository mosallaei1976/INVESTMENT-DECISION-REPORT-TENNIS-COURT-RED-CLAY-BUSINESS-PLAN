import React from 'react';
import { CountryRanking } from '../../types';
import { Globe2, Anchor, Building, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';

interface CountryRankingViewProps {
  rankings: CountryRanking[];
  lang: 'fa' | 'en';
}

export const CountryRankingView: React.FC<CountryRankingViewProps> = ({ rankings, lang }) => {
  const isFa = lang === 'fa';

  const getBadgeStyle = (rec: CountryRanking['recommendation']) => {
    switch (rec) {
      case 'TOP_HUB':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'SECONDARY':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'LOGISTICS_ONLY':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      default:
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'ماتریس رتبه‌بندی هاب‌های ورود به اروپا (Country & City Matrix)' : 'European Entry Hub & City Decision Matrix'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'ارزیابی جامع روتردام، هامبورگ، آنتورپ، والنسیا و مرسین بر اساس دسترسی، هزینه‌ها و سهولت بانکی' : 'Multi-factor ranking: Port access, banking feasibility, tax, VAT, and market density'}
            </p>
          </div>
        </div>
      </div>

      {/* Rankings Cards */}
      <div className="space-y-6">
        {rankings.map((item, idx) => (
          <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold font-mono">
                  #{idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    {item.country} ({isFa ? item.countryFa : item.targetCity})
                  </h3>
                  <span className="text-xs text-slate-400">Target Hub City: {item.targetCity}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wider">{isFa ? 'امتیاز کل' : 'Overall Score'}</span>
                  <span className="text-xl font-black text-amber-400 font-mono">{item.overallScore} / 100</span>
                </div>

                <span className={`px-3 py-1 rounded-xl border text-xs font-bold font-mono ${getBadgeStyle(item.recommendation)}`}>
                  {item.recommendation}
                </span>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block">{isFa ? 'دسترسی بندری:' : 'Port Access:'}</span>
                <span className="font-bold text-slate-200 font-mono">{item.portAccessScore}/100</span>
              </div>

              <div>
                <span className="text-slate-500 block">{isFa ? 'امکان‌پذیری بانکی:' : 'Banking Setup:'}</span>
                <span className="font-bold text-emerald-400 font-mono">{item.bankingFeasibilityScore}/100</span>
              </div>

              <div>
                <span className="text-slate-500 block">{isFa ? 'تراکم بازار تنیس:' : 'Tennis Market:'}</span>
                <span className="font-bold text-cyan-400 font-mono">{item.tennisMarketDensityScore}/100</span>
              </div>

              <div>
                <span className="text-slate-500 block">{isFa ? 'نرخ مالیات شرکت:' : 'Corporate Tax:'}</span>
                <span className="font-bold text-slate-200 font-mono">{item.taxRatePct}%</span>
              </div>

              <div>
                <span className="text-slate-500 block">{isFa ? 'نرخ مالیات بر ارزش افزوده:' : 'VAT Rate:'}</span>
                <span className="font-bold text-slate-200 font-mono">{item.vatRatePct}%</span>
              </div>

              <div>
                <span className="text-slate-500 block">{isFa ? 'هزینه نهایی تحویل/تن:' : 'Landed Cost/Ton:'}</span>
                <span className="font-bold text-amber-400 font-mono">${item.logisticsCostIndex}</span>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/20">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isFa ? 'مزایای رقابتی:' : 'Key Advantages:'}</span>
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {item.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 bg-rose-500/5 p-3.5 rounded-xl border border-rose-500/20">
                <span className="font-bold text-rose-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>{isFa ? 'موانع و ریسک‌ها:' : 'Key Disadvantages / Risks:'}</span>
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {item.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
