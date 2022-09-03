///<reference path='./StringUtil.ts'/>

export class Student {
  name: string;
  title: string;

  constructor(x: string, y: string) {
    this.name = StringUtility.ToCapital(x);
    this.title = StringUtility.ToSmall(y);
  }
}
