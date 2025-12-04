```java
// Package declaration example in Java

// File: mypack/MyPackageClass.java
package mypack;

public class MyPackageClass {
    public static void main(String[] args) {
        System.out.println("This is my package!");
    }
}

// ------------------------------

// Another class in the same package using MyPackageClass
// File: mypack/UseMyPackageClass.java
package mypack;

public class UseMyPackageClass {
    public static void main(String[] args) {
        MyPackageClass obj = new MyPackageClass();
        obj.main(args);
    }
}

// ------------------------------

// Using the package from a different package
// File: test/TestPackageUsage.java
package test;

// Import the class from the 'mypack' package
import mypack.MyPackageClass;

public class TestPackageUsage {
    public static void main(String[] args) {
        MyPackageClass obj = new MyPackageClass();
        obj.main(args);
    }
}
```


### Additional Notes:

- The first line in each file declares the package it belongs to.
- Package name corresponds to the folder/directory structure.
- To compile with package structure, use:

```bash
javac -d . mypack/MyPackageClass.java
javac -d . mypack/UseMyPackageClass.java
javac -d . test/TestPackageUsage.java
```

- Run using fully qualified class name:

```bash
java mypack.MyPackageClass
java test.TestPackageUsage
```