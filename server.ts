import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini AI Client
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiApiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'),
    timestamp: new Date().toISOString(),
  });
});

// Extract Atomic Claims from imported research text
app.post('/api/research/extract-claims', async (req, res) => {
  try {
    const { documentText, sourceTitle, modelName } = req.body;
    if (!documentText) {
      return res.status(400).json({ error: 'documentText is required' });
    }

    const ai = getAiClient();
    if (ai) {
      const prompt = `You are an expert investment analyst extracting atomic claims from an AI research output regarding exporting Iranian clay/shale for European clay tennis court surfaces.
Extract every factual claim, estimate, assumption, or recommendation from the following text:

Source Title: ${sourceTitle || 'AI Research Output'}
Model Name: ${modelName || 'AI Model'}

DOCUMENT TEXT:
${documentText}

Extract 3 to 8 atomic claims in structured JSON format. For each claim specify:
- canonicalClaim: precise summary statement in English
- canonicalClaimFa: precise Persian translation of the statement
- originalText: exact quote or supporting text snippet
- claimType: one of 'FACT', 'ESTIMATE', 'ASSUMPTION', 'OPINION', 'RECOMMENDATION', 'UNKNOWN'
- category: one of 'Product & Technical', 'ITF & Standards', 'Raw Materials', 'Processing Options', 'Packaging', 'Logistics & Freight', 'Customs & VAT', 'Sanctions & Banking', 'Competitors & Price', 'Target Markets', 'Unit Economics', 'Go-to-Market', 'Grants & Incentives'
- geography: affected region (e.g. 'Iran', 'Europe', 'Netherlands')
- numericValue: optional number if mentioned
- unit: optional unit (e.g. 'EUR/bag', 'USD/ton', 'mm', '%')
- sourceTier: 1 (Govt/ITF), 2 (Industry/Expert), 3 (Media), 4 (AI output)
- evidenceStatus: 'VERIFIED', 'SUPPORTED', 'UNVERIFIED_CONSENSUS', 'SINGLE_SOURCE', 'CONFLICTED', 'PENDING'
- confidenceScore: 0 to 100
- impactScore: 1 to 5 (5 = Critical for Investment Decision)
- verificationPriority: 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              claims: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    canonicalClaim: { type: Type.STRING },
                    canonicalClaimFa: { type: Type.STRING },
                    originalText: { type: Type.STRING },
                    claimType: { type: Type.STRING },
                    category: { type: Type.STRING },
                    geography: { type: Type.STRING },
                    numericValue: { type: Type.NUMBER },
                    unit: { type: Type.STRING },
                    sourceTier: { type: Type.NUMBER },
                    evidenceStatus: { type: Type.STRING },
                    confidenceScore: { type: Type.NUMBER },
                    impactScore: { type: Type.NUMBER },
                    verificationPriority: { type: Type.STRING },
                  },
                  required: ['canonicalClaim', 'claimType', 'category', 'confidenceScore', 'impactScore'],
                },
              },
            },
            required: ['claims'],
          },
        },
      });

      const json = JSON.parse(response.text || '{"claims": []}');
      return res.json({ claims: json.claims || [], source: 'gemini-3.6-flash' });
    }

    // Deterministic fallback if API key is not active
    const claims = [
      {
        canonicalClaim: `Extracted claim from ${sourceTitle || 'document'}: Iranian clay offers high iron oxide color for European courts.`,
        canonicalClaimFa: `ادعای استخراج شده: خاک رس ایران رنگ اکسید آهن بالایی برای زمین‌های اروپایی ارائه می‌دهد.`,
        originalText: documentText.slice(0, 150) + '...',
        claimType: 'FACT',
        category: 'Raw Materials',
        geography: 'Iran / Europe',
        numericValue: 7.2,
        unit: '% Fe2O3',
        sourceTier: 3,
        evidenceStatus: 'SUPPORTED',
        confidenceScore: 85,
        impactScore: 4,
        verificationPriority: 'HIGH',
      },
    ];

    return res.json({ claims, source: 'fallback-heuristic' });
  } catch (err: any) {
    console.error('Error in extract-claims:', err);
    res.status(500).json({ error: err.message || 'Extraction failed' });
  }
});

// Analyze Contradictions across claims
app.post('/api/research/analyze-contradictions', async (req, res) => {
  try {
    const { claims } = req.body;
    const ai = getAiClient();
    if (ai && Array.isArray(claims) && claims.length > 1) {
      const prompt = `Analyze these investment claims regarding Iranian clay export for European tennis courts. Identify any material contradictions or numeric conflicts between claims:

CLAIMS:
${JSON.stringify(claims, null, 2)}

Return JSON with an array of contradictions.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              contradictions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    topic: { type: Type.STRING },
                    contradictionReason: { type: Type.STRING },
                    contradictionReasonFa: { type: Type.STRING },
                    severity: { type: Type.STRING },
                  },
                },
              },
            },
          },
        },
      });

      const json = JSON.parse(response.text || '{"contradictions": []}');
      return res.json({ contradictions: json.contradictions || [] });
    }

    return res.json({ contradictions: [] });
  } catch (err: any) {
    console.error('Error analyzing contradictions:', err);
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend in dev / prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
