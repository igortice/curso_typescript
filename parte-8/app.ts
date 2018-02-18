// simple generic
function echo(data: any) {
  return data;
}

console.log(echo('Igor').length);
console.log(echo(37));
console.log(echo({
  name: 'Igor',
  age:  37
}));

// better generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Igor').length);
console.log(betterEcho<number>(37));
console.log(betterEcho({
  name: 'Igor',
  age:  37
}));

// built-in generics
const testResults: Array<number> = [3, 2.1, 99];
testResults.push(-2.99);
console.log(testResults);


// arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll<string>(['Apples', 'Bananas']);

// generics types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2('Igor').length);
console.log(echo2<number>(37));
console.log(echo2({
  name: 'Igor',
  age:  37
}));

// generics class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath1 = new SimpleMath<number, number>();
// simpleMath.baseValue = 'bla';
simpleMath1.baseValue = 50;
simpleMath1.multiplyValue = 4;
console.log(simpleMath1.calculate());

const simpleMath2 = new SimpleMath<string, string>();
// simpleMath.baseValue = 'bla';
simpleMath2.baseValue = '100';
simpleMath2.multiplyValue = '22';
console.log(simpleMath2.calculate());

const simpleMath3 = new SimpleMath<string, number>();
// simpleMath.baseValue = 'bla';
simpleMath3.baseValue = '100';
simpleMath3.multiplyValue = 44;
console.log(simpleMath3.calculate());
