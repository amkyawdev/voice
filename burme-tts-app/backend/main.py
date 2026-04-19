from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import google.generativeai as genai
import pyttsx3
import io
import os
from gtts import gTTS

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TTSRequest(BaseModel):
    text: str
    voice_type: str = "default"
    api_key: str

class GeminiRequest(BaseModel):
    prompt: str
    api_key: str

@app.post("/api/tts/generate")
async def generate_speech(request: TTSRequest):
    try:
        # Configure Gemini
        genai.configure(api_key=request.api_key)
        model = genai.GenerativeModel('gemini-pro')

        # Generate response from Gemini
        response = model.generate_content(request.text)
        generated_text = response.text

        # Convert text to speech
        tts = gTTS(text=generated_text, lang='en', slow=False)

        # Save to bytes
        audio_bytes = io.BytesIO()
        tts.write_to_fp(audio_bytes)
        audio_bytes.seek(0)

        return StreamingResponse(
            audio_bytes,
            media_type="audio/mpeg",
            headers={"X-Generated-Text": generated_text}
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/gemini/generate")
async def gemini_generate(request: GeminiRequest):
    try:
        genai.configure(api_key=request.api_key)
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(request.prompt)

        return {"text": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}