# Heap Tree
## Introduction and Definitions

A **Heap** is a specialized tree-based data structure that satisfies the **heap property**, which defines a specific order between parent nodes and their children. It is commonly used to implement efficient priority queues and sorting algorithms.

There are two main types of heaps:

- **Max Heap:** Every parent node is greater than or equal to its children. The largest element is at the root.
- **Min Heap:** Every parent node is less than or equal to its children. The smallest element is at the root.

Heaps are typically implemented as **complete binary trees**, which means that all levels in the tree are fully filled except possibly for the last level, which is filled from left to right without gaps.

***

## Detailed Explanation

### Characteristics of a Heap

1. **Complete Binary Tree Structure**
A heap is always a complete binary tree. This completeness ensures the tree is as balanced as possible, which allows for efficient operations in logarithmic time.
2. **Heap Property**
Depending on the type of heap:
    - **Max Heap:** Parent node value ≥ child node values.
    - **Min Heap:** Parent node value ≤ child node values.

This property ensures quick access to the maximum or minimum element, which is always at the tree's root.

3. **Shape and Order Properties**
    - Shape property: The tree is a complete binary tree (nodes fill the tree level by level, left to right).
    - Order property: The value of each parent node satisfies the heap property relative to its children.

***

### Visualization of Heap Types

#### Min Heap Example

```
          10
        /    \
      20      30
     /  \    /  \
   40   50  60  70
```

- The root 10 is the minimum value.
- Every parent is less than or equal to its children.
- The tree is complete (levels filled left to right).


#### Max Heap Example

```
          90
        /    \
      80      70
     /  \    /  \
   50   60  40  30
```

- The root 90 is the maximum value.
- Every parent is greater than or equal to its children.
- The tree is complete (levels filled left to right).


### Array Representation of Heaps

A heap is often represented using an array rather than pointers for efficiency:

- Index of root node: 0
- For any node at index `i`:
    - Left child index = `2*i + 1`
    - Right child index = `2*i + 2`
    - Parent index = `(i-1) // 2`

**Example: Min Heap**

Heap Tree:

```
          10
        /    \
      20      30
     /  \    /  \
   40   50  60  70
```


## Properties and Operations

### Heap Properties Recap

| Property | Description | Example |
| :-- | :-- | :-- |
| Complete Binary Tree | All levels full except last, filled left to right | Binary tree shape above |
| Heap Order Property | Parent ≤ children (min heap) or Parent ≥ children (max heap) | Min heap: 10 ≤ 20, 30 |

### Typical Heap Operations

- **Heapify:** Adjusts the heap to maintain heap property after insertion or deletion.
- **Build Heap:** Converts an arbitrary array into a heap.
- **Insert:** Adds a new element while maintaining the heap property.
- **Extract Min (or Max):** Removes the root element and restructures the heap.
- **Heap Sort:** Uses heaps to sort data efficiently.

***

## Summary Diagram for Heap Structure and Array Mapping

```
             i=0
          +-------+
          |   10  |
          +-------+
          /       \
     i=1/         \i=2
     +-----+     +-----+
     | 20  |     | 30  |
     +-----+     +-----+
     /   \       /    \
i=3 /     \i=4 i=5    i=6
+-----+ +-----+ +-----+ +-----+
| 40  | | 50  | | 60  | | 70  |
+-----+ +-----+ +-----+ +-----+
```

Arrays use indices to represent tree nodes and relationships, enabling efficient memory usage and fast parent/child lookups.

***

# Min Heap Tree


***

## Introduction and Representations

A **min heap** is a complete binary tree that satisfies the **heap property**:
Every parent node’s value is **less than or equal to** the values of its children. This property ensures the **minimum value** is always at the root.

The min heap is usually implemented as a **complete binary tree** (all levels fully filled except possibly the last, with nodes as left as possible), commonly stored using an **array representation** for efficient access.

### Terminology


***

### 1. **Min Heap Property**

- Each node’s value is **less than or equal to** the value of its children.
- Root contains the **minimum** value in the heap.

**Example:**

```
         10
       /    \
     20      30
    /  \    /  
  40   50  60   
```

Here, 10 ≤ 20 and 30, 20 ≤ 40 and 50, etc.

***

### 2. **Complete Binary Tree**

- All levels, except possibly the last, are fully filled.
- Last level is filled **from left to right** with no gaps.

Given this, min heap is always a complete binary tree.

***

### 3. **Array Representation**

- Root is at index 0.
- For a node at index `i`:
    - Left child at `2*i + 1`
    - Right child at `2*i + 2`
    - Parent at `(i-1)//2`

**Example:**

Tree above stored as array:

```
[10, 20, 30, 40, 50, 60]
```


***

## Visual Representation of Example Min Heap

```
         10
       /    \
     20      30
    /  \    /
  40   50  60
```


***

## Min Heap Operations


***

### 1. **Heapify (Min-Heapify)**

**Goal:**
Restore the min heap property at a node when it violates the heap order by being greater than one or both of its children.

**Why is Heapify Important?**
It’s the fundamental building block for restoring the heap structure after changes like insertion, extraction, or while building the heap initially.

***

**Step-by-step Process:**

- Compare the node with its left and right children.
- Identify the child with the smallest value.
- If the node is greater than this child, swap them.
- Recursively heapify the affected subtree rooted at the child’s position.
- Stops when the node is smaller than its children or it reaches a leaf.

***

