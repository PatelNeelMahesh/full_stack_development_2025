***

```cpp
#include <iostream>   // Header for input/output stream (cout, endl)
#include <string>     // Header for std::string usage
using namespace std;  // To avoid writing std:: before standard library objects

int main() {
    // Printing section header for Data Types
    cout << "======================" << endl;
    cout << "       Data Types       " << endl;
    cout << "======================" << endl << endl;

    // -----------------------------------
    // Primitive Data Types Section
    // -----------------------------------
    cout << "Primitive Data Types" << endl;
    cout << "-------------------" << endl;
    cout << "Examples include basic data types provided by the language." << endl << endl;

    // Integer example
    int intVar = 100; // Declare an integer variable and assign value 100
    cout << "Integer (int):" << endl;
    cout << "  - Whole numbers without decimals." << endl;
    cout << "  - Example: int intVar = 100;" << endl;
    cout << "  - Value: " << intVar << endl << endl;  // Print the integer value

    // Float example
    float floatVar = 3.14f;  // Single precision decimal value
    cout << "Float (float):" << endl;
    cout << "  - Decimal numbers with single precision." << endl;
    cout << "  - Example: float floatVar = 3.14f;" << endl;
    cout << "  - Value: " << floatVar << endl << endl;  // Print float value

    // Double example
    double doubleVar = 3.1415926535;  // Double precision decimal value
    cout << "Double (double):" << endl;
    cout << "  - Decimal numbers with double precision." << endl;
    cout << "  - Example: double doubleVar = 3.1415926535;" << endl;
    cout << "  - Value: " << doubleVar << endl << endl;  // Prints with more digits than float

    // Character example
    char charVar = 'Z';  // Holds a single character
    cout << "Character (char):" << endl;
    cout << "  - Single character." << endl;
    cout << "  - Example: char charVar = 'Z';" << endl;
    cout << "  - Value: " << charVar << endl << endl;

    // Boolean example
    bool boolVar = true;   // Boolean type holds true/false
    cout << "Boolean (bool):" << endl;
    cout << "  - True or false value." << endl;
    cout << "  - Example: bool boolVar = true;" << endl;
    cout << "  - Value: " << (boolVar ? "true" : "false") << endl << endl;
    // (Ternary operator prints "true" if boolVar is true, otherwise "false")

    cout << "==================================" << endl << endl;

    // -----------------------------------
    // Non-Primitive Data Types Section
    // -----------------------------------
    cout << "Non-Primitive Data Types" << endl;
    cout << "-----------------------" << endl;
    cout << "Data types composed of multiple values or complex types." << endl << endl;

    // Array example
    int arr[^4] = {1, 2, 3, 4};  // Array of integers of length 4 stored contiguously in memory
    cout << "Array:" << endl;
    cout << "  - Collection of elements of the same type in contiguous memory." << endl;
    cout << "  - Example: int arr = {1, 2, 3, 4};" << endl;
    cout << "  - Values: ";
    for (int i = 0; i < 4; i++)                  // Loop through array indices
        cout << arr[i] << " ";                  // Access and print each element
    cout << endl << endl;

    // String example (Class-based non-primitive type)
    string str = "Data Types";  // String object holds sequence of characters
    cout << "String:" << endl;
    cout << "  - Sequence of characters." << endl;
    cout << "  - Example: string str = \"Data Types\";" << endl;
    cout << "  - Value: " << str << endl << endl;

    // Structure example
    cout << "Structure (struct):" << endl;
    cout << "  - Groups variables of different types together." << endl;
    cout << "  - Each member has its own memory." << endl;
    cout << "Syntax:" << endl;
    cout << "struct Person {" << endl;
    cout << "  int age;" << endl;
    cout << "  string name;" << endl;
    cout << "};" << endl;
    
    // Define struct with multiple types (int + string)
    struct Person {
        int age;
        string name;
    };
    // Create instance of struct Person
    Person p1 = {30, "John"}; // Initialize struct with values
    cout << "Example instance: age = " << p1.age << ", name = " << p1.name << endl << endl;

    // Union example
    cout << "Union:" << endl;
    cout << "  - All members share the same memory location." << endl;
    cout << "  - Only one member can hold a value at one time." << endl;
    cout << "Syntax:" << endl;
    cout << "union Data {" << endl;
    cout << "  int i;" << endl;
    cout << "  float f;" << endl;
    cout << "};" << endl;

    // Define Union
    union Data {
        int i;     // stores integer
        float f;   // or stores float in the SAME memory location
    };
    Data d;
    d.i = 10;                             // Assign int value
    cout << "Set d.i = 10; value = " << d.i << endl;
    d.f = 98.6;                           // Overwrites earlier int value with float
    cout << "Set d.f = 98.6; value = " << d.f << endl << endl;

    // Enumeration example
    cout << "Enumeration (enum):" << endl;
    cout << "  - User-defined type consisting of named integral constants." << endl;
    cout << "  - Improves code readability." << endl;
    cout << "Syntax:" << endl;
    cout << "enum Day { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };" << endl;

    // Define and use enum
    enum Day { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    Day today = Friday;  // Assign enum a value
    // Enum internally maps names to integer values: Sunday=0, Monday=1, ..., Friday=5
    cout << "Example: today = Friday; enum value = " << today << endl;

    return 0;  // Successful run of the program
}
```


