import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const generateTTS = async (text: string, apiKey: string) => {
  const response = await axios.post(`${API_URL}/api/tts/generate`, {
    text,
    api_key: apiKey,
  }, {
    responseType: 'blob',
  });
  return response;
};

export const generateGeminiText = async (prompt: string, apiKey: string) => {
  const response = await axios.post(`${API_URL}/api/gemini/generate`, {
    prompt,
    api_key: apiKey,
  });
  return response.data;
};

export const healthCheck = async () => {
  const response = await axios.get(`${API_URL}/api/health`);
  return response.data;
};