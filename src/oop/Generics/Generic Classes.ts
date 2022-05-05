class KeyValuePair<T, U> {
  private key: T;
  private val: U;

  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`);
  }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, 'Steve');
kvp1.display(); //Output: Key = 1, Val = Steve

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue('CEO', 'Bill');
kvp2.display(); //Output: Key = CEO, Val = Bill

//Generic Class implements Generic Interface
interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void;
}

class kvProcessor1<T, U> implements IKeyValueProcessor<T, U> {
  process(key: T, val: U): void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc1: IKeyValueProcessor<number, string> = new kvProcessor1();
proc1.process(1, 'Bill'); //Output: key = 1, value = Bill
