import {
  Claim,
  ConsensusCluster,
  Contradiction,
  VerificationTask,
  CountryRanking,
  SupplyChainScenario,
  CompetitorItem,
  RiskItem,
  DecisionCriterion,
  InvestmentDecision,
  ResearchDocument,
  BusinessPlanSection
} from '../types';

export const INITIAL_RESEARCH_DOCUMENTS: ResearchDocument[] = [
  {
    id: 'DOC-001',
    title: 'EU Tennis Court Clay Technical Specifications & ITF Category 1 Slow Standard Analysis',
    sourceType: 'ITF_OFFICIAL_REGULATION',
    modelName: 'ITF Guide & EN 14877 Standards',
    authorPublisher: 'International Tennis Federation & European Committee for Standardization',
    publicationDate: '2025-11-15',
    extractedClaimsCount: 6,
    tags: ['Technical', 'ITF Rules', 'Grain Sizing', 'Testing'],
    content: `Official Technical Guidance for Clay Courts (Terre Battue):
The International Tennis Federation (ITF) classifies court surfaces by Pace (PCPR): Category 1 (Slow), Category 2 (Medium-Slow), up to Category 5 (Fast). Red clay courts are typically Category 1 (Slow) with PCPR < 35.
CRITICAL DISTINCTION: ITF DOES NOT CERTIFY OR BRAND-APPROVE RAW CLAY MATERIALS OR BRICK DUST PRODUCTS. ITF tests installed court surfaces at specific venues to determine CPR rating. Claiming a raw material is "ITF Approved" is technically misleading in B2B markets.

EN 14877 (Synthetic and natural turf surfaces for outdoor sports facilities) specifies physical properties for clay tennis courts:
- Grain Size Distribution:
  * Top Dressing (Top Layer / Dust): 0.0 mm to 0.5 mm (min 80% passing 0.5mm mesh).
  * Sub-layer (Base Course / Fine Aggregate): 0.0 mm to 2.0 mm or 0.0 mm to 4.0 mm.
- Composition: High-density calcined clay, crushed terra cotta/clay brick, kaolinite, montmorillonite, and iron oxide (>5% Fe2O3) providing natural rich red-orange coloration.
- Moisture retention: Must allow controlled drainage (permeability > 100 mm/hr) while retaining 12-18% surface moisture under rolling.
- Heavy Metals & Environmental: Must comply with EU REACH regulation (EC 1907/2006) for non-toxic mineral soil components.`
  },
  {
    id: 'DOC-002',
    title: 'Iran Clay & Brick Reserves Analysis: Sourcing Feasibility in Yazd, Isfahan & Kashan',
    sourceType: 'HUMAN_EXPERT',
    modelName: 'Geological Survey & Industrial Expert Report',
    authorPublisher: 'Iranian Mineral Processing Research Center (IMPRC)',
    publicationDate: '2025-12-10',
    extractedClaimsCount: 5,
    tags: ['Raw Materials', 'Sourcing', 'Iran Reserves', 'Iron Content'],
    content: `Iran holds massive high-quality red shale and brick clay reserves in Yazd, Isfahan, and Kashan provinces.
- Chemical Properties: Kaolinitic-Illitic red clay with 6.2% to 8.5% Fe2O3 (iron oxide), ensuring vibrant deep red/terracotta color highly desired in European tennis clubs.
- Raw Clay Cost: Raw extracted red shale clay at quarry mouth costs approximately $8.00 to $14.00 per metric ton.
- Processing Cost in Iran: Heavy jaw crushing, hammer milling, screening to 0-0.5mm, and rotary drying in Yazd industrial zone costs $22.00 to $32.00 per ton.
- Quality Challenge: Traditional brick kilns in Kashan/Yazd suffer from particle size inconsistency and occasional limestone/calcite inclusions (CaCO3 > 3%). Calcium carbonate must be < 1.5% to prevent efflorescence (white chalking) and chemical hardening when mixed with rainwater.
- Water-soluble salt content must be below 0.3% to meet European environmental soil standards.`
  },
  {
    id: 'DOC-003',
    title: 'Gemini 3.6 Flash - European Freight, Customs Tariff & EU Import Duty Assessment',
    sourceType: 'AI_MODEL_OUTPUT',
    modelName: 'Gemini 3.6 Flash',
    modelVersion: '2026-03',
    authorPublisher: 'Google AI Studio Research Model',
    publicationDate: '2026-02-18',
    extractedClaimsCount: 7,
    tags: ['Logistics', 'Customs', 'Tariffs', 'HS Code'],
    content: `Supply Chain & Logistics analysis for shipping clay/brick dust from Iran to Europe:
1. Customs Classification (HS Code):
   - HS 2507.00.00: Kaolin and other kaolinic clays, whether or not calcined -> EU Customs Duty: 0%.
   - HS 2505.10.00: Natural sands, quartz sands -> EU Duty: 0%.
   - HS 6810.99.00: Articles of cement, concrete or artificial stone (including ground crushed brick powder) -> EU Customs Duty: 3.2%.
2. Freight Logistics:
   - Route: Bandar Abbas (Iran) via ocean vessel to Rotterdam (Netherlands) or Hamburg (Germany).
   - 20ft Container capacity: 24 metric tons (due to weight limit for heavy bulk minerals).
   - Ocean Freight Rate (Bandar Abbas to Rotterdam): Estimated $1,650 to $2,100 per 20ft container ($68 - $87/ton).
   - Transit Time: 28 to 36 days.
3. Import Requirements in EU:
   - EU Customs Entry requires Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and REACH Mineral Exemption declaration.
   - Import VAT: Standard VAT applies at destination (Netherlands 21%, Germany 19%, Belgium 21%). Import VAT is deductible for VAT-registered European corporate entities.`
  },
  {
    id: 'DOC-004',
    title: 'Claude 3.5 Sonnet - EU Sanctions, Banking Mechanisms & Third-Party Entity Architecture',
    sourceType: 'AI_MODEL_OUTPUT',
    modelName: 'Claude 3.5 Sonnet',
    modelVersion: 'v2',
    authorPublisher: 'Anthropic AI Model',
    publicationDate: '2026-03-01',
    extractedClaimsCount: 6,
    tags: ['Sanctions', 'Banking', 'Legal', 'Compliance'],
    content: `Sanctions, Compliance and Cross-Border Banking Analysis for Iranian Origin Products:
1. Legal Status of Natural Clays: Non-calcined natural clays (HS 2507) and non-metallic building materials are generally NOT subject to primary EU sectoral sanctions. However, direct financial clearing with Iranian state banks (Melli, Mellat) is strictly blocked by SWIFT and European AML regulations.
2. Direct Payment Obstacle: European B2B buyers (tennis clubs, distributors) CANNOT transfer funds directly to Iranian bank accounts.
3. Proven Compliance Architecture:
   - Establishing a primary operating company in a neutral, reputable jurisdiction (e.g. Netherlands B.V. or Germany GmbH).
   - Utilizing an intermediate sourcing entity in UAE (Dubai DMCC) or Oman for trade facilitation, or arranging non-sanctioned EUR trade settlement through non-designated private trade partners.
   - Strict Origin Documentation: All products must obtain EUR.1 or standard Chambers Certificate of Origin. Re-processing (milling, screening, custom blending, branding) inside an EU hub or Turkey qualifies the product for EU origin status under non-preferential rules of origin (last substantial transformation rule under Union Customs Code).`
  },
  {
    id: 'DOC-005',
    title: 'DeepSeek R1 - European Competitor Pricing, Packaging & B2B Distribution Model',
    sourceType: 'AI_MODEL_OUTPUT',
    modelName: 'DeepSeek R1',
    modelVersion: 'Reasoning Engine',
    authorPublisher: 'DeepSeek AI Research',
    publicationDate: '2026-03-12',
    extractedClaimsCount: 6,
    tags: ['Competitors', 'Pricing', 'Packaging', 'B2B Sales'],
    content: `Competitive Landscape & Pricing Analysis for European Tennis Court Clay Market:
1. Market Benchmark & Selling Prices:
   - Premium bagged Tennis Clay (25kg paper/poly bag with moisture barrier): Wholesale B2B price ranges from €14.50 to €22.00 per 25kg bag (€580 to €880 per metric ton).
   - Bulk 1-Ton Big Bags: €420 to €650 per metric ton delivered to club site.
   - Retail / Direct Club Price: Up to €26.00 per bag (€1,040/ton).
2. Competitor Benchmark:
   - En-Tout-Cas (UK / Europe): Industry leader, premium positioning, proprietary crushed brick blend, pricing ~€24/bag.
   - Bricoterra (Italy/France): Major producer, €16 - €19/bag, 0-0.5mm grain.
   - Porplast / ClayTech (Germany/Spain): €15 - €18/bag.
3. Market Size: Europe has over 120,000 clay tennis courts (France ~35,000, Spain ~20,000, Italy ~18,000, Germany ~25,000). Annual maintenance requires 1.5 to 3.0 metric tons of top-dressing clay PER COURT every spring season!
   - Total annual maintenance demand in Western Europe: ~250,000 to 350,000 metric tons of clay top dressing per year.
4. Packaging Standards:
   - Must use 25kg UV-resistant PE/PP laminated bags on 1,000kg heat-treated wooden pallets (40 bags per pallet). Moisture control is essential to prevent clump formation during winter storage.`
  }
];

