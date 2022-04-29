class EnggStudent {
  //Properties
  id: number;
  name: string;
  dept: string;
  year: number;

  //Constructor
  constructor(ID: number, NAME: string, DEPT: string, YEAR: number) {
    this.id = ID;
    this.name = NAME;
    this.dept = DEPT;
    this.year = YEAR;
  }

  //Method
  GetYear(): number {
    return this.year;
  }
  GetIDNAME(): string {
    return `ID: ${this.id} and Name: ${this.name}`;
  }
}

const obj = new EnggStudent(1, 'Abdul', 'CS', 2022);
console.log('obj:', obj);

console.log('YEAR:', obj.GetYear());
