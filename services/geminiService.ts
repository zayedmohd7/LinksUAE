import { GoogleGenAI, Type } from "@google/genai";
import { AppItem, RecommendationResponse } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getRecommendation(
    userMessage: string,
    appsContext: AppItem[]
  ): Promise<RecommendationResponse> {
    const prompt = `
        You are an intelligent concierge for the UAE LaunchPad digital directory.
        The user is asking: "${userMessage}"

        Here is the database of available apps/services:
        ${JSON.stringify(appsContext.map(a => ({ name: a.name, desc: a.desc, tags: a.tags })))}

        Task:
        1. Answer the user's question helpfully.
        2. Recommend specific apps from the database that solve their problem.
        3. Return your response as a valid JSON object.
        
        Important: Only recommend apps that strictly exist in the database provided. If no app fits, give general advice but return empty list for recommended_apps.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              answer: {
                type: Type.STRING,
                description: "A helpful text explanation (keep it concise, friendly, and use markdown for bolding key terms).",
              },
              recommended_apps: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "List of exact app names from the database that solve the problem.",
              },
            },
            propertyOrdering: ["answer", "recommended_apps"],
          },
        },
      });

      const text = response.text;
      if (!text) throw new Error("No response from AI");
      
      const result = JSON.parse(text) as RecommendationResponse;
      return result;

    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}
