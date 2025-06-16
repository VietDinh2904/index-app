const recordBtn     = document.getElementById('recordBtn');
const playBtn       = document.getElementById('playBtn');
const downloadBtn   = document.getElementById('downloadBtn');
const audioPlayback = document.getElementById('audioPlayback');
const timerDisplay  = document.getElementById('timer');

let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let timerInterval;

// Hide timer on load
timerDisplay.style.display = 'none';

recordBtn.addEventListener('click', async () => {
  if (!isRecording) {
    // --- START RECORDING ---
    isRecording = true;
    recordBtn.classList.add('recording');
    audioChunks = [];

    // Show & reset timer
    timerDisplay.style.display = 'block';
    let seconds = 0;
    timerDisplay.textContent = '00:00';
    timerInterval = setInterval(() => {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      timerDisplay.textContent = `${m}:${s}`;
    }, 1000);

    // Start MediaRecorder
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

      // Disable other buttons
      playBtn.disabled     = true;
      downloadBtn.disabled = true;
    } catch (err) {
      console.error('Cannot access microphone:', err);
      alert('Please allow microphone access to record.');
      // reset UI
      clearInterval(timerInterval);
      timerDisplay.style.display = 'none';
      isRecording = false;
      recordBtn.classList.remove('recording');
    }

  } else {
    // --- STOP RECORDING ---
    isRecording = false;
    recordBtn.classList.remove('recording');

    clearInterval(timerInterval);
    timerDisplay.style.display = 'none';

    mediaRecorder.stop();
    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      const url  = URL.createObjectURL(blob);
      audioPlayback.src = url;

      playBtn.disabled     = false;
      downloadBtn.disabled = false;

      downloadBtn.onclick = () => {
        const a = document.createElement('a');
        a.href        = url;
        a.download    = 'recording.webm';
        a.click();
      };
    };
  }
});

playBtn.addEventListener('click', () => audioPlayback.play());
