DIFICULTY = 3;

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}

function rgbGenerate() {
    rgbText = '';

    for (let index = 0; index < 3; index += 1) {
        number = randomNumber();

        if (index == 0) {
            rgbText += '(';
            rgbText += String(number) + ',';
        } else if (index == 2) {
            rgbText += String(number);
            rgbText += ')';
        } else {
            rgbText += String(number) + ',';
        }
    }

    return rgbText;
}

let teste = rgbGenerate();
console.log(teste);
// window.onload = function () {

// };