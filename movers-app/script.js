const topicSelect = document.getElementById("topicSelect");
const wordList = document.getElementById("wordList");

fetch("vocabulary_full.json")
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(topic => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.appendChild(option);
    });

    topicSelect.addEventListener("change", () => {
      const selected = topicSelect.value;
      wordList.innerHTML = "";

      if (selected && data[selected]) {
        data[selected].forEach(item => {
          const card = document.createElement("div");
          card.className = "word-card";
          card.innerHTML = `
            <h3>${item.word}</h3>
            <p>${item.meaning}</p>
          `;
          wordList.appendChild(card);
        });
      }
    });
  });
