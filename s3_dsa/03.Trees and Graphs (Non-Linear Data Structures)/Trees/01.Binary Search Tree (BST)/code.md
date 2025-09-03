```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BST {
private:
    Node* root;

    // Helper recursive function to insert a value
    Node* insertNode(Node* node, int data) {
        if (node == nullptr) {
            // Found the spot to insert
            return new Node(data);
        }
        if (data < node->data) {
            // Go to left subtree
            node->left = insertNode(node->left, data);
        } else if (data > node->data) {
            // Go to right subtree
            node->right = insertNode(node->right, data);
        }
        // If data == node->data, do not insert duplicates
        return node;
    }

    // Helper recursive function to search for a value
    bool searchNode(Node* node, int key) {
        if (node == nullptr) return false;        // Not found
        if (node->data == key) return true;       // Found
        if (key < node->data)
            return searchNode(node->left, key);   // Search left
        else
            return searchNode(node->right, key);  // Search right
    }

    // Helper recursive inorder traversal
    void inorderTraversal(Node* node) {
        if (node == nullptr) return;
        inorderTraversal(node->left);
        cout << node->data << " ";
        inorderTraversal(node->right);
    }

    // Helper to find minimum value node in subtree
    Node* findMin(Node* node) {
        while (node->left != nullptr)
            node = node->left;
        return node;
    }

    // Helper recursive function to delete a node
    Node* deleteNode(Node* node, int key) {
        if (node == nullptr) return node;

        if (key < node->data) {
            node->left = deleteNode(node->left, key);
        } else if (key > node->data) {
            node->right = deleteNode(node->right, key);
        } else {
            // Node found

            // Case 1: No left child
            if (node->left == nullptr) {
                Node* temp = node->right;
                delete node;
                return temp;
            }

            // Case 2: No right child
            if (node->right == nullptr) {
                Node* temp = node->left;
                delete node;
                return temp;
            }

            // Case 3: Two children
            Node* temp = findMin(node->right);  // Inorder successor
            node->data = temp->data;             // Copy successor's data
            node->right = deleteNode(node->right, temp->data); // Delete successor
        }
        return node;
    }

public:
    BST() : root(nullptr) {}

    // Public insert method
    void insert(int data) {
        root = insertNode(root, data);
    }

    // Public search method
    bool search(int key) {
        return searchNode(root, key);
    }

    // Public delete method
    void remove(int key) {
        root = deleteNode(root, key);
    }

    // Public inorder traversal
    void inorder() {
        inorderTraversal(root);
        cout << endl;
    }
};

int main() {
    BST bst;

    // Insert nodes
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    bst.insert(20);
    bst.insert(40);
    bst.insert(60);
    bst.insert(80);

    cout << "Inorder traversal: ";
    bst.inorder();

    cout << "Searching for 40: " << (bst.search(40) ? "Found" : "Not Found") << endl;
    cout << "Searching for 90: " << (bst.search(90) ? "Found" : "Not Found") << endl;

    bst.remove(20);
    cout << "Inorder traversal after deleting 20: ";
    bst.inorder();

    bst.remove(30);
    cout << "Inorder traversal after deleting 30: ";
    bst.inorder();

    bst.remove(50);
    cout << "Inorder traversal after deleting 50: ";
    bst.inorder();

    return 0;
}
```
***

## Expected Console Output

```
Inorder traversal: 20 30 40 50 60 70 80 

Searching for 40: Found
Searching for 90: Not Found

Inorder traversal after deleting 20: 30 40 50 60 70 80 

Inorder traversal after deleting 30: 40 50 60 70 80 

Inorder traversal after deleting 50: 40 60 70 80 
```


***

### Explanation:

- The **first inorder traversal** outputs the sorted sequence of initially inserted nodes.
- The **search results** confirm presence or absence of queried keys.
- Each **inorder traversal after deletion** shows the BST with the specified node removed, still maintaining sorted order.

***


***

### Time and Space Complexity

- **Insertion / Search / Deletion:**
Average case $O(\log n)$, worst case $O(n)$ if unbalanced.
- **Inorder Traversal:** $O(n)$
- **Space Complexity:** $O(h)$ due to recursion stack, where $h$ is tree height.

***


