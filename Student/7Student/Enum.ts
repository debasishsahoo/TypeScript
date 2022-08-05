export {};

enum Weekdays {
  sunday = 1,
  monday = 2,
  tuesday = 3,
  wednesday = 4,
  thursday = 5,
  friday = 6,
  saturday = 7,
}

console.log(Weekdays.sunday);
console.log(Weekdays['sunday']);
console.log(Weekdays['1']);

enum Btech {
  CE = 'CIVIL',
  ME = 'MECHACAL',
  EC = 'ELECTRAL',
  ECE = 'ELETRONICS',
  CS = 'COMPUTER SCIENCE',
}
console.log(Btech.CE);

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
function IsItSummer(x: Month) {
  let isSummer: boolean;
  switch (x) {
    case Month.Mar:
    case Month.Apr:
    case Month.May:
    case Month.Jun:
    case Month.Jul:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(IsItSummer('feb'));

enum Vehical {
  Car = 500000, //0
  Plane = 15000000000, //1
  Train = 78454555, //2
}

function getVehical(name: string): Vehical | undefined {
  if (name == 'Audi') {
    return Vehical.Car;
  } else if (name == 'Bmw') {
    return Vehical.Car;
  } else if (name == 'RAJDHANI') {
    return Vehical.Train;
  } else if (name == 'AirIndia') {
    return Vehical.Plane;
  } else {
    return undefined;
  }
}

console.log(getVehical('Audi'));
console.log(getVehical('RAJDHANI'));
console.log(getVehical('AirIndia'));

enum VehicalType {
  Car = 1,
  Plane = 5000 * VehicalType.Car + 250,
  Train = 5 * VehicalType.Car,
  Jet = RandaomValue(10, 3600),
}

console.log(VehicalType.Car);
console.log(VehicalType.Train);
console.log(VehicalType.Plane);
console.log(VehicalType.Jet);
function RandaomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

enum Vehicaltype {
  Car = 'C',
  Plane = 'P',
  Train = 'T',
  Jet = 'J',
}

function TEST(arg: Vehicaltype.Car | Vehicaltype.Jet): VehcileType.Plane {
  return VehcileType['Plane'];
}

console.log(TEST(Vehicaltype.Car));
