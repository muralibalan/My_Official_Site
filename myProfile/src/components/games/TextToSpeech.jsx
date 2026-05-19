import React, { useState } from 'react';

function TextToSpeech() {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text.trim() === '') {
      alert('Pls edhavadhu text type pannunga!');
      return;
    }

    // Web Speech API-ah call pandrom
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.pitch = 1; // Voice pitch (0 to 2)
    speech.rate = 1;  // Speed (0.1 to 10)
    speech.volume = 1; // Volume (0 to 1)

    // Unga browser-la default-ah irukra speaker-la run aagum
    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Text to Speech Converter</h2>
      
      {/* Text Box */}
      <textarea
        rows="4"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Inga ethavathu type pannunga..."
        style={{ padding: '10px', fontSize: '16px', display: 'block', marginBottom: '10px' }}
      />

      {/* Speak Button */}
      <button
        onClick={handleSpeak}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        Speak 🔊
      </button>
    </div>
  );
}

export default TextToSpeech;