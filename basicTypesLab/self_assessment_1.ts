class die {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeValue: Function = (value: string) : boolean => {
        this.div.textContent = value;
        return true;
    }
}

interface DieElements {
    'div'?: Element,
    'button'?: Element
}

enum RollValue {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Twelve
}

let squareSizeNum: number = 100;
let squareSize: string = `${ squareSizeNum }px`;
let squareBorder: string = '2px solid black';
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class dieRoller extends die {
    static RollValue = RollValue;
    constructor(div: Element) {
        super(div);
    (this.div as HTMLElement).style.width = squareSize;
    (this.div as HTMLElement).style.height = squareSize;
    (this.div as HTMLElement).style.border = squareBorder;
    }
    changeValue: Function = (value: number) : boolean => {
        this.div.innerHTML = RollValue[value];
        return true;
    }

}


let dices: Array<DieElements> = [];

for(let index: number = 0; index <= 4; index++) {
    if(index < 4) {
        dices.push({
            'div': document.createElement('div')
        })   
    } else {
        dices.push({
            'button': document.createElement('button')
        }) 
    }
          
}

dices.map((dice) => {
    let dieRollerClass = new dieRoller(dice.div);
    document.body.appendChild(dice.div);
})





