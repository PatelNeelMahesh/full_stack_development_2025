# Bubble Sort

## Introduction and Definition

**Bubble Sort** is one of the simplest sorting algorithms, often used for educational purposes to introduce fundamental sorting concepts. It works by repeatedly swapping adjacent elements if they are in the wrong order, causing the largest unsorted element to “bubble” to the end of the array in each pass. While intuitively straightforward, its performance is inefficient on large datasets, making it primarily suitable for small or nearly sorted arrays.

***

## How Bubble Sort Works: A Conceptual Breakdown

Imagine sorting a hand of cards. You compare each card to its neighbor and swap them if they’re out of order, repeating this process multiple times. Each pass places the next largest card into its correct position at the end.

Detailed flow:

- Start at the beginning of the array.
- Compare the first pair of adjacent elements.
- If the first is greater than the second, swap them.
- Move to the next pair and repeat.
- The largest element “bubbles” to the last unsorted position.
- Ignore the last sorted elements in subsequent passes.
- Repeat passes until no swaps occur, meaning the array is sorted.

***

## Step-by-Step Example with Visuals

Initial array:

```
[5, 1, 4, 2, 8]
```

**Pass 1:**


| Indices | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Before cmp | 5 | 1 | 4 | 2 | 8 |
| Action | Swap 5 \& 1 |  |  |  |  |
| After cmp | 1 | 5 | 4 | 2 | 8 |

Next:


| Indices | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Before cmp | 1 | 5 | 4 | 2 | 8 |
| Action | Swap 5 \& 4 |  |  |  |  |
| After cmp | 1 | 4 | 5 | 2 | 8 |

Then:


| Indices | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Before cmp | 1 | 4 | 5 | 2 | 8 |
| Action | Swap 5 \& 2 |  |  |  |  |
| After cmp | 1 | 4 | 2 | 5 | 8 |

Finally:


| Indices | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Before cmp | 1 | 4 | 2 | 5 | 8 |
| Action | No swap |  |  |  |  |
| After cmp | 1 | 4 | 2 | 5 | 8 |

At the end of Pass 1, the largest element 8 is at its correct position.

***

**Pass 2:**

Repeat comparisons ignoring last sorted element (index 4). The swaps continue, bubbling next largest element.

Final sorted array after all passes:

```
[1, 2, 4, 5, 8]
```


***

## Code Walkthrough — Detailed Explanation

```cpp
void bubbleSort(int arr[], int n) {
    bool swapped;                      // Flag to monitor swaps in a pass

    for (int i = 0; i < n - 1; i++) {
        swapped = false;               // Reset swapped flag at the start of each pass

        // Last i elements are already sorted
        for (int j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {  // Compare adjacent elements

                std::swap(arr[j], arr[j + 1]);  // Swap if in wrong order
                swapped = true;                  // Mark swap happened
            }
        }

        // If no swaps in this pass, array is sorted early, so stop
        if (!swapped) {
            break;   // Early termination for improved efficiency on nearly sorted arrays
        }
    }
}
```

- **Outer loop:** Controls how many passes are made; maximum needed is `n-1`.
- **Inner loop:** Compares and swaps adjacent elements, progressively ignoring the final sorted part.
- **Swapped flag:** Key optimization to prevent unnecessary passes when sorted early.

***

## Enhanced Visual Representation

```
Pass 1:        Pass 2:        Pass 3:
[5 1 4 2 8]    [1 4 2 5 8]    [1 2 4 5 8]
 ↓ ↑ ↑          ↓   ↑ ↑
[1 5 4 2 8] → [1 2 4 5 8] → sorted!
   ↑   ↑
[1 4 5 2 8]
      ↑ ↑
[1 4 2 5 8]
```

The arrows indicate the elements being compared and swapped. Each pass moves the largest unsorted element to its correct position on the right.

***

## Complexity Analysis

| Case | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best case | $O(n)$ | Array is already sorted; only one pass with no swaps needed |
| Average case | $O(n^2)$ | Randomly ordered array with many swaps |
| Worst case | $O(n^2)$ | Reverse sorted array requires maximum swaps |

- **Space Complexity:** $O(1)$ (sort is performed in-place)
- **Adaptive:** Stops early on already sorted input (due to swapped flag)
- **Stable:** Equal elements maintain their relative order

***

## Advantages \& Disadvantages

**Advantages:**

- Simple to understand and implement.
- Performs well with nearly sorted or small datasets.
- Stable sorting algorithm.

**Disadvantages:**

- Inefficient for large or randomly ordered datasets.
- Quadratic time complexity makes it impractical for big data.

***

## Use Cases

- Teaching sorting basics and algorithmic thinking.
- Small datasets or datasets with small unsorted regions.
- As part of hybrid algorithms (e.g., Timsort switches to insertion sort for small runs).

***

## Complete Example Program

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped) break;
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    bubbleSort(arr, n);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

## Expected Output

```
Original array: 5 1 4 2 8 
Sorted array: 1 2 4 5 8 
```


***

## Summary

- Bubble Sort repeatedly compares adjacent elements, swapping if out of order.
- Efficient optimization through early termination reduces unnecessary passes.
- Best suited for educational purposes and small or nearly sorted datasets.
- Quadratic time limits usefulness on large-scale sorting operations.
- Maintains data stability during sorting.

