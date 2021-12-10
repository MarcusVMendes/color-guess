

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

function createCircle() {
  const circleList = document.querySelector('#circle-list');
  const newCircle = document.createElement('div');
  newCircle.className = 'ball';
  newCircle.style.background = colorCircle();

  circleList.appendChild(newCircle);
}

function apendCircle(qt) {
  for (let index = 0; index < qt; index += 1) {
    createCircle();
  }
}

apendCircle(6);