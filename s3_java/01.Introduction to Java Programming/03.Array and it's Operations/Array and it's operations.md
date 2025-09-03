# Introduction to Java Arrays

An **array** in Java is a container that holds a fixed number of values of the **same type**. Arrays organize multiple values under one variable name, accessible through indices starting from zero.

***

## Declaring and Creating Arrays

You declare an array by specifying the type followed by square brackets, then allocate memory with the `new` keyword:

```java
int[] numbers;           // Declaration
numbers = new int[5];    // Creation (size 5)
```

Or declare and initialize simultaneously:

```java
int[] numbers = {10, 20, 30, 40, 50};
```


***

## Accessing Array Elements

Each element is accessed by its index inside square brackets.

```java
int first = numbers[0];  // Get element at index 0 (10)
numbers[2] = 35;         // Set element at index 2 to 35
```


***

## Visual Representation: Array Structure and Indexing

Suppose we have:

```java
int[] numbers = {10, 20, 30, 40, 50};
```

This array is stored in memory as:


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 | 20 | 30 | 40 | 50 |

- `numbers` accesses `10`
- `numbers` accesses `30`
- Trying to access `numbers` will cause `ArrayIndexOutOfBoundsException` as valid indices are 0 to 4.

***

## Array Properties

- **Fixed Size:** Cannot resize an array once created.
- **Length Property:** You can get the size of the array using `array.length`.

Example:

```java
System.out.println("Array length: " + numbers.length);  // Output: 5
```


***

## Looping Over Arrays

### For Loop with Index

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at " + i + ": " + numbers[i]);
}
```

Visual:


| i (index) ⇨ 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- |
| numbers[i] ⇨ 10 | 20 | 30 | 40 | 50 |


***

### For-Each Loop

```java
for (int num : numbers) {
    System.out.println(num);
}
```

Visual = sequential iteration over elements:

```
10 → 20 → 30 → 40 → 50
```


***

## Default Initialization

When you create an array with `new`, elements set to default value:

```java
int[] arr = new int[3];  // [0, 0, 0]
boolean[] flags = new boolean[3];  // [false, false, false]
String[] strs = new String[3];  // [null, null, null]
```

Visual for `int[] arr = new int`:


| Index | 0 | 1 | 2 |
| :-- | :-- | :-- | :-- |
| Value | 0 | 0 | 0 |


***

## Copying Arrays with `System.arraycopy` Example

```java
int[] source = {1, 2, 3};
int[] dest = new int[3];
System.arraycopy(source, 0, dest, 0, source.length);
```

Visual:

Before copy:


| source | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- |
| dest | 0 | 0 | 0 |

After copy:


| source | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- |
| dest | 1 | 2 | 3 |


***

## Sorting Arrays in Java

Sorting is the process of arranging elements in a particular order — usually ascending or descending. Java’s `Arrays` utility class provides a built-in method `sort()` to quickly sort arrays efficiently.

***

### How `Arrays.sort()` Works

- The method uses an optimized sorting algorithm (Dual-Pivot Quicksort for primitive types).
- It sorts the array **in-place**, meaning the original array is modified.
- Time complexity is on average  O(n log n) , making it efficient for most use cases.
- Supports both primitive and object arrays (objects are sorted using their natural ordering or a custom comparator).

***

### Example: Sorting an Integer Array

```java
import java.util.Arrays;

public class ArraySortExample {

    public static void main(String[] args) {
        int[] data = {45, 12, 9, 76};  // Unsorted array

        System.out.println("Before sorting: " + Arrays.toString(data));

        Arrays.sort(data);  // Sorts array in ascending order

        System.out.println("After sorting: " + Arrays.toString(data));

        // Display sorted elements
        System.out.print("Sorted elements: ");
        for (int num : data) {
            System.out.print(num + " ");
        }
    }
}
```

**Output:**

```
Before sorting: [45, 12, 9, 76]
After sorting: [9, 12, 45, 76]
Sorted elements: 9 12 45 76 
```


***

### Visual Representation of Sorting

Initial unsorted array:


| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Value | 45 | 12 | 9 | 76 |

After sorting with `Arrays.sort()`:


| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Value | 9 | 12 | 45 | 76 |


***

## Multidimensional Arrays in Java

A **multidimensional array** is simply an array of arrays. The most common multidimensional array is a 2D array, which can be visualized as a table or matrix — rows and columns.

In Java, a 2D array is declared as:

```java
int[][] matrix;
```


***

### Declaring and Initializing a 2D Array

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
```

- The matrix consists of **2 rows** and **3 columns**.
- Each row is itself an array with elements.

***

### Accessing Elements in 2D Arrays

Access elements by specifying row and column indices:

```java
int value = matrix[1][2];  // Accesses 3rd element of 2nd row → 6
System.out.println(value);  // Output: 6
```


***

### Visual Representation of a 2D Array

|  | 0 | 1 | 2 |
| :-- | :-- | :-- | :-- |
| **Row 0** | 1 | 2 | 3 |
| **Row 1** | 4 | 5 | 6 |

- `matrix = 1`
- `matrix = 3`
- `matrix = 6`

***

### Iterating Over 2D Arrays

Using nested loops:

```java
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

Output:

```
1 2 3 
4 5 6 
```


***

### Rich Explanation: Applications of Multidimensional Arrays

- Representing grids (e.g., game boards, maps)
- Storing matrices for mathematics and engineering
- Handling tabular data such as spreadsheets or tables
- Working with images represented as pixel arrays (rows and columns)

***

### Real-World Example: Matrix Addition

Given two matrices of the same size, their sum is created by element-wise addition:

```java
int[][] matrix1 = {
    {1, 2, 3},
    {4, 5, 6}
};

int[][] matrix2 = {
    {7, 8, 9},
    {10, 11, 12}
};

int[][] sum = new int[2][3];

for (int i = 0; i < matrix1.length; i++) {
    for (int j = 0; j < matrix1[i].length; j++) {
        sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

// Display sum
for (int i = 0; i < sum.length; i++) {
    for (int j = 0; j < sum[i].length; j++) {
        System.out.print(sum[i][j] + " ");
    }
    System.out.println();
}
```

Output:

```
8 10 12 
14 16 18 
```

***
