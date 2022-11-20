//Private ->Same Class Access only or Local Object
//Protected
//Public ->Any one can Access

// Access Modifier|	Accessible within class|	Accessible in subclass|	Accessible externally via class instance
// Public	               Yes	                         Yes                  	Yes
// Protected	           Yes	                         Yes	                  No
// Private	             Yes                           No	                    No

//Public
//In TypeScript by default, all the members (properties and methods) of a class are public. So, there is no need to prefix members with this keyword. We can access this data member anywhere without any restriction.
export {};
class Student1 {
  public studCode: number;
  studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
let stud: Student1 = new Student1(101, 'Debasish Sahoo');
console.log(stud.studCode + ' ' + stud.studName);

//Private
//The private access modifier cannot be accessible outside of its containing class. It ensures that the class members are visible only to that class in which it is containing.

class Student2 {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}
let student: Student2 = new Student2(1, 'Debasish');
console.log(student.display());














//Protected
class Student3 {
  public studCode: number;
  protected studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
class Person extends Student3 {
  private department: string;

  constructor(code: number, name: string, department: string) {
    super(code, name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`;
  }
}
let joeRoot: Person = new Person(1, 'Debasish Sahoo', 'CS');
console.log(joeRoot.getElevatorPitch());




