```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class CircularLinkedList {
private:
    Node* tail;  // Maintain tail pointer for easier insertions/deletions

public:
    CircularLinkedList() : tail(nullptr) {}

    // Insertion at beginning (head)
    void insertAtBeginning(int val) {
        Node* newNode = new Node(val);
        if (!tail) { // Empty list
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
        }
    }

    // Insertion at end
    void insertAtEnd(int val) {
        insertAtBeginning(val);
        tail = tail->next;
    }

    // Insertion at a specific position (1-based index)
    void insertAtPosition(int val, int pos) {
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }
        if (!tail) {
            if (pos == 1) {
                insertAtBeginning(val);
            } else {
                cout << "List is empty; position out of bounds." << endl;
            }
            return;
        }
        if (pos == 1) {
            insertAtBeginning(val);
            return;
        }
        Node* curr = tail->next;
        int count = 1;
        while (count < pos - 1 && curr != tail) {
            curr = curr->next;
            count++;
        }
        if (count != pos - 1) {
            cout << "Position out of bounds!" << endl;
            return;
        }
        Node* newNode = new Node(val);
        newNode->next = curr->next;
        curr->next = newNode;
        if (curr == tail) { // Inserted at end, update tail
            tail = newNode;
        }
    }

    // Deletion from beginning
    void deleteFromBeginning() {
        if (!tail) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        Node* head = tail->next;
        if (tail == head) { // Only one node
            delete head;
            tail = nullptr;
            return;
        }
        tail->next = head->next;
        delete head;
    }

    // Deletion from end
    void deleteFromEnd() {
        if (!tail) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        Node* curr = tail->next;
        if (tail == curr) { // Only one node
            delete tail;
            tail = nullptr;
            return;
        }
        // Find node before tail
        while (curr->next != tail) {
            curr = curr->next;
        }
        curr->next = tail->next;
        delete tail;
        tail = curr;
    }

    // Deletion at a specific position (1-based index)
    void deleteAtPosition(int pos) {
        if (!tail) {
            cout << "List is empty, cannot delete." << endl;
            return;
        }
        if (pos <= 0) {
            cout << "Invalid position!" << endl;
            return;
        }

        if (pos == 1) {
            deleteFromBeginning();
            return;
        }

        Node* curr = tail->next;
        int count = 1;
        while (count < pos - 1 && curr != tail) {
            curr = curr->next;
            count++;
        }

        Node* toDelete = curr->next;
        if (!toDelete || toDelete == tail->next) {
            cout << "Position out of bounds!" << endl;
            return;
        }

        curr->next = toDelete->next;
        if (toDelete == tail) {
            tail = curr;
        }
        delete toDelete;
    }

    // Searching for an element
    bool search(int val) {
        if (!tail) return false;
        Node* curr = tail->next;
        do {
            if (curr->data == val) return true;
            curr = curr->next;
        } while (curr != tail->next);
        return false;
    }

    // Traversal
    void traverse() {
        if (!tail) {
            cout << "List is empty." << endl;
            return;
        }
        Node* curr = tail->next;
        cout << "Circular List: ";
        do {
            cout << curr->data << " -> ";
            curr = curr->next;
        } while (curr != tail->next);
        cout << "(head)" << endl;
    }
};

int main() {
    cout << "==========================" << endl;
    cout << "    Circular Linked List    " << endl;
    cout << "==========================" << endl << endl;

    CircularLinkedList cll;

    // Insertions
    cout << "Insertion Operations:" << endl;
    cll.insertAtBeginning(10);
    cll.insertAtEnd(20);
    cll.insertAtEnd(30);
    cll.insertAtBeginning(5);
    cll.insertAtPosition(15, 3);
    cll.traverse();

    // Deletions
    cout << "\nDeletion Operations:" << endl;
    cll.deleteFromBeginning();
    cout << "After deleting from beginning: ";
    cll.traverse();

    cll.deleteFromEnd();
    cout << "After deleting from end: ";
    cll.traverse();

    cll.deleteAtPosition(2);
    cout << "After deleting at position 2: ";
    cll.traverse();

    // Searching
    int val = 20;
    cout << "\nSearching Operation:" << endl;
    if (cll.search(val))
        cout << val << " found in the list." << endl;
    else
        cout << val << " not found in the list." << endl;

    val = 100;
    if (cll.search(val))
        cout << val << " found in the list." << endl;
    else
        cout << val << " not found in the list." << endl;

    return 0;
}
```


***

### Expected Console Output (README Style)

```
==========================
    Circular Linked List    
==========================

Insertion Operations:
Circular List: 5 -> 10 -> 15 -> 20 -> 30 -> (head)

Deletion Operations:
After deleting from beginning: Circular List: 10 -> 15 -> 20 -> 30 -> (head)
After deleting from end: Circular List: 10 -> 15 -> 20 -> (head)
After deleting at position 2: Circular List: 10 -> 20 -> (head)

Searching Operation:
20 found in the list.
100 not found in the list.
```


***
