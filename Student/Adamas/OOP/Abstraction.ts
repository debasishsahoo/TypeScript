export {};

abstract class Depterment {
  constructor(public name: string, public type: string) {}

  printName(): void {
    console.log(`Deprtment name:${this.name}`);
  }
  printType(): void {
    console.log(`Deprtment Type:${this.type}`);
  }

  abstract YEAR(): void;
}

class CSE extends Depterment {
  constructor() {
    super('CSE', 'ENGG');
  }
  YEAR(): void {
    console.log('4');
  }
  getSem() {
    console.log(`The Sem is 8`);
  }
}

class BSC extends Depterment {
  constructor() {
    super('BSE', 'ENGG');
  }

  YEAR(): void {
    console.log('3');
  }

  getYear() {
    console.log(`The Year is 3`);
  }
}

let dept: Depterment;
dept = new CSE();
dept.printName();
dept.printType();
dept.YEAR();

// class ECE extends Depterment {
//   constructor() {
//     super(' ece', 'ENGG');
//   }

//   Year(): void {
//     console.log('4');
//   }
// }
// class EE extends Depterment {
//   constructor() {
//     super('EE', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('4');
//   }
// }
// class ME extends Depterment {
//   constructor() {
//     super('ME', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('4');
//   }
// }
// class CE extends Depterment {
//   constructor() {
//     super('CE', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('4');
//   }
// }
// class BT extends Depterment {
//   constructor() {
//     super('BT', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('4');
//   }
// }
// class LAW extends Depterment {
//   constructor() {
//     super('LAW', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('5');
//   }
// }
// class BSC extends Depterment {
//   constructor() {
//     super('BSE', 'ENGG');
//   }

//   YEAR(): void {
//     console.log('3');
//   }
// }
