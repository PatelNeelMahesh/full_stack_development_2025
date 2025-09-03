# Introduction to Data Structures and Algorithms

Data Structures and Algorithms (DSA) are the single most important pillars for anyone aiming to master programming, computer science, or crack technical interviews. They allow us to store, process, and manage data efficiently, and are the root of solving real-life problems by logic and code. This guide is a deep introduction, designed for absolute beginners and also useful for those targeting advanced DSA expertise, using only C++.

***

## What are Data Structures?

A **data structure** is a systematic way to organize, store, and manage data in computer memory so that it can be accessed and modified efficiently. Data structures dictate how data can be added, retrieved, searched, and removed—directly affecting the speed and efficiency of programs.

### Why Are Data Structures Important?

- **Performance:** The right data structure can mean the difference between code running in milliseconds or hours.
- **Scalability:** Good data structures make it possible to work with large or complex data seamlessly.
- **Organization:** Enable logical arrangement of data for complex operations.
- **Reusability:** Many data structures can be abstracted and reused in different scenarios.


### Real-Life Examples

| Scenario | Data Structure Used | Why? |
| :-- | :-- | :-- |
| Contact List | Array/List | Easy, indexed search and traversal |
| Browser History | Stack | Access most recent page first (LIFO) |
| Printer Queue | Queue | Process requests in order (FIFO) |
| Maps Navigation | Graph | Finding shortest route, locations linked |
| Fast Lookups | Hash Table | Instantly find values by key (O(1)) |
| File System | Tree | Folders, subfolders (hierarchical) |

### Categories of Data Structures

- **Primitive Data Structures:** Built-in types (int, char, float, double, bool)
- **Non-Primitive Data Structures:** Built using primitive types
    - **Linear:** Array, Linked List, Stack, Queue
    - **Non-Linear:** Trees, Graphs
    - **Hash-based:** Hash Table, Hash Map


### How Data Structures Work: C++ Array Example

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[^5] = {10, 20, 30, 40, 50};
    // Index-based access
    cout << "3rd element: " << arr[^1] << endl; // Outputs 30
    // Traversal
    for (int i = 0; i < 5; ++i)
        cout << arr[i] << " ";
    return 0;
}
```


***

## What are Algorithms?

An **algorithm** is a collection of well-defined, step-by-step instructions that take input, manipulate data (often using data structures), and produce an output. It’s the logic behind every task your program does—sorting, searching, calculating, or even playing a game.

### Algorithm Properties

- **Input/Output:** Accepts input \& produces output.
- **Definiteness:** Every step is precisely defined.
- **Finiteness:** Terminates after a finite number of steps.
- **Correctness:** Yields the expected, correct result.
- **Effectiveness:** Each operation can be performed exactly and in finite time.
- **Efficiency:** Uses minimal resources (time and memory).


### Measuring Algorithm Efficiency

- **Time Complexity:** How fast does it run as data size grows? *(Big O notation)*
    - O(1) – Constant time (fastest)
    - O(log n) – Logarithmic time (very efficient, e.g. Binary Search)
    - O(n) – Linear time (proportional to input)
    - O(n log n) – e.g. Merge Sort
    - O(n²) – Quadratic (slow for large n)
- **Space Complexity:** How much extra memory is needed?


### Algorithm Steps in C++: Finding Maximum in an Array

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[^2] = {8, 2, 17, 6, 10, 5};
    int maxVal = arr;
    for (int i = 1; i < 6; ++i) {
        if (arr[i] > maxVal)
            maxVal = arr[i];
    }
    cout << "The maximum value is: " << maxVal << endl;
    return 0;
}
```


***

## Why is DSA Crucial in Programming?

- **Solves Problems Fast:** For example, searching a number in a sorted list with Binary Search (O(log n)) is much faster than a simple scan (O(n)).
- **Enables Real-world Applications:** Algorithms drive everything from banking systems, flight booking, search engines, cryptocurrency, and AI.
- **Core of Technical Interviews:** Companies value candidates who write optimized code and solve unseen problems under constraints.
- **Foundation for Advanced Domains:** Competitive programming, system design, and machine learning all use DSA concepts.

***

## Common Data Structure Concepts in Detail

### 1. Linear Data Structures

**Ordered sequences where elements are accessed sequentially.**

#### Arrays

- **Definition:** Collection of elements stored in contiguous memory locations.
- **Drawbacks:** Fixed size, costly insertions/deletions in the middle.
- **C++ Example:**

```cpp
int arr[^3] = {1, 3, 5, 7};
arr[^1] = 10;  // Change 3rd element to 10
```


#### Linked Lists

- **Definition:** Elements (nodes) linked using pointers.
- **Types:** Singly (one direction), Doubly (both directions), Circular.
- **Benefits:** Easy insertions/deletions, dynamic size.
- **C++ Node Declaration:**

```cpp
struct Node {
    int data;
    Node* next;
};
Node* head = nullptr;
```


