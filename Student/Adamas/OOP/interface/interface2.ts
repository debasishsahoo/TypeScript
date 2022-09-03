export {};

interface OS {
  name: string;
  language: string;
}

let OperatingSystem = (DataType: OS): void => {
  console.log(`Android ${DataType.name} has ${DataType.language}`);
};

let OREO = { name: 'O', language: 'KOTLIN' };

OperatingSystem({
  name: 'MARSHMELLO',
  language: 'FLUTTER',
});

OperatingSystem(OREO);
