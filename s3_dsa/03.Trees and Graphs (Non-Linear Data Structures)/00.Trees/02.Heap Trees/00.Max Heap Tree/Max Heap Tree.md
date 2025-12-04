# Heap Tree


***

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
- The tree is complete.


### Array Representation of Heaps

A heap is often represented using an array rather than pointers for efficiency:

- Index of root node: 0
- For any node at index `i`:
    - Left child index = `2*i + 1`
    - Right child index = `2*i + 2`
    - Parent index = `(i-1) // 2`

**Example: Max Heap**

Heap Tree:

```
          90
        /    \
      80      70
     /  \    /  \
   50   60  40  30
```


## Properties and Operations

### Heap Properties Recap

| Property | Description | Example |
| :-- | :-- | :-- |
| Complete Binary Tree | All levels full except last, filled left to right | Binary tree shape above |
| Heap Order Property | Parent ≥ children (max heap) or Parent ≤ children (min heap) | Max heap: 90 ≥ 80, 70 |

### Typical Heap Operations

- **Heapify:** Adjusts the heap to maintain heap property after insertion or deletion.
- **Build Heap:** Converts an arbitrary array into a heap.
- **Insert:** Adds a new element while maintaining the heap property.
- **Extract Max (or Min):** Removes the root element and restructures the heap.
- **Heap Sort:** Uses heaps to sort data efficiently.

***

## Summary Diagram for Heap Structure and Array Mapping

```
             i=0
          +-------+
          |   90  |
          +-------+
          /       \
     i=1/         \i=2
     +-----+     +-----+
     | 80  |     | 70  |
     +-----+     +-----+
     /   \       /    \
i=3 /     \i=4 i=5    i=6
+-----+ +-----+ +-----+ +-----+
| 50  | | 60  | | 40  | | 30  |
+-----+ +-----+ +-----+ +-----+
```

Arrays use indices to represent tree nodes and relationships, enabling efficient memory usage and fast parent/child lookups.

***

# Max Heap Tree


***

## Introduction and Representations

A **max heap** is a complete binary tree that satisfies the **heap property**:
Every parent node’s value is **greater than or equal to** the values of its children. This property ensures the **maximum value** is always at the root.

The max heap is usually implemented as a **complete binary tree** (all levels fully filled except possibly the last, with nodes as left as possible), commonly stored using an **array representation** for efficient access.

### Terminology


***

### 1. **Max Heap Property**

- Each node’s value is **greater than or equal to** the value of its children.
- Root contains the **maximum** value in the heap.

**Example:**

```
         50
       /    \
     30      20
    /  \    /  
  10   15  5   
```

Here, 50 ≥ 30 and 20, 30 ≥ 10 and 15, etc.

***

### 2. **Complete Binary Tree**

- All levels, except possibly the last, are fully filled.
- Last level is filled **from left to right** with no gaps.

Given this, max heap is always a complete binary tree.

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
[50, 30, 20, 10, 15, 5]
```


***

## Visual Representation of Example Max Heap

```
         50
       /    \
     30      20
    /  \    /
  10   15  5
```

***

## Max Heap Operations


***

### 1. **Heapify (Max-Heapify)**

**Goal:**
Restore the max heap property at a node when it violates the heap order by being smaller than one or both of its children.

**Why is Heapify Important?**
It’s the fundamental building block for restoring the heap structure after changes like insertion, extraction, or while building the heap initially.

***

**Step-by-step Process:**

- Compare the node with its left and right children.
- Identify the child with the largest value.
- If the node is smaller than this child, swap them.
- Recursively heapify the affected subtree rooted at the child’s position.
- Stops when the node is larger than its children or it reaches a leaf.

***

**Visual Walkthrough:**

Input array at subtree rooted at index `i=1`:

```
Index:  0   1   2   3   4   5
Value: 90, 15, 70, 10, 60, 40
```

Heap tree view:

```
        90
       /  \
     15    70
    /  \   /
  10   60 40
```

- 15 is smaller than left child 60 → swap.
- After swap, recursive call on index of the swapped node (where 15 moved).
- 15 has no children that violate heap property → stop.

Resulting array:

```
[90, 60, 70, 10, 15, 40]
```

Resulting tree:

```
        90
       /  \
     60    70
    /  \   /
  10   15 40
```


***

**Code (unchanged):**

```cpp
void maxHeapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        maxHeapify(arr, n, largest);
    }
}
```


***

### 2. **Build Max Heap**

**Goal:**
Transform an arbitrary unordered array into a max heap structure efficiently.

***

**Why is this efficient?**
Naively heapifying every node individually from root to leaves can be expensive. Instead, building the heap bottom-up from last non-leaf nodes reduces repeated heapify calls, achieving $O(n)$ performance.

***

**Stepwise:**

- Identify last non-leaf node: \$ floor(\frac{n}{2}) - 1 \$.
- Call `maxHeapify` on each node moving upward to root.
- Lower nodes have small subtree sizes, so heapify on them is cheaper.
- This process guarantees complete heapification of the entire structure.

***

**Visual Before and After:**

Unordered array:

```
[10, 15, 20, 17, 25]
```

Tree before build:

```
        10
       /  \
     15    20
    /  \
  17    25
