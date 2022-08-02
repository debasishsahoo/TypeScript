export {};

class Student {
  private _fullName: string;

  get fullname(): string {
    return this._fullName;
  }

  set fullName(name: string) {
    this._fullName = name;
  }
}

let stud: Student = new Student();

stud.fullName = 'debasish';

console.log(stud.fullname);
