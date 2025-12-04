```java
// Java Abstract Class and Abstract Methods - In-Depth Example

// Abstract superclass
abstract class Animal {
    String name;

    // Constructor
    public Animal(String name) {
        this.name = name;
    }

    // Abstract method (no implementation) must be implemented by subclasses
    abstract void makeSound();

    // Concrete method with implementation
    public void eat() {
        System.out.println(name + " is eating.");
    }
}

// Subclass implementing the abstract method
class Dog extends Animal {
    public Dog(String name) {
        super(name);  // Call superclass constructor
    }

    // Provide implementation of abstract method
    @Override
    void makeSound() {
        System.out.println(name + " barks.");
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println(name + " meows.");
    }
}

// Demonstration class
public class AbstractDemo {
    public static void main(String[] args) {
        Animal dog = new Dog("Rex");
        Animal cat = new Cat("Whiskers");

        dog.makeSound();
        dog.eat();

        cat.makeSound();
        cat.eat();
    }
}
```

**Explanation:**

- The abstract class `Animal` defines an abstract method `makeSound()` that must be overridden by derived classes.
- It also contains a concrete method `eat()` that is inherited as-is.
- `Dog` and `Cat` classes extend `Animal` and provide their own implementation of `makeSound()`.
- The `super` keyword calls the constructor of the abstract superclass.
- Objects of `Dog` and `Cat` demonstrate polymorphic behavior by calling overridden methods.

**Output:**

```
Rex barks.
Rex is eating.
Whiskers meows.
Whiskers is eating.
```