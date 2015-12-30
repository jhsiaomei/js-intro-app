
var boxesClicked = [];


function clickBox(boxNumber) {
  boxesClicked.push(boxNumber);
  checkWinCondition();
}

function checkWinCondition() {
  if ((boxesClicked.indexOf(1) > -1) && (boxesClicked.indexOf(2) > -1) && (boxesClicked.indexOf(3) > -1)) {
    alert('Win!');
  }
}