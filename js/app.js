/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],[3, 4, 5],[6, 7, 8],
  [0, 3, 6],[1, 4, 7],[2, 5, 8],
  [0, 4, 8],[2, 4, 6]
];

console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');

const boardEl = document.querySelector('.board');

const resetBtnEl = document.querySelector('#reset-button');





/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick);

resetBtnEl.addEventListener('click', init);
/*-------------------------------- Functions --------------------------------*/

function init () {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  t = false
  resetBtnEl.setAttribute("hidden", true)
  render()
}
init()  

  function render(evt) {
    updateBoard ()
    updateMessage ()
  }

  function updateBoard() {
    board.forEach((space,idx) => {
      const choice = squareEls[idx]
      if (space === null) 
      return choice.textContent = ''
      resetBtnEl.removeAttribute('hidden')
      if (space == 1)
      return choice.textContent = 'X'
      if (space === -1)
      return choice.textContent = 'O'
    });
  }

  function updateMessage() {
    if (turn === -1 && winner === null) {
      return messageEl.textContent = 'Player X turn!'
    } if (turn === 1 && winner === null) {
      return messageEl.textContent = 'Player O turn!'
    } if (winner === 't') {
        return messageEl.textContent = "It's a Tie!"
      } if (winner === 1) {
      return messageEl.textContent = 'Congratulations X won!'
    } if (winner === -1) {
      return messageEl.textContent = 'Congratulations O won!'
    } 
  }
  
  function handleClick(evt) {
    const sqIdx = (evt.target.id[2])
    if (board[sqIdx]) {
      return
    }
    board[sqIdx] = turn 
  turn = turn * -1
winner = null
    placePiece(sqIdx)
    checkForWinner(sqIdx)
    render()
  }
  
  function placePiece(idx) {
    board [idx] = turn
  }
  

  
  function checkForWinner () {
    let totals = []
    winningCombos.forEach(combo => {
      console.log(combo);
      const sum = board[combo[0]] + board[combo[1]] + board[combo[2]]
      console.log(sum);
      totals.push(sum)
    })
    let xIsWinner = totals.some(x => x === 3)
console.log('X', xIsWinner)

  let oIsWinner = totals.some(o =>  o === -3)
  console.log('O', oIsWinner)

  let isTie = board.some(square => square === null)

  if (xIsWinner) {
    winner = 1
  } else if (oIsWinner) {
    winner = -1
  } else {
    if (isTie === false) {
winner = 't'
    }
  }
  render()
}
