class Greet {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `Hello ${this.name}`;
    }

    sayGoodbye(){
        return`Goodbye ${this.name}`;
    }
}

class BetterGreeting extends Greet {
    constructor(name, lname){
        super(name);
        this.lastName = lname;
    }
    alertHello(){
        alert(`What up, ${this.name} ${this.lastName}`);
    }
    sayHello(){
        return super.sayHello() + ` ${this.lastName}`;
    }
}

const jonathan = new Greet('Jonathan');
const dave = new Greet('Dave');

const bob = new BetterGreeting('Bob', 'Peters');

console.log(jonathan.sayHello());
console.log(jonathan.sayGoodbye());

console.log(dave.sayHello());
console.log(dave.sayGoodbye());

bob.alertHello();
console.log(bob.sayHello());