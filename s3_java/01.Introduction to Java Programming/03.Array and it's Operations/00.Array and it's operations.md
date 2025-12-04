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

**Step-by-Step Visual Explanation:**

When declaring:


| Step | Action | Explanation |
| :-- | :-- | :-- |
| 1 | `int[] numbers;` | Declare a variable `numbers` that will hold an int array reference. |
| 2 | `numbers = new int[5];` | Allocate memory for 5 integer elements. Memory reserved, each element defaults to 0. |

When initializing with values:


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 | 20 | 30 | 40 | 50 |


***

## Accessing Array Elements

Each element is accessed by its index inside square brackets.

```java
int first = numbers[0];  // Get element at index 0 (10)
numbers[2] = 35;         // Set element at index 2 to 35
```

**Step-by-Step Visual Explanation:**


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 | 20 | 30 | 40 | 50 |

- Step 1: Access `numbers` → reads `10`.
- Step 2: Write `numbers = 35` → updates value at index 2.

Resulting array:


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 | 20 | 35 | 40 | 50 |


***

## Array Properties

- **Fixed Size:** Arrays cannot be resized after creation.
- **Length property:** Get size using `array.length`, e.g., `numbers.length`.

Example:

```java
System.out.println("Array length: " + numbers.length);  // Output: 5
```

**Step-by-Step Visual Explanation:**


| Step | Description |
| :-- | :-- |
| 1 | JVM stores array length internally. |
| 2 | `numbers.length` retrieves this value quickly without iteration. |
| 3 | Returns 5 for the example array. |


***

## Looping Over Arrays

### For Loop with Index

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at " + i + ": " + numbers[i]);
}
```

**Step-by-Step Visual Representation:**


| i (index) | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| numbers[i] | 10 | 20 | 35 | 40 | 50 |

- Step 1: Initialize `i=0`.
- Step 2: Check `i < numbers.length` (5).
- Step 3: Access and print `numbers[i]`.
- Step 4: Increment `i` and repeat until `i` reaches 5.

***

### For-Each Loop

```java
for (int num : numbers) {
    System.out.println(num);
}
```

Visual:

```
10 → 20 → 35 → 40 → 50
```

- Step 1: Iterates sequentially over each element.
- Step 2: Assigns current element to `num`.
- Step 3: Prints `num`.
- Step 4: Continues until all elements are processed.

***

## Default Initialization

When creating arrays with `new`, elements are set to default values:

```java
int[] arr = new int[3];          // [0, 0, 0]
boolean[] flags = new boolean[3]; // [false, false, false]
String[] strs = new String[3];    // [null, null, null]
```

**Step-by-Step Visual Explanation for `int[] arr = new int;`:**


| Index | 0 | 1 | 2 |
| :-- | :-- | :-- | :-- |
| Value | 0 | 0 | 0 |

- Step 1: JVM allocates memory for 3 integers.
- Step 2: Each element is set to Java’s int default value, `0`.

***

## Copying Arrays with `System.arraycopy`

Example:

```java
int[] source = {1, 2, 3};
int[] dest = new int[3];
System.arraycopy(source, 0, dest, 0, source.length);
```

**Step-by-Step Visual Explanation:**

Before copy:


| source | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- |
| dest | 0 | 0 | 0 |

After copy:


| source | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- |
| dest | 1 | 2 | 3 |

- Step 1: Copy elements from `source` starting at index 0.
- Step 2: Paste elements into `dest` starting at index 0.
- Step 3: Copy length equals `source.length`.
- Step 4: `dest` array now holds a copy of `source`.

***

## Sorting Arrays in Java

Java provides `Arrays.sort()` for efficient sorting.

***

### How `Arrays.sort()` Works

- Uses **Dual-Pivot Quicksort** for primitives.
- Sorts **in-place**, modifying the original array.
- Average time complexity: O(n log n).

***

### Example: Sorting an Integer Array

```java
import java.util.Arrays;

public class ArraySortExample {
    public static void main(String[] args) {
        int[] data = {45, 12, 9, 76};

        System.out.println("Before sorting: " + Arrays.toString(data));
        Arrays.sort(data);
        System.out.println("After sorting: " + Arrays.toString(data));

        System.out.print("Sorted elements: ");
        for (int num : data) {
            System.out.print(num + " ");
        }
    }
}
```

Output:

```
Before sorting: [45, 12, 9, 76]
After sorting: [9, 12, 45, 76]
Sorted elements: 9 12 45 76 
```


***

### Visual Representation of Sorting

Before sort:


| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Value | 45 | 12 | 9 | 76 |

After sort:


| Index | 0 | 1 | 2 | 3 |
| :-- | :-- | :-- | :-- | :-- |
| Value | 9 | 12 | 45 | 76 |


***

## Multidimensional Arrays in Java

Multidimensional arrays are arrays of arrays, e.g., 2D arrays as matrices.

***

### Declaring and Initializing a 2D Array

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
```


***

### Visual Representation of a 2D Array

|  | 0 | 1 | 2 |
| :-- | :-- | :-- | :-- |
| Row 0 | 1 | 2 | 3 |
| Row 1 | 4 | 5 | 6 |


***

### Accessing Elements in 2D Arrays

```java
int value = matrix[1][2];  // 6
System.out.println(value);
```

- Step 1: Access row 1 (`{4,5,6}`).
- Step 2: Access column 2 in row 1 (`6`).
- Step 3: Value `6` printed.

***

### Iterating Over 2D Arrays

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

### Real-World Example: Matrix Addition

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

- Step 1: Initialize matrices.
- Step 2: Iterate elements, add corresponding positions.
- Step 3: Store sums in new matrix.
- Step 4: Print summed matrix.

***
