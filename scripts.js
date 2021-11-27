const cells = document.querySelectorAll('.cell');
const blackCells = document.querySelectorAll('#black');
const redCells = document.querySelectorAll('#red');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');
const one = document.querySelector('.buttonOne');
const five = document.querySelector('.buttonFive');
const playMore = document.querySelector('.continue');
const playAgain = document.querySelector('.restart');
let bettingAmount = 0;
let isPlaying = true;
let currentBettingAmount = 1;
let balance = 100;

const winningNumGenerator = () => {
  return Math.floor(Math.random() * cells.length + 1);
};
let winningNumber = winningNumGenerator();
const play = (event) => {
  if (isPlaying === true) {
    bettingAmount = bettingAmount + currentBettingAmount;
    balance = balance - currentBettingAmount;
    document.getElementById(
      'currentBet'
    ).innerHTML = `Your Current bet is $${bettingAmount}`;
    if (bettingAmount >= 30) {
      document.getElementById(
        'winningNum'
      ).innerHTML = `The winning number is ${winningNumber}!`;
      document.getElementById(
        'winning'
      ).innerHTML = `Your current money is ${balance}`;
      isPlaying = false;
    }
    if (winningNumber === parseInt(event.target.innerHTML)) {
      balance = balance + 34 * currentBettingAmount;
    }
  }
};

const fiveDollar = () => {
  if (isPlaying === true) {
    currentBettingAmount = 5;
  }
};

const oneDollar = () => {
  if (isPlaying === true) {
    currentBettingAmount = 1;
  }
};

const changeToOneDollar = () => {
  currentBettingAmount = 1;
};

const changeToFiveDollar = () => {
  currentBettingAmount = 5;
};

cells.forEach((cell) => {
  if (isPlaying === true) {
    cell.addEventListener('click', play);
  }
});

const continuePlaying = () => {
  isPlaying = true;
  currentBettingAmount = 1;
  bettingAmount = 0;
  winningNumber = winningNumGenerator();
  alert('Keep playing');
};

const againPlaying = () => {
  isPlaying = true;
  currentBettingAmount = 1;
  bettingAmount = 0;
  balance = 100;
  document.getElementById(
    'winning'
  ).innerHTML = `Your current money is ${balance}`;
  winningNumber = winningNumGenerator();
  alert('Better luck this time');
};
five.addEventListener('click', changeToFiveDollar);
one.addEventListener('click', changeToOneDollar);
playMore.addEventListener('click', continuePlaying);
playAgain.addEventListener('click', againPlaying);
