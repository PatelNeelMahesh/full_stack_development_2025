# Java Generics Practice Assignment


***

## Basic Level

### 1. What are Generics?

Explain the concept of generics in Java and why they are useful.

***

### 2. Generic Class Creation

**Problem Statement:**
Create a generic class `Box<T>` with a private field of type `T`. Add setters and getters for this field. Create objects with `Integer` and `String` types and display the contents.

**Expected Output:**

```
Integer value: 123
String value: Hello Generics
```


***

### 3. Generic Method

**Problem Statement:**
Write a generic method `printArray` that prints elements from an array of any object type. Test with arrays of different types.

**Expected Output:**

```
1 2 3 4 5
a b c d e
```


***

### 4. Multiple Type Parameters in Generics

**Problem Statement:**
Create a generic class `Pair<K, V>` with two fields representing key and value. Create objects with key-value pairs and display.

***

### 5. Bounded Type Parameters

**Problem Statement:**
Create a generic method with bounded types restricting to subclasses of `Number`. Write method to calculate sum of array elements.

***

### 6. Wildcards in Generics

**Problem Statement:**
Explain and demonstrate use of wildcards `?` in generic collections.

***

### 7. Generic Interface Implementation

**Problem Statement:**
Create a generic interface with a method and implement it in a class for different types.

***

### 8. Use of Generics in Collections

**Problem Statement:**
Create a generic `ArrayList<String>` and try adding elements of different types. Explain compiler behavior.

***

### 9. Type Erasure Concept

Explain type erasure in Java generics and its implications.

***

### 10. Generic Constructors

**Problem Statement:**
Create a class with a generic constructor and demonstrate its usage.

***

### 11. Generic Static Methods

**Problem Statement:**
Write and call a static generic method that swaps two elements in an array.

***

### 12. Restricting Generics to Interfaces

**Problem Statement:**
Create a generic class restricted to types implementing a custom interface.

***

### 13. Generics with Inheritance

**Problem Statement:**
Explain how generics behave with inheritance; demonstrate with example.

***

### 14. Generic Exceptions (Theoretical)

Explain why you cannot create generic exceptions in Java.

***

### 15. Recursive Type Bounds

**Problem Statement:**
Create a generic class that uses recursive bounds, e.g., `T extends Comparable<T>`.

***

### 16. Using Generics in Method Parameters

**Problem Statement:**
Define a generic method that processes any type of list and prints size.

***

### 17. Generic Return Types

**Problem Statement:**
Create a generic method that returns the middle element of a list.

***

### 18. Diamond Operator Usage

**Problem Statement:**
Demonstrate the diamond operator usage in generic object creation.

***

### 19. Raw Types Usage and Issues

**Problem Statement:**
Explain raw types and demonstrate potential problems.

***

### 20. Generics and Arrays

**Problem Statement:**
Explain why generic arrays are not allowed; provide alternatives.

***

### 21. Generic Lambda Expressions (Java 8+)

**Problem Statement:**
Demonstrate generic functional interfaces and lambda expressions.

***

### 22. Generics and Reflection

**Problem Statement:**
Use reflection to inspect generic type information at runtime.

***

### 23. Best Practices for Generics

List best practices when designing and using generics.

***

### 24. Performance Considerations with Generics

Explain performance impact, compiler optimizations, and runtime behavior.

***

### 25. Real-World Use Case of Generics

Design a real-world example like a generic repository or utility class using generics.

***