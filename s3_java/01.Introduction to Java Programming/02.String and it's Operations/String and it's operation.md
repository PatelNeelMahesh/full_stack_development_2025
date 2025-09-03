# Introduction to Strings in Java

A **String** in Java is a sequence of characters used to represent text. Unlike primitive data types, Strings are **objects** of the `java.lang.String` class. One of the key features of Strings in Java is their **immutability** — once a String object is created, it cannot be changed. Any modification creates a new String object.

***

## String Pool: Memory Efficiency in Java

Java employs a special memory area called the **String Pool** (also known as the **String Constant Pool**), which optimizes storage of String literals.

- When a String literal is created (e.g., `String s = "Hello";`), Java first checks if that exact string value already exists in the pool.
- If it exists, Java reuses the reference to that String object instead of creating a new one, saving memory.
- If it doesn’t exist, Java creates a new String object in the pool and stores the reference.

This string reuse mechanism is called **String Interning** and helps **reduce memory consumption** and improve performance.

### Example Showing String Pool Behavior

```java
String str1 = "Hello";
String str2 = "Hello";  // Reuses the same reference as str1
String str3 = new String("Hello");  // Creates a new object in heap, NOT the pool

System.out.println(str1 == str2);  // true (both point to the same object in pool)
System.out.println(str1 == str3);  // false (str3 refers to different object)
System.out.println(str1.equals(str3));  // true (contents are equal)
```

You can force a String object to enter the pool by calling the `intern()` method:

```java
String str4 = str3.intern();
System.out.println(str1 == str4); // true, both refer to pool object
```


***

## Creating Strings: Literal vs. New Operator

- **Using String Literals**
Stored in the String pool, shared for reuse.

```java
String s1 = "Java";
```

- **Using New Keyword**
Creates a new object in heap memory every time, outside of the pool.

```java
String s2 = new String("Java");
```


Because of this, literals with the same content share references, but objects created via `new` do not.

***

## Common String Operations

### 1. length()

Returns the number of characters in the string.

```java
String s = "Java Programming";
System.out.println("Length: " + s.length());  // Output: 16
```


### 2. charAt(int index)

Retrieves the character at the specified index (0-based).

```java
char c = s.charAt(5);
System.out.println("Character at index 5: " + c);  // Output: P
```


### 3. concat(String str)

Concatenates the argument string to the current string.

```java
String hello = "Hello";
String world = " World";
String greeting = hello.concat(world);
System.out.println(greeting);  // Output: Hello World
```


### 4. substring(int beginIndex) / substring(int beginIndex, int endIndex)

Extracts a portion of the string starting at `beginIndex`, optionally ending before `endIndex`.

```java
System.out.println(s.substring(5));        // Output: Programming
System.out.println(s.substring(0, 4));     // Output: Java
```


### 5. toUpperCase() / toLowerCase()

Returns a new string with all characters converted to uppercase or lowercase respectively.

```java
System.out.println(s.toUpperCase());  // Output: JAVA PROGRAMMING
System.out.println(s.toLowerCase());  // Output: java programming
```


### 6. trim()

Removes leading and trailing whitespace.

```java
String spaced = "   Java Rocks!   ";
System.out.println("'" + spaced.trim() + "'");  // Output: 'Java Rocks!'
```


### 7. indexOf(String str)

Returns the index of the first occurrence of the specified substring or -1 if not found.

```java
System.out.println(s.indexOf("Prog"));    // Output: 5
System.out.println(s.indexOf("Python"));  // Output: -1
```


### 8. lastIndexOf(String str)

Returns the index of the last occurrence of the substring.

```java
String s2 = "banana";
System.out.println(s2.lastIndexOf("a"));  // Output: 5
```


### 9. equals(Object obj)

Checks if the contents of the current string and the object are the same.

```java
String a = "Java";
String b = new String("Java");
System.out.println(a.equals(b));  // true
```


### 10. equalsIgnoreCase(String str)

Checks content equality ignoring letter case.

```java
String s3 = "JAVA";
System.out.println(a.equalsIgnoreCase(s3));  // true
```


### 11. contains(CharSequence s)

Returns true if the string contains the specified sequence.

```java
System.out.println(s.contains("Pro"));  // true
```


### 12. replace(CharSequence target, CharSequence replacement)

Returns a new string replacing all occurrences of `target` with `replacement`.

```java
String replaced = s.replace("Java", "Python");
System.out.println(replaced);  // Output: Python Programming
```


### 13. split(String regex)

Splits the string at matches of the given regular expression and returns an array of substrings.

```java
String csv = "red,green,blue,yellow";
String[] colors = csv.split(",");
for (String color : colors) {
    System.out.println(color);
}
```

Output:

```
red
green
blue
yellow
```


***

## String Comparison: == vs equals()

- The `==` operator compares **reference equality** — do two variables point to the exact same object in memory?
- The `.equals()` method compares **content equality** — do two strings have the same sequence of characters?

Because String literals are interned in the pool, `==` returns true for literals with the same content but not for strings constructed with `new`.

