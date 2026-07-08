function display(x: number): string;
function display(x: string): string;
function display(x: boolean): string;

function display(x: any): string {
    if (typeof x === 'number') {
        return `The number is ${x}`;
    } else if (typeof x === 'string') {
        return `The string is ${x}`;
    } else if (typeof x === 'boolean') {
        return `The boolean is ${x}`;
    } else {
        return 'Invalid input';
    }
}

console.log(display(100));
console.log(display("Hello, TypeScript!"));
console.log(display(true));


/***
 * Call back functions - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
 * Function overloading - Function overloading allows you to define multiple function signatures for a single function implementation. This is useful when you want to create a function that can handle different types of input parameters and return different types of output based on those parameters.
 */