**Visual Walkthrough:**

Input array at subtree rooted at index `i=1`:

```
Index:  0   1   2   3   4   5
Value: 10, 40, 20, 50, 60, 30
```

Heap tree view:

```
        10
       /  \
     40    20
    /  \   /
  50   60 30
```

- 40 is greater than left child 50 and right child 60, but note 20 at right child of root is smaller — heapify focuses on subtree rooted at 1.
- Here, 40 is greater than its smallest child 50? No, so we compare only its children.
- 40 is properly less than children 50 and 60, so no swap needed.
- But 20 at index 2 has child 30 which is smaller? Not an issue here since heapify is called at node 1.
- If heapify was called at root 0, swap would happen with smaller child 10.

This example shows heapify call verifies subtree root.

***

**Code (unchanged):**

```cpp
void minHeapify(int arr[], int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;
    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        std::swap(arr[i], arr[smallest]);
        minHeapify(arr, n, smallest);
    }
}
```


***

### 2. **Build Min Heap**

**Goal:**
Transform an arbitrary unordered array into a min heap structure efficiently.

***

**Why is this efficient?**
Like max heap build, bottom-up heapify calls reduce total computations to linear time performance.

***

**Stepwise:**

- Identify last non-leaf node: \$ floor(\frac{n}{2}) - 1 \$.
- Call `minHeapify` on each node moving upward to root.
- This guarantees complete heapification.

***

**Visual Before and After:**

Unordered array:

```
[40, 20, 30, 10, 50]
```

Tree before build:

```
        40
       /  \
     20    30
    /  \
  10    50
```

Tree after build min heap:

```
        10
       /  \
     20    30
    /  \
  40    50
```

Array after build heap:

```
[10, 20, 30, 40, 50]
```


***

**Code (unchanged):**

```cpp
void buildMinHeap(int arr[], int n) {
    int startIdx = (n / 2) - 1;

    for (int i = startIdx; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
}
```


***

### 3. **Insert Element**

**Goal:**
Add a new value to the min heap while preserving heap property.

***

**Process details:**

- Insert element at the end.
- Compare inserted element with its parent.
- Swap if inserted element is smaller.
- Repeat until heap property is restored.

***

**Visualization:**

Starting heap:

```
[10, 20, 30, 40, 50]
```

Insert 5:

- Insert 5 at the end → ``
- Bubble up: 5 < 30; swap → ``
- 5 < 10; swap → ``

Heapified array:

```
[5, 20, 10, 40, 50, 30]
```


***

**Code (unchanged):**

```cpp
void insert(int arr[], int& n, int key) {
    n = n + 1;
    arr[n - 1] = key;

    int i = n - 1;
    while (i != 0 && arr[(i - 1) / 2] > arr[i]) {
        std::swap(arr[i], arr[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}
```


***

### 4. **Extract Min**

**Goal:**
Remove and return the minimum element (root) and re-balance the heap.

***

**Step-by-step:**

- Save root as min value.
- Replace root with last element.
- Reduce heap size.
- Call `minHeapify` from root.

***

**Visualization:**

Heap before extraction:

```
[5, 20, 10, 40, 50, 30]
```

Tree:

```
       5
      /  \
    20    10
   /  \   /
 40   50 30
```

Extract min (5):

- Replace root with 30 → ``
- Heapify root:
    - Compare 30 with children 20, 10
    - Swap with smallest child 10
    - Heapify swapped node index 2 (now 30)
    - No children smaller → stop

Resulting heap:

```
[10, 20, 30, 40, 50]
```


***

**Code (unchanged):**

```cpp
int extractMin(int arr[], int& n) {
    if (n <= 0)
        return INT_MAX;

    if (n == 1) {
        n -= 1;
        return arr[^0];
    }

    int root = arr;
    arr = arr[n - 1];
    n--;
    minHeapify(arr, n, 0);

    return root;
}
```


***

### 5. **Heap Sort (Min Heap Version)**

**Goal:**
Sort array in descending order by repeated extraction of min element.

***

**How it works:**

- Build a min heap.
- Swap root with last element.
- Reduce heap size.
- Call `minHeapify`.
- Repeat for all elements.

***

**Visualization:**

Input:

```
[5, 3, 10, 1, 4]
```

After building min heap:

```
[1, 3, 10, 5, 4]
```

Extract min and sort descending through repeated heapify.

***

**Code (unchanged):**

```cpp
void heapSort(int arr[], int n) {
    buildMinHeap(arr, n);

    for (int i = n - 1; i > 0; i--) {
        std::swap(arr, arr[i]);
        minHeapify(arr, i, 0);
    }
}
```


***

## Summary Table of Heap Operations Complexity

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| minHeapify | $O(\log n)$ | $O(\log n)$ |
| buildMinHeap | $O(n)$ | $O(\log n)$ |
| insert | $O(\log n)$ | $O(1)$ |
| extractMin | $O(\log n)$ | $O(\log n)$ |
| heapSort | $O(n \log n)$ | $O(\log n)$ |


***

## Applications of Min Heap

- **Priority Queues:** Efficient dynamic retrieval of the smallest element.
- **Dijkstra’s Algorithm:** Shortest path in graphs.
- **Prim’s Algorithm:** Minimum spanning tree.
- **Median Finding:** Min heap combined with max heap.
- **Event-driven Simulation:** Scheduling and processing events.

***
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: Max-Heap-Tree.md

