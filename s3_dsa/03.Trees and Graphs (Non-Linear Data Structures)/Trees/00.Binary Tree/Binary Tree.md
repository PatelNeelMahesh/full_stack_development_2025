# Trees


***

## Introduction and Representations

A **tree** is a nonlinear hierarchical data structure composed of nodes connected by edges, representing relationships in a parent-child manner. It organizes data in levels, starting from a *root* node, where each node may have zero or more children. Each node except the root has exactly one parent.

### Terminology

***

### 1. **Root**

- The **root** is the **topmost node** of the tree.
- It has **no parent** node.
- All other nodes are descendants of the root.

**Example:**

```
        [A]   <-- Root
       /   \
     [B]   [C]
```

Here, **A** is the root node.

***

### 2. **Parent and Child**

- A **parent** node is any node that has one or more subordinate nodes called **children**.
- A **child** node is directly connected below a parent.
- The **parent-child** relationship defines the tree structure hierarchy.

**Example:**

```
        [A]
       /   \
     [B]   [C]
     /
   [D]
```

- **A** is the parent of **B** and **C**.
- **B** is the parent of **D**.
- **B**, **C**, **D** are children of their respective parents.

***

### 3. **Leaf (External Node)**

- A **leaf** is a node with **no children**.
- Leaves are the terminal nodes of the tree.

**Example:**

```
        [A]
       /   \
     [B]   [C]
     /
   [D]   <-- Leaf
```

- **C** and **D** have no children, so they are leaves.
- **B** is not a leaf because it has child **D**.
- **A** is not a leaf.

***

### 4. **Subtree**

- A **subtree** consists of a node and **all of its descendants**.
- Every node in a tree can be considered the root of a subtree.

**Example:**

```
        [A]
       /   \
     [B]   [C]
     /
   [D]
```

- The subtree rooted at **B** contains nodes **B** and **D**.
- The subtree rooted at **A** is the entire tree.

***

### 5. **Edge**

- An **edge** is the **connection or link between two nodes** (parent and child).
- Represents the relationship or path.

**Example:**

```
        [A]
       /   \
     [B]---[C]
```

- The lines (/) and (\$\$ represent edges.
- Edge connects **A to B** and **A to C**.

***

### 6. **Height of a Tree**

- The **height** is the length of the **longest path from the root to any leaf**.
- It is measured as the number of edges on this longest path.
- Height of an empty tree is defined as -1 or 0 depending on convention.

**Example:**

```
        [A]         (Height = 2)
       /   \
     [B]   [C]      Longest path: A -> B -> D
     /
   [D]  <-- Leaf
```

- Path A→B→D has 2 edges; height = 2.

***

### 7. **Depth of a Node**

- The **depth** (or level) of a node is the distance from the **root to that node**.
- Measured by the number of edges from root to the node.

**Example:**

```
        [A] (Depth=0)
       /   \
     [B]   [C] (Depth=1)
     /
   [D]      (Depth=2)
```

- Depth of A is 0 (root).
- Depth of B and C is 1.
- Depth of D is 2.

***

### 8. **Degree of a Node**

- The **degree** of a node is the number of **children** it has.
- For example, binary tree nodes have degree 0, 1, or 2.

**Example:**

```
        [A]  (Degree=2)
       /   \
     [B]   [C]  (Degree=0 for both)
     /
   [D]   (Degree=0)
```

- Node A has degree 2.
- Nodes B, C, D have degree 0 or 1 depending on children.

***

## Summary Table of Terms

| Term | Definition | Example Node(s) |
| :-- | :-- | :-- |
| Root | Topmost node without parent | A |
| Parent | Node with one or more children | A (parent of B,C), B (parent of D) |
| Child | Node directly descended from another | B, C, D |
| Leaf | Node with no children | C, D |
| Subtree | Any node + all its descendants | Subtree rooted at B includes B and D |
| Edge | Connection between parent and child | A-B, A-C, B-D |
| Height | Max distance from root to leaf (edges count) | Height of tree rooted at A = 2 |
| Depth | Distance from root to a node | Depth of D = 2 |
| Degree | Number of children a node has | Degree of A = 2 |


***

## Visual Representation of Example Tree Concepts

```
            (A) Root, Degree=2, Depth=0, Height=2
           /    \
      (B)        (C) Leaf, Degree=0, Depth=1, Height=0
    Degree=1, Depth=1, Height=1
     /
  (D) Leaf, Degree=0, Depth=2, Height=0
```


***

***

## Binary Tree

A **binary tree** is a specialized tree in which every node has up to **two** children — commonly referred to as the left and right child.

### Node Structure

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};
```


***

## Tree Traversals

Traversal means visiting all the nodes of a tree **systematically**. There are three primary depth-first traversals:

***

***

### 1. Inorder Traversal (Left, Root, Right)

**Algorithm:**

- Recursively visit the left subtree.
- Process the current (root) node.
- Recursively visit the right subtree.

**Property:**

- For a Binary Search Tree (BST), produces nodes in **sorted ascending order**.

**Code:**

```cpp
void inorder(Node* root) {
    if (root == nullptr)
        return;                       // Base condition: empty subtree
    inorder(root->left);              // Visit left subtree
    cout << root->data << " ";       // Process current node
    inorder(root->right);             // Visit right subtree
}
```

**Visual Example:**

Given this tree:

```
       4
      / \
     2   5
    / \
   1   3
