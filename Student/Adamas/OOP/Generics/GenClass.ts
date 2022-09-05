export {};
class KeyValuePair<T, U> {
  private Key: T;
  private Val: U;

  constructor(k: T, v: U) {
    this.Key = k;
    this.Val = v;
  }

  display(): void {
    console.log(`Key=${this.Key},val=${this.Val}`);
  }
}

let kv1: KeyValuePair<number, string> = new KeyValuePair<number, string>(
  1,
  'Debasish'
);
let kv2: KeyValuePair<number, number> = new KeyValuePair<number, number>(1, 23);

//----------------------------------------------

