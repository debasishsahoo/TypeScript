//Class Decorators
//A class decorator is defined just before the class declaration, and it tells about the class behaviors. A class decorator is applied to the constructor of the class. A class decorator can be used to observe, modify, or replace a class definition. If the class decorator returns a value, it will replace the class declaration with the given constructor function.
@sealed
class Person {
  msg: string;
  constructor(message: string) {
    this.msg = message;
  }
  show() {
    return 'Hello, ' + this.msg;
  }
}
