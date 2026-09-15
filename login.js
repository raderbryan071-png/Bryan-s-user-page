const gameText = document.getElementById('game-text2');
const userInput = document.getElementById('user-input2');
const submitBtn = document.getElementById('submit-btn2');
function print(text) {
  gameText.innerText += text + "\n";
  gameText.innerscrollTop = gameText.scrollHeight;
}
