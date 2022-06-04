export {};
interface OS {
  name: string;
  language: string;
}

let OSSYSTEM = (type: OS): void => {
  console.log(
    `Anroid:${type.name} has Language:${type.language} and Version:${type.version}`
  );
};

let OREO = { name: 'O', language: 'KOTLIN', version: 8 };

OSSYSTEM(OREO);
