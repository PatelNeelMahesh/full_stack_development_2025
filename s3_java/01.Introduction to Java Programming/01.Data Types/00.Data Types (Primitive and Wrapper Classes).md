# Introduction

In Java, every variable has a **data type** that defines what kind of data the variable can hold. Data types in Java help allocate appropriate memory and determine the operations that can be performed on the stored data.

Java provides **primitive data types** which represent simple values such as numbers, characters, and logical values. These primitives are not objects and have fixed sizes in memory. To work with primitives as objects, Java also provides **wrapper classes** that encapsulate primitive values in objects.

***

## Primitive Data Types in Java

There are **eight** primitive data types in Java:

1. **byte**
    - A very small integer type that uses 8 bits of memory.
    - Holds whole numbers from -128 to 127 (inclusive).
    - Useful in memory-sensitive applications such as file I/O, network communications, and large arrays where space optimization is important.
    - Supports arithmetic operations and can be promoted implicitly to `int` when used in expressions.
    - Commonly used in low-level programming tasks or legacy protocols that require small data units.

Example:

```java
byte smallNumber = 100;
```

2. **short**
    - A 16-bit signed integer value.
    - Ranges from -32,768 to 32,767.
    - Ideal for applications that need to balance memory consumption and range, such as graphic color values or sensor data.
    - Supports arithmetic operations and can be widened to `int` automatically during calculations.

Example:

```java
short mediumNumber = 15000;
```

3. **int**
    - The default integer type typically used for numeric calculations unless larger or smaller sizes are warranted.
    - Uses 32 bits, representing values roughly between -2 billion to +2 billion.
    - Efficient for most arithmetic and indexing operations.
    - Integer literals by default are of type `int`, so no suffix is needed.

Example:

```java
int number = 1000000;
```

4. **long**
    - A 64-bit integer type.
    - Used when values exceed the range of `int`, such as timestamps, file sizes, or population counts.
    - Requires an `L` (uppercase recommended to avoid confusion with digit 1) suffix on literals.
    - Supports all integer arithmetic operations and can be used for bitwise operations.

Example:

```java
long bigNumber = 10000000000L;
```

5. **float**
    - A 32-bit floating-point type for decimal numbers.
    - Less precise and smaller than double, useful where single precision suffices, such as graphics calculations and low-memory devices.
    - Useful for saving memory in large arrays of decimal numbers.
    - Requires `f` or `F` suffix on literals to distinguish from double.

Example:

```java
float piApprox = 3.14f;
```

6. **double**
    - The most commonly used floating-point type.
    - Uses 64 bits and provides double precision, making it suitable for scientific and financial calculations where accuracy is important.
    - Decimal literals default to double if no suffix is specified.
    - Even with floating-point precision, be cautious with rounding errors; consider `BigDecimal` for exact decimal arithmetic.

Example:

```java
double precisePi = 3.141592653589793;
```

7. **char**
    - A 16-bit Unicode character type.
    - Can store any single character, letter, digit, or symbol supported by Unicode, including English alphabets, foreign characters, emojis, and special symbols.
    - Can be manipulated using integer operations due to its numeric Unicode representation.
    - Character literals are enclosed in single quotes `'A'`.

Example:

```java
char letter = 'A';
```

8. **boolean**
    - Represents a logical value with only two possible states: `true` or `false`.
    - Primarily used for control flow in conditional statements and loops.
    - Cannot be directly converted to numeric types.
    - Enables the implementation of flags, switches, and predicate logic.

Example:

```java
boolean isJavaFun = true;
```


***

### Additional Details About Primitive Types

- **Default values:** In class fields, numeric primitives default to `0` (or `0.0` for floats and doubles), `char` defaults to `\u0000` (null character), and `boolean` defaults to `false`.
- **Promotion in expressions:** Bytes, shorts, and chars are promoted to `int` during arithmetic operations unless explicitly cast back.
- **Bitwise operations:** Supported on integer types (`byte`, `short`, `int`, `long`) enabling manipulation at the bit level.
- **Constants:** Primitives can be declared as `final` to create constants.
- **Casting:** Explicit casting may be necessary when converting between different numeric types to avoid data loss or errors.

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

