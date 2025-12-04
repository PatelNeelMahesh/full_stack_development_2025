# Java String Assignment

## Basic-Level

1. **What is a String in Java?**
Explain what a `String` is in Java and how it is different from primitive data types.

2. **String Immutability**
Describe the concept of string immutability in Java. Why does it matter for program behavior and security?

3. **Declaring and Initializing Strings**
Provide code examples showing how to create and initialize Java `String` objects using both string literals and the `new` keyword.

4. **String Constant Pool**
Explain the string constant pool in Java, and how it affects memory usage and string comparison.

5. **Print Welcome Message**
Problem Statement:
Write a program that takes a user's name as input and prints a welcome message.
Example:
- Input:

```  
Alice  
```

- Output:

```  
Welcome, Alice!  
```

6. **String Concatenation with Primitives**
Describe how the `+` operator behaves when used with both strings and primitive data types. Include a sample expression and the resulting string.

7. **Find Length of a String**
Problem Statement:
Write a method which takes a string as input and returns its length.
Example:
- Input:

```  
"Hello World"  
```

- Output:

```  
11  
```

8. **Default Value of String Field**
What is the default value of a string field in a Java class that hasn’t been initialized?

9. **Compare Two Strings for Equality**
Problem Statement:
Write a method that takes two input strings and determines if they are equal, ignoring case sensitivity.
Example:
- Input:

```  
"Java", "java"  
```

- Output:

```  
true  
```

10. **Reverse a String**
Problem Statement:
Write a method to reverse a given string and return the reversed string.
Example:
- Input:

```  
"hello"  
```

- Output:

```  
"olleh"  
```


***

## Medium-Level

11. **Count Vowels in a String**
Problem Statement:
Write a method that counts the number of vowels (a, e, i, o, u) in a given string.
Example:
- Input:

```  
"Beautiful Day"  
```

- Output:

```  
6  
```

12. **Extract Substring by Index**
Problem Statement:
Write a method that extracts and returns the substring from index `start` to index `end` (inclusive) from a given string.
Example:
- Input:

```  
"substring", 3, 6  
```

- Output:

```  
"stri"  
```

13. **Explain String Interning**
Describe what string interning is in Java, with an example showing the use of `intern()`.
_No input/output required._
14. **Split Sentence into Words**
Problem Statement:
Write a method that takes a sentence as input and prints each word on a new line.
Example:
- Input:

```  
"Java is awesome"  
```

- Output:

```  
Java  
is  
awesome  
```

15. **Behavior with Null String Concatenation**
Explain what happens if a string is concatenated with `null` in Java. Demonstrate with an example.
_No input/output required._
16. **Check Palindrome String**
Problem Statement:
Write a method that checks if the provided string is a palindrome (reads the same forwards and backwards) and returns a boolean result.
Example:
- Input:

```  
"madam"  
```

- Output:

```  
true  
```

17. **Convert String to Uppercase**
Problem Statement:
Write a method to convert an input string to all uppercase characters.
Example:
- Input:

```  
"good Morning"  
```

- Output:

```  
"GOOD MORNING"  
```

18. **Replace All Spaces With Underscores**
Problem Statement:
Write a function that replaces every space in a given string with an underscore and returns the new string.
Example:
- Input:

```  
"replace all spaces"  
```

- Output:

```  
"replace_all_spaces"  
```

19. **Character at Given Index**
Problem Statement:
Write a method that returns the character at a specified index of a string, or `"Error"` if the index is out of range.
Example:
- Input:

```  
"alphabet", 3  
```

- Output:

```  
"h"  
```

20. **Safely Parse Integer From String**
Problem Statement:
Write a method to convert a string to an integer. If the conversion is not possible (contains non-digit characters), return `-1`.
Example:
- Input:

```  
"1832"  
```

- Output:

```  
1832  
```

- Input:

```  
"12a7"  
```

- Output:

```  
-1  
```


***

## Hard-Level

21. **Find Unique Characters in String**
Problem Statement:
Write a method that accepts a string and returns a list of all unique characters in the string.
Example:
- Input:

```  
"success"  
```

- Output:

```  
["s", "u", "c", "e"]  
```

22. **Compare String, StringBuilder, StringBuffer**
Explain with code examples how `String`, `StringBuilder`, and `StringBuffer` differ in Java regarding memory usage, thread-safety, and speed.
_No input/output required._
23. **Longest Common Prefix**
Problem Statement:
Write a function that takes an array of strings and returns the longest common prefix among all strings.
Example:
- Input:

```  
["interview", "internet", "internal", "interval"]  
```

- Output:

```  
"int"  
```

24. **Efficient String Concatenation in Loops**
Describe why repeatedly concatenating strings inside a loop may lead to inefficient code. Demonstrate an optimized concatenation approach with a small code example.
_No input/output required._

***
