# Introduction to Strings in Java

A **String** in Java represents an immutable sequence of characters. It is an instance of the `java.lang.String` class. Once created, a String’s value cannot be changed, ensuring thread safety and efficient memory management.

***

## String Pool: How It Works (In-Depth Visualization)

Java optimizes memory for String literals via the **String Pool** — a special memory area inside the method area or permgen (depending on JVM version).


| Action | String Pool Status | Result |
| :-- | :-- | :-- |
| `String s1 = "Hello";` | Pool empty initially | Creates new String object `"Hello"` in pool (ref A) |
| `String s2 = "Hello";` | Pool contains `"Hello"` | Reuses reference A; no new object created |
| `String s3 = new String("Hello");` | Pool unchanged | Creates new distinct object on heap (ref B) |
| `String s4 = s3.intern();` | Pool contains `"Hello"` | Returns pool reference A |


***

### String Pool Visual Diagram

```
+--------------------------------------------+
|                 String Pool                |
|  +----------------+                        |
|  | "Hello" (ref A)| <---- string literals  |
|  +----------------+                        |
+--------------------------------------------+

Heap Area (non-pooled Strings):
+-----------------------+
| new String("Hello")    |
| (ref B) distinct obj   |
+-----------------------+
```

- **Literal Strings** are interned and shared.
- **Strings created with `new`** reside on the heap, separate from pool.
- `.intern()` returns reference from pool, ensuring sharing.

***

## Creating Strings: Literal vs. New Operator

| Creation Approach | Memory Location | Characteristics |
| :-- | :-- | :-- |
| String Literal | String Pool | Shared, memory optimized, single instance for identical literals |
| Using `new String()` | Heap | Creates a **new** object every time, distinct from pool |


***

## Detailed Visual Step-by-Step for Each String Method


***

### 1. `length()`

Returns the total number of characters in the string (including spaces).

```java
String s = "Java Programming";
int len = s.length(); // 16
```

**Visual Representation**


| Index: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | … | 15 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Characters: | J | a | v | a |  | P | r | … | g |

*Length = 16:* Counting from index 0 through 15.

***

### 2. `charAt(int index)`

Returns the character at the specified index (0-based).

```java
char c = s.charAt(5); // 'P'
```

**Visual**

```
String:  J   a   v   a       P   r   o   g ...
Index:   0   1   2   3   4   5   6   7   8
charAt(5) = 'P'
```


***

### 3. `concat(String str)`

**What is it?**

The `concat()` method concatenates the specified string to the end of the current string, returning a new combined string.

**Why use it?**

To join two strings into one without modifying the originals, preserving immutability.

**Example and Step-by-Step Explanation**

```java
String greeting = "Hello".concat(" World"); // "Hello World"
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | H | e | l | l | o |  | W | o | r | l | d |

- Step 1: Calculate total length (5 + 6 = 11).
- Step 2: Create new array with length 11.
- Step 3: Copy "Hello" into positions 0 to 4.
- Step 4: Copy " World" into positions 5 to 10.
- Step 5: Return new String based on combined array.

***

### 4. `substring(int beginIndex)`

**What is it?**

Returns substring starting from `beginIndex` to the end.

**Why use it?**

When extracting text from a certain position to the end.

**Example and Step-by-Step Explanation**

```java
String s = "Java Programming";
String sub = s.substring(5); // "Programming"
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | r | o | g | r | a | m | m | i | n | g |

- Step 1: Validate `beginIndex = 5`
- Step 2: Create new array with length 11 (16-5).
- Step 3: Copy chars starting from index 5 through 15.
- Step 4: Result array forms "Programming".
- Step 5: Return new String from this array.

***

### 5. `substring(int beginIndex, int endIndex)`

**What is it?**

Returns substring from `beginIndex` up to but excluding `endIndex`.

**Why use it?**

To extract precisely defined slices of a string.

**Example and Step-by-Step Explanation**

```java
String s = "Java Programming";
String sub2 = s.substring(0, 4); // "Java"
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | ... |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | r | ... |

- Step 1: Validate indices (0 to 4).
- Step 2: Create new array with length 4.
- Step 3: Copy chars from index 0 to 3.
- Step 4: New array contains "Java".
- Step 5: Return substring.

***

### 6. `toUpperCase()`

**What is it?**

Returns new string with all letters uppercase.

**Why use it?**

For formatting and case-insensitive operations.

**Example and Step-by-Step Explanation**

```java
String s = "Java Programming";
String upper = s.toUpperCase(); // "JAVA PROGRAMMING"
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | ... |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | ... |

