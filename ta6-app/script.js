let dataTests = [];
let questions = [];
let currentQ = 0;

const sectionSelect     = document.getElementById('sectionSelect');
const scoreboard        = document.getElementById('scoreboard');
const passageText       = document.getElementById('passageText');
const questionText      = document.getElementById('questionText');
const optionsGrid       = document.getElementById('optionsGrid');
const textInputContainer= document.getElementById('textInputContainer');
const textInput         = document.getElementById('textInput');
const submitBtn         = document.getElementById('submitBtn');
const feedback          = document.getElementById('feedback');

// Fetch our JSON bank
fetch('questions.json')
  .then(r => r.json())
  .then(j => {
    dataTests = j.tests;
    initDropdown();
    sectionSelect.addEventListener('change', onSectionChange);
    sectionSelect.selectedIndex = 0;
    onSectionChange();
  })
  .catch(console.error);

function initDropdown() {
  dataTests.forEach((t,i) => {
    let o = document.createElement('option');
    o.value = i;
    o.textContent = t.title;
    sectionSelect.append(o);
  });
}

function onSectionChange() {
  const idx = +sectionSelect.value;
  const test = dataTests[idx];
  // flatten into one question array
  if (Array.isArray(test.questions)) {
    questions = test.questions;
  } else {
    questions = [];
    test.sections.forEach(sec => {
      if (sec.passage) sec.questions.forEach(q=> q.passage = sec.passage);
      questions.push(...sec.questions);
    });
  }
  currentQ = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  // scoreboard
  scoreboard.textContent = `Câu ${currentQ+1}/${questions.length}`;
  // passage
  if (q.passage) {
    passageText.textContent = q.passage;
    passageText.hidden = false;
  } else {
    passageText.hidden = true;
  }
  // question
  questionText.textContent = q.question;
  feedback.textContent = '';
  // clear UI
  optionsGrid.innerHTML = '';
  optionsGrid.hidden       = true;
  textInputContainer.hidden= true;
  textInput.value          = '';

  // multiple-choice / true-false
  if (q.type==='multiple-choice' || q.type==='true-false') {
    optionsGrid.hidden = false;
    for (let key in q.options) {
      let btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${key}. ${q.options[key]}`;
      btn.onclick = () => {
        optionsGrid.querySelectorAll('button')
          .forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
      };
      optionsGrid.append(btn);
    }
    submitBtn.onclick = () => checkMC(q);
  }
  // fill-blank / reorder / rewrite
  else {
    textInputContainer.hidden = false;
    submitBtn.onclick = () => checkText(q);
  }
}

function checkMC(q) {
  const sel = optionsGrid.querySelector('button.selected');
  if (!sel) {
    feedback.textContent = 'Vui lòng chọn đáp án.';
    return;
  }
  const key = sel.textContent.split('.')[0];
  if (key === q.correctAnswer) {
    feedback.textContent = '✅ Đúng!';
    nextQ();
  } else {
    feedback.textContent = '❌ Sai, quay về câu 1.';
    setTimeout(()=>{ currentQ=0; renderQuestion(); }, 1000);
  }
}

function checkText(q) {
  const ans = textInput.value.trim().toLowerCase();
  let valids = [];
  if (q.type==='fill-blank') {
    valids = q.correctAnswers.map(a=>a.toLowerCase());
  } else {
    valids = [q.answer.toLowerCase()];
  }
  if (valids.includes(ans)) {
    feedback.textContent = '✅ Đúng!';
    nextQ();
  } else {
    feedback.textContent = '❌ Sai, quay về câu 1.';
    setTimeout(()=>{ currentQ=0; renderQuestion(); }, 1000);
  }
}

function nextQ() {
  if (currentQ < questions.length-1) {
    currentQ++;
    setTimeout(renderQuestion, 500);
  } else {
    feedback.textContent = '🎉 Bạn đã hoàn thành phần này!';
    submitBtn.disabled = true;
  }
}
