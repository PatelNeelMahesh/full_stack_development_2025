# Java Final Keyword Practice Assignment


***

### 1. Explain the role of the final keyword in Java and its various use cases.

**Problem Statement:** Describe how `final` affects variables, methods, and classes and why it is important in designing immutable or secure code.

***

### 2. Final Variables as Constants

**Problem Statement:**
Create final variables in a class representing constants like `PI` or maximum allowed connections. Show compile-time error when attempting to modify them.

***

### 3. Using final with Reference Variables

**Problem Statement:**
Declare a final reference to a mutable object like `ArrayList`. Demonstrate that the reference cannot change but the internal object can be modified.

***

### 4. Final Methods Prevent Overriding

**Problem Statement:**
Create a superclass with a final method and attempt to override it in a subclass. Explain the resulting compilation error.

***

### 5. Final Classes Cannot be Extended

**Problem Statement:**
Declare a final class and try to inherit from it. Document the compilation failure.

***

### 6. Final Parameters in Methods

**Problem Statement:**
Define a method with final parameters. Attempt to modify parameter values inside the method and explain why it's not allowed.

***

### 7. Final Variables Initialization Rules

**Problem Statement:**
Create a class with final variables initialized during declaration, and alternatively, initialized inside constructors. Explain the constraints.

***

### 8. Performance Benefits of Final

**Problem Statement:**
Discuss how the JVM optimizes usage of final variables and methods for faster execution.

***

### 9. Using Final for Thread Safety

**Problem Statement:**
Explain how applying final to variables aids thread safety in concurrent Java programs.

***

### 10. Designing an Immutable Class Using Final Keyword

**Problem Statement:**
Design a class with all fields declared as final, no setter methods, and proper initialization via constructor to make it immutable.

***