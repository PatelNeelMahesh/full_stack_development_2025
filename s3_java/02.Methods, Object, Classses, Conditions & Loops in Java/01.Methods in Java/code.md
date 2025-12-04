
```java
// Methods in Java: Example Code

public class Calculator {

    // Instance method with return value
    int add(int a, int b) {
        int sum = a + b;
        return sum;
    }

    // Static method
    static int square(int x) {
        return x * x;
    }

    // Method overloading
    void print(int num) {
        System.out.println("Integer: " + num);
    }

    void print(String msg) {
        System.out.println("String: " + msg);
    }

    // Void method
    void displayMessage() {
        System.out.println("Welcome to Java Methods!");
    }

    // Recursive method
    int factorial(int n) {
        if (n == 0) return 1;
        else return n * factorial(n - 1);
    }

    // Method demonstrating parameter passing (call by value)
    void changeValue(int num) {
        num = 100;
        System.out.println("Inside method, num = " + num);
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        // Instance method call
        int result = calc.add(5, 10);
        System.out.println("Sum: " + result);

        // Static method call
        int sq = Calculator.square(7);
        System.out.println("Square: " + sq);

        // Method overloading
        calc.print(25);
        calc.print("Hello");

        // Void method
        calc.displayMessage();

        // Recursive method
        int fact = calc.factorial(5);
        System.out.println("Factorial of 5: " + fact);

        // Parameter passing
        int value = 50;
        System.out.println("Before changeValue, value = " + value);
        calc.changeValue(value);
        System.out.println("After changeValue, value = " + value);
    }
}
```

