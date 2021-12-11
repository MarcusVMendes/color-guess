const circleList = document.querySelector('#circle-list');
const colorReference = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');

function randomNumber() {
  const number = Math.round(Math.random() * 255);

  return number;
}

function colorCircle() {
  const color1 = randomNumber();
  const color2 = randomNumber();
  const color3 = randomNumber();
  const color = `rgb(${color1}, ${color2}, ${color3})`;

  return color;
}

function setColorReference() {
  const colorsArray = [];

  for (let index = 0; index < 6; index += 1) {
    const element = circleList.children[index];
    const color = element
      .getAttribute('style')
      .replace(/background: /, '')
      .replace(';', '');

    colorsArray.push(color);
  }

  const randomIndex = Math.round(Math.random() * 5);
  colorReference.innerHTML = colorsArray[randomIndex];
}

function colorMatch(e) {
  const reference = colorReference.innerHTML;
  const clickedCircle = e.target
    .getAttribute('style')
    .replace(/background: /, '')
    .replace(';', '');

  console.log(answer);
  if (reference === clickedCircle) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function createCircle() {
  const newCircle = document.createElement('div');
  newCircle.className = 'ball';
  newCircle.style.background = colorCircle();
  newCircle.addEventListener('click', (e) => colorMatch(e));

  circleList.appendChild(newCircle);
}

function apendCircle(qty) {
  for (let index = 0; index < qty; index += 1) {
    createCircle();
  }
}

function resetGame() {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', () => document.location.reload());
}

window.onload = () => {
  apendCircle(6);
  setColorReference();
  resetGame();
};
