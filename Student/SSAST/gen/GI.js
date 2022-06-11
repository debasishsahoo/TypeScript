"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let y;
let x;
//generic interface as function type
let kv1 = { key: 1, pair: 'Kundu' };
let kv2 = { key: 1, pair: 2 };
function NKP(k, v) {
    console.log(`key:${k} and Value:${v}`);
}
function SKP(k, v) {
    console.log(`key:${k} and Value:${v}`);
}
let NV = NKP;
NV(1, 145);
let SV = SKP;
SV(1, 'Sourav');
function PKP(k, v) {
    console.log(`Key:${k} , Value:${v}`);
}
let nkp = PKP;
let skp = PKP;
class KUP {
    percess(k, v) {
        console.log(`Key:${k},Value:${v}`);
    }
}
let proc8 = new KUP();
proc8.percess(1, 'Sahoo');
//===============================
