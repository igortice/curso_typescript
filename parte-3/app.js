var myName = 'igor';
var myAge = 37;
console.log(myName, myAge);
var anything; // "noImplicitAny": true
anything = 12;
function conrolMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
console.log();
//# sourceMappingURL=app.js.map