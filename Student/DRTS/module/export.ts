export let age = 35;
export let company: string = 'DEVSOL';

export class Emp {
  //properties
  id: number;
  name: string;

  constructor(x: number, y: string) {
    this.id = x;
    this.name = y;
  }

  display() {
    console.log(`id:${this.id} and name:${this.name}`);
  }
}
