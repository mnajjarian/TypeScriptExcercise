var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var die = /** @class */ (function () {
    function die(div) {
        var _this = this;
        this.changeValue = function (value) {
            _this.div.textContent = value;
            return true;
        };
        this.div = div;
    }
    return die;
}());
var RollValue;
(function (RollValue) {
    RollValue[RollValue["One"] = 0] = "One";
    RollValue[RollValue["Two"] = 1] = "Two";
    RollValue[RollValue["Three"] = 2] = "Three";
    RollValue[RollValue["Four"] = 3] = "Four";
    RollValue[RollValue["Five"] = 4] = "Five";
    RollValue[RollValue["Six"] = 5] = "Six";
    RollValue[RollValue["Seven"] = 6] = "Seven";
    RollValue[RollValue["Eight"] = 7] = "Eight";
    RollValue[RollValue["Nine"] = 8] = "Nine";
    RollValue[RollValue["Ten"] = 9] = "Ten";
    RollValue[RollValue["Twelve"] = 10] = "Twelve";
})(RollValue || (RollValue = {}));
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var squareBorder = '2px solid black';
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.changeValue = function (value) {
            _this.div.innerHTML = RollValue[value];
            return true;
        };
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        _this.div.style.border = squareBorder;
        return _this;
    }
    dieRoller.RollValue = RollValue;
    return dieRoller;
}(die));
var dices = [];
for (var index = 0; index <= 4; index++) {
    if (index < 4) {
        dices.push({
            'div': document.createElement('div')
        });
    }
    else {
        dices.push({
            'button': document.createElement('button')
        });
    }
}
dices.map(function (dice) {
    var dieRollerClass = new dieRoller(dice.div);
    document.body.appendChild(dice.div);
});
