export {};
class Company {
  readonly Country: string = 'India';
  readonly name: string;

  constructor(ContactName: string, ContactCountry: string) {
    this.name = ContactName;
    this.Country = ContactCountry;
  }

  ShowDetails() {
    console.log(this.name + `:` + this.Country);
  }
}

const com: Company = new Company('RJA SOLUTIONS', 'UK');
com.ShowDetails();
com.name = 'TCS';
com.Country = 'USA';


