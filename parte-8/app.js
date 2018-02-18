// simple generic
function echo(data) {
    return data;
}
console.log(echo('Igor').length);
console.log(echo(37));
console.log(echo({
    name: 'Igor',
    age: 37
}));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Igor').length);
console.log(betterEcho(37));
console.log(betterEcho({
    name: 'Igor',
    age: 37
}));
// built-in generics
var testResults = [3, 2.1, 99];
testResults.push(-2.99);
console.log(testResults);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apples', 'Bananas']);
// generics types
var echo2 = betterEcho;
console.log(echo2('Igor').length);
console.log(echo2(37));
console.log(echo2({
    name: 'Igor',
    age: 37
}));
// generics class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath1 = new SimpleMath();
// simpleMath.baseValue = 'bla';
simpleMath1.baseValue = 50;
simpleMath1.multiplyValue = 4;
console.log(simpleMath1.calculate());
var simpleMath2 = new SimpleMath();
// simpleMath.baseValue = 'bla';
simpleMath2.baseValue = '100';
simpleMath2.multiplyValue = '22';
console.log(simpleMath2.calculate());
var simpleMath3 = new SimpleMath();
// simpleMath.baseValue = 'bla';
simpleMath3.baseValue = '100';
simpleMath3.multiplyValue = 44;
console.log(simpleMath3.calculate());
//# sourceMappingURL=app.js.map