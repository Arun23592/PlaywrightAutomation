class student{
  name: string;
  age?: number; // Optional property

  constructor(name: string, age?: number){
    this.name = name;
    if(age !== undefined){
      this.age = age;
    }
  }


}

const s1 = new student("Alice", 20);  
const s2 = new student("Bob"); // age is optionals
console.log(s1.name); // Output: Alice
console.log(s1.age);  // Output: 20


// Optional properties in TypeScript allow you to define properties that may or may not be present in an object. 
// This is useful when you want to create flexible data structures where certain properties are not always required. 
// Optional properties are denoted by a question mark (?) after the property name in the class or interface definition.
//  When an optional property is not provided, it will be undefined.


//static properties - Static properties are properties that belong to the class itself rather than to instances of the class.
class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.count); // Output: 2
