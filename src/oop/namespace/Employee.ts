/// <reference path="./StringUtility.ts" />
export class Employee {
  empCode: number;
  empName: string;
  constructor(name: string, code: number) {
    this.empName = StringUtility.ToCapital(name);
    this.empCode = code;
  }
  displayEmployee() {
    console.log(
      'Employee Code: ' + this.empCode + ', Employee Name: ' + this.empName
    );
  }
}
