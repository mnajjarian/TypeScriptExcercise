let color: string = 'green';
let squareSizeNum: number = 100;
let squareSize = `${ squareSizeNum }px`;

let button: Element = document.createElement('button');
let div: Element = document.createElement('div');

button.textContent = 'Change Color';
document.body.appendChild(button);
document.body.appendChild(div);