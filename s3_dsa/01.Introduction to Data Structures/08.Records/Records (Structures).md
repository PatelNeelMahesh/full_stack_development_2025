# Records (Structures)


***

## Structure and Representation


***

### What is a Record (Structure)?

In programming, a **record** (also known as a **structure** or `struct` in C/C++) is a **user-defined data type** that groups together variables (called **members** or **fields**) of different data types under a single name. This allows storing and manipulating different related data values as a single entity.

Unlike arrays, which store elements of the same type in a contiguous block, structures can contain multiple data types (e.g., integers, floats, strings) grouped logically.

***

### Why Use Structures?

- **Group related data:** For example, an employee record can combine a name (string), age (int), and salary (float).
- **Improved organization:** Makes code more readable and maintainable by logically grouping data.
- **Facilitates passing complex data:** Pass an entire record as a single argument to functions.
- **Foundation for complex data structures:** Used to build linked lists, trees, graphs where nodes contain multiple fields.

***

### Structure Declaration Syntax in C++

```cpp
struct StructureName {
    data_type member1;
    data_type member2;
    // ... other members
};
```

- `struct` is the keyword to declare a structure.
- `StructureName` is the user-defined name of the structure.
- `member1`, `member2`, etc. are variables of possibly different types grouped together.

***

### Example: Defining an Employee Record

```cpp
struct Employee {
    char name[^50];   // Character array to store the name
    int age;         // Integer to store age
    float salary;    // Floating-point to store salary
};
```

- This structure `Employee` contains three members of types `char[]`, `int`, and `float`.

***

### Structure Variable Declaration

Once a structure is defined, variables of that type can be created:

```cpp
Employee emp1, emp2;
```

Alternatively, variables can be declared at the time of structure definition:

```cpp
struct Employee {
    char name[^11];
    int age;
    float salary;
} emp1, emp2;
```


***

### Accessing Members

Use the **dot operator (`.`)** to access or modify members of a structure variable.

```cpp
emp1.age = 30;
strcpy(emp1.name, "John Doe");
emp1.salary = 55000.50;
```


***

### Complete Example Program

```cpp
#include <iostream>
#include <cstring>  // for strcpy
using namespace std;

struct Employee {
    char name[^11];
    int age;
    float salary;
};

int main() {
    Employee emp1;

    // Assign values to members
    strcpy(emp1.name, "Alice Smith");
    emp1.age = 28;
    emp1.salary = 65000.75;

    // Display employee information
    cout << "Name: " << emp1.name << endl;
    cout << "Age: " << emp1.age << endl;
    cout << "Salary: $" << emp1.salary << endl;

    return 0;
}
```

**Explanation:**

- `strcpy()` is used to copy string literals into the character array member `name`.
- Each member is accessed via `emp1.member_name`.
- This groups different types of data logically together as part of `emp1`.

***

### Memory Layout of Structure

Each member is stored consecutively in memory with possible padding for alignment:


| Member | Type | Size (bytes) | Example Value |
| :-- | :-- | :-- | :-- |
| `name` | char[^11] | 50 | "Alice Smith" |
| `age` | int | 4 | 28 |
| `salary` | float | 4 | 65000.75 |

The total size is roughly the sum of all members plus any padding added by the compiler.

***

## 1. Nested Structures in C++

### 🔹 What are Nested Structures?

A **nested structure** means having a structure as a member inside another structure.
This allows creating **hierarchical data models**, where one real-world entity contains another.

***

### 🔹 Example: Student with Date of Birth

```cpp
#include <iostream>
using namespace std;

// Define Date structure
struct Date {
    int day;    // Stores day of birth
    int month;  // Stores month of birth
    int year;   // Stores year of birth
};

// Define Student structure which *nests* Date
struct Student {
    char name[11]; // Character array for name (10 chars + null terminator)
    Date dob;      // Nested Structure: Each Student has a Date of Birth
    float gpa;     // GPA value of student
};

int main() {
    Student s1;  // Create a student

    // Assign values
    strcpy(s1.name, "Alice");  // Assign name
    s1.dob.day = 15;           // Access nested struct: Date → day
    s1.dob.month = 8;          // Access nested struct: Date → month
    s1.dob.year = 2000;        // Access nested struct: Date → year
    s1.gpa = 3.85f;            // Assign GPA

    // Display values
    cout << "Student Name: " << s1.name << endl;
    cout << "Date of Birth: " << s1.dob.day << "/" << s1.dob.month << "/" << s1.dob.year << endl;
    cout << "GPA: " << s1.gpa << endl;
}
```


***

### 🔹 Step-by-step Explanation

