//import { Emp, age, complayname } from './export';

import * as Ex from './export';


let EmpObj = new Ex.Emp(4, 'N.Murity');
EmpObj.displayEmp();
console.log(Ex.age);
console.log(Ex.complayname);





import { Emp as Associate } from './export';



let obj = new Associate(4, 'N.Murity');
obj.displayEmp();
