//SOLUTION 1

function greet(name = "Friend", ...additionalGreetings) {
    console.log(`Hello, ${name}!`);
    additionalGreetings.forEach(greeting => console.log(greeting));
}

// Example
greet("Aisha", "Hope you're doing well!", "Welcome to the FiTech team!");



//SOLUTION 2

function getFullName({ firstName, lastName }) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

// Example
const personnel = { firstName: "Aisha", lastName: "Kabir", age: 25 };
getFullName(personnel);



//SOLUTION 3

const user = { firstName: "Khadija", lastName: "Zubair", age: 25 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}



//SOLUTION 4

import { add, subtract } from './math.js';

console.log(add(10, 5));        
console.log(subtract(10, 5));   

//SOLUTION 5

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Example
const rect = new Rectangle(10, 5);
console.log(rect.getArea());  


//SOLUTION 6

const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

console.log(a);       
console.log(b);       
console.log(rest);    


//SOLUTION 7

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Example
const person = new Person("Abubakar", 23);
person.introduce();  



//SOLUTION 8

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);  



//SOLUTION 9

function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Example 
console.log(sumNumbers(1, 2, 3, 4));  



//SOLUTION 10

function swap(a, b) {
    [a, b] = [b, a];
    return { a, b };
}

// Example usage
console.log(swap(5, 10));  

