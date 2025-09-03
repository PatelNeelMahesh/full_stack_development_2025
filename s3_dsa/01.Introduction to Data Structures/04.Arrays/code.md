***

```cpp
#include <iostream>   // Required for input/output operations (cout, endl)
using namespace std;

int main() {
    // Displaying a formatted title section for arrays
    cout << "==========================" << endl;
    cout << "         Arrays           " << endl;
    cout << "==========================" << endl << endl;

    // ----------------------------
    // Introduction Section Output
    // ----------------------------
    cout << "Introduction to Arrays" << endl;
    cout << "-----------------------" << endl;
    cout << "  - An array is a linear data structure consisting of a collection" << endl;
    cout << "    of elements, each identified by an index or a key." << endl;
    cout << "  - Elements are stored in contiguous memory locations." << endl;
    cout << "  - All elements must be of the same data type." << endl;
    cout << "  - Indexing starts from 0." << endl << endl;

    // ----------------------------
    // Linear Arrays Representation
    // ----------------------------
    cout << "Linear Arrays and Their Representation" << endl;
    cout << "-------------------------------------" << endl;
    cout << "  - Linear array is the simplest form of array where elements are arranged" << endl;
    cout << "    sequentially in a straight line." << endl;
    cout << "  - Elements can be accessed using index numbers." << endl;
    cout << "  - Representation in memory:" << endl;
    cout << "    Each element is at address: base_address + (index * size_of_element)" << endl << endl;

    // ----------------------------
    // Example: Declare and initialize array
    // ----------------------------
    cout << "Example: Integer Array of Size 6" << endl;
    int arr[6] = {10, 20, 30, 40, 50, 60};      // Declare and initialize array
    cout << "Array elements and their indices:" << endl;
    for (int i = 0; i < 6; i++) {               // Loop to print index and corresponding value
        cout << "  arr[" << i << "] = " << arr[i] << endl;
    }
    cout << endl;

    // ----------------------------
    // Accessing element
    // ----------------------------
    cout << "Accessing element at index 3:" << endl;
    cout << "  arr[3] = " << arr << endl << endl;   // Direct access using index

    // ----------------------------
    // Finding length of array using sizeof
    // ----------------------------
    cout << "Length of array:" << endl;
    int length = sizeof(arr) / sizeof(arr);  // Total memory / memory of one element = length
    cout << "  Number of elements in arr: " << length << endl << endl;

    // ----------------------------
    // Traversing array (printing each element)
    // ----------------------------
    cout << "Traversing the array:" << endl;
    for (int i = 0; i < length; i++) {          // Sequentially print values
        cout << "  Element at index " << i << " is " << arr[i] << endl;
    }
    cout << endl;

    // ----------------------------
    // Updating Elements in an array
    // ----------------------------
    cout << "Updating element at index 4 from " << arr[4] << " to 100" << endl;
    arr = 100;                               // Replacing existing value at index 4
    cout << "Updated array elements:" << endl;
    for (int i = 0; i < length; i++) {          
        cout << "  arr[" << i << "] = " << arr[i] << endl;
    }
    cout << endl;

    // ----------------------------
    // Inserting element (here overwrite demonstration only)
    // ----------------------------
    cout << "Inserting element 70 at index 5 (overwrite):" << endl;
    arr[5] = 70;                                // Overwrites element at index 5
    cout << "Array elements after insertion:" << endl;
    for (int i = 0; i < length; i++) {
        cout << "  arr[" << i << "] = " << arr[i] << endl;
    }
    cout << endl;

    // ----------------------------
    // Searching element (Linear Search)
    // ----------------------------
    cout << "Searching for element 30 in array:" << endl;
    bool found = false;
    int pos = -1;
    for (int i = 0; i < length; i++) {          // Loop through each index
        if (arr[i] == 30) {                     // Compare with key (30 in this case)
            found = true;                       // If match found, update flag
            pos = i;                            // Store index
            break;                              // Exit loop early
        }
    }
    if (found)
        cout << "  Element 30 found at index: " << pos << endl;
    else
        cout << "  Element not found in array." << endl;
    cout << endl;

    // ----------------------------
    // Deleting element (simulate by shifting left)
    // ----------------------------
    cout << "Deleting element at index 2:" << endl;
    for (int i = 2; i < length - 1; i++) {      // Start from delete index
        arr[i] = arr[i + 1];                    // Shift each element one step left
    }
    arr[length - 1] = 0;                        // Last position invalidated (optional)
    cout << "Array after deletion:" << endl;
    for (int i = 0; i < length; i++) {
        cout << "  arr[" << i << "] = " << arr[i] << endl;
    }
    cout << endl;

    return 0;                                   // Successful program execution
}
```


***

### Expected Console Output (README style)

```
==========================
         Arrays           
==========================

Introduction to Arrays
-----------------------
  - An array is a linear data structure consisting of a collection
    of elements, each identified by an index or a key.
  - Elements are stored in contiguous memory locations.
  - All elements must be of the same data type.
  - Indexing starts from 0.

Linear Arrays and Their Representation
-------------------------------------
  - Linear array is the simplest form of array where elements are arranged
    sequentially in a straight line.
  - Elements can be accessed using index numbers.
  - Representation in memory:
    Each element is at address: base_address + (index * size_of_element)

Example: Integer Array of Size 6
Array elements and their indices:
  arr[0] = 10
  arr = 20
  arr = 30
  arr = 40
  arr = 50
  arr = 60

Accessing element at index 3:
  arr = 40

Length of array:
  Number of elements in arr: 6

Traversing the array:
  Element at index 0 is 10
  Element at index 1 is 20
  Element at index 2 is 30
  Element at index 3 is 40
  Element at index 4 is 50
  Element at index 5 is 60

Updating element at index 4 from 50 to 100
Updated array elements:
  arr = 10
  arr = 20
  arr = 30
  arr = 40
  arr = 100
  arr = 60

Inserting element 70 at index 5 (overwrite):
Array elements after insertion:
  arr = 10
  arr = 20
  arr = 30
  arr = 40
  arr = 100
  arr = 70

Searching for element 30 in array:
  Element 30 found at index: 2

Deleting element at index 2:
Array after deletion:
  arr = 10
  arr = 20
  arr = 40
  arr = 100
  arr = 70
  arr = 0
```


***

### **Time \& Space Complexity Analysis of Each Operation in Code**

1. **Accessing element by index (`arr`)**
    - Time: **O(1)** (direct address calculation)
    - Space: **O(1)** (no extra memory required)
2. **Finding length using `sizeof`**
    - Time: **O(1)** (just division of sizes at compile/runtime)
    - Space: **O(1)**
3. **Traversing array (looping)**
    - Time: **O(n)** (visits each element once)
    - Space: **O(1)**
4. **Updating array element (`arr = 100`)**
    - Time: **O(1)** (direct access and assignment)
    - Space: **O(1)**
5. **Inserting element (overwrite at index)**
    - Time: **O(1)** here (since overwrite, no shifting)
    - Normally a mid-array insert is **O(n)**
    - Space: **O(1)**
6. **Searching element (Linear Search)**
    - Time: **O(n)** (in worst case, must check all elements)
    - Space: **O(1)**
7. **Deleting element (shifting left from index)**
    - Time: **O(n)** (as elements after deleted index must shift)
    - Space: **O(1)**

***
