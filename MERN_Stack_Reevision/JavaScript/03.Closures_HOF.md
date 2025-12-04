# 1. Understanding Closures: Functions with Preserved Data Scope

## What Is a Closure?

A closure is a function that retains access to the variables in its lexical scope (the environment in which the function was created), even after the outer function that declared these variables has finished executing. In simple terms, closures allow functions to "remember" the environment in which they were created.

- whenever a function is returning another function, it will also carry it's lexical environment(or variables).
- Closures are created every time a function is created, at function creation time.
## Key Characteristics of Closures:

- Closures preserve access to variables even after the outer function has completed.
- They enable data privacy by controlling what can and cannot be accessed from outside.
- They allow for stateful functions, where functions can store and manipulate values across multiple invocations.

## Example 1: Basic Closure

```javascript
function outerFunction() {
  let outerVariable = "I'm from outerFunction";

  function innerFunction() {
    console.log(outerVariable);  // Access outerVariable from outerFunction
  }

  return innerFunction;
}

const myClosure = outerFunction();  // outerFunction returns innerFunction
myClosure();  // Output: I'm from outerFunction
```

## Explanation

Even though the outerFunction has finished executing, the innerFunction maintains access to outerVariable because of the closure it creates over its lexical environment.

# 2. Lexical Environment: How Closures Capture Variables

## What Is a Lexical Environment?

A lexical environment is a structure that holds variable bindings (variables, constants, functions) and keeps track of how variables are scoped and accessed. Lexical environments are created when JavaScript functions are declared. Each function has access to variables within its own lexical environment, as well as variables in any outer environments.

When a function is called, it forms a closure over its lexical environment, allowing it to capture and "remember" variables from its defining scope, even after the outer function has returned.

## Example 2: Lexical Environment in Action

```javascript
function greet() {
  let name = "Alice";

  return function () {
    console.log("Hello, " + name);
  };
}

let sayHello = greet();
sayHello();  // Output: Hello, Alice
```

## Explanation

Even though greet() has completed execution, the inner function returned by greet() still remembers the name variable from the lexical environment where it was created.

## How Lexical Environment Works

Each function, when invoked, gets its own execution context (comprising a variable environment and a reference to its parent’s lexical environment). This chain of environments is what enables scope chains and closures to work.

# 3. Practical Applications of Closures

Closures have a variety of practical applications, such as enabling data privacy, function factories, and stateful functions.

## 3.1. Data Privacy and Encapsulation

Closures allow us to create private variables by restricting access to variables only through specific methods. This provides encapsulation, which is essential for creating secure and modular code.

## Example 3: Data Privacy with Closures

```javascript
function createCounter() {
  let count = 0;  // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // Output: 1
console.log(counter.increment());  // Output: 2
console.log(counter.getCount());   // Output: 2
```

## Explanation

The count variable is private and can only be accessed through the increment and getCount methods returned by createCounter(). This ensures that count is not accessible directly, providing data privacy.

## 3.2. Function Factories

A function factory is a function that returns other functions, allowing you to create customized functions. Closures enable these returned functions to retain access to variables from the factory’s lexical environment.

## Example 4: Function Factory with Closures

```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
```

## Explanation

The createMultiplier function returns a new function that remembers the multiplier value from its lexical environment. Each returned function retains its own copy of multiplier, allowing you to create multiple versions of the function.

## 3.3. Stateful Functions

Closures allow functions to retain state between invocations, which is useful when you need to maintain a running total or other accumulated value.

# 4. Practice Exercises

## Exercise 1: Data Privacy with Closures

Create a closure that provides access to a bank account balance but does not allow the balance to be changed directly.

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

let account = createBankAccount(100);
console.log(account.getBalance());  // Output: 100
console.log(account.deposit(50));   // Output: 150
```

## Exercise 2: Function Factory with Closures

Write a function factory that creates a function for calculating the area of different shapes (e.g., circle, square, rectangle).

## Exercise 3: Memory Management in Closures

Create a function that returns a closure, but ensure that large data structures are not retained in memory after they are no longer needed.

# 5. Higher-Order Functions (HOF) Definition

## What is a Higher-Order Function?

A Higher-Order Function (HOF) is a function that either:

Takes another function as an argument, or
Returns a function as its result.

Higher-order functions are a key aspect of functional programming, allowing for more abstract, reusable, and cleaner code. They are used for handling common patterns, such as iteration, event handling, and data transformation. like, map(), forEach(), filter(), and reduce().

## Example 1: HOF Taking a Function as an Argument

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(applyOperation(5, 3, add));  // Output: 8
```

## Example 2: HOF Returning a Function

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplier(2);
console.log(double(5));  // Output: 10
```

In Example 1, applyOperation is a higher-order function because it takes the add function as an argument. In Example 2, multiplier is a higher-order function because it returns a new function.

# 6. Method Chaining with Higher-Order Functions (HOFs) in JavaScript

## 1. What is Method Chaining?

### Definition:
Method chaining is a technique where multiple methods are called sequentially, each performing an action on the result of the previous method. It allows for clean, readable, and concise code.

### Why Use Method Chaining?
- **Improves readability**: Method chaining helps to avoid temporary variables and makes code more compact.
- **Fluent interface**: It creates a logical flow of operations, especially when transforming or filtering data.
- **Reduces code length**: Many operations can be combined into a single chain rather than broken down into separate steps.

### Example: Without Method Chaining
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

const filtered = doubled.filter(function (num) {
  return num > 5;
});

console.log(filtered);  // Output: [6, 8, 10]
```

### Example: With Method Chaining
```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map(num => num * 2)
  .filter(num => num > 5);

console.log(result);  // Output: [6, 8, 10]
```

In the chained example, the map() and filter() methods are combined into a single expression, resulting in cleaner and more compact code.
