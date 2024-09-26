import React from 'react';
import { SpeechRecognition, useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    console.log(transcript);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent text-white ">
  <p className="mb-4">Microphone: {listening ? 'on' : 'off'}</p>
  <div className="flex space-x-4">
    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded" onClick={SpeechRecognition.startListening}>Start</button>
    <button className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded" onClick={SpeechRecognition.stopListening}>Stop</button>
    <button className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded" onClick={resetTranscript}>Reset</button>
  </div>
  <p className="mt-4 w-full">{transcript}</p>
</div>
  );
};





export default Home;