export const INITIAL_CLAIMS: Claim[] = [
  {
    id: 'CLM-001',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-001',
    modelName: 'ITF Standards Body',
    canonicalClaim: 'ITF does not certify raw clay materials; it classifies installed court surfaces into speed categories (Category 1 Slow).',
    canonicalClaimFa: 'ITF مواد خام خاک رس را گواهینامه نمی‌دهد، بلکه زمین‌های نصب شده را در دسته‌بندی سرعت (دسته‌بندی ۱ کند) طبقه‌بندی می‌کند.',
    originalText: 'CRITICAL DISTINCTION: ITF DOES NOT CERTIFY OR BRAND-APPROVE RAW CLAY MATERIALS OR BRICK DUST PRODUCTS.',
    claimType: 'FACT',
    category: 'ITF & Standards',
    geography: 'Global / Europe',
    sourceTier: 1,
    evidenceStatus: 'VERIFIED',
    confidenceScore: 98,
    impactScore: 5,
    verificationPriority: 'CRITICAL',
    evidenceExcerpt: 'ITF tests installed court surfaces at specific venues to determine CPR rating. Claiming a raw material is "ITF Approved" is technically misleading.',
    sourceTitle: 'ITF Guide & EN 14877 Standards',
    verificationNotes: 'Verified directly from ITF Technical Center guidelines. Marketing must state "Formulated to satisfy ITF Category 1 Slow court requirements" rather than "ITF Certified Clay".',
    createdAt: '2026-03-01'
  },
  {
    id: 'CLM-002',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-001',
    modelName: 'EN 14877 Standard',
    canonicalClaim: 'Top dressing tennis clay requires grain size of 0.0 to 0.5 mm with <2% fine dust and >5% iron oxide.',
    canonicalClaimFa: 'پوشش سطح بالایی خاک رس تنیس نیازمند دانه بندی ۰ تا ۰.۵ میلی‌متر با گرد و غبار زیر ۲٪ و اکسید آهن بالای ۵٪ است.',
    originalText: 'Top Dressing (Top Layer / Dust): 0.0 mm to 0.5 mm (min 80% passing 0.5mm mesh). Composition: calcined clay, crushed terra cotta (>5% Fe2O3).',
    claimType: 'FACT',
    category: 'Product & Technical',
    geography: 'Europe',
    numericValue: 0.5,
    unit: 'mm',
    sourceTier: 1,
    evidenceStatus: 'VERIFIED',
    confidenceScore: 95,
    impactScore: 5,
    verificationPriority: 'HIGH',
    evidenceExcerpt: 'EN 14877 specifies 0-0.5mm grain size and controlled drainage for sports surfaces.',
    sourceTitle: 'EN 14877 European Sports Surfaces Spec',
    createdAt: '2026-03-01'
  },
  {
    id: 'CLM-003',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-002',
    modelName: 'Human Geological Expert',
    canonicalClaim: 'Iranian red shale/clay in Yazd and Isfahan has 6.2% - 8.5% Fe2O3, offering deep terracotta red color.',
    canonicalClaimFa: 'شیل و خاک رس قرمز ایران در یزد و اصفهان دارای ۶.۲٪ تا ۸.۵٪ اکسید آهن است که رنگ قرمز سفالی عمیقی ارائه می‌دهد.',
    originalText: 'Kaolinitic-Illitic red clay with 6.2% to 8.5% Fe2O3 (iron oxide), ensuring vibrant deep red/terracotta color.',
    claimType: 'FACT',
    category: 'Raw Materials',
    geography: 'Iran (Yazd/Isfahan)',
    numericValue: 7.3,
    unit: '% Fe2O3',
    sourceTier: 2,
    evidenceStatus: 'SUPPORTED',
    confidenceScore: 90,
    impactScore: 4,
    verificationPriority: 'HIGH',
    evidenceExcerpt: 'Red shale clay at quarry mouth costs approx $8.00 - $14.00 per ton.',
    sourceTitle: 'Iranian Mineral Processing Research Center Report',
    createdAt: '2026-03-02'
  },
  {
    id: 'CLM-004',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-002',
    modelName: 'Human Geological Expert',
    canonicalClaim: 'Iranian clay processing must limit Calcium Carbonate (CaCO3) to below 1.5% to prevent efflorescence and hardening.',
    canonicalClaimFa: 'فرآوری خاک رس ایران باید کربنات کلسیم را زیر ۱.۵٪ محدود کند تا از شوره زدگی و سخت شدن جلوگیری شود.',
    originalText: 'Calcium carbonate must be < 1.5% to prevent efflorescence (white chalking) and chemical hardening when mixed with rainwater.',
    claimType: 'FACT',
    category: 'Processing Options',
    geography: 'Iran / Europe',
    numericValue: 1.5,
    unit: '% CaCO3',
    sourceTier: 2,
    evidenceStatus: 'SUPPORTED',
    confidenceScore: 88,
    impactScore: 5,
    verificationPriority: 'CRITICAL',
    evidenceExcerpt: 'Lime/calcite inclusions cause white streaks on clay courts when exposed to rain.',
    sourceTitle: 'Iranian Mineral Processing Research Center Report',
    createdAt: '2026-03-02'
  },
  {
    id: 'CLM-005',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-003',
    modelName: 'Gemini 3.6 Flash',
    canonicalClaim: 'Natural kaolin clays (HS 2507.00.00) enter EU duty-free (0%), whereas ground ceramic/brick powder (HS 6810.99) carries 3.2% duty.',
    canonicalClaimFa: 'خاک رس کائولن طبیعی (HS 2507) بدون تعرفه (۰٪) وارد اتحادیه اروپا می‌شود، در حالی که پودر سرامیک/آجر (HS 6810) دارای ۳.۲٪ تعرفه است.',
    originalText: 'HS 2507.00.00: Kaolin and other kaolinic clays -> EU Duty: 0%. HS 6810.99 -> EU Duty: 3.2%.',
    claimType: 'FACT',
    category: 'Customs & VAT',
    geography: 'EU',
    numericValue: 0,
    unit: '% tariff',
    sourceTier: 1,
    evidenceStatus: 'VERIFIED',
    confidenceScore: 96,
    impactScore: 4,
    verificationPriority: 'HIGH',
    evidenceExcerpt: 'EU TARIC database confirms 0% autonomous duty for raw kaolinic clays under HS 2507.',
    sourceTitle: 'EU Customs TARIC Database',
    createdAt: '2026-03-03'
  },
  {
    id: 'CLM-006',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-003',
    modelName: 'Gemini 3.6 Flash',
    canonicalClaim: 'Ocean freight for a 20ft container (24 tons capacity) from Bandar Abbas to Rotterdam ranges from $1,650 to $2,100 ($68-$87/ton).',
    canonicalClaimFa: 'کرایه حمل دریایی کانتینر ۲۰ فوت (ظرفیت ۲۴ تن) از بندرعباس به روتردام بین ۱,۶۵۰ تا ۲,۱۰۰ دلار (۶۸ تا ۸۷ دلار در هر تن) است.',
    originalText: 'Ocean Freight Rate (Bandar Abbas to Rotterdam): Estimated $1,650 to $2,100 per 20ft container ($68 - $87/ton).',
    claimType: 'ESTIMATE',
    category: 'Logistics & Freight',
    geography: 'Iran to Netherlands',
    numericValue: 1875,
    unit: 'USD / 20ft',
    currency: 'USD',
    sourceTier: 4,
    evidenceStatus: 'UNVERIFIED_CONSENSUS',
    confidenceScore: 65,
    impactScore: 4,
    verificationPriority: 'HIGH',
    evidenceExcerpt: 'Freight rates fluctuate quarterly based on Persian Gulf & Red Sea shipping surcharges.',
    sourceTitle: 'Gemini 3.6 Flash AI Output',
    verificationNotes: 'Must obtain binding formal freight quote from shipping forwarder (e.g., Maersk/MSC or regional feeder line via Jebel Ali).',
    createdAt: '2026-03-03'
  },
  {
    id: 'CLM-007',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-004',
    modelName: 'Claude 3.5 Sonnet',
    canonicalClaim: 'European banks strictly refuse direct wire payments to Iranian banks; trade requires EU B.V. entity or UAE private intermediary.',
    canonicalClaimFa: 'بانک‌های اروپایی پرداخت مستقیم حواله به بانک‌های ایرانی را اکیداً رد می‌کنند؛ تجارت نیازمند شرکت B.V. اروپایی یا واسطه خصوصی امارات است.',
    originalText: 'Direct Payment Obstacle: European B2B buyers CANNOT transfer funds directly to Iranian bank accounts.',
    claimType: 'FACT',
    category: 'Sanctions & Banking',
    geography: 'EU / Iran / UAE',
    sourceTier: 1,
    evidenceStatus: 'VERIFIED',
    confidenceScore: 99,
    impactScore: 5,
    verificationPriority: 'CRITICAL',
    evidenceExcerpt: 'EU banking regulations prohibit transactions passing through SWIFT to sanctioned Iranian financial institutions.',
    sourceTitle: 'EU Financial Sanctions Regulatory Framework',
    createdAt: '2026-03-04'
  },
  {
    id: 'CLM-008',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-004',
    modelName: 'Claude 3.5 Sonnet',
    canonicalClaim: 'Processing or re-bagging raw clay inside an EU hub or Turkey grants non-preferential EU/Turkish origin under UCC rules.',
    canonicalClaimFa: 'فرآوری یا بسته‌بندی مجدد خاک رس خام در هاب اروپا یا ترکیه، گواهی مبدأ غیرترجیحی اتحادیه اروپا/ترکیه را اعطا می‌کند.',
    originalText: 'Re-processing (milling, screening, custom blending, branding) inside an EU hub qualifies for non-preferential origin.',
    claimType: 'ESTIMATE',
    category: 'Sanctions & Banking',
    geography: 'EU / Turkey',
    sourceTier: 3,
    evidenceStatus: 'CONFLICTED',
    confidenceScore: 60,
    impactScore: 5,
    verificationPriority: 'CRITICAL',
    evidenceExcerpt: 'Union Customs Code (UCC) requires substantial economically justified processing to alter country of origin.',
    sourceTitle: 'Claude 3.5 Sonnet AI Report',
    verificationNotes: 'CONTRADICTION DETECTED: Simple sifting and re-bagging does NOT alter non-preferential origin under EU UCC Art. 60. Calcining or custom chemical mineral blending IS required.',
    createdAt: '2026-03-04'
  },
  {
    id: 'CLM-009',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-005',
    modelName: 'DeepSeek R1',
    canonicalClaim: 'Premium bagged tennis clay sells wholesale B2B in Europe for €14.50 - €22.00 per 25kg bag (€580 - €880 per metric ton).',
    canonicalClaimFa: 'خاک رس تنیس کیسه‌ای ممتاز در اروپا با قیمت عمده‌فروشی ۱۴.۵۰ تا ۲۲.۰۰ یورو به ازای هر کیسه ۲۵ کیلوگرمی (۵۸۰ تا ۸۸۰ یورو در هر تن) به فروش می‌رسد.',
    originalText: 'Wholesale B2B price ranges from €14.50 to €22.00 per 25kg bag (€580 to €880 per metric ton).',
    claimType: 'FACT',
    category: 'Competitors & Price',
    geography: 'Western Europe',
    numericValue: 18.25,
    unit: 'EUR / 25kg bag',
    currency: 'EUR',
    sourceTier: 2,
    evidenceStatus: 'SUPPORTED',
    confidenceScore: 92,
    impactScore: 5,
    verificationPriority: 'HIGH',
    evidenceExcerpt: 'Market sampling across German, French, and Italian distributor catalogs shows standard pricing around €16.50/bag.',
    sourceTitle: 'European Tennis Equipment & Maintenance Catalogues 2025/2026',
    createdAt: '2026-03-05'
  },
  {
    id: 'CLM-010',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-005',
    modelName: 'DeepSeek R1',
    canonicalClaim: 'Western Europe contains ~120,000 clay tennis courts, creating an annual maintenance top-dressing demand of 250,000 - 350,000 tons.',
    canonicalClaimFa: 'اروپای غربی دارای حدود ۱۲۰,۰۰۰ زمین تنیس خاک رس است که تقاضای سالانه خاک‌پاشی ۲۵۰,۰۰۰ تا ۳۵۰,۰۰۰ تن ایجاد می‌کند.',
    originalText: 'Total annual maintenance demand in Western Europe: ~250,000 to 350,000 metric tons of clay top dressing per year.',
    claimType: 'ESTIMATE',
    category: 'Target Markets',
    geography: 'Western Europe',
    numericValue: 300000,
    unit: 'metric tons / year',
    sourceTier: 3,
    evidenceStatus: 'SUPPORTED',
    confidenceScore: 85,
    impactScore: 4,
    verificationPriority: 'MEDIUM',
    evidenceExcerpt: 'France, Spain, Italy, and Germany represent 80% of European clay court installations.',
    sourceTitle: 'European Tennis Federation Facility Audit & DeepSeek Synthesis',
    createdAt: '2026-03-05'
  },
  {
    id: 'CLM-011',
    projectId: 'PRJ-IRAN-CLAY',
    documentId: 'DOC-002',
    modelName: 'Human Geological Expert',
    canonicalClaim: 'Landed cost in Rotterdam for bagged Iranian clay is estimated at ~$210/ton ($5.25 per 25kg bag), yielding >65% gross margin at €16/bag.',
    canonicalClaimFa: 'هزینه نهایی تحویل در روتردام برای خاک رس کیسه‌ای ایران حدود ۲۱۰ دلار در تن (۵.۲۵ دلار برای هر کیسه ۲۵ کیلوگرمی) برآورد می‌شود که حاشیه سود بالای ۶۵٪ در قیمت ۱۶ یورو بر کیسه ایجاد می‌کند.',
    originalText: 'Landed cost in Rotterdam: Raw $12 + Processing $28 + Bags $20 + Ocean Freight $75 + Customs $10 + Port Handling $15 = $160-$210/ton.',
    claimType: 'ESTIMATE',
    category: 'Unit Economics',
    geography: 'Iran to Netherlands',
    numericValue: 210,
    unit: 'USD / ton',
    currency: 'USD',
    sourceTier: 2,
    evidenceStatus: 'SUPPORTED',
    confidenceScore: 88,
    impactScore: 5,
    verificationPriority: 'CRITICAL',
    evidenceExcerpt: 'Unit economics indicate high profitability per ton if logistics chain remains stable.',
    sourceTitle: 'Financial Feasibility Model by IMPRC & Iranian Logistics Consultants',
    createdAt: '2026-03-05'
  }
];

export const INITIAL_CONSENSUS_CLUSTERS: ConsensusCluster[] = [
  {
    id: 'CNS-001',
    topic: 'ITF Surface Specification vs Brand Certification',
    topicFa: 'مشخصات سطح ITF در برابر گواهینامه برند',
    category: 'ITF & Standards',
    claimIds: ['CLM-001'],
    modelsSupporting: ['ITF Official Regulations', 'Gemini 3.6 Flash', 'Claude 3.5 Sonnet'],
    independentSourceCount: 2,
    contradictionCount: 0,
    consensusType: 'VERIFIED_CONSENSUS',
    confidenceScore: 98,
    summary: 'Universal agreement among primary specs and AI models: ITF classifies court pace rating (PCPR Category 1) on installed courts, but does not issue product-level brand approvals for raw brick dust.',
    summaryFa: 'توافق کامل بین مقررات رسمی و مدل‌های هوش مصنوعی: ITF زمین‌ها را طبقه‌بندی می‌کند اما گواهی محصول صادر نمی‌کند.'
  },
  {
    id: 'CNS-002',
    topic: 'Particle Size Distribution for Top Dressing (0.0 - 0.5 mm)',
    topicFa: 'توزیع اندازه ذرات برای پوشش نهایی (۰ تا ۰.۵ میلی‌متر)',
    category: 'Product & Technical',
    claimIds: ['CLM-002', 'CLM-004'],
    modelsSupporting: ['EN 14877 Standard', 'DeepSeek R1', 'Human Expert'],
    independentSourceCount: 3,
    contradictionCount: 0,
    consensusType: 'STRONG_SUPPORTED',
    confidenceScore: 94,
    summary: 'Consensus across EN standards, human experts, and models that top layer dust must strictly fit 0.0 to 0.5 mm with <2% fine silt to prevent compaction mudding.',
    summaryFa: 'اجماع بر سر اینکه اندازه ذرات باید دقیقاً بین ۰ تا ۰.۵ میلی‌متر باشد.'
  },
  {
    id: 'CNS-003',
    topic: 'Ocean Freight Rate from Bandar Abbas to EU Hub Ports',
    topicFa: 'نرخ حمل دریایی از بندرعباس به بنادر هاب اروپا',
    category: 'Logistics & Freight',
    claimIds: ['CLM-006'],
    modelsSupporting: ['Gemini 3.6 Flash', 'GPT-4o', 'DeepSeek R1'],
    independentSourceCount: 0,
    contradictionCount: 1,
    consensusType: 'UNVERIFIED_AI_CONSENSUS',
    confidenceScore: 65,
    summary: 'AI models estimate $1,650 to $2,200 per 20ft container (24 tons), but no primary ocean line quote has been attached yet. Remains Unverified AI Consensus until formal forwarder quote.',
    summaryFa: 'مدل‌های هوش مصنوعی کرایه را بین ۱۶۵۰ تا ۲۲۰۰ دلار تخمین می‌زنند اما نیازمند استعلام رسمی از کشتیرانی است.'
  },
  {
    id: 'CNS-004',
    topic: 'EU Banking & Direct Iranian Payment Blockers',
    topicFa: 'موانع بانکی اتحادیه اروپا و پرداخت مستقیم به ایران',
    category: 'Sanctions & Banking',
    claimIds: ['CLM-007', 'CLM-008'],
    modelsSupporting: ['Claude 3.5 Sonnet', 'EU Sanctions Rules', 'Human Legal Expert'],
    independentSourceCount: 2,
    contradictionCount: 1,
    consensusType: 'CONFLICTED',
    confidenceScore: 75,
    summary: 'Direct Iranian bank wire transfers are blocked by EU AML laws. However, models contradict each other regarding whether simple re-bagging in EU/Turkey changes country of origin.',
    summaryFa: 'انتقال مستقیم بانکی مسدود است. تناقض در مورد اثر تغییر مبدأ با بسته‌بندی مجدد وجود دارد.'
  }
];

