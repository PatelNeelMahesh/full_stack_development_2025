# Java Super Keyword Practice Assignment


***

### 1. Explain the purpose of the `super` keyword in Java and its general use cases.

**Problem Statement:** Describe the role of `super` in accessing superclass members and constructors, with an emphasis on resolving naming conflicts and constructor chaining.

***

### 2. Using `super` to Access Superclass Variables

**Problem Statement:**
Create superclass and subclass with the same variable name. Use `super` in subclass to access the superclass variable.
**Expected Output:**

```
Superclass variable: 100  
Subclass variable: 110  
```


***

### 3. Calling Superclass Methods Using `super`

**Problem Statement:**
Override a method in subclass and within it call the superclass version using `super.methodName()`. Show the combined output.
**Expected Output:**

```
Superclass method called  
Subclass method called  
```


***

### 4. Using `super()` to Call Superclass Constructor

**Problem Statement:**
Implement constructors in superclass and subclass. Use `super()` in subclass constructor to invoke the superclass constructor.
**Expected Output:**

```
Superclass constructor executed  
Subclass constructor executed  
```


***

### 5. Explain Order of Constructor Execution in Inheritance with `super()`

**Problem Statement:**
Explain and demonstrate how constructors are called in inheritance hierarchy using `super()` and default chaining.

***

### 6. Use of `super` in Multi-Level Inheritance

**Problem Statement:**
Create a three-level class hierarchy. Use `super` to access immediate and overridden members up the inheritance chain.

***

### 7. Resolving Naming Conflicts Using `super`

**Problem Statement:**
Demonstrate how `super` resolves ambiguity when subclass and superclass have identical method or variable names.

***

### 8. Disallowing `super` in Static Context

**Problem Statement:**
Attempt to use `super` inside a static method and explain the compilation error or why it’s disallowed.

***

### 9. Use of `super` to Access Hidden Members

**Problem Statement:**
Show how a subclass variable hides a superclass variable and use `super` to access the hidden field.

***

### 10. Combine `this` and `super` in Subclass

**Problem Statement:**
Use `this` to refer to subclass members and `super` to superclass members within subclass methods to clarify different scopes.

***