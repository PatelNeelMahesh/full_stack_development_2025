# Introduction

In Java, every variable has a **data type** that defines what kind of data the variable can hold. Data types in Java help allocate appropriate memory and determine the operations that can be performed on the stored data.

Java provides **primitive data types** which represent simple values such as numbers, characters, and logical values. These primitives are not objects and have fixed sizes in memory. To work with primitives as objects, Java also provides **wrapper classes** that encapsulate primitive values in objects.

***

## Primitive Data Types in Java

There are **eight** primitive data types in Java:

1. **byte**
    - A very small integer type that uses 8 bits of memory.
    - It holds whole numbers from -128 to 127.
    - Useful in saving memory in large arrays where the memory savings are significant.

Example:

```java
byte smallNumber = 100;
```

2. **short**
    - A 16-bit integer type for slightly larger whole numbers.
    - Ranges from -32,768 to 32,767.
    - Used when saving memory is prioritized over `int`.

Example:

```java
short mediumNumber = 15000;
```

3. **int**
    - The most commonly used integer type.
    - Uses 32 bits of memory.
    - Can hold values roughly between -2 billion to +2 billion.

Example:

```java
int number = 1000000;
```

4. **long**
    - A 64-bit integer for very large whole numbers.
    - Can store values much larger than `int`.
    - When writing long literals, use an `L` suffix to indicate long type.

Example:

```java
long bigNumber = 10000000000L;
```

5. **float**
    - Single-precision 32-bit floating point type for decimal numbers.
    - Sufficient when fewer decimal points are needed.
    - Requires the literal to end with `f`.

Example:

```java
float piApprox = 3.14f;
```

6. **double**
    - Double-precision 64-bit floating point type.
    - Preferred for decimal calculations due to its precision.
    - Literal can end with `d`, but it’s optional since double is the default for decimals.

Example:

```java
double precisePi = 3.141592653589793;
```

7. **char**
    - Represents a single 16-bit Unicode character.
    - Can store letters, digits, and symbols in quotes.

Example:

```java
char letter = 'A';
```

8. **boolean**
    - Represents logical values: `true` or `false`.
    - Typically used in condition checking and flags.

Example:

```java
boolean isJavaFun = true;
```


***

### Practical Example with All Primitive Types

```java
public class PrimitiveDemo {

    public static void main(String[] args) {

        byte age = 25;
        short year = 2025;
        int salary = 75000;
        long distanceToMoon = 384400000L;

        float piFloat = 3.14f;
        double piDouble = 3.141592653589793;

        char grade = 'A';
        boolean isJavaAwesome = true;

        System.out.println("Age: " + age);
        System.out.println("Year: " + year);
        System.out.println("Salary: $" + salary);
        System.out.println("Distance to Moon: " + distanceToMoon + " meters");
        System.out.println("Pi (float): " + piFloat);
        System.out.println("Pi (double): " + piDouble);
        System.out.println("Grade: " + grade);
        System.out.println("Is Java Awesome? " + isJavaAwesome);
    }
}
```


***

## Wrapper Classes in Java

Primitive values cannot be treated as objects, which limits their use in some contexts, like Java collections or APIs expecting objects.

To solve this, Java provides **wrapper classes** — object representations of each primitive type — located in the `java.lang` package. They allow primitives to behave like objects and provide utility methods.

Here are the wrapper classes for each primitive type:

- `byte` → `Byte`
- `short` → `Short`
- `int` → `Integer`
- `long` → `Long`
- `float` → `Float`
- `double` → `Double`
- `char` → `Character`
- `boolean` → `Boolean`

***

### Autoboxing and Unboxing

Java eases the use of wrapper classes and primitives by **autoboxing** and **unboxing**:

- **Autoboxing**: Automatically converting a primitive to its wrapper object.
- **Unboxing**: Automatically converting a wrapper object back to its primitive.

```java
public class WrapperDemo {

    public static void main(String[] args) {
        // Autoboxing: primitive -> wrapper
        Integer boxedInt = 42;
        Double boxedDouble = 3.14;

        // Unboxing: wrapper -> primitive
        int unboxedInt = boxedInt;
        double unboxedDouble = boxedDouble;

        System.out.println("Boxed Integer: " + boxedInt);
        System.out.println("Boxed Double: " + boxedDouble);
        System.out.println("Unboxed Integer: " + unboxedInt);
        System.out.println("Unboxed Double: " + unboxedDouble);
    }
}
```


***

### Wrapper Classes in Practice: Utility Example

Wrapper classes contain many useful methods. For example, converting a string to a primitive:

```java
public class ParseExample {

    public static void main(String[] args) {
        String intString = "123";
        String doubleString = "45.67";

        int intValue = Integer.parseInt(intString);
        double doubleValue = Double.parseDouble(doubleString);

        System.out.println("Parsed int: " + intValue);
        System.out.println("Parsed double: " + doubleValue);
    }
}
```


***

### Why Use Wrapper Classes?

- Collections such as `ArrayList` require objects, so you must use wrapper classes to store primitive values.
- Utility methods like parsing strings or converting types are available only in wrapper classes.
- Wrapper objects can be assigned `null` to represent the absence of a value, unlike primitives.
- Support for generics requires reference types, making wrapper classes necessary.

***

### Example: Using Wrapper Classes with Collections

```java
import java.util.ArrayList;

public class WrapperWithCollections {

    public static void main(String[] args) {
        // Cannot use 'int' in collections, so use Integer instead
        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(10);   // Autoboxing converts int to Integer
        numbers.add(20);
        numbers.add(30);

        for (Integer num : numbers) {
            System.out.println("Number: " + num);
        }
    }
}
```


***

## Summary

Primitive data types are the most basic units of data in Java, providing efficiency and ease of use for simple values. Wrapper classes provide a flexible way to use these values as objects when needed, unlocking powerful features like collections integration and utility methods.

