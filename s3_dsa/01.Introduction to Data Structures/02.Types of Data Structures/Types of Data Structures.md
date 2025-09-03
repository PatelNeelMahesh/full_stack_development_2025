# Types of Data Structures — Detailed Explanation with Examples

Data structures fundamentally enable efficient data storage, retrieval, and processing. Choosing the right data structure is crucial for optimizing algorithm performance, memory usage, and code maintainability. This guide explores two major categories—linear and non-linear data structures—with rich detail and illustrative examples.

***

## Linear Data Structures (Expanded Overview)

### What Are Linear Data Structures?

Linear data structures store and organize elements sequentially, such that each element (except the last) has a unique successor, and each element (except the first) has a unique predecessor. This allows elements to be traversed in a single, linear order—either forward or backward depending on the structure.

Linear structures can be **stored contiguously** in memory (like arrays) or **linked dynamically** through pointers/references (like linked lists). This linear arrangement makes operations like traversal very straightforward.

***

### Key Characteristics

- **Sequential organization**: Elements arranged one after another.
- **Direct or indirect addressability**: Arrays provide direct addressability via indices, while linked structures use pointers.
- **Fixed or dynamic size**: Arrays generally have fixed sizes after creation; linked lists are dynamic.
- **Operations**: Insertion, deletion, traversal often have time complexity between $O(1)$ to $O(n)$ depending on position and structure.
- **Use cases**: Simple collections, ordered data, stacks for recursion, queues for scheduling, and more.

***

# 1. Arrays

### What is an Array?

- A **collection of homogeneous elements** stored in **contiguous memory locations**.
- Each element can be accessed directly via its **index**.
- Useful when fast, random access is a priority.


### Important Properties

| Property | Description |
| :-- | :-- |
| Memory | Contiguous block |
| Access Time | $O(1)$ for direct access |
| Insertion/Deletion | $O(n)$ for arbitrary positions (shifting) |
| Size | Fixed (static) or allocated dynamically |
| Multi-dimensional Arrays | Supported (2D, 3D arrays etc.) |

### Example Code

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {2, 4, 6, 8, 10};  // Fixed-size array of 5 elements

    // Traverse and print all elements
    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";

    return 0;
}
```


### Visual Representation

```
Index:  0    1    2    3    4
Value:         
Memory: contiguous block
```


***

# 2. Linked Lists

### What is a Linked List?

- A **dynamic data structure** consisting of nodes.
- Each **node holds data** and a **pointer/reference** to the next node.
- No contiguous memory requirement, grows and shrinks dynamically.


### Types of Linked Lists

| Type | Description |
| :-- | :-- |
| Singly Linked List | Nodes have a single pointer to the next node |
| Doubly Linked List | Nodes have pointers to both next and previous nodes |
| Circular Linked List | Last node points back to the first node, making a circle |

### Advantages

- Dynamic size — can grow or shrink easily.
- Efficient insertions and deletions at the beginning or middle (no shifting like arrays).
- No memory wasted on unused capacity.


### Example: Singly Linked List Node Structure

```cpp
struct Node {
    int data;     // Store the value
    Node* next;   // Pointer to next node

    // Constructor to initialize a node
    Node(int val) : data(val), next(nullptr) {}
};
```


### Visual Representation (Singly Linked List)

```
[Data: 2 | Next] --> [Data: 4 | Next] --> [Data: 6 | Next] --> nullptr
```


***

# 3. Stacks (Last-In, First-Out - LIFO)

### What is a Stack?

- A collection where the **last element inserted is the first to be removed**.
- Only two main operations:
    - **push()**: Add an element to the top.
    - **pop()**: Remove the element at the top.
- **peek() or top()**: View the top element without removing.


### Use Cases

- Function call management (recursion call stack).
- Undo operations in text editors.
- Expression evaluation and syntax parsing.


### Code Example Using C++ STL Stack

```cpp
#include <stack>
#include <iostream>
using namespace std;

