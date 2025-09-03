# Quick Sort

## Introduction and Definition

**Quick Sort** is a highly efficient, comparison-based, divide-and-conquer sorting algorithm. It is often the algorithm of choice due to its impressive average-case efficiency of $O(n \log n)$ and its in-place sorting capability, which requires only a small, constant amount of extra space.

The core concept behind Quick Sort is to select a *pivot* element from the array, partition the rest of the array around this pivot, and then recursively apply the same process to the subarrays on either side of the pivot until each subarray is sorted.

***

## How Quick Sort Works: Deep Dive

### 1. Choosing the Pivot

- The pivot can be any element in the array (commonly the last, first, or middle element).
- Pivot choice heavily impacts performance; ideally, it splits the array into two roughly equal parts.


### 2. Partitioning

- Rearrange the array such that all elements less than the pivot appear before it and all elements greater come after.
- This step positions the pivot exactly where it will finally reside in sorted order.
- Partitioning effectively divides the array into two non-overlapping subarrays.


### 3. Recursive Sort

- Apply Quick Sort recursively to the subarray elements before and after the pivot.
- Continue until base case of subarray with single or zero elements is reached.

This repeated splitting and sorting efficiently reduces the problem size at each recursion level.

***

## Detailed Example Walkthrough with Visuals

Array to sort:

```
[10, 7, 8, 9, 1, 5]
```


***

### Initial call: quickSort(0, 5)

- **Pivot:** last element = 5
- **Partitioning:**


| Index | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 | 7 | 8 | 9 | 1 | 5 |

- Initialize `i = -1`
- Process elements `j` from 0 to 4:
    - j=0 → 10 > 5 (no swap)
    - j=1 → 7 > 5 (no swap)
    - j=2 → 8 > 5 (no swap)
    - j=3 → 9 > 5 (no swap)
    - j=4 → 1 ≤ 5 → increment i to 0, swap arr[i]=10, arr[j]=1:

Updated array:

```
[1, 7, 8, 9, 10, 5]
```

- Swap pivot with arr[i+1]:

```
[1, 5, 8, 9, 10, 7]
```

- Pivot index = 1

***

### Recursive calls:

- quickSort(0, 0): single element → sorted.
- quickSort(2, 5):
    - **Pivot:** 7
    - `i = 1`, j iterates 2 to 4:
        - j=2 → 8 > 7 (no swap)
        - j=3 → 9 > 7 (no swap)
        - j=4 → 10 > 7 (no swap)
    - Swap pivot 7 with arr[i+1]=8:

```
[1, 5, 7, 9, 10, 8]
```

- Pivot index = 2

***

### Further Recursive calls:

- quickSort(2, 1): invalid range → return.
- quickSort(3, 5):
    - Pivot: 8
    - i=2
    - j from 3 to 4:
        - j=3 → 9 > 8 (no swap)
        - j=4 → 10 > 8 (no swap)
    - Swap pivot 8 with arr[i+1]=9:

```
[1, 5, 7, 8, 10, 9]
```

- Pivot index = 3

***

### Final Recursion:

- quickSort(3, 2): invalid range → return
- quickSort(4, 5):
    - Pivot: 9
    - i=3
    - j=4 → 10 > 9 (no swap)
    - Swap pivot 9 with arr[i+1]=10:

```
[1, 5, 7, 8, 9, 10]
```

Sorted array achieved.

***

## In-Depth Code Explanation

```cpp
// Partition function: places pivot at correct position,
// elements smaller than pivot to left, and larger to right.
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // pivot as last element
    int i = low - 1;        // index of smaller element

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);   // Swap smaller element up
        }
    }
    std::swap(arr[i + 1], arr[high]);    // Place pivot after last smaller element
    return i + 1;                        // Return pivot index
}

// Recursive Quick Sort function sorts array between indices low and high
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);  // Partition the array

        quickSort(arr, low, pi - 1);   // Recursively sort left subarray
        quickSort(arr, pi + 1, high);  // Recursively sort right subarray
    }
}
```

- The **partition function** performs key rearrangement, tracking smaller elements with `i`.
- Swaps place smaller items at the front and pivot at its correct index.
- Quick Sort recursively deals with subarrays by partitioning them.

***

## Rich Visual Summary of Partitioning Step

```
Array: [10, 7, 8, 9, 1, 5]
Pivot: 5
Indices: Low=0, High=5

i starts at -1
j iterates from 0 to 4:
- j=0, 10 > 5, no swap
- j=1, 7 > 5, no swap
- j=2, 8 > 5, no swap
- j=3, 9 > 5, no swap
- j=4, 1 <= 5, i=0, swap arr[^0] and arr[^1]

Array after swaps: [1, 7, 8, 9, 10, 5]

Swap pivot with arr[i+1]:
Swap arr[^2] and arr[^3]

Result: [1, 5, 8, 9, 10, 7]
Pivot index = 1
```

Visually, this partitions the array into:

- Left side (< pivot): ``[^2]
- Pivot: `5`
- Right side (>= pivot): ``

***

## Complexity Analysis

| Case | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best/Average | $O(n \log n)$ | Balanced partitioning splits array evenly |
| Worst | $O(n^2)$ | Occurs with bad pivots (sorted or reverse arrays) |

- **Space Complexity:** $O(\log n)$ due to recursion stack for balanced splits, can degrade to $O(n)$ in worst case.

***

## Techniques to Avoid Worst Case

- **Randomized Pivot Selection:** Randomly pick pivot to reduce worst-case likelihood.
- **Median-of-Three Pivot:** Choose median of first, middle, last element as pivot.
- **Tail Call Optimization:** Minimize recursion depth by sorting smaller subarray first.

***

## Complete Working Code Example

```cpp
#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[^0]);

    cout << "Original array: ";
    for(int i=0; i<n; i++) cout << arr[i] << " ";
    cout << endl;

    quickSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for(int i=0; i<n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

## Expected Output

```
Original array: 10 7 8 9 1 5 
Sorted array: 1 5 7 8 9 10 
```


***

## Summary

- Quick Sort divides the array by choosing a pivot and partitions it into elements less and greater than the pivot.
- It’s an in-place, efficient, and widely used sorting algorithm.
- Average complexity is $O(n \log n)$, but worst-case $O(n^2)$ can occur with poor pivot choice.
- Various pivot strategies mitigate the worst case.
- Understanding Quick Sort is fundamental for algorithmic problem solving and efficient sorting.

***
