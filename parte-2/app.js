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