Primitive types cannot be directly used where objects are required, such as in collections or APIs expecting reference types. Java addresses this with **wrapper classes**, which provide an object representation for each primitive type.

### Features and Benefits of Wrapper Classes

- **Object behavior:** Wrappers inherit from `java.lang.Object`, allowing use in collections, generics, and object-based APIs.
- **Utility methods:** Provide useful static and instance methods for parsing, converting, comparing, and manipulating values.
- **Nullable references:** Unlike primitives, wrapper objects can be assigned `null` to represent the absence of a value.
- **Autoboxing support:** Automatic conversion between primitives and their wrappers simplifies coding.
- **Immutability:** Wrapper classes are immutable; once created, their values cannot change, supporting safe concurrent use.
- **Constants:** They include useful constants such as `Integer.MAX_VALUE`, `Double.NaN`, or `Boolean.TRUE`.

***

Here are the wrapper classes for each primitive type:


| Primitive | Wrapper Class | Description and Uses |
| :-- | :-- | :-- |
| `byte` | `Byte` | Useful for byte manipulation, conversion, and providing constants. |
| `short` | `Short` | Includes methods like `compare`, `decode`, and handles short-range data. |
| `int` | `Integer` | Most used wrapper for integral values, with many parsing and conversion methods. |
| `long` | `Long` | Supports very large integer values and associated utility methods. |
| `float` | `Float` | Contains methods for handling float precision and special float values. |
| `double` | `Double` | Provides constants and methods for high-precision decimal handling. |
| `char` | `Character` | Offers methods for character classification, case conversion, and Unicode support. |
| `boolean` | `Boolean` | Includes logical operations and constants for `TRUE` and `FALSE`. |


***

### Autoboxing and Unboxing

Java simplifies the interaction between primitives and wrapper objects through two key mechanisms:

- **Autoboxing:** The implicit conversion of primitive values to their corresponding wrapper objects when required by the context.

```java
Integer boxedInt = 42;  // primitive int 42 is autoboxed to Integer
```

- **Unboxing:** The automatic extraction of a primitive value from its wrapper object when a primitive is needed.

```java
int unboxedInt = boxedInt;  // Integer object unboxed to primitive int
```

This feature allows seamless coding without explicit conversions, making the language expressive and developer-friendly.

***

### Wrapper Classes in Practice: Common Utility Methods

Wrapper classes provide numerous static methods valuable for data manipulation and validation:

- Parsing numeric values from strings with error handling:

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

- Conversion methods between numeric bases (decimal, hexadecimal, binary, octal).
- Comparison of values for sorting and searching:

```java
int result = Integer.compare(12, 25);  // returns negative value as 12 < 25
```

- Checking ranges and valid values, converting to string representations, and more.

***

### Why Use Wrapper Classes?

- Collection frameworks like `ArrayList` and Java generics require objects, so wrapper classes serve as the object proxies for primitives.
- Wrapper classes can be `null` to signal the absence of a value, important when data can be optional or uninitialized.
- Many APIs provide utility and parsing methods only available on wrapper classes.
- Enhances code readability and maintainability with method chaining and object-oriented approaches.

***

### Example: Using Wrapper Classes with Collections

```java
import java.util.ArrayList;

public class WrapperWithCollections {

    public static void main(String[] args) {
        // Using Integer (wrapper) instead of int (primitive) to store numbers
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

Primitive data types are the fundamental building blocks in Java that offer high performance and low memory overhead for basic values. Wrapper classes extend this functionality by allowing primitives to be treated like objects, enabling their use in advanced programming contexts such as collections and object-oriented design, while providing rich utility methods for data manipulation. Understanding both forms and their interaction is essential for effective Java programming.

***
