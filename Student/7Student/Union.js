"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 15;
console.log(typeof a);
a = ['Debasish', 'Sahoo'];
console.log(typeof a);
a = true;
console.log(typeof a);

function SayHello(arg) {
    if (typeof arg == 'number') {
        console.log('Recived A number');
    }
    else if (typeof arg == 'string') {
        console.log('Recived A String');
    }
    else if (typeof arg == 'object') {
        console.log('Recived A object');
    }
    else {
        console.log('Recived None of this');
    }
}
SayHello([4, 5]);
SayHello(4);
SayHello('a');
function Fun(arg) {
    if (typeof arg == 'number') {
        return arg + 5; //number return
    }
    else if (typeof arg == 'string') {
        return arg; //string return
    }
    else if (typeof arg == 'boolean') {
        console.log('Recived A boolean'); //void return
    }
    else {
        return false; //bool return
    }
}
Fun(null);
Fun(undefined);
//Litereal Type
function engin(arg) {
    if (arg == 'start' || arg == true) {
        console.log('Start the Engine');
    }
    if (arg == 'stop' || arg == false) {
        console.log('Stop the Engine');
    }
}
engin('start');
engin(true);
engin('stop');
engin(false);
engin('Start');
