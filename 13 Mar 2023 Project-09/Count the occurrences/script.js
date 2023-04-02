function countWords() {
  const inputText = document.getElementById("input").value;
  const words = inputText.split(" ");
  const wordCount = new Map();
  
  words.forEach(word => {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  });
  
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  
  wordCount.forEach((count, word) => {
    const row = tableBody.insertRow();
    const wordCell = row.insertCell();
    const countCell = row.insertCell();
    
    wordCell.innerHTML = word;
    countCell.innerHTML = count;
  });
  
  document.getElementById("results").style.display = "block";
}

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  countWords();
});