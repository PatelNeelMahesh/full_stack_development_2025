# Double-Ended Queue (Deque)


***

## Introduction

A **Double-Ended Queue (Deque)** is a generalized form of a queue data structure where elements can be inserted or removed from **both ends**: the front and the rear. Unlike standard queues (FIFO), deques offer more flexibility, allowing access like both queues and stacks.

***

## Structure of Deque (Array-Based Circular Implementation)

We implement deque using a fixed-size circular array with two indices:

- `front`: Index position for the front of the deque.
- `rear`: Index position for the rear of the deque.

Both wrap around the array to efficiently use space.

***

## Operations on Deque and Detailed Explanation with Code


***

***

### 1. Check if Deque is Full

**Algorithm Logic:**

- If `front` is at 0 and `rear` at last position (`size - 1`), the deque is full.
- Or if `front` is exactly one position ahead of `rear` in circular order, no space remains.

***

**Code:**

```cpp
bool isFull(int front, int rear, int size) {
    return (front == 0 && rear == size - 1) || (front == rear + 1);
}
```


***

**Visual:**
Consider size = 5, indices 0..4:

```
front=0, rear=4 --> full (queue filled from start to end)

OR when rear+1 == front (circular wrap):
e.g., front=2, rear=1 (when wrapped around)
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 2. Check if Deque is Empty

**Algorithm Logic:**

- Empty when both `front` and `rear` point to `-1`.

***

**Code:**

```cpp
bool isEmpty(int front) {
    return front == -1;
}
```


***

**Explanation:**
`front = -1` is a clear signal that no elements exist.

***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 3. Insert Element at Front (`enqueueFront`)


***

**Algorithm Steps:**

1. Check for overflow (full deque).
2. If empty (front == -1), initialize `front` and `rear` to 0.
3. If `front` is at start (0), wrap to last position (size - 1).
4. Else decrement `front` by 1.
5. Place new element at `deque[front]`.

***

**Code:**

```cpp
void enqueueFront(int deque[], int &front, int &rear, int size, int key) {
    if (isFull(front, rear, size)) {
        cout << "Deque Overflow\n";
        return;
    }
    if (isEmpty(front)) {
        front = rear = 0;
    } else if (front == 0) {
        front = size - 1;  // Circular wrap around
    } else {
        front = front - 1;
    }
    deque[front] = key;
    cout << "Inserted " << key << " at front\n";
}
```


***

**Visual Representation:**

- Before insert, front at index 0:

```
[ ] [ ] [X] [X] [X]
 ^
front
```

- After insert at front wraps to last:

```
[X] [ ] [X] [X] [X]
^
front (size-1)
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 4. Insert Element at Rear (`enqueueRear`)


***

**Algorithm Steps:**

1. Check for overflow.
2. If empty, initialize front and rear to 0.
3. If `rear` is at last, wrap to 0.
4. Else increment `rear` by 1.
5. Insert element at `deque[rear]`.

***

**Code:**

```cpp
void enqueueRear(int deque[], int &front, int &rear, int size, int key) {
    if (isFull(front, rear, size)) {
        cout << "Deque Overflow\n";
        return;
    }
    if (isEmpty(front)) {
        front = rear = 0;
    } else if (rear == size - 1) {
        rear = 0;  // Circular wrap
    } else {
        rear++;
    }
    deque[rear] = key;
    cout << "Inserted " << key << " at rear\n";
}
```


***

**Visual Representation:**

- Rear at last position:

```
[X] [X] [ ] [ ] [ ]
                    ^
                   rear
```

- After insert, rear wraps to 0:

