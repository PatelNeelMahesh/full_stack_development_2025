# Binary Search Tree (BST)
## Introduction and Definition

A **Binary Search Tree (BST)** is a special type of binary tree where every node maintains the property:

- The **left subtree** of a node contains only nodes with values **less** than the node’s value.
- The **right subtree** of a node contains only nodes with values **greater** than the node’s value.
- Both left and right subtrees must themselves be BSTs.

This property enables efficient searching, insertion, and deletion operations with average time complexity $O(\log n)$.

***

## Node Structure

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};
```


***

## Terminology in BST Context


***

### Root

The **root** is the topmost node in a tree that has no parent. It is the origin from which the entire tree branches out.

**Example:**

```
        [A]    <-- Root
       /   \
     [B]   [C]
```

Here, **A** is the root node.

***

### Parent and Child

A **parent** is a node that has one or more child nodes, which are directly connected below it. A **child** is any node directly connected to a parent node.

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
- **B**, **C**, and **D** are children.

***

### Leaf

A **leaf** is a node without any children. Leaves are terminal nodes of a tree.

**Example:**

```
        [A]
       /   \
     [B]   [C]
     /
   [D]   <-- Leaf
```

- Nodes **C** and **D** are leaves because they have no children.

***

### Subtree

A **subtree** is a node and all of its descendants. Any node can be the root of a subtree.

**Example:**

```
        [A]
       /   \
     [B]   [C]
     /
   [D]
```

- The subtree rooted at **B** contains nodes **B** and **D**.

***

### Edge

An **edge** is the connection or link between two nodes — usually a parent and its child.

**Example:**

```
        [A]
       /   \
     [B]   [C]
```

- The lines connecting **A** to **B** and **A** to **C** are edges.

***

### Height

The **height** of a tree is the length of the longest path (number of edges) from the root down to any leaf.

**Example:**

```
        [A]         (Height = 2)
       /   \
     [B]   [C]      Longest path: A -> B -> D
     /
   [D]   <-- Leaf
```

- The path from **A** to **D** goes through 2 edges, so the height is 2.

***

### Depth

The **depth** of a node is the distance (number of edges) from the root to that node.

**Example:**

```
        [A] (Depth=0)
       /   \
     [B]   [C] (Depth=1)
     /
   [D]      (Depth=2)
```

- The root **A** has depth 0.
- Nodes **B** and **C** have depth 1.
- Node **D** has depth 2.

***

### Degree

The **degree** of a node is the number of children it has.

**Example:**

```
        [A]  (Degree=2)
       /   \
     [B]   [C]  (Degree=0 for both)
     /
   [D]   (Degree=0)
```

- Node **A** has two children → degree 2.
- Nodes **B**, **C**, and **D** have no or one child → degrees 0 or 1 accordingly.

***
## Visual Representation of a Sample BST

```
           50
          /  \
        30    70
       / \    / \
     20  40  60  80
```

- Node 50 is root (depth 0, degree 2).
- Nodes 20, 40, 60, 80 are leaves.
- Height of tree is 2 (edges from 50 → 30 → 20 or 50 → 70 → 80).

***

## Common BST Operations


***

***

## 1. **Insertion** in Binary Search Tree (BST)


***

### Algorithm Steps:

- If the current node (`root`) is `nullptr`, this is the insertion point — create and return a new node.
- Otherwise, compare the value to insert with the current node’s data:
    - If value is **less**, recursively insert in the **left subtree**.
    - If value is **greater**, recursively insert in the **right subtree**.
- If value is equal, do nothing (no duplicate entries).
- After insertion, return the current node to link subtrees properly.

***

### Code with Detailed Comments:

```cpp
Node* insert(Node* root, int data) {
    // Base case: found null spot, insert new node here
    if (root == nullptr) {
        return new Node(data);
    }
    // Go left if data is smaller than current node's data
    if (data < root->data) {
        root->left = insert(root->left, data);
    }
    // Go right if data is greater than current node's data
    else if (data > root->data) {
        root->right = insert(root->right, data);
    }
    // If data equals root->data, do not insert duplicates
    return root;
}
```


***

### Visual Example:

Inserting `30` into this BST:

```
        50
       /  \
     20    70
```

- Compare 30 with 50 → less, go left.
- Left child is 20.
- Compare 30 with 20 → greater, go right — which is `nullptr`.
- Insert new node 30 as right child of 20.

Result:

```
        50
       /  \
     20    70
       \
        30
