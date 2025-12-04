# Java Exception Handling:


***

### 1. Explain the difference between checked and unchecked exceptions.

**Problem Statement:** Describe the compilation and runtime impact of checked vs unchecked exceptions, and give examples.

***

### 2. Implement a custom checked exception and demonstrate throwing and catching it.

**Problem Statement:** Write a custom exception class extending `Exception`. Throw it in a method and catch it in the caller.

***

### 3. Implement a custom unchecked exception and demonstrate how it differs from checked exceptions.

**Problem Statement:** Write a custom exception extending `RuntimeException`. Show it can be thrown without explicit handling.

***

### 4. Demonstrate try-with-resources and explain its advantages over traditional try-catch-finally.

**Problem Statement:** Write code using try-with-resources to auto-close streams and explain resource management benefits.

***

### 5. Explain exception propagation and show it with a multi-method call chain example.

**Problem Statement:** Create methods calling one another, throwing exceptions at the bottom and catching at the top.

***

### 6. Discuss best practices on exception handling such as specific catches, meaningful messages, and fail-fast.

**Problem Statement:** Write a sample code illustrating proper exception handling adhering to best practices.

***

### 7. How to create a global exception handler in Java web applications (e.g., Spring Boot)?

**Problem Statement:** Explain and implement a global exception handler using annotations.

***

### 8. Show catch block order importance by handling multiple exceptions with subclass-superclass relation.

**Problem Statement:** Write try-catch with `IOException` and `Exception` to demonstrate ordering effects.

***

### 9. Explain how finally block behaves with return statements and exceptions inside try or catch.

**Problem Statement:** Write code returning from try and finally blocks; observe and explain output.

***

### 10. Demonstrate rethrowing exceptions and chaining with custom messages.

**Problem Statement:** Catch an exception, wrap it into another with additional context, and rethrow.

***

### 11. Explain suppression of exceptions in try-with-resources and show code example.

**Problem Statement:** Create code with resources throwing exceptions during close and main block; show suppressed exceptions.

***

### 12. Differentiate Exception vs Error in Java with practical examples.

**Problem Statement:** Illustrate examples causing `OutOfMemoryError` and `NullPointerException`; explain handling differences.

***

### 13. How does Java handle uncaught exceptions in multithreaded programs?

**Problem Statement:** Write code with a thread throwing an exception and demonstrate handling with `UncaughtExceptionHandler`.

***

### 14. Show how to implement rollback in transactions using exception handling.

**Problem Statement:** Write pseudo database transaction code showing rollback on exception.

***

### 15. Explain exception translation and how to implement it in layered applications.

**Problem Statement:** Wrap low-level exceptions into higher-level exceptions with custom messages.

***

### 16. Use Java reflection to analyze exception types declared by a method.

**Problem Statement:** Write code to introspect declared exceptions of a method.

***

### 17. Discuss serialization considerations for exception classes.

**Problem Statement:** Explain how and why to define `serialVersionUID` in custom exceptions.

***

### 18. Implement a hierarchy of exception classes and demonstrate polymorphic catch blocks.

**Problem Statement:** Create related exceptions subclasses and catch using superclass reference.

***

### 19. Demonstrate creating dynamic proxies that proxy method calls and handle exceptions gracefully.

**Problem Statement:** Create dynamic proxy example catching and logging exceptions from delegated method calls.

***

### 20. Discuss performance implications of throwing exceptions and alternatives for control flow.

**Problem Statement:** Analyze code paths where exceptions frequently occur and propose code restructuring.

***