export const INITIAL_CONTRADICTIONS: Contradiction[] = [
  {
    id: 'CTR-001',
    topic: 'Country of Origin Rules for Re-packaged Clay in Europe/Turkey',
    claimA: INITIAL_CLAIMS[7], // CLM-008 (Claude claim)
    claimB: {
      id: 'CLM-008B',
      projectId: 'PRJ-IRAN-CLAY',
      documentId: 'DOC-CUSTOMS-EU',
      modelName: 'EU Union Customs Code (Art. 60)',
      canonicalClaim: 'Simple sifting and re-bagging of raw mineral clay inside EU or Turkey does NOT change non-preferential Iranian origin.',
      canonicalClaimFa: 'سرند کردن ساده و بسته‌بندی مجدد خاک رس در اروپا یا ترکیه مبدأ غیرترجیحی ایران را تغییر نمی‌دهد.',
      originalText: 'Under Union Customs Code (UCC) Art. 60(2), minimal operations such as sifting, sorting, and packaging do NOT confer origin.',
      claimType: 'FACT',
      category: 'Customs & VAT',
      geography: 'EU',
      sourceTier: 1,
      evidenceStatus: 'VERIFIED',
      confidenceScore: 99,
      impactScore: 5,
      verificationPriority: 'CRITICAL',
      sourceTitle: 'EU Union Customs Code Regulation 952/2013',
      createdAt: '2026-03-04'
    },
    contradictionReason: 'Claude 3.5 suggested that re-bagging raw clay in Turkey or Netherlands alters origin to EU/TR. Primary EU Customs Code (Art. 60) explicitly denies origin change for minimal packaging/sifting without substantial chemical transformation (e.g. calcining/blending).',
    contradictionReasonFa: 'هوش مصنوعی مدعی شد بسته‌بندی در ترکیه مبدأ را تغییر می‌دهد، اما قانون گمرک اتحادیه اروپا اعلام می‌کند سرند و بسته‌بندی ساده مبدأ را تغییر نمی‌دهد.',
    severity: 'HIGH',
    resolutionStatus: 'RESOLVED_B',
    resolutionNotes: 'Primary EU Customs Code overrides AI assumption. Origin remains Iran unless material undergoes calcination or chemical matrix alteration.'
  },
  {
    id: 'CTR-002',
    topic: 'Ocean Freight Rate per 20ft Container (Bandar Abbas -> Rotterdam)',
    claimA: INITIAL_CLAIMS[5], // CLM-006 ($1,650 - $2,100)
    claimB: {
      id: 'CLM-006B',
      projectId: 'PRJ-IRAN-CLAY',
      documentId: 'DOC-FREIGHT-2026',
      modelName: 'Middle East Logistics Monitor',
      canonicalClaim: 'Red Sea transit surcharges and feeder slot scarcity have pushed Bandar Abbas to Rotterdam container rates to $2,850 - $3,400.',
      canonicalClaimFa: 'پاداش‌های مسیر دریای سرخ و کمبود کانتینر، نرخ حمل از بندرعباس به روتردام را به ۲,۸۵۰ تا ۳,۴۰۰ دلار افزایش داده است.',
      originalText: 'Recent shipping surcharges bring effective 20ft container cost to $3,100 level.',
      claimType: 'ESTIMATE',
      category: 'Logistics & Freight',
      geography: 'Iran to Europe',
      numericValue: 3100,
      unit: 'USD / 20ft',
      sourceTier: 3,
      evidenceStatus: 'SUPPORTED',
      confidenceScore: 78,
      impactScore: 4,
      verificationPriority: 'HIGH',
      sourceTitle: 'Middle East Freight Index Q1 2026',
      createdAt: '2026-03-05'
    },
    contradictionReason: 'Gemini estimated freight at $1,875/container ($78/ton), whereas recent shipping index reports $3,100/container ($129/ton). Difference alters landed cost by $51/ton.',
    contradictionReasonFa: 'اختلاف قیمت کرایه بین ۱۸۷۵ دلار تا ۳Step۱۰۰ دلار، هزینه نهایی را ۵۱ دلار در هر تن تغییر می‌دهد.',
    severity: 'MEDIUM',
    resolutionStatus: 'UNRESOLVED',
    resolutionNotes: 'Pending formal spot quote from container feeder agent in Bandar Abbas & Dubai.'
  }
];

export const INITIAL_VERIFICATION_QUEUE: VerificationTask[] = [
  {
    id: 'VRF-001',
    claimId: 'CLM-007',
    priority: 'CRITICAL',
    question: 'Obtain formal written legal opinion from EU trade counsel regarding EU B.V. holding structure for importing Iranian non-sanctioned natural minerals (HS 2507).',
    questionFa: 'دریافت نظریه حقوقی مکتوب از وکیل تجاری اتحادیه اروپا درباره ساختار هلدینگ برای واردات خاک رس ایران.',
    requiredSourceType: 'Primary EU Sanctions Lawyer / Customs Attorney',
    status: 'IN_PROGRESS',
    assignedTo: 'Mohammad / Legal Counsel',
    result: 'Preliminary review confirms natural clay HS 2507 is clear of EU embargoes; corporate entity must use non-sanctioned European bank (e.g., Rabobank or Sparkasse with clear KYC).',
    reviewNotes: 'High priority before executing lease contracts.',
    updatedAt: '2026-03-10'
  },
  {
    id: 'VRF-002',
    claimId: 'CLM-006',
    priority: 'HIGH',
    question: 'Request firm pro-forma ocean freight quotation for 5x 20ft heavy-load containers (24 metric tons each) from Bandar Abbas to Rotterdam & Hamburg.',
    questionFa: 'استعلام قیمت رسمی و فاکتور پروفرما برای ۵ کانتینر ۲۰ فوت با بار سنگین از بندرعباس به روتردام و هامبورگ.',
    requiredSourceType: 'Licensed Freight Forwarder (Bandar Abbas / Dubai)',
    status: 'OPEN',
    reviewNotes: 'Will lock in baseline freight parameter for Supply Chain Simulator.',
    updatedAt: '2026-03-11'
  },
  {
    id: 'VRF-003',
    claimId: 'CLM-004',
    priority: 'CRITICAL',
    question: 'Conduct X-Ray Fluorescence (XRF) and acid efflorescence testing on Yazd quarry samples to guarantee Calcium Carbonate (CaCO3) < 1.0%.',
    questionFa: 'انجام تست XRF و تست آنالیز شیمیایی روی نمونه‌های معدن یزد جهت تضمین کربنات کلسیم زیر ۱٪.',
    requiredSourceType: 'Certified Materials Testing Lab (SGS or Kiwa Europe)',
    status: 'OPEN',
    reviewNotes: 'Critical technical gate before shipping first bulk trial lot.',
    updatedAt: '2026-03-12'
  }
];

export const INITIAL_COUNTRY_RANKINGS: CountryRanking[] = [
  {
    id: 'CTY-NL',
    country: 'Netherlands',
    countryFa: 'هلند',
    targetCity: 'Rotterdam / Venlo',
    overallScore: 92,
    portAccessScore: 98,
    logisticsCostIndex: 195, // $ landed/ton
    taxRatePct: 25.8,
    vatRatePct: 21,
    bankingFeasibilityScore: 88,
    tennisMarketDensityScore: 90,
    grantsIncentivesScore: 82,
    pros: [
      'Port of Rotterdam is Europe’s premier bulk container gateway with direct feeder connections from Gulf',
      'Venlo logistics corridor offers fast 24-hour truck distribution to Germany, Belgium, France',
      'Highly international tax and corporate framework for B.V. companies',
      'Rich tennis culture with >1,800 active clubs'
    ],
    cons: [
      'Higher warehouse rental costs (€75-€95/m² annually)',
      'Strict corporate KYC banking compliance process (4-8 weeks setup)'
    ],
    recommendation: 'TOP_HUB'
  },
  {
    id: 'CTY-DE',
    country: 'Germany',
    countryFa: 'آلمان',
    targetCity: 'Hamburg / Duisburg',
    overallScore: 87,
    portAccessScore: 92,
    logisticsCostIndex: 205,
    taxRatePct: 29.9,
    vatRatePct: 19,
    bankingFeasibilityScore: 82,
    tennisMarketDensityScore: 96,
    grantsIncentivesScore: 85,
    pros: [
      'Largest European tennis court market (~25,000 clay courts in DTB association)',
      'Port of Hamburg & Duisburg inland port provide massive rail/barge hub',
      'Strong B2B willingness to pay for certified quality minerals'
    ],
    cons: [
      'Slower corporate registration process (GmbH requirements)',
      'Higher corporate tax rate (approx 30% combined)'
    ],
    recommendation: 'TOP_HUB'
  },
  {
    id: 'CTY-BE',
    country: 'Belgium',
    countryFa: 'بلژیک',
    targetCity: 'Antwerp / Ghent',
    overallScore: 84,
    portAccessScore: 94,
    logisticsCostIndex: 192,
    taxRatePct: 25.0,
    vatRatePct: 21,
    bankingFeasibilityScore: 80,
    tennisMarketDensityScore: 85,
    grantsIncentivesScore: 88,
    pros: [
      'Port of Antwerp is second largest in EU with exceptional mineral bulk handling facilities',
      'Competitive warehouse rates compared to Netherlands',
      'Central position between France and Germany'
    ],
    cons: [
      'Complex regional administrative split (Flanders vs Wallonia)',
      'Slightly lower domestic market size than Germany or France'
    ],
    recommendation: 'SECONDARY'
  },
  {
    id: 'CTY-ES',
    country: 'Spain',
    countryFa: 'اسپانیا',
    targetCity: 'Valencia / Barcelona',
    overallScore: 80,
    portAccessScore: 88,
    logisticsCostIndex: 215,
    taxRatePct: 25.0,
    vatRatePct: 21,
    bankingFeasibilityScore: 78,
    tennisMarketDensityScore: 94,
    grantsIncentivesScore: 75,
    pros: [
      'World-famous red clay tennis academies (Nadal Academy, JC Ferrero, Bruguera)',
      'Year-round clay court maintenance season',
      'Port of Valencia direct Mediterranean sea routes'
    ],
    cons: [
      'Strong local Spanish ceramic clay producers (Castellón region competitors)',
      'Longer inland trucking distance to Northern/Central European clubs'
    ],
    recommendation: 'SECONDARY'
  },
  {
    id: 'CTY-TR',
    country: 'Turkey',
    countryFa: 'ترکیه',
    targetCity: 'Mersin / Istanbul / Izmir',
    overallScore: 76,
    portAccessScore: 85,
    logisticsCostIndex: 165,
    taxRatePct: 25.0,
    vatRatePct: 20,
    bankingFeasibilityScore: 92,
    tennisMarketDensityScore: 65,
    grantsIncentivesScore: 90,
    pros: [
      'Excellent financial & banking connectivity with Iran (TRY/EUR clearing)',
      'Lower crushing, screening, and labor costs in Mersin free zone',
      'Customs Union with EU allows ATR certificate movement for non-origin goods'
    ],
    cons: [
      'Does NOT automatically confer EU origin without substantial transformation',
      'Extra ocean transit leg from Turkey to Northern Europe adds time'
    ],
    recommendation: 'LOGISTICS_ONLY'
  }
];

export const INITIAL_SUPPLY_CHAIN_SCENARIOS: SupplyChainScenario[] = [
  {
    id: 'SCENARIO_A',
    name: 'Scenario A: Finished Bagged Clay Exported from Iran',
    nameFa: 'سناریوی A: خاک رس کیسه‌ای کامل صادراتی از ایران',
    description: 'Raw shale clay is crushed, dried, screened to 0-0.5mm, and packaged into 25kg branded PE bags in Yazd/Isfahan. Shipped in 20ft containers (24 tons) via Bandar Abbas directly to Rotterdam port.',
    rawCostPerTon: 12,
    processingCostPerTon: 28,
    packagingCostPerTon: 22,
    inlandFreightIran: 450, // per 24t container
    oceanFreight: 2100, // per 24t container
    insurancePerTon: 4,
    customsDutyPct: 3.2, // HS 6810 for processed bagged powder
    portHandlingEu: 18,
    warehousingEuPerMonth: 12,
    inlandTransportEu: 35,
    distributorMarginPct: 25,
    targetSellingPricePerTon: 680, // ~$17 per 25kg bag B2B
    landedCostPerTon: 218.50,
    grossProfitPerTon: 291.50,
    grossMarginPct: 62.8,
    breakEvenTonsYearly: 420,
    riskLevel: 'MEDIUM',
    keyAdvantage: 'Lowest manufacturing cost per bag; maximum gross profit margin in Europe.',
    keyRisk: 'If bags get damaged or moisture enters container during 32-day sea transit, entire container lot can clump.'
  },
  {
    id: 'SCENARIO_B',
    name: 'Scenario B: Bulk Big Bags Shipped to EU Hub & Packaged in Netherlands',
    nameFa: 'سناریوی B: کیسه‌های بزرگ فله به اروپا و بسته‌بندی در هلند',
    description: 'Crushed raw shale is screened to 0-2mm and packed in 1,000kg industrial Big Bags (FIBC) in Iran. Shipped to Rotterdam warehouse, where fine screening to 0-0.5mm and automated 25kg valve bagging occurs in Venlo.',
    rawCostPerTon: 12,
    processingCostPerTon: 18,
    packagingCostPerTon: 10, // Big Bag in Iran
    inlandFreightIran: 400,
    oceanFreight: 2000,
    insurancePerTon: 4,
    customsDutyPct: 0.0, // HS 2507 raw clay bulk
    portHandlingEu: 22,
    warehousingEuPerMonth: 15,
    inlandTransportEu: 40, // EU Tolls & milling fee
    distributorMarginPct: 25,
    targetSellingPricePerTon: 720, // Premium EU Bagged branding
    landedCostPerTon: 265.00,
    grossProfitPerTon: 275.00,
    grossMarginPct: 53.9,
    breakEvenTonsYearly: 550,
    riskLevel: 'LOW',
    keyAdvantage: 'Zero risk of bag tearing at sea; quality control & 25kg packaging happens under strict EU supervision.',
    keyRisk: 'Higher EU labor and automated contract packaging costs in Venlo.'
  },
  {
    id: 'SCENARIO_C',
    name: 'Scenario C: Processing & Custom Blending in Turkey Free Zone',
    nameFa: 'سناریوی C: فرآوری و ترکیب اختصاصی در منطقه آزاد ترکیه',
    description: 'Raw high-iron shale shipped in bulk vessel or truck from North Iran to Mersin/Izmir Free Zone (Turkey). Calcinated, milled to 0-0.5mm, mixed with local binding additives, and bagged into 25kg EUR branded bags.',
    rawCostPerTon: 10,
    processingCostPerTon: 22,
    packagingCostPerTon: 16,
    inlandFreightIran: 320,
    oceanFreight: 1400, // Mersin to Rotterdam / Genoa
    insurancePerTon: 3,
    customsDutyPct: 0.0, // ATR document movement
    portHandlingEu: 20,
    warehousingEuPerMonth: 12,
    inlandTransportEu: 38,
    distributorMarginPct: 25,
    targetSellingPricePerTon: 700,
    landedCostPerTon: 232.00,
    grossProfitPerTon: 293.00,
    grossMarginPct: 58.6,
    breakEvenTonsYearly: 480,
    riskLevel: 'MEDIUM',
    keyAdvantage: 'Lower financial friction due to Turkish banking corridors; shorter supply chain lead times.',
    keyRisk: 'Requires double customs clearance (Iran-Turkey and Turkey-EU).'
  }
];

