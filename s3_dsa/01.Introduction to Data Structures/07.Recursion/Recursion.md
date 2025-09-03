# Recursion


***

## Concept of Recursion

Recursion is a powerful programming technique where a function **calls itself** to solve smaller instances of the same problem. Instead of solving a problem directly, recursion breaks it down into simpler subproblems of the same type until reaching a base case — the simplest form of the problem which can be solved directly.

Recursion is often used to simplify complex problems that can be expressed in terms of similar subproblems, including many divide-and-conquer algorithms and tree or graph traversals.

***

## How Recursion Works: Key Points

- **Recursive Case:** The part of the function where the function calls itself with a smaller or simpler input.
- **Base Case:** The stopping condition which prevents infinite recursion by defining a simplest problem instance.
- **Call Stack:** Each recursive call adds a new layer (context) to the call stack, which is popped once the base case is reached and the results are returned back up.

***
# Example of Recursion: Sum of Natural Numbers

```cpp
#include <iostream>  // Required for standard input/output
using namespace std;

// Function to calculate sum of first n natural numbers using recursion
int sum(int n) {
    if (n == 0) {              // Base case: when n = 0, stop recursion
        return 0;              // Returning 0 because sum(0) = 0
    } else {
        // Recursive case: adds current number (n) with sum of previous numbers
        return n + sum(n - 1); // Function calls itself with a smaller problem
    }
}

int main() {
    int number = 5; // We need sum of numbers from 1 to 5
    // Call recursive function and display result
    cout << "Sum of first " << number 
         << " natural numbers is " << sum(number) << endl;
    return 0;       // Exit program
}
```


***

### 🔎 Explanation (Step by Step Execution)

For `sum(5)`:

```
sum(5)
 = 5 + sum(4)
       = 4 + sum(3)
             = 3 + sum(2)
                   = 2 + sum(1)
                         = 1 + sum(0)
                               = 0 (base case reached)
```

Now recursion **unwinds**:

```
sum(1) = 1 + 0 = 1
sum(2) = 2 + 1 = 3
sum(3) = 3 + 3 = 6
sum(4) = 4 + 6 = 10
sum(5) = 5 + 10 = 15
```

✅ Final Answer = `15`.

***

### ⏱ Time and 💾 Space Complexity

- **Time Complexity:**
Each call reduces `n` by 1 → total **n calls** → **O(n)**.
- **Space Complexity:**
Each recursive call is stored in function call stack until base case → **O(n)** stack space.

**Representation of function stack for sum(5):**

```
sum(5)
sum(4)
sum(3)
sum(2)
sum(1)
sum(0)  <-- base case, starts returning back
```


***

# Additional Recursion Examples


***

## 1. Factorial of a Number

```cpp
int factorial(int n) {
    if (n == 0)            // Base case: factorial(0) = 1
        return 1;
    else
        return n * factorial(n - 1); // Recursive call: n * (n-1)!
}
```


### Step by Step Example: factorial(5)

```
factorial(5)
 = 5 * factorial(4)
      = 4 * factorial(3)
           = 3 * factorial(2)
                = 2 * factorial(1)
                     = 1 * factorial(0)
                           = 1 (base case)
```

**Unwinding:**

```
factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120
```

✅ Answer = 120.

***

### Complexities

- **Time Complexity:** O(n) (n multiplications).
- **Space Complexity:** O(n) (stack stores n recursive calls).

**Representation:**

Stack grows until `factorial(0)` then unwinds:

```
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
factorial(0) <-- base case
```


***

## 2. Fibonacci Sequence

```cpp
int fibonacci(int n) {
    if (n <= 1)             // Base case: fibonacci(0)=0, fibonacci(1)=1
        return n;
    else
        // Recursive relation: F(n) = F(n-1) + F(n-2)
        return fibonacci(n-1) + fibonacci(n-2);
}
```


### Step by Step Example: fibonacci(5)

```
fibonacci(5) 
 = fibonacci(4) + fibonacci(3)
   = (fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))
   = ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))) + ...
```

Grows into a **tree of calls**.

**Call Tree Representation (partial):**

```
               fib(5)
          /              \
      fib(4)             fib(3)
      /    \             /     \
   fib(3)  fib(2)    fib(2)   fib(1)
   ...
```


***

### Complexities

