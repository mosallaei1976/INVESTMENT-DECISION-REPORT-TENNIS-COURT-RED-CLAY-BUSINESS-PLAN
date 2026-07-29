import React, { useState } from 'react';
import { VerificationTask } from '../../types';
import { CheckSquare, CheckCircle2, Clock, AlertTriangle, Plus, Filter } from 'lucide-react';

interface VerificationQueueViewProps {
  tasks: VerificationTask[];
  onUpdateTaskStatus: (taskId: string, newStatus: VerificationTask['status'], resultNotes?: string) => void;
  lang: 'fa' | 'en';
}

export const VerificationQueueView: React.FC<VerificationQueueViewProps> = ({
  tasks,
  onUpdateTaskStatus,
  lang
}) => {
  const isFa = lang === 'fa';
  const [selectedPriority, setSelectedPriority] = useState<string>('ALL');

  const filteredTasks = tasks.filter(t => selectedPriority === 'ALL' || t.priority === selectedPriority);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                {isFa ? 'صف راستی‌آزمایی شواهد (Verification Queue)' : 'Critical Verification Queue'}
              </h2>
              <p className="text-xs text-slate-400">
                {isFa ? 'اقدامات اولویت‌بندی شده بر اساس اهمیت و ابهام جهت لغو تعلیق تصمیم سرمایه‌گذاری' : 'Prioritized research tasks designed to satisfy investment gating conditions'}
              </p>
            </div>
          </div>

          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 self-start sm:self-center"
          >
            <option value="ALL">{isFa ? 'همه اولویت‌ها' : 'All Priorities'}</option>
            <option value="CRITICAL">CRITICAL (حیاتی)</option>
            <option value="HIGH">HIGH (بالا)</option>
            <option value="MEDIUM">MEDIUM (متوسط)</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 font-bold">{task.id}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                  task.priority === 'CRITICAL' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  PRIORITY: {task.priority}
                </span>
              </div>

              <span className={`px-3 py-1 rounded-lg border text-xs font-bold font-mono self-start sm:self-center ${
                task.status === 'VERIFIED'
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
              }`}>
                STATUS: {task.status}
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-100 leading-relaxed dir-auto">
              {isFa && task.questionFa ? task.questionFa : task.question}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block">{isFa ? 'نوع منبع مورد نیاز:' : 'Required Source Type:'}</span>
                <span className="text-slate-300 font-medium">{task.requiredSourceType}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{isFa ? 'مسئول پیگیری:' : 'Assigned Agent:'}</span>
                <span className="text-amber-400 font-medium">{task.assignedTo || 'Mohammad / Legal Counsel'}</span>
              </div>
            </div>

            {task.result && (
              <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs space-y-1">
                <span className="font-bold text-emerald-400 block">{isFa ? 'نتیجه راستی‌آزمایی:' : 'Verification Finding:'}</span>
                <p className="text-slate-300">{task.result}</p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-2 pt-2">
              {task.status !== 'VERIFIED' && (
                <button
                  onClick={() => onUpdateTaskStatus(task.id, 'VERIFIED', 'Verified by primary source document.')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isFa ? 'علامت‌گذاری به عنوان تایید شده' : 'Mark as Verified'}</span>
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
