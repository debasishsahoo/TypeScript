// Parameter Decorators
// A parameter decorator is defined just before a parameter declaration. It is applied to the function for a class constructor or method declaration. It cannot be used in a declaration file or in any other ambient context (such as in a declared class).

// The expression for the parameter decorator function accepts three arguments. They are:

// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The index of the parameter in the function?s arguments list.

class Person {
  msg: string;
  constructor(message: string) {
    this.msg = message;
  }
  @validate
  show(@required name: string) {
    return 'Hello ' + name + ', ' + this.msg;
  }
}
