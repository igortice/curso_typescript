// example - 1
interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {
  size:  10,
  label: 'Size 10 Object'
};
printLabel(myObj);

// example - 2
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {
    color: 'white',
    area:  100
  };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black' });
console.log(mySquare);

// example - 3
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {
  x: 10,
  y: 20
};
// p1.x = 5; // error!
console.log(p1);

// example - 4
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });
const mySquare2 = createSquare({
  width:   100,
  opacity: 0.5
} as SquareConfig);
console.log(mySquare2);


// example - 5

interface UserInterface {
  name?: string;
  email?: string;

  [propName: string]: any;
}

function createMyUser(config: UserInterface): UserInterface {
  return config;
}

const myUser = createMyUser({
  name:  'igor',
  email: 'igortice@gmail.cm',
  age:   37
});

console.log(myUser);

// example - 6
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

console.log(mySearch('igor rocha', 'o'), mySearch('igor rocha', 'b'));

// example - 7
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];
console.log(myStr);

// example - 8
// interface ClockInterface {
//   currentTime: Date;
//
//   setTime(d: Date);
// }
//
// class Clock implements ClockInterface {
//   currentTime: Date;
//
//   constructor(h: number, m: number) {
//   }
//
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
// }

// example - 9
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
  }

  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
  }

  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();

// example - 10
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square        = <Square>{};
square.color      = 'blue';
square.sideLength = 10;
square.penWidth   = 5.0;
console.log(square);

// example - 11
interface Counter {
  interval: number;

  (start: number): string;

  reset(): void;
}

function getCounter(): Counter {
  let counter      = <Counter>function (start: number) {
  };
  counter.interval = 123;
  counter.reset    = function () {
  };
  return counter;
}

let c = getCounter();
console.log(c.interval);
c(10);
console.log(c.interval);
c.reset();
console.log(c.interval);
c.interval = 5.0;
console.log(c.interval);
