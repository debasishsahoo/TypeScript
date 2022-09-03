"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrandFather {
    eat() {
        console.log(`Eating`);
    }
}
class Father extends GrandFather {
    sleep() {
        console.log(`Sleep`);
    }
}
class Son extends Father {
    playing() {
        console.log(`Playing`);
    }
}
let son = new Son();
son.eat();
son.sleep();
son.playing();
//GrandFather->Father->Son
