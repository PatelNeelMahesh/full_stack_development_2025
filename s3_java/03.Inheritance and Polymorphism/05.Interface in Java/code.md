```java
// Java Interface Example with Multiple Interfaces and Default Methods

// Define interface Human with abstract methods
interface Human {
    void learn(String str);
    void work();
    int duration = 10;  // public static final by default
}

// Define interface Recruitment with abstract methods
interface Recruitment {
    boolean screening(int score);
    boolean interview(boolean selected);
}

// Programmer class implements both interfaces
class Programmer implements Human, Recruitment {
    // Implement learn method from Human
    public void learn(String str) {
        System.out.println("Learn using " + str);
    }

    // Implement work method from Human
    public void work() {
        System.out.println("Develop applications");
    }

    // Implement screening method from Recruitment
    public boolean screening(int score) {
        System.out.println("Attend screening test");
        int threshold = 20;
        return score > threshold;
    }

    // Implement interview method from Recruitment
    public boolean interview(boolean selected) {
        System.out.println("Attend interview");
        return selected;
    }
}

// Test class to demonstrate interface implementation
public class HumanTest {
    public static void main(String[] args) {
        Programmer trainee = new Programmer();

        trainee.learn("Coding");
        trainee.work();

        boolean passedScreening = trainee.screening(30);
        System.out.println("Screening passed: " + passedScreening);

        boolean passedInterview = trainee.interview(true);
        System.out.println("Interview passed: " + passedInterview);
    }
}
```

This code demonstrates:

- How to declare interfaces with abstract methods and constants.
- A class implementing multiple interfaces using the `implements` keyword.
- The class must provide implementations for all interface methods.
- Interfaces allow multiple inheritance of type in Java.
- The test class calls interface methods via implemented class.

Output:

```
Learn using Coding
Develop applications
Attend screening test
Screening passed: true
Attend interview
Interview passed: true
```