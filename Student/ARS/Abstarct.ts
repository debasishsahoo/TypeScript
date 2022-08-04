export {};

abstract class dept {
  constructor(public name: string) {}
  printname(): void {
    console.log(this.name);
  }
  abstract currentsem(): void;
  //currentyear(): string;
}

class CSE extends dept {
  constructor() {
    super('CSE');
  }
  currentsem(): void {
    console.log('8th');
  }
  currentyear(): void {
    console.log('4th');
  }
}
class ECE extends dept {
  constructor() {
    super('electronic');
  }
  currentsem(): void {
    console.log('5th');
  }
  currentyear(): void {
    console.log('3th');
  }
}
class EE extends dept {
  constructor() {
    super('EE');
  }
  currentsem(): void {
    console.log('1th');
  }
  currentyear(): void {
    console.log('1th');
  }
}
class ME extends dept {
  constructor() {
    super('ME');
  }
  currentsem(): void {
    console.log('6th');
  }
  currentyear(): void {
    console.log('3th');
  }
}
class CE extends dept {
  constructor() {
    super('CE');
  }
  currentsem(): void {
    console.log('4th');
  }
  currentyear(): void {
    console.log('2th');
  }
}

let Department: dept;

Department = new CSE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();

Department = new CE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();

Department = new EE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();

Department = new ECE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();

Department = new ME();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
