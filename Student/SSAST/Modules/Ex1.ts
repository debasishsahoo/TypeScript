export class abc1 {
  constructor(public x: number, public y: number) {}
  add(a: abc1) {
    return new abc1(this.x + a.x + this.y + a.y);
  }
}
