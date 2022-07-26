function abc(msg: string, name: string) {
  return `${msg} ${name}`;
}

console.log(abc('Hello', 'Debasish', 'tanu', 'rumana'));

//Array Diststuring
function def(msg: string, ...name: string[]) {
  return `${msg} ${name}`;
}

console.log(def('Hello', 'Debasish', 'tanu', 'ruman'));

function ghi(...name: string[], msg: string) {
  return `${msg} ${name}`;
}

console.log(ghi('Hello', 'Debasish', 'tanu', 'ruman'));
