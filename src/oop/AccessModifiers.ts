//Private ->Same Class Access only
//Protected
//Public ->Any one can Access

class Person {
  protected VoterId: string;
  private FirstName: string;
  private LastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.VoterId = id;
    this.FirstName = firstName;
    this.LastName = lastName;
  }

  public GetFullName(): string {
    return `${this.FirstName}  ${this.LastName}`;
  }
  public GetID(): string {
    return `${this.VoterId}`;
  }
}

let person = new Person('A7455BZ', 'Abdul', 'AZIM');
console.log('person:', person);

console.log('person:', person.GetID());
