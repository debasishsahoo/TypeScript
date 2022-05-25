export {};

let password: string = '1234';

class Student {
  private _fullname: string;

  get fullName(): string {
    return `Name:${this._fullname}`;
  }
  set fullName(newName: string) {
    if (password && password == '1234') {
      this._fullname = newName;
    } else {
      console.log(`Please Provide Correct Password`);
    }
  }
}

let stud: Student = new Student();
console.log((stud.fullName = 'deb'));// calling set by using assign operator

console.log(stud.fullName);//calling get



console.log((stud.fullName = 'kaka'));

console.log(stud.fullName);


stud.fullName = 'Debasish';


console.log(stud.fullName);
