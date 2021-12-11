const circleList = document.querySelector('#circle-list');

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

  const colorReference = document.querySelector('#rgb-color');
  const randomIndex = Math.round(Math.random() * 6);
  colorReference.innerHTML = colorsArray[randomIndex];
}

function createCircle() {
  const newCircle = document.createElement('div');
  newCircle.className = 'ball';
  newCircle.style.background = colorCircle();
  newCircle.addEventListener('click', () => window.alert('clicou'));

  circleList.appendChild(newCircle);
}

function apendCircle(qty) {
  for (let index = 0; index < qty; index += 1) {
    createCircle();
  }
}

window.onload = () => {
  apendCircle(6);
  setColorReference();
};
