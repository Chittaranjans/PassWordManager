import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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
    <div>
      <p className='text-white'>Microphone: {listening ? 'on' : 'off'}</p>
      <button className='text-white' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='text-white' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='text-white' onClick={resetTranscript}>Reset</button>
      <p className='text-white'>{transcript}</p>
    </div>
  );
};
export default Home;