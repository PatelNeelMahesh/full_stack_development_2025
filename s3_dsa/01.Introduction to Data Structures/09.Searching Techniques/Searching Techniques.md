# Searching Techniques


***

## 1. Binary Search


***

### Introduction

Binary Search is an efficient algorithm for finding a target value within a **sorted** array. It works by repeatedly dividing the search interval in half. If the value of the midpoint is equal to the target, the search ends. Otherwise, depending on whether the target is smaller or larger than the midpoint, the search continues on the left or right half, respectively.

Binary Search operates in $O(\log n)$ time, making it much faster than linear search for large data sets.

***

### Algorithm Steps

1. **Define the Search Range:**
Start with pointers `low` (beginning of the array) and `high` (end of the array).
2. **Calculate Middle Index:**
Compute mid as:

$$
mid = low + \frac{(high - low)}{2}
$$

This prevents potential overflow compared to `(low + high)/2`.
3. **Compare the Middle Element with the Target:**
    - If `arr[mid] == target`, return `mid` (target found).
    - If `arr[mid] < target`, search the right half (`low = mid + 1`).
    - If `arr[mid] > target`, search the left half (`high = mid -1`).
4. **Repeat Until `low` Exceeds `high`:**
Continue narrowing the search space until the target is found or the range is invalid. If invalid, target is not in the array.

***

### Binary Search Code (Iterative) with Explanation

```cpp
#include <iostream>
using namespace std;

/*
Binary Search Algorithm
-----------------------
Works only on a sorted array.

Key Idea:
- Repeatedly divide the array into halves until we find the target 
  (or run out of search space).
- Efficient because each step eliminates half of the possible elements.

Parameters:
------------
arr[]  : input sorted array
n      : size of array
target : element to search

Returns:
--------
Index of target if found, otherwise -1.
*/

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1; // Initial search range includes entire array

    // Loop until search space becomes invalid
    while(low <= high) {
        
        // Find middle index
        // Formula: mid = low + (high - low) / 2
        // ✅ This prevents overflow when low + high is too large.
        int mid = low + (high - low) / 2;

        // Check if the middle element is the target
        if(arr[mid] == target) {
            return mid;  // ✅ Target found at index mid
        }

        // If the middle element is smaller than target
        // → Then the target must be in the right half
        else if(arr[mid] < target) {
            low = mid + 1;
        } 
        // If the middle element is larger than target
        // → Then the target must be in the left half
        else {
            high = mid - 1;
        }
    }

    // If loop ends, search space is empty → not found
    return -1;
}

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11}; // Sorted array is mandatory
    int n = sizeof(arr) / sizeof(arr[0]); // ✅ Correct formula for array size
    int target = 7; // Element to search
    
    int index = binarySearch(arr, n, target);

    // Output results
    if(index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in array." << endl;
    }
    return 0;
}
```


***

### 🔹 Step-by-Step Explanation of Working

Let’s say the array = `{1, 3, 5, 7, 9, 11}` and target = `7`.

- **Initial State:**
`low = 0`, `high = 5`, so full array is the search range.
- **Iteration 1:**
`mid = 0 + (5-0)/2 = 2` → `arr[mid] = 5`
Since `5 < 7`, ignore left half → new range is indices `[3..5]`.
- **Iteration 2:**
`mid = 3 + (5-3)/2 = 4` → `arr[mid] = 9`
Since `9 > 7`, ignore right half → new range is `[3..3]`.
- **Iteration 3:**
`mid = 3` → `arr[mid] = 7`
✅ Found at index **3**.

So the search **halved the space in every iteration** instead of scanning linearly.

***

### 🔹 Why `low + (high - low)/2`?

- If we use `(low + high)/2` with very large values of `low` and `high`, integer overflow may happen.
- Example: `low = 2,100,000,000`, `high = 2,147,000,000` (near int limit in C++). Their sum overflows integer range.
- ✅ Formula `low + (high - low)/2` avoids overflow by not adding two potentially huge numbers directly.

***


## 2. Linear Search


***

### Introduction

Linear Search is the simplest searching algorithm that checks every element sequentially until the target is found or the list ends.

It operates in $O(n)$ time, suitable for unsorted or small datasets.

