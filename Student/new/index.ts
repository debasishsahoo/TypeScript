export {};
class Student {
  //Properties
  id: number;
  name: string;

  //constructor
  constructor(ID: number, NAME: string) {
    this.id = ID;
    this.name = NAME;
  }

  //Methods
  GetName(): string {
    return `Name: ${this.name}`;
  }
  GetDetails(id: number): string {
    if (id !== null) {
      return `ID: ${this.id} and Name: ${this.name}`;
    } else {
      return `Please Send Any ID`;
    }
  }
}

const obj = new Student(1, 'Sourav');
console.log('obj:', obj);

console.log('Name:', obj.GetName());

console.log('Name:', obj.GetDetails(1));
