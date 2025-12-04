```java
public class StaticNonStaticExample {

    // Static variable shared by all instances
    static int staticCounter = 0;

    // Non-static instance variable unique to each object
    int instanceCounter = 0;

    // Static method
    public static void staticMethod() {
        System.out.println("Static method called.");
        System.out.println("Static counter: " + staticCounter);
        // Can't access instanceCounter here directly
    }

    // Non-static method
    public void instanceMethod() {
        System.out.println("Instance method called.");
        System.out.println("Instance counter: " + instanceCounter);
        // Can access staticCounter here
        System.out.println("Static counter: " + staticCounter);
    }

    public StaticNonStaticExample() {
        staticCounter++;   // Increment static counter for every object created
        instanceCounter++; // Increment instance counter for this object
    }

    public static void main(String[] args) {

        // Calling static method without creating an object
        StaticNonStaticExample.staticMethod();

        // Create first object
        StaticNonStaticExample obj1 = new StaticNonStaticExample();
        obj1.instanceMethod();

        // Create second object
        StaticNonStaticExample obj2 = new StaticNonStaticExample();
        obj2.instanceMethod();

        // Access static variable using class name
        System.out.println("Total objects created (staticCounter): " + StaticNonStaticExample.staticCounter);

        // Access instance variables individually
        System.out.println("obj1 instanceCounter: " + obj1.instanceCounter);
        System.out.println("obj2 instanceCounter: " + obj2.instanceCounter);
    }
}
```

