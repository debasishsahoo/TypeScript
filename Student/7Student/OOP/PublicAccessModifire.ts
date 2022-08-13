//Private  -> Same Class Access Only
//Proceted ->
//Public   -> Any one can Access

export {};
class Student1 {
  public id: number;
  name: string;
  constructor(x: number, y: string) {
    //this key word is reference variable that refers to the current object
    this.id = x;
    this.name = y;
  }
}

let Sup: Student1 = new Student1(1, 'Sup');
let Sum: Student1 = new Student1(2, 'Sum');
console.log(Sup.id + '' + Sup.name);
console.log(Sum.id + '' + Sum.name);

