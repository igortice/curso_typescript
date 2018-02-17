console.log('LET & CONST & BLOCK');
// let & const
let variable = 'teste';
console.log(variable);
variable = 'outro teste';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 200; // not work
// console.log(maxLevels);

// block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}

reset();
console.log(variable);

console.log('ARROW FUNCTIONS');
// arrow functions
const addNumbers = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(addNumbers(2, 3));

const multiplyNumbers = (n1: number, n2: number) => n1 * n2;
console.log(multiplyNumbers(2, 3));

const greet = () => {
  console.log('hello!');
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend('manu');

console.log('DEFAULT PARAMS');
// default params
const countDown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log('Done', start);
};
countDown();
countDown(20);

console.log('REST & SPREAD');
// rest & spread
const numbers = [1, 22, -5, 9];
console.log(Math.max(1, 22, -5, 9));
console.log(Math.max(...numbers)); // spread

// function makeArray(arg1: number, arg2: number) {
//   return [arg1, arg2];
// }
// console.log(makeArray(1, 2));
function makeArray(...args: number[]) {
  return args;
}

console.log(makeArray(1, 2));


// Destructuring
console.log('DESTRUCTURING');
const myHobbies = ['Programacao', 'Gaming'];
// const hob1= myHobbies[0];
// const hob2= myHobbies[1];
const [hob1, hob2] = myHobbies;
console.log(hob1, hob2);

const userData = { userName: 'igor', userAge: 37 };
// const userName = userData.userName;
// const userAge  = userData.age;
const { userName, userAge } = userData;
console.log(userName, userAge);

// template literals
const myName = 'igor rocha';
// const hello = 'Ola meu nome é ' + myName;
const hello  = `Verry complex string
Ola meu nome é ${myName}
 
`;
console.log(hello);
