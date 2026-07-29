/**
 * Types and Interfaces for Iranian Clay Tennis Court Surface
 * Investment Decision Matrix & European Market Entry Research Cockpit
 */

export type ClaimType = 
  | 'FACT' 
  | 'ESTIMATE' 
  | 'ASSUMPTION' 
  | 'OPINION' 
  | 'RECOMMENDATION' 
  | 'UNKNOWN';

export type EvidenceStatus = 
  | 'VERIFIED' 
  | 'SUPPORTED' 
  | 'UNVERIFIED_CONSENSUS' 
  | 'SINGLE_SOURCE' 
  | 'CONFLICTED' 
  | 'REJECTED' 
  | 'PENDING';

export type SourceTier = 1 | 2 | 3 | 4; // 1: Govt/ITF/EU, 2: Industry Assoc, 3: Media, 4: AI/Blog

export type ClaimCategory = 
  | 'Product & Technical'
  | 'ITF & Standards'
  | 'Raw Materials'
  | 'Processing Options'
  | 'Packaging'
  | 'Logistics & Freight'
  | 'Customs & VAT'
  | 'Sanctions & Banking'
  | 'Competitors & Price'
  | 'Target Markets'
  | 'Unit Economics'
  | 'Go-to-Market'
  | 'Grants & Incentives';

export interface Source {
  id: string;
  title: string;
  url?: string;
  publisher: string;
  sourceType: 'PRIMARY_GOVT' | 'ITF_SPEC' | 'CUSTOMS_TARIFF' | 'INDUSTRY_ASSOC' | 'AI_MODEL' | 'EXPERT_HUMAN' | 'SECONDARY_MEDIA';
  tier: SourceTier;
  publicationDate?: string;
  accessDate: string;
  authorityScore: number; // 0 - 100
}

export interface Claim {
  id: string;
  projectId: string;
  documentId: string;
  modelName: string; // e.g., 'Gemini 3.6 Flash', 'Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Human Expert'
  canonicalClaim: string;
  canonicalClaimFa?: string;
  originalText: string;
  claimType: ClaimType;
  category: ClaimCategory;
  geography: string;
  timePeriod?: string;
  numericValue?: number;
  unit?: string;
  currency?: string;
  sourceTier: SourceTier;
  evidenceStatus: EvidenceStatus;
  confidenceScore: number; // 0 - 100
  impactScore: number; // 1 - 5 (5 = Critical for Investment Decision)
  verificationPriority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  evidenceExcerpt?: string;
  sourceTitle?: string;
  verificationNotes?: string;
  createdAt: string;
}

export type ConsensusType = 
  | 'VERIFIED_CONSENSUS' 
  | 'STRONG_SUPPORTED' 
  | 'UNVERIFIED_AI_CONSENSUS' 
  | 'PARTIAL' 
  | 'CONFLICTED' 
  | 'SINGLE_SOURCE';

export interface ConsensusCluster {
  id: string;
  topic: string;
  topicFa?: string;
  category: ClaimCategory;
  claimIds: string[];
  modelsSupporting: string[];
  independentSourceCount: number;
  contradictionCount: number;
  consensusType: ConsensusType;
  confidenceScore: number;
  summary: string;
  summaryFa?: string;
}

export interface Contradiction {
  id: string;
  topic: string;
  claimA: Claim;
  claimB: Claim;
  contradictionReason: string;
  contradictionReasonFa?: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  resolutionStatus: 'UNRESOLVED' | 'UNDER_REVIEW' | 'RESOLVED_A' | 'RESOLVED_B' | 'RESOLVED_BOTH_QUALIFIED';
  resolutionNotes?: string;
}

export interface VerificationTask {
  id: string;
  claimId: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  question: string;
  questionFa?: string;
  requiredSourceType: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'VERIFIED' | 'REJECTED';
  assignedTo?: string;
  result?: string;
  reviewNotes?: string;
  updatedAt: string;
}

export interface CountryRanking {
  id: string;
  country: string;
  countryFa: string;
  targetCity: string;
  overallScore: number; // 0-100
  portAccessScore: number;
  logisticsCostIndex: number; // $ landed cost
  taxRatePct: number;
  vatRatePct: number;
  bankingFeasibilityScore: number; // 0-100
  tennisMarketDensityScore: number; // 0-100
  grantsIncentivesScore: number; // 0-100
  pros: string[];
  cons: string[];
  recommendation: 'TOP_HUB' | 'SECONDARY' | 'LOGISTICS_ONLY' | 'NOT_RECOMMENDED';
}

