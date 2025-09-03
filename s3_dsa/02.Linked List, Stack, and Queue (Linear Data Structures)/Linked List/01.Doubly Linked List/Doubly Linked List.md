# Doubly Linked List


***

## Introduction

A **Doubly Linked List (DLL)** is a type of linked list where each node contains **three fields**:

- **Data:** The actual value stored in the node.
- **Next:** Pointer/reference to the next node in the list.
- **Prev:** Pointer/reference to the previous node in the list.

Unlike singly linked lists, DLLs allow traversal in both forward and backward directions due to the `prev` pointer. This bidirectional capability makes DLLs more flexible but requires extra memory for the additional pointer.

***

## Node Structure Representation

```cpp
struct Node {
    int data;       // Data part
    Node* prev;     // Pointer to previous node
    Node* next;     // Pointer to next node
    
    // Constructor for convenience
    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};
```


***

## Doubly Linked List Operations with Detailed Explanation


***

### 1. Insertion

There are three common types: **beginning**, **end**, and **given position**.

***

#### a) Insertion at the Beginning

**Algorithm Steps:**

1. Create a new node with given data.
2. Point `newNode->next` to current head.
3. Set `newNode->prev` to `nullptr` since it'll be new head.
4. If list is not empty, link old head's `prev` back to new node.
5. Update head pointer to new node.

***

**Code:**

```cpp
void insertAtBeginning(Node*& head, int data) {
    Node* newNode = new Node(data);

    newNode->next = head;    // Step 2: Point new node forwards to old head.
    newNode->prev = nullptr; // Step 3: No previous node for new head.

    if (head != nullptr)     // Step 4: Make old head point back to new.
        head->prev = newNode;

    head = newNode;          // Step 5: Update head.
}
```


***

**Visual:**

```
New Node --> Old Head
newNode.prev = nullptr
Old head.prev --> newNode
```


***

**Time Complexity:** $O(1)$ — only pointer changes
**Space Complexity:** $O(1)$ — one node added

***

#### b) Insertion at the End

**Algorithm Steps:**

1. Create new node.
2. If list empty, new node becomes head (`prev` and `next` are `nullptr`).
3. Otherwise, traverse to the last node.
4. Link last node's `next` to new node.
5. Set new node's `prev` pointer to last node.
6. Set new node's `next` to `nullptr`.

***

**Code:**

```cpp
void insertAtEnd(Node*& head, int data) {
    Node* newNode = new Node(data);

    if (head == nullptr) {
        head = newNode;  // New node is list now.
        return;
    }

    Node* temp = head;
    while (temp->next != nullptr) {  // Step 3: Find tail.
        temp = temp->next;
    }

    temp->next = newNode;   // Step 4: Last node points forward.
    newNode->prev = temp;   // Step 5: New node points back to last.
}
```


***

**Visual:**

```
... <-> Last Node <-> NewNode (tail)
```


***

**Time Complexity:** $O(n)$ — traversal to tail
**Space Complexity:** $O(1)$

***

#### c) Insertion at a Given Position

**Algorithm Steps:**

1. Position 0 → insert at beginning.
2. Else, traverse to node at `position - 1`.
3. Create new node.
4. Adjust new node’s `next` to node at `position`.
5. Adjust new node’s `prev` to node at `position - 1`.
6. Fix pointers of neighbors to link new node.

***

**Code:**

```cpp
void insertAtPosition(Node*& head, int data, int position) {
    if (position == 0) {
        insertAtBeginning(head, data);
        return;
    }

    Node* temp = head;
    for (int i = 0; i < position - 1 && temp != nullptr; i++) {
        temp = temp->next;
    }

    if (temp == nullptr) {
        cout << "Position out of range\n";
        return;
    }

    Node* newNode = new Node(data);
    newNode->next = temp->next;  // Step 4
    newNode->prev = temp;        // Step 5

    if (temp->next != nullptr)   // Fix back pointer of next node
        temp->next->prev = newNode;
    temp->next = newNode;        // Fix next pointer of previous node
}
```


***

**Visual:**

```
Before: temp <-> temp.next

After:  temp <-> newNode <-> temp.next
```


***

**Time Complexity:** $O(n)$ — traversal up to `position - 1`
**Space Complexity:** $O(1)$

***

