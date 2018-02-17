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
// DEFAULT PARAMS
const countDown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log('Done', start);
};
countDown();
countDown(20);
