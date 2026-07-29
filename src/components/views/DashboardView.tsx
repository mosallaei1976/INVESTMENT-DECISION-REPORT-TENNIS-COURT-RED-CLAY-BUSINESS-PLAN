import React from 'react';
import {
  Claim,
  Contradiction,
  VerificationTask,
  InvestmentDecision,
  ResearchDocument
} from '../../types';
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  FileText,
  ListFilter,
  CheckSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  Layers,
  FlaskConical
} from 'lucide-react';

interface DashboardViewProps {
  decision: InvestmentDecision;
  documents: ResearchDocument[];
  claims: Claim[];
  contradictions: Contradiction[];
  verificationTasks: VerificationTask[];
  lang: 'fa' | 'en';
  onNavigate: (tab: any) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  decision,
  documents,
  claims,
  contradictions,
  verificationTasks,
  lang,
  onNavigate
}) => {
  const isFa = lang === 'fa';

  const verifiedClaimsCount = claims.filter(c => c.evidenceStatus === 'VERIFIED').length;
  const openTasksCount = verificationTasks.filter(t => t.status === 'OPEN' || t.status === 'IN_PROGRESS').length;
  const criticalTasksCount = verificationTasks.filter(t => t.priority === 'CRITICAL' && t.status !== 'VERIFIED').length;

  return (
    <div className="space-y-6">
      
      {/* Executive Decision Banner */}
      <div className="bg-[#0D1117] border border-[#2D333B] rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#161B22] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isFa ? 'خلاصه تصمیم هیئت سرمایه‌گذاری' : 'Executive Investment Decision Summary'}
              </span>
              <span className="text-xs text-[#8B949E] font-mono">
                {isFa ? `آخرین بروزرسانی: ${decision.lastUpdated}` : `Last Updated: ${decision.lastUpdated}`}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#D4AF37] tracking-tight">
              {decision.state === 'CONDITIONAL_GO' && (isFa ? 'تایید مشروط (CONDITIONAL GO): صادرات خاک رس تنیس ایران به اروپا' : 'CONDITIONAL GO: Premium Iranian Clay Export to Europe')}
              {decision.state === 'GO' && (isFa ? 'تایید نهایی (GO): آماده سرمایه‌گذاری کامل' : 'GO: Investment Approved for European Launch')}
              {decision.state === 'NO_GO' && (isFa ? 'عدم تایید (NO-GO): ریسک غیرقابل قبول' : 'NO-GO: High Risk / Unfavorable Economics')}
              {decision.state === 'DECISION_PENDING' && (isFa ? 'تصمیم معلق: نیازمند راستی‌آزمایی' : 'DECISION PENDING: Research Incomplete')}
            </h2>

            <p className="text-sm text-[#E0E0E0] leading-relaxed dir-auto">
              {isFa ? decision.executiveSummaryFa : decision.executiveSummary}
            </p>
          </div>

          {/* Decision Score Cards */}
          <div className="flex flex-row lg:flex-col gap-3 min-w-[220px]">
            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-4 flex-1 text-center">
              <span className="text-xs text-[#8B949E] block mb-1">
                {isFa ? 'امتیاز جذابیت و امکان‌پذیری' : 'Attractiveness & Feasibility'}
              </span>
              <span className="text-3xl font-black text-[#D4AF37] font-mono">
                {decision.overallScore.toFixed(1)}
                <span className="text-xs text-[#8B949E] font-normal"> / 100</span>
              </span>
            </div>

            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-4 flex-1 text-center">
              <span className="text-xs text-[#8B949E] block mb-1">
                {isFa ? 'سطح اطمینان شواهد' : 'Evidence Confidence'}
              </span>
              <span className="text-2xl font-bold text-emerald-400 font-mono">
                {decision.overallConfidence.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Document Stats */}
        <div
          onClick={() => onNavigate('inbox')}
          className="bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#8B949E]">
              {isFa ? 'گزارشات و مستندات' : 'Research Documents'}
            </span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#E0E0E0] font-mono">{documents.length}</div>
          <span className="text-[11px] text-[#8B949E] mt-1 block">
            {isFa ? 'شامل مدل‌های Gemini, Claude, GPT-4' : 'From 5 AI Models & Primary Sources'}
          </span>
        </div>

        {/* Claim Stats */}
        <div
          onClick={() => onNavigate('claims')}
          className="bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#8B949E]">
              {isFa ? 'کل ادعاهای استخراج شده' : 'Extracted Claims'}
            </span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition">
              <ListFilter className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#E0E0E0] font-mono">{claims.length}</span>
            <span className="text-xs text-emerald-400 font-mono">({verifiedClaimsCount} {isFa ? 'تایید شده' : 'Verified'})</span>
          </div>
          <span className="text-[11px] text-[#8B949E] mt-1 block">
            {isFa ? 'نرمال‌سازی شده در ۱۲ دسته‌بندی' : 'Normalized into 12 categories'}
          </span>
        </div>

        {/* Contradictions */}
        <div
          onClick={() => onNavigate('contradictions')}
          className="bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#8B949E]">
              {isFa ? 'تناقضات شناسایی شده' : 'Contradictions Detected'}
            </span>
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 group-hover:scale-110 transition">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-rose-400 font-mono">{contradictions.length}</div>
          <span className="text-[11px] text-[#8B949E] mt-1 block">
            {isFa ? 'شامل اختلاف نرخ کرایه و قوانین گمرک' : 'Conflicting rates & origin rules'}
          </span>
        </div>

        {/* Verification Queue */}
        <div
          onClick={() => onNavigate('verification')}
          className="bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl p-5 cursor-pointer transition shadow-md group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#8B949E]">
              {isFa ? 'اقدامات راستی‌آزمایی حیاتی' : 'Critical Verification Tasks'}
            </span>
            <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition">
              <CheckSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#D4AF37] font-mono">{criticalTasksCount}</span>
            <span className="text-xs text-[#8B949E]">/ {openTasksCount} {isFa ? 'باز' : 'Open'}</span>
          </div>
          <span className="text-[11px] text-[#8B949E] mt-1 block">
            {isFa ? 'دروازه‌های ورود به سرمایه‌گذاری' : 'Investment Gate Blockers'}
          </span>
        </div>

      </div>

      {/* Main Grid: Critical Blockers & Core Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Critical Unknowns & Gating Blockers */}
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#30363D] pb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-sm font-bold text-[#E0E0E0]">
                {isFa ? 'دروازه‌های راستی‌آزمایی قبل از تخصیص سرمایه' : 'Investment Gating Blockers'}
              </h3>
            </div>
            <button
              onClick={() => onNavigate('verification')}
              className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
            >
              <span>{isFa ? 'مشاهده صف' : 'View Queue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {decision.gatingBlockers.map((blocker, idx) => (
              <div key={idx} className="bg-[#0A0C10] border border-[#D4AF37]/20 rounded-xl p-3.5 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#D4AF37] block">
                    {isFa ? `دروازه شماره ${idx + 1}` : `Gate #${idx + 1}`}
                  </span>
                  <p className="text-xs text-[#E0E0E0] leading-relaxed dir-auto">
                    {blocker}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Investment Drivers */}
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#30363D] pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-[#E0E0E0]">
                {isFa ? 'دلایل کلیدی تایید طرح (Investment Drivers)' : 'Key Investment Drivers'}
              </h3>
            </div>
            <button
              onClick={() => onNavigate('decision')}
              className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium"
            >
              <span>{isFa ? 'ماتریس تصمیم' : 'Decision Matrix'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {decision.keyReasons.map((reason, idx) => (
              <div key={idx} className="bg-[#0A0C10] border border-emerald-500/20 rounded-xl p-3.5 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs text-[#E0E0E0] leading-relaxed dir-auto">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Launchpad to Deep Research Sections */}
      <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6">
        <h3 className="text-sm font-bold text-[#E0E0E0] mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#D4AF37]" />
          <span>{isFa ? 'ابزارهای تحلیل تخصصی بازار' : 'Deep Analytical Workspaces'}</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <button
            onClick={() => onNavigate('decision_lab')}
            className="p-3.5 bg-[#0A0C10] border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl text-left transition group shadow-md"
          >
            <span className="text-xs font-bold text-[#D4AF37] group-hover:underline block mb-1 flex items-center gap-1">
              <FlaskConical className="w-3.5 h-3.5" />
              {isFa ? 'آزمایشگاه تصمیم' : 'Decision Lab'}
            </span>
            <span className="text-[11px] text-[#8B949E] block">
              {isFa ? 'تحلیل پایاپای فرآوری، اقامت، حمل و GTM' : 'Trade-off lab for core choices'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('supply_chain')}
            className="p-3.5 bg-[#0A0C10] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl text-left transition group"
          >
            <span className="text-xs font-bold text-[#E0E0E0] group-hover:text-[#D4AF37] block mb-1">
              🚢 {isFa ? 'شبیه‌ساز زنجیره تامین' : 'Supply Chain Sim'}
            </span>
            <span className="text-[11px] text-[#8B949E] block">
              {isFa ? 'مقایسه ۳ سناریوی صادرات مستقیم vs بسته در اروپا' : 'Compare 3 export scenarios & costs'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('countries')}
            className="p-3.5 bg-[#0A0C10] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl text-left transition group"
          >
            <span className="text-xs font-bold text-[#E0E0E0] group-hover:text-[#D4AF37] block mb-1">
              🌐 {isFa ? 'رتبه‌بندی بنادر اروپا' : 'EU Country Matrix'}
            </span>
            <span className="text-[11px] text-[#8B949E] block">
              {isFa ? 'ارزیابی هلند (روتردام)، آلمان و بلژیک' : 'Evaluate Netherlands, Germany, Belgium'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('competitors')}
            className="p-3.5 bg-[#0A0C10] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl text-left transition group"
          >
            <span className="text-xs font-bold text-[#E0E0E0] group-hover:text-[#D4AF37] block mb-1">
              🥊 {isFa ? 'قیمت‌گذاری و رقبا' : 'Competitor Benchmark'}
            </span>
            <span className="text-[11px] text-[#8B949E] block">
              {isFa ? 'مقایسه En-Tout-Cas, Porplast, Bricoterra' : 'Benchmark En-Tout-Cas, Porplast, Bricoterra'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('business_plan')}
            className="p-3.5 bg-[#0A0C10] border border-[#30363D] hover:border-[#D4AF37]/50 rounded-xl text-left transition group"
          >
            <span className="text-xs font-bold text-[#E0E0E0] group-hover:text-[#D4AF37] block mb-1">
              📄 {isFa ? 'طرح کسب‌وکار ۲۴ بخش' : '24-Section Business Plan'}
            </span>
            <span className="text-[11px] text-[#8B949E] block">
              {isFa ? 'دارای برچسب شواهد و خروجی Markdown' : 'Evidence-tagged & export ready'}
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};
