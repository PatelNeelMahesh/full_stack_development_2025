# Java Inheritance Practice Assignment


***

### 1. What is Inheritance?

Explain the concept and advantages of inheritance in Java.

***

### 2. Define Single Inheritance

Describe what single inheritance is in Java.

***

### 3. Implement Single Inheritance

**Problem Statement:**
Create a superclass `Vehicle` with method `start()`. Create subclass `Car` extending `Vehicle` with method `drive()`. Create objects and call their methods.
**Expected Output:**

```
Vehicle started  
Car is driving  
```


***

### 4. Implement Multilevel Inheritance

**Problem Statement:**
Create classes `Animal`, `Dog` extends `Animal`, and `Puppy` extends `Dog`. Each has specific methods (`eat()`, `bark()`, `weep()`). Instantiate `Puppy` and call all methods.
**Expected Output:**

```
Animal is eating  
Dog is barking  
Puppy is weeping  
```


***

### 5. Implement Hierarchical Inheritance

**Problem Statement:**
Create superclass `Person` with method `introduce()`. Two subclasses: `Student` and `Teacher` with their own methods `study()` and `teach()`. Instantiate objects and call methods.
**Expected Output:**

```
I am a person  
Student studies  
I am a person  
Teacher teaches  
```


***

### 6. Protected Members and Inheritance

**Problem Statement:**
Create superclass with protected variable and method. In subclass, access and modify protected members. Demonstrate usage.
**Expected Output:**

```
Balance is: 1000  
Updated Balance is: 1500  
```


***

### 7. Method Overriding Fundamentals

**Problem Statement:**
Override superclass method in subclass. Demonstrate polymorphism through overridden method.
**Expected Output:**

```
Dog is eating dog food  
```


***

### 8. Using `super` Keyword

**Problem Statement:**
Use `super` to call superclass method inside overridden subclass method.
**Expected Output:**

```
Animal is eating  
Dog is eating dog food  
```


***

### 9. Constructor Chaining in Inheritance

**Problem Statement:**
Implement constructors in superclass and subclass with chaining using `super()`. Show constructor execution order.

***

### 10. `instanceof` Keyword

**Problem Statement:**
Demonstrate usage of `instanceof` to check object type in inheritance hierarchy.

***

### 11. Abstract Classes with Inheritance

**Problem Statement:**
Create an abstract superclass with abstract methods and implement them in subclasses.

***

### 12. Overloading Methods in Subclass

**Problem Statement:**
Overload methods in subclass. Demonstrate which method is called depending on parameters.

***

### 13. Static Method Behavior in Inheritance

**Problem Statement:**
Show that static methods don’t override but hide. Demonstrate method hiding in subclass.

***

### 14. Final Methods and Inheritance

**Problem Statement:**
Create a final method in superclass and show that it cannot be overridden in the subclass.

***

### 15. Access Modifiers and Inheritance

**Problem Statement:**
Explore the effect of private, protected, and public access modifiers in superclass members with subclass access.

***

### 16. `this` vs `super` in Subclass

**Problem Statement:**
Differentiate usage of `this` and `super` to refer to current and superclass members.

***

### 17. Polymorphism and Inheritance

**Problem Statement:**
Demonstrate polymorphism using superclass reference to subclass objects and method overriding.

***

### 18. Exceptions in Overridden Methods

**Problem Statement:**
Show exception handling rules in method overriding within inheritance.

***

### 19. Interface and Class Inheritance Interaction

**Problem Statement:**
Explain interaction between interface implementation and class inheritance (single inheritance).

***

### 20. Abstract Method Overriding

**Problem Statement:**
Create abstract superclass with abstract method and override in subclasses, showing dynamic dispatch.

***

### 21. Overriding toString Method

**Problem Statement:**
Override `toString()` in subclass and demonstrate object printing behavior.

***

### 22. Inheritance and Encapsulation

**Problem Statement:**
Show how encapsulation is maintained in inherited classes with private fields and getters/setters.

***

### 23. Multiple Constructors and Inheritance

**Problem Statement:**
Implement multiple constructors and demonstrate which constructor is called in subclass chaining.

***

### 24. Inheritance and Static Members

**Problem Statement:**
Explain how static variables and methods behave in inheritance.

***

### 25. Best Practices for Inheritance

**Problem Statement:**
List best programming practices for using inheritance effectively and avoiding pitfalls.

***