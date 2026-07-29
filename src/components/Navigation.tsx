import React from 'react';
import {
  LayoutDashboard,
  FileSpreadsheet,
  Inbox,
  ListFilter,
  Users,
  AlertOctagon,
  CheckSquare,
  Globe2,
  Ship,
  Swords,
  TrendingUp,
  ShieldAlert,
  Target,
  BookOpen,
  FlaskConical
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'project'
  | 'inbox'
  | 'claims'
  | 'consensus'
  | 'contradictions'
  | 'verification'
  | 'countries'
  | 'supply_chain'
  | 'competitors'
  | 'economics'
  | 'risks'
  | 'decision'
  | 'decision_lab'
  | 'business_plan';

interface NavigationProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  lang: 'fa' | 'en';
  counts: {
    documents: number;
    claims: number;
    contradictions: number;
    verificationTasks: number;
  };
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  lang,
  counts
}) => {
  const isFa = lang === 'fa';

  const navItems = [
    { id: 'dashboard', label: isFa ? 'داشبورد اجرایی' : 'Dashboard', icon: LayoutDashboard },
    { id: 'project', label: isFa ? 'اطلاعات پروژه' : 'Project Scope', icon: FileSpreadsheet },
    { id: 'inbox', label: isFa ? 'صندوق تحقیقات' : 'Research Inbox', icon: Inbox, count: counts.documents },
    { id: 'claims', label: isFa ? 'دفتر ادعاها' : 'Claim Ledger', icon: ListFilter, count: counts.claims },
    { id: 'consensus', label: isFa ? 'اجماع مدل‌ها' : 'Model Consensus', icon: Users },
    { id: 'contradictions', label: isFa ? 'مرکز تناقضات' : 'Contradictions', icon: AlertOctagon, count: counts.contradictions, badgeColor: 'bg-rose-500/20 text-rose-300' },
    { id: 'verification', label: isFa ? 'صف راستی‌آزمایی' : 'Verification Queue', icon: CheckSquare, count: counts.verificationTasks, badgeColor: 'bg-amber-500/20 text-amber-300' },
    { id: 'countries', label: isFa ? 'رتبه‌بندی کشورها' : 'Country Ranking', icon: Globe2 },
    { id: 'supply_chain', label: isFa ? 'شبیه‌ساز زنجیره تامین' : 'Supply Chain Sim', icon: Ship },
    { id: 'competitors', label: isFa ? 'تحلیل رقبا' : 'Competitors', icon: Swords },
    { id: 'economics', label: isFa ? 'اقتصاد واحد' : 'Unit Economics', icon: TrendingUp },
    { id: 'risks', label: isFa ? 'ریسک و تحریم' : 'Risk & Sanctions', icon: ShieldAlert },
    { id: 'decision', label: isFa ? 'ماتریس تصمیم' : 'Decision Matrix', icon: Target },
    { id: 'decision_lab', label: isFa ? 'آزمایشگاه تصمیم' : 'Decision Lab', icon: FlaskConical },
    { id: 'business_plan', label: isFa ? 'طرح کسب‌وکار اروپا' : 'Business Plan', icon: BookOpen },
  ];

  return (
    <nav className="bg-[#0D1117] border-b border-[#2D333B] px-4 overflow-x-auto scrollbar-thin">
      <div className="flex space-x-1 min-w-max py-2 max-w-7xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as NavTab)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#161B22] text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm'
                  : 'text-[#8B949E] hover:text-[#E0E0E0] hover:bg-[#161B22]/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-[#8B949E]'}`} />
              <span>{item.label}</span>
              {typeof item.count === 'number' && item.count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    item.badgeColor || 'bg-[#161B22] text-[#8B949E] border border-[#30363D]'
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
