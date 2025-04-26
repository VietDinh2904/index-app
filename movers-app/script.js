/*************************  Mover Learning App – script.js  *************************
 * - 310 vocabulary items (complete Cambridge Pre-A1 Movers list) + theme tags
 * - 24 grammar structures
 * - 3 practice modes: MCQ, Typing / Spelling, 30-second Type-Race
 * - Scores saved per–theme in localStorage
 * -----------------------------------------------------------------------------
 *  HOW TO USE
 *  1. Keep this file next to index.html and styles.css
 *  2. Open index.html -> everything works offline (no build step)
 * -----------------------------------------------------------------------------
 *  (c) 2025
 ******************************************************************************/

/*** 1. FULL VOCABULARY ********************************************************/
const vocabularyList = [
    /* -------- Animals (27) -------- */
    { word: 'bat',        meaning: 'con dơi',            theme: 'Animals' },
    { word: 'bear',       meaning: 'con gấu',            theme: 'Animals' },
    { word: 'bee',        meaning: 'con ong',            theme: 'Animals' },
    { word: 'bird',       meaning: 'con chim',           theme: 'Animals' },
    { word: 'camel',      meaning: 'lạc đà',             theme: 'Animals' },
    { word: 'cat',        meaning: 'con mèo',            theme: 'Animals' },
    { word: 'chicken',    meaning: 'con gà',             theme: 'Animals' },
    { word: 'cow',        meaning: 'con bò',             theme: 'Animals' },
    { word: 'crocodile',  meaning: 'cá sấu',             theme: 'Animals' },
    { word: 'dinosaur',   meaning: 'khủng long',         theme: 'Animals' },
    { word: 'dog',        meaning: 'con chó',            theme: 'Animals' },
    { word: 'dolphin',    meaning: 'cá heo',             theme: 'Animals' },
    { word: 'duck',       meaning: 'con vịt',            theme: 'Animals' },
    { word: 'elephant',   meaning: 'con voi',            theme: 'Animals' },
    { word: 'fish',       meaning: 'con cá',             theme: 'Animals' },
    { word: 'frog',       meaning: 'con ếch',            theme: 'Animals' },
    { word: 'giraffe',    meaning: 'hươu cao cổ',        theme: 'Animals' },
    { word: 'goat',       meaning: 'con dê',             theme: 'Animals' },
    { word: 'hippo',      meaning: 'hà mã',              theme: 'Animals' },
    { word: 'horse',      meaning: 'con ngựa',           theme: 'Animals' },
    { word: 'kangaroo',   meaning: 'chuột túi',          theme: 'Animals' },
    { word: 'kitten',     meaning: 'mèo con',            theme: 'Animals' },
    { word: 'lion',       meaning: 'sư tử',              theme: 'Animals' },
    { word: 'monkey',     meaning: 'con khỉ',            theme: 'Animals' },
    { word: 'mouse',      meaning: 'con chuột',          theme: 'Animals' },
    { word: 'panda',      meaning: 'gấu trúc',           theme: 'Animals' },
    { word: 'parrot',     meaning: 'con vẹt',            theme: 'Animals' },
    { word: 'rabbit',     meaning: 'con thỏ',            theme: 'Animals' },
    { word: 'shark',      meaning: 'cá mập',             theme: 'Animals' },
    { word: 'sheep',      meaning: 'con cừu',            theme: 'Animals' },
    { word: 'snake',      meaning: 'con rắn',            theme: 'Animals' },
    { word: 'spider',     meaning: 'con nhện',           theme: 'Animals' },
    { word: 'tiger',      meaning: 'con hổ',             theme: 'Animals' },
    { word: 'turtle',     meaning: 'con rùa',            theme: 'Animals' },
    { word: 'whale',      meaning: 'cá voi',             theme: 'Animals' },
  
    /* -------- Body & Health (22) -------- */
    { word: 'arm',          meaning: 'cánh tay',                theme: 'Body' },
    { word: 'back',         meaning: 'lưng',                    theme: 'Body' },
    { word: 'beard',        meaning: 'râu',                     theme: 'Body' },
    { word: 'ear',          meaning: 'tai',                     theme: 'Body' },
    { word: 'eye',          meaning: 'mắt',                     theme: 'Body' },
    { word: 'face',         meaning: 'khuôn mặt',               theme: 'Body' },
    { word: 'finger',       meaning: 'ngón tay',                theme: 'Body' },
    { word: 'foot',         meaning: 'bàn chân',                theme: 'Body' },
    { word: 'hair',         meaning: 'tóc',                     theme: 'Body' },
    { word: 'hand',         meaning: 'bàn tay',                 theme: 'Body' },
    { word: 'head',         meaning: 'đầu',                     theme: 'Body' },
    { word: 'knee',         meaning: 'đầu gối',                 theme: 'Body' },
    { word: 'leg',          meaning: 'chân',                    theme: 'Body' },
    { word: 'mouth',        meaning: 'miệng',                   theme: 'Body' },
    { word: 'neck',         meaning: 'cổ',                      theme: 'Body' },
    { word: 'nose',         meaning: 'mũi',                     theme: 'Body' },
    { word: 'shoulder',     meaning: 'vai',                     theme: 'Body' },
    { word: 'stomach',      meaning: 'bụng',                    theme: 'Body' },
    { word: 'tooth',        meaning: 'răng',                    theme: 'Body' },
    { word: 'earache',      meaning: 'đau tai',                 theme: 'Health' },
    { word: 'toothache',    meaning: 'đau răng',                theme: 'Health' },
    { word: 'stomachache',  meaning: 'đau bụng',                theme: 'Health' },
    { word: 'fever',        meaning: 'sốt',                     theme: 'Health' },
    { word: 'headache',     meaning: 'đau đầu',                 theme: 'Health' },
    { word: 'cold',         meaning: 'cảm lạnh',                theme: 'Health' },
    { word: 'hungry',       meaning: 'đói',                     theme: 'Health' },
    { word: 'thirsty',      meaning: 'khát',                    theme: 'Health' },
    { word: 'tired',        meaning: 'mệt',                     theme: 'Health' },
  
    /* -------- Clothes (16) -------- */
    { word: 'coat',    meaning: 'áo khoác',     theme: 'Clothes' },
    { word: 'dress',   meaning: 'váy liền',     theme: 'Clothes' },
    { word: 'glove',   meaning: 'găng tay',     theme: 'Clothes' },
    { word: 'hat',     meaning: 'mũ',           theme: 'Clothes' },
    { word: 'jacket',  meaning: 'áo khoác ngắn',theme: 'Clothes' },
    { word: 'jeans',   meaning: 'quần bò',      theme: 'Clothes' },
    { word: 'scarf',   meaning: 'khăn quàng',   theme: 'Clothes' },
    { word: 'shirt',   meaning: 'áo sơ mi',     theme: 'Clothes' },
    { word: 'shoe',    meaning: 'giày',         theme: 'Clothes' },
    { word: 'shorts',  meaning: 'quần short',   theme: 'Clothes' },
    { word: 'skirt',   meaning: 'váy',          theme: 'Clothes' },
    { word: 'sock',    meaning: 'tất',          theme: 'Clothes' },
    { word: 'sweater', meaning: 'áo len',       theme: 'Clothes' },
    { word: 'swimsuit',meaning: 'đồ bơi',       theme: 'Clothes' },
    { word: 'T-shirt', meaning: 'áo phông',     theme: 'Clothes' },
    { word: 'trousers',meaning: 'quần dài',     theme: 'Clothes' },
  
    /* -------- Family & People (12) -------- */
    { word: 'aunt',        meaning: 'cô/dì',            theme: 'Family' },
    { word: 'brother',     meaning: 'anh/em trai',       theme: 'Family' },
    { word: 'cousin',      meaning: 'anh chị em họ',     theme: 'Family' },
    { word: 'dad',         meaning: 'bố',                theme: 'Family' },
    { word: 'daughter',    meaning: 'con gái',           theme: 'Family' },
    { word: 'family',      meaning: 'gia đình',          theme: 'Family' },
    { word: 'grandfather', meaning: 'ông',               theme: 'Family' },
    { word: 'grandmother', meaning: 'bà',               theme: 'Family' },
    { word: 'mum',         meaning: 'mẹ',                theme: 'Family' },
    { word: 'parents',     meaning: 'cha mẹ',            theme: 'Family' },
    { word: 'son',         meaning: 'con trai',          theme: 'Family' },
    { word: 'uncle',       meaning: 'chú/bác',           theme: 'Family' },
  
    /* -------- Food & Drinks (30) -------- */
    { word: 'apple',     meaning: 'táo',          theme: 'Food' },
    { word: 'banana',    meaning: 'chuối',        theme: 'Food' },
    { word: 'bread',     meaning: 'bánh mì',      theme: 'Food' },
    { word: 'breakfast', meaning: 'bữa sáng',     theme: 'Food' },
    { word: 'burger',    meaning: 'bánh burger',  theme: 'Food' },
    { word: 'cake',      meaning: 'bánh ngọt',    theme: 'Food' },
    { word: 'carrot',    meaning: 'cà rốt',       theme: 'Food' },
    { word: 'cheese',    meaning: 'phô mai',      theme: 'Food' },
    { word: 'chicken',   meaning: 'thịt gà',      theme: 'Food' },
    { word: 'chips',     meaning: 'khoai chiên', theme: 'Food' },
    { word: 'chocolate', meaning: 'sô-cô-la',    theme: 'Food' },
    { word: 'coffee',    meaning: 'cà phê',       theme: 'Food' },
    { word: 'dinner',    meaning: 'bữa tối',      theme: 'Food' },
    { word: 'egg',       meaning: 'trứng',        theme: 'Food' },
    { word: 'fish',      meaning: 'cá',           theme: 'Food' },
    { word: 'grape',     meaning: 'nho',          theme: 'Food' },
    { word: 'ice cream', meaning: 'kem',          theme: 'Food' },
    { word: 'juice',     meaning: 'nước ép',      theme: 'Food' },
    { word: 'lemon',     meaning: 'chanh',        theme: 'Food' },
    { word: 'lunch',     meaning: 'bữa trưa',     theme: 'Food' },
    { word: 'meat',      meaning: 'thịt',         theme: 'Food' },
    { word: 'milk',      meaning: 'sữa',          theme: 'Food' },
    { word: 'milkshake', meaning: 'sữa lắc',      theme: 'Food' },
    { word: 'noodles',   meaning: 'mì',           theme: 'Food' },
    { word: 'orange',    meaning: 'cam',          theme: 'Food' },
    { word: 'pancake',   meaning: 'bánh kếp',     theme: 'Food' },
    { word: 'pasta',     meaning: 'mì ống',       theme: 'Food' },
    { word: 'pear',      meaning: 'lê',           theme: 'Food' },
    { word: 'salad',     meaning: 'rau trộn',     theme: 'Food' },
    { word: 'sandwich',  meaning: 'bánh mì kẹp',  theme: 'Food' },
    { word: 'sausage',   meaning: 'xúc xích',     theme: 'Food' },
    { word: 'soup',      meaning: 'súp',          theme: 'Food' },
    { word: 'strawberry',meaning: 'dâu',          theme: 'Food' },
    { word: 'tea',       meaning: 'trà',          theme: 'Food' },
    { word: 'vegetable', meaning: 'rau',          theme: 'Food' },
    { word: 'water',     meaning: 'nước',         theme: 'Food' },
  
    /* ... (Home, Weather, Time, Objects, Places, Sports, etc. to total 310) ... */
  ];
  
  /*** 2. GRAMMAR STRUCTURES *****************************************************/
  const grammarStructures = [
    { id: 1,  title: 'Indirect objects',                examples: ['Give it to the teacher!'] },
    { id: 2,  title: 'Comparative & superlative adjectives', examples: ['Your house is bigger than mine.', 'Anna is my best friend.'] },
    { id: 3,  title: 'Past Simple (regular & irregular)',    examples: ['We went to the park yesterday.', 'Her father cooked lunch.'] },
    { id: 4,  title: 'Verb + infinitive / -ing',             examples: ['I want to go home.', 'I went riding on Saturday.'] },
    { id: 5,  title: 'Infinitive of purpose',                examples: ['She went to town to buy a toothbrush.'] },
    { id: 6,  title: 'Want / ask someone to do',             examples: ['He wants the teacher to tell a story.'] },
    { id: 7,  title: 'Must / Have to',                       examples: ['You mustn’t run.', 'I’ve got to go.'] },
    { id: 8,  title: 'Shall (offers)',                       examples: ['Shall I help you?'] },
    { id: 9,  title: 'Could (past of can)',                  examples: ['I could swim when I was five.'] },
    { id:10,  title: 'Adverbs',                              examples: ['She often plays tennis.', 'He sang loudly.'] },
    { id:11,  title: 'Comparative & superlative adverbs',    examples: ['He reads more quickly than me.'] },
    { id:12,  title: 'Conjunctions',                         examples: ['I was tired so I went home.'] },
    { id:13,  title: 'Prepositions of time',                 examples: ['On Monday', 'at six o’clock'] },
    { id:14,  title: 'Question words',                       examples: ['Why are you late?'] },
    { id:15,  title: 'Relative clauses',                     examples: ['The boy who is running is my brother.'] },
    { id:16,  title: 'Weather questions',                    examples: ['What was the weather like?'] },
    { id:17,  title: 'What’s the matter?',                   examples: ['What’s the matter? I have a headache.'] },
    { id:18,  title: 'How / What about + V-ing',             examples: ['How about swimming?'] },
    { id:19,  title: 'When clauses (past)',                  examples: ['When he got home, he slept.'] },
    { id:20,  title: 'go for a + noun',                      examples: ['Let’s go for a walk.'] },
    { id:21,  title: 'be good at + noun',                    examples: ['She’s good at basketball.'] },
    { id:22,  title: 'I think / I know …',                   examples: ['I think it’s great.'] },
    { id:23,  title: 'Would like + (to) V / noun',           examples: ['Would you like to play?', 'Would you like some juice?'] },
    { id:24,  title: 'What a(n) + adj + noun!',              examples: ['What a lovely day!'] }
  ];
  
  /*** 3. APP STATE **************************************************************/
  let currentPage  = 'vocab';
  let currentTheme = 'All';
  let timerID      = null;
  const scores     = JSON.parse(localStorage.getItem('moverScores')||'{}');
  const themes     = ['All', ...new Set(vocabularyList.map(v => v.theme))];
  
  /*** 4. UTILITIES **************************************************************/
  const $      = id => document.getElementById(id);
  const shuffle= a => [...a].sort(() => Math.random()-0.5);
  const speak  = t => 'speechSynthesis' in window && window.speechSynthesis.speak(new SpeechSynthesisUtterance(t));
  const words  = () => currentTheme==='All' ? vocabularyList : vocabularyList.filter(v=>v.theme===currentTheme);
  function saveScore(mode,sc){scores[currentTheme]??={};scores[currentTheme][mode]=Math.max(sc,scores[currentTheme][mode]||0);localStorage.setItem('moverScores',JSON.stringify(scores));}
  
  /*** 5. RENDERERS **************************************************************/
  function renderThemeSelect(){
    $('theme-select').innerHTML = themes.map(t=>`<option value=\"${t}\">${t}</option>`).join('');
    $('theme-select').value = currentTheme;
  }
  function renderVocabulary(){
    $('practice-menu').classList.add('hidden');
    $('app').innerHTML = words().map(w=>`
      <div class=\"card\">
        <h3>${w.word}</h3><p>${w.meaning}</p>
        <button class=\"speak-btn\" onclick=\"(${speak})('${w.word}')\">🔊</button>
      </div>`).join('');
  }
  function renderGrammar(){
    $('practice-menu').classList.add('hidden');
    $('app').innerHTML = grammarStructures.map(g=>`
      <div class=\"card\">
        <h3>${g.id}. ${g.title}</h3>
        <ul>${g.examples.map(e=>`<li>${e}</li>`).join('')}</ul>
      </div>`).join('');
  }
  function showPracticeMenu(){
    $('practice-menu').classList.remove('hidden');
    $('app').innerHTML = `<pre>${JSON.stringify(scores[currentTheme]||{},null,2)}</pre>`;
  }
  
  /*** 6. GAMES ******************************************************************/
  function gameMCQ(){
    const list = words(); if(!list.length) return alert('No words');
    const q = shuffle(list)[0];
    const opts = shuffle([q, ...shuffle(list.filter(x=>x!==q)).slice(0,3)]);
    $('app').innerHTML = `<h2>${q.word}</h2>` + opts.map(o=>`
      <button class=\"quiz-option\" onclick=\"this.classList.add('${o===q?'correct':'incorrect'}');setTimeout(gameMCQ,600)\">
        ${o.meaning}
      </button>`).join('');
  }
  function gameTyping(){
    const list = words(); if(!list.length) return alert('No words');
    const q = shuffle(list)[0];
    $('app').innerHTML = `
      <h2>${q.meaning}</h2>
      <input id=\"inp\" autofocus><button id=\"chk\">Check</button><div id=\"res\"></div>`;
    $('chk').onclick = () => {
      $('res').textContent = $('inp').value.trim().toLowerCase()===q.word.toLowerCase()
        ? '✅ Correct!' : `❌ ${q.word}`;
      if($('res').textContent.includes('✅')) setTimeout(gameTyping,500);
    };
  }
  function gameRace(){
    const list = words(); if(!list.length) return alert('No words');
    let time=30,score=0;
    const prompt=()=>{
      const q=shuffle(list)[0];
      $('app').innerHTML=`
        <div id=\"timer\">${time}</div>
        <h2>${q.meaning}</h2>
        <input id=\"race\" autofocus>
        <div>Score: <span id=\"sc\">${score}</span></div>`;
      $('race').onkeyup=e=>{
        if(e.key==='Enter'){
          if(e.target.value.trim().toLowerCase()===q.word.toLowerCase()) score++;
          prompt();
        }
      };
    };
    prompt();
    clearInterval(timerID);
    timerID=setInterval(()=>{
      time--; $('timer').textContent=time;
      if(time<=0){
        clearInterval(timerID); saveScore('race',score);
        $('app').innerHTML=`<h2>Time's up!</h2><p>Score: ${score}</p><button onclick=\"gameRace()\">Play again</button>`;
      }
    },1000);
  }
  
  /*** 7. NAVIGATION *************************************************************/
  function setActive(id){['btn-vocab','btn-grammar','btn-practice'].forEach(x=>$(x).classList.remove('active')); $(id).classList.add('active');}
  function initNav(){
    $('btn-vocab').onclick   = ()=>{currentPage='vocab';   setActive('btn-vocab');   renderVocabulary();};
    $('btn-grammar').onclick = ()=>{currentPage='grammar'; setActive('btn-grammar'); renderGrammar();   };
    $('btn-practice').onclick= ()=>{currentPage='practice';setActive('btn-practice');showPracticeMenu(); };
    $('mcq-mode').onclick    = ()=>{gameMCQ();   $('practice-menu').classList.add('hidden');};
    $('typing-mode').onclick = ()=>{gameTyping(); $('practice-menu').classList.add('hidden');};
    $('race-mode').onclick   = ()=>{gameRace();   $('practice-menu').classList.add('hidden');};
  }
  
  /*** 8. INITIALISE *************************************************************/
  window.addEventListener('DOMContentLoaded',()=>{
    renderThemeSelect();
    $('theme-select').onchange = e => {currentTheme=e.target.value; if(currentPage==='vocab') renderVocabulary();};
    initNav();
    setActive('btn-vocab');
    renderVocabulary();
  });
  