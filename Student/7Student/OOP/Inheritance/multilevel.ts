export {};

class GrandFather {
  eat(): void {
    console.log(`Eating`);
  }
}

class Father extends GrandFather {
  sleep(): void {
    console.log(`Sleep`);
  }
}

class Son extends Father {
  playing(): void {
    console.log(`Playing`);
  }
}

let son = new Son();

son.eat();
son.sleep();
son.playing();

//GrandFather->Father->Son
