//An enum is a spcial "Class" that represent a group of 'CONSTANTS'(UNCHANGEBLE VARIABLE)
// LIKE final variables.

//Enumerated type
export {};
enum students {
  azim = 1,
  anjani,
  reshmi,
  dinda,
}

enum BasicSalary {
  CEO = 100000,
  CTO = 95000,
  MANAGER = 85000,
  SUPERVISOR = 60000,
  TEAMLEAD = 45000,
  PROJECTLEAD = 30000,
  PROGRAMMER = 15000,
}

let Emp1: {
  name: string;
  email: string;
  sal: BasicSalary;
};

console.log(BasicSalary.CEO);


enum Weekdays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
  }
  
  console.log(Weekdays.Monday); 
  console.log(Weekdays['Monday']);
  console.log(Weekdays['1']);