import React, { useState } from 'react';
import { DecisionCriterion, InvestmentDecision } from '../../types';
import { Target, Sliders, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

interface DecisionMatrixViewProps {
  criteria: DecisionCriterion[];
  decision: InvestmentDecision;
  onUpdateCriteria: (updatedCriteria: DecisionCriterion[]) => void;
  lang: 'fa' | 'en';
}

export const DecisionMatrixView: React.FC<DecisionMatrixViewProps> = ({
  criteria: initialCriteria,
  decision,
  onUpdateCriteria,
  lang
}) => {
  const isFa = lang === 'fa';
  const [criteria, setCriteria] = useState<DecisionCriterion[]>(initialCriteria);

  const handleScoreChange = (id: string, newScore: number) => {
    const updated = criteria.map(c => c.id === id ? { ...c, score: newScore } : c);
    setCriteria(updated);
    onUpdateCriteria(updated);
  };

  const handleConfidenceChange = (id: string, newConfidence: number) => {
    const updated = criteria.map(c => c.id === id ? { ...c, confidence: newConfidence } : c);
    setCriteria(updated);
    onUpdateCriteria(updated);
  };

  const totalWeightedScore = criteria.reduce((sum, c) => sum + (c.score * (c.weight / 100)), 0);
  const totalWeightedConfidence = criteria.reduce((sum, c) => sum + (c.confidence * (c.weight / 100)), 0);

  const calculatedState =
    totalWeightedScore >= 75 && totalWeightedConfidence >= 80
      ? 'GO'
      : totalWeightedScore >= 60 && totalWeightedConfidence >= 60
      ? 'CONDITIONAL_GO'
      : 'NO_GO';

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-[#0D1117] border border-[#2D333B] rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2D333B] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#D4AF37]">
                {isFa ? 'ماتریس تعاملی تصمیم‌گیری سرمایه‌گذاری (Investment Decision Engine)' : 'Interactive Investment Decision Matrix'}
              </h2>
              <p className="text-xs text-[#8B949E]">
                {isFa ? 'محاسبه شفاف امتیاز جذابیت و اطمینان بر اساس ۸ معیار کلیدی سرمایه‌گذاری' : 'Traceable 0-100 scoring engine with separate score and confidence sliders'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-center bg-[#0A0C10] p-3 rounded-xl border border-[#30363D] min-w-[120px]">
              <span className="text-[10px] text-[#8B949E] block">{isFa ? 'امتیاز کل موزون' : 'Weighted Score'}</span>
              <span className="text-2xl font-black text-[#D4AF37] font-mono">{totalWeightedScore.toFixed(1)} / 100</span>
            </div>

            <div className="text-center bg-[#0A0C10] p-3 rounded-xl border border-[#30363D] min-w-[120px]">
              <span className="text-[10px] text-[#8B949E] block">{isFa ? 'سطح اطمینان موزون' : 'Weighted Confidence'}</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{totalWeightedConfidence.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Calculated Decision Recommendation Banner */}
        <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
          calculatedState === 'GO' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' :
          calculatedState === 'CONDITIONAL_GO' ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]' :
          'bg-rose-500/10 border-rose-500/30 text-rose-300'
        }`}>
          <div className="flex items-center gap-3">
            {calculatedState === 'CONDITIONAL_GO' && <AlertTriangle className="w-6 h-6 shrink-0" />}
            {calculatedState === 'GO' && <CheckCircle2 className="w-6 h-6 shrink-0" />}
            <div>
              <span className="text-xs font-bold font-mono block">
                {isFa ? 'خروجی الگوریتم تصمیم سرمایه‌گذاری:' : 'Calculated Investment Recommendation:'}
              </span>
              <span className="text-base font-black uppercase tracking-wider">
                {calculatedState} - {calculatedState === 'CONDITIONAL_GO' ? (isFa ? 'تایید مشروط (نیاز به تکمیل دروازه‌های راستی‌آزمایی)' : 'Conditional Approval (Requires satisfying gate conditions)') : calculatedState}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Criteria Sliders List */}
      <div className="space-y-4">
        {criteria.map((item) => (
          <div key={item.id} className="bg-[#161B22] border border-[#30363D] rounded-2xl p-5 space-y-4 shadow-md">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] font-bold block mb-0.5">{item.id} (Weight: {item.weight}%)</span>
                <h3 className="text-sm font-bold text-[#E0E0E0]">
                  {isFa && item.nameFa ? item.nameFa : item.name}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#8B949E] block">{isFa ? 'امتیاز جذابیت:' : 'Attractiveness:'}</span>
                  <span className="text-[#D4AF37] font-bold text-base">{item.score} / 100</span>
                </div>
                <div>
                  <span className="text-[#8B949E] block">{isFa ? 'اطمینان شواهد:' : 'Confidence:'}</span>
                  <span className="text-emerald-400 font-bold text-base">{item.confidence}%</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#E0E0E0] leading-relaxed dir-auto">
              {item.keyFindings}
            </p>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0A0C10] p-4 rounded-xl border border-[#30363D]">
              
              {/* Score Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#8B949E]">
                  <span>{isFa ? 'امتیاز امکان‌پذیری / جذابیت:' : 'Feasibility / Attractiveness Score:'}</span>
                  <span className="text-[#D4AF37] font-bold">{item.score}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={item.score}
                  onChange={(e) => handleScoreChange(item.id, Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              {/* Confidence Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#8B949E]">
                  <span>{isFa ? 'سطح اطمینان از صحت شواهد:' : 'Evidence Confidence Level:'}</span>
                  <span className="text-emerald-400 font-bold">{item.confidence}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={item.confidence}
                  onChange={(e) => handleConfidenceChange(item.id, Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

            </div>

            {/* Critical Gaps Tag */}
            {item.criticalGaps && item.criticalGaps.length > 0 && (
              <div className="text-[11px] text-[#8B949E] flex items-start gap-2 pt-1">
                <span className="text-[#D4AF37] font-bold shrink-0">{isFa ? 'کمبودهای کلیدی:' : 'Critical Gaps:'}</span>
                <span className="text-[#E0E0E0] font-sans">{item.criticalGaps.join('; ')}</span>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};
