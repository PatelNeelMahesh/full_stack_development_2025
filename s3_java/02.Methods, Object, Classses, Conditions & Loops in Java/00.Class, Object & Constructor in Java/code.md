```java
// Class, Object & Constructor in Java

// Define a class representing a simple Bank Account
public class BankAccount {
    // Instance variables (attributes)
    private String accountHolderName;
    private double balance;

    // Parameterized Constructor to initialize the object
    public BankAccount(String accountHolderName, double initialBalance) {
        this.accountHolderName = accountHolderName;  // 'this' differentiates instance vars and parameters
        this.balance = initialBalance;
    }

    // Method to deposit an amount
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited. New balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // Method to withdraw an amount
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(amount + " withdrawn. Remaining balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal or insufficient funds.");
        }
    }

    // Method to display account details
    public void displayAccountInfo() {
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    // Main method to demonstrate class usage
    public static void main(String[] args) {
        // Creating object of BankAccount class and initializing with constructor
        BankAccount myAccount = new BankAccount("Alice Smith", 500.0);

        // Accessing methods on object to operate on data
        myAccount.displayAccountInfo();

        myAccount.deposit(150.0);      // Deposits 150
        myAccount.withdraw(100.0);     // Withdraws 100

        myAccount.displayAccountInfo(); // Show updated info
    }
}
```