export const INITIAL_COMPETITORS: CompetitorItem[] = [
  {
    id: 'CMP-001',
    companyName: 'En-Tout-Cas',
    country: 'United Kingdom / Europe',
    productName: 'En-Tout-Cas Classic Red Clay',
    grainSize: '0.0 - 0.5 mm (Top Dressing)',
    moistureProtection: 'Heavy Duty 25kg Laminated PE Bag',
    packageSizes: '25kg Bags (40 per pallet), 1000kg Big Bags',
    pricePerBag25kg: 24.50,
    pricePerTon: 980,
    itfClassification: 'Formulated to Category 1 Slow',
    distributionChannel: 'Direct Club Sales, Licensed Court Builders',
    marketPosition: 'Premium Heritage Brand',
    strengths: 'Unmatched brand equity in UK & Commonwealth; premium quality control.',
    vulnerabilities: 'High manufacturing costs in UK; expensive freight to Continental Europe after Brexit.'
  },
  {
    id: 'CMP-002',
    companyName: 'Bricoterra',
    country: 'Italy / France',
    productName: 'Bricoterra Terre Battue Fine',
    grainSize: '0.0 - 0.6 mm',
    moistureProtection: '25kg UV Paper Bag with inner liner',
    packageSizes: '25kg Bags',
    pricePerBag25kg: 17.80,
    pricePerTon: 712,
    itfClassification: 'EN 14877 Compliant',
    distributionChannel: 'Regional Agricultural & Sports Distributors',
    marketPosition: 'Mainstream Market Standard',
    strengths: 'Strong network across French and Italian tennis clubs.',
    vulnerabilities: 'Variable moisture absorption in heavy rain seasons.'
  },
  {
    id: 'CMP-003',
    companyName: 'Porplast Tennis Systems',
    country: 'Germany',
    productName: 'Porplast Ziegelmehl (Brick Dust) 0/2',
    grainSize: '0.0 - 2.0 mm (Base & Top Combined)',
    moistureProtection: '25kg Polyethylene Bags',
    packageSizes: '25kg Bags, Loose Bulk Tipper Truck',
    pricePerBag25kg: 15.50,
    pricePerTon: 620,
    itfClassification: 'DTB Standard (German Tennis Fed)',
    distributionChannel: 'German Regional Sports Facility Wholesalers',
    marketPosition: 'High-Volume Economy Leader',
    strengths: 'Low bulk delivery prices in Germany; trusted local supply.',
    vulnerabilities: 'Lacks vibrant deep red color (uses duller recycled roof tile dust).'
  },
  {
    id: 'CMP-004',
    companyName: 'ClayTech Sports',
    country: 'Spain',
    productName: 'ClayTech Iberia Red Top Layer',
    grainSize: '0.0 - 0.5 mm',
    moistureProtection: '25kg Sealed Plastic Bags',
    packageSizes: '25kg Bags',
    pricePerBag25kg: 16.20,
    pricePerTon: 648,
    itfClassification: 'Category 1 Slow',
    distributionChannel: 'Spanish Tennis Academies, Export to LATAM',
    marketPosition: 'Academy & High-Performance Focus',
    strengths: 'Excellent sliding characteristics and high iron oxide coloration.',
    vulnerabilities: 'High inland freight cost to Scandinavian & Eastern European markets.'
  }
];

export const INITIAL_RISK_REGISTER: RiskItem[] = [
  {
    id: 'RSK-001',
    category: 'SANCTIONS_BANKING',
    title: 'EU Banking Settlement Blockage',
    titleFa: 'انسداد تسویه حساب بانکی اتحادیه اروپا',
    description: 'European customer wire transfers rejected due to strict KYC/AML checks if Iranian beneficial ownership or direct SWIFT endpoints are flagged.',
    probability: 4,
    impact: 5,
    riskScore: 20,
    mitigation: 'Incorporate an independent Netherlands B.V. corporate structure with compliant EU banking (e.g., Rabobank / Sparkasse), funded via legal UAE or EU equity holding entity.',
    verificationRequired: 'Formal legal opinion from EU Sanctions Counsel.',
    status: 'OPEN'
  },
  {
    id: 'RSK-002',
    category: 'CUSTOMS_ORIGIN',
    title: 'Customs Origin Dispute under EU UCC Art. 60',
    titleFa: 'اختلاف مبدأ گمرکی طبق ماده ۶۰ کد گمرکی اتحادیه اروپا',
    description: 'EU Customs authorities challenge attempts to re-label raw Iranian clay as EU/Turkish origin after simple packaging.',
    probability: 3,
    impact: 4,
    riskScore: 12,
    mitigation: 'Transparently declare Iranian origin for raw mineral clay (HS 2507 enters 0% duty-free anyway!), or perform genuine chemical/thermal calcination processing in EU hub.',
    verificationRequired: 'Customs Binding Tariff Information (BTI) ruling from Dutch Customs.',
    status: 'MITIGATED'
  },
  {
    id: 'RSK-003',
    category: 'QUALITY_CONSISTENCY',
    title: 'Calcium Carbonate (Lime) Inconsistency in Raw Quarry Lot',
    titleFa: 'ناهمگونی کربنات کلسیم (آهک) در پارت محموله معدن',
    description: 'Excess CaCO3 (>1.5%) in raw Iranian shale causes white efflorescence chalking and chemical surface crusting under European rain.',
    probability: 3,
    impact: 5,
    riskScore: 15,
    mitigation: 'Mandatory XRF laboratory screening at Yazd processing plant prior to packaging; reject lots with CaCO3 > 1.0%.',
    verificationRequired: 'SGS Batch Certificate for every exported container.',
    status: 'OPEN'
  },
  {
    id: 'RSK-004',
    category: 'ITF_COMPLIANCE',
    title: 'Misleading "ITF Certified" Marketing Claims',
    titleFa: 'ادعاهای بازاریابی گمراه‌کننده "دارای گواهی ITF"',
    description: 'Distributors or marketing materials falsely claim the clay product itself is "ITF Certified", exposing company to regulatory fines or B2B legal claims.',
    probability: 2,
    impact: 4,
    riskScore: 8,
    mitigation: 'Strictly standardize B2B product datasheets: "Formulated to meet EN 14877 specifications for ITF Category 1 (Slow) Court Surfaces".',
    verificationRequired: 'Legal review of packaging design and B2B catalog copy.',
    status: 'MITIGATED'
  }
];

export const INITIAL_DECISION_CRITERIA: DecisionCriterion[] = [
  {
    id: 'CRIT-1',
    name: 'Market Attractiveness & Demand',
    nameFa: 'جذابیت بازار و تقاضا',
    weight: 15,
    score: 88,
    confidence: 85,
    evidenceQuality: 'HIGH',
    riskLevel: 'LOW',
    keyFindings: 'Western Europe has >120,000 clay tennis courts with mandatory annual maintenance demand of ~300,000 tons. High recurring B2B demand.',
    criticalGaps: ['Exact breakdown of distributor margins in Scandinavian markets.']
  },
  {
    id: 'CRIT-2',
    name: 'Product & Technical Feasibility',
    nameFa: 'امکان‌پذیری فنی و محصول',
    weight: 15,
    score: 92,
    confidence: 90,
    evidenceQuality: 'HIGH',
    riskLevel: 'LOW',
    keyFindings: 'Iranian shale/clay in Yazd/Isfahan has ideal 7.3% Fe2O3 terracotta color and meets EN 14877 0-0.5mm grain requirements.',
    criticalGaps: ['Laboratory XRF verification of Calcium Carbonate < 1.0% across 5 distinct quarry veins.']
  },
  {
    id: 'CRIT-3',
    name: 'Regulatory & Legal Feasibility',
    nameFa: 'امکان‌پذیری قانونی و مقرراتی',
    weight: 15,
    score: 72,
    confidence: 82,
    evidenceQuality: 'MEDIUM',
    riskLevel: 'HIGH',
    keyFindings: 'Raw kaolinic clay (HS 2507) enters EU duty-free (0%) and is not subject to primary EU sector embargoes.',
    criticalGaps: ['Formal written legal opinion from EU Sanctions Counsel on Netherlands B.V. shareholding structure.']
  },
  {
    id: 'CRIT-4',
    name: 'Supply Chain & Logistics',
    nameFa: 'زنجیره تامین و لوجستیک',
    weight: 15,
    score: 78,
    confidence: 70,
    evidenceQuality: 'MEDIUM',
    riskLevel: 'MEDIUM',
    keyFindings: 'Direct shipping line routes from Bandar Abbas to Rotterdam/Hamburg are operational via ocean container carriers.',
    criticalGaps: ['Binding pro-forma freight quotation from shipping forwarder to lock ocean container rate ($1,850 vs $3,100).']
  },
  {
    id: 'CRIT-5',
    name: 'Unit Economics & Profitability',
    nameFa: 'اقتصاد واحد و سودآوری',
    weight: 15,
    score: 94,
    confidence: 88,
    evidenceQuality: 'HIGH',
    riskLevel: 'LOW',
    keyFindings: 'Landed cost in Rotterdam is ~$218/ton ($5.46 per 25kg bag), while European B2B wholesale selling price is €16 - €20/bag ($680 - $850/ton). Outstanding gross margin >60%.',
    criticalGaps: ['Finalizing EU contract packaging cost for Scenario B.']
  },
  {
    id: 'CRIT-6',
    name: 'Competitive Positioning',
    nameFa: 'موقعیت رقابتی',
    weight: 10,
    score: 84,
    confidence: 80,
    evidenceQuality: 'HIGH',
    riskLevel: 'LOW',
    keyFindings: 'Iranian clay offers a superior rich red terracotta color due to natural high iron content, outperforming dull local European recycled tile dust.',
    criticalGaps: ['Sample distribution to top 5 French/German court builders.']
  },
  {
    id: 'CRIT-7',
    name: 'Go-to-Market Feasibility',
    nameFa: 'امکان‌پذیری ورود به بازار',
    weight: 10,
    score: 80,
    confidence: 75,
    evidenceQuality: 'MEDIUM',
    riskLevel: 'MEDIUM',
    keyFindings: 'Targeting European regional tennis club facility maintenance wholesalers and independent court construction contractors.',
    criticalGaps: ['Securing first 3 pilot distributor LOIs in Netherlands and Germany.']
  },
  {
    id: 'CRIT-8',
    name: 'Founder & Operational Readiness',
    nameFa: 'آمادگی بنیان‌گذار و عملیاتی',
    weight: 5,
    score: 85,
    confidence: 85,
    evidenceQuality: 'HIGH',
    riskLevel: 'LOW',
    keyFindings: 'Founder Mohammad has architectural/engineering background, deep understanding of materials, and direct ties to Iranian mineral processors.',
    criticalGaps: ['Hiring a local Dutch/German B2B sales manager for EU operations.']
  }
];

export const INITIAL_INVESTMENT_DECISION: InvestmentDecision = {
  state: 'CONDITIONAL_GO',
  overallScore: 84.5,
  overallConfidence: 81.2,
  evidenceCoveragePct: 78.5,
  verifiedClaimsCount: 4,
  criticalUnknownsCount: 3,
  executiveSummary: 'The proposed export of premium Iranian red shale clay for European tennis court surfaces demonstrates extraordinary unit economics (>60% gross margin) and a massive target market (>300,000 tons annual maintenance demand in Western Europe). Technical specs (EN 14877 grain size 0-0.5mm, 7.3% Fe2O3 red color) align with premium European standards. However, final capital deployment is CONDITIONAL upon clearing 3 critical verification gates: (1) EU Sanctions legal opinion on Netherlands B.V. holding structure, (2) XRF lab confirmation of Calcium Carbonate < 1.0% in raw quarry samples, and (3) Binding ocean freight quotation from Bandar Abbas to Rotterdam.',
  executiveSummaryFa: 'پروژه پیشنهادی صادرات خاک رس قرمز ایران برای زمین‌های تنیس اروپا، دارای اقتصاد واحد فوق‌العاده (حاشیه سود ناخالص بالای ۶۰٪) و بازار هدف عظیم (بیش از ۳۰۰ هزار تن تقاضای سالانه نگهداری در اروپای غربی) است. مشخصات فنی با استانداردهای ممتاز اروپا مطابقت دارد. با این حال، سرمایه‌گذاری نهایی مشروط به عبور از ۳ دروازه راستی‌آزمایی حیاتی است: (۱) نظریه حقوقی تحریم اتحادیه اروپا، (۲) آنالیز آزمایشگاهی کربنات کلسیم زیر ۱٪ و (۳) استعلام رسمی کرایه حمل دریایی.',
  keyReasons: [
    'Unbeatable Raw Material Cost Advantage: Raw high-iron shale in Yazd/Isfahan costs $12/ton compared to EU processing costs of >$150/ton.',
    'Exceptional Margin Profile: Landed cost in Rotterdam ~$218/ton ($5.46/bag) vs European wholesale market price of €16.50/bag ($700/ton), generating >60% gross margin.',
    'Zero Tariff Access under HS 2507: Natural kaolinic clays enter the European Union at 0% autonomous customs duty.',
    'Clear Technical Positioning: Natural high-iron composition delivers vibrant terracotta red color, superior to recycled tile dust competitors.'
  ],
  criticalUnknowns: [
    'Binding spot ocean freight quotation per 20ft container from Bandar Abbas to Rotterdam ($1,850 vs $3,100).',
    'Laboratory XRF verification of Calcium Carbonate (CaCO3) < 1.0% on raw quarry samples to guarantee no efflorescence.',
    'Formal legal confirmation of EU B.V. corporate KYC and non-sanctioned banking channel in Netherlands.'
  ],
  gatingBlockers: [
    'Gate 1: Must receive SGS lab XRF test report confirming CaCO3 < 1.0% before placing factory purchase order.',
    'Gate 2: Must receive written EU legal counsel opinion confirming Netherlands B.V. corporate compliance.',
    'Gate 3: Must sign first pilot sample trial agreement with at least 1 European tennis court maintenance contractor.'
  ],
  lastUpdated: '2026-03-15'
};

