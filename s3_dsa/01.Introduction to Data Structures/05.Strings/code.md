```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "==========================" << endl;
    cout << "         Strings          " << endl;
    cout << "==========================" << endl << endl;

    // Introduction to Strings
    cout << "Introduction to Strings" << endl;
    cout << "-----------------------" << endl;
    cout << "  - A String is a sequence of characters stored as a single data type." << endl;
    cout << "  - In C++, strings can be represented using the std::string class." << endl;
    cout << "  - Example: string greeting = \"Hello World\";" << endl;
    string greeting = "Hello World";
    cout << "  - Sample string: " << greeting << endl << endl;

    // Operations on Strings
    cout << "Operations on Strings" << endl;
    cout << "---------------------" << endl;

    // Concatenation
    cout << "1. Concatenation" << endl;
    cout << "   - Combine two strings into one." << endl;
    cout << "   - Using + operator or append() function." << endl;
    string s1 = "Data ";
    string s2 = "Structures";
    cout << "   - Example using + operator: string s3 = s1 + s2;" << endl;
    string s3 = s1 + s2;
    cout << "   - Result: " << s3 << endl;
    cout << "   - Example using append(): s1.append(s2);" << endl;
    s1.append(s2);
    cout << "   - Result after append(): " << s1 << endl << endl;

    // Comparison
    cout << "2. Comparison" << endl;
    cout << "   - Compare strings using == or compare() functions." << endl;
    string a = "apple";
    string b = "banana";
    cout << "   - Example: compare 'apple' and 'banana'" << endl;
    cout << "   - a == b? " << (a == b ? "Yes" : "No") << endl;
    cout << "   - a.compare(b): " << a.compare(b) << " (negative means a < b)" << endl << endl;

    // Substring
    cout << "3. Substring" << endl;
    cout << "   - Extract a portion of the string using substr()." << endl;
    string full = "DataStructures";
    cout << "   - Example: substring = full.substr(4, 9);" << endl;
    string sub = full.substr(4, 9);
    cout << "   - Result substring: " << sub << endl << endl;

    // Length
    cout << "4. Length of String" << endl;
    cout << "   - Find number of characters using length() or size()." << endl;
    string text = "Algorithms";
    cout << "   - String: " << text << endl;
    cout << "   - Length: " << text.length() << endl << endl;

    // Find
    cout << "5. Find Substring or Character" << endl;
    cout << "   - Use find() to locate substring or character position." << endl;
    string sentence = "Data Structures and Algorithms";
    cout << "   - Searching for 'Algorithms' in sentence." << endl;
    size_t pos = sentence.find("Algorithms");
    if (pos != string::npos)
        cout << "   - Found at position: " << pos << endl;
    else
        cout << "   - Not found." << endl;
    cout << endl;

    // Replace
    cout << "6. Replace Substring" << endl;
    cout << "   - Use replace() to substitute part of string." << endl;
    string phrase = "I love coding";
    cout << "   - Original phrase: " << phrase << endl;
    phrase.replace(7, 6, "DSA");
    cout << "   - After replace: " << phrase << endl << endl;

    // Insert
    cout << "7. Insert Substring" << endl;
    cout << "   - Insert substring at specific position using insert()." << endl;
    string str = "Data Structures";
    cout << "   - Original string: " << str << endl;
    str.insert(5, "and Algorithms ");
    cout << "   - After insert: " << str << endl << endl;

    // Erase
    cout << "8. Erase Substring" << endl;
    cout << "   - Remove portion of string using erase()." << endl;
    string removeStr = "Data and Algorithms";
    cout << "   - Original: " << removeStr << endl;
    removeStr.erase(4, 4); // Remove " and"
    cout << "   - After erase: " << removeStr << endl << endl;

    return 0;
}
```


***

### Expected Console Output (README format):

```
==========================
         Strings          
==========================

Introduction to Strings
-----------------------
  - A String is a sequence of characters stored as a single data type.
  - In C++, strings can be represented using the std::string class.
  - Example: string greeting = "Hello World";
  - Sample string: Hello World

Operations on Strings
---------------------
1. Concatenation
   - Combine two strings into one.
   - Using + operator or append() function.
   - Example using + operator: string s3 = s1 + s2;
   - Result: Data Structures
   - Example using append(): s1.append(s2);
   - Result after append(): Data Structures

2. Comparison
   - Compare strings using == or compare() functions.
   - Example: compare 'apple' and 'banana'
   - a == b? No
   - a.compare(b): -1 (negative means a < b)

3. Substring
   - Extract a portion of the string using substr().
   - Example: substring = full.substr(4, 9);
   - Result substring: Structures

4. Length of String
   - Find number of characters using length() or size().
   - String: Algorithms
   - Length: 10

5. Find Substring or Character
   - Use find() to locate substring or character position.
   - Searching for 'Algorithms' in sentence.
   - Found at position: 20

6. Replace Substring
   - Use replace() to substitute part of string.
   - Original phrase: I love coding
   - After replace: I love DSA

7. Insert Substring
   - Insert substring at specific position using insert().
   - Original string: Data Structures
   - After insert: Data and Algorithms Structures

8. Erase Substring
   - Remove portion of string using erase().
   - Original: Data and Algorithms
   - After erase: Data Algorithms
```


***
