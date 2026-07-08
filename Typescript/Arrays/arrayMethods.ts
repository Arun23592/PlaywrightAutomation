//1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
let numbers: number[] = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

//2. pop() - Removes the last element from an array and returns that element.
let lastElement: number | undefined = numbers.pop();
console.log(lastElement); // Output: 4
console.log(numbers); // Output: [1, 2, 3]

//3. shift() - Removes the first element from an array and returns that element.
let firstElement: number | undefined = numbers.shift();
console.log(firstElement); // Output: 1
console.log(numbers); // Output: [2, 3]

//4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3]

//5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
numbers.splice(1, 1, 5); // Removes 1 element at index 1 and adds 5
console.log(numbers); // Output: [0, 5, 3]

//6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedNumbers: number[] = numbers.slice(0, 2);
console.log(slicedNumbers); // Output: [0, 5]

//7. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index: number = numbers.indexOf(5);
console.log(index); // Output: 1

//8. forEach() - Executes a provided function once for each array element.
let num = 2;
numbers.forEach((num) => {
  console.log(num);
});
// Output: 0
//         5
//         3

//9. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let squaredNumbers: number[] = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [0, 25, 9]

//10. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [0]

//11. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
let sum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 8

//12. find() - Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
let foundNumber: number | undefined = numbers.find((num) => num > 2);
console.log(foundNumber); // Output: 5

//13. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
let foundIndex: number = numbers.findIndex((num) => num > 2);
console.log(foundIndex); // Output: 1

//14. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesNumber: boolean = numbers.includes(5);
console.log(includesNumber); // Output: true

//15. join() - Joins all elements of an array into a string and returns this string.
let joinedNumbers: string = numbers.join(", ");
console.log(joinedNumbers); // Output: "0, 5, 3"

//16. reverse() - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
numbers.reverse();
console.log(numbers); // Output: [3, 5, 0]

//17. sort() - Sorts the elements of an array in place and returns the sorted array.
numbers.sort((a, b) => a - b); // Sorts in ascending order
console.log(numbers); // Output: [0, 3, 5]

//18. concat() - Merges two or more arrays and returns a new array.
let moreNumbers: number[] = [6, 7, 8];
let combinedNumbers: number[] = numbers.concat(moreNumbers);
console.log(combinedNumbers); // Output: [0, 3, 5, 6, 7, 8]

//19. length - The length property of an array returns the number of elements in that array.
console.log(numbers.length); // Output: 3

//20. toString() - Returns a string representing the specified array and its elements.
let numbersString: string = numbers.toString();
console.log(numbersString); // Output: "0,3,5"

//21. toLocaleString() - Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").
let numbersLocaleString: string = numbers.toLocaleString();
console.log(numbersLocaleString); // Output: "0,3,5"

//22. valueOf() - Returns the primitive value of the specified object.
let numbersValue: number[] = numbers.valueOf();
console.log(numbersValue); // Output: [0, 3, 5]

//23. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedNumbers: number[][] = [[1, 2], [3, 4], [5]];
let flatNumbers: number[] = nestedNumbers.flat();
console.log(flatNumbers); // Output: [1, 2, 3, 4, 5]

//24. flatMap() - Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
let flatMappedNumbers: number[] = nestedNumbers.flatMap((arr) => arr.map((num) => num * 2));
console.log(flatMappedNumbers); // Output: [2, 4, 6, 8, 10]

//25. fill() - Fills all the elements of an array from a start index to an end index with a static value.
let filledNumbers: number[] = new Array(5).fill(0);
console.log(filledNumbers); // Output: [0, 0, 0, 0, 0]

//26. from() - Creates a new, shallow-copied Array instance from an array-like or iterable object.
let arrayLike: string = "Hello";
let fromArray: string[] = Array.from(arrayLike);
console.log(fromArray); // Output: ["H", "e", "l", "l", "o"]

//27. of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let ofArray: number[] = Array.of(1, 2, 3, 4, 5);
console.log(ofArray); // Output: [1, 2, 3, 4, 5]

//28. isArray() - Determines whether the passed value is an Array.
let isArray: boolean = Array.isArray(numbers);
console.log(isArray); // Output: true

//29. copyWithin() - Copies a sequence of array elements within the array.
let copyWithinArray: number[] = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3); // Copies elements from index 3 to index 0
console.log(copyWithinArray); // Output: [4, 5, 3, 4, 5]

//30. entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entriesArray: number[] = [10, 20, 30];
let entriesIterator: IterableIterator<[number, number]> = entriesArray.entries();
for (let entry of entriesIterator) {
  console.log(entry);
}
// Output: [0, 10]
//         [1, 20]
//         [2, 30]

