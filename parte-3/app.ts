let myName: string = 'igor';
let myAge: number  = 37;

console.log(myName, myAge);

let anything: any; // "noImplicitAny": true
anything = 12;


function conrolMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}

console.log();
