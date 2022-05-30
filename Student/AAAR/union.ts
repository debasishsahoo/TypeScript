export {};

let a: number | string;

function sayhi(arg: number | string[] | boolean): boolean | number {
  return 10;
}

//Literal Type
function engine(value: 'start' | 'stop' | boolean | number | 'on' | 'off') {

  if (value === 'start' || value === true || value === 1 || value === 'on') {
    console.log('Start Engine');
  }

  
  if (value === 'stop' || value === false || value === 0 || value === 'off') {
    console.log('Stop Engine');
  }
}
