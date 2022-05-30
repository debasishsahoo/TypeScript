export {};
let password = '1234';

class Student {
  private _fullName: string;

  get fullname(): string {
    return this._fullName;
  }

  set fullname(x: string) {
    if (password && password == '1234') {
      this._fullName = x;
    } else {
      console.log(`plese proive Correct`);
    }
  }
}

let stud: Student = new Student();

stud.fullname = 'Debasish Sahoo';

console.log(stud.fullname);
