import * as mix from './maxin'
class Moulder {
  moulding = true;
  done = false;
  mould() {
    this.moulding = false;
    this.done = true;
  }
}
class Stacker {
  stacking = true;
  done = false;
  stack() {
    this.stacking = false;
    this.done = true;
  }
}

class Block {
  name = '';
  length = 0;
  breadth = 0;
  height = 0;
  constructor(name: string, length: number, breadth: number, height: number) {
    this.name = name;
    this.length = length;
    this.breadth = breadth;
    this.height = height;
  }
}

interface Block extends Moulder, Stacker {}
