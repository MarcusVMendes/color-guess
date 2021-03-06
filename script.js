const circleList = document.querySelector('#circle-list');
const colorReference = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
let punctuation = score.innerHTML;
const QTY = 6;

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

  for (let index = 0; index < QTY; index += 1) {
    const element = circleList.children[index];
    const color = element
      .getAttribute('style')
      .replace(/background: /, '')
      .replace(';', '');

    colorsArray.push(color);
  }

  const randomIndex = Math.round(Math.random() * (QTY - 1));
  console.log(randomIndex);
  colorReference.innerHTML = colorsArray[randomIndex];
}

function colorMatch(e) {
  const reference = colorReference.innerHTML;
  const clickedCircle = e.target
    .getAttribute('style')
    .replace(/background: /, '')
    .replace(';', '');

  if (reference === clickedCircle) {
    e.target.classList.add('clicked');
    answer.innerHTML = 'Acertou!';

    punctuation = Number(punctuation) + 3;
    score.innerHTML = punctuation;
    console.log(e.target.getAttribute('class'));
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
  apendCircle(QTY);
  setColorReference();
  resetGame();
};
