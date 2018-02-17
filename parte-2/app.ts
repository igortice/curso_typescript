// string
let myName = 'Igor';
// myName =  38;

// number
let myAge = 38;
// myAge = 'Igor';

// boolean
let hasHobbies = false;
// hasHobbies = 0;

// assign types
let myRealAge: number | string;
myRealAge = 37;
myRealAge = '37';

// array
let hobbies: any[] = ['Sports', 'Games'];
hobbies            = ['teste'];
hobbies            = [100];
console.log(hobbies);

// tuples
let address: [string, number] = ['Rua Antonio Augusto', 1415];
console.log(address);

// enum
enum Color {
  Blue  = 'azul', // 0
  Green = 'verde', // 1
  Red   = 'vermelho' // 2
}

let myColor: Color = Color.Red;
console.log(myColor);


// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', serie: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// function void
function sayHello(text = 'Hello!'): void {
  console.log(text);
}

sayHello();

// argument types
function multiply(v1: number, v2: number): number {
  return v1 * v2;
}

console.log(multiply(2, 3));

// functions types
let myMultiply: any;
myMultiply = sayHello;
myMultiply('Functions Types');
myMultiply = multiply;
console.log(myMultiply(4, 5));

let myMultiply2: (v1: number, v2: number) => number;
// myMultiply2 = sayHello;
// myMultiply('Functions Types 2');
myMultiply2 = multiply;
console.log(myMultiply2(5, 5));

// objects
let userData: { name: string, age: number } = {
  name: 'igor',
  age:  37
};
// userData = {};
// userData     = {
//   a: 'Hello',
//   b: 22
// };

// complex objects
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3, 2, 99.3],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] }
let complex2: Complex = {
  data: [100, 3, 2, 99.3],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 37;
console.log(typeof myRealRealAge, myRealRealAge);
myRealRealAge = '37';
console.log(typeof myRealRealAge, myRealRealAge);

// check types
let finalValue = 'A string';
if (typeof finalValue == 'number') {
  console.log('Final value is a number');
} else if (typeof finalValue == 'string') {
  console.log('Final value is a string');
}

// never
function  neverReturns(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null; //"strictNullChecks": false | true
// canBeNull = 'Igor';
console.log(canBeNull);
