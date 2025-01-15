// --------------------
// Hoisting and Scope Questions in JavaScript
// --------------------

// 1. Will this give a reference error? 
// Yes, if you try to access let or const variables before they're declared, 
// it would throw a ReferenceError due to the Temporal Dead Zone.

var a = 10;
(() => {
    console.log(a); // Will log 10 because arrow function will look at the global scope
})();

// --------------------

// 2. Function declaration hoisted. Function expression hoisted.
// This is correct; function declarations are hoisted with their definition, 
// while function expressions are hoisted without their value, resulting in an undefined behavior until the line of assignment.

function declaredFunction() {
    console.log("Function declaration hoisted.");
}

var expressionFunction = function() {
    console.log("Function expression hoisted.");
};

declaredFunction(); // Logs "Function declaration hoisted."
expressionFunction(); // Logs "Function expression hoisted."

// --------------------

// 3. Undefined? 
// undefined is printed when a variable is declared but not assigned a value. 
// This happens due to hoisting when using var—the declaration is hoisted but not the assignment.

console.log(a); // Logs undefined as a is hoisted but not yet assigned

// --------------------

// 4. 10 20 will be the output? 
// For a case where var is used in a loop, all setTimeout callbacks reference the same i, 
// resulting in printing 3 three times, since i is shared across the iterations.

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Logs 3, 3, 3 due to closure behavior in JavaScript
    }, 1000);
}

// --------------------

// 5. 4 - 4 times 0 to 3, this will be the output, right? 
// Using let inside the loop would print 0, 1, and 2 correctly, 
// whereas var would cause the output to be 3, 3, 3.

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Logs 0, 1, 2 due to let's block scope behavior
    }, 1000);
}

// --------------------

// 6. Why 3 is printed? 
// The reason 3 is printed three times is due to hoisting with var, 
// which makes the variable i shared across all loop iterations. 
// By the time the setTimeout callbacks execute, i has already reached 3.

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Logs 3, 3, 3
    }, 1000);
}

// --------------------

// 7. Is it undefined? 
// undefined is printed when accessing a variable that has been declared but not assigned a value.
// The hoisting behavior with var means a is declared but not initialized.

console.log(a); // undefined, as a is hoisted but not initialized yet

// --------------------

// 8. What will be the output? 
// If you run the code with console.log(a) in an arrow function and a is declared globally, 
// the output will be 10 as the arrow function references the nearest value of a, which is the global scope.

var a = 10;
(() => {
    console.log(a); // 10
})();

// --------------------

// 9. Will it print 20? 
// When you use an IIFE (Immediately Invoked Function Expression) and shadow the global a inside it, 
// the output of the arrow function inside it will print 20, as it captures the nearest a variable in its scope.

(function () {
    var a = 20;
    (() => {
        console.log(a); // 20
    })();
})();

// --------------------

// 10. What will be the output of the following code? 
// The .call() method allows you to invoke a function with a specific context, in this case, obj2.
// It will log 'Hello, Bob' since 'this' refers to obj2 inside the greet function.

const obj1 = {  
  name: 'Alice',  
  greet() {  
    console.log(`Hello, ${this.name}`);  
  }  
};  
const obj2 = { name: 'Bob' };  
obj1.greet.call(obj2);  // Logs "Hello, Bob"

// --------------------

// 11. What will be the output of the following code? 
// The .bind() method creates a new function with a specific context. 
// Here, getValue is bound to obj, and it will log the value of obj.value.

const obj = {  
  value: 42  
};  
const getValue = function () {  
  return this.value;  
}.bind(obj);  
console.log(getValue());  // Logs 42

// --------------------

// 12. What will be the output of the following code? 
// The Object.create() method creates a new object with the specified prototype object. 
// Here, obj's prototype is proto, and it will inherit the greet method.

const proto = { greet() { console.log('Hello!'); } };  
const obj = Object.create(proto);  
obj.greet();  // Logs "Hello!"
console.log(Object.getPrototypeOf(obj) === proto);  // Logs true

// 13 - Guess the output
// Object.create will store the prop into prototype, 
// Hence, nothing can be seen and deleted into the object

const obj = Object. create({
});
height: 30,
console.log(obj.height); // 30
delete obj.height;
console.log(obj.height); // 30



const radha = {
name: "radha", sayName: function () { console.log(this.name);
},
const aman = {
name: "Aman Bhoria", sayName: function () { console.log(this.name);
},
const newFun = aman.SayName.bind(radha); // radha context is used in aman
setTimeout(newFun, 3 * 1000); // radha
setTimeout(() => piyush.sayName(), 3 * 1000); // radha

don't add into the last code
make it into another with comments that i've discussed
