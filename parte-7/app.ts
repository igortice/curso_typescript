// INTERFACE IS A CONTRACT FOR NO OPTIONAL VARIABLES OR METHODS
interface Person {
  name: string;
  age?: number;

  [propName: string]: any;

  greet(lastName: string): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}${person.age ? ' - ' + person.age : ''} `);
}

function revertName(person: Person) {
  person.name = person.name.split('').reverse().join('');
}

const person: Person = {
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
} as Person);
revertName(person);
greet(person);

class Person implements Person {
  name: string;

  greet(lastName: string): void {
    console.log(`Hi, my last name is ${lastName}`);
  }

}

const myPerson: Person = new Person();
myPerson.name = 'Iandara';
myPerson.lastName = 'Girão';
console.log(myPerson);
myPerson.greet(myPerson.lastName);
