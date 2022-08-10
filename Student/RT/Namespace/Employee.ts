///<reference path="./StringUtil.ts">

export class Employee {
  id: number;
  name: string;

  constructor(eid: number, ename: string) {
    this.name = StringUtility.ToCapital(ename);
    this.id = eid;
  }
  displayEmp() {
    console.log(`id:${this.id} and name:${this.name}`);
  }
}

let Emp: Employee = new Employee(12, 'deb');

Emp.displayEmp();