export interface SupplyChainScenario {
  id: 'SCENARIO_A' | 'SCENARIO_B' | 'SCENARIO_C';
  name: string;
  nameFa: string;
  description: string;
  rawCostPerTon: number; // USD
  processingCostPerTon: number; // USD
  packagingCostPerTon: number; // USD
  inlandFreightIran: number; // USD / 24ton container
  oceanFreight: number; // USD / 24ton container
  insurancePerTon: number;
  customsDutyPct: number; // %
  portHandlingEu: number; // USD / ton
  warehousingEuPerMonth: number; // USD / ton
  inlandTransportEu: number; // USD / ton
  distributorMarginPct: number; // %
  targetSellingPricePerTon: number; // USD
  // Calculated properties
  landedCostPerTon: number;
  grossProfitPerTon: number;
  grossMarginPct: number;
  breakEvenTonsYearly: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  keyAdvantage: string;
  keyRisk: string;
}

export interface CompetitorItem {
  id: string;
  companyName: string;
  country: string;
  productName: string;
  grainSize: string; // e.g., '0 - 0.5 mm (Top Dressing)', '0 - 2 mm (Base)'
  moistureProtection: string;
  packageSizes: string; // e.g., '25kg Poly Bags, 1000kg Big Bags'
  pricePerBag25kg: number; // EUR or USD
  pricePerTon: number; // EUR or USD
  itfClassification: string; // e.g. 'ITF Category 1 (Slow)', 'EN 14877 Compliant'
  distributionChannel: string; // e.g. 'Direct to Clubs / Builders / Online'
  marketPosition: string;
  strengths: string;
  vulnerabilities: string;
}

export interface RiskItem {
  id: string;
  category: 'SANCTIONS_BANKING' | 'CUSTOMS_ORIGIN' | 'QUALITY_CONSISTENCY' | 'ITF_COMPLIANCE' | 'LOGISTICS_DELAY' | 'MARKET_ACCEPTANCE';
  title: string;
  titleFa: string;
  description: string;
  probability: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  riskScore: number; // probability * impact
  mitigation: string;
  verificationRequired: string;
  status: 'OPEN' | 'MITIGATED' | 'ACCEPTED_RISK';
}

export interface DecisionCriterion {
  id: string;
  name: string;
  nameFa: string;
  weight: number; // default weight out of 100 sum
  score: number; // 0 - 100 attractiveness/feasibility score
  confidence: number; // 0 - 100 confidence in evidence
  evidenceQuality: 'HIGH' | 'MEDIUM' | 'LOW';
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  keyFindings: string;
  criticalGaps: string[];
}

export interface DecisionLabOption {
  id: string;
  questionGroup: 'PROCESSING_LOCATION' | 'JURISDICTION_HQ' | 'LOGISTICS_FORMAT' | 'GO_TO_MARKET';
  questionGroupFa: string;
  questionGroupEn: string;
  title: string;
  titleFa: string;
  subtitle: string;
  subtitleFa: string;
  isRecommended?: boolean;
  pros: string[];
  prosFa: string[];
  cons: string[];
  consFa: string[];
  supportingEvidence: string[];
  supportingEvidenceFa: string[];
  opposingEvidence: string[];
  opposingEvidenceFa: string[];
  verifiedClaims: string[];
  verifiedClaimsFa: string[];
  unverifiedClaims: string[];
  unverifiedClaimsFa: string[];
  linkedClaimIds?: string[];
  risks: string[];
  risksFa: string[];
  approximateCosts: string;
  approximateCostsFa: string;
  finalScore: number; // 0 - 100
  confidenceLevel: number; // 0 - 100%
}

export type FinalDecisionState = 'GO' | 'CONDITIONAL_GO' | 'NO_GO' | 'DECISION_PENDING';

export interface InvestmentDecision {
  state: FinalDecisionState;
  overallScore: number;
  overallConfidence: number;
  evidenceCoveragePct: number;
  verifiedClaimsCount: number;
  criticalUnknownsCount: number;
  executiveSummary: string;
  executiveSummaryFa: string;
  keyReasons: string[];
  criticalUnknowns: string[];
  gatingBlockers: string[];
  lastUpdated: string;
}

export interface ResearchDocument {
  id: string;
  title: string;
  sourceType: 'AI_MODEL_OUTPUT' | 'HUMAN_EXPERT' | 'PRIMARY_GOVT_CUSTOMS' | 'ITF_OFFICIAL_REGULATION' | 'INDUSTRY_REPORT';
  modelName: string;
  modelVersion?: string;
  authorPublisher: string;
  publicationDate: string;
  content: string;
  extractedClaimsCount: number;
  tags: string[];
}

export interface BusinessPlanSection {
  id: string;
  titleNumber: string;
  titleEn: string;
  titleFa: string;
  evidenceTag: 'FACT / VERIFIED' | 'SUPPORTED' | 'ESTIMATE' | 'ASSUMPTION' | 'UNVERIFIED' | 'RECOMMENDATION';
  summary: string;
  contentMarkdown: string;
  contentMarkdownFa?: string;
  keyMetrics?: Record<string, string | number>;
}
