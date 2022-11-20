export { };

interface IPerson {
    name: string;
    email: string;
    sayHi: () => string;
}

let Customer: IPerson = {
    sayHi: (): string => {
        return 'HI'
    },
    name: 'Ajay',
    email: 'a@a.com',
}


console.log(Customer.sayHi())
console.log(Customer.name)
console.log(Customer.email)