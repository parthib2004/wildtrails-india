import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with error handling
const getGeminiAPI = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key not found. Please check your .env file.');
  }
  return new GoogleGenerativeAI(apiKey);
};

export const getGeminiResponse = async (prompt) => {
  try {
    const genAI = getGeminiAPI();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const context = `
      You are an expert on Indian wildlife, national parks, and conservation.
      Provide clear, engaging, and accurate responses about:
      - Indian wildlife species and their behaviors
      - National parks and wildlife sanctuaries
      - Conservation efforts and challenges
      - Best times to visit parks
      - Safari and wildlife viewing tips
      - Wildlife photography advice
      - Local ecosystems and biodiversity
      
      Keep responses friendly and limit them to 2-3 paragraphs.
      Always encourage wildlife conservation and responsible tourism.
    `;

    const result = await model.generateContent(`${context}\n\nUser Question: ${prompt}`);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    if (error.message.includes('API key')) {
      return "Sorry, I'm having trouble connecting to my knowledge base. Please make sure the API key is properly configured.";
    }
    return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.";
  }
};
