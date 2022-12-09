/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],[3, 4, 5],[6, 7, 8],
  [0, 3, 6],[1, 4, 7],[2, 5, 8],
  [0, 4, 8],[2, 4, 6]
];

console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.squares')

const messageEl = document.querySelector('#message')




/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

  init()
  function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    render()
  }

  function render() {
    updateBoard ()
    updateMessage ()
  }

  function updateBoard() {
    board.forEach((space,index)=> {
      const choice = squareEls[index]
      if (space === -1)
      return choice.textContent = 'O'
      if (space == 1)
      return choice.textContent = 'X'
    });
  }

  function updateMessage() {
    if (turn === 1 && winner === null) {
      return messageEl.textContent = 'Player X turn!'
    }
    if (turn === -1 && winner === null) {
      return messageEl.textContent = 'Player O turn!'
    }
    if (winner === 'false') {
      return messageEl.textContent = "It's a Tie!"
    }
    if (winner === 1) {
      return messageEl.textContent = 'Congratulations X won!'
    }
    if (winner === -1) {
      return messageEl.textContent = 'Congratulations O won!'
    }
  }