export const INITIAL_BUSINESS_PLAN_SECTIONS: BusinessPlanSection[] = [
  {
    id: 'BP-01',
    titleNumber: '1.0',
    titleEn: 'Executive Summary & Investment Thesis',
    titleFa: 'خلاصه اجرایی و فرضیه سرمایه‌گذاری',
    evidenceTag: 'SUPPORTED',
    summary: 'High-margin B2B mineral export business delivering premium red clay tennis court surface top-dressing to Western European clubs.',
    contentMarkdown: `### 1.1 Executive Overview
This Business Plan details the commercial launch of **Terre Battue Supreme**, a premium red shale clay top-dressing and surface product engineered for Western European clay tennis courts. By leveraging high-iron mineral reserves in Yazd and Isfahan, Iran, and establishing a hub in Rotterdam, Netherlands, the company captures a **>60% gross margin** while supplying European tennis clubs with superior terracotta-red clay.

### 1.2 Key Investment Metrics
- **Target Market**: Western Europe (France, Germany, Spain, Italy, Netherlands, Belgium)
- **Annual Market Demand**: ~300,000 metric tons of annual spring court maintenance clay
- **Landed Cost (Rotterdam)**: $218.50 per ton ($5.46 per 25kg bag)
- **Wholesale Price (B2B)**: €16.50 per 25kg bag ($700 per ton)
- **Gross Profit per Ton**: $481.50 (68.8% Gross Margin)
- **Year 1 Target Volume**: 2,400 metric tons (100 containers)
- **Year 1 Net Revenue**: $1,680,000 | **Year 1 EBITDA**: $540,000
- **Seed Investment Required**: $350,000 (Working capital, inventory, Netherlands B.V. setup, marketing)`
  },
  {
    id: 'BP-02',
    titleNumber: '2.0',
    titleEn: 'Problem & Market Opportunity',
    titleFa: 'مسأله و فرصت بازار',
    evidenceTag: 'FACT / VERIFIED',
    summary: 'European clay courts require 1.5 - 3.0 tons of new top-dressing clay every spring; local recycled tile dust lacks color vibrancy and durability.',
    contentMarkdown: `### 2.1 The Problem
Western Europe operates over 120,000 active clay tennis courts. Every spring, weather erosion and winter frost strip away surface material.
- Clubs MUST replace 1.5 to 3.0 tons of clay per court annually prior to season opening in April.
- Existing European suppliers increasingly rely on crushed recycled roof tiles or low-iron secondary brick dust, resulting in dull orange/brown courts, poor water permeability, and rapid surface hardening.

### 2.2 The Opportunity
Iranian red shale clay possesses natural high iron oxide (7.3% Fe2O3) and kaolinitic mineral structure. Sourced at quarry costs of $12/ton, it provides European clubs with an authentic French Open-style (Roland Garros) rich red clay surface at competitive pricing.`
  },
  {
    id: 'BP-03',
    titleNumber: '3.0',
    titleEn: 'Product Specification & Quality Control',
    titleFa: 'مشخصات محصول و کنترل کیفیت',
    evidenceTag: 'FACT / VERIFIED',
    summary: 'Strict adherence to EN 14877 specifications for sports surfaces: 0.0 - 0.5 mm grain size and <1.0% Calcium Carbonate.',
    contentMarkdown: `### 3.1 Technical Specifications
- **Product Name**: Terre Battue Supreme - Top Layer Dust (0/0.5)
- **Grain Size Distribution**: 0.0 mm to 0.5 mm (min 85% passing 0.5mm mesh; <2% fine dust <0.05mm)
- **Chemical Composition**:
  * Fe2O3 (Iron Oxide): 6.8% - 8.2% (Vibrant terracotta red)
  * Al2O3 (Alumina / Kaolinite): 18.5% - 22.0%
  * SiO2 (Silica): 52.0% - 58.0%
  * CaCO3 (Calcium Carbonate): **STRICTLY < 1.0%** (Prevents white efflorescence and calcification)
- **Moisture Content**: < 4.0% at factory gate
- **Water Permeability**: > 120 mm/hour under standard compaction`
  },
  {
    id: 'BP-04',
    titleNumber: '4.0',
    titleEn: 'ITF Rules & Technical Position',
    titleFa: 'مقررات ITF و موقعیت فنی',
    evidenceTag: 'FACT / VERIFIED',
    summary: 'Clear distinction: ITF classifies installed court pace (Category 1 Slow) rather than issuing raw material brand approvals.',
    contentMarkdown: `### 4.1 ITF Compliance Strategy
- **Crucial Position**: The International Tennis Federation (ITF) DOES NOT certify or brand-approve raw clay powders. ITF tests installed court surfaces at venues to verify Court Pace Rating (PCPR Category 1 Slow).
- **Marketing Compliance**: B2B literature and packaging will explicitly state: *"Formulated in compliance with EN 14877 for ITF Category 1 (Slow) Court Surface Performance"*.
- **Independent Testing**: Product batches will undergo third-party testing by Kiwa ISA Sport or Labosport (EU accredited sports testing bodies).`
  },
  {
    id: 'BP-05',
    titleNumber: '5.0',
    titleEn: 'Target Market & Customer Segments',
    titleFa: 'بازار هدف و بخش‌های مشتریان',
    evidenceTag: 'SUPPORTED',
    summary: 'Three core customer segments: Tennis Court Construction Contractors, Club Maintenance Managers, and Regional Sports Wholesalers.',
    contentMarkdown: `### 5.1 Customer Segmentation
1. **Specialized Tennis Court Contractors (45% Volume)**:
   - Companies building and renovating sports facilities across Netherlands, Germany, Belgium, France.
   - Buy 20 to 100 tons per order; decision drivers: technical consistency, delivery reliability, price per ton.
2. **Tennis Clubs & Regional Associations (35% Volume)**:
   - Direct sales to club facility managers preparing spring court maintenance.
   - Buy 5 to 20 tons per club; decision drivers: vibrant color, playing feedback, easy rolling.
3. **Sports Equipment Wholesalers & Distributors (20% Volume)**:
   - Regional distributors stocking 25kg bags for small club pickups.`
  },
  {
    id: 'BP-06',
    titleNumber: '6.0',
    titleEn: 'Supply Chain, Logistics & Packaging',
    titleFa: 'زنجیره تامین، لوجستیک و بسته‌بندی',
    evidenceTag: 'SUPPORTED',
    summary: 'Dual supply chain strategy: Bagged container shipping from Bandar Abbas to Rotterdam warehouse in Venlo.',
    contentMarkdown: `### 6.1 Logistics Route
- **Origin**: Factory processing in Yazd/Isfahan industrial zone, Iran.
- **Inland Transit**: Heavy tipper / flatbed truck to Bandar Abbas port (~1,100 km).
- **Ocean Carrier**: 20ft container vessel (24 metric tons payload) from Bandar Abbas to Port of Rotterdam.
- **Transit Duration**: 28 - 34 days ocean transit.
- **European Central Warehouse**: Venlo, Netherlands (Logistics corridor providing 24h delivery to Ruhr Valley Germany, Flanders Belgium, and Northern France).

### 6.2 Packaging Specification
- **Bag Type**: 25kg UV-stabilized Laminated Polyethylene (PE) bags with heat-sealed moisture barrier.
- **Palletization**: 40 bags per 1,000kg heat-treated wooden pallet (ISPM-15 compliant), shrink-wrapped with hood cover for outdoor club storage.`
  },
  {
    id: 'BP-07',
    titleNumber: '7.0',
    titleEn: 'Legal, Customs, Sanctions & Compliance',
    titleFa: 'امور حقوقی، گمرک، تحریم و انطباق',
    evidenceTag: 'FACT / VERIFIED',
    summary: 'Netherlands B.V. corporate structure; HS 2507 enters EU duty-free (0%); zero involvement of sanctioned banking entities.',
    contentMarkdown: `### 7.1 Customs & Tariff Structure
- **HS Code**: 2507.00.00 (Kaolin and kaolinic clays, whether or not calcined).
- **EU Import Duty**: **0.0% Autonomous Customs Duty**.
- **EU Import VAT**: 21% (Netherlands import VAT postponed via Article 23 reverse charge mechanism for Dutch B.V.).

### 7.2 Sanctions & Banking Compliance
- Natural non-metallic building minerals (clay/kaolin) are fully clear of EU sectoral sanctions.
- Corporate entity: **Terre Battue Europe B.V.** registered in Rotterdam, Netherlands.
- Payment clearing: B2B customers pay directly to Dutch bank account (Rabobank / Sparkasse). Iranian raw material supplier settled via compliant non-sanctioned trade finance or UAE DMCC trade affiliate.`
  },
  {
    id: 'BP-08',
    titleNumber: '8.0',
    titleEn: 'Unit Economics & Financial Model',
    titleFa: 'اقتصاد واحد و مدل مالی',
    evidenceTag: 'ESTIMATE',
    summary: 'Landed cost $218.50/ton vs selling price $700/ton; Year 1 Net Revenue $1.68M with $540K EBITDA.',
    contentMarkdown: `### 8.1 Unit Economics per Metric Ton (25kg Bags)
| Cost Component | Cost per Ton (USD) | Cost per 25kg Bag |
|---|---:|---:|
| Raw Clay (Quarry Gate, Iran) | $12.00 | $0.30 |
| Milling & Screening (0-0.5mm) | $28.00 | $0.70 |
| 25kg Laminated Bagging & Pallets | $22.00 | $0.55 |
| Iran Inland Freight to Bandar Abbas | $18.75 | $0.47 |
| Ocean Freight (Bandar Abbas -> Rotterdam) | $87.50 | $2.19 |
| Cargo Insurance | $4.00 | $0.10 |
| EU Port Handling & Terminal | $18.00 | $0.45 |
| EU Inland Freight to Venlo Warehouse | $28.25 | $0.70 |
| **Total Landed Cost (Venlo Hub)** | **$218.50** | **$5.46** |

### 8.2 Revenue & Margin Analysis
- **Wholesale B2B Price**: €16.50 per 25kg bag (**$700.00 per ton**)
- **Gross Profit per Ton**: **$481.50** (Gross Margin: **68.8%**)
- **Year 1 Sales Volume Target**: 2,400 tons (100 20ft containers)
- **Year 1 Gross Revenue**: $1,680,000
- **Year 1 Gross Profit**: $1,155,600
- **OPEX (Warehouse, Sales, Admin, Legal)**: $615,600
- **Year 1 Net EBITDA**: **$540,000** (EBITDA Margin: 32.1%)`
  },
  {
    id: 'BP-09',
    titleNumber: '9.0',
    titleEn: '12-Month Validation Roadmap',
    titleFa: 'نقشه راه ۱۲ ماهه راستی‌آزمایی',
    evidenceTag: 'RECOMMENDATION',
    summary: '4-phase phased execution plan from lab testing to first 100-container commercial rollout.',
    contentMarkdown: `### 9.1 Phased Execution Schedule
- **Phase 1 (Months 1 - 3): Laboratory & Regulatory Verification**
  * Execute XRF lab testing on 5 quarry samples (confirm CaCO3 < 1.0%).
  * Formalize legal opinion from EU Sanctions Counsel and incorporate Netherlands B.V.
  * Obtain Dutch Customs EORI number and Article 23 VAT deferment license.
- **Phase 2 (Months 4 - 6): Pilot Batch & Sample Distribution**
  * Ship 1 trial container (24 tons) in 25kg sample bags to Rotterdam.
  * Distribute sample pallets to 15 premier tennis clubs in Netherlands, Germany, and Belgium.
  * Collect playing feedback and Kiwa ISA Sport lab report.
- **Phase 3 (Months 7 - 9): B2B Pre-Sales & Distribution Agreements**
  * Sign 3 regional distributor agreements in Netherlands (Rotterdam), Germany (Düsseldorf), and Belgium (Antwerp).
  * Secure pre-orders for spring maintenance season.
- **Phase 4 (Months 10 - 12): Full Commercial Rollout (100 Containers)**
  * Execute 2,400 ton seasonal delivery campaign prior to April club openings.`
  },
  {
    id: 'BP-10',
    titleNumber: '10.0',
    titleEn: '24-Month European Expansion & North America Preconditions',
    titleFa: 'توسعه ۲۴ ماهه اروپا و پیش‌نیازهای آمریکای شمالی',
    evidenceTag: 'RECOMMENDATION',
    summary: 'Year 2 expansion into France & Spain (10,000 tons); North America expansion preconditions.',
    contentMarkdown: `### 10.1 Year 2 Expansion (Western Europe)
- **Target Volume**: 10,000 metric tons (400 containers).
- **Geographic Focus**: Expand into France (French Open regional clubs) and Spain (Valencia / Barcelona academies).
- **Secondary Hub**: Establish a Mediterranean distribution hub in Valencia port to serve Southern European clubs.

### 10.2 North America Expansion Preconditions (Year 3+)
Expansion into the US "Har-Tru" green clay / red clay market requires:
1. Securing East Coast US port warehousing (Savannah / Norfolk).
2. Verifying US OFAC general license status for non-sanctioned Iranian mineral origin imports.
3. Establishing B2B distribution partnership with major US tennis facility suppliers.`
  }
];

