const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const mainEl = document.getElementById('main');
const selectionEl = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelected = document.getElementById('user_selected');
const computerSelected = document.getElementById('computer_selected');
const winner = document.getElementById('winner');
const closeModal = document.getElementById('close-modal');
const btnRules = document.querySelector('.btn-rules');
const showRules = document.querySelector('.rulesmodal');

const choices = ['rock', 'paper', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice');

    checkWinner();
  });
});

reset.addEventListener('click', () => {
  mainEl.style.display = 'flex';
  selectionEl.style.display = 'none';
});

function checkWinner() {
  const computerChoice = pickRandom();
  updateSelection(userSelected, userChoice);
  updateSelection(computerSelected, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerText = 'Draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    //wins

    updateScore(1);
    winner.innerText = 'WIN';
  } else {
    //loss
    updateScore(-1);
    winner.innerText = 'Lost';
  }
  mainEl.style.display = 'none';
  selectionEl.style.display = 'flex';
}

function updateScore(value) {
  score += value;

  scoreEl.innerText = score;
}

function pickRandom() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selection, choice) {
  selection.classList.remove('btn-paper');
  selection.classList.remove('btn-rock');
  selection.classList.remove('btn-scissors');
  selection.classList.add(`btn-${choice}`);

  const img = selection.querySelector('img');
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}

btnRules.addEventListener('click', () => {
  showRules.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  showRules.style.display = 'none';
});