### 2. Deletion


***

#### a) Deletion of Head Node

**Algorithm Steps:**

1. If list empty, do nothing.
2. Temporarily save head.
3. Move head forward to next node.
4. If new head not null, set its `prev` to `nullptr`.
5. Delete old head.

***

**Code:**

```cpp
void deleteHead(Node*& head) {
    if (head == nullptr)
        return;

    Node* temp = head;
    head = head->next;

    if (head != nullptr)
        head->prev = nullptr;

    delete temp;
}
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

#### b) Deletion of Last Node

**Algorithm Steps:**

1. If list empty, do nothing.
2. Traverse to tail node.
3. If only one node, delete and head becomes `nullptr`.
4. Else, set tail's previous node's `next` to `nullptr`.
5. Delete tail node.

***

**Code:**

```cpp
void deleteLast(Node*& head) {
    if (head == nullptr)
        return;

    Node* temp = head;

    if (temp->next == nullptr) {  // Only one node in list.
        delete temp;
        head = nullptr;
        return;
    }

    while (temp->next != nullptr) {  // Find tail node.
        temp = temp->next;
    }

    temp->prev->next = nullptr;
    delete temp;
}
```


***

**Time Complexity:** $O(n)$ — traversal to end
**Space Complexity:** $O(1)$

***

#### c) Deletion at Specific Position

**Algorithm Steps:**

1. If empty list, do nothing.
2. Position 0 → delete head.
3. Traverse to node at position.
4. Adjust neighboring nodes’ pointers.
5. Delete targeted node.

***

**Code:**

```cpp
void deleteAtPosition(Node*& head, int position) {
    if (head == nullptr)
        return;

    if (position == 0) {
        deleteHead(head);
        return;
    }

    Node* temp = head;
    for (int i = 0; i < position && temp != nullptr; i++) {
        temp = temp->next;
    }

    if (temp == nullptr) {
        cout << "Position out of bounds\n";
        return;
    }

    if (temp->next != nullptr)
        temp->next->prev = temp->prev;

    if (temp->prev != nullptr)
        temp->prev->next = temp->next;

    delete temp;
}
```


***

**Time Complexity:** $O(n)$ — traversal up to position
**Space Complexity:** $O(1)$

***

### 3. Searching

**Algorithm Steps:**

1. Set index counter = 0.
2. Traverse list from head.
3. Compare data with target.
4. Return index if found, else -1 at end.

***

**Code:**

```cpp
int search(Node* head, int key) {
    int pos = 0;
    Node* temp = head;
    while (temp != nullptr) {
        if (temp->data == key)
            return pos;
        temp = temp->next;
        pos++;
    }
    return -1;  // Not found
}
```


***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(1)$

***

### 4. Traversal


***

#### Forward Traversal

```cpp
void traverseForward(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " <-> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}
```


***

#### Backward Traversal

```cpp
void traverseBackward(Node* head) {
    Node* temp = head;
    if (temp == nullptr) return;

    while (temp->next != nullptr)  // Go to tail
        temp = temp->next;

    while (temp != nullptr) {       // Traverse backwards
        cout << temp->data << " <-> ";
        temp = temp->prev;
    }
    cout << "NULL" << endl;
}
```


***

**Time Complexity:** $O(n)$ for both traversals
**Space Complexity:** $O(1)$

***

## Summary Table of Time and Space Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Insert at beginning | $O(1)$ | $O(1)$ |
| Insert at end | $O(n)$ | $O(1)$ |
| Insert at position | $O(n)$ | $O(1)$ |
| Delete head | $O(1)$ | $O(1)$ |
| Delete last | $O(n)$ | $O(1)$ |
| Delete at position | $O(n)$ | $O(1)$ |
| Search | $O(n)$ | $O(1)$ |
| Traverse (forward or backward) | $O(n)$ | $O(1)$ |


***

## Applications of Doubly Linked Lists

- **Navigational systems:** Browsers’ forward and backward history stacks.
- **Implementing queues, dequeues:** Supporting insertion/removal from both ends efficiently.
- **Undo/Redo functionality:** In editors, where backward and forward moves are needed.
- **Music or video playlist navigation:** Move forward or backward through media.
- **Complex data structures:** Such as Fibonacci heaps, adjacency lists in graphs.

***
