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
// example - 4
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });
var mySquare2 = createSquare({
    width: 100,
    opacity: 0.5
});
console.log(mySquare2);
function createMyUser(config) {
    return config;
}
var myUser = createMyUser({
    name: 'igor',
    email: 'igortice@gmail.cm',
    age: 37
});
console.log(myUser);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch('igor rocha', 'o'), mySearch('igor rocha', 'b'));
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
digital.tick();
var analog = createClock(AnalogClock, 7, 32);
analog.tick();
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);
function getCounter() {
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
console.log(c.interval);
c(10);
console.log(c.interval);
c.reset();
console.log(c.interval);
c.interval = 5.0;
console.log(c.interval);
//# sourceMappingURL=app.js.map