#### Stack (LIFO)

- **Use Case:** Undo features, recursion call stack.
- **Key Operations:** push(), pop(), top()
- **C++ Example:**

```cpp
#include <stack>
stack<int> s;
s.push(10); s.push(20);
s.pop(); // Removes 20
```


#### Queue (FIFO)

- **Use Case:** Printer queue, order processing.
- **Key Operations:** enqueue (push), dequeue (pop)
- **C++ Example:**

```cpp
#include <queue>
queue<int> q;
q.push(1); q.push(2);
q.pop(); // Removes 1
```


### 2. Non-Linear Data Structures

**Data arranged in hierarchical or network shapes.**

#### Trees

- **Definition:** Hierarchical with parent-child concept.
    - **Binary Tree:** Every node has 0-2 children
    - **Binary Search Tree:** Left < Node < Right
- **Use Cases:** File systems, parsing expressions.
- **C++ Node Structure:**

```cpp
struct TreeNode {
    int data;
    TreeNode* left, *right;
};
```


#### Graphs

- **Definition:** Collection of nodes (vertices) and edges. Can be directed/undirected, weighted/unweighted.
- **Use Cases:** Social networks, routing maps.
- **Representation:**
    - Adjacency List (C++) e.g. `vector<vector<int>> graph;`
    - Adjacency Matrix `int adj[n][n];`


#### Hash Table

- **Definition:** Stores key-value pairs, provides fast access.
- **Use Cases:** Caching, counting frequencies.
- **C++ Example:**

```cpp
#include <unordered_map>
unordered_map<string, int> dict;
dict["ram"] = 10;
```


***

## Common Algorithm Types

### Searching Algorithms

- **Linear Search:** Step through each element. O(n)
- **Binary Search:** Search sorted array by halving. O(log n)

```cpp
int binarySearch(int arr[], int n, int x) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high)/2;
        if (arr[mid] == x) return mid;
        else if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```


### Sorting Algorithms

- **Bubble Sort, Selection Sort, Insertion Sort:** Simple but slow for big data.
- **Merge Sort, Quick Sort, Heap Sort:** Advanced and efficient (O(n log n)).
- **Example: Bubble Sort**

```cpp
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; ++i)
        for (int j = 0; j < n-i-1; ++j)
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
}
```


### Recursion

- **Definition:** A function calling itself to break big problems into smaller ones.
- **Example: Factorial**

```cpp
int factorial(int n){
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```


### Dynamic Programming

- **Solves**: Problems with optimal substructure and overlapping subproblems.
- **Example:** Fibonacci with memoization (stores previous results)

```cpp
int fib(int n, vector<int> &dp) {
    if(n<=1) return n;
    if(dp[n]!=-1) return dp[n];
    return dp[n]=fib(n-1,dp)+fib(n-2,dp);
}
```


### Greedy Algorithms

- **Approach:** Take the local best choice at each step.
- **Example:** Making change with lowest coins.

***

## Key Terminology Table

| Term | Explanation |
| :-- | :-- |
| Node | Basic unit in lists, trees, graphs |
| Pointer | Variable holding address of another variable/object |
| Root, Leaf | Special tree node types (start/end) |
| Parent/Child | Relationship in trees |
| Edge, Vertex | Graph components |
| Heap Property | Parent is always >= (max heap) or <= (min heap) its children |
| Circular LinkedList | Last node points back to first |
| Traversal | Visiting all nodes in DS/graph/tree (DFS, BFS) |
| STL | C++ Standard Template Library—ready-to-use data structures |
| Memory Allocation | Static (array) vs. dynamic (linked list, STL containers) |


***

## How to Start DSA in C++

**1. Master C++ basics:**

- Variables, loops, conditional statements
- Functions and recursion
- Pointers and dynamic memory allocation (`new`, `delete`)
- STL containers: vector, stack, queue, set, map

**2. Learn each data structure and its operations one-by-one:**

- Start with arrays and strings
- Progress to linked lists, stacks, and queues
- Move to trees, graphs, and hashing

**3. Practice fundamental algorithms:**

- Implement searching and sorting from scratch
- Code and debug recursive functions
- Analyze time and space complexities for each

**4. Build problem-solving routine:**

- Use platforms like LeetCode, Codeforces, Hackerrank, GFG, etc.
- Read editorials and discuss alternative solutions

***

## DSA in the Real World

- **Google Search:** Fast lookup and ranking (hashing, graphs, search algorithms)
- **YouTube Recommendations:** Graph traversals, tree structures
- **Bank Transactions:** Queues, priority queues
- **Games' Pathfinding:** Graphs (A*, Dijkstra’s)

***

## Summary

- **Data Structures** = HOW you organize data.
- **Algorithms** = WHAT to do with data in steps.
- **Together:** Allow computers to process information efficiently and solve problems in the best way possible.
- **C++:** A great language to learn DSA, offering both high-level abstractions (STL) and low-level control.

***