int main() {
    stack<int> s;
    s.push(1);
    s.push(2);
    cout << s.top() << endl;  // Output: 2

    s.pop();                   // Remove top element (2)
    cout << s.top() << endl;  // Output: 1

    return 0;
}
```


### Visual Representation

```
Stack Top
  ┌───┐
  │ 2 │  <-- last pushed (top)
  ├───┤
  │ 1 │
  └───┘
```


***

# 4. Queues (First-In, First-Out - FIFO)

### What is a Queue?

- A collection where the **first element inserted is the first to be removed**.
- Main operations:
    - **enqueue()** or **push()**: Add element at rear (end).
    - **dequeue()** or **pop()**: Remove element from front (beginning).
- Useful in scheduling, buffering, and breadth-first search (BFS).


### Code Example Using C++ STL Queue

```cpp
#include <queue>
#include <iostream>
using namespace std;

int main() {
    queue<int> q;
    q.push(5);
    q.push(10);
    cout << q.front() << endl;  // Output: 5

    q.pop();                    // Remove front (5)
    cout << q.front() << endl;  // Output: 10

    return 0;
}
```


### Visual Representation

```
Front                        Rear
  ┌───┐                      ┌───┐
  │ 5 │ --> 10                │10 │
  └───┘                      └───┘
```


***

# 5. Additional Linear Data Structures

## Deque (Double-Ended Queue)

- Allows insertion and removal from **both ends**.
- Combines features of stacks and queues.
- Used in sliding window problems and browser history.

***

## Summary Table — Common Linear Data Structures

| Data Structure | Memory | Size | Access | Insertion/Deletion | Use Cases |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Array | Contiguous | Fixed/Dynamic* | O(1) random | O(n) arbitrary index | Fast lookups, static datasets |
| Linked List | Linked nodes | Dynamic | O(n) | O(1) at head/tail | Dynamic size, frequent updates |
| Stack | Array/Linked | Dynamic | O(1) top | O(1) at top | Recursion, undo, expression eval |
| Queue | Array/Linked | Dynamic | O(1) front | O(1) front/rear | Scheduling, buffering, BFS |
| Deque | Array/Linked | Dynamic | O(1) ends | O(1) both ends | Sliding windows, history buffers |

\* Dynamic size if using dynamic array implementation (e.g., std::vector).

***

### Visualization for Traversal and Operations

- **Array Traversal:** Move index from 0 to n-1 sequentially.
- **Linked List Traversal:** Start at head, follow `next` pointers.
- **Stack Push:** Add element on top → top moves to new element.
- **Stack Pop:** Remove top element → top moves to previous element.
- **Queue Enqueue:** Insert at rear.
- **Queue Dequeue:** Remove from front.

***

***

## Non-Linear Data Structures (Expanded Overview)

### What Are Non-Linear Data Structures?

Non-linear data structures store data where elements are connected in a hierarchy or network, instead of a simple linear sequence. These structures allow multiple relationships between elements, such as “parent-child” in trees or “vertex-edge” in graphs, representing real-world complex systems more naturally.

***

### Key Characteristics

- Elements have **multiple relationships**, not just one successor or predecessor.
- Support **hierarchical, networked, or relational data models**.
- Require specialized traversal algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**.
- Widely used in applications like databases, networking, AI, operating systems, etc.

***

# 1. Trees

### What Is a Tree?

- A tree is a **hierarchical structure** with a single **root node** and zero or more child nodes.
- No cycles (no node points back to an ancestor).
- Each node contains data and pointers to its child nodes.
- Special nodes:
    - **Root**: top-most node.
    - **Internal nodes**: nodes with children.
    - **Leaves**: nodes with no children.


### Binary Tree

- Each node can have **up to two children**: left and right.
- Useful in expression parsing, hierarchical data storage.


### Example: Binary Tree Node

```cpp
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;

    // Constructor to initialize a node with given value and null children
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};
```


### Visual Representation of a Binary Tree

```
       10
      /  \
     5    15
    / \     \
   3   7     18
