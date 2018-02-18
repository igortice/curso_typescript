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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 37;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Teste');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var p1 = new Person();
p1.name = 'igor2';
p1.username = 'igortice';
console.log(p1);
var p2 = new Person('igor1', 'igor.roben');
p2.printAge();
console.log(p2);
// inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(name, username, age) {
        var _this = _super.call(this, name, name) || this;
        _this.username = username;
        _this = _super.call(this, username, username) || this;
        _this.age = age;
        return _this;
    }
    return Max;
}(Person));
var m1 = new Max('max', 'maxtice', 38);
console.log(m1);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
// statics
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log('2 * PI = ', 2 * Helpers.PI);
console.log('Diameter 8 = ', Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right);
// right.name = 'something else';
// console.log(right);
//# sourceMappingURL=app.js.map