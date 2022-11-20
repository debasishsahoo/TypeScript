export { }
function numericMemoizer(target: any, propertyKey: string, descriptor: PropertyDecorator) {
    let fn: Function = descriptor.value;
    let cache = {}
    descriptor.value = function (...args: number[]) {

        let key = args.join("-")
        if (!cache[key]) {
            cache[key] = fn.apply(target, args)
            console.log("Catch key:", cache[key])
        } else {
            console.log("Returning cahed version of the result......")
        }
        return cache[key]
    }
    return descriptor
}

class MyMath {
    @numericMemoizer
    add(x: number, y: number): number {
        return x + y
    }
}

let abc = new MyMath()

console.log(abc.add(10, 20))
console.log(abc.add(10, 20))
// console.log(abc.add(10, 20))
// console.log(abc.add(10, 20))
// console.log(abc.add(10, 20))