```

Inorder traversal sequence:
**1 2 3 4 5**

***

**Time Complexity:** $O(n)$ — visit every node once
**Space Complexity:** $O(h)$ — recursion stack, h = height of tree

***

### 2. Preorder Traversal (Root, Left, Right)

**Algorithm:**

- Process the current (root) node.
- Recursively visit the left subtree.
- Recursively visit the right subtree.

**Use Case:**
Useful for **cloning** or serializing trees because the root is processed first.

**Code:**

```cpp
void preorder(Node* root) {
    if (root == nullptr)
        return;                       // Base case
    cout << root->data << " ";       // Process root first
    preorder(root->left);             // Visit left subtree
    preorder(root->right);            // Visit right subtree
}
```

**Visual Example:**

Same tree as above:

Preorder sequence:
**4 2 1 3 5**

***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(h)$

***

### 3. Postorder Traversal (Left, Right, Root)

**Algorithm:**

- Recursively visit the left subtree.
- Recursively visit the right subtree.
- Process the current (root) node.

**Use Case:**
Commonly used for **deleting/freeing** nodes in trees or evaluating postfix expressions.

**Code:**

```cpp
void postorder(Node* root) {
    if (root == nullptr)
        return;
    postorder(root->left);            // Visit left subtree
    postorder(root->right);           // Visit right subtree
    cout << root->data << " ";       // Process root last
}
```

**Visual Example:**

Postorder sequence:
**1 3 2 5 4**

***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(h)$

***

### 4. Level Order Traversal (Breadth-First Search)

**Algorithm:**

- Visit nodes **level by level** from left to right.
- Use a queue to track nodes of current level before moving to next.

**Code:**

```cpp
#include <queue>

void levelOrder(Node* root) {
    if (root == nullptr) return;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* curr = q.front();
        q.pop();

        cout << curr->data << " ";

        if (curr->left != nullptr)
            q.push(curr->left);
        if (curr->right != nullptr)
            q.push(curr->right);
    }
}
```

**Visual Example:**

Level-order output for example tree:
**4 2 5 1 3**

***

**Time Complexity:** $O(n)$ — each node visited once
**Space Complexity:** $O(w)$ — where $w$ is maximum width (max number of nodes at one level)

***

## Tree Operations (Binary Tree)


***

### 1. Insert Node (Level Order Insertion)

**Goal:** Maintain tree completeness by inserting nodes at the first available spot from left to right.

**Algorithm:**

- If tree is empty, new node becomes root.
- Else, perform level order traversal to find first node with missing child.
- Insert new node as left or right child.

**Code:**

```cpp
#include <queue>

