// Accessor Decorators
// An Accessor Decorator is defined just before an accessor declaration. It is applied to the property descriptor for the accessor. It can be used to observe, modify, or replace an accessor's definitions.

//he expression for the accessor decorator function accepts three arguments. They are:

// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The Property Descriptor for the member.

class Employee {
  private _salary: number;
  private _name: string;

  @configurable(false)
  get salary() {
    return 'Rs. ${this._salary}';
  }
  set salary(salary: any) {
    this._salary = +salary;
  }

  @configurable(true)
  get name() {
    return 'Sir/Madam, ${this._name}';
  }
  set name(name: string) {
    this._name = name;
  }
}
