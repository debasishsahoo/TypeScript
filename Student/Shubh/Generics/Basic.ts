export { }

function identity<T>(x: T): T {
    return x;
}


let a = identity<string>('20')
let b = identity<number>(30)
let c = identity<boolean>(true)




