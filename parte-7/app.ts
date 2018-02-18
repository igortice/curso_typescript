// INTERFACE IS A CONTRACT FOR NO OPTIONAL VARIABLES OR METHODS
interface BasePerson {
  name: string;
  age?: number;

  [propName: string]: any;

  greet(lastName: string): void;
}

function greet(person: BasePerson) {
  console.log(`Hello, ${person.name}${person.age ? ' - ' + person.age : ''} `);
}

function revertName(person: BasePerson) {
  person.name = person.name.split('').reverse().join('');
}

const person: BasePerson = {
  // age:  37,
  // username: 'igortice',
  name:    'Igor',
  hobbies: ['Play Video Game', 'Study Progamation'],
  likes:   ['eat', 'run'],
  greet(lastName: string) {
    console.log(`Hi, my last name is ${lastName}`);
  }
};
console.log(person);
greet(person);
person.greet('Rocha');
greet({
  name: 'Gabriel',
  age:  5
} as BasePerson);
revertName(person);
greet(person);

class Person implements BasePerson {
  name: string;

  greet(lastName: string): void {
    console.log(`Hi, my last name is ${lastName}`);
  }

}

const myPerson: BasePerson = new Person();
myPerson.name          = 'Iandara';
myPerson.lastName      = 'Girão';
console.log(myPerson);
myPerson.greet(myPerson.lastName);

// functions types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (v1: number, v2: number) {
  return (v1 + v2) * 2;
};
console.log(myDoubleFunction(2, 3));
