import React from 'react';
import { TrendingUp, DollarSign, PieChart, ShieldCheck } from 'lucide-react';

interface UnitEconomicsViewProps {
  lang: 'fa' | 'en';
}

export const UnitEconomicsView: React.FC<UnitEconomicsViewProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  const costBreakdown = [
    { name: isFa ? 'خاک خام (درب معدن یزد)' : 'Raw Clay (Quarry Gate, Iran)', costPerTon: 12.00, costPerBag: 0.30 },
    { name: isFa ? 'خردایش و آسیاب چکشی (۰-۰.۵mm)' : 'Milling & Screening (0-0.5mm)', costPerTon: 28.00, costPerBag: 0.70 },
    { name: isFa ? 'کیسه‌گیری ۲۵ کیلوگرمی و پالت' : '25kg Laminated Bagging & Pallets', costPerTon: 22.00, costPerBag: 0.55 },
    { name: isFa ? 'حمل داخلی ایران تا بندرعباس' : 'Iran Inland Freight (Bandar Abbas)', costPerTon: 18.75, costPerBag: 0.47 },
    { name: isFa ? 'حمل دریایی کانتینر (بندرعباس->روتردام)' : 'Ocean Freight (Bandar Abbas -> EU)', costPerTon: 87.50, costPerBag: 2.19 },
    { name: isFa ? 'بیمه محموله' : 'Cargo Insurance', costPerTon: 4.00, costPerBag: 0.10 },
    { name: isFa ? 'تخلیه بندر روتردام' : 'EU Port Terminal Handling', costPerTon: 18.00, costPerBag: 0.45 },
    { name: isFa ? 'حمل داخلی اروپا به انبار ونلو' : 'EU Inland Trucking (Venlo Hub)', costPerTon: 28.25, costPerBag: 0.70 },
  ];

  const totalLandedCost = costBreakdown.reduce((acc, c) => acc + c.costPerTon, 0);
  const wholesalePrice = 700.00; // $700/ton ($17.50/bag)
  const grossProfit = wholesalePrice - totalLandedCost;
  const grossMargin = (grossProfit / wholesalePrice) * 100;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'تحلیل اقتصاد واحد و سودآوری (Unit Economics)' : 'Unit Economics & Profit Margin Model'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'ریز هزینه‌های تحویل در روتردام (Landed Cost) و سود ناخالص به ازای هر تن و هر کیسه ۲۵ کیلوگرمی' : 'Cost breakdown from Iranian quarry mouth to Netherlands B2B warehouse'}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Profitability Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
          <span className="text-xs text-slate-400 block mb-1">{isFa ? 'هزینه کل تحویل (هر تن)' : 'Total Landed Cost / Ton'}</span>
          <span className="text-2xl font-black text-amber-400 font-mono">${totalLandedCost.toFixed(2)}</span>
          <span className="text-[11px] text-slate-500 block mt-1">($5.46 per 25kg bag)</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
          <span className="text-xs text-slate-400 block mb-1">{isFa ? 'قیمت فروش عمده در اروپا' : 'Wholesale Selling Price'}</span>
          <span className="text-2xl font-black text-cyan-400 font-mono">${wholesalePrice.toFixed(2)}</span>
          <span className="text-[11px] text-slate-500 block mt-1">(€16.50 per 25kg bag)</span>
        </div>

        <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 text-center bg-emerald-500/5">
          <span className="text-xs text-slate-400 block mb-1">{isFa ? 'سود ناخالص و حاشیه' : 'Gross Profit & Margin'}</span>
          <span className="text-2xl font-black text-emerald-400 font-mono">${grossProfit.toFixed(2)}</span>
          <span className="text-xs font-bold text-emerald-400 block mt-1 font-mono">({grossMargin.toFixed(1)}% Gross Margin)</span>
        </div>
      </div>

      {/* Detailed Cost Waterfall Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-slate-800 font-bold text-xs text-slate-200">
          {isFa ? 'ریز اجزای هزینه تمام‌شده (Cost Waterfall per Metric Ton & 25kg Bag)' : 'Detailed Cost Waterfall Breakdown'}
        </div>

        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-800">
            <tr>
              <th className="p-3.5">{isFa ? 'بخش هزینه' : 'Cost Component'}</th>
              <th className="p-3.5">{isFa ? 'هزینه در هر تن ($)' : 'Cost per Ton (USD)'}</th>
              <th className="p-3.5">{isFa ? 'هزینه در هر کیسه ۲۵ک‌گ ($)' : 'Cost per 25kg Bag (USD)'}</th>
              <th className="p-3.5">{isFa ? 'سهم از هزینه کل (%)' : 'Share of Total Landed Cost'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {costBreakdown.map((item, idx) => {
              const share = (item.costPerTon / totalLandedCost) * 100;
              return (
                <tr key={idx} className="hover:bg-slate-800/40 transition">
                  <td className="p-3.5 text-slate-200 font-sans font-medium">{item.name}</td>
                  <td className="p-3.5 text-slate-200 font-bold">${item.costPerTon.toFixed(2)}</td>
                  <td className="p-3.5 text-slate-300">${item.costPerBag.toFixed(2)}</td>
                  <td className="p-3.5 text-amber-400 font-bold">{share.toFixed(1)}%</td>
                </tr>
              );
            })}
            <tr className="bg-slate-950 text-slate-100 font-bold text-sm">
              <td className="p-3.5 font-sans">{isFa ? 'مجموع هزینه تمام‌شده در روتردام:' : 'Total Landed Cost in Rotterdam:'}</td>
              <td className="p-3.5 text-amber-400">${totalLandedCost.toFixed(2)}</td>
              <td className="p-3.5 text-amber-400">$5.46</td>
              <td className="p-3.5 text-amber-400">100.0%</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};
