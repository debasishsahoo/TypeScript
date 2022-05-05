//Generic Interface
interface IProcessor<T> 
{ 
    result:T;
    process(a: T, b: T) => T;
}
//Generic Interface as Type
interface KeyPair<T, U> {
    key: T;
    value: U;
}
//Generic Interface as Function Type
let kv1: KeyPair<number, string> = { key:1, value:"Steve" }; 
let kv2: KeyPair<number, number> = { key:1, value:12345 }; 


interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};

function processNumKeyPairs(key:number, value:number):void { 
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}

function processStringKeyPairs(key: number, value:string):void { 
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}
    
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345);  

let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Bill"); 

//---------------------------------------------------------------------------//

interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};

function processKeyPairs<T, U>(key:T, value:U):void { 
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}

let numKVProcessor1: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); 

let strKVProcessor2: KeyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); 

//------------------------------------------------------------------------------//

interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{ 
    process(key:number, val:string):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); 