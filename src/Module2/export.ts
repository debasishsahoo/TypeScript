export let age = 35; // Variable

export class Emp {
  //Class
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  displayEmp() {
    console.log(`id:${this.id} and Name:${this.name}`);
  }
}

export let complayname: string = 'DeVSol'; //variable
