import React, { useState } from 'react';
import { ResearchDocument, Claim } from '../../types';
import { Inbox, FileText, Plus, Sparkles, Loader2, CheckCircle2, Tag, Calendar } from 'lucide-react';

interface ResearchInboxViewProps {
  documents: ResearchDocument[];
  onAddDocument: (doc: ResearchDocument, extractedClaims: Claim[]) => void;
  lang: 'fa' | 'en';
}

export const ResearchInboxView: React.FC<ResearchInboxViewProps> = ({
  documents,
  onAddDocument,
  lang
}) => {
  const isFa = lang === 'fa';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<ResearchDocument | null>(documents[0] || null);

  // Form State for Adding New AI Research Output
  const [title, setTitle] = useState('');
  const [modelName, setModelName] = useState('Gemini 3.6 Flash');
  const [sourceType, setSourceType] = useState<ResearchDocument['sourceType']>('AI_MODEL_OUTPUT');
  const [content, setContent] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractSuccess, setExtractSuccess] = useState<string | null>(null);

  const handleExtractAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsExtracting(true);
    setExtractSuccess(null);

    try {
      // Call Express server API for AI Claim Extraction
      const res = await fetch('/api/research/extract-claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentText: content,
          sourceTitle: title,
          modelName
        }),
      });

      const data = await res.json();
      const extractedRawClaims = data.claims || [];

      const docId = `DOC-${Date.now().toString().slice(-4)}`;

      // Map raw extracted claims to Claim interface
      const claimsToSave: Claim[] = extractedRawClaims.map((c: any, idx: number) => ({
        id: `CLM-EXT-${Date.now().toString().slice(-4)}-${idx}`,
        projectId: 'PRJ-IRAN-CLAY',
        documentId: docId,
        modelName,
        canonicalClaim: c.canonicalClaim || title,
        canonicalClaimFa: c.canonicalClaimFa,
        originalText: c.originalText || content.slice(0, 100),
        claimType: c.claimType || 'ESTIMATE',
        category: c.category || 'Product & Technical',
        geography: c.geography || 'Europe',
        numericValue: c.numericValue,
        unit: c.unit,
        sourceTier: c.sourceTier || (sourceType === 'PRIMARY_GOVT' ? 1 : 4),
        evidenceStatus: c.evidenceStatus || 'UNVERIFIED_CONSENSUS',
        confidenceScore: c.confidenceScore || 75,
        impactScore: c.impactScore || 4,
        verificationPriority: c.verificationPriority || 'HIGH',
        sourceTitle: title,
        createdAt: new Date().toISOString().split('T')[0]
      }));

      const newDoc: ResearchDocument = {
        id: docId,
        title,
        sourceType,
        modelName,
        authorPublisher: modelName,
        publicationDate: new Date().toISOString().split('T')[0],
        content,
        extractedClaimsCount: claimsToSave.length,
        tags: ['New Research', modelName]
      };

      onAddDocument(newDoc, claimsToSave);
      setExtractSuccess(`Extracted ${claimsToSave.length} atomic claims using Gemini AI!`);
      setSelectedDoc(newDoc);

      setTimeout(() => {
        setIsExtracting(false);
        setIsModalOpen(false);
        setTitle('');
        setContent('');
        setExtractSuccess(null);
      }, 1200);

    } catch (err: any) {
      console.error('Error extracting claims:', err);
      setIsExtracting(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Inbox className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">
              {isFa ? 'صندوق ورودی گزارشات و تحقیقات هوش مصنوعی' : 'Research Inbox & AI Model Outputs'}
            </h2>
            <p className="text-xs text-slate-400">
              {isFa ? 'ثبت و استخراج خودکار ادعاها از گزارشات Gemini, Claude, GPT-4, DeepSeek' : 'Import AI reports and run live Gemini claim extraction'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition shadow-md shadow-amber-900/20 self-start sm:self-center"
        >
          <Plus className="w-4 h-4" />
          <span>{isFa ? 'ورود گزارش جدید' : 'Import New AI Research'}</span>
        </button>
      </div>

      {/* Main Grid: Document List on Left, Viewer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Document List */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold text-slate-400 block px-1">
            {isFa ? `مستندات ثبت‌شده (${documents.length})` : `Imported Documents (${documents.length})`}
          </span>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {documents.map((doc) => {
              const isSelected = selectedDoc?.id === doc.id;
              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    isSelected
                      ? 'bg-slate-800 border-amber-500/50 shadow-md'
                      : 'bg-slate-900 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-200 line-clamp-1">{doc.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700 shrink-0 font-mono">
                      {doc.modelName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {doc.publicationDate}
                    </span>
                    <span className="text-emerald-400 font-mono font-medium">
                      {doc.extractedClaimsCount} {isFa ? 'ادعا' : 'claims'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Document Detail Viewer */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          {selectedDoc ? (
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-amber-400 font-mono block mb-1">
                    ID: {selectedDoc.id} | {selectedDoc.sourceType}
                  </span>
                  <h3 className="text-base font-bold text-slate-100">{selectedDoc.title}</h3>
                  <span className="text-xs text-slate-400 block mt-1">
                    Publisher: {selectedDoc.authorPublisher} ({selectedDoc.publicationDate})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    {selectedDoc.extractedClaimsCount} Claims Extracted
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {selectedDoc.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-amber-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Raw Content Viewer */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-wrap max-h-[450px] overflow-y-auto">
                {selectedDoc.content}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500 text-xs">
              {isFa ? 'لطفاً یک گزارش را برای مشاهده انتخاب کنید.' : 'Select a document from the list to view its raw contents.'}
            </div>
          )}
        </div>

      </div>

      {/* Modal: Import New AI Research Output */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isFa ? 'افزودن و استخراج هوشمند گزارش جدید' : 'Import AI Research Report for Extraction'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleExtractAndSave} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  {isFa ? 'عنوان گزارش:' : 'Report Title:'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., DeepSeek R1 - European Clay Freight & Logistics Cost Analysis"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">
                    {isFa ? 'نام مدل / منبع:' : 'Model Name / Source:'}
                  </label>
                  <select
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Gemini 3.6 Flash">Gemini 3.6 Flash</option>
                    <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet</option>
                    <option value="GPT-4o">GPT-4o</option>
                    <option value="DeepSeek R1">DeepSeek R1</option>
                    <option value="Llama 3.3">Llama 3.3</option>
                    <option value="Human Geological Expert">Human Expert Research</option>
                    <option value="ITF Official Regulation">ITF Official / Government</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">
                    {isFa ? 'نوع منبع:' : 'Source Type:'}
                  </label>
                  <select
                    value={sourceType}
                    onChange={(e) => setSourceType(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="AI_MODEL_OUTPUT">AI Model Output (Tier 4)</option>
                    <option value="HUMAN_EXPERT">Human Expert (Tier 2)</option>
                    <option value="PRIMARY_GOVT_CUSTOMS">Primary Customs / Govt (Tier 1)</option>
                    <option value="ITF_OFFICIAL_REGULATION">ITF Regulation (Tier 1)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  {isFa ? 'متن کامل گزارش برای استخراج ادعاها:' : 'Raw Research Text for Claim Extraction:'}
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Paste the full text output from Gemini, Claude, GPT-4, or research notes here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 font-mono focus:outline-none focus:border-amber-500"
                />
              </div>

              {extractSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{extractSuccess}</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium"
                >
                  {isFa ? 'انصراف' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  disabled={isExtracting}
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition disabled:opacity-50"
                >
                  {isExtracting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isFa ? 'در حال استخراج با Gemini AI...' : 'Extracting Claims via Gemini AI...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{isFa ? 'استخراج ادعاها و ذخیره' : 'Extract Atomic Claims & Save'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
