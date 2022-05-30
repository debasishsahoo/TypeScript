export {};
class Student {
  //properties
  id: number;
  name: string;

  //hear Properties is not init delault

  // using  constructor key Word
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  //methods
  getName(): string {
    return `Name:${this.name}`;
  }
  getDetails(): string {
    return `Id:${this.id},Name:${this.name}`;
  }
}

const StudentObj = new Student(1, 'Dinda');

StudentObj.getName();
console.log(StudentObj.getName());

console.log(StudentObj.getDetails());