void insert(Node*& root, int data) {
    Node* newNode = new Node(data);
    if (root == nullptr) {
        root = newNode;
        return;
    }

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->left == nullptr) {
            temp->left = newNode;
            break;
        } else {
            q.push(temp->left);
        }

        if (temp->right == nullptr) {
            temp->right = newNode;
            break;
        } else {
            q.push(temp->right);
        }
    }
}
```

**Visual Example:**

Insert 6 into:

```
       1
      / \
     2   3
    / \
   4   5
```

After insertion:

```
       1
      / \
     2   3
    / \   /
   4   5 6
```


***

**Time Complexity:** $O(n)$ — possibly traverse many nodes
**Space Complexity:** $O(n)$ — queue storage in worst case

***

### 2. Search Node (Level Order Search)

**Algorithm:**

- Use level order traversal.
- Check each node’s data against the target key.
- Return true if found, else false.

**Code:**

```cpp
bool search(Node* root, int key) {
    if (root == nullptr) return false;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->data == key)
            return true;

        if (temp->left != nullptr)
            q.push(temp->left);
        if (temp->right != nullptr)
            q.push(temp->right);
    }
    return false;
}
```


***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(n)$

***

### 3. Delete Node

**Algorithm:**

- Locate node with value to delete (`keyNode`).
- Find deepest and rightmost node (`deepestNode`).
- Replace `keyNode`’s value with `deepestNode`’s value.
- Delete `deepestNode`.

**Code:**

```cpp
void deleteDeepest(Node* root, Node* delNode) {
    queue<Node*> q;
    q.push(root);

    Node* temp;
    while (!q.empty()) {
        temp = q.front();
        q.pop();

        if (temp == delNode) {
            temp = nullptr;
            delete delNode;
            return;
        }

        if (temp->left) {
            if (temp->left == delNode) {
                temp->left = nullptr;
                delete delNode;
                return;
            } else {
                q.push(temp->left);
            }
        }

        if (temp->right) {
            if (temp->right == delNode) {
                temp->right = nullptr;
                delete delNode;
                return;
            } else {
                q.push(temp->right);
            }
        }
    }
}

void deleteNode(Node*& root, int key) {
    if (root == nullptr) return;

    if (root->left == nullptr && root->right == nullptr) {
        if (root->data == key) {
            delete root;
            root = nullptr;
        }
        return;
    }

    queue<Node*> q;
    q.push(root);

    Node* keyNode = nullptr;
    Node* temp;

    while (!q.empty()) {
        temp = q.front();
        q.pop();

        if (temp->data == key)
            keyNode = temp;

        if (temp->left)
            q.push(temp->left);
        if (temp->right)
            q.push(temp->right);
    }

    if (keyNode != nullptr) {
        int x = temp->data;
        deleteDeepest(root, temp);
        keyNode->data = x;
    }
}
```


***

**Example Visualization:**

Delete node with value 2 from:

```
       1
      / \
     2   3
    / \
   4   5
```

- Deepest rightmost node is 5.
- Replace 2 with 5, then delete node 5.

Result:

```
       1
      / \
     5   3
    /
   4
```


***

**Time Complexity:** $O(n)$
**Space Complexity:** $O(n)$

***

# Summary of Traversals and Operations Complexity

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Inorder Traversal | $O(n)$ | $O(h)$ |
| Preorder Traversal | $O(n)$ | $O(h)$ |
| Postorder Traversal | $O(n)$ | $O(h)$ |
| Level Order Traversal | $O(n)$ | $O(w)$ |
| Insert (Level Order) | $O(n)$ | $O(n)$ |
| Search (Level Order) | $O(n)$ | $O(n)$ |
| Delete Node | $O(n)$ | $O(n)$ |

*Where*

- $n$ = number of nodes
- $h$ = height (max tree depth)
- $w$ = maximum width (max nodes at any level)

***

## Applications of Trees

- **Hierarchies:** Organizational charts, file systems.
- **Search algorithms:** Binary Search Trees for efficient search.
- **Expression parsing:** Expression trees for compilers.
- **Routing protocols:** Network routing and forwarding tables.
- **Artificial Intelligence:** Decision trees and game trees.
- **Databases:** Indexing with B-Trees and variants.

***
