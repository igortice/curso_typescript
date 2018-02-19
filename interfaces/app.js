function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = {
    x: 10,
    y: 20
};
// p1.x = 5; // error!
console.log(p1);
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });
var mySquare2 = createSquare({
    width: 100,
    opacity: 0.5
});
console.log(mySquare2);
//# sourceMappingURL=app.js.map