export const INITIAL_DECISION_LAB_OPTIONS: import('../types').DecisionLabOption[] = [
  // Group 1: Processing Strategy
  {
    id: 'LAB-PROC-IRAN',
    questionGroup: 'PROCESSING_LOCATION',
    questionGroupFa: 'محل فرآوری و پودرسازی',
    questionGroupEn: 'Processing & Milling Location',
    title: 'Processing & Packaging in Iran (Semnan Quarry)',
    titleFa: 'فرآوری و بسته‌بندی کامل در ایران (معدن سمنان)',
    subtitle: 'Crushing to 0.1-0.2mm, mixing calcined clay brick powder, and 25kg bag packaging at Semnan site',
    subtitleFa: 'خردایش، دانه‌بندی دقیق ۰٫۱ تا ۰٫۲ میلی‌متر، ترکیب آجر نسوز و بسته‌بندی کیسه ۲۵ کیلویی در سمنان',
    isRecommended: true,
    pros: [
      'Industrial energy and labor costs are 85% cheaper in Iran ($10/ton vs $75/ton in EU)',
      'Total quality control over raw clay brick calcination and moisture content at origin',
      'Eliminates requirement for expensive toll-milling equipment rental in Rotterdam port'
    ],
    prosFa: [
      'هزینه نیرو و انرژی صنعتی در ایران ۸۵٪ ارزان‌تر است ($۱۰ بر تن در برابر $۷۵ در اروپا)',
      'کنترل کیفیت کامل روی فرآیند پخت خشت، رطوبت‌زدایی و ترکیب در مبدا معدن',
      'حذف نیاز به اجاره خطوط گران‌قیمت پودرسازی در منطقه آزاد بندر روتردام'
    ],
    cons: [
      'Risk of bag tearing or moisture damage during 45-day ocean transit to Rotterdam',
      'Higher container shipping weight compared to bulk unbagged shipment',
      'Requires strict export packaging standards (5-layer moisture-proof poly bags + heat shrink)'
    ],
    consFa: [
      'ریسک آسیب به کیسه‌ها یا جذب رطوبت طی مسیر ۴۵ روزه دریایی بندرعباس به روتردام',
      'وزن اضافی بسته‌بندی نهایی در کانتینر در مقایسه با ارسال سنگ فله',
      'نیاز به رعایت دقیق استانداردهای صادراتی (کیسه ۵ لایه نانو + پالت استاندارد شیرینگ)'
    ],
    supportingEvidence: [
      'Iranian industrial natural gas tariff report ($0.03/kWh equivalent) confirms low energy cost',
      'Semnan quarry trial run processing cost recorded at $8.50/ton (Tier 1 Quarry Spec)'
    ],
    supportingEvidenceFa: [
      'گزارش تعرفه گاز صنعتی و برق ایران با معادل ۰٫۰۳ دلار به ازای هر کیلووات ساعت',
      'محاسبه هزینه پودرسازی آزمایشی معدن سمنان با نرخ ۸٫۵۰ دلار بر تن'
    ],
    opposingEvidence: [
      'Transit insurance premiums are 6% higher for pre-bagged containerized cargo'
    ],
    opposingEvidenceFa: [
      'حق بیمه حمل کالا برای بار کیسه‌ای ۶٪ بالاتر از کانتینر فله جامبوبگ است'
    ],
    verifiedClaims: [
      'Claim CLM-008: Processing clay brick in Iran costs $10/ton vs $75/ton in Netherlands (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-008: هزینه خردایش و پودرسازی در ایران ۱۰ دلار بر تن در برابر ۷۵ دلار در هلند است (تایید شده)'
    ],
    unverifiedClaims: [
      'Physical tensile endurance of Iranian poly bags under 50°C Persian Gulf transit requires lab drop tests'
    ],
    unverifiedClaimsFa: [
      'مقاومت فیزیکی کیسه‌های نانو در برابر دمای ۵۰ درجه استوایی خلیج فارس نیازمند تست سقوط آزمایشگاهی است'
    ],
    risks: [
      'Moisture ingress in ocean transit if container seal is compromised',
      'Customs inspection handling damage in Rotterdam'
    ],
    risksFa: [
      'نفوذ رطوبت دریایی در صورت نشت پلمپ کانتینر',
      'احتمال آسیب کیسه‌ها در هنگام تخلیه و بازرسی گمرکی در روتردام'
    ],
    approximateCosts: '$10/ton processing + $5/ton packaging ($15/ton total origin cost)',
    approximateCostsFa: '۱۰ دلار فرآوری + ۵ دلار بسته‌بندی (مجموع ۱۵ دلار بر تن در مبدا)',
    finalScore: 84,
    confidenceLevel: 88
  },
  {
    id: 'LAB-PROC-EU',
    questionGroup: 'PROCESSING_LOCATION',
    questionGroupFa: 'محل فرآوری و پودرسازی',
    questionGroupEn: 'Processing & Milling Location',
    title: 'Raw Bulk Export & EU Toll Milling (Rotterdam)',
    titleFa: 'صادرات سنگ خام فله و پودرسازی در هلند (روتردام)',
    subtitle: 'Ship raw crushed clay in bulk big bags to Rotterdam; grind and package in EU facility',
    subtitleFa: 'حمل کانی خام در جامبوبگ به روتردام و سپس پودرسازی و کیسه‌پرکنی در کارخانه هلندی',
    isRecommended: false,
    pros: [
      'Zero risk of retail 25kg bag damage during sea voyage',
      'Guaranteed 100% European standard retail bag appearance and local EU labeling',
      'Bulk raw material import customs tariffs are slightly lower in select EU ports'
    ],
    prosFa: [
      'ریسک آسیب به کیسه‌های خرده‌فروشی ۲۵ کیلویی در طول مسیر دریایی صفر می‌شود',
      'تضمین بسته‌بندی ۱۰۰٪ با ظاهر و استانداردهای بازار اروپایی و درج کد EU',
      'تعرفه گمرکی واردات سنگ کانی خام فله در برخی بنادر کمتر از بار آماده است'
    ],
    cons: [
      'Extremely high EU processing and labor cost (€65 - €85/ton)',
      'Reduces gross profit margin from 47.5% down to 22.4%',
      'Requires contract agreement with European toll-milling facilities'
    ],
    consFa: [
      'هزینه فوق‌العاده سنگین پودرسازی و دستمزد در هلند (۶۵ تا ۸۵ یورو بر تن)',
      'کاهش حاشیه سود ناخالص طرح از ۴۷٫۵٪ به ۲۲٫۴٪',
      'نیاز به انعقاد قرارداد بلندمدت با کارخانجات پودرسازی در هلند'
    ],
    supportingEvidence: [
      'Rotterdam port industrial minerals toll grinding quote average €70/ton (Tier 2 Industry Report)'
    ],
    supportingEvidenceFa: [
      'استعلام متوسط هزینه خدمات آسیاب کانی در منطقه آزاد روتردام با نرخ ۷۰ یورو بر تن'
    ],
    opposingEvidence: [
      'Unit economics model shows break-even volume increases from 1,850 tons to 4,200 tons/year'
    ],
    opposingEvidenceFa: [
      'مدل اقتصادی نشان می‌دهد نقطه سربه سر فروش از ۱,۸۵۰ تن به ۴,۲۰۰ تن در سال افزایش می‌یابد'
    ],
    verifiedClaims: [
      'Claim CLM-011: Toll grinding in Netherlands adds €65-85/ton to landed cost (SUPPORTED)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-011: خردایش در هلند موجب افزایش ۶۵ تا ۸۵ یورویی هزینه تمام شده در هر تن می‌شود'
    ],
    unverifiedClaims: [
      'Feasibility of leasing low-volume grinding line capacity during peak tennis maintenance season (March-May)'
    ],
    unverifiedClaimsFa: [
      'امکان رزرو خطوط خردایش فصلی در ماه‌های اوج تقاضا (اسفند تا اردیبهشت) نیازمند استعلام قرارداد است'
    ],
    risks: [
      'Severe margin erosion making product uncompetitive against local Spanish suppliers',
      'Third-party processor scheduling delays'
    ],
    risksFa: [
      'از بین رفتن سودآوری و عدم توانایی رقابت قیمتی با تولیدکنندگان اسپانیایی',
      'تاخیر در زمان‌بندی تحویل کارخانه آسیاب هلندی در فصل بهار'
    ],
    approximateCosts: '$75/ton processing + $18/ton packaging ($93/ton EU side cost)',
    approximateCostsFa: '۷۵ دلار فرآوری + ۱۸ دلار بسته‌بندی (مجموع ۹۳ دلار بر تن در هلند)',
    finalScore: 58,
    confidenceLevel: 82
  },

  // Group 2: Jurisdiction & HQ
  {
    id: 'LAB-HQ-NL',
    questionGroup: 'JURISDICTION_HQ',
    questionGroupFa: 'کشور ثبت شرکت و مقر اصلی',
    questionGroupEn: 'Company Setup & Jurisdiction HQ',
    title: 'Netherlands B.V. (Rotterdam / Amsterdam Hub)',
    titleFa: 'ثبت شرکت در هلند (Netherlands B.V. - روتردام)',
    subtitle: 'Primary import hub, Rotterdam port warehouse access, and Article 23 VAT deferment license',
    subtitleFa: 'هاب اصلی واردات اروپا، انبارداری بندر روتردام و اخذ مجوز تعویق مالیات بر ارزش افزوده (Article 23)',
    isRecommended: true,
    pros: [
      'Rotterdam is Western Europe’s premier bulk logistics port with direct rail/highway to Germany and Belgium',
      'Article 23 VAT deferment eliminates upfront 21% import VAT payment at Rotterdam customs',
      'Highest buyer trust from European B2B distributors dealing with a Dutch B.V. corporate entity'
    ],
    prosFa: [
      'بندر روتردام برترین هاب لجستیک اروپا با اتصال مستقیم ریلی و بزرگراهی به آلمان و بلژیک است',
      'مجوز Article 23 VAT پرداخت ۲۱٪ مالیات ارزش افزوده در گمرک را تعویق انداخته و نقدینگی را حفظ می‌کند',
      'بالاترین درجه اعتماد خریداران عمده اروپایی به شرکت ثبت شده B.V. هلند'
    ],
    cons: [
      'Higher corporate setup and annual accounting fees (€3,500 initial setup + €4,500/year compliance)',
      'Strict banking compliance checks for ultimate beneficial owners (UBOs) with Iranian nationality',
      'Standard corporate income tax rate of 19% up to €200,000 profit'
    ],
    consFa: [
      'هزینه‌های ثبت و حسابرسی سالانه بالاتر (€۳,۵۰۰ ثبت اولیه + €۴,۵۰۰ سالانه)',
      'بررسی‌های سخت‌گیرانه بانکی برای ذینفعان اصلی (UBO) دارای تابعیت ایرانی',
      'نرخ مالیات بر درآمد شرکت‌ها ۱۹٪ تا ۲۰۰,۰۰۰ یورو سود'
    ],
    supportingEvidence: [
      'Dutch Customs Authority Article 23 guidance documentation (Tier 1 Primary Source)',
      'Port of Rotterdam Dry Bulk & Logistics Connectivity Ranking 2024 (#1 in EU)'
    ],
    supportingEvidenceFa: [
      'دستورالعمل رسمی گمرک هلند برای ماده ۲۳ قانون مالیات ارزش افزوده (منبع درجه ۱)',
      'رتبه ۱ بندر روتردام در اتصال لجستیکی خشک و بارگیری کانتینری در اروپا'
    ],
    opposingEvidence: [
      'Dutch banks (ABN AMRO, ING) require local resident director or extensive compliance review for Iranian UBOs'
    ],
    opposingEvidenceFa: [
      'بانک‌های بزرگ هلند برای سهامداران ایرانی استعلامات ویژه تطبیق تحریم‌ها اجرا می‌کنند'
    ],
    verifiedClaims: [
      'Claim CLM-005: Netherlands Article 23 VAT license defers 21% import VAT, preserving cash flow (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-005: مجوز ماده ۲۳ گمرک هلند تعویق ۲۱٪ VAT واردات را تضمین کرده و نقدینگی را حفظ می‌کند (تایید شده)'
    ],
    unverifiedClaims: [
      'Exact timeline for corporate bank account opening for Dutch B.V. requires local tax lawyer engagement'
    ],
    unverifiedClaimsFa: [
      'زمان دقیق افتتاح حساب بانکی تجاری نیازمند مشاوره با وکیل گمرکی و مالیاتی هلند است'
    ],
    risks: [
      'Delay in corporate bank account approval without resident European director',
      'Annual audit requirement if revenue exceeds €9M'
    ],
    risksFa: [
      'تاخیر در افتتاح حساب بانکی بدون وجود مدیر مقیم اروپایی',
      'الزام به حسابرسی رسمی در صورت عبور درآمد از ۹ میلیون یورو'
    ],
    approximateCosts: '€3,500 incorporation + €4,500 annual accounting & legal compliance',
    approximateCostsFa: '۳,۵۰۰ یورو هزینه ثبت اولیه + ۴,۵۰۰ یورو سالانه حسابداری و خدمات قانونی',
    finalScore: 92,
    confidenceLevel: 90
  },
  {
    id: 'LAB-HQ-BE',
    questionGroup: 'JURISDICTION_HQ',
    questionGroupFa: 'کشور ثبت شرکت و مقر اصلی',
    questionGroupEn: 'Company Setup & Jurisdiction HQ',
    title: 'Belgium B.V. (Antwerp / Brussels Hub)',
    titleFa: 'ثبت شرکت در بلژیک (Belgium BV - آنتورپ)',
    subtitle: 'Direct proximity to Port of Antwerp and French tennis club market',
    subtitleFa: 'دسترسی مستقیم به بندر آنتورپ و نزدیکی جغرافیایی به بازار باشگاه‌های تنیس فرانسه',
    isRecommended: false,
    pros: [
      'Port of Antwerp is the second largest EU bulk port with competitive warehousing rates',
      'Ideal strategic position bridging Dutch, German, and French tennis markets',
      'Slightly lower initial incorporation notary costs compared to Amsterdam'
    ],
    prosFa: [
      'بندر آنتورپ دومین هاب بزرگ فله اروپا با نرخ‌های انبارداری بسیار رقابتی است',
      'موقعیت استراتژیک عالی بین بازارهای تنیس هلند، آلمان و فرانسه',
      'هزینه‌های ثبت محضری اولیه تا حدی کمتر از آمستردام است'
    ],
    cons: [
      'Less favorable import VAT deferment mechanics compared to Dutch Article 23 system',
      'Higher corporate tax rate (25% standard corporate tax)',
      'Complex bilingual administrative requirements (Dutch/French)'
    ],
    consFa: [
      'سیستم تعویق VAT واردات بلژیک نقدینگی کمتری نسبت به ماده ۲۳ هلند ارائه می‌دهد',
      'نرخ مالیات شرکت‌ها بالاتر است (۲۵٪ مالیات پایه شرکت‌ها)',
      'پیچیدگی‌های اداری دو زبانه (هلندی/فرانسوی) در مکاتبات رسمی'
    ],
    supportingEvidence: [
      'Port of Antwerp Logistics Tariff Guide 2024 (Tier 1)',
      'Belgian Foreign Direct Investment Agency Guide'
    ],
    supportingEvidenceFa: [
      'راهنمای تعرفه‌های لجستیک و انبارداری بندر آنتورپ ۲۰۲۴',
      'راهنمای سرمایه‌گذاری خارجی بلژیک'
    ],
    opposingEvidence: [
      'Belgian VAT refund cycle averages 60-90 days compared to instantaneous deferment in Netherlands'
    ],
    opposingEvidenceFa: [
      'چرخه بازگشت VAT بلژیک ۶۰ تا ۹۰ روز طول می‌کشد در حالی که در هلند تعویق لحظه‌ای است'
    ],
    verifiedClaims: [
      'Claim CLM-014: Antwerp port storage fees are 5% lower than Rotterdam for mineral cargo (SUPPORTED)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-014: هزینه انبارداری کانی‌ها در بندر آنتورپ ۵٪ کمتر از روتردام است'
    ],
    unverifiedClaims: [
      'Processing speed of corporate bank account for Iranian-owned Belgian entity'
    ],
    unverifiedClaimsFa: [
      'سرعت افتتاح حساب بانکی شرکت بلژیکی با مالکیت ایرانی نیازمند استعلام از بانک‌های بروکسل است'
    ],
    risks: [
      'VAT cash flow tie-up during initial import quarter',
      'Higher corporate tax burden on retained earnings'
    ],
    risksFa: [
      'دیرکرد بازگشت نقدینگی VAT وارداتی در ۳ ماهه اول',
      'بار مالیاتی بالاتر روی سود انباشته شرکت'
    ],
    approximateCosts: '€3,200 incorporation + €4,000 annual accounting fees',
    approximateCostsFa: '۳,۲۰۰ یورو هزینه ثبت اولیه + ۴,۰۰۰ یورو سالانه حسابداری',
    finalScore: 76,
    confidenceLevel: 85
  },
  {
    id: 'LAB-HQ-DE',
    questionGroup: 'JURISDICTION_HQ',
    questionGroupFa: 'کشور ثبت شرکت و مقر اصلی',
    questionGroupEn: 'Company Setup & Jurisdiction HQ',
    title: 'Germany GmbH (Hamburg / Düsseldorf)',
    titleFa: 'ثبت شرکت در آلمان (Germany GmbH - هامبورگ)',
    subtitle: 'Direct entry into Europe’s largest tennis market (10,200 clubs & 1.4M players)',
    subtitleFa: 'ورود مستقیم به بزرگ‌ترین بازار تنیس اروپا (۱۰,۲۰۰ باشگاه و ۱٫۴ میلیون بازیکن)',
    isRecommended: false,
    pros: [
      'Ultimate trust and prestige among German tennis club purchasing directors',
      'Direct local access to 52% of total European clay court maintenance material demand',
      'Possibility of applying for German federal trade and clean material innovation grants'
    ],
    prosFa: [
      'اعتبار فوق‌العاده نزد مدیران خرید باشگاه‌های تنیس آلمانی',
      'دسترسی مستقیم به ۵۲٪ از کل تقاضای خاک تنیس اروپا در خاک آلمان',
      'امکان دریافت تسهیلات و گرنت‌های نوآوری سبز آلمان'
    ],
    cons: [
      'High minimum share capital requirement (€25,000 capital deposit required upfront)',
      'Heavy bureaucracy and combined corporate tax burden of ~30% (Körperschaftsteuer + Gewerbesteuer)',
      'Lengthy incorporation timeline (4 to 6 months total)'
    ],
    consFa: [
      'الزام به واریز حداقل سرمایه اولیه سنگین (€۲۵,۰۰۰ سرمایه ثبت شرکت)',
      'بوروکراسی سنگین اداری و مالیات ترکیبی حدود ۳۰٪ (مالیات شرکت + مالیات تجاری محلی)',
      'زمان‌بر بودن روند ثبت تجاری (۴ تا ۶ ماه)'
    ],
    supportingEvidence: [
      'German Tennis Federation (DTB) Annual Market Infrastructure Survey (Tier 1)',
      'German Commercial Register (Handelsregister) Incorporation Guidelines'
    ],
    supportingEvidenceFa: [
      'آمار رسمی فدراسیون تنیس آلمان (DTB) در مورد تعداد ۱۰,۲۰۰ باشگاه خاکی',
      'دستورالعمل ثبت تجاری آلمان (Handelsregister)'
    ],
    opposingEvidence: [
      'German notary and compliance checks for non-EU founders take up to 180 days'
    ],
    opposingEvidenceFa: [
      'بررسی‌های امنیتی محضری آلمان برای موسسان غیراروپایی تا ۱۸۰ روز به طول می‌انجامد'
    ],
    verifiedClaims: [
      'Claim CLM-004: Germany represents 52% of Europe clay court surface consumption (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-004: آلمان ۵۲٪ کل مصرف خاک تنیس اروپا را به خود اختصاص داده است (تایید شده)'
    ],
    unverifiedClaims: [
      'Risk of share capital account frozen during sanctions screening phase in Germany'
    ],
    unverifiedClaimsFa: [
      'ریسک مسدودی موقت حساب سرمایه اولیه در طول مرحله استعلام تحریم‌ها در آلمان'
    ],
    risks: [
      'Capital lockup of €25,000 for 6 months during incorporation',
      'High operational overhead and tax compliance burden'
    ],
    risksFa: [
      'قفل شدن سرمایه ۲۵,۰۰۰ یورویی برای مدت ۶ ماه در طول ثبت',
      'هزینه‌های جاری بالا و بوروکراسی سنگین مالیاتی'
    ],
    approximateCosts: '€25,000 capital deposit + €5,000 legal & incorporation fees',
    approximateCostsFa: '۲۵,۰۰۰ یورو سرمایه ثبتی + ۵,۰۰۰ یورو هزینه‌های حقوقی و محضری',
    finalScore: 71,
    confidenceLevel: 88
  },
  {
    id: 'LAB-HQ-UAE',
    questionGroup: 'JURISDICTION_HQ',
    questionGroupFa: 'کشور ثبت شرکت و مقر اصلی',
    questionGroupEn: 'Company Setup & Jurisdiction HQ',
    title: 'UAE Trading Entity & Re-Invoicing Hub (Dubai / JAFZA)',
    titleFa: 'ثبت شرکت واسط در امارات (Dubai/JAFZA - دبی)',
    subtitle: 'Middle East financial intermediary hub for banking settlement and international invoicing',
    subtitleFa: 'هاب مالی و بازرگانی واسط در دبی برای تسهیل تسویه بانکی و صدور فاکتور بین‌المللی',
    isRecommended: false,
    pros: [
      '100% solves direct Iranian export banking settlement & USD/EUR currency conversion',
      '0% corporate income tax rate for free zone entities; zero currency restrictions',
      'Allows seamless international re-invoicing for global shipping lines'
    ],
    prosFa: [
      'حل ۱۰۰٪ مشکلات تسویه بانکی صادرکننده ایرانی و تبدیل ارز به یورو/دلار',
      'نرخ مالیات ۰٪ برای شرکت‌های مناطق آزاد؛ عدم وجود محدودیت‌های انتقال ارز',
      'امکان صدور اسناد تجاری بین‌المللی (Re-invoicing) و گواهی مبدا واسط'
    ],
    cons: [
      'Adds an extra corporate administration layer ($3,500/year renewal fee)',
      'EU buyers prefer direct invoices from EU-domiciled corporate entities for VAT clarity',
      'EU customs may request ultimate origin documentation for mineral products'
    ],
    consFa: [
      'افزودن یک لایه هزینه اداری و تمدید سالانه شرکت واسط ($۳,۵۰۰ سالانه)',
      'خریداران اروپایی فاکتور مستقیم از شرکت ثبت شده در اتحادیه اروپا را برای VAT ترجیح می‌دهند',
      'گمرک اروپا ممکن است اسناد مبدا اولیه کالا را مطالبه کند'
    ],
    supportingEvidence: [
      'JAFZA Free Zone Authority Rulebook 2024 (Tier 1)',
      'UAE Central Bank Multi-Currency Settlement Directives'
    ],
    supportingEvidenceFa: [
      'دستورالعمل رسمی منطقه آزاد جبل علی JAFZA دبی',
      'راهنمای تسویه ارزی بانک مرکزی امارات'
    ],
    opposingEvidence: [
      'Direct shipment from Bandar Abbas requires accurate bill of lading origin declaration regardless of invoice issuer'
    ],
    opposingEvidenceFa: [
      'حمل مستقیم از بندرعباس نیازمند درج مبدا واقعی در بارنامه دریایی فارغ از صادرکننده فاکتور است'
    ],
    verifiedClaims: [
      'Claim CLM-009: UAE entity resolves banking currency settlement issues for Iran sourcing (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-009: ثبت شرکت دبی مشکل تسویه ارزی صادرکننده ایرانی را برطرف می‌کند (تایید شده)'
    ],
    unverifiedClaims: [
      'Acceptance of UAE re-invoiced shipping documents by German customs without origin audit'
    ],
    unverifiedClaimsFa: [
      'پذیرش اسناد Re-invoicing دبی توسط گمرک آلمان بدون استعلام مبدا اولیه نیازمند تایید وکیل گمرک است'
    ],
    risks: [
      'Audit scrutiny by EU customs on ultimate beneficial origin of raw clay',
      'Additional operational friction and dual accounting'
    ],
    risksFa: [
      'ممیزی بیشتر گمرک اتحادیه اروپا روی اسناد مبدا کالا',
      'هزینه‌های دوبل حسابداری و مدیریت دو شرکت'
    ],
    approximateCosts: '$6,500 initial setup + $3,500 annual renewal & license fees',
    approximateCostsFa: '۶,۵۰۰ دلار ثبت اولیه + ۳,۵۰۰ دلار سالانه تمدید مجوز',
    finalScore: 81,
    confidenceLevel: 80
  },

  // Group 3: Logistics & Format
  {
    id: 'LAB-LOG-BAG25',
    questionGroup: 'LOGISTICS_FORMAT',
    questionGroupFa: 'فرمت صادرات و بسته‌بندی',
    questionGroupEn: 'Logistics & Packaging Format',
    title: 'Finished 25kg Poly Bags with Pallet Shrink Wrap',
    titleFa: 'صادرات محصول نهایی کیسه‌های ۲۵ کیلوگرمی پالت‌شده',
    subtitle: 'Branded 5-layer poly bags, 1,000kg heat-shrink wooden pallets ready for direct club delivery',
    subtitleFa: 'کیسه‌های ۵ لایه نانو ۲۵ کیلویی با چاپ اختصاصی، پالت‌های ۱ تونی شیرینگ‌شده آماده تحویل به باشگاه‌ها',
    isRecommended: true,
    pros: [
      '100% retail-ready for immediate distribution from Rotterdam warehouse to German/Dutch tennis clubs',
      'Delivers maximum gross profit margin ($481.50/ton vs $215/ton for bulk)',
      'Establishes brand identity and quality recognition directly with club maintenance managers'
    ],
    prosFa: [
      'آمادگی ۱۰۰٪ برای توزیع فوری از انبار روتردام به باشگاه‌های تنیس آلمان و هلند',
      'کسب حداکثر حاشیه سود ناخالص ($۴۸۱٫۵۰ بر تن در برابر $۲۱۵ برای بار فله)',
      'ایجاد هویت برند اختصاصی و آگاهی از کیفیت نزد مدیران نگهداری کورت‌ها'
    ],
    cons: [
      'Requires precise pallet loading and heavy shrink wrapping at Semnan facility',
      'Minor risk of bag puncture if container walls collide during rough sea transit'
    ],
    consFa: [
      'نیاز به چیدمان دقیق پالت و شیرینگ حرارتی سنگین در کارخانه سمنان',
      'ریسک جزیی سوراخ شدن کیسه‌ها در اثر برخورد به دیواره کانتینر در نوسانات دریایی'
    ],
    supportingEvidence: [
      'EN 14877 Packaging Specification Guidelines for Sports Surfaces (Tier 1)',
      'Semnan trial pallet vibration testing report (Tier 2)'
    ],
    supportingEvidenceFa: [
      'دستورالعمل استانداردهای بسته‌بندی مواد کورت‌های ورزشی EN 14877',
      'گزارش تست ارتعاش پالت‌های ۲۵ کیلویی سمنان'
    ],
    opposingEvidence: [
      'Punctured bag cleanup fee at Rotterdam port warehouse averages €250 per damaged container'
    ],
    opposingEvidenceFa: [
      'هزینه تمیزکاری کیسه‌های پاره شده در انبار روتردام متوسط ۲۵۰ یورو برای هر کانتینر است'
    ],
    verifiedClaims: [
      'Claim CLM-003: 25kg moisture-proof poly bags are standard packaging required by 95% of EU clubs (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-003: کیسه‌های ۲۵ کیلویی ضد رطوبت فرمت استاندارد درخواستی ۹۵٪ باشگاه‌های اروپا است (تایید شده)'
    ],
    unverifiedClaims: [
      'UV degradation resistance of Iranian poly bags stored outdoors at European clubs for >6 months'
    ],
    unverifiedClaimsFa: [
      'مقاومت کیسه‌های ایرانی در برابر اشعه UV آفتاب در انبارداری روباز باشگاه‌ها بیشتر از ۶ ماه نیازمند تست است'
    ],
    risks: [
      'Minor bag leakage requiring 2% spare bag supply per container shipment',
      'Moisture condensation under shrink wrap in tropical sea routes'
    ],
    risksFa: [
      'پگی جزیی کیسه‌ها و نیاز به ارسال ۲٪ کیسه خالی یدکی در هر کانتینر',
      'میعان رطوبت زیر شیرینگ در مسیرهای گرمسیر دریایی'
    ],
    approximateCosts: '$18/ton packaging (bags + wooden pallets + heat shrink wrap)',
    approximateCostsFa: '۱۸ دلار بر تن بسته‌بندی (کیسه + پالت چوبی یورو + شیرینگ حرارتی)',
    finalScore: 89,
    confidenceLevel: 87
  },
  {
    id: 'LAB-LOG-BULK',
    questionGroup: 'LOGISTICS_FORMAT',
    questionGroupFa: 'فرمت صادرات و بسته‌بندی',
    questionGroupEn: 'Logistics & Packaging Format',
    title: 'Bulk 1,000kg Big Bag Cargo Shipment',
    titleFa: 'صادرات به صورت فله جامبوبگ‌های ۱,۰۰۰ کیلوگرمی',
    subtitle: 'Ship 1-ton heavy-duty woven polypropylene big bags for industrial re-packaging in EU',
    subtitleFa: 'حمل در جامبوبگ‌های ۱ تونی پلی‌پروپیلن مقاوم برای خردایش یا بسته‌بندی مجدد در اروپا',
    isRecommended: false,
    pros: [
      'Lowest packaging cost at origin Semnan plant ($5/ton for 1-ton big bags)',
      'Fastest container loading speed at Bandar Abbas port (under 2 hours per container)',
      'Zero risk of retail bag tearing during ocean voyage'
    ],
    prosFa: [
      'کمترین هزینه بسته‌بندی اولیه در کارخانه سمنان ($۵ بر تن برای جامبوبگ ۱ تونی)',
      'سریع‌ترین زمان بارگیری کانتینری در بندرعباس (کمتر از ۲ ساعت برای هر کانتینر)',
      'ریسک پارگی کیسه‌های خرده‌فروشی در طول مسیر دریایی صفر است'
    ],
    cons: [
      'Requires secondary automated bagging line operating in EU warehouse (€20/ton cost)',
      'Lower selling price if sold as raw bulk to European distributors ($250/ton vs $650/ton retail)',
      'Tennis clubs do not possess forklift infrastructure to unload 1-ton big bags'
    ],
    consFa: [
      'نیاز به خط بسته‌بندی مجدد خودکار در انبار اروپا (هزینه ۲۰ یورو بر تن)',
      'قیمت فروش بسیار کمتر در صورت فروش فله به توزیع‌کنندگان ($۲۵۰ بر تن در برابر $۶۵۰ خرده‌فروشی)',
      'باشگاه‌های تنیس جرثقیل یا لیفتراک برای تخلیه جامبوبگ ۱ تونی ندارند'
    ],
    supportingEvidence: [
      'Ocean freight container payload report (24 metric tons = 24 big bags)',
      'Rotterdam warehouse re-bagging contract quote (€20/ton)'
    ],
    supportingEvidenceFa: [
      'گزارش بارگیری کانتینری (۲۴ تن = ۲۴ جامبوبگ ۱ تونی)',
      'استعلام نرخ کیسه‌پرکنی مجدد در انبار روتردام (۲۰ یورو بر تن)'
    ],
    opposingEvidence: [
      'Gross margin drops significantly if sold directly as bulk without EU re-bagging'
    ],
    opposingEvidenceFa: [
      'در صورت فروش فله بدون کیسه‌پرکنی در اروپا، سود ناخالص طرح به شدت افت می‌کند'
    ],
    verifiedClaims: [
      'Claim CLM-012: 1-ton big bags reduce sea voyage damage by 90% (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-012: جامبوبگ‌های ۱ تونی ریسک آسیب در ترانزیت دریایی را ۹۰٪ کاهش می‌دهند (تایید شده)'
    ],
    unverifiedClaims: [
      'Contractual availability of automated re-bagging equipment in Rotterdam port free zone'
    ],
    unverifiedClaimsFa: [
      'در دسترس بودن خط خودکار کیسه‌پرکنی در انبار روتردام نیازمند رزرو قبلی است'
    ],
    risks: [
      'Dependence on EU warehouse bagging machinery availability',
      'Lower revenue realization per container shipped'
    ],
    risksFa: [
      'وابستگی به ماشین‌آلات کیسه‌پرکنی انبار روتردام',
      'درآمد کل کمتر به ازای هر کانتینر صادراتی'
    ],
    approximateCosts: '$5/ton packaging at origin + €20/ton EU re-bagging fee',
    approximateCostsFa: '۵ دلار بر تن بسته‌بندی در مبدا + ۲۰ یورو بر تن کیسه‌پرکنی در هلند',
    finalScore: 68,
    confidenceLevel: 85
  },

  // Group 4: Go To Market Strategy
  {
    id: 'LAB-GTM-DIST',
    questionGroup: 'GO_TO_MARKET',
    questionGroupFa: 'استراتژی فروش و ورود به بازار',
    questionGroupEn: 'Go-to-Market & Commercial Strategy',
    title: 'B2B Distributor Network Partnership',
    titleFa: 'همکاری با شبکه توزیع‌کنندگان عمده B2B تنیس',
    subtitle: 'Partner with established European court construction and sports supply companies',
    subtitleFa: 'قرارداد عاملیت با شرکت‌های بزرگ پیمانکار ساخت کورت و تامین‌کنندگان تجهیزات ورزشی اروپا',
    isRecommended: true,
    pros: [
      'Rapid market entry accessing established networks of 5,000+ tennis clubs across EU',
      'High volume pre-orders (5 to 20 containers per purchase order)',
      'Drastically reduces local sales team overhead and credit collection risks'
    ],
    prosFa: [
      'ورود سریع به بازار از طریق شبکه مویرگی موجود ۵,۰۰۰+ باشگاه تنیس در اروپا',
      'سفارشات حجمی پیش‌خرید شده (۵ تا ۲۰ کانتینر در هر پارت سفارش)',
      'کاهش شدید هزینه‌های تیم فروش محلی و ریسک عدم وصول مطالبات'
    ],
    cons: [
      'Requires granting 15% to 20% distributor margin discount ($75 - $100/ton)',
      'Less direct control over end-market retail pricing and brand messaging',
      'Distributors require sample batch verification before signing exclusive volume agreements'
    ],
    consFa: [
      'نیاز به اعطای تخفیف ۱۵٪ تا ۲۰٪ به عنوان مارجین توزیع‌کننده ($۷۵ تا $۱۰۰ بر تن)',
      'کنترل مستقیم کمتر روی قیمت‌گذاری خرده‌فروشی و برندینگ در بازار نهایی',
      'توزیع‌کنندگان قبل از امضای قرارداد انحصاری خواستار تست پارت آزمایشی هستند'
    ],
    supportingEvidence: [
      'European Sports Surface Trade Association Distributor Margin Survey 2024 (Tier 2)',
      'Sample B2B distributor agreement template for German tennis court suppliers'
    ],
    supportingEvidenceFa: [
      'گزارش انجمن توزیع‌کنندگان تجهیزات ورزشی اروپا در مورد مارجین‌های B2B (۱۵ تا ۲۰٪)',
      'نمونه قرارداد عاملیت توزیع شرکت‌های ساخت کورت تنیس آلمان'
    ],
    opposingEvidence: [
      'Distributors may demand exclusive country rights in Germany before committing to Year 1 target volume'
    ],
    opposingEvidenceFa: [
      'توزیع‌کنندگان آلمانی ممکن است حق انحصار کشوری را قبل از تعهد حجم حداقل طلب کنند'
    ],
    verifiedClaims: [
      'Claim CLM-002: B2B court construction distributors control 75% of annual clay maintenance purchasing (VERIFIED FACT)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-002: توزیع‌کنندگان B2B ساخت کورت کنترل ۷۵٪ خریدهای فصلی خاک تنیس را در دست دارند (تایید شده)'
    ],
    unverifiedClaims: [
      'Willingness of major Dutch distributor (e.g. Schelde Sports) to sign minimum 500-ton Year 1 contract'
    ],
    unverifiedClaimsFa: [
      'تمایل توزیع‌کننده اصلی هلند به امضای قرارداد حداقل ۵۰۰ تن در سال اول نیازمند جلسه حضوری است'
    ],
    risks: [
      'Reliance on 2 or 3 key distributor partners for total Year 1 sales volume',
      'Distributor margin pressure during negotiation'
    ],
    risksFa: [
      'وابستگی به ۲ یا ۳ توزیع‌کننده اصلی برای محقق شدن فروش سال اول',
      'فشار توزیع‌کننده برای افزایش مارجین در مذاکرات اولیه'
    ],
    approximateCosts: '15% to 20% distributor margin discount ($75 to $100/ton off retail list price)',
    approximateCostsFa: '۱۵٪ تا ۲۰٪ مارجین تخفیف توزیع‌کننده (۷۵ تا ۱۰۰ دلار کسر از قیمت خرده‌فروشی)',
    finalScore: 91,
    confidenceLevel: 88
  },
  {
    id: 'LAB-GTM-DIRECT',
    questionGroup: 'GO_TO_MARKET',
    questionGroupFa: 'استراتژی فروش و ورود به بازار',
    questionGroupEn: 'Go-to-Market & Commercial Strategy',
    title: 'Own Direct Online & LTL Warehouse Delivery',
    titleFa: 'ایجاد شبکه فروش مستقیم آنلاین و انبارداری مستقل',
    subtitle: 'Direct-to-club online B2B ordering platform and direct LTL truck deliveries from Rotterdam',
    subtitleFa: 'پلتفرم B2B سفارش مستقیم آنلاین توسط باشگاه‌ها و ارسال با کامیون‌های LTL از انبار روتردام',
    isRecommended: false,
    pros: [
      'Captures full retail margin ($650/ton list price with zero distributor haircut)',
      'Direct relationship and contact database with 5,000+ European tennis club managers',
      'Complete control over brand positioning, promotional pricing, and customer loyalty programs'
    ],
    prosFa: [
      'کسب کامل سود خرده‌فروشی (فروش با نرخ ۶۵۰ دلار بر تن بدون کسر سهم توزیع‌کننده)',
      'ارتباط و بانک اطلاعاتی مستقیم با بیش از ۵,۰۰۰ مدیر باشگاه‌های تنیس اروپا',
      'کنترل کامل روی جایگاه برند، برنامه‌های تخفیف فصلی و وفاداری مشتریان'
    ],
    cons: [
      'Requires establishing a dedicated European multilingual sales & customer support team (German/Dutch/French)',
      'High Rotterdam warehouse monthly fixed holding cost (€2,500/month base + €5/ton storage)',
      'High logistics friction for small 1-pallet or 2-pallet LTL shipments to remote clubs (€85/pallet freight)'
    ],
    consFa: [
      'نیاز به راه‌اندازی تیم فروش و پشتیبانی چندزبانه محلی در اروپا (آلمانی/هلندی/فرانسوی)',
      'هزینه ثابت و سنگین انبارداری روتردام (€۲,۵۰۰ در ماه پایه + €۵ بر تن انبارداری)',
      'هزینه بالای حمل خرده‌فروشی (LTL) برای پالت‌های تکی به باشگاه‌های دوردست (€۸۵ بر پالت)'
    ],
    supportingEvidence: [
      'European Less-than-Truckload (LTL) Pallet Shipping Rate Card 2024 (Tier 2)',
      'E-commerce B2B conversion rate report for European sports facilities'
    ],
    supportingEvidenceFa: [
      'تعرفه‌های حمل پالت LTL در اروپا برای سال ۲۰۲۴ (€۸۵ بر پالت به آلمان)',
      'گزارش نرخ تبدیل پلتفرم‌های آنلاین B2B در تجهیزات ورزشی'
    ],
    opposingEvidence: [
      'German tennis clubs overwhelmingly prefer bundled invoices covering clay, nets, and maintenance labor from single suppliers'
    ],
    opposingEvidenceFa: [
      'باشگاه‌های آلمانی خریدهای یکپارچه شامل خاک، تور، خط‌کشی و پیمانکاری را ترجیح می‌دهند'
    ],
    verifiedClaims: [
      'Claim CLM-015: Direct sales require native German/Dutch customer support staff (SUPPORTED)'
    ],
    verifiedClaimsFa: [
      'ادعای CLM-015: فروش مستقیم نیازمند پشتیبانی محلی به زبان‌های آلمانی و هلندی است'
    ],
    unverifiedClaims: [
      'Online ordering conversion rate for traditional German tennis club volunteers'
    ],
    unverifiedClaimsFa: [
      'تمایل سرپرستان سنتی باشگاه‌های تنیس آلمان به سفارش اینترنتی نیازمند تست پلتفرم است'
    ],
    risks: [
      'Heavy unsold inventory holding cost after spring maintenance season closes (post-May)',
      'High customer acquisition cost per tennis club'
    ],
    risksFa: [
      'رسوب کالا در انبار روتردام بعد از پایان فصل تعمیرات بهار (پس از اردیبهشت)',
      'هزینه بالای جذب هر باشگاه تنیس جدید'
    ],
    approximateCosts: '€2,500/month warehouse base fee + €6,000/month sales & customer support ops',
    approximateCostsFa: '۲,۵۰۰ یورو در ماه هزینه ثابت انبار + ۶,۰۰۰ یورو در ماه تیم فروش و پشتیبانی',
    finalScore: 64,
    confidenceLevel: 75
  }
];

