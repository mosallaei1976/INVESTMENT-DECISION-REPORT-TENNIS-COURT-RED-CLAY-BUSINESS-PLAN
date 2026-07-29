import React from 'react';
import { Mail, Youtube, Linkedin, Github, Send, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'fa' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  return (
    <footer className="border-t border-[#2D333B] bg-[#0D1117] py-8 px-4 lg:px-8 mt-12 no-print">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header & Branding */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#30363D]">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#D4AF37] tracking-wide dir-auto">
              Clay Tennis Court Investment Cockpit | Mohammad Mosallaei (Iran Sourcing & EU Export)
            </h3>
            <p className="text-xs text-[#8B949E] dir-auto">
              {isFa
                ? 'اتاق تحقیق اختصاصی محمد مصلایی | صادرات خاک رس ایران به اروپا'
                : 'Mohammad Mosallaei\'s Private Research Cockpit | Iranian Clay Export to EU'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#8B949E] font-mono bg-[#161B22] px-3 py-1.5 rounded-lg border border-[#30363D]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isFa ? 'ارزیابی مستقل داده‌محور' : 'Independent Data-Driven Analysis'}</span>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div>
          <h4 className="text-xs font-bold text-[#8B949E] uppercase tracking-wider mb-3 dir-auto">
            {isFa ? 'راه‌های ارتباط با بنیان‌گذار (محمد مصلایی)' : 'Founder Contact Channels (Mohammad Mosallaei)'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Email */}
            <a
              href="mailto:mosallaei@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] border border-[#30363D] hover:border-[#D4AF37] rounded-xl flex items-center gap-2.5 text-xs text-[#E0E0E0] transition group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C10] text-[#D4AF37] group-hover:scale-110 transition">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#8B949E] block">E-mail</span>
                <span className="font-mono font-bold text-[#E0E0E0] group-hover:text-[#D4AF37] truncate block">mosallaei@gmail.com</span>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@mosallaei.architect"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] border border-[#30363D] hover:border-red-500 rounded-xl flex items-center gap-2.5 text-xs text-[#E0E0E0] transition group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C10] text-red-400 group-hover:scale-110 transition">
                <Youtube className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#8B949E] block">YouTube</span>
                <span className="font-mono font-bold text-[#E0E0E0] group-hover:text-red-400 truncate block">@mosallaei.architect</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamad-mosallaei/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] border border-[#30363D] hover:border-blue-400 rounded-xl flex items-center gap-2.5 text-xs text-[#E0E0E0] transition group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C10] text-blue-400 group-hover:scale-110 transition">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#8B949E] block">LinkedIn</span>
                <span className="font-mono font-bold text-[#E0E0E0] group-hover:text-blue-400 truncate block">mohamad-mosallaei</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mosallaei1976"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] border border-[#30363D] hover:border-purple-400 rounded-xl flex items-center gap-2.5 text-xs text-[#E0E0E0] transition group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C10] text-purple-400 group-hover:scale-110 transition">
                <Github className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#8B949E] block">GitHub</span>
                <span className="font-mono font-bold text-[#E0E0E0] group-hover:text-purple-400 truncate block">mosallaei1976</span>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/msli1976"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] border border-[#30363D] hover:border-cyan-400 rounded-xl flex items-center gap-2.5 text-xs text-[#E0E0E0] transition group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C10] text-cyan-400 group-hover:scale-110 transition">
                <Send className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#8B949E] block">Telegram</span>
                <span className="font-mono font-bold text-[#E0E0E0] group-hover:text-cyan-400 truncate block">t.me/msli1976</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-4 border-t border-[#30363D]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8B949E] gap-2 font-mono">
          <p dir="auto">
            Strict Evidence Rule: AI text is Tier 4. Primary physical & legal sources required for GATE clearance.
          </p>
          <p className="flex items-center gap-1">
            <span>Clay Tennis Court Investment Cockpit © {new Date().getFullYear()}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