1. **`struct Date`** → Defines day, month, year.
2. **`struct Student`** → Contains `name`, a nested `Date` structure (`dob`), and `gpa`.
3. **Assigning values** → Access nested members using **dot notation** twice:
    - `s1.dob.day = 15;`
    - Outer struct = `s1`, inner struct = `dob`.
4. **Displaying values** → Prints all details of student including nested date.

***

### 🔹 Representation in Memory

```
Student s1
--------------------------------------------------
| name[11] | dob.day | dob.month | dob.year | gpa |
--------------------------------------------------
```

The `dob` itself is structured into `day`, `month`, `year` inside the `Student`.

***

## 2. Pointers to Structures in C++

### 🔹 What are Pointers to Structures?

Like normal variables, a structure variable also resides in memory. A **pointer to a structure** stores the address of a structure, allowing efficient **indirect access**.

You access structure members via:

- `(*ptr).member` (dereference + dot), or
- shorthand `ptr->member` (**arrow operator**).

***

### 🔹 Example: Employee with Pointer

```cpp
#include <iostream>
using namespace std;

struct Employee {
    int id;
    int age;
    float salary;
};

int main() {
    Employee emp1 = {1001, 25, 55000.50}; // Create and initialize

    Employee* ptr = &emp1;  // Pointer stores address of emp1

    // Access structure through pointer
    cout << "Employee ID: " << ptr->id << endl;
    cout << "Employee Age: " << ptr->age << endl;
    cout << "Employee Salary: " << ptr->salary << endl;

    return 0;
}
```


***

### 🔹 Step-by-step Explanation

1. **`Employee emp1`** → creates struct with `id, age, salary`.
2. **`Employee* ptr = &emp1;`** → creates pointer pointing to `emp1`'s memory.
3. Using **arrow operator `->`**:
    - `ptr->id` → gets `1001`.
    - `ptr->age` → gets `25`.
    - `ptr->salary` → gets `55000.50`.

***

### 🔹 Representation

```
Memory Layout of emp1:
--------------------------------------
| id = 1001 | age = 25 | salary = 55000.50 |
--------------------------------------

ptr ---> points to emp1
```

Using `ptr->field` retrieves each value.

***

## 3. Comparison of Structures vs Classes in C++

In C++, **structures and classes are almost identical**. The main difference lies in **default access control**.

***

### 🔹 Structures

- Default member access = **public**
- Used for **grouping data** (without complex behavior)
- Syntax:

```cpp
struct Point {
    int x, y;
};

Point p1;
p1.x = 10;    // Valid, since members public by default
```


***

### 🔹 Classes

- Default member access = **private**
- Used for **data hiding, encapsulation, OOP principles**
- Syntax:

```cpp
class Point {
    int x, y;   // private by default
public:
    void setXY(int a, int b) { x = a; y = b; }
    void printXY() { cout << x << ", " << y << endl; }
};

Point p1;
// p1.x = 10; ❌ ERROR: private access
p1.setXY(10, 20); // ✅ Allowed through public method
p1.printXY();
```


***

### 🔹 Comparative Table

| Feature | Structure in C++ | Class in C++ |
| :-- | :-- | :-- |
| Default Access | **public** | **private** |
| Encapsulation | Limited (explicit private needed) | Strong (default private) |
| Use case | Simple data groups (records) | Full OOP (hiding + methods) |
| Supports Methods? | ✅ Yes | ✅ Yes |
| Suitable for | Models like `Date`, `Point` | Entities with behavior like `BankAccount`, `Car` |


***

## ✅ Final Recap for Learners

1. **Nested Structures** → A structure can contain another structure. Example: `Student` has a nested `Date`. Access with dot notation twice.
    - Representation: `s1.dob.day` accesses inner members.
2. **Pointers to Structures** → Instead of copying full object, use pointers to directly access structure in memory. Access with `->`.
    - Example: `ptr->age` gives the employee’s age.
3. **Structures vs Classes** → Both can hold data + methods, but:
    - Structures default to **public** access.
    - Classes default to **private** access and emphasize **OOP principles**.

***

### Summary Table: Structure Declaration and Usage

| Concept | Syntax / Description |
| :-- | :-- |
| Structure Declaration | `struct Name { data_type member1; ... };` |
| Variable Declaration | `Name var1, var2;` or inline at declaration |
| Member Access | `var.member` |
| Nested Structures | Structures can include other structures as members |
| Pointer to Structure | `Type* ptr = &var; ptr->member` |


***

### Practical Use Cases

- Employee, Student records.
- Geographical locations (latitude, longitude).
- Product details in inventory systems.
- Data packets in networking.

***
