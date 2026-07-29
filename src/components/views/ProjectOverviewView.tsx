import React from 'react';
import { Building2, Globe, Shield, Scale, MapPin, Target, Sparkles } from 'lucide-react';

interface ProjectOverviewViewProps {
  lang: 'fa' | 'en';
}

export const ProjectOverviewView: React.FC<ProjectOverviewViewProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">
              {isFa ? 'شناسنامه پروژه: صادرات خاک رس قرمز تنیس از ایران به اروپا' : 'Project Profile: Iranian Red Clay Tennis Surface Export to EU'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'ارزیابی اقتصادی و حقوقی سرمایه‌گذاری برای کاربر: محمد (ایران)' : 'Investment Evaluation & Feasibility Cockpit for Founder: Mohammad'}
            </p>
          </div>
        </div>
      </div>

      {/* Core Project Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Founder & Context */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold border-b border-slate-800 pb-2">
            <MapPin className="w-4 h-4" />
            <span>{isFa ? 'بنیان‌گذار و مبدأ تامین' : 'Founder & Origin Context'}</span>
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-slate-500 block">{isFa ? 'نام متقاضی:' : 'Lead Evaluator:'}</span>
              <span className="text-slate-200 font-medium">Mohammad (Architect & Entrepreneur, Iran)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'منبع مواد خام:' : 'Raw Material Origin:'}</span>
              <span className="text-slate-200 font-medium">Yazd, Kashan & Isfahan Red Clay / Shale Reserves (Iran)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'مزیت مواد اولیه:' : 'Material Advantage:'}</span>
              <span className="text-emerald-400 font-medium">High natural iron oxide (7.3% Fe2O3) providing deep terracotta red color</span>
            </div>
          </div>
        </div>

        {/* Target Markets */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold border-b border-slate-800 pb-2">
            <Globe className="w-4 h-4" />
            <span>{isFa ? 'بازارهای هدف صادراتی' : 'Target Market Expansion'}</span>
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-slate-500 block">{isFa ? 'فاز ۱ (اولیه):' : 'Phase 1 (Primary):'}</span>
              <span className="text-slate-200 font-medium">Western Europe (Netherlands, Germany, Belgium, France, Spain)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'هاب عملیاتی اروپا:' : 'European Operational Hub:'}</span>
              <span className="text-amber-400 font-medium">Rotterdam / Venlo (Netherlands B.V.)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'فاز ۲ (آینده):' : 'Phase 2 (Future):'}</span>
              <span className="text-slate-200 font-medium">North America (US East Coast - Har-Tru Red Market)</span>
            </div>
          </div>
        </div>

        {/* Decision Objectives */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold border-b border-slate-800 pb-2">
            <Target className="w-4 h-4" />
            <span>{isFa ? 'اهداف تصمیم‌گیری' : 'Decision Objectives'}</span>
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-slate-500 block">{isFa ? 'هدف اصلی:' : 'Core Objective:'}</span>
              <span className="text-slate-200 font-medium">Traceable Investment Decision Matrix (GO / CONDITIONAL GO / NO-GO)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'محصول خروجی:' : 'Deliverable:'}</span>
              <span className="text-slate-200 font-medium">Evidence-Backed European Market Business Plan (24 Sections)</span>
            </div>
            <div>
              <span className="text-slate-500 block">{isFa ? 'حداقل نرخ سود ناخالص:' : 'Minimum Target Margin:'}</span>
              <span className="text-emerald-400 font-medium">&gt; 50% Gross Profit Margin on landed B2B sales</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mandatory Research Guardrails */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Shield className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-slate-100">
            {isFa ? 'اصول و خطوط قرمز تحقیقاتی (Research Guardrails)' : 'Mandatory Research & Evidence Guardrails'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">1. ITF Distinction Rule</span>
            <p>
              ITF classifies installed court pace (Category 1 Slow), but does NOT issue brand approvals for raw clay powders. Claiming "ITF Certified Powder" is prohibited.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">2. Primary Source Rule</span>
            <p>
              AI model output is Tier 4 evidence. AI consensus without primary source backing remains labeled as "Unverified AI Consensus".
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">3. EU Sanctions & Banking Rule</span>
            <p>
              Natural clay (HS 2507) is non-sanctioned, but direct SWIFT transfers to Iranian banks are blocked. Requires Dutch B.V. corporate structure.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">4. Non-Preferential Origin Rule</span>
            <p>
              Simple sifting and re-bagging in EU or Turkey does NOT change non-preferential country of origin under EU UCC Art. 60.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
