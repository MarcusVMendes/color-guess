DIFICULTY = 3;

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}

// function rgbGenerate() {
//     rgbText = '';

//     for (let index = 0; index < 3; index += 1) {
//         number = randomNumber();

//         if (index == 0) {
//             rgbText += '(';
//             rgbText += String(number) + ',';
//         } else if (index == 2) {
//             rgbText += String(number);
//             rgbText += ')';
//         } else {
//             rgbText += String(number) + ',';
//         }
//     }

//     return rgbText;
// }

function rgbGenerate() {
    colorString = '';
    let numbers = [String(randomNumber()) + ',', String(randomNumber()) + ',', String(randomNumber())]
    let rgbParts = ['(',...numbers, ')'];
    rgbParts.forEach((part) => colorString += part);

    return colorString;
}

console.log(rgbGenerate());