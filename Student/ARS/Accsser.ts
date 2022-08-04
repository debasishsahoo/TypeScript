export {};

class Student {
  private _Name: string;
  private _Dept: string;

  get Details(): string {
    return `${this._Name} & ${this._Dept}`;
  }
  set Name(name: string) {
    this._Name = name;
  }
  set Dept(dept: string) {
    this._Dept = dept;
  }
}

let stud: Student = new Student();
stud.Name = 'Debasish';
stud.Dept = 'CSE';
console.log(stud.Details);
