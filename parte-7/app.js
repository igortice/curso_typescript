function greet(person) {
    console.log("Hello, " + person.name + (person.age ? ' - ' + person.age : '') + " ");
}
function revertName(person) {
    person.name = person.name.split('').reverse().join('');
}
var person = {
    // age:  37,
    // username: 'igortice',
    name: 'Igor',
    hobbies: ['Play Video Game', 'Study Progamation'],
    likes: ['eat', 'run'],
    greet: function (lastName) {
        console.log("Hi, my last name is " + lastName);
    }
};
console.log(person);
greet(person);
person.greet('Rocha');
greet({
    name: 'Gabriel',
    age: 5
});
revertName(person);
greet(person);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, my last name is " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.name = 'Iandara';
myPerson.lastName = 'Girão';
console.log(myPerson);
myPerson.greet(myPerson.lastName);
//# sourceMappingURL=app.js.map