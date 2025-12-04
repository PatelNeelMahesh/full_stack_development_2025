``java
public class ThisKeywordExample {

    private String name;
    private int age;

    // Constructor with parameters having same names as instance variables
    public ThisKeywordExample(String name, int age) {
        this.name = name;   // 'this' refers to instance variable
        this.age = age;
    }

    // Method to display object information using 'this'
    public void display() {
        System.out.println("Name: " + this.name + ", Age: " + this.age);
    }

    // Method that takes another object as parameter using 'this'
    public void compareAge(ThisKeywordExample other) {
        if(this.age > other.age) {
            System.out.println(this.name + " is older than " + other.name);
        } else if(this.age < other.age) {
            System.out.println(this.name + " is younger than " + other.name);
        } else {
            System.out.println(this.name + " and " + other.name + " are the same age.");
        }
    }

    public static void main(String[] args) {
        ThisKeywordExample person1 = new ThisKeywordExample("Alice", 30);
        ThisKeywordExample person2 = new ThisKeywordExample("Bob", 25);

        person1.display();
        person2.display();

        person1.compareAge(person2);

        // Passing this object as parameter
        person2.compareAge(person1);
    }
}
```