```


***

# 2. Binary Search Tree (BST)

### What Is a BST?

- A **binary tree** with the special property:

$$
\text{For each node, } \text{left child} < \text{node} < \text{right child}
$$
- Enables efficient **search, insertion, and deletion** operations.
- Average time complexity for operations is $O(\log n)$.
- Provides a basis for self-balancing trees (AVL, Red-Black trees).

***

# 3. Graphs

### What is a Graph?

- A graph is a collection of **vertices (nodes)** connected by **edges**.
- Used to model complex relationships like social networks, road maps, or dependencies.


### Graph Types

| Type | Description |
| :-- | :-- |
| Directed | Edges have directions (u → v) |
| Undirected | Edges bidirectional (u ↔ v) |
| Weighted | Edges hold weights (costs) |
| Unweighted | Edges have no weights |

### Popular Graph Representations

- **Adjacency Matrix:** 2D array representing edge presence.
- **Adjacency List:** Array or vector of lists storing neighbors.


### Corrected Example of Adjacency List in C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int V = 3;
    vector<vector<int>> g(V);  // Vector of size V, each element is a vector<int> 

    // Add edges (neighbors) to adjacency list
    g[0].push_back(1);  // Edge from vertex 0 to 1
    g.push_back(2);  // Edge from vertex 0 to 2
    g.push_back(2);  // Edge from vertex 1 to 2

    for (int i = 0; i < V; i++) {
        cout << "Adjacency list of vertex " << i << ": ";
        for (int x : g[i])
            cout << x << " ";
        cout << "\n";
    }
    return 0;
}
```


### Explanation:

- `g` is a vector of vectors where `g[i]` stores all vertices adjacent to vertex `i`.
- The example builds a directed graph with edges:
    - 0 → 1
    - 0 → 2
    - 1 → 2


### Graph Representation Visual

```
0 --> 1
|\    
| \   
v  v  
2   2
```


***

# 4. Additional Non-Linear Data Structures

### Heaps

- A **complete binary tree** that satisfies the **heap property**:
    - **Max-heap:** Parent node ≥ child nodes
    - **Min-heap:** Parent node ≤ child nodes
- Supports efficient **priority queue** operations.
- Useful for sorting (heapsort) and graph algorithms (Dijkstra’s).


### Tries (Prefix Trees)

- Tree structure mainly used for storing collections of strings.
- Each edge represents a character.
- Supports quick prefix searches, autocomplete, dictionary implementations.


### Disjoint Set (Union-Find)

- Data structure tracks **partitioning into disjoint subsets**.
- Efficiently supports **union** and **find** to manage connectivity.
- Used in network connectivity, Kruskal’s algorithm for minimum spanning trees.

***

## Summary Table: Non-Linear Data Structures

| Structure | Description | Use Cases | Time Complexity (Average) |
| :-- | :-- | :-- | :-- |
| Tree | Hierarchical, nodes with children | File systems, databases | $O(\log n)$ (balanced) or $O(n)$ |
| Binary Search Tree | Ordered binary tree | Search, insert, delete | $O(\log n)$ average, $O(n)$ worst case |
| Graph | Nodes connected by edges | Social networks, maps | Varies (usually $O(V + E)$ traversal) |
| Heap | Complete tree with heap property | Priority queue, sorting | $O(\log n)$ insert/delete |
| Trie | Tree for string prefixes | Autocomplete, dictionaries | $O(k)$, k: length of string |
| Disjoint Set | Manage connected components | Network connectivity | Very close to $O(1)$ amortized |


***

## Comparative Summary of Linear vs Non-Linear

| Aspect | Linear Data Structures | Non-Linear Data Structures |
| :-- | :-- | :-- |
| **Structure** | Sequential, single-level | Hierarchical or graph-based |
| **Memory Layout** | Contiguous (arrays) or linked | Tree or graph nodes with pointers |
| **Traversal** | Simple iteration or pointer following | Recursive or graph traversal algorithms |
| **Data Relationships** | One-to-one (next element only) | One-to-many or many-to-many relationships |
| **Examples** | Array, Linked List, Stack, Queue | Tree, Binary Search Tree, Graph |
| **Use Cases** | Simple collections, buffers | Complex hierarchies, networks, dependency graphs |
| **Insertion/Deletion** | Simple in linked lists, costly in arrays | More complex but flexible in trees, graphs |


***
