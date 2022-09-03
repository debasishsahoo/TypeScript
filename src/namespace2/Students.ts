///<reference path='./SU.ts'/>

export class Student {
  name: string;
  title: string;

  constructor(x: string, y: string) {
    this.name = SU.ToCapital(x);
    this.title = SU.ToSmall(y);
  }

  getFullName() {
    return concat(this.name, this.title);
  }
}
