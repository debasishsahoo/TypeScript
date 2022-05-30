export class abc2 {
    constructor(public x: number, public y: number, public z:number) {}
    add(a: abc2) {
      return new abc2(this.x + a.x + this.y + a.y this.z+a.z);
    }
  }
  