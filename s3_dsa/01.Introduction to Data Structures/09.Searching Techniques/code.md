# **Searching Techniques**

Binary Search (with algorithm)
Linear Search (with algorithm) for this

```cpp
#include <iostream>
using namespace std;

// Linear Search Algorithm
int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target)
            return i; // Return the index if found
    }
    return -1; // Return -1 if not found
}

// Binary Search Algorithm (Iterative)
int binarySearch(int arr[], int size, int target) {
    int low = 0;
    int high = size - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid; // Element found at mid
        }
        else if (arr[mid] < target) {
            low = mid + 1; // Search in right half
        }
        else {
            high = mid - 1; // Search in left half
        }
    }
    return -1; // Element not found
}

int main() {
    cout << "==============================" << endl;
    cout << "     Searching Techniques     " << endl;
    cout << "==============================" << endl << endl;

    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int size = sizeof(arr) / sizeof(arr[^0]);
    int target = 23;

    cout << "Given sorted array:" << endl;
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n\nTarget element: " << target << endl << endl;

    // Perform Linear Search
    cout << "1. Linear Search" << endl;
    cout << "----------------" << endl;
    cout << "Algorithm: Check each element from start to end till target is found." << endl;
    cout << "Code (Pseudocode):" << endl;
    cout << "for i = 0 to n-1\n";
    cout << "  if arr[i] == target\n";
    cout << "    return i\n";
    cout << "return -1\n\n";

    int linearResult = linearSearch(arr, size, target);
    if (linearResult != -1)
        cout << "Result: Element found at index " << linearResult << " by Linear Search." << endl;
    else
        cout << "Result: Element not found by Linear Search." << endl;

    cout << "\n2. Binary Search" << endl;
    cout << "----------------" << endl;
    cout << "Algorithm: Repeatedly divide the search interval in half, compare middle element with target." << endl;
    cout << "Code (Pseudocode):" << endl;
    cout << "low = 0, high = n-1\n";
    cout << "while low <= high\n";
    cout << "  mid = (low + high) / 2\n";
    cout << "  if arr[mid] == target\n";
    cout << "    return mid\n";
    cout << "  else if arr[mid] < target\n";
    cout << "    low = mid + 1\n";
    cout << "  else\n";
    cout << "    high = mid - 1\n";
    cout << "return -1\n\n";

    int binaryResult = binarySearch(arr, size, target);
    if (binaryResult != -1)
        cout << "Result: Element found at index " << binaryResult << " by Binary Search." << endl;
    else
        cout << "Result: Element not found by Binary Search." << endl;

    return 0;
}
```


***

### Expected Console Output (README style)

```
==============================
     Searching Techniques     
==============================

Given sorted array:
2 5 8 12 16 23 38 56 72 91 

Target element: 23

1. Linear Search
----------------
Algorithm: Check each element from start to end till target is found.
Code (Pseudocode):
for i = 0 to n-1
  if arr[i] == target
    return i
return -1

Result: Element found at index 5 by Linear Search.

2. Binary Search
----------------
Algorithm: Repeatedly divide the search interval in half, compare middle element with target.
Code (Pseudocode):
low = 0, high = n-1
while low <= high
  mid = (low + high) / 2
  if arr[mid] == target
    return mid
  else if arr[mid] < target
    low = mid + 1
  else
    high = mid - 1
return -1

Result: Element found at index 5 by Binary Search.
```


***
