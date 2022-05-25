export {};
class Student {
  //Properties(1)
  id: number;
  name: string;
  Salary: number;

  //Constructor(2)
  constructor(ID: number, NAME: string, SALARY: number) {
    this.id = ID;
    this.name = NAME;
    this.Salary = SALARY;
  }

  //METHOD(3)
  getName(): string {
    return `Name: ${this.name}`;
  }

  getSalary(): number | string {
    return `Salary:${this.Salary}`;
  }

  getDetails(): string {
    return `Name: ${this.name} and ID:${this.id}`;
  }
}

const StudentOBJ: Student = new Student(1, 'Debasish', 1522222);

console.log(StudentOBJ.getName());

console.log(StudentOBJ.getSalary());

console.log(StudentOBJ.getDetails());
