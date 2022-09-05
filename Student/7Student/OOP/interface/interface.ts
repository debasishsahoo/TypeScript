export {};

interface Iperson {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  getDetails(): void;
  getAge(): number;
}

//interface implemention on Class
class Customer implements Iperson {
  firstname = 'Debasish';
  lastname = 'Sahoo';
  age = 34;
  gender = 'M';
  getDetails() {
    console.log('ok');
  }
  getAge(): number {
    return this.age;
  }
}

//interface implemention on variable
let Student: Iperson = {
  firstname: 'Debasish',
  lastname: 'Sahoo',
  age: 34,
  gender: 'M',

  getDetails() {
    console.log('ok');
  },
  getAge(): number {
    return this.age;
  },
};

//interface implemention on function
interface OS {
  name: string;
  version: number;
  language: string;
}

function OperationgSystem(args: OS): void {
  console.log(
    `OS NAME:${args.name} ,OS VERSION:${args.version} and OS LANGUAGE:${args.language}`
  );
}

let WIN10: OS = {
  name: 'WINDOWS 10',
  version: 10,
  language: 'VBSCRIPT',
};

let WIN11: OS = {
  name: 'WINDOWS 11',
  version: 11,
  language: 'C#',
};

let PIE: OS = {
  name: 'PIE',
  version: 12,
  language: 'JAVA',
};

OperationgSystem(WIN10);
OperationgSystem(WIN11);
OperationgSystem(PIE);
