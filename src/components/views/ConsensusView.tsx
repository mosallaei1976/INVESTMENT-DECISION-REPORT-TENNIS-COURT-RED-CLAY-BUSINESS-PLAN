import React from 'react';
import { ConsensusCluster } from '../../types';
import { Users, AlertTriangle, CheckCircle2, HelpCircle, ShieldAlert } from 'lucide-react';

interface ConsensusViewProps {
  clusters: ConsensusCluster[];
  lang: 'fa' | 'en';
}

export const ConsensusView: React.FC<ConsensusViewProps> = ({ clusters, lang }) => {
  const isFa = lang === 'fa';

  const getConsensusBadgeStyle = (type: ConsensusCluster['consensusType']) => {
    switch (type) {
      case 'VERIFIED_CONSENSUS':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'STRONG_SUPPORTED':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'UNVERIFIED_AI_CONSENSUS':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'CONFLICTED':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/15 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'نقشه اجماع و همگرایی مدل‌ها (Consensus Map)' : 'Consensus & Convergence Map'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'تفکیک اجماع تاییدشده با سند اولیه از تکرار صرف در مدل‌های هوش مصنوعی' : 'Distinguishing primary-backed consensus from unverified AI repetition'}
            </p>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-300">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {isFa
            ? 'هشدار مهم: تکرار یک ادعا در چندین مدل هوش مصنوعی (AI Consensus) به تنهایی به معنای صحت آن نیست. تکرار بدون ارائه سند اولیه همواره تحت عنوان "اجماع بدون سند (Unverified AI Consensus)" دسته‌بندی می‌شود.'
            : 'Core Rule: Repetition of the same statement across multiple AI models is NOT independent corroboration. AI consensus without primary physical/legal evidence remains classified as "Unverified AI Consensus".'}
        </p>
      </div>

      {/* Consensus Clusters List */}
      <div className="space-y-4">
        {clusters.map((cluster) => (
          <div key={cluster.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 font-bold">{cluster.id}</span>
                <h3 className="text-sm font-bold text-slate-100">
                  {isFa && cluster.topicFa ? cluster.topicFa : cluster.topic}
                </h3>
              </div>

              <span className={`px-3 py-1 rounded-lg border text-xs font-bold font-mono self-start sm:self-center ${getConsensusBadgeStyle(cluster.consensusType)}`}>
                {cluster.consensusType}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed dir-auto">
              {isFa && cluster.summaryFa ? cluster.summaryFa : cluster.summary}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">{isFa ? 'مدل‌های پشتیبان:' : 'Supporting Models:'}</span>
                <span className="text-slate-200 font-bold">{cluster.modelsSupporting.join(', ')}</span>
              </div>

              <div className="flex items-center gap-4">
                <span>{isFa ? 'اسناد اولیه مستقل:' : 'Primary Sources:'} <strong className="text-emerald-400">{cluster.independentSourceCount}</strong></span>
                <span>{isFa ? 'تناقضات:' : 'Contradictions:'} <strong className="text-rose-400">{cluster.contradictionCount}</strong></span>
                <span>{isFa ? 'اطمینان:' : 'Confidence:'} <strong className="text-amber-400">{cluster.confidenceScore}%</strong></span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
