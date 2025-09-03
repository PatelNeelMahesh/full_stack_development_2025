```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node* prev;
    
    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;

public:
    DoublyLinkedList() : head(nullptr) {}

    // Insertion at the beginning
    void insertAtBeginning(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    // Insertion at the end
    void insertAtEnd(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr)
            temp = temp->next;
        temp->next = newNode;
        newNode->prev = temp;
    }

    // Insertion at a specific position (1-based index)
    void insertAtPosition(int val, int pos) {
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }
        if (pos == 1) {
            insertAtBeginning(val);
            return;
        }
        Node* newNode = new Node(val);
        Node* temp = head;
        for (int i = 1; i < pos - 1 && temp != nullptr; i++)
            temp = temp->next;
        
        if (temp == nullptr) {
            cout << "Position out of bounds!" << endl;
            delete newNode;
            return;
        }
        newNode->next = temp->next;
        newNode->prev = temp;
        if (temp->next != nullptr)
            temp->next->prev = newNode;
        temp->next = newNode;
    }

    // Deletion at the beginning
    void deleteAtBeginning() {
        if (head == nullptr) {
            cout << "List is empty, can't delete." << endl;
            return;
        }
        Node* toDelete = head;
        if (head->next != nullptr)
            head->next->prev = nullptr;
        head = head->next;
        delete toDelete;
    }

    // Deletion at the end
    void deleteAtEnd() {
        if (head == nullptr) {
            cout << "List is empty, can't delete." << endl;
            return;
        }
        if (head->next == nullptr) {
            delete head;
            head = nullptr;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr)
            temp = temp->next;
        temp->prev->next = nullptr;
        delete temp;
    }

    // Deletion at a specific position (1-based index)
    void deleteAtPosition(int pos) {
        if (head == nullptr) {
            cout << "List is empty, can't delete." << endl;
            return;
        }
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }
        if (pos == 1) {
            deleteAtBeginning();
            return;
        }
        Node* temp = head;
        for (int i = 1; i < pos && temp != nullptr; i++)
            temp = temp->next;
        if (temp == nullptr) {
            cout << "Position out of bounds!" << endl;
            return;
        }
        if (temp->prev != nullptr)
            temp->prev->next = temp->next;
        if (temp->next != nullptr)
            temp->next->prev = temp->prev;
        delete temp;
    }

    // Traversal forward
    void traverseForward() {
        Node* temp = head;
        cout << "Forward List: ";
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }

    // Traversal backward
    void traverseBackward() {
        if (head == nullptr) {
            cout << "List is empty!" << endl;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        cout << "Backward List: ";
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->prev;
        }
        cout << endl;
    }
};

int main() {
    cout << "==========================" << endl;
    cout << "    Doubly Linked List     " << endl;
    cout << "==========================" << endl << endl;

    DoublyLinkedList dll;

    cout << "Inserting 10, 20, 30 at end:" << endl;
    dll.insertAtEnd(10);
    dll.insertAtEnd(20);
    dll.insertAtEnd(30);
    dll.traverseForward();
    dll.traverseBackward();

    cout << "\nInserting 5 at beginning:" << endl;
    dll.insertAtBeginning(5);
    dll.traverseForward();
    dll.traverseBackward();

    cout << "\nInserting 25 at position 3:" << endl;
    dll.insertAtPosition(25, 3);
    dll.traverseForward();
    dll.traverseBackward();

    cout << "\nDeleting at beginning:" << endl;
    dll.deleteAtBeginning();
    dll.traverseForward();

    cout << "\nDeleting at end:" << endl;
    dll.deleteAtEnd();
    dll.traverseForward();

    cout << "\nDeleting at position 2:" << endl;
    dll.deleteAtPosition(2);
    dll.traverseForward();

    cout << "\nFinal Doubly Linked List in forward direction:" << endl;
    dll.traverseForward();

    cout << "\nFinal Doubly Linked List in backward direction:" << endl;
    dll.traverseBackward();

    cout << "\nApplications of Doubly Linked List:" << endl;
    cout << "- Allows bidirectional traversal." << endl;
    cout << "- Efficient insertions and deletions from both ends." << endl;
    cout << "- Used in navigation systems, undo-redo operations." << endl;
    cout << "- Useful in complex data structures like Fibonacci heaps." << endl;

    return 0;
}
```


***

### Expected Console Output (README Style)

```
==========================
    Doubly Linked List     
==========================

Inserting 10, 20, 30 at end:
Forward List: 10 20 30 
Backward List: 30 20 10 

Inserting 5 at beginning:
Forward List: 5 10 20 30 
Backward List: 30 20 10 5 

Inserting 25 at position 3:
Forward List: 5 10 25 20 30 
Backward List: 30 20 25 10 5 

Deleting at beginning:
Forward List: 10 25 20 30 

Deleting at end:
Forward List: 10 25 20 

Deleting at position 2:
Forward List: 10 20 

Final Doubly Linked List in forward direction:
Forward List: 10 20 

Final Doubly Linked List in backward direction:
Backward List: 20 10 

```


***

