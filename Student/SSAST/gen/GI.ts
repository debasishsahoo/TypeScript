export {};
//Generic Inteface
interface Iprocesser<T> {
  result: T;
  process(a: T, b: T): T;
}
let y: Iprocesser<number>;

//Generic interface as type
interface KeyPair<T, U> {
  key: T;
  pair: U;
}
let x: KeyPair<number, number>;

//generic interface as function type
let kv1: KeyPair<number, string> = { key: 1, pair: 'Kundu' };
let kv2: KeyPair<number, number> = { key: 1, pair: 2 };
//----------------------------------------------------------
interface KVP<T, U> {
  (k: T, v: U): void;
}

function NKP(k: number, v: number): void {
  console.log(`key:${k} and Value:${v}`);
}
function SKP(k: number, v: string): void {
  console.log(`key:${k} and Value:${v}`);
}

let NV: KVP<number, number> = NKP;

NV(1, 145);

let SV: KVP<number, string> = SKP;

SV(1, 'Sourav');

//--------------------------------------------------------
interface kvp<T, U> {
  (k: T, v: U): void;
}

function PKP<T, U>(k: T, v: U): void {
  console.log(`Key:${k} , Value:${v}`);
}

let nkp: kvp<number, number> = PKP;
let skp: kvp<number, string> = PKP;
//--------------------------------------------------------

interface IKVP<T, U> {
  percess(k: T, v: U): void;
}

class KUP implements IKVP<number, string> {
  percess(k: number, v: string): void {
    console.log(`Key:${k},Value:${v}`);
  }
}

let proc8: IKVP<number, string> = new KUP();

proc8.percess(1, 'Sahoo');
//===============================