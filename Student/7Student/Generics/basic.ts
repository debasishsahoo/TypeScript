export {};

function Details<T>(args: T): T {
  return args;
}

let out1 = Details<string>('Debasish');
let Out2 = Details<number>(23);
let Out3 = Details<boolean>(true);
