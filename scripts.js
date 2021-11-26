const cells = document.querySelectorAll('.cell');
const blackCells = document.querySelectorAll('#black');
const redCells = document.querySelectorAll('#red');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');
const one = document.querySelector('.buttonOne');
const five = document.querySelector('.buttonFive');
let bettingAmount = 0;
let isPlaying = true;
let currentBettingAmount = 1;
let balance = 100;

const randomNum = Math.floor(Math.random() * cells.length + 1);

const play = (event) => {
  if (isPlaying === true) {
    bettingAmount = bettingAmount + currentBettingAmount;
    balance = balance - currentBettingAmount;
  }
  document.getElementById(
    'currentBet'
  ).innerHTML = `Your Current bet is $${bettingAmount}`;
  if (bettingAmount >= 30) {
    document.getElementById(
      'winningNum'
    ).innerHTML = `The winning number is ${randomNum}!`;
    document.getElementById(
      'winning'
    ).innerHTML = `Your current money is ${balance}`;
    isPlaying = false;
  }
  if (randomNum === parseInt(event.target.innerHTML)) {
    balance = balance + 36 * currentBettingAmount;
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

cells.forEach((cell) => {
  cell.addEventListener('click', play);
});

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', play);
// }
five.addEventListener('click', fiveDollar);
one.addEventListener('click', oneDollar);
