//A Type Guard is a technique where Typescript gets type information of a variable after making a type check using a conditional such as an if statement (or switch statement), an else if or an else.
export {};
function formatAmount1(money: number | string) {
  let formattedAmount = 'Rs. ' + parseInt(money); //ERROR
  console.log(formattedAmount);
  return formattedAmount;
}

function formatAmount2(money: number | string) {
  let formattedAmount: string;

  if (typeof money == 'string') {
    formattedAmount = 'Rs. ' + parseInt(money);
  } else {
    formattedAmount = 'Rs. ' + money;
  }





  
  console.log(formattedAmount);
  return formattedAmount;
}

//InstanceOf Type Guard

class Person {
  name: string = '';
}

class Customer extends Person {
  code() {
    console.log('Customer Code');
  }
  buy() {
    console.log('Bought');
  }
}
class SalesPerson extends Person {
  code() {
    console.log('SalesPerson Code');
  }
  sell() {
    console.log('Sold');
  }
}

function getCode1(obj: Person) {
  obj.code(); //Property 'code' does not exist on type 'Person'
}

getCode(new Customer());

function getCode2(obj: Person) {
  if (obj instanceof Customer) {
    obj.code();
  } else if (obj instanceof SalesPerson) {
    obj.code();
  }
}

getCode2(new Customer()); //Customer Code
getCode2(new SalesPerson()); //SalesPerson Code

//In Operator

const car = {
  make: 'Honda',
  start() {},
};

if ('start' in car) {
  console.log('Exists'); //True
} else {
  console.log('Not Exists');
}

class Customer1 extends Person {
  code() {
    console.log('Customer Code');
  }
  buy() {
    console.log('Bought');
  }
}
class SalesPerson1 extends Person {
  code() {
    console.log('SalesPerson Code');
  }
  sell() {
    console.log('Sold');
  }
}

function getCode3(obj: Customer | SalesPerson) {
  if ('buy' in obj) {
    obj.buy();
  } else if ('sell' in obj) {
    obj.sell();
  }
}

getCode3(new Customer()); //Bought
getCode3(new SalesPerson()); //Sold

//Custom Type Guard / Type Predicates
function IsCustomer(obj: any): obj is Customer {
  //You can write your own logic here to determine if the obj is customer
  //return true if yes else false

  return (obj as Customer).buy != undefined;

  //if ("buy" in obj) return true;
  //return false;
}

function getCode(obj: Customer | SalesPerson) {
  if (IsCustomer(obj)) {
    obj.buy();
  } else {
    obj.sell();
  }
}

getCode(new Customer()); //Customer Code
getCode(new SalesPerson()); //SalesPerson Code
