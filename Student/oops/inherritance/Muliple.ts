export {};

interface Parent1 {
  name: string;
}

interface Parent2 {
  age: number;
}

interface Child extends Parent1, Parent2 {
  school: string;
}

let obj: Child = {
  name: 'Debasish',
  age: 34,
  school: 'SSSM',
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.school);

class ABC implements Parent1, Parent2 {
  name = 'deb';
  age = 34;
}

class abc extends Child {}
