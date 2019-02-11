class colorChange {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor: Function = (color: number | string) : boolean => {
        if(typeof(color) === 'number') {
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

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

class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
    changeColor: Function = (color: number) : boolean => {
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

let elementSets: Array<ElementSet> = [];
let squareSizeNum: number = 100;
let squareSize = `${ squareSizeNum }px`;

let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for(let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.map((elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
    
    elem.button.textContent = 'Change Color';
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);

})