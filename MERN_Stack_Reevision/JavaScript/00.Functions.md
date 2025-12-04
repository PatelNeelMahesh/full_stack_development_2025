# JavaScript Functions

## 1. Ways to Write Functions

In JavaScript, functions can be written in several ways:

### Function Declaration
```javascript
function greet() {
  console.log("Hello!");
}
```

### Function Expression
```javascript
const greet = function() {
  console.log("Hello!");
};
```

### Arrow Function Expression
```javascript
const greet = () => {
  console.log("Hello!");
};
```

### Named Function Expression
```javascript
const greet = function greetFunction() {
  console.log("Hello!");
};
```

### Immediately Invoked Function Expression (IIFE)
```javascript
(function() {
  console.log("Hello!");
})();
```

---

## 2. Function Parameters and Arguments

### Parameters vs Arguments
- **Parameters** are the placeholders (variables) listed in the function definition. They act as local variables within the function.
- **Arguments** are the actual values passed to the function when it is called. These values are assigned to the parameters.

Example:
```javascript
function add(a, b) { // a and b are parameters
  return a + b;
}

add(2, 3); // 2 and 3 are arguments
```

### Flexible Argument Handling
JavaScript functions can be called with any number of arguments, regardless of the number of parameters defined. This is due to JavaScript's dynamic nature.

- If fewer arguments are passed than parameters, the extra parameters are `undefined`.
- If more arguments are passed, the extra ones are ignored unless accessed via the `arguments` object.

Example:
```javascript
function sum(a, b, c) {
  console.log(a, b, c); // 1, 2, undefined
}

sum(1, 2); // Only two arguments passed
```
### arguments Object (Old Way, Non-Arrow Functions)

Every normal function (not an arrow function) has access to an arguments object that holds all arguments passed to it.

```javascript
function showArgs(a, b) {
  console.log(a, b);         // Prints first two arguments
  console.log(arguments);    // Prints all arguments as an array-like object
}

showArgs(1, 2, 3, 4);
// Output:
// 1 2
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

```
How to Access Remaining value passed as an arguments.
```javascript
function showArgs(a, b) {
  console.log("3rd argument:", arguments[2]);
  console.log("4th argument:", arguments[3]);
}

showArgs(1, 2, 3, 4);
```

✅ Key points:

- arguments is array-like (has length, can be indexed), but not a real array.

- Works only in regular functions, not arrow functions.

- Often used for variadic functions (functions that take any number of arguments).

### Default Parameters
Default parameters allow you to set default values for parameters if no argument is provided or if `undefined` is passed.

```javascript
function greet(name = "Guest", age = 18) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet(); // Hello, Guest! You are 18 years old.
greet("Alice"); // Hello, Alice! You are 18 years old.
greet("Bob", 25); // Hello, Bob! You are 25 years old.
greet("Charlie", undefined); // Hello, Charlie! You are 18 years old.
```

---

---

## 4. Scope of Function

- **Global Scope:** Variables declared outside any function are global.
- **Function Scope:** Variables declared inside a function are local to that function.
- **Block Scope:** Variables declared with `let` or `const` inside blocks `{}` are block-scoped.

Example:
```javascript
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  if(true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // accessible here
  }
  // console.log(blockVar); // Error: blockVar is not defined
  console.log(localVar); // accessible here
}

testScope();
console.log(globalVar); // accessible here
// console.log(localVar); // Error: localVar is not defined
```

---

## 5. Hoisting in Detail with Execution Context and Example

### What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) during the compilation phase.

- Variable declarations (`var`) and function declarations are hoisted.
- Variables declared with `let` and `const` are hoisted but not initialized (Temporal Dead Zone).
- Function expressions and arrow functions are not hoisted.
- Native JS behavior: let / const before declaration → ReferenceError.
- If you see undefined, it’s because:
- Your code is transpiled to var by Babel/TypeScript.
- Or you are using a REPL/IDE that pre-processes/hoists variables.

### Execution Context

- **Creation Phase:** Memory is allocated for variables and functions.
- **Execution Phase:** Code is executed line by line.

# Lexical Scope Example

Lexical scope means variables are accessible based on **where they are written** in the code, not where they are called from.

Here’s an example:


### Example of Hoisting with Variable Declaration
```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

### Example of Temporal Dead Zone with `let` and `const`
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

### Example of Function Expression Hoisting
```javascript
sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};
```

![Lexical Scope Diagram](./GEC%20Image.png)

---

## Interview Explanations

### 1. Ways to Write Functions
Functions in JavaScript can be created in different styles:
- **Function Declaration**: A standard way to define a function using the `function` keyword, which can be called before it is defined due to hoisting.
- **Function Expression**: Assigning a function to a variable, which isn't hoisted and must be defined before use.
- **Arrow Function**: A shorter syntax using `=>`, great for simple functions and doesn't have its own `this`.
- **Named Function Expression**: A function expression with a name, useful for debugging.
- **IIFE (Immediately Invoked Function Expression)**: A function that runs right after it's defined, often used to create a private scope.

### 2. Function Parameters and Arguments
- **Parameters**: The names listed in the function definition, like placeholders for values.
- **Arguments**: The actual values you pass when calling the function.
JavaScript is flexible: you can pass more or fewer arguments than parameters. Use `arguments` object (in regular functions) for extra args, or default parameters to set fallbacks.

### 3. Scope of Function
Scope determines where variables are accessible:
- **Global Scope**: Variables available everywhere in the code.
- **Function Scope**: Variables inside a function, only accessible there.
- **Block Scope**: Variables with `let` or `const` inside `{}` blocks, limited to that block.

### 4. What is Hoisting?
- Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top. 
- This means that irrespective of where the variables and functions are declared, they are moved on top of the scope.
- Whenever javascript code is executed, a GEC (global execution context) is created and there is two phase memory and execution phase . 
- In the memory phase all the variables are declared undefined and all functions will be stored as an entire function; this phenomenon is known as hoisting.
Example : 
``` javascript
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
Note - Variable initializations are not hoisted, only variable declarations are hoisted:
Example:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
```

### 5. Difference between var, let and const.

	
#### Var : 
- Function Scope: Variables declared with var are function-scoped. This means if we declare a variable inside a function, it is only accessible within that function, but if it’s declared outside a function, it’s available  globally.
- Hoisting: when we use var, javascript hoists the variable to the top of its scope. This means we can use a variable before it’s declared, but the value will be undefined until the line where the variable is initialized.
- Re -declaration and Re-initialization possible.

#### Let :
- let is Block scoped.
- Re-declaration is not possible, but Re-initialization is possible.
- let variables are also hoisted, but not accessible before declaration (TDZ).
- Both var and let initialised as undefined in memory phase.
- But var is stored in global scope
- let is stored in script (memory object).
Temporal Dead Zone (TDZ) : Time since when the let variable are hoisted until it is initialized with some value.


#### const :
- Block scope
- Const should be always initialised with some value 
- const variables are also hoisted but they are not initialised until the                             code reaches the line where let is declared.
- Re-declaration is not possible


### 6. Is javascript a statically typed or a dynamically typed language?

- JavaScript is a dynamically typed language. 
- In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.
- A variable's type can change at runtime.

### 7. What are the different data types present in javascript?

JavaScript has two categories of data types:

#### 1. Primitive Types  
Holds a single value:  
- **String**  
- **Number**  
- **BigInt**  
- **Undefined**  
- **Null**  
- **Symbol**

#### 2. Non-Primitive Types  
Holds multiple values:  
- **Object**  
- **Array**  
- **Function**  
- **Date**  
- **Map**  
- **Set**


---

