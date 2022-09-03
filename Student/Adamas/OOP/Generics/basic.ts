export {};

function abc<B>(x: B): B {
  return x;
}

// function abc<number>(x: number):number {
//     return x;
//}

let output1 = abc<number>(5);

// function abc<string>(x: string):string {
//     return x;
//}
let output2 = abc<string>('abc');

// function abc<boolean>(x: boolean):boolean {
//     return x;
//}

let output3 = abc<boolean>(true);
