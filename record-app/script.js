let mediaRecorder;
let recordedChunks = [];

const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const playButton = document.getElementById('playButton');
const downloadLink = document.getElementById('downloadLink');
const audioPlayback = document.getElementById('audioPlayback');
const speechBtn = document.getElementById('speechToTextButton');
const speechResult = document.getElementById('speechResult');

// ✅ Speech recognition (only English)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

speechBtn.addEventListener('click', () => {
  recognition.start();
  speechResult.innerText = '🎙️ Listening...';
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  speechResult.innerText = '📝 ' + transcript;
};

recognition.onerror = () => {
  speechResult.innerText = '❌ Could not recognize speech. Try again!';
};

// ✅ Recording
recordButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordedChunks = [];

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      audioPlayback.src = url;
      audioPlayback.style.display = 'block';
      downloadLink.href = url;
      downloadLink.innerText = '⬇️';
      playButton.disabled = false;
    };

    mediaRecorder.start();
    recordButton.disabled = true;
    stopButton.disabled = false;
  } catch (err) {
    alert('❌ Microphone not accessible: ' + err.message);
  }
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
  stopButton.disabled = true;
  recordButton.disabled = false;
});

playButton.addEventListener('click', () => {
  playButton.disabled = true;
  audioPlayback.play();
});

audioPlayback.addEventListener('ended', () => {
  playButton.disabled = false;
});
