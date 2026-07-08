class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    bark(){
        console.log(`${this.name} is barking.`);
    }
}

const dog = new Dog("Buddy");
dog.eat(); // Output: Buddy is eating.
dog.bark(); // Output: Buddy is barking.
console.log(dog.name); // Output: Buddy
