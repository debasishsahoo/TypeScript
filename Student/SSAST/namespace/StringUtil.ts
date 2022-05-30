namespace StringUtility {
  export function ToX(str: string): string {
    return str.toUpperCase();
  }
  export function ToY(str: string): string {
    return str.toLowerCase();
  }
  export function ToZ(str: string, from: number, length: number): string {
    return str.substr(from, length);
  }
}
