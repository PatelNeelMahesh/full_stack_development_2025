```java
// Java final keyword in-depth examples

// Final variable: value cannot be reassigned once initialized
public class FinalVariableExample {
    final int MAX_VALUE = 100;

    void display() {
        System.out.println("Max Value: " + MAX_VALUE);
        // MAX_VALUE = 200; // Compile-time error: cannot assign a value to final variable
    }

    public static void main(String[] args) {
        FinalVariableExample obj = new FinalVariableExample();
        obj.display();
    }
}

// Final method: cannot be overridden by subclasses
class Parent {
    final void show() {
        System.out.println("This is a final method.");
    }
}

class Child extends Parent {
    // Attempting to override final method causes compile error
    // void show() {
    //     System.out.println("Cannot override final method.");
    // }
}

// Final class: cannot be subclassed
final class ImmutableClass {
    void display() {
        System.out.println("ImmutableClass method.");
    }
}

// The following will cause compilation error because ImmutableClass is final
// class SubClass extends ImmutableClass { }

// Usage of final with parameters: parameter value cannot be modified inside method
class FinalParameter {
    void display(final int number) {
        System.out.println("Number: " + number);
        // number = 10; // Compile-time error
    }
}

// Final with reference variables: reference cannot change, but object can
class FinalReferenceExample {
    final StringBuilder sb = new StringBuilder("Hello");

    void modify() {
        // sb = new StringBuilder("Hi"); // Compile-time error: cannot assign new object
        sb.append(" World"); // Allowed, modifying internal state
        System.out.println(sb);
    }

    public static void main(String[] args) {
        FinalReferenceExample example = new FinalReferenceExample();
        example.modify();
    }
}
```

**Explanation:**

- `final` variables, once assigned, cannot be reassigned.
- `final` methods cannot be overridden in subclasses—ensures method behavior consistency.
- `final` classes cannot be extended, useful for immutable or secure classes.
- Parameters declared final can't be reassigned within the method.
- `final` reference variables cannot reassign the reference but can modify the object's internal state if mutable.