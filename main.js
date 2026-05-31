const drawButton = document.getElementById('draw-button');
const lotteryNumbersContainer = document.getElementById('lottery-numbers');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

drawButton.addEventListener('click', () => {
  drawLotteryNumbers();
});

function drawLotteryNumbers() {
  // Clear previous numbers
  lotteryNumbersContainer.innerHTML = '';

  const numbers = generateUniqueRandomNumbers(1, 45, 6);
  numbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = number;
    lotteryNumbersContainer.appendChild(numberElement);
  });
}

function generateUniqueRandomNumbers(min, max, count) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}
