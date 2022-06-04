declare module 'url' {
  export interface Url {
    protocal?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlstr: string,
    parseQueryString?,
    slashDenotedHost?
  ): Url;
}

declare module 'path' {
  export function normalize(p: string): string;
  export function join(...paths: any): string;
  export var sep: string;
}
