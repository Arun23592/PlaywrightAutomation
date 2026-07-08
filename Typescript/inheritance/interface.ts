interface person{
    name: string;
    age: number;
    greet(): void;
}

const user: person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

user.greet(); // Output: Hello, my name is Alice and I am 30 years old.

//interface - in TypeScript, an interface is a way to define the structure of an object.
// It specifies the properties and methods that an object should have, without providing the implementation details. Interfaces are used to enforce a contract for objects, ensuring that they adhere to a specific shape.