***

### Expected Console Output (README style)

```
======================
       Data Types       
======================

Primitive Data Types
-------------------
Examples include basic data types provided by the language.

Integer (int):
  - Whole numbers without decimals.
  - Example: int intVar = 100;
  - Value: 100

Float (float):
  - Decimal numbers with single precision.
  - Example: float floatVar = 3.14f;
  - Value: 3.14

Double (double):
  - Decimal numbers with double precision.
  - Example: double doubleVar = 3.1415926535;
  - Value: 3.14159

Character (char):
  - Single character.
  - Example: char charVar = 'Z';
  - Value: Z

Boolean (bool):
  - True or false value.
  - Example: bool boolVar = true;
  - Value: true


==================================

Non-Primitive Data Types
-----------------------
Data types composed of multiple values or complex types.

Array:
  - Collection of elements of the same type in contiguous memory.
  - Example: int arr[^4] = {1, 2, 3, 4};
  - Values: 1 2 3 4 

String:
  - Sequence of characters.
  - Example: string str = "Data Types";
  - Value: Data Types

Structure (struct):
  - Groups variables of different types together.
  - Each member has its own memory.
Syntax:
struct Person {
  int age;
  string name;
};
Example instance: age = 30, name = John

Union:
  - All members share the same memory location.
  - Only one member can hold a value at one time.
Syntax:
union Data {
  int i;
  float f;
};
Set d.i = 10; value = 10
Set d.f = 98.6; value = 98.6

Enumeration (enum):
  - User-defined type consisting of named integral constants.
  - Improves code readability.
Syntax:
enum Day { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
Example: today = Friday; enum value = 5
```


***

### ⏱ Time \& 💾 Space Complexity Analysis

Since this code is a **demonstration program** (not algorithms on large inputs), operations are constant in nature. Still, here’s the breakdown:

1. **Primitive Type Assignments (int, float, double, char, bool)**
    - **Time Complexity:** O(1) (Direct assignment and print)
    - **Space Complexity:** O(1) (Each variable fixed size in memory)
2. **Array Demonstration (`for` loop printing elements)**
    - **Time Complexity:** O(n) (Loop traverses each element once, here n=4)
    - **Space Complexity:** O(n) (Array holds n elements)
3. **String (C++ `std::string`)**
    - **Time Complexity for creation:** O(m) (m = length of string, needs to copy)
    - **Access/print:** O(m) (output character by character internally)
    - **Space Complexity:** O(m)
4. **Structure (`struct Person`)**
    - **Time Complexity:** O(1) (assignment \& access of members are constant time)
    - **Space Complexity:** O(sum of member sizes) (Independent storage for each)
5. **Union (`union Data`)**
    - **Time Complexity:** O(1) (assignment overwrites same memory location)
    - **Space Complexity:** O(max(member sizes)) (memory large enough for largest member only)
6. **Enumeration (`enum Day`)**
    - **Time Complexity:** O(1) (mapping enums to integers and printing)
    - **Space Complexity:** O(1) (just integer storage representation)

***
