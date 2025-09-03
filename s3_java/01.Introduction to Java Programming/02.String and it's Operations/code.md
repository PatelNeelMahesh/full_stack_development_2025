```java
public class StringOperationsExample {

    public static void main(String[] args) {

        String original = "  Java Programming is Fun!  ";
        System.out.println("Original: '" + original + "'");

        String trimmed = original.trim();
        System.out.println("Trimmed: '" + trimmed + "'");

        System.out.println("Length: " + trimmed.length());

        System.out.println("Char at index 5: " + trimmed.charAt(5));

        System.out.println("Substring from index 5: " + trimmed.substring(5));
        System.out.println("Substring (5 to 16): " + trimmed.substring(5, 16));

        String concatenated = "Hello".concat(", ").concat("World!");
        System.out.println("Concatenation: " + concatenated);

        System.out.println("Uppercase: " + trimmed.toUpperCase());
        System.out.println("Lowercase: " + trimmed.toLowerCase());

        System.out.println("Index of 'Fun': " + trimmed.indexOf("Fun"));
        System.out.println("Contains 'Prog'? " + trimmed.contains("Prog"));

        System.out.println("Replace 'Fun' with 'Awesome': " + trimmed.replace("Fun", "Awesome"));

        String fruits = "apple,banana,orange";
        String[] fruitArray = fruits.split(",");
        System.out.println("Splitting fruits:");
        for (String fruit : fruitArray) {
            System.out.println(fruit);
        }

        // String Pool demonstration
        String s1 = "Hello";
        String s2 = "Hello";                    // Same reference as s1 (pool reuse)
        String s3 = new String("Hello");        // New object in heap (different reference)

        System.out.println("s1 == s2 : " + (s1 == s2));      // true
        System.out.println("s1 == s3 : " + (s1 == s3));      // false
        System.out.println("s1.equals(s3) : " + s1.equals(s3));  // true
    }
}
```
