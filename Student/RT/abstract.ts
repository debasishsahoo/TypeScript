export {};
abstract class Dept {
  constructor(public deptname: string) {}
  printName(): void {
    console.log(`Dept name: ${this.deptname}`);
  }
  abstract printMeeting(): void;
  abstract ReprtSubmit(): void;
}
class Accounts extends Dept {
  constructor() {
    super('Account and Audit Dept');
  }

  printMeeting(): void {
    console.log('Accounts Dept Meeting on 10:00 AM');
  }

  ReprtSubmit(): void {
    console.log('Accounts Dept Report Submit on 1:00 PM');
  }
}

class Education extends Dept {
  constructor() {
    super('Education and School Dept');
  }

  printMeeting(): void {
    console.log('Education Dept Meeting on 12:00 PM');
  }

  ReprtSubmit(): void {
    console.log('Education Dept Report Submit on 3:00 PM');
  }
}

let Department: Dept;

Department = new Accounts();
Department.printName();
Department.printMeeting();
Department.ReprtSubmit();

Department = new Education();
Department.printName();
Department.printMeeting();
Department.ReprtSubmit();
