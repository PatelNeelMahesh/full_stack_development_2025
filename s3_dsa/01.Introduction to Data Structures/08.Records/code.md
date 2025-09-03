
```cpp
#include <iostream>   // Required for input/output operations (cout, endl)
#include <string>     // Required for using std::string data type
using namespace std;  // To avoid writing std::cout etc.

int main() {
    // Print heading for program
    cout << "==========================" << endl;
    cout << "         Records          " << endl;
    cout << "==========================" << endl << endl;

    // Section heading for explaining structures
    cout << "Structure and Representation" << endl;
    cout << "----------------------------" << endl;

    // General explanation text
    cout << "  - A structure (also called record) in C++ is a user-defined data type" << endl;
    cout << "    that groups variables of different data types under a single name." << endl;
    cout << "  - Structures are useful to represent a record, for example," << endl;
    cout << "    a student record with name, id, and marks together." << endl << endl;

    // Show the syntax of a structure
    cout << "Syntax to define a structure:" << endl;
    cout << "  struct StructureName {" << endl;
    cout << "      datatype member1;" << endl;
    cout << "      datatype member2;" << endl;
    cout << "      ..." << endl;
    cout << "  };" << endl << endl;

    cout << "Example:" << endl;

    // ------------------------
    // Defining a Structure
    // ------------------------
    struct Student {
        int id;        // Integer field for student ID
        string name;   // String field for student Name
        float marks;   // Floating-point field for marks
    };

    // Show structure definition in output
    cout << "struct Student {" << endl;
    cout << "  int id;" << endl;
    cout << "  string name;" << endl;
    cout << "  float marks;" << endl;
    cout << "};" << endl << endl;

    cout << "Creating and accessing a structure variable:" << endl;

    Student s1;  // Declare structure variable (object)

    // Assign values using dot operator
    s1.id = 101;             // Assign student ID
    s1.name = "Alice";       // Assign student name
    s1.marks = 89.5;         // Assign student marks

    // Display assigned values
    cout << "Student ID: " << s1.id << endl;
    cout << "Student Name: " << s1.name << endl;
    cout << "Student Marks: " << s1.marks << endl << endl;

    cout << "Accessing members is done using the dot (.) operator." << endl;

    // ------------------------
    // Nested Structure Example
    // ------------------------
    struct Date {
        int day;
        int month;
        int year;
    };

    struct StudentWithDOB {
        int id;
        string name;
        Date dob;  // Nested structure included
        float gpa;
    };

    StudentWithDOB s2;           // Create object of nested structure
    s2.id = 102;
    s2.name = "Bob";
    s2.dob.day = 20;             // Access nested members using dot operator twice
    s2.dob.month = 5;
    s2.dob.year = 2001;
    s2.gpa = 3.6;

    cout << "\nNested Structure Example:" << endl;
    cout << "Student ID: " << s2.id << endl;
    cout << "Student Name: " << s2.name << endl;
    cout << "DOB: " << s2.dob.day << "/" << s2.dob.month << "/" << s2.dob.year << endl;
    cout << "GPA: " << s2.gpa << endl;

    // ------------------------
    // Pointer to Structure Example
    // ------------------------
    struct Employee {
        int empId;
        int age;
        float salary;
    };

    Employee emp1 = {2001, 30, 75000.50}; // Initialize employee record

    Employee* ptr = &emp1; // Pointer stores address of emp1

    cout << "\nPointer to Structure Example:" << endl;
    cout << "Employee ID: " << ptr->empId << endl;   // Access members using arrow operator ->
    cout << "Employee Age: " << ptr->age << endl;
    cout << "Employee Salary: " << ptr->salary << endl;

    return 0; // End of program
}
```


***

## 📗 Expected Console Output

```
==========================
         Records          
==========================

Structure and Representation
----------------------------
  - A structure (also called record) in C++ is a user-defined data type
    that groups variables of different data types under a single name.
  - Structures are useful to represent a record, for example,
    a student record with name, id, and marks together.

Syntax to define a structure:
  struct StructureName {
      datatype member1;
      datatype member2;
      ...
  };

Example:
struct Student {
  int id;
  string name;
  float marks;
};

Creating and accessing a structure variable:
Student ID: 101
Student Name: Alice
Student Marks: 89.5

Accessing members is done using the dot (.) operator.

Nested Structure Example:
Student ID: 102
Student Name: Bob
DOB: 20/5/2001
GPA: 3.6

Pointer to Structure Example:
Employee ID: 2001
Employee Age: 30
Employee Salary: 75000.5
```


***

## ⏱ Time and 💾 Space Complexity Analysis

### 1. Basic Structure (Student with id, name, marks)

- **Accessing members (`s1.id`, `s1.name`, `s1.marks`)**
    - Time Complexity: **O(1)** (direct offset access in memory).
    - Space Complexity: **O(1)** (fixed memory = sum of int + string + float sizes).

***

### 2. Nested Structures (StudentWithDOB containing Date)

- **Accessing nested members (`s2.dob.day`)**
    - Time Complexity: **O(1)** (compiled as direct offset inside struct).
    - Space Complexity: **O(1)** (struct size = `int id` + `string` + nested `Date` (3×int) + `float`).

***

### 3. Pointers to Structures (Employee with pointer `ptr`)

- **Access using arrow operator (`ptr->empId`)**
    - Time Complexity: **O(1)** (one pointer dereference + offset calculation).
    - Space Complexity: **O(1)** (fixed extra space = size of pointer, typically 4 bytes or 8 bytes).

***

### 4. Summary Table

| Operation | Time Complexity | Space Complexity | Explanation |
| :-- | :-- | :-- | :-- |
| Access struct member (dot) | O(1) | O(1) | Direct memory offset lookup |
| Access nested struct member | O(1) | O(1) | Offset inside nested struct |
| Access via pointer (`->`) | O(1) | O(1) | One dereference + offset |
| Creating struct variable | O(1) | O(1) | Fixed size type, allocated at compile/run time |


***
