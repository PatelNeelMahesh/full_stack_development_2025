# Queue


***

## Introduction to Queue

A **Queue** is a fundamental linear data structure which follows the **First In, First Out (FIFO)** principle. This means elements are processed in the order they arrive: the first element inserted is also the first one to be removed.

Queues work like a line at a bank or supermarket—customers who arrive first are served first.

***

## Types of Queues

- **Simple Queue (Linear Queue):** Enqueue at rear, dequeue from front. Fixed size.
- **Circular Queue:** Improves space usage by treating the array as circular.
- **Priority Queue:** Elements have priority; higher-priority elements served first.
- **Double Ended Queue (Deque):** Insert/delete from both ends.

This guide focuses on the **Simple Queue**.

***

## Queue Representation

In an array-based queue, we maintain two pointers or indices:

- **front:** Points to the first element.
- **rear:** Points to the last element.

Initially, both are set to -1 indicating an empty queue.

***

## Detailed Operations on Queue


***

### 1. INSERT (Enqueue)


***

**Purpose:** Add a new element to the **rear (end)** of the queue.

***

### Algorithm Steps:

1. **Check for Overflow Condition:**
The queue is full if `rear == maxSize - 1` (no more space).
2. **Initial Queue Check:**
If queue is empty (`front == -1`), initialize `front = 0` (first element).
3. **Increment rear:**
Move rear forward by one to the next empty position.
4. **Insert the new element:**
Place data at `queue[rear]`.
5. **Confirm the insertion to user or error if full.**

***

### Code:

```cpp
void enqueue(int queue[], int &front, int &rear, int maxSize, int data) {
    if (rear == maxSize - 1) {               // Step 1: Overflow check
        cout << "Queue Overflow\n";
        return;
    }
    if (front == -1) front = 0;              // Step 2: Initialize front if empty
    queue[++rear] = data;                     // Steps 3 & 4: Increment rear and insert
    cout << "Enqueued element: " << data << endl;
}
```


***

### How It Works (Visualized):

Imagine an array queue size = 5, initially empty:

```
Index:  0    1    2    3    4
Queue: [ ]  [ ]  [ ]  [ ]  [ ]
Front: -1, Rear: -1 (empty)
```

- After enqueue(10):

```
Index:  0    1    2    3    4
Queue: [10] [ ]  [ ]  [ ]  [ ]
Front: 0, Rear: 0
```

- After enqueue(20), enqueue(30):

```
Index:  0    1    2    3    4
Queue:    [ ]  [ ]
Front: 0, Rear: 2
```

- Enqueue further once rear reaches `maxSize - 1` leads to overflow.

***

**Time Complexity:** $O(1)$ — Direct insertion, no traversal
**Space Complexity:** $O(1)$

***

### 2. DELETE (Dequeue)


***

**Purpose:** Remove and return the element at the **front** of the queue.

***

### Algorithm Steps:

1. **Check Underflow:**
If queue empty (`front == -1` or `front > rear`), report underflow error.
2. **Retrieve element:**
Get data at `queue[front]`.
3. **Move front pointer:**
Increment `front` to dequeue the element.
4. **Reset when empty:**
If no elements left (front > rear), reset both `front` and `rear` to -1.
5. **Return dequeued element.**

***

### Code:

```cpp
int dequeue(int queue[], int &front, int &rear) {
    if (front == -1 || front > rear) {     // Step 1: Underflow check
        cout << "Queue Underflow\n";
        return -1;                         // Indicating failure
    }
    int data = queue[front++];             // Steps 2 & 3: Retrieve element and increment front

    if (front > rear)                      // Step 4: Reset when queue empty
        front = rear = -1;

    return data;                          // Step 5: Return dequeued value
}
```


***

### How It Works (Visualized):

- Consider queue:

```
Index:  0    1    2    3    4
Queue:    [ ]  [ ]
Front: 0, Rear: 2
```

- After dequeue():

```
Index:  0    1    2    3    4
Queue:    [ ]  [ ]
Front: 1, Rear: 2
```

- Elements `20`, `30` remain accessible between indices front and rear.
- When dequeue brings front beyond rear, queue resets empty.

***

**Time Complexity:** $O(1)$ — Direct element removal
**Space Complexity:** $O(1)$

***

### 3. SEARCH


***

**Purpose:** Check if an element exists in the queue.

***

### Algorithm Steps:

1. If queue empty (`front == -1`), return false immediately.
2. Traverse from `front` to `rear`.
3. For each element, compare with `key`.
4. Return true if found; return false after complete traversal.

***

### Code:

```cpp
bool search(int queue[], int front, int rear, int key) {
    if (front == -1) return false;           // Step 1: Empty check

    for (int i = front; i <= rear; i++) {    // Step 2: Traversal
        if (queue[i] == key)                  // Step 3: Compare elements
            return true;
    }

    return false;                            // Step 4: Not found
}
```


***

### How It Works:

- Linear scan over queue elements in FIFO order.
- Suitable for small to moderately sized queues.

***

**Time Complexity:** $O(n)$ — potentially full traversal
**Space Complexity:** $O(1)$

***

### 4. TRAVERSAL (Display Queue)


***

**Purpose:** Print queue elements from front to rear.

***

### Algorithm Steps:

1. Verify if queue is empty.
2. Traverse from `front` to `rear`.
3. Print each element.

***

### Code:

```cpp
void displayQueue(int queue[], int front, int rear) {
    if (front == -1) {                      // Empty check
        cout << "Queue is empty\n";
        return;
    }

    cout << "Queue elements: ";
    for (int i = front; i <= rear; i++) {  // Traverse & print
        cout << queue[i] << " ";
    }
    cout << endl;
}
```


***

### How It Works (Visualized):

If queue:

```
Index:  0    1    2    3    4
Queue:    [ ]  [ ]
Front: 0, Rear: 2
```

Output:

```
Queue elements: 10 20 30 
```


***

## Summary Table: Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Enqueue | $O(1)$ | $O(1)$ |
| Dequeue | $O(1)$ | $O(1)$ |
| Search | $O(n)$ | $O(1)$ |
| Display | $O(n)$ | $O(1)$ |


***

## Additional Visual Notes:

- The queue grows **linearly** in the array from `front` to `rear`.
- No circular wrapping in simple array queue; this may lead to unused spaces if many dequeues happen.
- Overflow when `rear` reaches `maxSize - 1`.
- Underflow when no elements to dequeue.

***

## Applications of Queue

- **CPU scheduling:** Queues manage processes in ready state.
- **I/O Buffers:** Keyboard buffer, printer queue, disk scheduling.
- **Breadth-First Search (BFS):** Traversing graph or tree levels.
- **Call Center Systems:** Manage and process calls in received order.
- **Real-life lines:** Ticketing systems, customer service lines.
- **Data stream processing:** Packet handling in networking.

***

## Limitations of Simple Queue and Improvement Suggestions

- **Simple queue suffers from "false overflow"** because space at front isn’t reused after dequeues.
- To overcome, use **Circular Queue** which treats array circularly.
- Circular Queue reuses freed spaces, improving efficiency.

***
