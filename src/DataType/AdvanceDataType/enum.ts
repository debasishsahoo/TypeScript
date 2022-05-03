//A Typescript enum allows us to define the collection of related values to be used by name. They make the code easier to read. You may use them when you want to limit the values that a variable can take to a small set of possible values.

//Numeric Enum
//String Enum
//Heterogeneous Enum

//String Enum
enum BTECH {
  CIVIL = 'CIVIL ENGG',
  MACH = 'MACHNACAL ENGG',
  EC = 'ELECTRAL ENGG',
  ECE = 'ELECTRONIC ENGG',
  CS = 'COMPUTER SCIENCE',
}

enum Student {
  'SAHNIK',
  'SOUMYDEEP',
  'SOURAV',
}

enum SALARY {
  SAHNIK = 14000,
  SOUMYDEEP = 24000,
  SOURAV = 34000,
}

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function IsItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jan:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(IsItSummer(Month.Feb));

enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

console.log(Weekdays.Monday); //1
console.log(Weekdays['Monday']); //1
console.log(Weekdays['1']); //Monday

let holiday = Weekdays.Sunday;
console.log(holiday); //7

console.log(typeof Weekdays); //object
console.log(typeof holiday);

enum Week {
  Monday, //Initialized with zero
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Weekdays.Monday); //0
console.log(Weekdays['Monday']); //0
console.log(Weekdays['1']); //Tuesday

//Numeric enums
enum VehcileType {
  Car, //0
  Plane, //1
  Train, //2
}

console.log(VehcileType.Plane); //1
console.log(VehcileType['Plane']); //1
console.log(VehcileType[1]); //Plane

//Get the name from the Enum Member.
console.log(VehcileType[VehcileType.Plane]); //Plane

enum VehcileType {
  Car = 2,
  Plane,
  Train,
}

console.log(VehcileType);

function getVehicle(name: string): VehcileType | undefined {
  if (name === 'ferrari') {
    return VehcileType.Car;
  } else {
    return undefined;
  }
}

console.log(getVehicle('ferrari')); //output   1

enum VehcileType {
  Car = 1,
  Plane,
  Train = 5 + VehcileType.Plane,
}

console.log(VehcileType);

enum VehcileType {
  Car = 1,
  Plane,
  Train = getRandomNumberBetween(10, 20),
}

console.log(VehcileType);

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//String Enums
enum VehcileType {
  Car = 'Car',
  Plane = 'Plane',
  Train = 'Train',
}

console.log(VehcileType.Car); //Car
console.log(VehcileType['Car']); //Car

enum VehcileType {
  Car = 'C',
  Plane = 'P',
  Train = 'T',
}

let vehicle = VehcileType.Plane;

printName(vehicle);

function printName(val: VehcileType) {
  switch (val) {
    case VehcileType.Car:
      console.log('It is a Car');
      break;
    case VehcileType.Plane:
      console.log('It is a Plane.');
      break;
    case VehcileType.Train:
      console.log('It is a Train.');
      break;
    default:
      console.log('No such vehicle');
      break;
  }
}
const value: VehcileType = VehcileType.Car;

if (value === VehcileType.Car || value === VehcileType.Train) {
  console.log('Please choose a plane');
  console.log(value);
}
enum VehcileType {
  Car = 'C',
  Plane = 1,
  Train,
}

console.log(VehcileType);

enum VehcileType {
  Car = 'C',
  Plane, //Error Enum member must have initializer.
  Train,
}
//Reverse Mapping of Enum

enum VehcileType {
  Car,
  Plane,
  Train,
}
console.log(VehcileType.Car); //0
console.log(VehcileType['Car']); //0
console.log(VehcileType[0]);

enum VehcileType {
  Car = 'C',
  Plane = 'P',
  Train = 10,
}

console.log(VehcileType.Plane); //P
console.log(VehcileType['Plane']); //P
console.log(VehcileType['P']); //undefined  //ERROR

console.log(VehcileType.Train); //10
console.log(VehcileType['Train']); //10
console.log(VehcileType[10]); //Train    //Works

const enum VehcileType {
  Car,
  Plane,
  Train,
}

console.log(VehcileType.Car); //0
console.log(VehcileType.Plane); //1
console.log(VehcileType['Car']); //0
console.log(VehcileType['Plane']); //1
console.log(VehcileType[0]); //ERROR
console.log(VehcileType[1]); //ERROR

//Type Checking
enum VehcileType {
  Car,
  Plane,
  Train,
}

function someFn(val: VehcileType) {
  console.log(val);
}

someFn(VehcileType.Car); //OK

someFn(100); //NO ERROR

someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error

enum VehcileType {
  Car = 'C',
  Plane = 'P',
  Train = 'T',
}

function someFn(val: VehcileType) {
  console.log(val);
}

someFn(VehcileType.Car); //OK

someFn(100); //Error
someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error

enum VehcileType {
  Car = 'C',
  Plane = 'P',
  Train = 10,
}

function someFn(val: VehcileType) {
  console.log(val);
}

someFn(VehcileType.Car); //OK

someFn(100); //NO ERROR

someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error
