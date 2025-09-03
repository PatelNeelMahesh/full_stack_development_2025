# Insertion Sort

## Introduction and Definition

**Insertion Sort** is a straightforward, comparison-based sorting algorithm that builds the final sorted array (or list) one element at a time. It is conceptually similar to how you might organize playing cards in your hands: picking one card at a time and inserting it at the correct position among the cards already sorted.

Insertion Sort is efficient for small datasets or when the input is nearly sorted and serves as a great educational tool to understand sorting fundamentals.

***

## How Insertion Sort Works (Conceptual Overview)

- Begin at the second element in the array (index 1), treating the first element as a sorted subarray of size one.
- Take the current element (called the *key*) and compare it with the elements to its left.
- Shift all elements larger than the *key* one position to the right.
- Insert the *key* into the vacated position.
- Move to the next element and repeat until the entire array is sorted.

***

## Step-By-Step Example

Consider the array:

```
[8, 5, 2, 9, 5, 6, 3]
```

Let's walk through sorting the first few elements:

- i = 1 (value 5):
    - Compare 5 with 8 → 8 > 5, shift 8 right.
    - Insert 5 at index 0.
    - Array now: ``
- i = 2 (value 2):
    - Compare 2 with 8 → shift 8 right.
    - Compare 2 with 5 → shift 5 right.
    - Insert 2 at index 0.
    - Array now: ``
- i = 3 (value 9):
    - Compare 9 with 8 → 9 > 8, no shifts needed.
    - Insert 9 at index 3 (no movement).
    - Array remains: ``
- i = 4 (value 5):
    - Compare 5 with 9 → shift 9 right.
    - Compare 5 with 8 → shift 8 right.
    - Compare 5 with 5 → equal, stop shifting.
    - Insert 5 at index 2.
    - Array now: ``

Continue this process until the full array is sorted.

***

## Detailed Code Explanation

```cpp
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {               // Iterate over unsorted part
        int key = arr[i];                        // The element to insert
        int j = i - 1;                          // Start comparing from element before key

        // Move elements greater than key one position ahead to make space
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];                // Shift element right
            j--;
        }

        arr[j + 1] = key;                       // Insert key after all larger elements
    }
}
```

- **Outer loop (`for`):** Starts from the second element, moving to the end, indicating the current key to insert.
- **Inner loop (`while`):** Compares key to each element on the left, shifts elements greater than key one place to the right.
- **Insertion:** Once the proper location is found (where the previous element is less than or equal to key), key is inserted.

***

## Rich Visual Representation

Consider array positions and shifts as boxes:

**Initial array:**


| 8 | 5 | 2 | 9 | 5 | 6 | 3 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |

**Step i=2 (key=2):**

- Elements to left:
- 8 > 2 → shift 8 right
- 5 > 2 → shift 5 right
- Insert 2 at index 0

Result:


| 2 | 5 | 8 | 9 | 5 | 6 | 3 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |


***

**Step i=4 (key=5):**

- Elements to left:
- 9 > 5 → shift 9 right
- 8 > 5 → shift 8 right
- 5 (equal) → stop shifting
- Insert 5 after first 5

Result:


| 2 | 5 | 5 | 8 | 9 | 6 | 3 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |


***

## Complexity Analysis

| Scenario | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best case | $O(n)$ | Array already sorted; single pass |
| Average case | $O(n^2)$ | Random order; nested iteration |
| Worst case | $O(n^2)$ | Reverse sorted array |

- Space Complexity: $O(1)$ (in-place modification, no extra arrays)
- Best suited for small or mostly sorted datasets.

***

## When to Use Insertion Sort

- Small arrays (due to low overhead).
- Nearly sorted data, where it performs near linear time.
- Stability required (order of equal elements is maintained).
- Used in hybrid algorithms (e.g., Timsort uses insertion sort for small segments).

***

## Complete Working Example

```cpp
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {              
        int key = arr[i];                      
        int j = i - 1;                        

        while (j >= 0 && arr[j] > key) {      
            arr[j + 1] = arr[j];              
            j--;                            
        }
        arr[j + 1] = key;                     
    }
}

int main() {
    int arr[] = {8, 5, 2, 9, 5, 6, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    for (int i = 0; i < n; i++) 
        cout << arr[i] << " ";
    cout << endl;

    insertionSort(arr, n);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) 
        cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

## Expected Output

```
Original array: 8 5 2 9 5 6 3 
Sorted array: 2 3 5 5 6 8 9 
```


***

## Summary

- Insertion Sort is conceptually simple and useful for small or nearly sorted data.
- Time complexity is quadratic for average and worst scenarios.
- Space complexity is constant.
- It is stable and in-place.
- Its detailed understanding prepares for more complex sorting algorithms.



