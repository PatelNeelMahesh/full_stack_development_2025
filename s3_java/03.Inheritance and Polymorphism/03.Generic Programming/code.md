```java
// In-Depth Example of Generics in Java

// Generic class with a type parameter T
public class Box<T> {
    private T content;

    // Constructor accepting a value of type T
    public Box(T content) {
        this.content = content;
    }

    // Getter method returning content of type T
    public T getContent() {
        return content;
    }

    // Setter method to update content
    public void setContent(T content) {
        this.content = content;
    }

    // Generic method with its own type parameter U
    public <U> void inspect(U u) {
        System.out.println("T: " + content.getClass().getName());
        System.out.println("U: " + u.getClass().getName());
    }
}

// Generic method example outside generic class
class GenericMethodExample {
    // Generic method to print elements of any array type
    public static <E> void printArray(E[] inputArray) {
        for (E element : inputArray) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}

public class GenericDemo {
    public static void main(String[] args) {
        // Generic class usage with Integer
        Box<Integer> intBox = new Box<>(123);
        System.out.println("Content of intBox: " + intBox.getContent());
        intBox.inspect("Hello");

        // Generic class usage with String
        Box<String> strBox = new Box<>("Generic String");
        System.out.println("Content of strBox: " + strBox.getContent());
        strBox.inspect(456);

        // Generic method usage with String array
        String[] stringArray = {"Java", "Generics", "Example"};
        GenericMethodExample.printArray(stringArray);

        // Generic method usage with Integer array
        Integer[] intArray = {1, 2, 3, 4, 5};
        GenericMethodExample.printArray(intArray);
    }
}
```

**Explanation:**

- `Box<T>` is a generic class parameterized with a type variable `T`.
- It can hold objects of any type specified during instantiation.
- The method `inspect(U u)` is a generic method with its own type parameter `U`.
- The `GenericMethodExample` class shows a standalone generic method `printArray` that prints arrays of any type.
- In `main`, we create instances of the generic class with different types and invoke generic methods with various types.

**Output:**

```
Content of intBox: 123
T: java.lang.Integer
U: java.lang.String
Content of strBox: Generic String
T: java.lang.String
U: java.lang.Integer
Java Generics Example 
1 2 3 4 5 
```