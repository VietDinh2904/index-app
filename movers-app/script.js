// ===============================
// script.js – full data version
// ===============================

/********************** VOCABULARY **********************/
// Each item: { word: 'English', meaning: 'Vietnamese' }
const vocabularyList = [
    // A
    { word: 'above', meaning: 'ở (phía) trên' },
    { word: 'address', meaning: 'địa chỉ' },
    { word: 'after', meaning: 'sau khi' },
    { word: 'aunt', meaning: 'cô, dì' },
    // B
    { word: 'back', meaning: 'lưng' },
    { word: 'balcony', meaning: 'ban công' },
    { word: 'band (music)', meaning: 'ban nhạc' },
    { word: 'bank', meaning: 'ngân hàng' },
    { word: 'bat', meaning: 'con dơi / gậy bóng chày' },
    { word: 'bear', meaning: 'con gấu' },
    { word: 'below', meaning: 'ở (phía) dưới' },
    { word: 'blond(e)', meaning: 'màu vàng (tóc)' },
    { word: 'blanket', meaning: 'cái chăn, mền' },
    { word: 'bottle', meaning: 'cái chai, bình' },
    { word: 'bowl', meaning: 'cái chén, tô' },
    { word: 'break', meaning: 'giờ nghỉ / giờ giải lao' },
    { word: 'building', meaning: 'tòa nhà' },
    { word: 'bus station', meaning: 'bến xe buýt' },
    { word: 'bus stop', meaning: 'bến xe buýt' },
    // C
    { word: 'café', meaning: 'tiệm bán đồ uống & thức ăn nhẹ' },
    { word: 'cage', meaning: 'cái lồng, cái chuồng' },
    { word: 'car park', meaning: 'bãi đỗ xe' },
    { word: 'centre (UK)', meaning: 'trung tâm' },
    { word: 'center (US)', meaning: 'trung tâm' },
    { word: 'cheese', meaning: 'phô mai' },
    { word: 'circle', meaning: 'vòng tròn' },
    { word: 'circus', meaning: 'rạp xiếc' },
    { word: 'city/town centre (UK)', meaning: 'trung tâm thành phố / thị trấn' },
    { word: 'city/town center (US)', meaning: 'trung tâm thành phố / thị trấn' },
    { word: 'clothes – coat', meaning: 'áo choàng, áo khoác dài' },
    { word: 'cloud', meaning: 'mây' },
    { word: 'cloudy', meaning: '(trời) có mây' },
    { word: 'clown', meaning: 'chú hề' },
    { word: 'cold', meaning: 'cảm lạnh' },
    { word: 'coffee', meaning: 'cà phê' },
    { word: 'comic / comic book', meaning: 'truyện tranh' },
    { word: 'cook', meaning: 'đầu bếp' },
    { word: 'country (US)', meaning: 'đồng quê' },
    { word: 'cough', meaning: 'ho' },
    { word: 'couple – pair', meaning: 'đôi, cặp' },
    { word: 'cry', meaning: 'khóc' },
    { word: 'curly', meaning: 'quăn' },
    { word: 'cup', meaning: 'cái tách' },
    // D
    { word: 'dance', meaning: 'nhảy, múa' },
    { word: 'daughter', meaning: 'con gái' },
    { word: 'dentist', meaning: 'nha sĩ' },
    { word: 'doctor', meaning: 'bác sĩ' },
    { word: 'dolphin', meaning: 'cá heo' },
    { word: 'downstairs', meaning: 'dưới lầu' },
    { word: 'dream', meaning: 'giấc mơ' },
    { word: 'drive', meaning: 'lái (xe)' },
    { word: 'driver', meaning: 'tài xế / người lái xe' },
    { word: 'DVD', meaning: 'đĩa DVD' },
    // E
    { word: 'earache', meaning: 'đau tai' },
    { word: 'elevator (US)', meaning: 'thang máy' },
    { word: 'email', meaning: 'thư điện tử / gửi thư điện tử' },
    { word: 'every', meaning: 'mỗi, mọi' },
    // F
    { word: 'fair', meaning: 'vàng (tóc); trắng, sáng (da)' },
    { word: 'fall', meaning: 'ngã' },
    { word: 'fan', meaning: 'cái quạt' },
    { word: 'farm', meaning: 'trang trại' },
    { word: 'farmer', meaning: 'nông dân' },
    { word: 'field', meaning: 'cánh đồng' },
    { word: 'film (UK)', meaning: 'phim' },
    { word: 'fine', meaning: 'khỏe mạnh' },
    { word: 'fish', meaning: 'câu cá' },
    { word: 'floor', meaning: 'sàn nhà' },
    { word: 'fly', meaning: 'con ruồi' },
    { word: 'forest', meaning: 'khu rừng' },
    { word: 'friday', meaning: 'Thứ Sáu' },
    { word: 'funfair', meaning: 'hội chợ' },
    // G
    { word: 'glass', meaning: 'cái ly, cốc' },
    { word: 'goal', meaning: 'khung thành (bóng đá)' },
    { word: 'go shopping', meaning: 'đi mua sắm' },
    { word: 'ground', meaning: 'đất, mặt đất' },
    { word: 'grown-up', meaning: 'người lớn' },
    // H
    { word: 'headache', meaning: 'đau đầu' },
    { word: 'helmet', meaning: 'mũ bảo hiểm' },
    { word: 'holiday', meaning: 'ngày nghỉ, kỳ nghỉ' },
    { word: 'home', meaning: 'nhà' },
    { word: 'homework', meaning: 'bài tập về nhà' },
    { word: 'hospital', meaning: 'bệnh viện' },
    { word: 'hot – thirsty', meaning: 'khát' },
    { word: 'hop', meaning: 'nhảy' },
    { word: 'hungry', meaning: 'đói bụng' },
    { word: 'hurt', meaning: 'đau' },
    // I
    { word: 'ice', meaning: 'băng' },
    { word: 'ice skates', meaning: 'giày trượt băng' },
    { word: 'ice skating', meaning: 'trượt băng' },
    { word: 'ill / sick', meaning: 'bệnh, ốm' },
    { word: 'internet', meaning: 'mạng máy tính' },
    { word: 'island', meaning: 'hòn đảo' },
    // J
    { word: 'jungle', meaning: 'rừng rậm' },
    // K
    { word: 'kangaroo', meaning: 'con chuột túi' },
    { word: 'kick', meaning: 'cú sút, đá' },
    { word: 'kitten', meaning: 'mèo con' },
    // L
    { word: 'lake', meaning: 'hồ' },
    { word: 'leaf / leaves', meaning: 'chiếc lá / những chiếc lá' },
    { word: 'lift (UK)', meaning: 'thang máy' },
    { word: 'lion', meaning: 'con sư tử' },
    { word: 'library', meaning: 'thư viện' },
    // M
    { word: 'map', meaning: 'bản đồ' },
    { word: 'market', meaning: 'chợ' },
    { word: 'matter', meaning: 'vấn đề' },
    { word: 'message', meaning: 'tin nhắn' },
    { word: 'milkshake', meaning: 'sữa khuấy' },
    { word: 'mistake', meaning: 'lỗi sai' },
    { word: 'model', meaning: 'mô hình' },
    { word: 'Monday', meaning: 'Thứ Hai' },
    { word: 'moon', meaning: 'mặt trăng' },
    { word: 'mountain', meaning: 'núi' },
    { word: 'moustache', meaning: 'ria mép' },
    { word: 'movie (US)', meaning: 'phim' },
    { word: 'music', meaning: 'âm nhạc' },
    // N
    { word: 'neck', meaning: 'cổ' },
    { word: 'never', meaning: 'không bao giờ' },
    { word: 'net', meaning: 'lưới' },
    { word: 'noodles', meaning: 'mì' },
    { word: 'nose? (not in list) – skip' },
    { word: 'nurse', meaning: 'y tá' },
    { word: 'number – hundred', meaning: 'trăm' },
    { word: 'numbers 21–100', meaning: 'số đếm 21 đến 100' },
    { word: 'numbers 1st–20th', meaning: 'số thứ tự 1–20' },
    // O
    { word: "o'clock", meaning: 'giờ' },
    { word: 'opposite', meaning: 'đối diện' },
    { word: 'outside? – skip' },
    // P
    { word: 'panda', meaning: 'con gấu trúc' },
    { word: 'pair', meaning: 'đôi, cặp' },
    { word: 'pancake', meaning: 'bánh kẹp' },
    { word: 'parents', meaning: 'cha mẹ' },
    { word: 'parrot', meaning: 'con vẹt' },
    { word: 'party', meaning: 'buổi tiệc' },
    { word: 'pasta', meaning: 'mì ống, mì nui' },
    { word: 'pet', meaning: 'thú cưng' },
    { word: 'picnic', meaning: 'dã ngoại' },
    { word: 'pirate', meaning: 'cướp biển' },
    { word: 'place', meaning: 'nơi, địa điểm' },
    { word: 'plate', meaning: 'cái đĩa' },
    { word: 'player', meaning: 'vận động viên, người chơi' },
    { word: 'playground', meaning: 'sân chơi' },
    { word: 'pool', meaning: 'hồ bơi' },
    { word: 'pop star', meaning: 'ngôi sao nhạc pop' },
    { word: 'practice (US)', meaning: 'luyện tập' },
    { word: 'practise (UK)', meaning: 'luyện tập' },
    { word: 'present', meaning: 'quà tặng' },
    { word: 'rain', meaning: 'mưa' },
    { word: 'rainbow', meaning: 'cầu vồng' },
    { word: 'rabbit', meaning: 'con thỏ' },
    { word: 'ride', meaning: 'đạp xe / cưỡi' },
    { word: 'river', meaning: 'dòng sông' },
    { word: 'road', meaning: 'con đường' },
    { word: 'rock', meaning: 'hòn đá' },
    { word: 'roof', meaning: 'mái nhà' },
    { word: 'roller skates', meaning: 'giày trượt patin' },
    { word: 'roller skating', meaning: 'trượt patin' },
    // S
    { word: 'sail', meaning: 'lái thuyền buồm' },
    { word: 'salad', meaning: 'rau trộn' },
    { word: 'sandwich', meaning: 'bánh mì kẹp' },
    { word: 'sauce', meaning: 'nước xốt' },
    { word: 'Saturday', meaning: 'Thứ Bảy' },
    { word: 'school break', meaning: 'giờ nghỉ' },
    { word: 'score', meaning: 'ghi điểm / ghi bàn' },
    { word: 'scarf', meaning: 'khăn choàng cổ' },
    { word: 'seat', meaning: 'chỗ ngồi' },
    { word: 'shark', meaning: 'cá mập' },
    { word: 'shower', meaning: 'vòi sen' },
    { word: 'sick', meaning: 'ốm, bệnh' },
    { word: 'shoulder', meaning: 'vai' },
    { word: 'shopping centre (UK)', meaning: 'trung tâm mua sắm' },
    { word: 'shopping center (US)', meaning: 'trung tâm mua sắm' },
    { word: 'sky', meaning: 'bầu trời' },
    { word: 'sleep? – skip' },
    { word: 'snow', meaning: 'tuyết' },
    { word: 'soup', meaning: 'súp' },
    { word: 'square', meaning: 'quảng trường' },
    { word: 'sports centre', meaning: 'trung tâm thể dục thể thao' },
    { word: 'star', meaning: 'ngôi sao' },
    { word: 'stomach', meaning: 'bụng' },
    { word: 'stomachache', meaning: 'đau bụng / đau bao tử' },
    { word: 'straight', meaning: 'thẳng' },
    { word: 'street? – path', meaning: 'đường' },
    { word: 'station', meaning: 'trạm (xe)' },
    { word: 'stairs', meaning: 'cầu thang' },
    { word: 'sunny', meaning: '(trời) nắng' },
    { word: 'Sunday', meaning: 'Chủ Nhật' },
    { word: 'supermarket', meaning: 'siêu thị' },
    { word: 'sweater', meaning: 'áo len' },
    { word: 'swim', meaning: 'bơi' },
    { word: 'swimming pool', meaning: 'hồ bơi' },
    { word: 'swimsuit', meaning: 'đồ bơi' },
    { word: 'table? – skip' },
    { word: 'tea', meaning: 'trà' },
    { word: 'teach', meaning: 'dạy' },
    { word: 'temperature', meaning: 'sốt' },
    { word: 'Thursday', meaning: 'Thứ Năm' },
    { word: 'ticket', meaning: 'vé' },
    { word: 'tired', meaning: 'mệt' },
    { word: 'tooth / teeth', meaning: 'răng' },
    { word: 'toothache', meaning: 'đau răng' },
    { word: 'toothbrush', meaning: 'bàn chải đánh răng' },
    { word: 'toothpaste', meaning: 'kem đánh răng' },
    { word: 'towel', meaning: 'khăn tắm' },
    { word: 'town', meaning: 'thị trấn' },
    { word: 'tractor', meaning: 'xe kéo' },
    { word: 'trip', meaning: 'chuyến đi' },
    { word: 'Tuesday', meaning: 'Thứ Ba' },
    { word: 'umbrella? – skip' },
    { word: 'uncle', meaning: 'chú, bác, cậu, dượng' },
    { word: 'upstairs', meaning: 'trên lầu' },
    // V
    { word: 'vegetable', meaning: 'rau củ' },
    { word: 'video', meaning: 'băng video' },
    { word: 'village', meaning: 'làng mạc' },
    { word: 'visit? – skip' },
    // W
    { word: 'walk', meaning: 'đi bộ, đi dạo' },
    { word: 'wash', meaning: 'tắm rửa, giặt giũ' },
    { word: 'wave', meaning: 'làn sóng' },
    { word: 'weather', meaning: 'thời tiết' },
    { word: 'Wednesday', meaning: 'Thứ Tư' },
    { word: 'week', meaning: 'tuần' },
    { word: 'weekend', meaning: 'cuối tuần' },
    { word: 'whale', meaning: 'cá voi' },
    { word: 'wind', meaning: 'gió' },
    { word: 'windy', meaning: 'có gió' },
    { word: 'work', meaning: 'làm việc' },
    { word: 'world', meaning: 'thế giới' },
    { word: 'yesterday', meaning: 'hôm qua' },
    { word: 'zoo', meaning: 'sở thú' }
  ];
  
  /********************** GRAMMAR **********************/
  // 24 structures from Cambridge Movers
  const grammarStructures = [
    { id: 1, title: 'Indirect objects', examples: ['Give it to the teacher!'] },
    { id: 2, title: 'Comparative & superlative adjectives', examples: ['Your house is bigger than mine.', 'Anna is my best friend.'] },
    { id: 3.1, title: 'Past Simple (regular & irregular)', examples: ['We went to the park yesterday.', 'Her father cooked lunch on Friday.', 'Helen: Did you go to the cinema? Peter: Yes, I did.', "We didn't see the pirate at the party."] },
    { id: 3.2, title: 'Verb + infinitive', examples: ['I want to go home.', 'He started to laugh.'] },
    { id: 3.3, title: 'Verb + -ing', examples: ['I went riding on Saturday.'] },
    { id: 3.4, title: 'Infinitive of purpose', examples: ['She went to town to buy a toothbrush.'] },
    { id: 3.5, title: 'Want/ask someone to do something', examples: ['He wants the teacher to tell a story.'] },
    { id: 3.6, title: 'Must (obligation)', examples: ['He must do his homework.', "You mustn't give the rabbit cheese.", 'Must I get up now?'] },
    { id: 3.7, title: 'Have (got) to / had to', examples: ["I've got to go.", 'He had to draw a whale for homework.', 'Do I have to go to bed now?'] },
    { id: 3.8, title: 'Shall (offers)', examples: ['Shall I help you wash the car, Mum?'] },
    { id: 3.9, title: 'Could (past of can)', examples: ['I could see some birds in the tree.'] },
    { id: 4, title: 'Adverbs', examples: ['She never eats meat.', 'He sang loudly.', 'My mother talks a lot.'] },
    { id: 5, title: 'Comparative & superlative adverbs', examples: ['My brother reads more quickly than my sister.', 'I like ice cream best.'] },
    { id: 6, title: 'Conjunctions', examples: ['I went home because I was tired.'] },
    { id: 7, title: 'Prepositions of time', examples: ['She plays with her friends after school.', 'He plays badminton on Saturdays.'] },
    { id: 8, title: 'Question words', examples: ['Why is he talking to her?', 'When does school start?'] },
    { id: 9, title: 'Relative clauses', examples: ['Vicky is the girl who is riding a bike.', 'That is the DVD which my friend gave me.', 'This is the house where my friend lives.'] },
    { id: 10, title: 'What is/was the weather like?', examples: ['What was the weather like last weekend?'] },
    { id: 11, title: "What's the matter?", examples: ["What's the matter, Daisy? Have you got a stomachache?"] },
    { id: 12, title: 'How/what about + n./V-ing', examples: ['How about going to the cinema on Wednesday afternoon?'] },
    { id: 13, title: 'When clauses (past)', examples: ['When he got home, he had his dinner.', 'I saw a singer when I was at the theater last night.'] },
    { id: 14, title: 'go for a + n.', examples: ['Yesterday we went for a drive in my brother’s new car.'] },
    { id: 15, title: 'be good at + n.', examples: ['She is very good at basketball.'] },
    { id: 16, title: 'I think / know …', examples: ["I think he's very nice."] },
    { id: 17, title: 'Would like + to V / + n.', examples: ['Would you like to color that ball?', 'Would you like some grapes?'] },
    { id: 18, title: 'Happy Birthday!', examples: ['You’re eight today! Happy Birthday!'] },
    { id: 19, title: 'Here you are.', examples: ['Helen: Would you like an apple? Peter: Yes, please. Helen: Here you are.'] },
    { id: 20, title: 'Me too.', examples: ['Peter: I like football. Daisy: Me too.'] },
    { id: 21, title: 'So do I.', examples: ['Kate: I love hippos. John: So do I.'] },
    { id: 22, title: 'story about + ing', examples: ['This is a story about playing football.'] },
    { id: 23, title: 'What (a/an) + adj + n.', examples: ['What a good dog!', 'What beautiful fish!', 'What beautiful animals!'] },
    { id: 24, title: 'Be called + n.', examples: ['A baby cat is called a kitten.'] }
  ];
  
  /********************** APP LOGIC **********************/
  function speak(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Trình duyệt không hỗ trợ TTS');
    }
  }
  
  function renderVocabulary() {
    const container = document.getElementById('app');
    container.innerHTML = '';
    vocabularyList.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const title = document.createElement('h3');
      title.textContent = item.word;
  
      const meaning = document.createElement('p');
      meaning.textContent = item.meaning;
  
      const btn = document.createElement('button');
      btn.className = 'speak-btn';
      btn.textContent = '🔊';
      btn.onclick = () => speak(item.word);
  
      card.append(title, meaning, btn);
      container.appendChild(card);
    });
  }
  
  function renderGrammar() {
    const container = document.getElementById('app');
    container.innerHTML = '';
    grammarStructures.forEach(rule => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const title = document.createElement('h3');
      title.textContent = `${rule.id}. ${rule.title}`;
  
      const list = document.createElement('ul');
      rule.examples.forEach(ex => {
        const li = document.createElement('li');
        li.textContent = ex;
        list.appendChild(li);
      });
  
      card.append(title, list);
      container.appendChild(card);
    });
  }
  
  const btnVocab = document.getElementById('btn-vocab');
  const btnGrammar = document.getElementById('btn-grammar');
  
  btnVocab.addEventListener('click', () => {
    setActive(btnVocab);
    renderVocabulary();
  });
  
  btnGrammar.addEventListener('click', () => {
    setActive(btnGrammar);
    renderGrammar();
  });
  
  function setActive(btn) {
    [btnVocab, btnGrammar].forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  
  // Initialize
  btnVocab.classList.add('active');
  renderVocabulary();
  