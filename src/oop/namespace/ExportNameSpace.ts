namespace StringUtility {
  export function ToCapital(str: string): string {
    return str.toUpperCase();
  }

  export function SubString(
    str: string,
    from: number,
    length: number = 0
  ): string {
    return str.substr(from, length);
  }
}
