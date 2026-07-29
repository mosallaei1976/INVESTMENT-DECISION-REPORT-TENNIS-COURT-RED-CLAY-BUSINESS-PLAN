import React from 'react';
import { InvestmentDecision } from '../types';
import { ShieldCheck, AlertTriangle, FileText, Download, CheckCircle, Clock, Layers } from 'lucide-react';

interface HeaderProps {
  decision: InvestmentDecision;
  lang: 'fa' | 'en';
  setLang: (l: 'fa' | 'en') => void;
  onExportMarkdown: () => void;
  onExportJSON: () => void;
  activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({
  decision,
  lang,
  setLang,
  onExportMarkdown,
  onExportJSON,
}) => {
  const isFa = lang === 'fa';

  const getBadgeStyle = (state: string) => {
    switch (state) {
      case 'GO':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'CONDITIONAL_GO':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'NO_GO':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  const getStateLabel = (state: string) => {
    switch (state) {
      case 'GO':
        return isFa ? 'تصمیم: تایید نهایی (GO)' : 'DECISION: GO';
      case 'CONDITIONAL_GO':
        return isFa ? 'تصمیم: تایید مشروط (CONDITIONAL GO)' : 'DECISION: CONDITIONAL GO';
      case 'NO_GO':
        return isFa ? 'تصمیم: عدم تایید (NO-GO)' : 'DECISION: NO-GO';
      default:
        return isFa ? 'تصمیم: در انتظار راستی‌آزمایی' : 'DECISION: PENDING';
    }
  };

  return (
    <header className="bg-[#0D1117] border-b border-[#2D333B] sticky top-0 z-50 backdrop-blur-md px-4 lg:px-8 py-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto">
        
        {/* Left: Branding & User Context */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center text-[#0A0C10] font-black text-sm shadow-lg shadow-amber-950/40 border border-[#D4AF37]/40">
            IA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-[#D4AF37] tracking-tight">
                {isFa ? 'ماتریس تصمیم‌گیری سرمایه‌گذاری خاک تنیس' : 'Clay Court Investment Decision Matrix'}
              </h1>
              <span className="text-xs px-2 py-0.5 rounded bg-[#161B22] text-[#8B949E] border border-[#30363D] font-mono">
                v1.4
              </span>
            </div>
            <p className="text-xs text-[#8B949E]">
              {isFa
                ? 'اتاق تحقیق اختصاصی محمد | صادرات خاک رس ایران به اروپا'
                : 'Mohammad\'s Private Research Cockpit | Iranian Clay Export to EU'}
            </p>
          </div>
        </div>

        {/* Center: Decision Status Indicator & Evidence Bar */}
        <div className="flex items-center gap-4 bg-[#161B22] p-2 rounded-xl border border-[#30363D]">
          <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 ${getBadgeStyle(decision.state)}`}>
            {decision.state === 'CONDITIONAL_GO' && <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />}
            {decision.state === 'GO' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
            {decision.state === 'DECISION_PENDING' && <Clock className="w-4 h-4 text-[#8B949E]" />}
            <span>{getStateLabel(decision.state)}</span>
          </div>

          <div className="hidden sm:flex flex-col gap-1 min-w-[140px]">
            <div className="flex justify-between text-[11px] text-[#8B949E] font-mono">
              <span>{isFa ? 'پوشش ادعاها' : 'Evidence Coverage'}</span>
              <span className="text-[#D4AF37] font-semibold">{decision.evidenceCoveragePct}%</span>
            </div>
            <div className="w-full bg-[#0A0C10] rounded-full h-1.5 overflow-hidden border border-[#30363D]">
              <div
                className="bg-[#D4AF37] h-full rounded-full transition-all duration-500"
                style={{ width: `${decision.evidenceCoveragePct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Controls, Language & Export */}
        <div className="flex items-center gap-2 self-end md:self-center">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(isFa ? 'en' : 'fa')}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#161B22] text-[#E0E0E0] hover:bg-[#1C2128] transition border border-[#30363D] flex items-center gap-1.5"
            title="Toggle Language / RTL"
          >
            <span className="font-bold text-[#D4AF37]">{isFa ? 'EN' : 'فا'}</span>
            <span>{isFa ? 'English' : 'فارسی'}</span>
          </button>

          {/* Export Menu */}
          <div className="relative group">
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#D4AF37] hover:bg-amber-400 text-[#0A0C10] font-bold transition flex items-center gap-1.5 shadow-md shadow-amber-950/30">
              <Download className="w-3.5 h-3.5" />
              <span>{isFa ? 'خروجی گزارش' : 'Export Report'}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-[#0D1117] border border-[#2D333B] rounded-xl shadow-xl hidden group-hover:block p-1.5 z-50">
              <button
                onClick={onExportMarkdown}
                className="w-full text-left px-3 py-2 text-xs text-[#E0E0E0] hover:bg-[#161B22] rounded-lg flex items-center gap-2 transition"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Export Markdown (.md)</span>
              </button>
              <button
                onClick={onExportJSON}
                className="w-full text-left px-3 py-2 text-xs text-[#E0E0E0] hover:bg-[#161B22] rounded-lg flex items-center gap-2 transition"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Export JSON Data (.json)</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
