export { }

class KeyValuePair<T, U>{
    private key: T;
    private Val: U;

    constructor(k: T, v: U) {
        this.key = k;
        this.Val = v;
    }
    display(): void {
        console.log(`Key=>${this.key},val=${this.Val}`)

    }
}

let KVP1 = new KeyValuePair<number, string>(1, 'SK');
KVP1.display();

let KVP2 = new KeyValuePair<string, string>('DS', 'SK');
KVP2.display();



interface IKVPROCESSER<T, U> {
    process(key: T, val: U): void
}


class KVPROCESSER<T, U> implements IKVPROCESSER<T, U> {
    process(key: T, val: U): void {
        console.log(`Key=>${key},val=${val}`)
    }
}