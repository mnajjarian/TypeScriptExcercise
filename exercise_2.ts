interface ElementSet {
    'div': Element,
    'button': Element
}

enum Colors {
    Green,
    Red,
    Blue,
    Orange
}

let Elements = {
    'div': document.createElement('div'),
    'button': document.createElement('button')
}

class colorChange {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor: Function = (color: string) : boolean => {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

let color: string = 'green';
let squareSizeNum: number = 100;
let squareSize = `${ squareSizeNum }px`;

let button: Element = document.createElement('button');
let div: Element = document.createElement('div');

button.textContent = 'Change Color';
document.body.appendChild(button);
document.body.appendChild(div);

(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;


(button as HTMLElement).onclick = (event) => {
    colorChange(div, color);
}