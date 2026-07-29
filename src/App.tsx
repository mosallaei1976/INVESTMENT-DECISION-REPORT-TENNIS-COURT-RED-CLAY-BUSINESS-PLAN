import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation, NavTab } from './components/Navigation';

// Domain Views
import { DashboardView } from './components/views/DashboardView';
import { ProjectOverviewView } from './components/views/ProjectOverviewView';
import { ResearchInboxView } from './components/views/ResearchInboxView';
import { ClaimLedgerView } from './components/views/ClaimLedgerView';
import { ModelComparisonView } from './components/views/ModelComparisonView';
import { ConsensusView } from './components/views/ConsensusView';
import { ContradictionCenterView } from './components/views/ContradictionCenterView';
import { VerificationQueueView } from './components/views/VerificationQueueView';
import { CountryRankingView } from './components/views/CountryRankingView';
import { SupplyChainSimulatorView } from './components/views/SupplyChainSimulatorView';
import { CompetitorBenchmarkView } from './components/views/CompetitorBenchmarkView';
import { UnitEconomicsView } from './components/views/UnitEconomicsView';
import { RiskRegisterView } from './components/views/RiskRegisterView';
import { DecisionMatrixView } from './components/views/DecisionMatrixView';
import { DecisionLabView } from './components/views/DecisionLabView';
import { BusinessPlanView } from './components/views/BusinessPlanView';

// Seed Data
import {
  INITIAL_DECISION_CRITERIA,
  INITIAL_INVESTMENT_DECISION,
  INITIAL_RESEARCH_DOCUMENTS,
  INITIAL_CLAIMS,
  INITIAL_CONSENSUS_CLUSTERS,
  INITIAL_CONTRADICTIONS,
  INITIAL_VERIFICATION_QUEUE,
  INITIAL_COUNTRY_RANKINGS,
  INITIAL_SUPPLY_CHAIN_SCENARIOS,
  INITIAL_COMPETITORS,
  INITIAL_RISK_REGISTER,
  INITIAL_BUSINESS_PLAN_SECTIONS,
  INITIAL_DECISION_LAB_OPTIONS
} from './data/initialData';

