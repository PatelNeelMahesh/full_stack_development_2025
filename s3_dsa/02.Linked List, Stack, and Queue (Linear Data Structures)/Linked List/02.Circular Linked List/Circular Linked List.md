# Circular Linked List


***

## Introduction to Circular Linked List

A **Circular Linked List (CLL)** is a linked list variation in which the last node points back to the first node instead of pointing to `NULL`. This creates a circular or looped structure.

### Types of Circular Linked Lists

- **Circular Singly Linked List:** Each node points to the next node with the last node pointing back to the head (first) node.
- **Circular Doubly Linked List:** Similar to doubly linked list but the last node’s `next` points to the head and the head’s `prev` points to the last node, forming a circular doubly linked structure.

For simplicity, here we explain and implement the **circular singly linked list**.

***

## Node Structure for Circular Singly Linked List

```cpp
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};
```


***

## Operations with Algorithms on Circular Linked List


***


### 1. Insertion

#### a) Insertion in an Empty List

**Algorithm Steps:**

1. Create a new node with the given data.
2. Point `newNode->next` to itself, forming a circular reference.
3. Set `last` pointer to this new node, indicating the list now contains one node.

**Why?**
This sets up the base structure for the circular list — a single node points to itself, forming a valid circular list.

***

**Code:**

```cpp
void insertInEmpty(Node*& last, int data) {
    if (last != nullptr) return;  // List is not empty, skip.

    Node* newNode = new Node(data);  
    newNode->next = newNode;       // Circular link to itself.
    last = newNode;                // 'last' points to the new (only) node.
}
```


***

**Visual Representation:**

```
          ┌─────────┐
last ---> │ data=5  │
          │ next ---┘
           ↑
           └───────────────(points back)
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$ (one new node created)

***

#### b) Insertion at Beginning

**Algorithm Steps:**

1. If list empty, delegate to insertion in empty list.
2. Create a new node.
3. Point `newNode->next` to `last->next` (current head).
4. Change `last->next` to `newNode` (new head).
5. `last` pointer remains unchanged.

**Effect:**
The new node becomes the first node after `last`, effectively the head in circular order.

***

**Code:**

```cpp
void insertAtBeginning(Node*& last, int data) {
    if (last == nullptr) {
        insertInEmpty(last, data);
        return;
    }

    Node* newNode = new Node(data);
    newNode->next = last->next;  // New node points to old head.
    last->next = newNode;        // last points to new head.
}
```


***

**Visual Representation:**

Before:

```
last -> [node1] -> [node2] -> ... -> [node1]
```

After insertion of `newNode` at beginning:

```
last -> newNode -> node1 -> node2 -> ... -> newNode
```


***

**Time Complexity:** $O(1)$ (no traversal needed)
**Space Complexity:** $O(1)$

***

#### c) Insertion at End

**Algorithm Steps:**

1. If list empty, use insertion in empty list.
2. Create a new node.
3. Point `newNode->next` to `last->next` (head).
4. Point `last->next` to `newNode`.
5. Update `last` pointer to `newNode` (new tail).

***

**Code:**

```cpp
void insertAtEnd(Node*& last, int data) {
    if (last == nullptr) {
        insertInEmpty(last, data);
        return;
    }

    Node* newNode = new Node(data);
    newNode->next = last->next;  // New node points to head.
    last->next = newNode;        // Old last points to new node.
    last = newNode;              // last updated to new node.
}
```


***

**Visual Representation:**

Before:

```
... -> last -> head ...
```

After insertion:

```
... -> old last -> newNode -> head ...
                      ↑
                      last
