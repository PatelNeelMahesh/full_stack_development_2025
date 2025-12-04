```java
// Single Inheritance Example
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class TestSingleInheritance {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}

// Multilevel Inheritance Example
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps.");
    }
}

public class TestMultilevel {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.weep();
    }
}

// Hierarchical Inheritance Example
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows.");
    }
}

public class TestHierarchical {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();

        Cat cat = new Cat();
        cat.eat();
        cat.meow();
    }
}

// Hybrid Inheritance using Interfaces
interface Flyer {
    void fly();
}

interface Swimmer {
    void swim();
}

class Animal {
    void eat() {
        System.out.println("Animal eats.");
    }
}

class Duck extends Animal implements Flyer, Swimmer {
    public void fly() {
        System.out.println("Duck flies.");
    }
    public void swim() {
        System.out.println("Duck swims.");
    }
}

public class TestHybrid {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.eat();
        duck.fly();
        duck.swim();
    }
}
```

