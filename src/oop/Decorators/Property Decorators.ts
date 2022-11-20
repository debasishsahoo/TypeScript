// A property decorator is defined just before a property declaration. It is similar to the method decorators. The only difference between property decorators and method decorators is that they do not accept property descriptor as an argument and do not return anything.

// The expression for the property decorator function accepts two arguments. They are:

// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.

export { }
class Company {
  @ReadOnly
  name: string = 'google.com';
}
let comp = new Company();
comp.name = 'SSSIT.com'; // Here, we can't change company name.
console.log(comp.name); // 'google.com'
