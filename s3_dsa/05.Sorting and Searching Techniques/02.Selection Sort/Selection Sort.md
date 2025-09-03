# Selection Sort

## Introduction: What is Selection Sort?

Selection Sort is a simple and intuitive sorting algorithm often used to teach the basics of sorting. Imagine you have a set of scattered numbered cards, and you want to arrange them from smallest to largest:

- First, scan all the cards, find the smallest card, and move it to the beginning.
- Then, from the remaining cards, find the next smallest card and move it next in line.
- Continue this process until all the cards are arranged in ascending order.

This approach splits the list into two parts: the sorted part (which grows from left to right) and the unsorted part (which shrinks correspondingly).

Though easy to understand and implement, Selection Sort has a time complexity of **$O(n^2)$**, which makes it inefficient for large datasets compared to advanced sorting algorithms like Quick Sort or Merge Sort.

***

## Step-by-Step Explanation of Selection Sort

### Step 1: Divide the array into sorted and unsorted parts

- Initially, the **sorted part** is empty.
- The **unsorted part** is the entire array.


### Step 2: Find the smallest element in the unsorted part

- Scan through all unsorted elements to find the smallest one.


### Step 3: Swap the smallest element found with the first element in the unsorted part

- This effectively grows the sorted portion by one element.


### Step 4: Move the boundary between sorted and unsorted one position to the right

- The sorted part expands; unsorted part reduces.


### Step 5: Repeat steps 2–4

- Continue until the unsorted part is empty and the entire list is sorted.

***

## Visualizing Selection Sort with an Example

Let's trace Selection Sort on the array:

```
[29, 10, 14, 37, 13]
```


***

### Pass 1 (i = 0)

- **Unsorted array:** ``
- Find the minimum element in entire array.
- Minimum is **10** at index 1.
- Swap the element at i=0 (29) with element at min_idx=1 (10).

Array after swap:

```
[10, 29, 14, 37, 13]
```

**Sorted part:** ``  **Unsorted part:**``

***

### Pass 2 (i = 1)

- **Unsorted array:** ``
- Minimum element is **13** at index 4.
- Swap element at i=1 (29) with element at min_idx=4 (13).

Array after swap:

```
[10, 13, 14, 37, 29]
```

**Sorted part:** ``**Unsorted part:**``

***

### Pass 3 (i = 2)

- **Unsorted array:** ``
- Minimum element is **14** at index 2 (already in correct position).
- No swap needed.

Array stays:

```
[10, 13, 14, 37, 29]
```

**Sorted part:** ``**Unsorted part:**``

***

### Pass 4 (i = 3)

- **Unsorted array:** ``
- Minimum element is **29** at index 4.
- Swap element at i=3 (37) with element at min_idx=4 (29).

Array after swap:

```
[10, 13, 14, 29, 37]
```

**Sorted part:** ``**Unsorted part:**``

***

### Pass 5 (i = 4)

- Only one element left in unsorted part.
- Already sorted by default.

***

## Summary of Sorting Process with Positions

| Pass (i) | Array State | Minimum Element Found | Action |
| :-- | :-- | :-- | :-- |
| 0 |  | 10 | Swap 29 and 10 |
| 1 |  | 13 | Swap 29 and 13 |
| 2 |  | 14 | No swap needed |
| 3 |  | 29 | Swap 37 and 29 |
| 4 |  | 37 | No swap needed (last elem) |


***

## Code Explanation: Detailed Walkthrough

```cpp
void selectionSort(int arr[], int n) {
    // Loop to mark the starting index of unsorted subarray
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i; // Assume first element is the minimum

        // Traverse the unsorted part to find the actual minimum element
        for (int j = i + 1; j < n; j++) {
            // Update min_idx if smaller element is found
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        // Swap only if the minimum isn’t already in position i
        if (min_idx != i) {
            std::swap(arr[i], arr[min_idx]);
        }
    }
}
```

- **Outer loop** (`i`): Each iteration moves the boundary between sorted and unsorted parts by one.
- **Inner loop** (`j`): Finds minimum element in the unsorted subarray.
- **Swap**: Places the smallest element at the start of the unsorted part, expanding the sorted section.
- This process continues until the full array is sorted.

***

## Algorithm Visualization: Key Variables

- **`i` (Boundary pointer):** Represents where sorted and unsorted parts meet.
- **`min_idx` (Minimum element pointer):** Holds index of smallest element found during iteration.
- **Swapping:** Moves smallest element to its correct position in the sorted subarray.

***

## Time and Space Complexity

| Scenario | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best Case | $O(n^2)$ | Compares all pairs, swaps minimal or none |
| Average Case | $O(n^2)$ | Performs \$ \frac{n(n-1)}{2} \$ comparisons |
| Worst Case | $O(n^2)$ | Same as average; compares and swaps accordingly |
| Space Complexity | $O(1)$ | Sorts in-place without extra memory |

- Number of **comparisons** is always roughly \$ n^2/2 \$.
- Number of **swaps** is at most $n-1$, which is less than bubble sort.
- Efficient when swaps are costly but not suitable for very large datasets.

***

## Stability of Selection Sort

- **Selection Sort is NOT stable.**
- Stability means elements with the same value maintain their original order after sorting.
- Because selection sort swaps non-adjacent elements, it can change the relative order of equal elements.

***

## Example Walkthrough Explaining Stability Issue

Imagine the following list with duplicate elements but different "labels":

```
[{value=5, id='A'}, {value=3, id='B'}, {value=5, id='C'}]
```

- In the first pass, it finds minimum (3, id='B'), swaps with the first element.
- The two `5`s might change their relative order because of swapping.
- Hence, relative ordering of equal elements (`5, A` and `5, C`) is not guaranteed.

***

## When Is Selection Sort Useful?

- When simplicity is essential, such as teaching sorting algorithms.
- When memory is limited — it sorts in-place with no extra memory.
- When the cost of swapping elements is high (it makes minimum swaps).
- For small arrays where the overhead of more complex algorithms isn’t justified.

***

## Complete Example Program

```cpp
#include <iostream>
using namespace std;

// Function to perform Selection Sort
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        if (min_idx != i) {
            swap(arr[i], arr[min_idx]);
        }
    }
}

// Function to print the array elements
void printArray(int arr[], int n) {
    for (int i=0; i < n; i++)
        cout << arr[i] << " ";
    cout << "\n";
}

int main() {
    int arr[] = {29, 10, 14, 37, 13};
    int n = sizeof(arr) / sizeof(arr);

    cout << "Original array: ";
    printArray(arr, n);

    selectionSort(arr, n);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}
```


***

## Expected Output

```
Original array: 29 10 14 37 13 
Sorted array: 10 13 14 29 37 
```


***

## Summary: Key Takeaways

- **Selection Sort** finds the smallest element from the unsorted segment and moves it to the front.
- It repeats this process, expanding the sorted portion and shrinking the unsorted section.
- Performs **$O(n^2)$** comparisons no matter what.
- Executes **minimum swaps** among simple sorting algorithms — at most one swap per pass.
- It is **not stable** by default.
- Best suited for small datasets and limited-memory environments.
- Great for learning sorting concepts but inefficient for large datasets.

