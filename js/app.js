/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie,

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

  