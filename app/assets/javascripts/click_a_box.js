var click = 0;

function jackhammer(div) {
  click++;
  colorChange(div);
  console.log(click);
  if (click === 5) {
    alert('You win!');
  }
}

function colorChange(div) {
  if (div.style['background-color'] === 'white') {
    div.style['background-color'] = 'blue';
  } else if (div.style['background-color'] === 'pink') {
    div.style['background-color'] = 'white';
  } else if (div.style['background-color'] === 'yellow') {
    div.style['background-color'] = 'pink';
  } else if (div.style['background-color'] === 'green') {
    div.style['background-color'] = 'yellow';
  } else {
    div.style['background-color'] = 'green';
  }
}