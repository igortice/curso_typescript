var myName = 'Igor';
var myAge = 38;
var hasHobbies = false;
var myRealAge;
myRealAge = 37;
myRealAge = '37';
var hobbies = ['Sports', 'Games'];
hobbies = ['teste'];
hobbies = [100];
console.log(hobbies);
var address = ['Rua Antonio Augusto', 1415];
console.log(address);
var Color;
(function (Color) {
    Color["Blue"] = "azul";
    Color["Green"] = "verde";
    Color["Red"] = "vermelho";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', serie: 3 };
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello(text) {
    if (text === void 0) { text = 'Hello!'; }
    console.log(text);
}
sayHello();
function multiply(v1, v2) {
    return v1 * v2;
}
console.log(multiply(2, 3));
var myMultiply;
myMultiply = sayHello;
myMultiply('Functions Types');
myMultiply = multiply;
console.log(myMultiply(4, 5));
var myMultiply2;
myMultiply2 = multiply;
console.log(myMultiply2(5, 5));
var userData = {
    name: 'igor',
    age: 37
};
var complex = {
    data: [100, 3, 2, 99.3],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 2, 99.3],
    output: function (all) {
        return this.data;
    }
};
var myRealRealAge = 37;
console.log(typeof myRealRealAge, myRealRealAge);
myRealRealAge = '37';
console.log(typeof myRealRealAge, myRealRealAge);
var finalValue = 'A string';
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
else if (typeof finalValue == 'string') {
    console.log('Final value is a string');
}
function neverReturns() {
    throw new Error('An error!');
}
var canBeNull = 12;
canBeNull = null;
console.log(canBeNull);
