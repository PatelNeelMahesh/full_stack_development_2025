# Radix Sort

## Introduction and Definition

**Radix Sort** is a non-comparative, integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. It processes the digits of the numbers from least significant digit (LSD) to most significant digit (MSD) or vice versa, sorting at each stage using a stable sorting algorithm such as Counting Sort.

Unlike comparison-based algorithms, Radix Sort exploits the digit structure of numbers to achieve a time complexity that can be linear in terms of the number of elements and the number of digits in the largest number.

***

## How Radix Sort Works: Deep Dive

### 1. Identify the Maximum Number

- First, determine the maximum number in the array to know the number of digits to process.


### 2. Sorting by Digit Position

- Starting from the least significant digit (rightmost), sort the array according to that digit.
- Move to the next significant digit (leftwards) and sort again.
- Repeat until all digit positions have been processed.


### 3. Stable Sorting Per Digit

- A stable sorting algorithm such as Counting Sort is used at each digit stage to maintain the relative order of elements with the same digit.
- This ensures correct final ordering after all digits are processed.

***

## Detailed Example Walkthrough with Visuals

Array to sort:

```
[170, 45, 75, 90, 802, 24, 2, 66]
```


***

### Initial step: Find the maximum number

- Maximum number = 802
- It has 3 digits, so we will process digit positions 1 (units), 10 (tens), 100 (hundreds).

***

### Iteration 1: Sorting by units digit (1s place)

- Extract the units digit from each element:
    - 170 → 0
    - 45 → 5
    - 75 → 5
    - 90 → 0
    - 802 → 2
    - 24 → 4
    - 2 → 2
    - 66 → 6
- Sort by units digit using stable sort:

```
[170, 90, 802, 2, 24, 45, 75, 66]
```


***

### Iteration 2: Sorting by tens digit (10s place)

- Extract the tens digit from each element:
    - 170 → 7
    - 90 → 9
    - 802 → 0
    - 2 → 0 (consider leading zeros)
    - 24 → 2
    - 45 → 4
    - 75 → 7
    - 66 → 6
- Sort by tens digit using stable sort:

```
[802, 2, 24, 45, 66, 170, 75, 90]
```


***

### Iteration 3: Sorting by hundreds digit (100s place)

- Extract the hundreds digit from each element:
    - 802 → 8
    - 2 → 0
    - 24 → 0
    - 45 → 0
    - 66 → 0
    - 170 → 1
    - 75 → 0
    - 90 → 0
- Sort by hundreds digit using stable sort:

```
[2, 24, 45, 66, 75, 90, 170, 802]
```

Sorted array achieved.

***

## In-Depth Code Explanation

```cpp
#include <iostream>
#include <vector>
using namespace std;

// A utility function to get the maximum value in arr[]
int getMax(int arr[], int n) {
    int max = arr[^0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

// A function to do counting sort of arr[] according to the digit represented by exp
void countingSort(int arr[], int n, int exp) {
    int output[n]; // output array
    int count = {0};

    // Store count of occurrences in count[]
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;

    // Change count[i] so that count[i] contains actual position of this digit in output[]
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    // Build the output array from right to left to maintain stability
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

// The main function to that sorts arr[] of size n using Radix Sort
void radixSort(int arr[], int n) {
    // Find the maximum number to know the number of digits
    int max = getMax(arr, n);

    // Do counting sort for every digit; exp is 10^i where i is current digit number
    for (int exp = 1; max / exp > 0; exp *= 10)
        countingSort(arr, n, exp);
}
```

- The **getMax** function determines the maximum number to figure out digit count.
- The **countingSort** function sorts elements based on the digit at the current exponent position using counting sort, preserving stability.
- The **radixSort** function iterates over each digit position and applies counting sort.

***

## Rich Visual Summary of One Counting Sort Step (exp = 1)

Array before sorting by units digit:

```
[170, 45, 75, 90, 802, 24, 2, 66]
```

Digit extracted for each:

- 170 → 0
- 45 → 5
- 75 → 5
- 90 → 0
- 802 → 2
- 24 → 4
- 2 → 2
- 66 → 6

Count array (digit frequencies):

```
Index:     0 1 2 3 4 5 6 7 8 9
Count:     2 0 2 0 1 2 1 0 0 0
```

Cumulative count for positions (converted in countingSort):

```
Index:     0 1 2 3 4 5 6 7 8 9
Count:     2 2 4 4 5 7 8 8 8 8
```

Output built from right to left to maintain stability; final output after this step:

```
[170, 90, 802, 2, 24, 45, 75, 66]
```


***

## Complexity Analysis

| Case | Time Complexity | Explanation |
| :-- | :-- | :-- |
| Best/Average/Worst | $O(d \times (n + k))$ | d = number of digits in max number, n = number of elements, k = range of digits (0-9) |
|  | Typically $O(n)$ if d is a constant (fixed digit size) | Radix sort runs in linear time for fixed digit lengths |

- **Space Complexity:** $O(n + k)$ due to auxiliary arrays used in counting sort, where k is 10 in decimal system.

***

## Notes and Optimizations

- Radix Sort is particularly efficient when the number of digits $d$ is small compared to $n$.
- Can be applied to sorting strings or other data types with fixed-length keys by extending the stable sort per key position.
- The choice of stable sort (often counting sort) is crucial to maintain correct ordering across digit passes.
- Works best with integers or fixed-length data; less suitable for floating-point without adaptation.

***

## Complete Working Code Example

```cpp
#include <iostream>
using namespace std;

int getMax(int arr[], int n) {
    int max = arr[^0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

void countingSort(int arr[], int n, int exp) {
    int output[n];
    int count = {0};

    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;

    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

void radixSort(int arr[], int n) {
    int max = getMax(arr, n);

    for (int exp = 1; max / exp > 0; exp *= 10)
        countingSort(arr, n, exp);
}

int main() {
    int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
    int n = sizeof(arr) / sizeof(arr);

    cout << "Original array: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    radixSort(arr, n);

    cout << "Sorted array: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

## Expected Output

```
Original array: 170 45 75 90 802 24 2 66 
Sorted array: 2 24 45 66 75 90 170 802 
```


***

## Summary

- Radix Sort sorts numbers by processing individual digits from least significant to most significant (LSD approach).
- It uses a stable sorting algorithm at each digit to maintain order for equal digits.
- Runs in linear time for fixed digit sizes, outperforming comparison sorts for large data sets with small digit counts.
- Requires extra space for auxiliary arrays, and is most suitable for integers or fixed-length keys.
- Understanding Radix Sort is essential for efficient integer sorting beyond comparison-based algorithms.

