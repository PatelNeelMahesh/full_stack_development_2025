
```cpp
#include <iostream>
using namespace std;

class SimpleQueue {
private:
    int* queue;
    int front, rear, capacity;

public:
    SimpleQueue(int size) {
        capacity = size;
        queue = new int[capacity];
        front = -1;
        rear = -1;
    }

    ~SimpleQueue() {
        delete[] queue;
    }

    // Insert operation (enqueue)
    void insert(int val) {
        if (rear == capacity - 1) {
            cout << "Queue Overflow! Cannot insert " << val << endl;
            return;
        }
        if (front == -1) front = 0;
        rear++;
        queue[rear] = val;
        cout << "Inserted " << val << " into the queue." << endl;
    }

    // Delete operation (dequeue)
    void remove() {
        if (front == -1 || front > rear) {
            cout << "Queue Underflow! Cannot delete." << endl;
            return;
        }
        cout << "Deleted " << queue[front] << " from the queue." << endl;
        front++;
    }

    // Search operation
    bool search(int val) {
        if (front == -1) return false;
        for (int i = front; i <= rear; i++) {
            if (queue[i] == val)
                return true;
        }
        return false;
    }

    // Display current queue elements
    void display() {
        if (front == -1 || front > rear) {
            cout << "Queue is empty." << endl;
            return;
        }
        cout << "Queue elements: ";
        for (int i = front; i <= rear; i++) {
            cout << queue[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    cout << "==================" << endl;
    cout << "      Queue       " << endl;
    cout << "==================" << endl << endl;

    cout << "Introduction to Queue:" << endl;
    cout << "---------------------" << endl;
    cout << "Queue is a linear data structure which follows the FIFO (First In First Out) principle." << endl;
    cout << "Insertion happens at the rear end, and deletion happens at the front end." << endl << endl;

    cout << "Simple Queue Operations:" << endl;
    cout << "------------------------" << endl;

    SimpleQueue q(5);

    cout << "Inserting elements:" << endl;
    q.insert(10);
    q.insert(20);
    q.insert(30);
    q.display();

    cout << "\nDeleting elements:" << endl;
    q.remove();
    q.display();

    cout << "\nSearching elements:" << endl;
    int searchVal = 20;
    cout << "Searching for " << searchVal << ": ";
    if (q.search(searchVal))
        cout << "Found in queue." << endl;
    else
        cout << "Not found in queue." << endl;

    searchVal = 40;
    cout << "Searching for " << searchVal << ": ";
    if (q.search(searchVal))
        cout << "Found in queue." << endl;
    else
        cout << "Not found in queue." << endl;

    return 0;
}
```


***

### Expected Console Output (README style)

```
==================
      Queue       
==================

Introduction to Queue:
---------------------
Queue is a linear data structure which follows the FIFO (First In First Out) principle.
Insertion happens at the rear end, and deletion happens at the front end.

Simple Queue Operations:
------------------------
Inserting elements:
Inserted 10 into the queue.
Inserted 20 into the queue.
Inserted 30 into the queue.
Queue elements: 10 20 30 

Deleting elements:
Deleted 10 from the queue.
Queue elements: 20 30 

Searching elements:
Searching for 20: Found in queue.
Searching for 40: Not found in queue.
```


***
