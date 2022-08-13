export {};
class Student {
  public id: number;
  private name: string;
  constructor(x: number, y: string) {
    this.id = x;
    this.name = y;
  }
  getName() {
    return this.name;
  }
}

let Stud: Student = new Student(1, 'Amit');
console.log(Stud.id);
console.log(Stud.getName());

class Indronil extends Student {
  public dept: string;
  constructor(x: number, y: string, z: string) {
    super(x, y);
    this.dept = z;
  }
  getDetails() {
    return `id:${this.id} and ${this.name} and Dept:${this.dept} `;
  }
}