| Index | 0 | 1 | 2 | 3 | 4 | 5 | ... |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | A | V | A |  | P | ... |


***

### 7. `toLowerCase()`

**What is it?**

Returns new string with all letters lowercase.

**Example:**

```java
String lower = s.toLowerCase(); // "java programming"
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | ... |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | ... |

| Index | 0 | 1 | 2 | 3 | 4 | 5 | ... |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | j | a | v | a |  | p | ... |


***

### 8. `trim()`

**What is it?**

Returns new string without leading/trailing whitespace.

**Example:**

```java
String spaced = "   Java Rocks!   ";
String trimmed = spaced.trim(); // "Java Rocks!"
```

**Visual Step-by-Step**


| Index (before trim) | 0 | 1 | 2 | 3 | 4 | 5 | ... | 15 | 16 | 17 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char |  |  |  | J | a | v | a |  |  |  |

Whitespace at positions 0-2 and 15-17 removed:


| Index (after trim) | 0 | 1 | 2 | 3 | 4 | 5 | ... | 12 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | R | o | k |


***

### 9. `indexOf(String str)`

**What is it?**

Returns the lowest index of substring, or -1 if missing.

**Example:**

```java
int pos = s.indexOf("Prog"); // 5
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | r | o | g |

Find "Prog" starting at index 5 → match found.

***

### 10. `lastIndexOf(String str)`

**What is it?**

Returns index of last occurrence of substring.

**Example:**

```java
String fruit = "banana";
int lastPos = fruit.lastIndexOf("a"); // 5
```

**Visual Step-by-Step**


| Index | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | b | a | n | a | n | a |

Last "a" at index 5.

***

### 11. `equals(Object obj)`

**What is it?**

Compares string content for equality.

**Example:**

```java
boolean eq = "Java".equals(new String("Java")); // true
```

**Visual**

Two separate objects with chars:

| J | a | v | a |

are equal character-wise → true.

***

### 12. `equalsIgnoreCase(String str)`

**What is it?**

Compares strings ignoring case differences.

**Example:**

```java
boolean eqIC = "Java".equalsIgnoreCase("JAVA"); // true
```


***

### 13. `contains(CharSequence s)`

**What is it?**

Returns true if substring present anywhere.

**Example:**

```java
boolean hasSub = s.contains("Pro"); // true
```


***

### 14. `replace(CharSequence target, CharSequence replacement)`

**What is it?**

Replaces all occurrences of target with replacement.

**Example:**

```java
String rep = s.replace("Java", "Python"); // "Python Programming"
```

**Visual Explanation of `replace("Java", "Python")`**

Original String: `"Java Programming"`


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |  | P | r | o | g | r | a | m | m | i | n | g |


***

**Step 1: Identify substring `"Java"` at indices 0 to 3**

- Characters to replace:

| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Char | J | a | v | a |


***

**Step 2: Replace with `"Python"`**


| Index (new) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Char | P | y | t | h | o | n |  | P | r | o | g | r | a | m | m | i | n |


***

**Step 3: Resulting String: `"Python Programming"`**

- Notice that the string length increases (from 16 to 18 characters) due to longer replacement.

***

**Summary Table**


| Operation | Affected Indices | Original Chars | Replacement Chars | Length Change |
| :-- | :-- | :-- | :-- | :-- |
| Replace `"Java"` with `"Python"` | 0 - 3 | J a v a | P y t h o n | +2 characters |

***

### 15. `split(String regex)`

**What is it?**

Splits string by regex delimiter into string array.

**Example:**

```java
String csv = "red,green,blue,yellow";
String[] colors = csv.split(",");
```

**Visual Result:**


| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Value | red | green | blue | yellow |


***
## String Comparison: `==` vs `.equals()`

| Operator/Method | Comparison Type | Description |
| :-- | :-- | :-- |
| `==` | Reference equality | Checks if two variables point to the exact same object in memory |
| `.equals()` | Content equality | Checks if two strings have identical sequences of characters |

- Use `.equals()` to reliably compare string contents.
- Use `==` only when checking if two references are identical.

***