```


***

### Complexity:

- **Time Complexity:** $O(h)$, where $h$ is tree height.
- **Space Complexity:** $O(h)$ due to recursion stack.

***

## 2. **Search** in BST


***

### Algorithm Steps:

- If `root` is `nullptr`, key not found — return false.
- If current node’s data matches the key, return true.
- If key < current node’s data, search left subtree.
- Else, search right subtree.

***

### Code with Detailed Comments:

```cpp
bool search(Node* root, int key) {
    if (root == nullptr) return false;        // Base case: empty tree or not found
    if (root->data == key) return true;       // Found key at current node

    if (key < root->data)                     // Search in left subtree
        return search(root->left, key);

    else                                     // Search in right subtree
        return search(root->right, key);
}
```


***

### Visual Example:

Searching for `70` starting at root `50`:

- `70` > `50`, move right.
- Right subtree root is `70` — found.

***

### Complexity:

- **Time Complexity:** $O(h)$
- **Space Complexity:** $O(h)$ recursion stack overhead.

***

## 3. **Inorder Traversal** (Sorted Order)


***

### Algorithm Steps:

- Recursively traverse left subtree.
- Process current node (e.g., print value).
- Recursively traverse right subtree.

***

### Code with Comments:

```cpp
void inorder(Node* root) {
    if (root == nullptr) return;           // Base case: empty subtree
    inorder(root->left);                   // Visit left subtree
    cout << root->data << " ";             // Process current node
    inorder(root->right);                  // Visit right subtree
}
```


***

### Visual Example:

For BST:

```
        40
       /  \
     20    60
     / \
   10  30
```

Inorder output (sorted):
`10 20 30 40 60`

***

### Complexity:

- **Time Complexity:** $O(n)$, all nodes visited once.
- **Space Complexity:** $O(h)$, recursion stack size.

***

## 4. **Deletion** in BST


***

### Algorithm Overview:

- Find the node with the target key.
- Handle three cases:
    - **No children (leaf):** Delete node simply.
    - **One child:** Replace node with child.
    - **Two children:**
        - Find inorder successor (minimum node in right subtree).
        - Copy successor’s data into current node.
        - Delete the successor node recursively.

***

### Supporting Function: Find Minimum Node

```cpp
Node* findMin(Node* root) {
    while (root->left != nullptr)
        root = root->left;            // Leftmost node in subtree
    return root;
}
```


***

### Deletion Function with Comments:

```cpp
Node* deleteNode(Node* root, int key) {
    if (root == nullptr) return root;     // Base case

    if (key < root->data) {
        root->left = deleteNode(root->left, key);      // Go left
    }
    else if (key > root->data) {
        root->right = deleteNode(root->right, key);    // Go right
    }
    else {
        // Node found

        // Case 1: No left child
        if (root->left == nullptr) {
            Node* temp = root->right;
            delete root;
            return temp;
        }
        // Case 2: No right child
        else if (root->right == nullptr) {
            Node* temp = root->left;
            delete root;
            return temp;
        }

        // Case 3: Two children
        Node* temp = findMin(root->right);       // Inorder successor
        root->data = temp->data;                  // Copy successor’s value
        root->right = deleteNode(root->right, temp->data);  // Delete successor
    }
    return root;
}
```


***

### Visual Example of Deletion:

Delete node `30` from:

```
        40
       /  \
     20    60
     / \
   10  30
```

- `30` is a leaf, deleted simply.

Delete node `20` from:

```
        40
       /  \
     20    60
     / \
   10  30
```

- `20` has two children.
- Find successor `30`.
- Replace `20` with `30`.
- Delete leaf `30` node.

Result:

```
        40
       /  \
     30    60
     /
   10
```


***

### Complexity:

- **Average Time Complexity:** $O(\log n)$
- **Worst Time Complexity:** $O(n)$ (degenerate tree)
- **Space Complexity:** $O(h)$

***

## Time and Space Complexity

| Operation | Average Time Complexity | Worst Time Complexity | Space Complexity |
| :-- | :-- | :-- | :-- |
| Search | $O(\log n)$ | $O(n)$ | $O(h)$ (recursion stack, h: height) |
| Insert | $O(\log n)$ | $O(n)$ | $O(h)$ |
| Delete | $O(\log n)$ | $O(n)$ | $O(h)$ |
| Inorder Traversal | $O(n)$ | $O(n)$ | $O(h)$ |

- **Note:** Worst case occurs when BST degenerates into a linked list (e.g., inserting sorted data).

***

## Example Usage \& Output

```cpp
int main() {
    Node* root = nullptr;

    int values[] = {50, 30, 20, 40, 70, 60, 80};

    for (int val : values) {
        root = insert(root, val);
    }

    cout << "Inorder traversal of the BST: ";
    inorder(root);
    cout << endl;

    cout << "Search for 40: " << (search(root, 40) ? "Found" : "Not Found") << endl;

    root = deleteNode(root, 20);  // Delete leaf node
    root = deleteNode(root, 30);  // Delete node with one child
    root = deleteNode(root, 50);  // Delete node with two children

    cout << "Inorder traversal after deletions: ";
    inorder(root);
    cout << endl;

    return 0;
}
```

**Expected Output:**

```
Inorder traversal of the BST: 20 30 40 50 60 70 80 
Search for 40: Found
Inorder traversal after deletions: 40 60 70 80 
```


***

## Summary:

- BSTs provide efficient search, insert, and delete if balanced.
- In-order traversal outputs keys in sorted order.
- Deletion requires careful handling of the three cases.
- Poorly balanced BST can degrade performance to linear time.

***

Would you like me to create a similar comprehensive file with detailed explanations and code for **Balanced BSTs (like AVL or Red-Black trees)**?
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: Binary-Tree.md

