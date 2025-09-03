
```cpp
#include <iostream>
using namespace std;

// Recursive function to calculate factorial of n
int factorial(int n) {
    if (n <= 1)  // Base case
        return 1;
    else
        return n * factorial(n - 1);
}

// Recursive function to calculate nth Fibonacci number
int fibonacci(int n) {
    if (n <= 1)  // Base case
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

// Recursive function to print numbers from n down to 1 and back to n
void printSequence(int n) {
    if (n == 0)
        return;
    cout << n << " ";
    printSequence(n - 1);
    cout << n << " ";
}

// Tower of Hanoi recursive solution
void towerOfHanoi(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

int main() {
    cout << "==================" << endl;
    cout << "    Recursion     " << endl;
    cout << "==================" << endl << endl;

    cout << "Concept of Recursion:" << endl;
    cout << "---------------------" << endl;
    cout << "Recursion is a process where a function calls itself repeatedly until ";
    cout << "it reaches a base case which stops the recursion." << endl << endl;

    // Factorial Example
    int num = 5;
    cout << "Example 1 - Factorial of " << num << " using recursion:" << endl;
    cout << "Factorial(" << num << ") = " << factorial(num) << endl << endl;

    // Fibonacci Example
    int fibIndex = 7;
    cout << "Example 2 - Fibonacci number at position " << fibIndex << ":" << endl;
    cout << "Fibonacci(" << fibIndex << ") = " << fibonacci(fibIndex) << endl << endl;

    // Print Sequence Example
    int seqNum = 3;
    cout << "Example 3 - Print sequence from " << seqNum << " to 1 and back:" << endl;
    printSequence(seqNum);
    cout << endl << endl;

    // Tower of Hanoi Problem Example
    int disks = 3;
    cout << "Example 4 - Tower of Hanoi Problem with " << disks << " disks:" << endl;
    cout << "Move the disks from source pole 'A' to destination pole 'C' using auxiliary pole 'B':" << endl;
    towerOfHanoi(disks, 'A', 'C', 'B');

    return 0;
}
```


***

### Expected Console Output (README style)

```
==================
    Recursion     
==================

Concept of Recursion:
---------------------
Recursion is a process where a function calls itself repeatedly until it reaches a base case which stops the recursion.

Example 1 - Factorial of 5 using recursion:
Factorial(5) = 120

Example 2 - Fibonacci number at position 7:
Fibonacci(7) = 13

Example 3 - Print sequence from 3 to 1 and back:
3 2 1 1 2 3 

Example 4 - Tower of Hanoi Problem with 3 disks:
Move the disks from source pole 'A' to destination pole 'C' using auxiliary pole 'B':
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```


***
