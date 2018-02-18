class Person {
  // public name: string;
  name: string;
  protected age: number = 37;
  private type: string;

  constructor(name?: string, public username?: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Teste');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const p1    = new Person();
p1.name     = 'igor2';
p1.username = 'igortice';
console.log(p1);

const p2 = new Person('igor1', 'igor.roben');
p2.printAge();
console.log(p2);

// inheritance
class Max extends Person {
  constructor(name?: string, public username?: string, age?: number) {
    super(name, name);
    super(username, username);
    this.age = age;
  }
}

const m1 = new Max('max', 'maxtice', 38);
console.log(m1);

// Getters & Setters
class Plant {
  private _species: string = 'default';

  get species(): string {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);

// statics
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log('2 * PI = ', 2 * Helpers.PI);
console.log('Diameter 8 = ', Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = 'Default';
  budget: number;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);
// right.name = 'something else';
// console.log(right);