- **Time Complexity:** **O(2^n)** → because each call generates 2 more calls (exponential growth).
- **Space Complexity:** **O(n)** (recursion depth = n).

⚡ **Optimization:** Use **Dynamic Programming / Memoization** → reduces time to O(n).

***

## 3. Greatest Common Divisor (GCD) using Euclid’s Algorithm

```cpp
int gcd(int a, int b) {
    if (b == 0)             // Base case: if second number = 0
        return a;           // GCD = a
    else
        return gcd(b, a % b);   // Recursive step: gcd(a, b) = gcd(b, a mod b)
}
```


### Step by Step Example: gcd(48,18)

```
gcd(48,18)
 = gcd(18, 48 % 18)
 = gcd(18, 12)
 = gcd(12, 18 % 12)
 = gcd(12, 6)
 = gcd(6, 12 % 6)
 = gcd(6, 0)  <-- base case reached
```

✅ Answer = 6.

***

### Complexities

- **Time Complexity:** O(log(min(a, b))) → Very efficient (each step reduces numbers).
- **Space Complexity:** O(log(min(a, b))) → Due to recursive call depth.

**Representation:**

```
gcd(48,18)
gcd(18,12)
gcd(12,6)
gcd(6,0) <-- base case, answer returned
```


***

# ✅ Final Recap

| Recursive Problem | Base Case Example | Time Complexity | Space Complexity | Representation |
| :-- | :-- | :-- | :-- | :-- |
| Sum of N numbers | `sum(0) = 0` | O(n) | O(n) | Linear stack of size n |
| Factorial | `factorial(0) = 1` | O(n) | O(n) | Linear stack of size n |
| Fibonacci (naïve) | `fibo(0)=0, fibo(1)=1` | O(2^n) | O(n) | Call tree expansion |
| GCD (Euclid) | `gcd(a,0) = a` | O(log(min(a,b))) | O(log(min(a,b))) | Recursive halving |


***
# \#\# Tower of Hanoi Problem

### Problem Description:

The Tower of Hanoi is a classic puzzle where you need to move a stack of disks from one rod to another, with these rules:

- Only one disk moves at a time.
- A disk can only be placed on a larger disk or empty rod.
- Use an auxiliary rod to help move disks.

Goal: Move all disks from source rod to destination rod.

***

### Recursive Solution Idea:

To move \$ n \$ disks from source to destination:

1. Move top \$ n-1 \$ disks from source to auxiliary rod.
2. Move the largest disk from source to destination rod.
3. Move \$ n-1 \$ disks from auxiliary to destination rod.

This naturally fits recursion, breaking down the problem.

***

### Recursive Algorithm:

```
TOH(n, source, auxiliary, destination)
    if n == 1
        move disk from source to destination
    else
        TOH(n-1, source, destination, auxiliary)
        move disk from source to destination
        TOH(n-1, auxiliary, source, destination)
```


***

### C++ Implementation:


***

CODE:

```cpp
#include <iostream>
using namespace std;

/*
Tower of Hanoi Explanation:
---------------------------
We have 3 rods: Source (A), Auxiliary (B), Destination (C).
We need to move 'n' disks from Source to Destination with the help of Auxiliary.
Rules:
1. Only one disk can be moved at a time.
2. A smaller disk must always be on top of a larger disk.
3. You can only move the top disk of a stack.
*/

/*
Recursive Thinking (Divide & Conquer):
--------------------------------------
To move 'n' disks from Source → Destination:
1. Move n-1 disks from Source → Auxiliary (using Destination as helper).
2. Move the nth (largest) disk from Source → Destination directly.
3. Move n-1 disks from Auxiliary → Destination (using Source as helper).
*/

// Recursive function to solve Tower of Hanoi
void towerOfHanoi(int n, char source, char auxiliary, char destination) {
    /*
    Base Case:
    If there's only one disk left, directly move it from Source → Destination
    because no auxiliary steps are needed.
    */
    if (n == 1) {
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return; // End this recursive path
    }

    /*
    Step 1: Move top n-1 disks from Source → Auxiliary
    (Destination is used as a temporary helper)
    */
    towerOfHanoi(n-1, source, destination, auxiliary);

    /*
    Step 2: Move the nth (largest) disk directly from Source → Destination
    */
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;

    /*
    Step 3: Move the n-1 disks from Auxiliary → Destination
    (Source is used as a temporary helper this time)
    */
    towerOfHanoi(n-1, auxiliary, source, destination);
}

int main() {
    int n = 3;  // Number of disks to move (can be changed)
    cout << "Moves required to solve Tower of Hanoi with " << n << " disks:" << endl;

    // Start recursion: move all n disks from Source(A) → Destination(C) using Auxiliary(B)
    towerOfHanoi(n, 'A', 'B', 'C');

    return 0;
}
```


