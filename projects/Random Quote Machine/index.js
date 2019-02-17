var randomQuote = /** @class */ (function () {
    function randomQuote(div, p, footer) {
        var _this = this;
        this.changeColor = function (color) {
            _this.div.style.color = Colors[color];
            return true;
        };
        this.changeText = function (quote, author) {
            _this.p.textContent = quote;
            _this.footer.textContent = author;
            return true;
        };
        this.div = div;
        this.p = p;
        this.footer = footer;
    }
    return randomQuote;
}());
var Colors;
(function (Colors) {
    Colors[Colors["tomato"] = 0] = "tomato";
    Colors[Colors["teal"] = 1] = "teal";
    Colors[Colors["thistle"] = 2] = "thistle";
    Colors[Colors["tan"] = 3] = "tan";
    Colors[Colors["violet"] = 4] = "violet";
    Colors[Colors["steelblue"] = 5] = "steelblue";
    Colors[Colors["springgreen"] = 6] = "springgreen";
    Colors[Colors["skyblue"] = 7] = "skyblue";
    Colors[Colors["sandybrown"] = 8] = "sandybrown";
})(Colors || (Colors = {}));
var quotes = [
    {
        quote: "I'm not sure if I was the first man in space or the last dog.",
        source: "Yuri Gagarin",
        year: "1961",
        tags: "Humor"
    },
    {
        quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
        source: "William Goldman",
        year: "1987",
        tags: "Inspirational"
    },
    {
        quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
        source: "Bill Watterson",
        year: "1980",
        tags: "Humor"
    },
    {
        quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
        source: "Neil Gaiman",
        year: "2001",
        tags: "Spirituaity"
    },
    {
        quote: "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
        source: "Alexandre Dumas",
        year: "1844",
        tags: "Humanity"
    },
    {
        quote: "Never let your sense of morals prevent you from doing what is right.",
        source: "Isaac Asimov",
        year: "1951",
        tags: "Spirituality"
    },
    {
        quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
        source: "Douglas Adams",
        year: "1987",
        tags: "Inspirational"
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
        tags: "Humor"
    },
    {
        quote: "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
        source: "Jack London",
        year: "2001",
        tags: "Humanity"
    }
];
var div = document.getElementById('quote-box');
var p = document.getElementById('text');
var footer = document.getElementById('author');
var button = document.getElementById('new-quote');
p.style.fontFamily = "'PT Serif Caption', sans-serif";
p.innerHTML = quotes[0].quote;
footer.innerHTML = quotes[0].source;
document.body.style.backgroundColor = Colors[0];
var getRandom = function (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var qouteClass = new randomQuote(div, p, footer);
button.onclick = function (event) {
    var random = getRandom(0, 9);
    document.body.style.backgroundColor = Colors[random];
    qouteClass.changeText(quotes[random].quote, quotes[random].source);
    qouteClass.changeColor(random);
};
