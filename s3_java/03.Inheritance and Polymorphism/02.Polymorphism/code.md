```java
// Polymorphism in Java: Compile-Time and Run-Time Examples

// Compile-Time Polymorphism using Method Overloading
class Calculator {
    // Method with two integer parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method with three integer parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method with double parameters
    public double add(double a, double b) {
        return a + b;
    }
}

// Run-Time Polymorphism using Method Overriding
class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Compile-time polymorphism (method overloading)
        Calculator calc = new Calculator();
        System.out.println("Add two ints: " + calc.add(10, 20));
        System.out.println("Add three ints: " + calc.add(10, 20, 30));
        System.out.println("Add two doubles: " + calc.add(10.5, 20.5));

        // Run-time polymorphism (method overriding)
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();

        animal1.sound(); // Calls Dog's sound()
        animal2.sound(); // Calls Cat's sound()
    }
}
```

This code demonstrates:

- **Compile-time polymorphism** with multiple `add` methods differentiated by parameter counts and types.
- **Run-time polymorphism** where the superclass reference points to subclass objects and the overridden method corresponding to the actual object is called at runtime.

Output:

```
Add two ints: 30
Add three ints: 60
Add two doubles: 31.0
Dog barks
Cat meows
```