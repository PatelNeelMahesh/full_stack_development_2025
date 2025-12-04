```java
// Superclass and Subclass Example in Java

// Superclass (Parent class)
class Animal {
    String name;

    public void eat() {
        System.out.println("I can eat");
    }
}

// Subclass (Child class) inheriting from Animal
class Dog extends Animal {
    public void display() {
        System.out.println("My name is " + name);
    }

    // Overriding superclass method with additional functionality
    @Override
    public void eat() {
        super.eat();  // Call superclass method
        System.out.println("I eat dog food");
    }

    public void bark() {
        System.out.println("I can bark");
    }
}

// Main class to test inheritance
public class TestInheritance {
    public static void main(String[] args) {
        // Create an object of subclass
        Dog labrador = new Dog();

        // Access superclass field through subclass object
        labrador.name = "Rohu";

        // Call subclass method that uses superclass field
        labrador.display();

        // Call superclass method overridden by subclass
        labrador.eat();

        // Call subclass specific method
        labrador.bark();
    }
}
```

This code demonstration shows:

- The `Animal` class is the **superclass**, containing a `name` field and an `eat()` method.
- The `Dog` class is the **subclass** extending `Animal`. It overrides `eat()` and adds new methods.
- The keyword `super` is used inside `Dog` to call the `Animal`'s `eat()` method.
- In the main method, a `Dog` object accesses fields and methods from both itself and its superclass.

Running this code outputs:

```
My name is Rohu
I can eat
I eat dog food
I can bark
```