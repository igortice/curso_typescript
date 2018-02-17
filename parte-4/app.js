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
// default params
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
console.log('REST & SPREAD');
// rest & spread
var numbers = [1, 22, -5, 9];
console.log(Math.max(1, 22, -5, 9));
console.log(Math.max.apply(Math, numbers)); // spread
// function makeArray(arg1: number, arg2: number) {
//   return [arg1, arg2];
// }
// console.log(makeArray(1, 2));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
// Destructuring
console.log('DESTRUCTURING');
var myHobbies = ['Programacao', 'Gaming'];
// const hob1= myHobbies[0];
// const hob2= myHobbies[1];
var hob1 = myHobbies[0], hob2 = myHobbies[1];
console.log(hob1, hob2);
var userData = { userName: 'igor', userAge: 37 };
// const userName = userData.userName;
// const userAge  = userData.age;
var userName = userData.userName, userAge = userData.userAge;
console.log(userName, userAge);
// template literals
var myName = 'igor rocha';
// const hello = 'Ola meu nome é ' + myName;
var hello = "Verry complex string\nOla meu nome \u00E9 " + myName + "\n \n";
console.log(hello);
//# sourceMappingURL=app.js.map