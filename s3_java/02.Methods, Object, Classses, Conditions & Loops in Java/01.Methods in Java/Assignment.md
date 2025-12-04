# Java Class, Object & Constructor Assignment

## Basic-Level

1. **What is a Class in Java?**
Explain what a class is in Java and how it serves as a blueprint for objects.

2. **What is an Object in Java?**
Define what an object is in Java and explain how an object is related to a class.

3. **Creating an Object**
Describe how to create an object of a class in Java using the `new` keyword. Include a syntax example.

4. **Write a Class with Attributes and a Method**
Problem Statement:
Create a class `Student` with two fields: `name` (String) and `marks` (int). Add a method `displayDetails()` that prints the student’s name and marks. Create an object of `Student`, set values, and call the method.
Example:
- Input:

```  
name = "Alice"  
marks = 90  
```

- Output:

```  
Name: Alice  
Marks: 90  
```

5. **Default Constructor in Java**
Explain what a default constructor is. What happens if no constructor is explicitly defined in a class?

6. **Constructor Characteristics**
List the characteristics of a constructor in Java such as naming, syntax, and how it differs from a method.

7. **Write a No-Argument Constructor**
Problem Statement:
Define a class `Book` with a no-argument constructor which initializes the title to `"Unknown"` and the price to `0`. Add a method to display the title and price. Create an object and display these values.
Example:
- Output:

```  
Title: Unknown  
Price: 0  
```

8. **Write a Parameterized Constructor**
Problem Statement:
Define a class `Rectangle` with a constructor that takes two parameters: length and width. Add a method that calculates and prints the area of the rectangle. Create an object with length 7 and width 5 and print the area.
Example:
- Input:

```  
length = 7  
width = 5  
```

- Output:

```  
Area: 35  
```

9. **Constructor Overloading**
Explain constructor overloading and provide an example where a class has multiple constructors with different parameter lists.

10. **Create Multiple Objects**
Problem Statement:
Create a class `Person` with name and age fields. Create two objects with different values and display their details.
Example:
- Output:

```  
Person 1: Name = John, Age = 25  
Person 2: Name = Jane, Age = 30  
```


***

## Medium-Level

11. **Use `this` Keyword in Constructor**
Problem Statement:
Write a class `Car` with fields `model` and `year`. Use a constructor with parameters that initializes the fields using the `this` keyword. Print the car’s details.
Example:
- Input:

```  
model = "Tesla"  
year = 2023  
```

- Output:

```  
Model: Tesla  
Year: 2023  
```

12. **Create Array of Objects**
Problem Statement:
Define a class `Employee` with fields `name` and `salary`. Create and initialize an array of 3 `Employee` objects with different values and print all employee details.
Example:
- Output:

```  
Name: Mike, Salary: 55000  
Name: Linda, Salary: 60000  
Name: Steve, Salary: 58000  
```

13. **Call Method Inside Constructor**
Problem Statement:
Create a class `Circle` with a `radius` field. In the constructor, call an instance method that calculates and prints the area. Create an object and check the output.
Example:
- Input:

```  
radius = 6  
```

- Output:

```  
Area: 113.097  
```

14. **Difference Between Default and Parameterized Constructor**
Problem Statement:
Show example code of a class having both a default and a parameterized constructor. Create objects using both constructors and display the initialized values.
Example:
- Output:

```  
Default Constructor: name = Unknown, id = 0  
Parameterized Constructor: name = Alice, id = 101  
```

15. **Assignment of Object References**
Explain with example what happens when you assign one object reference variable to another. Do modifications on one reflect on the other?

16. **Constructor Chaining Using `this()`**
Problem Statement:
Write a class with multiple constructors where one constructor calls another using `this()`. Create an object using the constructor chaining and print the values.
Example:
- Output:

```  
Value 1: 50  
Value 2: 100  
```

17. **Garbage Collection and Objects**
Explain when and how an object becomes eligible for garbage collection in Java. Provide a brief code snippet demonstrating object dereferencing.

18. **Constructor Access Modifiers**
Show how constructors can have different access modifiers like `public`, `private`, `protected` and explain their impact on object creation.

19. **Use of Anonymous Objects**
Problem Statement:
Write code to create an anonymous object and use it to call a method of a class.
Example:
- Output:

```  
Hello from anonymous object!  
```

20. **Composition: Objects as Fields**
Problem Statement:
Create a class `Department` having a field which is an object of class `Employee`. Instantiate both objects and display combined details.
Example:
- Output:

```  
Department: HR, Employee: Sarah  
```


***

## Hard-Level

21. **Immutable Class Using Constructor**
Problem Statement:
Implement a class `StudentRecord` which is immutable. Initialize fields only via constructor and provide only getter methods to access them. Demonstrate immutability by showing no setters are allowed.
Example:
- Input:

```  
name = "Tom"  
rollNo = 5  
```

- Output:

```  
Name: Tom  
Roll No: 5  
```

22. **Implement Copy Constructor**
Problem Statement:
Write a class `Point` that implements a copy constructor which creates a new object copying values from an existing `Point` object. Display both original and copied points.
Example:
- Output:

```  
Original Point: (10, 20)  
Copied Point: (10, 20)  
```

23. **Static Field to Count Objects**
Problem Statement:
Create a class that keeps track of how many objects have been created using a static field. Print the total count after creating multiple objects.
Example:
- Output:

```  
Total objects created: 4  
```

24. **Private Constructor and Factory Method**
Problem Statement:
Write a class with a private constructor and a public static factory method that creates and returns an instance of the class.
Example:
- Output:

```  
Instance created using factory method!  
```

25. **Constructor in Inheritance (Simple Example)**
Problem Statement:
Create a superclass `Vehicle` with a constructor that prints a message. In subclass `Bike`, call parent constructor using `super()` and print subclass message. Create `Bike` object and observe output.
Example:
- Output:

```  
Vehicle Constructor Called  
Bike Constructor Called  
```


***