```


***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

#### d) Insertion After a Given Node (Data)

**Algorithm Steps:**

1. If list is empty, no insertion possible.
2. Traverse from head (`last->next`) to find node containing given `item`.
3. If found:
    - Create new node.
    - Insert new node after found node by pointer adjustment.
    - If node found is last, update `last` pointer.
4. If not found, print message.

***

**Code:**

```cpp
void insertAfter(Node* last, int data, int item) {
    if (last == nullptr) return;

    Node* temp = last->next;  // Start at head.

    do {
        if (temp->data == item) {
            Node* newNode = new Node(data);
            newNode->next = temp->next;
            temp->next = newNode;

            if (temp == last)  // If inserted after last node, update last.
                last = newNode;
            return;
        }
        temp = temp->next;
    } while (temp != last->next);

    cout << "Item " << item << " not found in the list.\n";
}
```


***

**Visual Representation:**

```
... -> [item] -> X...

Insert newNode after [item]:

[item] -> [newNode] -> X
```


***

**Time Complexity:** $O(n)$ (worst case traversal of all nodes)
**Space Complexity:** $O(1)$

***

### 2. Deletion

#### Delete Node by Key

**Algorithm Steps:**

1. If list empty, do nothing.
2. If only one node matches key:
    - Delete node.
    - Set `last` to `nullptr`.
3. Otherwise, traverse list to find node matching key.
4. Once found, update previous node’s `next` pointer to bypass current.
5. If node to delete is `last`, update `last` pointer.
6. Delete the node.

***

**Code:**

```cpp
void deleteNode(Node*& last, int key) {
    if (last == nullptr) return;  // Empty list

    Node* curr = last->next;
    Node* prev = last;

    // Search node to delete
    while (curr->data != key && curr != last) {
        prev = curr;
        curr = curr->next;
    }

    if (curr->data != key) {
        cout << "Node with data " << key << " not found.\n";
        return;
    }

    // If only one node in list
    if (curr == last && curr->next == last) {
        delete curr;
        last = nullptr;
        return;
    }

    // Bypass current node
    prev->next = curr->next;

    // If node to delete is last, update last pointer
    if (curr == last)
        last = prev;

    delete curr;
}
```


***

**Visual Representation:**

Delete `curr` node by linking `prev` directly to `curr->next`:

```
prev -> curr -> next

Becomes:

prev -------→ next
```


***

**Time Complexity:** $O(n)$ (worst case traversal)
**Space Complexity:** $O(1)$

***

### 3. Searching

**Algorithm Steps:**

1. If list empty, return false.
2. Start traversing from head (`last->next`).
3. Check each node’s data.
4. If found, return true.
5. If back at starting point without finding, return false.

***

**Code:**

```cpp
bool search(Node* last, int key) {
    if (last == nullptr) return false;

    Node* temp = last->next;
    do {
        if (temp->data == key)
            return true;
        temp = temp->next;
    } while (temp != last->next);

    return false;
}
```


***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(1)$

***

### 4. Traversal

**Algorithm Steps:**

1. If list empty, print message.
2. Start from head (`last->next`).
3. Print each node’s data.
4. Continue until reaching head again (completing a full cycle).

***

**Code:**

```cpp
void traverse(Node* last) {
    if (last == nullptr) {
        cout << "List is empty\n";
        return;
    }

    Node* temp = last->next;  // Head node
    do {
        cout << temp->data << " -> ";
        temp = temp->next;
    } while (temp != last->next);
    cout << "(head)" << endl;
}
```


***

**Visual Representation:**

```
data1 -> data2 -> data3 -> ... -> data1 (head)
```


***

**Time Complexity:** $O(n)$ — must visit each node once
**Space Complexity:** $O(1)$

***

# Summary of Time and Space Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Insert in empty list | $O(1)$ | $O(1)$ |
| Insert at beginning | $O(1)$ | $O(1)$ |
| Insert at end | $O(1)$ | $O(1)$ |
| Insert after given node data | $O(n)$ | $O(1)$ |
| Delete node by key | $O(n)$ | $O(1)$ |
| Search for node | $O(n)$ | $O(1)$ |
| Traverse whole list | $O(n)$ | $O(1)$ |


***

## Applications of Circular Linked List

- **Resource management:** Round-robin scheduling.
- **Multiplayer gaming:** Cycling through players.
- **Buffer management:** Circular buffers in streaming.
- **Real-time systems:** Cyclic processes.
- **Music playlists:** Repeat songs indefinitely in loop.

***
