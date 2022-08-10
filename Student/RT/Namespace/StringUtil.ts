namespace StringUtility {
  function ToCaptial(str: string) {
    return str.toUpperCase();
  }
  function SubString(str: string, from: number, length: number = 0) {
    return str.substr(from, length);
  }
}
