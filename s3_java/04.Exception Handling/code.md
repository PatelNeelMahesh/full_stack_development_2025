```java
// Java Exception Handling Example: try, catch, finally, throw, and throws

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ExceptionHandlingDemo {

    // Method that declares it may throw IOException
    public static void readFile(String fileName) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(fileName));
        System.out.println("First line: " + reader.readLine());
        reader.close();
    }

    public static void main(String[] args) {
        try {
            System.out.println("Attempting to read file...");
            readFile("nonexistentfile.txt");  // This file does not exist
            System.out.println("File read successfully.");
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        } finally {
            System.out.println("Cleanup actions can be done here.");
        }

        // Throwing an exception manually
        try {
            throw new ArithmeticException("Manual arithmetic exception");
        } catch (ArithmeticException ex) {
            System.out.println("Caught an exception: " + ex.getMessage());
        }
    }
}
```

Explanation:

- `try` block contains code that may cause an exception.
- `catch` block handles the specific exception type thrown.
- `finally` block executes code whether or not exception occurs, e.g., cleanup.
- `throws` declaration is in method signature declaring checked exceptions.
- `throw` keyword manually throws an exception.
- In main, reading a non-existent file triggers `IOException` caught and handled.
- Also shows manual throwing and catching of a runtime exception.

Example output:

```
Attempting to read file...
Caught IOException: nonexistentfile.txt (The system cannot find the file specified)
Cleanup actions can be done here.
Caught an exception: Manual arithmetic exception
```