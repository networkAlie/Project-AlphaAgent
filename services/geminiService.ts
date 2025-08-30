import { GoogleGenAI } from "@google/genai";
import { Project } from '../types';

const generatePrompt = (themeQuery: string): string => `
# ROLE & MISSION
You are AlphaAgent, an Autonomous Discovery Agent for Alie Network. Your mission is to identify high-potential, pre-launch or newly launched Web3 projects that match the strategic theme: "${themeQuery}". You must act as a preliminary analyst, scoring each project and providing a rationale.

# CHAIN-OF-THOUGHT PROCESS
1.  **Understand**: Analyze the theme: "${themeQuery}". Identify core keywords.
2.  **Source Discovery**: Use your internal knowledge and search tools to find the best source platforms (e.g., ICO Drops, CryptoRank, DappRadar).
3.  **Data Synthesis & Analysis**: For each relevant project, extract the required data points. Critically evaluate each project based on its description, category, and launch status to assign a potential score.
4.  **Reporting**: Format the synthesized data strictly according to the mandatory JSON output format.

# ACTION PLAN
1.  Identify 3-5 top source platforms relevant to the theme.
2.  Find at least 100 relevant projects from these sources. It is critical that you find as close to 100 projects as possible.
3.  For each project, meticulously extract the data, assign a score, and write a brief analyst note. If information is unavailable, use "N/A".
4.  Compile all project data into a single JSON array.

# MANDATORY OUTPUT FORMAT
Your final output must be ONLY a single, valid JSON array of objects. Do not include any other text, explanations, or markdown. Each object must strictly follow this structure:
[
  {
    "Proje_Adı": "Project Name",
    "Website_URL": "https://example.com",
    "Kaynak_Platform": "Source Website (e.g., CryptoRank)",
    "Kategori_Etiketler": "Comma-separated tags (e.g., GameFi, IDO)",
    "Lansman_Tarihi_Durumu": "Launch date or status (e.g., 2025-Q4, Upcoming)",
    "Ham_Açıklama": "A short, one-sentence project description.",
    "Potansiyel_Skoru": 8,
    "Analist_Notu": "Strong backing and a clear roadmap in a high-growth sector."
  }
]
`;


export const runAlphaAgent = async (themeQuery: string, apiKey: string): Promise<Project[]> => {
    if (!apiKey) {
        throw new Error("Gemini API key not provided.");
    }
    
    const ai = new GoogleGenAI({ apiKey });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: generatePrompt(themeQuery),
            config: {
                temperature: 0.1,
                tools: [{googleSearch: {}}],
            },
        });

        const jsonText = response.text.trim();
        const cleanedJsonText = jsonText.replace(/^```json\s*/, '').replace(/```$/, '');
        
        let projects: Project[] = JSON.parse(cleanedJsonText);
        
        if (!Array.isArray(projects)) {
            throw new Error("API did not return a valid array of projects.");
        }
        
        // Ensure score is a number, default to 0 if not.
        projects = projects.map(p => ({
            ...p,
            Potansiyel_Skoru: Number(p.Potansiyel_Skoru) || 0,
        }));
        
        return projects;
    } catch (error) {
        console.error("Error running AlphaAgent:", error);
        if (error instanceof SyntaxError) {
            throw new Error("Failed to parse the response from the Gemini API. The model may have generated invalid JSON.");
        }
        if (error instanceof Error && error.message.includes('API key not valid')) {
            throw new Error('The provided Gemini API key is not valid. Please check your key and try again.');
        }
        throw new Error("Failed to get a valid response from the Gemini API. The model may have failed to generate valid JSON or encountered another issue.");
    }
};