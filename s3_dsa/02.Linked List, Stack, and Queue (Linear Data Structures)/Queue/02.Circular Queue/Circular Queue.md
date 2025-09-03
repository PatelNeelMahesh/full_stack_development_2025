# Circular Queue


***

## Introduction to Circular Queue

A **Circular Queue** is an extension of a simple queue that connects the last position back to the first position in an array, forming a circle. This efficiently utilizes memory by reusing empty spaces created by dequeue operations, unlike a simple linear queue.

***

## Structure Representation

- Implemented using a fixed-size array.
- Uses two pointers (indices):
    - **front**: points to the first element.
    - **rear**: points to the last element.
- Both pointers wrap around the array using modulo arithmetic.

***

## Operations on Circular Queue


***

### 1. Insert (Enqueue)

**Objective:** Add an element at the **rear** of the circular queue.

***

#### Algorithm Steps:

1. **Check Overflow Condition:**
    - Queue is full if:

$$
(rear + 1) \mod size = front
$$
    - If full, enqueue not possible — report overflow.
2. If queue is **empty** (i.e., `front == -1`), initialize both `front` and `rear` to 0.
3. Otherwise, move `rear` forward circularly:

$$
rear = (rear + 1) \mod size
$$
4. Place the new data at `queue[rear]`.
5. Confirm successful enqueue.

***

#### Code:

```cpp
void enqueue(int queue[], int &front, int &rear, int size, int data) {
    if ((rear + 1) % size == front) {
        cout << "Queue Overflow\n";
        return;
    }
    if (front == -1) {  // Empty queue
        front = rear = 0;
    } else {
        rear = (rear + 1) % size;  // Circular increment
    }
    queue[rear] = data;
    cout << "Enqueued: " << data << endl;
}
```


***

#### Visual Representation:

Imagine the queue as a circular buffer of size 5:

```
Index:    0    1    2    3    4
Queue:   [ ]  [ ]  [ ]  [ ]  [ ]
            ^              ^
         front           rear (after first enqueue)
```

- `rear` advances circularly; when it reaches the end (index 4), next enqueue wraps to index 0 if space is available.
- Overflow occurs when moving `rear` forward catches up with `front`.

***

#### Time and Space Complexity:

- **Time Complexity:** $O(1)$ — only a few pointer calculations and assignment.
- **Space Complexity:** $O(1)$ — no extra space except input queue array.

***

### 2. Delete (Dequeue)

**Objective:** Remove an element from the **front** of the circular queue.

***

#### Algorithm Steps:

1. Check if queue is empty (`front == -1`); if yes, report underflow.
2. Retrieve the element at `queue[front]` to return or process.
3. If there is only one element (`front == rear`), reset both pointers to -1.
4. Otherwise, move `front` forward circularly:

$$
front = (front + 1) \mod size
$$
5. Return or confirm the removed element.

***

#### Code:

```cpp
int dequeue(int queue[], int &front, int &rear, int size) {
    if (front == -1) {
        cout << "Queue Underflow\n";
        return -1;
    }
    int data = queue[front];
    if (front == rear) {  // Only one element
        front = rear = -1;
    } else {
        front = (front + 1) % size;  // Circular increment
    }
    cout << "Dequeued: " << data << endl;
    return data;
}
```


***

#### Visual Representation:

If the queue is:

```
Index:    0    1    2    3    4
Queue:   [15]   [ ]  [ ]
front -> index 0, rear -> index 2
```

- After dequeue, `front` moves to index 1 with value 20.
- If only one element left, both pointers reset to empty state.

***

#### Time and Space Complexity:

- **Time Complexity:** $O(1)$ — constant pointer updates and data retrieval.
- **Space Complexity:** $O(1)$.

***

### 3. Search

**Objective:** Find if a given element exists in the circular queue.

***

#### Algorithm Steps:

1. If queue empty (`front == -1`), return false.
2. Start from `front`.
3. Move through queue elements circularly:

$$
i = (i + 1) \mod size
$$
4. Compare each element with key.
5. Return true if found; if complete cycle ends without finding, return false.

***

#### Code:

```cpp
bool search(int queue[], int front, int rear, int size, int key) {
    if (front == -1) return false;

    int i = front;
    while (true) {
        if (queue[i] == key)
            return true;
        if (i == rear)
            break;
        i = (i + 1) % size;
    }
    return false;
}
```


***

#### Visual Representation:

For queue:

```
Index:    0    1    2    3    4
Queue:   [10]    [ ]
front: 0, rear: 3
```

Searching for 30 involves checking indices: 0, 1, 2 → found at index 2.

***

#### Time and Space Complexity:

- **Time Complexity:** Worst case $O(n)$ (full traversal).
- **Space Complexity:** $O(1)$.

***

### 4. Display Elements

**Objective:** Print all elements from front to rear sequentially considering circular wrap-around.

***

#### Algorithm Steps:

1. If queue empty (`front == -1`), display message.
2. Initialize loop index to `front`.
3. Print element at `queue[i]`.
4. Move `i` forward circularly.
5. Stop when `i` reaches `rear`.

***

#### Code:

```cpp
void display(int queue[], int front, int rear, int size) {
    if (front == -1) {
        cout << "Queue is empty\n";
        return;
    }
    cout << "Queue elements: ";
    int i = front;
    while (true) {
        cout << queue[i] << " ";
        if (i == rear) break;
        i = (i + 1) % size;
    }
    cout << endl;
}
```


***

#### Visual Representation:

Queue content:

```
Index:    0    1    2    3    4
Queue:   [10]   [ ]  [ ]
front = 0, rear = 2
```

Output:

```
Queue elements: 10 20 30
```


***

### Summary Table of Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Enqueue | $O(1)$ | $O(1)$ |
| Dequeue | $O(1)$ | $O(1)$ |
| Search | $O(n)$ | $O(1)$ |
| Display | $O(n)$ | $O(1)$ |


***

### Additional Notes for Learners:

- Circular queue helps utilize array space efficiently by wrapping around.
- Overflow condition requires careful modulo arithmetic.
- Proper updating of `front` and `rear` pointers is crucial to keep queue state consistent.
- Visualizing the queue as a ring is helpful to understand pointer movements in enqueue/dequeue.

***
## Applications of Circular Queue

- **CPU Scheduling:** Manage processes in round-robin fashion.
- **Traffic systems:** Manage cyclic traffic signals.
- **Memory management:** Buffer for streaming data or packet handling.
- **Data streaming:** Used in multimedia buffers (audio/video).
- **Printer queue management:** Continuous reuse of queue slots.
- **Operating Systems:** For handling processes and threads in cycles.

***
