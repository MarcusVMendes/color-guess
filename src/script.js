const DIFICULTY = 3;

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}

function rgbGenerate() {
    let colorString = '';
    let numbers = [String(randomNumber()) + ',', String(randomNumber()) + ',', String(randomNumber())];
    let rgbParts = ['(', ...numbers, ')'];
    rgbParts.forEach((part) => colorString += part);

    return colorString;
}

function circleGenerate() {
    let div = document.createElement('div');
    div.setAttribute({ 'height': '40px', 'width': '40px', 'border-radius': '100%' });

    return div;
}