const cells = document.querySelectorAll('.cell');
const blackCells = document.querySelectorAll('#black');
const redCells = document.querySelectorAll('#red');
let playing = true;

const bet = (event) => {
  if (playing === true) {
    console.log('hello');
  }
};

cells.addEventlistener('click', alert('hello'));
