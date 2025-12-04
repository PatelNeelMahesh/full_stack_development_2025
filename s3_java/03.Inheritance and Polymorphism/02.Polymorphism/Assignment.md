# Java Polymorphism Practice Questions


***

### 1. What is Polymorphism?

Explain polymorphism in Java with examples.

***

### 2. Types of Polymorphism

List and describe compile-time and runtime polymorphism.

***

### 3. Method Overloading Example

**Problem Statement:**
Create a class `Calculator` with overloaded methods `add()` having different parameter types/counts. Demonstrate calling them.
**Expected Output:**

```
Sum of two ints: 10  
Sum of three ints: 15  
Sum of two doubles: 25.5
```


***

### 4. Method Overriding Example

**Problem Statement:**
Create base class `Animal` with method `sound()`. Override it in subclass `Dog` and `Cat`. Create objects and call the overridden methods.
**Expected Output:**

```
Animal sound  
Dog barks  
Cat meows  
```


***

### 5. Runtime Polymorphism with Superclass Reference

**Problem Statement:**
Use superclass reference to refer to subclass objects and invoke overridden methods.
**Expected Output:**

```
Dog barks  
Cat meows  
```


***

### 6. Explain Dynamic Method Dispatch

Describe how Java determines which overridden method to call at runtime.

***

### 7. Static vs Dynamic Polymorphism

Compare compile-time (method overloading) and runtime (method overriding) polymorphism with examples.

***

### 8. Constructors and Polymorphism

Explain why constructors are not polymorphic and can’t be overridden.

***

### 9. Polymorphism with Abstract Classes

Create abstract class with abstract method. Subclasses provide different implementations.

***

### 10. Polymorphic Arrays

Store different subclass objects in superclass array and call overridden methods in a loop.

***

### 11. Using `super` in Overriding

Call superclass method inside overridden method using `super`.

***

### 12. Polymorphism with Interfaces

Demonstrate polymorphic behavior with a class implementing an interface.

***

### 13. Static Methods and Polymorphism

Show static methods do not exhibit polymorphism; explain method hiding.

***

### 14. Final Methods and Polymorphism

Explain how `final` methods cannot be overridden and affect polymorphism.

***

### 15. Overloading vs Overriding Confusion

Describe differences and possible confusions with clear examples.

***

### 16. Covariant Return Types

Explain covariant return type in method overriding with example.

***

### 17. Exception Handling and Polymorphism

Show rules of exception types in overridden methods.

***

### 18. Polymorphism and Casting

Use casting to access subclass-specific methods not in superclass reference.

***

### 19. Polymorphism and Collections

Use polymorphism in collections holding superclass references.

***

### 20. Benefits of Polymorphism

List practical benefits: modularity, extensibility, maintainability.

***

### 21. Abstract vs Interface Polymorphism

Compare polymorphism with abstract classes and interfaces.

***

### 22. Polymorphism and Method Visibility

Explain visibility rules while overriding methods.

***

### 23. Polymorphic Method Parameters

Use polymorphic parameters to accept superclass references.

***

### 24. Polymorphism and Design Patterns

Mention design patterns that rely on polymorphism (Factory, Strategy).

***

### 25. Common Pitfalls with Polymorphism

List common mistakes when using or implementing polymorphism.

***