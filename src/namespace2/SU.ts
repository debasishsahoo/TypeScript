namespace SU {
  function ToCapital(str: string) {
    return str.toUpperCase();
  }
  function ToSmall(str: string) {
    return str.toLowerCase();
  }
  function SubString(str: string, from: number, length: number) {
    return str.substr(from, length);
  }
  function CharAT(str: string, pos: number) {
    return str.charAt(pos);
  }

  function Concat(str1: string, str2: string) {
    return str1.concat(str2);
  }
}