```

Tree after build max heap:

```
        25
       /  \
     17    20
    /  \
  10    15
```

Array after build heap:

```
[25, 17, 20, 10, 15]
```


***

**Code (unchanged):**

```cpp
void buildMaxHeap(int arr[], int n) {
    int startIdx = (n / 2) - 1;

    for (int i = startIdx; i >= 0; i--) {
        maxHeapify(arr, n, i);
    }
}
```


***

### 3. **Insert Element**

**Goal:**
Add a new value to the max heap while preserving heap property.

***

**Process details:**

- Append the new element at the last position (keeping complete tree property).
- Compare the inserted element with its parent.
- If the element is greater than the parent, swap them.
- Repeat until the inserted element is either at root or not greater than its parent.

***

**Visualization:**

Starting heap:

```
[50, 30, 40, 10, 15]
```

Tree:

```
       50
      /   \
    30     40
   /  \
 10   15
```

Insert 45:

- Add `45` at the end → array: ``
- Swap with parent 40 because 45 > 40 → ``
- No further swaps needed since 45 < 50

Updated tree:

```
       50
      /   \
    30     45
   /  \     /
 10   15  40
```


***

**Code (unchanged):**

```cpp
void insert(int arr[], int& n, int key) {
    n = n + 1;
    arr[n - 1] = key;

    int i = n - 1;
    while (i != 0 && arr[(i - 1) / 2] < arr[i]) {
        std::swap(arr[i], arr[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}
```


***

### 4. **Extract Max**

**Goal:**
Remove and return the maximum element (root) and re-balance the heap.

***

**Step-by-step:**

- Save root value as max.
- Replace root with last element.
- Reduce heap size by 1.
- Call `maxHeapify` on root to restore heap structure.

***

**Visualization:**

Heap before extraction:

```
[60, 40, 50, 10, 15]
```

Tree:

```
       60
      /   \
    40     50
   /  \
 10   15
```

Extract max 60:

- Replace root with 15 → ``
- Heapify root:
    - Compare 15 with children 40 and 50
    - Swap 15 with largest child 50
    - Heap after heapify:

```
[50, 40, 15, 10]
```


Tree after extraction:

```
       50
      /   \
    40     15
   /
 10
```


***

**Code (unchanged):**

```cpp
int extractMax(int arr[], int& n) {
    if (n <= 0)
        return INT_MIN;

    if (n == 1) {
        n -= 1;
        return arr[0];
    }

    int root = arr;
    arr = arr[n - 1];
    n--;
    maxHeapify(arr, n, 0);

    return root;
}
```


***

### 5. **Heap Sort**

**Goal:**
Sort an array in ascending order by exploiting the heap structure.

***

**How it works:**

- Build a max heap.
- Swap the root (max value) with the last element.
- Treat the reduced heap (excluding last element) as valid heap.
- Call `maxHeapify` on root to restore heap.
- Repeat until the heap is size 1.

***

**Visualization (Partial):**

Input:

```
[4, 10, 3, 5, 1]
```

Build max heap:

```
[10, 5, 3, 4, 1]
```

First swap (root with last element):

```
[1, 5, 3, 4, 10]
```

Heapify root:

```
[5, 4, 3, 1, 10]
```

Repeat until sorted:

```
[1, 3, 4, 5, 10]
```


***

**Code (unchanged):**

```cpp
void heapSort(int arr[], int n) {
    buildMaxHeap(arr, n);

    for (int i = n - 1; i > 0; i--) {
        std::swap(arr, arr[i]);
        maxHeapify(arr, i, 0);
    }
}
```


***

## Summary Table of Heap Operations Complexity

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| maxHeapify | $O(\log n)$ | $O(\log n)$ |
| buildMaxHeap | $O(n)$ | $O(\log n)$ |
| insert | $O(\log n)$ | $O(1)$ |
| extractMax | $O(\log n)$ | $O(\log n)$ |
| heapSort | $O(n \log n)$ | $O(\log n)$ |


***

## Applications of Max Heap

- **Priority Queues:** Efficiently supports insert and extract max.
- **Heap Sort:** Efficient sorting algorithm with $O(n \log n)$ time.
- **Graph Algorithms:** Like Dijkstra’s shortest path.
- **Median Finding:** Using heaps to find running medians.
- **Event simulation:** Scheduling events by priority.

***
