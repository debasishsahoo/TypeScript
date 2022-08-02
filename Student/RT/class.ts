export {};

class Student {
  //Properties
  roll_no: number;
  name: string;
  age: number;
  isAdult: boolean;
  //constructor
  constructor(roll_no: number, name: string, age: number, isAdult: boolean) {
    this.roll_no = roll_no;
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
  }
  //Methods

  getName(): string {
    return `Name; ${this.name}`;
  }
  getAge(): number {
    return this.age;
  }
  is_Adult(): boolean {
    return this.isAdult;
  }

  getDetails(uid: number): string {
    if (uid === this.roll_no) {
      return `Id:${this.roll_no} name:${this.name} age:${this.age}`;
    } else {
      return `Please Provide Id!`;
    }
  }
}

let s1: Student = new Student(100, 'Deb', 35, true);

console.log('Name:', s1.getName());

console.log('Age:', s1.getAge());

console.log('is Adult:', s1.is_Adult());

console.log('Details:', s1.getDetails());
