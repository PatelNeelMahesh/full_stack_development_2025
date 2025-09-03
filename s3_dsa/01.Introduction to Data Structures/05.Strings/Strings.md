# Strings


***

## Introduction to Strings

In computer science, a **string** is a sequence of characters used to represent text. Strings are one of the most important data types in programming and are widely used in software development, data processing, and communication systems.

Strings allow you to store, manipulate, and analyze textual data such as names, sentences, commands, or any collection of characters.

In most programming languages, including C++, strings are treated as arrays of characters ending with a special null terminator (`\0`). Modern languages provide dedicated string classes with useful built-in operations.

***

## Operations on Strings

Here are fundamental operations on strings including how they work, why they are used, and code examples with explanations.

***

### 1. Concatenation

**What it does:** Joins two or more strings end-to-end to form a new string.

**Why use it:** To combine multiple pieces of text into one logical sequence, e.g., building messages, file paths, or HTML content.

**How it works:** Uses the `+` operator or `append()` method to create a new string containing all characters sequentially.

**Code Example:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "Hello, ";
    string str2 = "World!";
    string result = str1 + str2;  // Concatenation
    cout << result << endl;       // Outputs: Hello, World!
    return 0;
}
```

**Explanation:**

- `str1 + str2` creates a new string by copying all characters from `str1` followed by all from `str2`.
- This method is straightforward and intuitive, making string combination simple and readable.
- Useful in constructing dynamic outputs or composing user messages.

***

### 2. Comparison

**What it does:** Checks if two strings are equal or determines which one comes first lexicographically.

**Why use it:** Essential for sorting, searching, and conditional logic based on text.

**How it works:** Uses relational operators (`==`, `!=`, `<`, `>`) which compare characters sequentially until a difference is found.

**Code Example:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "apple";
    string str2 = "banana";

    if (str1 == str2)
        cout << "Strings are equal." << endl;
    else if (str1 > str2)
        cout << str1 << " is greater than " << str2 << endl;
    else
        cout << str1 << " is less than " << str2 << endl;

    return 0;
}
```

**Explanation:**

- The comparison operators check characters position-wise starting from the first character.
- Once a difference is detected, the lexicographic order determines the result.
- Used to implement sorting and searching algorithms on textual data.

***

### 3. Substring Extraction

**What it does:** Extracts a smaller part (substring) from the original string.

**Why use it:** To isolate specific information or manipulate parts of strings, such as parsing user input or file names.

**How it works:** The `.substr()` method takes starting index and length to return the specified slice.

**Code Example:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";
    string sub = str.substr(7, 5);  // Extract 5 characters from index 7
    cout << sub << endl;            // Outputs: World
    return 0;
}
```

**Explanation:**

- `str.substr(7, 5)` extracts a sequence starting at index 7 with length 5.
- Efficient way to get parts of strings without manual copying.
- Common in text processing tasks.

***

### 4. Searching

**What it does:** Finds the position of a substring or character within another string.

**Why use it:** Needed to locate data or detect presence of substrings within larger text.

**How it works:** The `find()` method scans the string and returns the first occurrence’s index or `string::npos` if not found.

**Code Example:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Learn Data Structures";
    size_t pos = str.find("Data");

    if (pos != string::npos)
        cout << "'Data' found at position: " << pos << endl;
    else
        cout << "'Data' not found." << endl;

    return 0;
}
```

**Explanation:**

- `str.find("Data")` looks for substring `"Data"` inside `str`.
- Returns the index of the first matching occurrence.
- If not found, returns a special constant `string::npos`.
- Useful for validation and conditional processing based on text content.

***

### 5. Length of a String

**What it does:** Returns the number of characters in a string.

**Why use it:** Important to control loops, allocate buffers, or validate input.

**How it works:** The `.length()` or `.size()` methods query the internal size attribute.

**Code Example:**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";
    cout << "Length: " << str.length() << endl;  // Outputs: 13
    return 0;
}
```

**Explanation:**

- These methods provide constant-time access to string length.
- Avoid manually counting characters for efficiency.

***

### 6. Modification

Strings can be changed by appending characters, inserting substrings, or replacing parts.

**Why use it:** For editing text, building new strings from parts, or formatting.

**How it works:** String class provides methods like `.append()`, `.insert()`, and `.replace()` operating on the internal buffer.

**Examples:**

- **Appending:**

```cpp
string str = "Hello";
str += " World";
cout << str << endl;  // Outputs: Hello World
```

- **Insertion:**

```cpp
string str = "Helo";
str.insert(2, "l");   // Inserts 'l' at index 2
cout << str << endl;  // Outputs: Hello
```

- **Replacement:**

```cpp
string str = "Hello World";
str.replace(6, 5, "CPP");    // Replaces 5 characters from index 6 with "CPP"
cout << str << endl;         // Outputs: Hello CPP
```

**Explanation:**

- `.append()` or `+=` adds to the end.
- `.insert(pos, str)` inserts at given position.
- `.replace(start, length, str)` substitutes part of the string.
- These operations internally adjust the character array efficiently.

***

### 7. String Conversion between Number and String

**Why use it:** To handle numeric data as string or vice versa when dealing with input/output or formatting.

**Examples:**

- String to integer:

```cpp
string numStr = "123";
int num = stoi(numStr);
```

- Integer to string:

```cpp
int num = 456;
string numStr = to_string(num);
```

**Explanation:**

- `stoi()` parses string to number.
- `to_string()` converts numbers to string format.
- Useful in parsing user input or formatting output.

***

## Summary Table of Common String Operations

| Operation | Description | Example Function/Method | Typical Complexity |
| :-- | :-- | :-- | :-- |
| Concatenation | Join strings end-to-end | `+`, `.append()` | $O(m + n)$ for two strings of length $m$ and $n$ |
| Comparison | Check equality or lexicographic order | `==`, `<`, `.compare()` | $O(n)$ |
| Substring Extraction | Extract portion of string | `.substr(pos, len)` | $O(len)$ |
| Searching | Find substring or character | `.find()`, `.rfind()` | $O(n)$ |
| Length | Get string length | `.length()`, `.size()` | $O(1)$ |
| Append | Add string or character at the end | `.append()`, `+=` | Amortized $O(1)$ |
| Insertion | Insert into string at position | `.insert(pos, str)` | $O(n)$ |
| Replacement | Replace a part of the string | `.replace(pos,len,str)` | $O(n)$ |
| Conversion (string to int) | Parse string as integer | `stoi()`, `stol()` | $O(n)$ |
| Conversion (int to string) | Convert integer to string | `to_string()` | $O(\log n)$ |


***

## Conclusion

Strings are versatile and fundamental data types for textual data management. Understanding and effectively using operations like concatenation, comparison, substring extraction, searching, modification, and conversion equips you with the tools to handle a broad range of programming challenges.
