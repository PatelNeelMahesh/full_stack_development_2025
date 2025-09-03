```java
public class ArrayOperationsExample {

    public static void main(String[] args) {

        // Declare and initialize an integer array
        int[] numbers = {45, 12, 9, 76, 33};
        System.out.println("Original array:");
        printArray(numbers);

        // Access and modify array elements
        System.out.println("\nElement at index 2: " + numbers[^2]);
        numbers[^2] = 15;  // Change value at index 2
        System.out.println("Array after modifying element at index 2:");
        printArray(numbers);

        // Get length of the array
        System.out.println("\nLength of the array: " + numbers.length);

        // Loop through array with for loop
        System.out.println("\nArray elements using for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }

        // Loop through array with for-each loop
        System.out.println("\nArray elements using for-each loop:");
        for (int num : numbers) {
            System.out.println(num);
        }

        // Copy array using System.arraycopy()
        int[] copiedArray = new int[numbers.length];
        System.arraycopy(numbers, 0, copiedArray, 0, numbers.length);
        System.out.println("\nCopied array:");
        printArray(copiedArray);

        // Sort array using Arrays.sort()
        java.util.Arrays.sort(copiedArray);
        System.out.println("\nSorted copied array:");
        printArray(copiedArray);

        // Searching in array using Arrays.binarySearch()
        int searchValue = 15;
        int searchIndex = java.util.Arrays.binarySearch(copiedArray, searchValue);
        if (searchIndex >= 0) {
            System.out.println("\nElement " + searchValue + " found at index " + searchIndex + " in sorted array.");
        } else {
            System.out.println("\nElement " + searchValue + " not found in the array.");
        }

        // Multidimensional array declaration and initialization
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        System.out.println("\nMultidimensional Array (2x3 Matrix):");
        printMatrix(matrix);

        // Accessing an element in multidimensional array
        System.out.println("\nElement at matrix[^1][^2]: " + matrix[^1][^2]);
    }

    // Utility method to print one-dimensional arrays
    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // Utility method to print two-dimensional arrays
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + "\t");
            }
            System.out.println();
        }
    }
}
```
