export {};

//Public by default
class Student1 {
  public id: number;
  name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

let stud1: Student1 = new Student1(1, 'Debasish');
console.log('Student1.name:', stud1.name);

//Private
class Student2 {
  public id: number;
  private name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

let stud2: Student2 = new Student2(1, 'Stokhome');
console.log('Student1.name:', stud2.name);

//Protocted
class Student3 {
  public id: number;
  private name: string;
  protected age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Person extends Student3 {
  private dept: string;
  constructor(id: number, name: string, age: number, dept: string) {
    super(id, name, age);
    this.dept = dept;
  }

  getDetails() {
    return `ID:${this.id},Name:${this.name},Age:${this.age},Dept:${this.dept}`;
  }
}

let me: Person = new Person(1, 'Azim', 45, 'cs');
