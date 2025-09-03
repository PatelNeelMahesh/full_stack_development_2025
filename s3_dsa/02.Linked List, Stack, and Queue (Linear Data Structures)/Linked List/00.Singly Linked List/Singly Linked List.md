# Linked List


***

## Introduction to Linked List

A **Linked List** is a linear data structure where elements, called **nodes**, are stored in non-contiguous memory locations. Each node stores two parts:

- **Data:** The value of the node.
- **Next:** A pointer/reference to the next node in the list.

Unlike arrays, linked lists allow dynamic memory allocation and flexible size changes, making insertions and deletions more efficient in certain cases.

***

## Singly Linked List

A **Singly Linked List** is a linked list where each node points only to its immediate next node, and the last node points to `NULL` indicating the end of the list.

### Node Representation

```cpp
struct Node {
    int data;
    Node* next;
};
```

- `data`: holds the value.
- `next`: pointer to the next node.

***

## Operations with Algorithms on Singly Linked Lists


***

### 1. Insertion


***

#### a) Insertion at Beginning (Head)

**Algorithm Steps:**

1. Create a new node with the data.
2. New node's `next` pointer points to current head.
3. Update head to point to the new node.

**Why this matters:**

- The new node becomes the first element.
- No traversal required, so it’s very fast.
- Preserves list order by linking to old head.

***

**Code:**

```cpp
void insertAtBeginning(Node*& head, int data) {
    Node* newNode = new Node();      // Step 1: Allocate new node
    newNode->data = data;
    newNode->next = head;            // Step 2: Link new node to old head
    head = newNode;                  // Step 3: Update head pointer
}
```


***

**Visual Step-by-Step:**

- Before insertion:
`head -> [Node1 (data=5)] -> [Node2 (data=10)] -> NULL`
- New node creation:
`newNode (data=1)`
- Link new node’s next to current head:
`newNode -> [Node1] -> [Node2]`
- Head updated to newNode:
`head -> newNode -> [Node1] -> [Node2]`

***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

#### b) Insertion at End

**Algorithm Steps:**

1. Create a new node with `next = NULL`.
2. If list is empty, set head to new node.
3. Else, traverse to last node.
4. Set last node’s `next` to new node.

**Why this matters:**

- Slower than insertion at beginning due to traversal.
- Adds an element at tail maintaining list order.

***

**Code:**

```cpp
void insertAtEnd(Node*& head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;    // List empty, new node becomes head
    } else {
        Node* temp = head; 
        while (temp->next != NULL) {  // Traverse to last node
            temp = temp->next;
        }
        temp->next = newNode;        // Link last node to new node
    }
}
```


***

**Visual Step-by-Step:**

- Before:
`head -> [Node1] -> [Node2] -> NULL`
- New node (data=15) created:
`newNode -> NULL`
- Traverse to last node `[Node2]`
- Link last node:
`[Node2] -> newNode`
- Updated list:
`head -> [Node1] -> [Node2] -> [newNode] -> NULL`

***

**Time Complexity:** $O(n)$ due to traversal
**Space Complexity:** $O(1)$

***

#### c) Insertion at Given Position

**Algorithm Steps:**

1. If position is 0, insert at beginning.
2. Traverse to the node at position - 1.
3. Create new node.
4. Link new node’s `next` to the node at given position.
5. Set previous node's `next` to the new node.

**Why this matters:**

- Allows inserting in the middle.
- Careful pointer adjustments keep list intact.

***

**Code:**

```cpp
void insertAtPosition(Node*& head, int data, int position) {
    if (position == 0) { 
        insertAtBeginning(head, data); 
        return;
    }

    Node* temp = head;
    for (int i = 0; i < position - 1 && temp != NULL; i++)
        temp = temp->next;

    if (temp == NULL) {
        cout << "Position out of range\n";
        return;
    }

    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = temp->next;    // Step 4
    temp->next = newNode;          // Step 5
}
```


***

**Visual Step-by-Step:**

- Before:
`head -> [Node1] -> [Node2] -> [Node3]`
- Insert 7 at position 2 (between Node2 and Node3)
- Traverse to Node2
- Create `newNode(7)`
- Link:
`[Node2] -> newNode(7) -> [Node3]`

***

**Time Complexity:** $O(n)$ (due to traversal)
**Space Complexity:** $O(1)$

***

### 2. Deletion


***

#### a) Deletion from Beginning (Head)

**Algorithm Steps:**

