console.log('LET & CONST & BLOCK');
// let & const
var variable = 'teste';
console.log(variable);
variable = 'outro teste';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 200; // not work
// console.log(maxLevels);
// block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log('ARROW FUNCTIONS');
// arrow functions
var addNumbers = function (n1, n2) {
    return n1 + n2;
};
console.log(addNumbers(2, 3));
var multiplyNumbers = function (n1, n2) { return n1 * n2; };
console.log(multiplyNumbers(2, 3));
var greet = function () {
    console.log('hello!');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('manu');
console.log('DEFAULT PARAMS');
// DEFAULT PARAMS
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countDown();
countDown(20);
//# sourceMappingURL=app.js.map