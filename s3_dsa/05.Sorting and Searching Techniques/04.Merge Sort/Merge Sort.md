# Merge Sort

## Introduction and Definition

**Merge Sort** is a classic, divide-and-conquer sorting algorithm that guarantees $O(n \log n)$ performance in all cases—best, average, and worst. It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to produce a fully sorted array.

Merge Sort is a *stable* sort, meaning it preserves the relative order of equal elements, and it is particularly efficient for sorting linked lists or large datasets that do not fit entirely in memory (external sorting).

***

## Conceptual Breakdown: How Merge Sort Works

Merge Sort works by breaking down the array and conquering the problem stepwise:

1. **Divide:** Recursively split the array into two halves until each subarray contains a single element (or no elements), which are inherently sorted.
2. **Conquer:** Recursively sort each half by applying merge sort again.
3. **Combine:** Carefully merge the two sorted halves into a single sorted array, by comparing elements from each half and picking the smaller one.

The merging is the crucial step where two sorted arrays are combined by efficient comparison.

***

## Detailed Example Walkthrough

Consider the input array:

```
[38, 27, 43, 3, 9, 82, 10]
```


### Step 1: Divide

Split into left and right parts:

```
Left:  [38, 27, 43, 3]
Right: [9, 82, 10]
```


***

### Step 2: Recursively Sort Left Half ``[^3]

- Divide into ``and``[^3]
- Sort ``:
    - Divide into ``and``
    - Single elements are sorted by default.
    - Merge → ``
- Sort ``:[^3]
    - Divide into ``and``[^1]
    - Merge → ``[^3]
- Merge sorted ``and``:[^3]
    - Compare 27 and 3 → choose 3
    - Compare 27 and 43 → choose 27
    - Compare 38 and 43 → choose 38
    - Remaining → 43
    - Result: ``[^3]

***

### Step 3: Recursively Sort Right Half ``

- Divide into ``and``[^2]
- Sort ``:
    - Divide into ``and``[^3]
    - Merge → ``
- `` is single element[^2]
- Merge ``and``:[^2]
    - Compare 9 and 10 → 9
    - Compare 82 and 10 → 10
    - Remaining → 82
    - Result: ``

***

### Step 4: Merge Sorted Halves ``and``[^3]

- Compare respective elements stepwise, picking the smaller:

```
3 (left) vs 9 (right) → 3
27 vs 9 → 9
27 vs 10 → 10
27 vs 82 → 27
38 vs 82 → 38
43 vs 82 → 43
Remaining → 82
```

- Final sorted array:

```
[3, 9, 10, 27, 38, 43, 82]
```


***

## Detailed Code Explanation

Two main functions: `mergeSort` to recursively divide and sort, and `merge` to combine two sorted subarrays.

```cpp
// Merges two sorted subarrays arr[left..mid] and arr[mid+1..right]
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;   // Size of left subarray
    int n2 = right - mid;      // Size of right subarray

    // Create temporary arrays for left and right subarrays
    int* L = new int[n1];
    int* R = new int[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    // Merge the temp arrays back into original array in sorted order
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    // Copy remaining elements of L[], if any
    while (i < n1) {
        arr[k++] = L[i++];
    }

    // Copy remaining elements of R[], if any
    while (j < n2) {
        arr[k++] = R[j++];
    }

    // Release temporary arrays
    delete[] L;
    delete[] R;
}

void mergeSort(int arr[], int left, int right) {
    if (left >= right) {
        return;   // Base case: subarray with single element is sorted
    }

    int mid = left + (right - left) / 2;

    // Recursively sort first half
    mergeSort(arr, left, mid);

    // Recursively sort second half
    mergeSort(arr, mid + 1, right);

    // Merge sorted halves
    merge(arr, left, mid, right);
}
```


***

## Rich Visual Representation of Merge Phase

Imagine merging two sorted arrays:

Left (``) and Right (``)[^3]


| Step | Merged Array | Action |
| :-- | :-- | :-- |
| 1 | [] | Compare 3 and 9 → pick 3 |
| 2 | [^3] | Compare 27 and 9 → pick 9 |
| 3 | [^3] | Compare 27 and 10 → pick 10 |
| 4 | [^3] | Compare 27 and 82 → pick 27 |
| 5 | [^3] | Compare 38 and 82 → pick 38 |
| 6 | [^3] | Compare 43 and 82 → pick 43 |
| 7 | [^3] | Left exhausted; append remaining 82 |
| 8 | [^3] | Merge complete |


***

## Complexity Analysis

| Scenario | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best, Average, Worst | $O(n \log n)$ | Divide phase takes $O(\log n)$, merge takes $O(n)$ every level |

- **Space Complexity:** $O(n)$ required for temporary arrays during merging phase.
- Merge Sort is stable—it preserves the relative order of equal elements.

***

## When to Use Merge Sort

- Large datasets with guaranteed $O(n \log n)$ performance.
- Sorting linked lists efficiently (can be implemented with $O(1)$ extra space).
- Situations where stability is important.
- External sorting scenarios (sorting data too large to fit in memory).
- Parallelizable sorting algorithms.

***

## Complete Program Example

```cpp
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int* L = new int[n1];
    int* R = new int[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];
    while (j < n2)
        arr[k++] = R[j++];

    delete[] L;
    delete[] R;
}

void mergeSort(int arr[], int left, int right) {
    if (left >= right)
        return;

    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr);

    cout << "Original array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    mergeSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

## Expected Output

```
Original array: 38 27 43 3 9 82 10 
Sorted array: 3 9 10 27 38 43 82 
```


***

## Summary

- Merge Sort divides the problem into smaller pieces, sorts them, and merges them back.
- Consistent $O(n \log n)$ runtime across all input types.
- Uses additional memory but is stable and well-suited for linked structures.
- Foundation for advanced parallel and external sorting algorithms.
- Essential algorithm to master for understanding efficient sorting.

***
