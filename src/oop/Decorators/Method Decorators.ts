//A Method Decorator is defined just before a method declaration. It is applied to a property descriptor for the method. It can be used to observe, modify, or replace a method definition. We cannot use method decorator in a declaration file.

// The expression for the method decorator function accepts three arguments. They are:

// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The Property Descriptor for the member.

class Item {
  itemArr: Array;
  constructor() {
    this.itemArr = [];
  }
  @log
  Add(item: string): void {
    this.itemArr.push(item);
  }
  GetAll(): Array {
    return this.itemArr;
  }
}