***

### Recursion Flow Example (n=3):

1. Move 2 disks from A → B (using C).
    - Move 1 disk from A → C
    - Move disk 2 from A → B
    - Move 1 disk from C → B
2. Move disk 3 from A → C.
3. Move 2 disks from B → C (using A).
    - Move 1 disk from B → A
    - Move disk 2 from B → C
    - Move 1 disk from A → C

So the sequence for **n=3** is:

```
Move disk 1 from A to C  
Move disk 2 from A to B  
Move disk 1 from C to B  
Move disk 3 from A to C  
Move disk 1 from B to A  
Move disk 2 from B to C  
Move disk 1 from A to C  
```


***

### Time Complexity Analysis:

- **At each step**, we make:
    - 1 move (moving the largest disk)
    - 2 recursive calls (solving for `n-1` disks twice)

So recurrence is:

$$
T(n) = 2T(n-1) + 1
$$

- Solving this recurrence gives:

$$
T(n) = 2^n - 1
$$
From the recursive algorithm:

```
TOH(n):
   TOH(n-1)   // Move top n-1 disks
   Move 1 disk (constant time step)
   TOH(n-1)   // Move remaining n-1 disks
```

This gives the recurrence:

$$
T(n) = 2T(n-1) + 1
$$

with the base case:

$$
T(1) = 1
$$

(because only one move is needed when there’s just one disk).

***

## 🔹 Step 2: Expand the Recurrence

Let’s expand:

$$
T(n) = 2T(n-1) + 1
$$

$$
T(n-1) = 2T(n-2) + 1
$$

Substitute:

$$
T(n) = 2\big(2T(n-2) + 1\big) + 1
$$

$$
T(n) = 2^2T(n-2) + 2 + 1
$$

Next expansion:

$$
T(n-2) = 2T(n-3) + 1
$$

So:

$$
T(n) = 2^2\big(2T(n-3) + 1\big) + 2 + 1
$$

$$
T(n) = 2^3T(n-3) + 4 + 2 + 1
$$

Notice a **pattern** forming:

$$
T(n) = 2^kT(n-k) + (2^{k-1} + 2^{k-2} + … + 2^0)
$$

***

## 🔹 Step 3: Generalize

The summation in parentheses is a **geometric series**:

$$
1 + 2 + 4 + \dots + 2^{k-1} = 2^k - 1
$$

So:

$$
T(n) = 2^kT(n-k) + (2^k - 1)
$$

***

## 🔹 Step 4: Stopping Point

When $k = n-1$, we reach $T(1) = 1$. So:

$$
T(n) = 2^{n-1}T(1) + (2^{n-1} - 1)
$$

$$
T(n) = 2^{n-1}(1) + (2^{n-1} - 1)
$$

$$
T(n) = 2^n - 1
$$

***

## ✅ Final Result

- **Number of moves required:**

$$
T(n) = 2^n - 1
$$

- **Asymptotic Time Complexity:**

$$
O(2^n)
$$

***

## 🔹 Space Complexity (Reminder)

- Maximum recursion depth = $n$, so stack space = **O(n)**.

***

📌 **Example Results:**

- For **n=3** → $2^3 - 1 = 7$ moves.
- For **n=5** → $2^5 - 1 = 31$ moves.
- For **n=10** → $2^{10} - 1 = 1023$ moves.

***

## Summary of Recursion

| Concept | Description |
| :-- | :-- |
| Recursive Case | The problem broken into smaller identical problems solved by recursive calls. |
| Base Case | Condition to stop recursion |
| Call Stack | Stack to manage active function calls |
| Applications | Sorting (Quick Sort, Merge Sort), Tree Traversal, Backtracking, Dynamic Programming, Tower of Hanoi |
| Advantages | Elegant, simplifies complex problems |
| Disadvantages | Higher memory usage due to stack; risk of stack overflow if not carefully managed |


***
