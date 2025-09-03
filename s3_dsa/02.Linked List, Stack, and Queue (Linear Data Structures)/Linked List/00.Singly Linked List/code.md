```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class SinglyLinkedList {
private:
    Node* head;

public:
    SinglyLinkedList() : head(nullptr) {}

    // Insertion at the beginning
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    // Insertion at the end
    void insertAtEnd(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = newNode;
    }

    // Insertion at a specific position (1-based index)
    void insertAtPosition(int val, int pos) {
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }
        if (pos == 1) {
            insertAtHead(val);
            return;
        }
        Node* newNode = new Node(val);
        Node* temp = head;
        for (int i = 1; i < pos - 1 && temp != nullptr; i++) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "Position out of bounds!" << endl;
            delete newNode;
            return;
        }
        newNode->next = temp->next;
        temp->next = newNode;
    }

    // Deletion at the beginning
    void deleteAtHead() {
        if (!head) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        Node* toDelete = head;
        head = head->next;
        delete toDelete;
    }

    // Deletion at the end
    void deleteAtEnd() {
        if (!head) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        if (head->next == nullptr) {
            delete head;
            head = nullptr;
            return;
        }
        Node* temp = head;
        while (temp->next->next) {
            temp = temp->next;
        }
        delete temp->next;
        temp->next = nullptr;
    }

    // Deletion at a specific position (1-based index)
    void deleteAtPosition(int pos) {
        if (!head) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }
        if (pos == 1) {
            deleteAtHead();
            return;
        }
        Node* temp = head;
        for (int i = 1; i < pos - 1 && temp != nullptr; i++) {
            temp = temp->next;
        }
        if (temp == nullptr || temp->next == nullptr) {
            cout << "Position out of bounds!" << endl;
            return;
        }
        Node* toDelete = temp->next;
        temp->next = toDelete->next;
        delete toDelete;
    }

    // Searching for value; returns true if found
    bool search(int val) {
        Node* temp = head;
        while (temp) {
            if (temp->data == val) return true;
            temp = temp->next;
        }
        return false;
    }

    // Traversal and displaying list
    void traverse() {
        if (!head) {
            cout << "List is empty." << endl;
            return;
        }
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
};

int main() {
    cout << "==========================" << endl;
    cout << "   Singly Linked List      " << endl;
    cout << "==========================" << endl << endl;

    SinglyLinkedList sll;

    cout << "---Insertion at head---" << endl;
    sll.insertAtHead(10);
    sll.insertAtHead(20);
    sll.traverse();

    cout << "\n---Insertion at end---" << endl;
    sll.insertAtEnd(30);
    sll.insertAtEnd(40);
    sll.traverse();

    cout << "\n---Insertion at position 3---" << endl;
    sll.insertAtPosition(25, 3);
    sll.traverse();

    cout << "\n---Deletion at head---" << endl;
    sll.deleteAtHead();
    sll.traverse();

    cout << "\n---Deletion at end---" << endl;
    sll.deleteAtEnd();
    sll.traverse();

    cout << "\n---Deletion at position 2---" << endl;
    sll.deleteAtPosition(2);
    sll.traverse();

    cout << "\n---Searching for 25---" << endl;
    cout << (sll.search(25) ? "Found 25 in the list." : "25 not found in the list.") << endl;

    cout << "\n---Searching for 100---" << endl;
    cout << (sll.search(100) ? "Found 100 in the list." : "100 not found in the list.") << endl;

    cout << "\n---Final linked list traversal---" << endl;
    sll.traverse();

    cout << "\nApplications of Linked Lists:" << endl;
    cout << "- Dynamic memory use while managing collections." << endl;
    cout << "- Implementing stacks, queues, and graphs." << endl;
    cout << "- Useful in database systems and memory management." << endl;
    cout << "- Efficient insertion and deletion compared to arrays." << endl;

    return 0;
}
```


***

### Expected Console Output (README style)

```
==========================
   Singly Linked List      
==========================

---Insertion at head---
20 -> 10 -> NULL

---Insertion at end---
20 -> 10 -> 30 -> 40 -> NULL

---Insertion at position 3---
20 -> 10 -> 25 -> 30 -> 40 -> NULL

---Deletion at head---
10 -> 25 -> 30 -> 40 -> NULL

---Deletion at end---
10 -> 25 -> 30 -> NULL

---Deletion at position 2---
10 -> 30 -> NULL

---Searching for 25---
25 not found in the list.

---Searching for 100---
100 not found in the list.

---Final linked list traversal---
10 -> 30 -> NULL

```


***
