/// <reference path = "./StringUtil.ts"
export class Emp {
  id: string;
  name: string;

  constructor(ID: string, NAME: string) {
    this.id = StringUtility.ToY(ID);
    this.name = StringUtility.ToX(NAME);
  }

  details() {
    console.log(`EmpID:${this.id}
     EmpNAME:${this.name}`);
  }
}

const E = new Emp('ABC', 'deb');

E.details();
