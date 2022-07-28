//Private ->Same Class Access only
//Protected
//Public ->Any one can Access

// Access Modifier|	Accessible within class|	Accessible in subclass|	Accessible externally via class instance
// Public	               Yes	                         Yes                  	Yes
// Protected	           Yes	                         Yes	                No
// Private	               Yes                           No	                    No

//Public
export {};
class Student {
  public studCode: number;
  studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
let stud: Student = new Student(101, 'Tanu');
console.log(`${stud.studCode} and ${stud.studName} `);

//private

class Teacher {
  public TeCode: number;
  private TeName: string;

  constructor(code: number, name: string) {
    this.TeCode = code;
    this.TeName = name;
  }

  public Display() {
    return `Code is ${this.TeCode} and ${this.TeName}`;
  }
}

let te: Teacher = new Teacher(102, 'Rumana');
console.log(te.Display());

class Staff {
  public TeCode: number;
  protected TeName: string;

  constructor(code: number, name: string) {
    this.TeCode = code;
    this.TeName = name;
  }
}

class Accountent extends Staff {
  private dept: string;

  constructor(code: number, name: string, department: string) {
    super(code, name);
    this.dept = department;
  }

  public getDetails() {
    return `code:${this.TeCode} name:${this.TeName} dept:${this.dept}`;
  }
}

let acc: Accountent = new Accountent(105, 'debasish', 'Engg');
console.log(acc.getDetails())