import {
  ResearchDocument,
  Claim,
  VerificationTask,
  DecisionCriterion,
  InvestmentDecision
} from './types';

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');

  // Application Dynamic State
  const [decision, setDecision] = useState<InvestmentDecision>(INITIAL_INVESTMENT_DECISION);
  const [criteria, setCriteria] = useState<DecisionCriterion[]>(INITIAL_DECISION_CRITERIA);
  const [documents, setDocuments] = useState<ResearchDocument[]>(INITIAL_RESEARCH_DOCUMENTS);
  const [claims, setClaims] = useState<Claim[]>(INITIAL_CLAIMS);
  const [verificationTasks, setVerificationTasks] = useState<VerificationTask[]>(INITIAL_VERIFICATION_QUEUE);

  // Sync document direction (RTL / LTR) and language tag
  React.useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Add new document & claims from AI research extraction
  const handleAddDocument = (newDoc: ResearchDocument, extractedClaims: Claim[]) => {
    setDocuments(prev => [newDoc, ...prev]);
    setClaims(prev => [...extractedClaims, ...prev]);
  };

  // Update verification task status
  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: VerificationTask['status'],
    resultNotes?: string
  ) => {
    setVerificationTasks(prev =>
      prev.map(t =>
        t.id === taskId
          ? { ...t, status: newStatus, result: resultNotes || t.result, verifiedDate: new Date().toISOString().split('T')[0] }
          : t
      )
    );
  };

  // Update decision criteria weights & recalculate overall decision
  const handleUpdateCriteria = (updatedCriteria: DecisionCriterion[]) => {
    setCriteria(updatedCriteria);

    const totalWeightedScore = updatedCriteria.reduce((sum, c) => sum + (c.score * (c.weight / 100)), 0);
    const totalWeightedConfidence = updatedCriteria.reduce((sum, c) => sum + (c.confidence * (c.weight / 100)), 0);

    const newState =
      totalWeightedScore >= 75 && totalWeightedConfidence >= 80
        ? 'GO'
        : totalWeightedScore >= 60 && totalWeightedConfidence >= 60
        ? 'CONDITIONAL_GO'
        : 'NO_GO';

    setDecision(prev => ({
      ...prev,
      overallScore: totalWeightedScore,
      overallConfidence: totalWeightedConfidence,
      state: newState,
      lastUpdated: new Date().toISOString().split('T')[0]
    }));
  };

  // Export Full Investment Report to Markdown
  const handleExportMarkdown = () => {
    let md = `# INVESTMENT DECISION REPORT & EUROPEAN BUSINESS PLAN
**Project:** Iranian Red Clay Tennis Surface Export to EU
**Founder:** Mohammad (Iran Sourcing & Dutch B.V. Hub)
**Date:** ${new Date().toISOString().split('T')[0]}
**Decision State:** ${decision.state}
**Overall Score:** ${decision.overallScore.toFixed(1)} / 100 (Confidence: ${decision.overallConfidence.toFixed(1)}%)

---

## EXECUTIVE SUMMARY
${decision.executiveSummary}

---

## INVESTMENT DECISION MATRIX SCORE BREAKDOWN
| ID | Criterion | Weight | Score | Confidence |
|---|---|---|---|---|
${criteria.map(c => `| ${c.id} | ${c.name} | ${c.weight}% | ${c.score}/100 | ${c.confidence}% |`).join('\n')}

---

## EUROPEAN BUSINESS PLAN (24 SECTIONS)

`;

    INITIAL_BUSINESS_PLAN_SECTIONS.forEach(sec => {
      md += `### Section ${sec.titleNumber}: ${sec.titleEn} [${sec.evidenceTag}]\n\n${sec.contentMarkdown}\n\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Mohammad_Clay_Tennis_Investment_Report_${Date.now()}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Full System State to JSON
  const handleExportJSON = () => {
    const data = {
      decision,
      criteria,
      documents,
      claims,
      verificationTasks,
      countryRankings: INITIAL_COUNTRY_RANKINGS,
      supplyChainScenarios: INITIAL_SUPPLY_CHAIN_SCENARIOS,
      competitors: INITIAL_COMPETITORS,
      risks: INITIAL_RISK_REGISTER,
      businessPlanSections: INITIAL_BUSINESS_PLAN_SECTIONS
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Mohammad_Clay_Cockpit_Data_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isFa = lang === 'fa';

  return (
    <div className={`min-h-screen bg-[#0A0C10] text-[#E0E0E0] font-sans antialiased ${isFa ? 'dir-rtl' : 'dir-ltr'}`}>
      
      {/* Persistent Header */}
      <Header
        decision={decision}
        lang={lang}
        setLang={setLang}
        onExportMarkdown={handleExportMarkdown}
        onExportJSON={handleExportJSON}
        activeTab={activeTab}
      />

      {/* Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        counts={{
          documents: documents.length,
          claims: claims.length,
          contradictions: INITIAL_CONTRADICTIONS.length,
          verificationTasks: verificationTasks.filter(t => t.status === 'OPEN' || t.status === 'IN_PROGRESS').length
        }}
      />

      {/* Main View Area */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {activeTab === 'dashboard' && (
          <DashboardView
            decision={decision}
            documents={documents}
            claims={claims}
            contradictions={INITIAL_CONTRADICTIONS}
            verificationTasks={verificationTasks}
            lang={lang}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'project' && (
          <ProjectOverviewView lang={lang} />
        )}

        {activeTab === 'inbox' && (
          <ResearchInboxView
            documents={documents}
            onAddDocument={handleAddDocument}
            lang={lang}
          />
        )}

        {activeTab === 'claims' && (
          <ClaimLedgerView
            claims={claims}
            lang={lang}
          />
        )}

        {activeTab === 'consensus' && (
          <ConsensusView
            clusters={INITIAL_CONSENSUS_CLUSTERS}
            lang={lang}
          />
        )}

        {activeTab === 'contradictions' && (
          <ContradictionCenterView
            contradictions={INITIAL_CONTRADICTIONS}
            lang={lang}
          />
        )}

        {activeTab === 'verification' && (
          <VerificationQueueView
            tasks={verificationTasks}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            lang={lang}
          />
        )}

        {activeTab === 'countries' && (
          <CountryRankingView
            rankings={INITIAL_COUNTRY_RANKINGS}
            lang={lang}
          />
        )}

        {activeTab === 'supply_chain' && (
          <SupplyChainSimulatorView
            scenarios={INITIAL_SUPPLY_CHAIN_SCENARIOS}
            lang={lang}
          />
        )}

        {activeTab === 'competitors' && (
          <CompetitorBenchmarkView
            competitors={INITIAL_COMPETITORS}
            lang={lang}
          />
        )}

        {activeTab === 'economics' && (
          <UnitEconomicsView
            lang={lang}
          />
        )}

        {activeTab === 'risks' && (
          <RiskRegisterView
            risks={INITIAL_RISK_REGISTER}
            lang={lang}
          />
        )}

        {activeTab === 'decision' && (
          <DecisionMatrixView
            criteria={criteria}
            decision={decision}
            onUpdateCriteria={handleUpdateCriteria}
            lang={lang}
          />
        )}

        {activeTab === 'decision_lab' && (
          <DecisionLabView
            options={INITIAL_DECISION_LAB_OPTIONS}
            claims={claims}
            lang={lang}
          />
        )}

        {activeTab === 'business_plan' && (
          <BusinessPlanView
            sections={INITIAL_BUSINESS_PLAN_SECTIONS}
            lang={lang}
            onExportMarkdown={handleExportMarkdown}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2D333B] bg-[#0D1117] py-6 text-center text-xs text-[#8B949E] font-mono">
        <p>Clay Tennis Court Investment Cockpit | Mohammad (Iran Sourcing & EU Export)</p>
        <p className="text-[11px] text-[#8B949E]/70 mt-1">
          Strict Evidence Rule: AI text is Tier 4. Primary physical & legal sources required for GATE clearance.
        </p>
      </footer>

    </div>
  );
}
