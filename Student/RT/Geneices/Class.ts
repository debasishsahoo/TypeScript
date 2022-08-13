export {};
class KeyValuePair<T, U> {
  private key: T;
  private Val: U;

  constructor(k: T, v: U) {
    this.key = k;
    this.Val = v;
  }

  display(): void {
    console.log(`Key=${this.key},Val=${this.Val}`);
  }
}

let kvp1: KeyValuePair<number, string> = new KeyValuePair<number, string>(
  1,
  'R'
);

kvp1.display();

let kvp2: KeyValuePair<number, number> = new KeyValuePair<number, number>(1, 2);

kvp2.display();

interface IKVP<T, U> {
  process(key: T, val: U): void;
}

class KVP1<T, U> implements IKVP<T, U> {
  process(key: T, val: U): void {
    console.log(`Key=${key},val=${val}`);
  }
}

let proc1: KVP1<number, string> = new KVP1<number, string>();

proc1.process(1, 'tanu');
