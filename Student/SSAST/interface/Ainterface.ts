//Array which returns string
interface languageArray {
  [index: number]: string | number;
}
//use of the inferface
let language: languageArray;
language = ['REACT', 'ANGULAR', 'VUE', 23];

//Array which returns number
interface versionArray {
  [index: number]: number;
}
//use of the inferface
let version: versionArray;
version = [18, 13, 12];
