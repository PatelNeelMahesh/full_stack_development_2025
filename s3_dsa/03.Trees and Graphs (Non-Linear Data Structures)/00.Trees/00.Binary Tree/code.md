
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

class BinaryTree {
private:
    Node* root;

    // Helper function for preorder traversal
    void preorderTraversal(Node* node) {
        if (node == nullptr) return;
        cout << node->data << " ";
        preorderTraversal(node->left);
        preorderTraversal(node->right);
    }

    // Helper function for inorder traversal
    void inorderTraversal(Node* node) {
        if (node == nullptr) return;
        inorderTraversal(node->left);
        cout << node->data << " ";
        inorderTraversal(node->right);
    }

    // Helper function for postorder traversal
    void postorderTraversal(Node* node) {
        if (node == nullptr) return;
        postorderTraversal(node->left);
        postorderTraversal(node->right);
        cout << node->data << " ";
    }

    // Helper function to insert value (in Binary Search Tree manner)
    Node* insertNode(Node* node, int val) {
        if (node == nullptr) {
            return new Node(val);
        }
        if (val < node->data) {
            node->left = insertNode(node->left, val);
        } else if (val > node->data) {
            node->right = insertNode(node->right, val);
        }
        return node;
    }

    // Helper function to find min value node in subtree
    Node* minValueNode(Node* node) {
        Node* current = node;
        while (current && current->left != nullptr)
            current = current->left;
        return current;
    }

    // Helper function to delete a node
    Node* deleteNode(Node* node, int val) {
        if (node == nullptr) return node;

        if (val < node->data) {
            node->left = deleteNode(node->left, val);
        }
        else if (val > node->data) {
            node->right = deleteNode(node->right, val);
        }
        else {
            // Node with only one child or no child
            if (node->left == nullptr) {
                Node *temp = node->right;
                delete node;
                return temp;
            }
            else if (node->right == nullptr) {
                Node *temp = node->left;
                delete node;
                return temp;
            }

            // Node with two children: Get inorder successor
            Node* temp = minValueNode(node->right);
            node->data = temp->data;
            node->right = deleteNode(node->right, temp->data);
        }
        return node;
    }

    // Helper function to search a node
    bool searchNode(Node* node, int val) {
        if (node == nullptr) return false;
        if (node->data == val) return true;
        else if (val < node->data)
            return searchNode(node->left, val);
        else
            return searchNode(node->right, val);
    }

public:
    BinaryTree() : root(nullptr) {}

    void insert(int val) {
        root = insertNode(root, val);
    }

    void remove(int val) {
        root = deleteNode(root, val);
    }

    bool search(int val) {
        return searchNode(root, val);
    }

    void preorder() {
        cout << "Preorder Traversal: ";
        preorderTraversal(root);
        cout << endl;
    }

    void inorder() {
        cout << "Inorder Traversal: ";
        inorderTraversal(root);
        cout << endl;
    }

    void postorder() {
        cout << "Postorder Traversal: ";
        postorderTraversal(root);
        cout << endl;
    }
};

int main() {
    cout << "==========================" << endl;
    cout << "       Binary Tree         " << endl;
    cout << "==========================" << endl << endl;

    BinaryTree bt;

    // Insert operations
    bt.insert(50);
    bt.insert(30);
    bt.insert(70);
    bt.insert(20);
    bt.insert(40);
    bt.insert(60);
    bt.insert(80);

    cout << "After insertion:" << endl;
    bt.inorder();
    bt.preorder();
    bt.postorder();

    // Search operations
    int key = 40;
    cout << "\nSearching for " << key << ": ";
    cout << (bt.search(key) ? "Found" : "Not Found") << endl;

    key = 90;
    cout << "Searching for " << key << ": ";
    cout << (bt.search(key) ? "Found" : "Not Found") << endl;

    // Delete operations
    cout << "\nDeleting node 20" << endl;
    bt.remove(20);
    cout << "Inorder after deletion: ";
    bt.inorder();

    cout << "\nDeleting node 30" << endl;
    bt.remove(30);
    cout << "Inorder after deletion: ";
    bt.inorder();

    cout << "\nDeleting node 50" << endl;
    bt.remove(50);
    cout << "Inorder after deletion: ";
    bt.inorder();

    return 0;
}
```


***

### Expected Console Output (README style)

```
==========================
       Binary Tree         
==========================

After insertion:
Inorder Traversal: 20 30 40 50 60 70 80 
Preorder Traversal: 50 30 20 40 70 60 80 
Postorder Traversal: 20 40 30 60 80 70 50 

Searching for 40: Found
Searching for 90: Not Found

Deleting node 20
Inorder after deletion: 30 40 50 60 70 80 

Deleting node 30
Inorder after deletion: 40 50 60 70 80 

Deleting node 50
Inorder after deletion: 40 60 70 80 
```


***
