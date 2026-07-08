class Animal{
  makeSound(){
    console.log("Animal makes a sound");
  }
}

class cat extends Animal{
  makeSound(){
    console.log("Cat meows");
  }
}

const animal = new Animal();  
const cat1 = new cat();

//Method overriding - if a subclass provides a specific implementation of a method that is already defined in its superclass, 
// it is known as method overriding. The method in the subclass should have the same name, return type, and parameters as the method in the superclass.