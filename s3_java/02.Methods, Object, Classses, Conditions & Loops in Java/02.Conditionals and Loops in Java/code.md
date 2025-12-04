```java
public class ConditionalLoopsExample {

    public static void main(String[] args) {

        // 1. The if Statement
        int age = 18;
        if (age >= 18) {
            System.out.println("You are eligible to vote.");
        }

        System.out.println();

        // 2. The if-else Statement
        int number = 5;
        if (number % 2 == 0) {
            System.out.println("Even number");
        } else {
            System.out.println("Odd number");
        }

        System.out.println();

        // 3. The if-else-if Ladder
        int marks = 75;
        if (marks >= 90) {
            System.out.println("Grade A");
        } else if (marks >= 75) {
            System.out.println("Grade B");
        } else if (marks >= 50) {
            System.out.println("Grade C");
        } else {
            System.out.println("Fail");
        }

        System.out.println();

        // 4. The switch Statement
        int day = 3;
        switch (day) {
            case 1: 
                System.out.println("Monday");
                break;
            case 2: 
                System.out.println("Tuesday");
                break;
            case 3: 
                System.out.println("Wednesday");
                break;
            default: 
                System.out.println("Invalid day");
                break;
        }

        System.out.println();

        // 1. The for Loop
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }

        System.out.println();

        // 2. The while Loop
        int i = 0;
        while (i < 3) {
            System.out.println("i: " + i);
            i++;
        }

        System.out.println();

        // 3. The do-while Loop
        i = 0;
        do {
            System.out.println("i: " + i);
            i++;
        } while (i < 3);

        System.out.println();

        // 4. The for-each Loop
        int[] numbers = {5, 10, 15};
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}
```