1. If list empty, return.
2. Store current head in temp.
3. Move head to next node.
4. Delete old head.

**Why this matters:**

- Quick removal of first node.
- Updates head pointer safely.

***

**Code:**

```cpp
void deleteFromBeginning(Node*& head) {
    if (head == NULL) {
        cout << "List is empty\n";
        return;
    }
    Node* temp = head;
    head = head->next;
    delete temp;
}
```


***

**Visual Step-by-Step:**

- Before:
`head -> [Node1] -> [Node2] -> ...`
- Delete Node1:
`head` updated to `[Node2]`
- Old Node1 deleted.

***

**Time Complexity:** $O(1)$
**Space Complexity:** $O(1)$

***

#### b) Deletion from End

**Algorithm Steps:**

1. If list empty, return.
2. If one node, delete head.
3. Else, traverse to second last node.
4. Delete last node and set second last node’s next to NULL.

**Why this matters:**

- Requires traversal except when only one node.
- Adjust pointers to maintain list properly.

***

**Code:**

```cpp
void deleteFromEnd(Node*& head) {
    if (head == NULL) {
        cout << "List is empty\n";
        return;
    }
    if (head->next == NULL) {      // Only one node in list
        delete head;
        head = NULL;
        return;
    }
    Node* temp = head;
    while (temp->next->next != NULL)
        temp = temp->next;         // Traverse to second last node
    delete temp->next;             // Delete last node
    temp->next = NULL;             // Update second last node's next to NULL
}
```


***

**Visual Step-by-Step:**

- Before:
`... -> [NodeLast-1] -> [NodeLast] -> NULL`
- Delete NodeLast.
- After:
`... -> [NodeLast-1] -> NULL`

***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(1)$

***

#### c) Deletion at Given Position

**Algorithm Steps:**

1. If list empty, return.
2. If position is 0, delete from beginning.
3. Traverse to node at position -1.
4. Remove node at position and adjust pointers.

***

**Code:**

```cpp
void deleteFromPosition(Node*& head, int position) {
    if (head == NULL) {
        cout << "List is empty\n";
        return;
    }
    if (position == 0) {
        deleteFromBeginning(head);
        return;
    }
    
    Node* temp = head;
    for (int i = 0; i < position - 1 && temp != NULL; i++)
        temp = temp->next;
    
    if (temp == NULL || temp->next == NULL) {
        cout << "Position out of range\n";
        return;
    }
    
    Node* nodeToDelete = temp->next;
    temp->next = nodeToDelete->next;
    delete nodeToDelete;
}
```


***

**Visual Step-by-Step:**

- Before:
`nodePrev -> nodeToDelete -> nodeNext`
- Adjust pointer:
`nodePrev -> nodeNext`
- Delete nodeToDelete.

***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(1)$

***

### 3. Searching


***

**Algorithm Steps:**

1. Start from head.
2. Traverse while checking `data`.
3. Return `true` if found.
4. Else `false`.

***

**Code:**

```cpp
bool search(Node* head, int key) {
    Node* temp = head;
    while (temp != NULL) {
        if (temp->data == key)
            return true;
        temp = temp->next;
    }
    return false;  // Not found
}
```


***

**Visual Step-by-Step:**

- Check nodes one-by-one for `key`.

***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(1)$

***

### 4. Traversal


***

**Algorithm Steps:**

1. Start from head.
2. Print data of each node.
3. Move to next until NULL.

***

**Code:**

```cpp
void traverse(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}
```


***

**Visual:**

Displays all nodes in order:

```
data1 -> data2 -> data3 -> NULL
```


***

## Summary of Complexities

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Insert at beginning | $O(1)$ | $O(1)$ |
| Insert at end | $O(n)$ | $O(1)$ |
| Insert at position | $O(n)$ | $O(1)$ |
| Delete from beginning | $O(1)$ | $O(1)$ |
| Delete from end | $O(n)$ | $O(1)$ |
| Delete from position | $O(n)$ | $O(1)$ |
| Search | $O(n)$ | $O(1)$ |
| Traverse | $O(n)$ | $O(1)$ |


***

## Applications of Linked List

- **Dynamic memory management:** Grow or reduce size as needed.
- **Implementing stacks and queues:** Using linked nodes rather than fixed arrays.
- **Representing graphs:** Using adjacency lists.
- **Polynomial arithmetic:** Storing terms as nodes.
- **Symbol table management in compilers.**
- **Undo functionality in applications.**

***
