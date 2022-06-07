export {};
//Generics Class
class StudentInfo<I, S> {
  private Id: I;
  private Name: S;

  constructor(id: I, name: S) {
    this.Id = id;
    this.Name = name;
  }
  getValue(): void {
    console.log(`Id:${this.Id},Name:${this.Name}`);
  }
}

let st1 = new StudentInfo<number, string>(100, 'deb');
let st2 = new StudentInfo<boolean, string>(true, 'deb');
let st3 = new StudentInfo<boolean, boolean>(false, true);
let st4 = new StudentInfo<string, string>('a1', 'sahoo');
//-------------------------------------------------------//

interface People {
  name: string;
  age: number;
}
interface Celebrity extends People {
  profession: string;
}
function printname<T extends Celebrity>(x: T): void {
  console.log(`${x.name},${x.age},${x.profession}`);
}

let player: Celebrity = {
  name: 'Debasish',
  age: 30,
  profession: 'Coding',
};

printname(player);
