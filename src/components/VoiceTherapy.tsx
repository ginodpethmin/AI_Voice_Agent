"use client";

import { useEffect, useRef, useState } from "react";

export default function VoiceTherapy() {
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startVoiceTherapy = async () => {
    const apiKey = process.env.NEXT_PUBLIC_HUME_API_KEY!;
    const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID!;

    console.log("Connecting to:", `wss://api.hume.ai/v0/evi2/stream?apikey=${apiKey}&config_id=${configId}`);

    const ws = new WebSocket(
      `wss://api.hume.ai/v0/evi2/stream?apikey=${apiKey}&config_id=${configId}`
    );

    ws.binaryType = "arraybuffer";

    ws.onopen = async () => {
      console.log("✅ WebSocket connected to EVI 2");

      // Send EVI 2 start message
      const startMsg = {
        type: "start",
        // you can add config here if needed
      };
      ws.send(JSON.stringify(startMsg));
      console.log("🚀 Sent start message to EVI 2");

      // Start mic
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext({ sampleRate: 16000 });
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);

      source.connect(processor);
      processor.connect(audioContext.destination);

      processor.onaudioprocess = (e) => {
        const input = e.inputBuffer.getChannelData(0);
        const pcmData = convertFloat32ToInt16(input);

        if (ws.readyState === WebSocket.OPEN) {
          ws.send(pcmData);
        }
      };

      // Save refs
      wsRef.current = ws;
      audioContextRef.current = audioContext;
      sourceRef.current = source;
      processorRef.current = processor;

      setIsRecording(true);
      console.log("🎤 Microphone started");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("🗣 EVI 2 Response:", data);

      // EVI 2 responses structure
      if (data.reply && data.reply.text) {
        const utterance = new SpeechSynthesisUtterance(data.reply.text);
        window.speechSynthesis.speak(utterance);
      }
    };

    ws.onclose = () => {
      console.log("❌ WebSocket closed");
      cleanupAudio();
      setIsRecording(false);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      cleanupAudio();
      setIsRecording(false);
    };
  };

  const stopVoiceTherapy = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
    cleanupAudio();
    setIsRecording(false);
    console.log("🛑 Stopped voice therapy");
  };

  const cleanupAudio = () => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current.onaudioprocess = null;
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const convertFloat32ToInt16 = (buffer: Float32Array) => {
    const len = buffer.length;
    const result = new Int16Array(len);

    for (let i = 0; i < len; i++) {
      const s = Math.max(-1, Math.min(1, buffer[i]));
      result[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }

    return result.buffer;
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">🎙️ Voice Therapy</h2>

      {isRecording ? (
        <button
          onClick={stopVoiceTherapy}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Stop Voice Therapy
        </button>
      ) : (
        <button
          onClick={startVoiceTherapy}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Start Voice Therapy
        </button>
      )}

      <div>Status: {isRecording ? "🎤 Recording" : "⏸️ Stopped"}</div>
    </div>
  );
}