***

### Algorithm Steps

1. **Start from the first element** and compare it with the target.
2. **Move sequentially** to the next element and repeat the comparison.
3. **Stop when**:
    - The target is found (return index).
    - All elements have been checked (return -1).

***

### Linear Search Code with Explanation

```cpp
#include <iostream>
using namespace std;

/*
Linear Search Algorithm
-----------------------
- Simplest search algorithm.
- Works for both sorted and unsorted arrays.
- Idea: Scan every element of the array until we find the target.
- If found, return its index. If not, return -1.
*/

/*
Why Linear Search?
-------------------
- Works when:
   1. The list/array is small.
   2. The array is unsorted (binary search not possible without sorting).
   3. Simplicity > efficiency.
*/

int linearSearch(int arr[], int n, int target) {
    /*
    Loop through every element:
    ---------------------------
    - i = index of current element
    - arr[i] = value at index i
    */
    for(int i = 0; i < n; i++) {

        // Check if current element matches target
        if(arr[i] == target) {
            return i;  // ✅ Target found at index i
        }
    }

    // If loop finishes without finding target
    return -1;  // ❌ Target not found
}

int main() {
    int arr[] = {11, 22, 33, 44, 55}; // Array can be sorted OR unsorted
    int n = sizeof(arr) / sizeof(arr[0]); // ✅ Correct way to calculate array size
    int target = 33;  // Element to be searched

    int index = linearSearch(arr, n, target);

    // Output results
    if(index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in array." << endl;
    }
    return 0;
}
```


***

### 🔹 Step-by-Step Example (Searching 33)

Array = `{11, 22, 33, 44, 55}`, Target = `33`

- **Step 1:** Compare `arr = 11` with 33 → Not equal → Move next
- **Step 2:** Compare `arr = 22` with 33 → Not equal → Move next
- **Step 3:** Compare `arr = 33` with 33 → ✅ Equal → Return index 2

So answer = index **2**.

***

### 🔹 Why Linear Search Always Works?

- It makes **no assumptions about ordering**.
- Scans every element one by one.
- Hence, guaranteed to work on **all datasets** (sorted or unsorted).

***

### 🔹 Efficiency Analysis

**Best Case (Ω(1)):**

- If the element is at the first index, we find it immediately.

**Worst Case (O(n)):**

- If the element is at the last index, or not present at all, we scan all elements.

**Average Case (Θ(n)):**

- On average, we check about **n/2 elements** before finding the target.

So complexity:

$$
T(n) = O(n)
$$

***

### 🔹 Space Complexity

- Uses only:
    - Integer loop index `i`.
    - Input array `arr` (already given).
- No recursion, no extra data structures.

✅ **Space Complexity = O(1)** (constant).

***

### 📌 Summary

- **Linear Search:**
    - ✅ Works on sorted + unsorted arrays.
    - ❌ Inefficient for large datasets.
- **Time Complexity:**
    - Best = O(1), Worst = O(n), Average = O(n).
- **Space Complexity = O(1).**
- Good for **small or unsorted datasets**.

***

### Explanation (Pointwise):

- **Why does this method always work?**
It does not require any order, so it’s universal but potentially slow.
- **How does it check elements?**
Goes element by element in sequence, checking equality.
- **What makes it inefficient?**
Worst case requires scanning all elements in the array.
- **When to prefer linear search?**
Small datasets or unsorted lists where sorting is costly.

***

## Summary Table: Binary Search vs Linear Search

| Feature | Binary Search | Linear Search |
| :-- | :-- | :-- |
| **Requirement** | Sorted array | No sorting required |
| **Time Complexity (Best)** | $O(1)$ | $O(1)$ |
| **Time Complexity (Worst)** | $O(\log n)$ | $O(n)$ |
| **Time Complexity (Avg)** | $O(\log n)$ | $O(n)$ |
| **Method** | Divide and conquer; halve search | Sequential scanning |
| **Use Case** | Large sorted datasets | Small/unsorted datasets |
| **Space Complexity** | $O(1)$ constant | $O(1)$ constant |


***

Binary Search is recommended for sorted data due to its logarithmic efficiency, while Linear Search is versatile for unsorted or small lists.
