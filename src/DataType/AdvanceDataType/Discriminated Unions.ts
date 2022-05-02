export {};
interface Employee {
  type: 'Employee';
  employeecode: number;
  name: string;
}

interface Visitor {
  type: 'Visitor';
  visitorcode: number;
  name: string;
}

interface Contractor {
  type: 'Contractor';
  contractorcode: number;
  name: string;
}

type Person = Employee | Visitor | Contractor;

function AllowRestrictedArea(person: Person): boolean {
  console.log(person.employeecode); //Property 'employeecode' does not exist on type 'Person'.
  if (person.type == 'Employee') {
    console.log('Allowed to Employee ' + person.employeecode);
    return true;
  } else if (person.type == 'Visitor') {
    console.log('Not Allowed to Visitor ' + person.visitorcode);
    return false;
  } else {
    console.log('Allowed to Contractors ' + person.contractorcode);
    return true;
  }
}

 

 
type Person1 = Employee | Visitor | Contractor
 
function AllowRestrictedArea(person: Person1): boolean {
    console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
}
 
 
function AllowRestrictedArea(person:Person1): boolean {
 
 
    //console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
 
    if (person.type == "Employee") {
        console.log("Allowed to Employee " + person.employeecode)
        return true
    }
    else if (person.type == "Visitor") {
        console.log("Not Allowed to Visitor " + person.visitorcode)
        return false
    }
    else {
        console.log("Allowed to Contractors "+person.contractorcode)
        return true
    }
}
 
 
let employee:Employee = { type:"Employee", employeecode:1, name:"Rahul"}
AllowRestrictedArea(employee)
 
let vistor:Visitor = { type:"Visitor", visitorcode:1, name:"Sachin"}
AllowRestrictedArea(vistor)
 
let contractor:Contractor = { type:"Contractor", contractorcode:1, name:"Saurav"}
AllowRestrictedArea(contractor)
 

