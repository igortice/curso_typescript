// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
//
// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
//
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();

class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap);
console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'igor');
stringMap.setItem('age', '37');
console.log(stringMap);
console.log(stringMap.getItem('name'));
console.log(stringMap.getItem('age'));
stringMap.printMap();

