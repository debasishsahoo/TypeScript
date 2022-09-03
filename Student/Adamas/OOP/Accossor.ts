export {};
class Student {
  private _fullname: string;

  //   constructor(x: string) {
  //     this._fullname = x;
  //   }

  //seter
  set fullname(name: string) {
    this._fullname = name;
  }
  //geter
  get fullname() {
    return this._fullname;
  }
}

let Stud: Student = new Student();
Stud.fullname = 'Debasish';
console.log(Stud.fullname);