```
[X] [X] [ ] [ ] [ ]
^
rear (0)
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 5. Delete Element from Front (`dequeueFront`)


***

**Algorithm Steps:**

1. Check if deque empty (underflow).
2. Retrieve element from `front`.
3. If only one element, reset `front` and `rear` to -1.
4. If `front` at last index, wrap to 0.
5. Else increment `front` by 1.

***

**Code:**

```cpp
int dequeueFront(int deque[], int &front, int &rear, int size) {
    if (isEmpty(front)) {
        cout << "Deque Underflow\n";
        return -1;
    }
    int data = deque[front];
    if (front == rear) {
        front = rear = -1;  // Deque empty now
    } else if (front == size - 1) {
        front = 0;          // Circular wrap
    } else {
        front++;
    }
    cout << "Deleted " << data << " from front\n";
    return data;
}
```


***

**Visual Representation:**

- Deleting element at front index 4 (last):

```
front = 4 -> after deletion, front wraps to 0.
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 6. Delete Element from Rear (`dequeueRear`)


***

**Algorithm Steps:**

1. Check if deque is empty.
2. Retrieve element at `rear`.
3. If only one element, reset pointers.
4. If `rear` is at position 0, wrap to `size - 1`.
5. Else decrement `rear` by 1.

***

**Code:**

```cpp
int dequeueRear(int deque[], int &front, int &rear, int size) {
    if (isEmpty(front)) {
        cout << "Deque Underflow\n";
        return -1;
    }
    int data = deque[rear];
    if (front == rear) {
        front = rear = -1;
    } else if (rear == 0) {
        rear = size - 1;  // Circular wrap
    } else {
        rear--;
    }
    cout << "Deleted " << data << " from rear\n";
    return data;
}
```


***

**Visual Representation:**

- Rear at position 0 wraps to last:

```
rear = 0 -> after deletion, rear = size-1
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

### 7. Search in Deque


***

**Algorithm Steps:**

1. If deque empty, return false.
2. Start from front.
3. Iterate circularly till rear.
4. If element found, return true.
5. Else false after full traversal.

***

**Code:**

```cpp
bool searchDeque(int deque[], int front, int rear, int size, int key) {
    if (isEmpty(front)) return false;

    int i = front;
    while (true) {
        if (deque[i] == key) return true;
        if (i == rear) break;
        i = (i + 1) % size;
    }
    return false;
}
```


***

**Time Complexity:** $O(n)$ in worst case
**Space Complexity:** $O(1)$

***

### 8. Display Deque Elements


***

**Algorithm Steps:**

1. If empty, indicate so.
2. Start from front.
3. Traverse circularly till rear and print elements.

***

**Code:**

```cpp
void displayDeque(int deque[], int front, int rear, int size) {
    if (isEmpty(front)) {
        cout << "Deque is empty\n";
        return;
    }
    cout << "Deque: ";
    int i = front;
    while (true) {
        cout << deque[i] << " ";
        if (i == rear) break;
        i = (i + 1) % size;
    }
    cout << endl;
}
```


***

**Visual Example:**

If queue content is at indices 3,4,0:

```
Indices: 0  1  2  3  4
Values: [10][ ][ ]
front=3, rear=0

Printing order: 20 30 10
```


***

## Summary Table of Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| isFull | $O(1)$ | $O(1)$ |
| isEmpty | $O(1)$ | $O(1)$ |
| enqueueFront | $O(1)$ | $O(1)$ |
| enqueueRear | $O(1)$ | $O(1)$ |
| dequeueFront | $O(1)$ | $O(1)$ |
| dequeueRear | $O(1)$ | $O(1)$ |
| searchDeque | $O(n)$ | $O(1)$ |
| displayDeque | $O(n)$ | $O(1)$ |


***

## Applications of Double-Ended Queue (Deque)

- **Palindrome checking:** Compare characters from both ends efficiently.
- **Sliding window problems:** Maintain useful elements for quick max/min calculation.
- **Undo/Redo operations:** Insert or remove operations at either end.
- **Task scheduling:** Prioritize tasks by adding/removing at both ends.
- **Find shortest path:** Used in graph algorithms like 0-1 BFS.

***
