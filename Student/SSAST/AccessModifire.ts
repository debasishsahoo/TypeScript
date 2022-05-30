//Private ->only acess by its own Classe
//Public ->Any one Can Acess
//Protected->only Acess by its own class or subclass

//By Defult All the memberes are Public in Type Script.

export {};

//Public
class Student1 {
  //Properties(1)
  public id: number;
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

const StudentOBJ1: Student1 = new Student1(1, 'Debasish', 1522222);

console.log(StudentOBJ1.getName());

console.log(StudentOBJ1.getSalary());

console.log(StudentOBJ1.getDetails());

//Private
class Student2 {
  //Properties(1)
  public id: number;
  private name: string;
  private Salary: number;

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

const StudentOBJ2: Student2 = new Student2(1, 'Debasish', 1522222);

console.log(StudentOBJ2.getName());

console.log(StudentOBJ2.getSalary());

console.log(StudentOBJ2.getDetails());

//Protected
class Student3 {
  public id: number;
  private name: string;
  protected Salary: number;

  //Constructor(2)
  constructor(ID: number, NAME: string, SALARY: number) {
    this.id = ID;
    this.name = NAME;
    this.Salary = SALARY;
  }
}

class Person extends Student3 {
  private department: string;

  constructor(ID: number, NAME: string, SALARY: number, DEPT: string) {
    super(ID, NAME, SALARY);
    this.department = DEPT;
  }

  getDetails(): string {
    return `ID:${this.id}, NAME:${this.name},
     SALARY:${this.Salary} and DEPT:${this.department}`;
  }
}
