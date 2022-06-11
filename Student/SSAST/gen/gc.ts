export {};

class keyValuePair<T1, T2> {
  private key: T1;
  private Val: T2;

  constructor(KEY: T1, VAL: T2) {
    this.key = KEY;
    this.Val = VAL;
  }
  display(): void {
    console.log(`Key=${this.key} and Val=${this.Val}`);
  }
}

let KVP1 = new keyValuePair<number, string>(1, 'Sourav');

KVP1.display();

let KVP2 = new keyValuePair<string, string>('A', 'Tanisha');

KVP2.display();

//Generic class implements generic interface

interface IKeyValueProcessor<T1, T2> {
  process(key: T1, val: T2): void;
}

class KV<T1, T2> implements IKeyValueProcessor<T1, T2> {
  process(key: T1, val: T2): void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc1: IKeyValueProcessor<number, string> = new KV();

let proc2: IKeyValueProcessor<string, string> = new KV();

let proc3: IKeyValueProcessor<boolean, boolean> = new KV();

let proc4: IKeyValueProcessor<number, number> = new KV();
proc1.process(1, 'Sahoo');
