export {};

//number
function identity1(x: string): string {
  return x;
}

function identity2(x: number): number {
  return x;
}

console.log(identity1('Soumyadeep'));
console.log(identity2(23));

//generics
function identity3<T>(x: T): T {
  return x;
}

console.log(identity3<string>('Soumyadeep'));
console.log(identity3<number>(23));
console.log('isMarried:' + identity3<boolean>(false));

function getitem<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}

let arrString = getitem<string>(['Hello', 'Signik', 'Tu mi kothi']);
arrString.push('Bathroome');
arrString.push('jabo');
console.log('arrNumber:', arrString);

let arrNumber = getitem<number>([40, 48, 75, 96]);
arrNumber.push(40);
arrNumber.push(50);
console.log('arrNumber:', arrNumber);

//Multi Type Verabiile
function Details1<T1, T2, T3>(id: T1, name: T2, age: T3): void {
  console.log(
    'Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age
  );
}

Details1<number, string, number>(101, 'deb', 45);

//Number:N
//String:S
//Boolean:B
//N1,N2
function Details2<T1, T2>(id: T1, name: T2, age: T1): void {
  console.log(
    'Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age
  );
}

Details2<number, string>(101, 'deb', 45);

//Genaric with non-Genaric Type

function Details3<T1>(id: T1, name: string, age: number): void {
  console.log(
    'Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age
  );
}

Details3<number>(101, 'deb', 45);
