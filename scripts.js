const cells = document.querySelectorAll('.cell');
const blackCells = document.querySelectorAll('#black');
const redCells = document.querySelectorAll('#red');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');
const one = document.querySelector('.buttonOne');
const five = document.querySelector('.buttonFive');
let yourBet = 0;
let playing = true;
let currentPlaying = 1;

const play = () => {
  if (playing === true) {
    yourBet = yourBet + currentPlaying;
  }
};

const fiveDollar = () => {
  if (playing === true) {
    currentPlaying = 5;
  }
};

const oneDollar = () => {
  if (playing === true) {
    currentPlaying = 1;
  }
};

const randomNum = () => {};

cells.forEach((cell) => {
  cell.addEventListener('click', play);
});
// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', play);
// }
five.addEventListener('click', fiveDollar);
one.addEventListener('click', oneDollar);
