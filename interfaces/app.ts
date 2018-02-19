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
interface CircleInterface {
  name?: string;
  raio?: number;

  [propName: string]: any;
}

// error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });
const mySquare2 = createSquare({
  width:   100,
  opacity: 0.5
} as SquareConfig);
console.log(mySquare2);
