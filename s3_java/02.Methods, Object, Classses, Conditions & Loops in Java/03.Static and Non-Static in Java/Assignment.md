# Java Static and Non-Static Assignment

## Basic-Level

1. **What is a Static Variable?**
Explain what a static variable is in Java. How does it differ from an instance (non-static) variable?

2. **What is a Non-Static Variable?**
Define a non-static (instance) variable and explain how it differs from a static variable.

3. **Write a Class with Static and Non-Static Variables**
Problem Statement:
Create a class `Counter` with a static variable `count` and a non-static variable `id`. Increment `count` when a new `Counter` object is created and assign `id` with the current count. Print the `id` of each object to show difference between static and non-static variables.
Example:
- Output:

```  
Object 1 ID: 1  
Object 2 ID: 2  
Object 3 ID: 3  
```

4. **Access Static Variable Using Class Name**
Problem Statement:
Write a program to demonstrate how to access a static variable directly using the class name without creating any object.
Example:
- Output:

```  
Static count: 5  
```

5. **Access Non-Static Variable Using Object Reference**
Problem Statement:
Write a program that creates an object of a class and accesses a non-static variable via the object reference.
Example:
- Output:

```  
Employee age: 30  
```

6. **What is a Static Method?**
Explain the characteristics of static methods in Java. Mention limitations such as inability to access non-static members.

7. **Write and Call a Static Method**
Problem Statement:
Create a class with a static method `displayMessage` that prints `"Hello from static method!"`. Call this method without creating an object.
Example:
- Output:

```  
Hello from static method!  
```

8. **Write and Call a Non-Static Method**
Problem Statement:
Create a class with a non-static method `showDetails` that prints `"Non-static method called"`. Create an object and call this method using the object.
Example:
- Output:

```  
Non-static method called  
```

9. **Can Static Method Access Non-Static Members?**
Problem Statement:
Write a class that attempts to access non-static variables inside a static method and explain why it causes compilation error.
_No example output required, just explanation._
10. **Static vs Non-Static: Memory Allocation**
Explain with code comments when memory is allocated for static vs non-static variables.


***

## Medium-Level

11. **Static Block Initialization**
Problem Statement:
Write a class with a static block that initializes a static variable and prints a message when the class is loaded. Create an instance and observe the output.
Example:
- Output:

```  
Static block executed  
```

12. **Static Variable Shared Between Objects**
Problem Statement:
Create two objects of a class with a static variable. Change the static variable through one object and show the effect on the other object.
Example:
- Output:

```  
Object 1: 100  
Object 2: 100  
```

13. **Non-Static Variable Unique to Each Object**
Problem Statement:
Create a class with a non-static variable and show that each object has its own copy by modifying the variable in two different objects and printing the values.
Example:
- Output:

```  
Object 1 age: 25  
Object 2 age: 30  
```

14. **Static Method Calling Another Static Method**
Problem Statement:
Write a class with two static methods where one calls the other. Demonstrate calling the first static method from `main`.
Example:
- Output:

```  
First static method  
Second static method  
```

15. **Non-Static Method Calling Static Method**
Problem Statement:
Write a class with a non-static method calling a static method. Create an object and call the non-static method.
Example:
- Output:

```  
Non-static method called  
Static method called  
```

16. **Static Method Cannot Access Non-Static Method**
Problem Statement:
Write code illustrating calling a non-static method from a static method and explain why it fails.
_No example output required, explanation only._
17. **Static Final Variable Example**
Problem Statement:
Define a static final variable and explain why it can be used as a constant across all objects.
Example:
- Output:

```  
PI = 3.14159  
```

18. **Increment Static and Non-Static Variables**
Problem Statement:
Create a class with both static and non-static counters. Increment each in constructor and print their values for multiple objects.
Example:
- Output:

```  
Static count: 3  
Instance count: 1  
Static count: 3  
Instance count: 2  
Static count: 3  
Instance count: 3  
```

19. **Static Nested Class**
Problem Statement:
Write a class with a static nested class. Instantiate the nested class and access its method from the outer class.
Example:
- Output:

```  
Static nested class method called  
```

20. **Non-Static Inner Class**
Problem Statement:
Write a class with a non-static inner class and instantiate it from the outer class. Call the inner class method.
Example:
- Output:

```  
Non-static inner class method called  
```


***

## Hard-Level

21. **Static and Non-Static Method Overloading**
Problem Statement:
Write a class that overloads both static and non-static methods with same name but different parameters, and demonstrate calling both.
Example:
- Output:

```  
Static method one  
Non-static method one  
```

22. **Static Method Hiding with Inheritance**
Problem Statement:
Write a superclass and subclass, both with static methods with same signature. Demonstrate static method hiding by calling methods using class names.
Example:
- Output:

```  
Superclass static method  
Subclass static method  
```

23. **Non-Static Method Overriding**
Problem Statement:
Write superclass and subclass with same non-static method, override method in subclass and demonstrate runtime polymorphism.
Example:
- Output:

```  
Subclass method  
```

24. **Memory Allocation for Static and Non-Static Members**
Explain with detailed comments, where static and non-static variables are stored in JVM memory during runtime.
_No example or output required._
25. **Best Practices for Using Static and Non-Static**
Explain when to use static vs non-static variables and methods in Java with practical considerations and examples.
_No example or output required._

***
