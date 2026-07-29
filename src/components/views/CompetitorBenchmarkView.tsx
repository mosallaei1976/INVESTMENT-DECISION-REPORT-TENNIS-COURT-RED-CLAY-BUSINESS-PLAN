import React from 'react';
import { CompetitorItem } from '../../types';
import { Swords, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface CompetitorBenchmarkViewProps {
  competitors: CompetitorItem[];
  lang: 'fa' | 'en';
}

export const CompetitorBenchmarkView: React.FC<CompetitorBenchmarkViewProps> = ({ competitors, lang }) => {
  const isFa = lang === 'fa';

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Swords className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'تحلیل بنچ‌مارک رقبا و قیمت‌گذاری در اروپا (Competitor Matrix)' : 'European Competitor & Packaging Benchmark'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'تحلیل قیمت، بسته‌بندی، اندازه دانه و موضع‌گیری تولیدکنندگان مطرح خاک رس تنیس در بریتانیا، آلمان، ایتالیا و اسپانیا' : 'Wholesale pricing, grain size specs, packaging standards, and market positioning'}
            </p>
          </div>
        </div>
      </div>

      {/* Competitors Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-3.5">{isFa ? 'شرکت / کشور' : 'Company / Country'}</th>
                <th className="p-3.5">{isFa ? 'نام محصول' : 'Product Name'}</th>
                <th className="p-3.5">{isFa ? 'دانه بندی' : 'Grain Size'}</th>
                <th className="p-3.5">{isFa ? 'قیمت/کیسه ۲۵ک‌گ' : 'Price / 25kg Bag'}</th>
                <th className="p-3.5">{isFa ? 'قیمت/تن' : 'Price / Ton'}</th>
                <th className="p-3.5">{isFa ? 'استاندارد ITF' : 'ITF Classification'}</th>
                <th className="p-3.5 min-w-[200px]">{isFa ? 'نقاط ضعف و فرصت نفوذ' : 'Vulnerabilities & Iranian Entry Opportunity'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {competitors.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/50 transition">
                  <td className="p-3.5 font-mono">
                    <span className="text-amber-400 font-bold block">{item.companyName}</span>
                    <span className="text-[10px] text-slate-400">{item.country}</span>
                  </td>

                  <td className="p-3.5 font-semibold text-slate-200">
                    {item.productName}
                  </td>

                  <td className="p-3.5 font-mono text-slate-300">
                    {item.grainSize}
                  </td>

                  <td className="p-3.5 font-mono text-emerald-400 font-bold whitespace-nowrap">
                    €{item.pricePerBag25kg.toFixed(2)}
                  </td>

                  <td className="p-3.5 font-mono text-emerald-400 font-bold whitespace-nowrap">
                    €{item.pricePerTon}
                  </td>

                  <td className="p-3.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                      {item.itfClassification}
                    </span>
                  </td>

                  <td className="p-3.5 text-slate-300 leading-relaxed">
                    <p className="text-[11px] text-rose-300/90">{item.vulnerabilities}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
