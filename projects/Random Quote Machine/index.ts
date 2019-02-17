class randomQuote {
    static Colors: Colors
    div: Element
    p: Element
    footer: Element

    constructor(div: Element, p: Element, footer: Element) {
        this.div = div
        this.p = p
        this.footer = footer
    }
    changeColor: Function = (color: number): boolean => {
        (this.div as HTMLElement).style.color = Colors[color]
        return true
    }
    changeText: Function = (quote: string, author: string): boolean => {
        this.p.textContent = quote
        this.footer.textContent = author
        return true;
    }
}

enum Colors {
    tomato,
    teal,
    thistle,
    tan,
    violet,
    steelblue,
    springgreen,
    skyblue,
    sandybrown
}

interface Quotes {
    quote: string,
    source: string,
    year: string,
    tags: string
}

let quotes: Array<Quotes> = [
        {
            quote: "I'm not sure if I was the first man in space or the last dog.",
            source: "Yuri Gagarin",
            year: "1961",
            tags: "Humor",
        },
        {
            quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
            source: "William Goldman",
            year: "1987",
            tags: "Inspirational",
        },
        {
            quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
            source: "Bill Watterson",
            year: "1980",
            tags:"Humor"
        },
        {
            quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
            source: "Neil Gaiman",
            year: "2001",
            tags: "Spirituaity"
        },
        {
            quote:"Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
            source: "Alexandre Dumas",
            year: "1844",
            tags: "Humanity"
        },
        {
            quote:"Never let your sense of morals prevent you from doing what is right.",
            source: "Isaac Asimov",
            year: "1951",
            tags: "Spirituality"
        },
        {
            quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
            source: "Douglas Adams",
            year: "1987",
            tags: "Inspirational",
        },
        {
            quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            source: "Ayn Rand",
            year: "1987",
            tags: "Inspirational"
        },
        {
            quote: "I'm not dumb. I just have a command of thoroughly useless information.",
            source: "Bill Watterson",
            year: "1999",
            tags:"Humor"
        },
        {
            quote:"A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
            source:"Jack London",
            year: "2001",
            tags:"Humanity"
        }
]


let div: Element = document.getElementById('quote-box');
let p: Element = document.getElementById('text');
let footer: Element = document.getElementById('author');
let button: Element = document.getElementById('new-quote');

(p as HTMLElement).style.fontFamily = "'PT Serif Caption', sans-serif";
(p as HTMLElement).innerHTML = quotes[0].quote;
(footer as HTMLElement).innerHTML = quotes[0].source;
document.body.style.backgroundColor = Colors[0];


let getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let qouteClass = new randomQuote(div, p, footer);

(button as HTMLElement).onclick = (event) => {
    let random = getRandom(0, 9)
    document.body.style.backgroundColor = Colors[random]
    qouteClass.changeText(quotes[random].quote, quotes[random].source)
    qouteClass.changeColor(random)
}
