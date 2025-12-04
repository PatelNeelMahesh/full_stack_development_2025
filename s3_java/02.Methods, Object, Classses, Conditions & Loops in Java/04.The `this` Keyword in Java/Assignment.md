# Java `this` Keyword Assignment

## Basic-Level

1. **What is the `this` Keyword?**
Explain what the `this` keyword is in Java and what it refers to. Why is it used?
2. **Using `this` to Refer to Instance Variables**
Problem Statement:
Write a class `Person` with an instance variable `name`. Create a constructor where the parameter name is the same as the instance variable. Use `this` to assign the parameter value to the instance variable. Print the name.
Example:
- Input:

```  
new Person("Alice")  
```

- Output:

```  
Name: Alice  
```

3. **Without `this` Keyword Ambiguity**
Problem Statement:
Write a code snippet where the constructor parameter shadows the instance variable without using `this`. Observe and explain why the instance variable doesn't get updated.
Example:
- Input:

```  
new Person("Bob")  
```

- Output:

```  
Name: null  
```

4. **Using `this` to Call Current Class Constructor**
Problem Statement:
Write a class with two constructors: a no-argument constructor and a parameterized constructor. Call the parameterized constructor from the no-argument constructor using `this()`. Print messages in both constructors.
Example:
- Output:

```  
Parameterized constructor called  
No-argument constructor called  
```

5. **Use `this` to Invoke Current Class Method**
Problem Statement:
Write a class with two methods `display()` and `show()`. Call `show()` inside `display()` using `this`. Print messages in both methods.
Example:
- Output:

```  
Inside show method  
Inside display method  
```


***

## Medium-Level

6. **Using `this` to Return Current Object**
Problem Statement:
Write a method in a class that returns the current instance using `this`. Use method chaining to call multiple methods sequentially by returning `this`.
Example:
- Input:

```  
obj.method1().method2();  
```

- Output:

```  
method1 called  
method2 called  
```

7. **Passing `this` as an Argument**
Problem Statement:
Write a class with a method that accepts an object of the same class as a parameter. Call this method passing `this` to refer to the current object.
Example:
- Output:

```  
Method called with same object reference  
```

8. **Using `this` to Differentiate Method Parameter and Instance Variable**
Problem Statement:
Write setter methods to update instance variables where method parameters have the same names. Use `this` to distinguish between them. Print updated values.
Example:
- Input:

```  
setName("John")  
setAge(30)  
```

- Output:

```  
Name: John  
Age: 30  
```

9. **Constructor Chaining with `this()` and Default Values**
Problem Statement:
Write a class where one constructor calls another with default values using `this()`. Show that default values are assigned when no arguments are provided.
Example:
- Output:

```  
Name: Unknown, Age: 0  
```

10. **Return `this` to Implement Builder Pattern**
Problem Statement:
Implement a class with multiple setter methods that return `this` to support chained method calls to set properties in a single statement.
Example:
- Input:

```  
obj.setName("Mike").setAge(25).display();  
```

- Output:

```  
Name: Mike, Age: 25  
```


***

## Hard-Level

11. **Using `this` in Inner Classes**
Problem Statement:
Write an outer class with a non-static inner class. Use `this` in both classes to refer to current instances and print their references.
Example:
- Output:

```  
Outer class this: Outer@1a2b3c  
Inner class this: Outer$Inner@4d5e6f  
```

12. **Using `this` as an Argument in Constructor Calls**
Problem Statement:
Create two classes `A` and `B` where class `A` constructor accepts a `B` object and calls a method on it. Class `B` creates an `A` object passing `this` as an argument. Print messages demonstrating the flow.
Example:
- Output:

```  
Method in class B called by class A  
```

13. **Avoiding Memory Leaks Using Weak References and `this`**
Explain how improper use of `this` references in inner classes or listeners can cause memory leaks, and how careful use of `this` or weak references can prevent them.
_No example required._
14. **Using `this` with Lambda Expressions**
Explain how `this` behaves differently inside lambda expressions compared to anonymous inner classes. Provide a simple code snippet if possible.
_No example required._
15. **Return Current Object from Method Using `this` for Fluent API**
Problem Statement:
Design a class that implements a fluent API by returning `this` from setter methods. Chain multiple method calls and verify the final object state.
Example:
- Input:

```  
builder.setX(10).setY(20).build();  
```

- Output:

```  
x:10, y:20  
```


***
