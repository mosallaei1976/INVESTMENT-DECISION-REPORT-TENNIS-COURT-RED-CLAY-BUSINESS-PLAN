import React, { useState } from 'react';
import { SupplyChainScenario } from '../../types';
import { Ship, DollarSign, ArrowRight, ShieldCheck, TrendingUp, Sliders } from 'lucide-react';

interface SupplyChainSimulatorViewProps {
  scenarios: SupplyChainScenario[];
  lang: 'fa' | 'en';
}

export const SupplyChainSimulatorView: React.FC<SupplyChainSimulatorViewProps> = ({ scenarios: initialScenarios, lang }) => {
  const isFa = lang === 'fa';

  // Interactive Parameters State
  const [oceanFreightRate, setOceanFreightRate] = useState<number>(2100); // USD / 20ft (24t)
  const [targetSellingPrice, setTargetSellingPrice] = useState<number>(700); // USD / ton ($17.50 / 25kg bag)
  const [rawClayCost, setRawClayCost] = useState<number>(12); // USD / ton

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Ship className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'شبیه‌ساز سناریوهای زنجیره تامین و قیمت تمام شده (Supply Chain Sim)' : 'Supply Chain Scenario & Landed Cost Simulator'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'مقایسه صادرات کیسه‌ای مستقیم از ایران در برابر بسته‌بندی در اروپا و ترکیه با تنظیم پارامترهای تعاملی' : 'Simulate landed costs, gross margins, and break-even volumes across 3 supply chain models'}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 border-b border-slate-800 pb-2">
          <Sliders className="w-4 h-4" />
          <span>{isFa ? 'تنظیم پارامترهای متغیر بازار (Interactive Market Sliders)' : 'Interactive Variable Parameter Sliders'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Ocean Freight Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">{isFa ? 'کرایه کانتینر ۲۰ فوت (بندرعباس->روتردام):' : 'Ocean Freight (Bandar Abbas -> EU):'}</span>
              <span className="font-bold text-amber-400">${oceanFreightRate}</span>
            </div>
            <input
              type="range"
              min={1200}
              max={3800}
              step={50}
              value={oceanFreightRate}
              onChange={(e) => setOceanFreightRate(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-500 block">
              ${(oceanFreightRate / 24).toFixed(2)} / ton freight cost
            </span>
          </div>

          {/* B2B Target Price Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">{isFa ? 'قیمت فروش عمده در اروپا (هر تن):' : 'EU Wholesale B2B Price / Ton:'}</span>
              <span className="font-bold text-emerald-400">${targetSellingPrice}</span>
            </div>
            <input
              type="range"
              min={480}
              max={950}
              step={10}
              value={targetSellingPrice}
              onChange={(e) => setTargetSellingPrice(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-500 block">
              Equivalent to ${(targetSellingPrice / 40).toFixed(2)} per 25kg bag
            </span>
          </div>

          {/* Raw Material Cost Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">{isFa ? 'قیمت خاک خام در معدن (هر تن):' : 'Raw Quarry Clay Cost / Ton:'}</span>
              <span className="font-bold text-cyan-400">${rawClayCost}</span>
            </div>
            <input
              type="range"
              min={6}
              max={25}
              step={1}
              value={rawClayCost}
              onChange={(e) => setRawClayCost(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-500 block">
              Quarry mouth extraction cost in Yazd/Isfahan
            </span>
          </div>

        </div>
      </div>

      {/* Scenario Cards Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {initialScenarios.map((scenario) => {
          // Dynamic calculation based on state sliders
          const oceanFreightPerTon = oceanFreightRate / 24;
          const landedCost =
            rawClayCost +
            scenario.processingCostPerTon +
            scenario.packagingCostPerTon +
            (scenario.inlandFreightIran / 24) +
            oceanFreightPerTon +
            scenario.insurancePerTon +
            (targetSellingPrice * (scenario.customsDutyPct / 100)) +
            scenario.portHandlingEu +
            scenario.warehousingEuPerMonth +
            scenario.inlandTransportEu;

          const grossProfit = targetSellingPrice - landedCost;
          const grossMargin = (grossProfit / targetSellingPrice) * 100;
          const breakEvenTons = Math.ceil(120000 / grossProfit); // Assuming $120k fixed annual OPEX

          return (
            <div key={scenario.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-amber-400 font-bold block mb-1">{scenario.id}</span>
                  <h3 className="text-sm font-bold text-slate-100">
                    {isFa && scenario.nameFa ? scenario.nameFa : scenario.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed dir-auto">
                  {scenario.description}
                </p>

                {/* Cost Waterfall Breakdown Table */}
                <div className="space-y-1.5 text-xs font-mono bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'خاک خام معدن:' : 'Raw Clay (Quarry):'}</span>
                    <span>${rawClayCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'فرآوری و آسیاب:' : 'Processing & Milling:'}</span>
                    <span>${scenario.processingCostPerTon.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'بسته‌بندی و پالت:' : 'Packaging & Pallets:'}</span>
                    <span>${scenario.packagingCostPerTon.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'حمل دریایی (روتردام):' : 'Ocean Freight / Ton:'}</span>
                    <span>${oceanFreightPerTon.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'ترخیص و عوارض گمرک:' : 'Customs Duty (' + scenario.customsDutyPct + '%):'}</span>
                    <span>${(targetSellingPrice * (scenario.customsDutyPct / 100)).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isFa ? 'انبارداری و لجستیک اروپا:' : 'EU Logistics & Hub:'}</span>
                    <span>${(scenario.portHandlingEu + scenario.inlandTransportEu).toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-slate-100 font-bold border-t border-slate-800 pt-2 text-sm">
                    <span>{isFa ? 'هزینه نهایی تحویل (Landed Cost):' : 'Landed Cost / Ton:'}</span>
                    <span className="text-amber-400">${landedCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Profitability Banner */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">{isFa ? 'سود ناخالص در هر تن:' : 'Gross Profit / Ton:'}</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">${grossProfit.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">{isFa ? 'حاشیه سود ناخالص:' : 'Gross Margin:'}</span>
                  <span className="text-emerald-400 font-bold">{grossMargin.toFixed(1)}%</span>
                </div>

                <div className="flex justify-between items-center text-xs font-mono border-t border-slate-800/80 pt-1.5">
                  <span className="text-slate-400">{isFa ? 'نقطه سرربه‌سر سالانه:' : 'Break-Even Volume:'}</span>
                  <span className="text-cyan-400 font-bold">{breakEvenTons} {isFa ? 'تن' : 'tons'}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
