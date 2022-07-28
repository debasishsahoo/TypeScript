export {};
class Student {
  //proprties
  id: number;
  name: string;

  //constructor
  constructor(x: number, y: string) {
    this.id = x;
    this.name = y;
  }
  //methods
  getName(): string {
    return `Name:${this.name}`;
  }
  getDetails(id: number) {
    if (id !== null) {
      return `ID:${this.id} and Name:${this.name}`;
    } else {
      return `Please Send Any Id`;
    }
  }
}

const Obj1 = new Student(1, 'Tanu');
const Obj2 = new Student(2, 'Ruma');

console.log('Obj1:', Obj1);
console.log('Obj2:', Obj2);

console.log('Obj1:', Obj1.getName());

console.log('Obj2:', Obj2.getDetails(2));
