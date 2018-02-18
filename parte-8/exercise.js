// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
//
// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
//
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap);
console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'igor');
stringMap.setItem('age', '37');
console.log(stringMap);
console.log(stringMap.getItem('name'));
console.log(stringMap.getItem('age'));
stringMap.printMap();
//# sourceMappingURL=exercise.js.map