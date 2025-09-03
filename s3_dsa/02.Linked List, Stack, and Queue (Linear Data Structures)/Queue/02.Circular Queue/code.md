
```cpp
#include <iostream>
using namespace std;

class CircularQueue {
private:
    int* arr;
    int capacity;
    int front;
    int rear;
    int count;

public:
    CircularQueue(int size) {
        capacity = size;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        count = 0;
    }

    ~CircularQueue() {
        delete[] arr;
    }

    // Check if queue is full
    bool isFull() {
        return count == capacity;
    }

    // Check if queue is empty
    bool isEmpty() {
        return count == 0;
    }

    // Insert (Enqueue)
    void insert(int val) {
        if (isFull()) {
            cout << "Queue Overflow! Cannot insert " << val << endl;
            return;
        }
        rear = (rear + 1) % capacity;
        arr[rear] = val;
        count++;
        cout << "Inserted " << val << " into the queue." << endl;
    }

    // Delete (Dequeue)
    void remove() {
        if (isEmpty()) {
            cout << "Queue Underflow! Cannot delete." << endl;
            return;
        }
        cout << "Deleted " << arr[front] << " from the queue." << endl;
        front = (front + 1) % capacity;
        count--;
    }

    // Search for an element
    bool search(int val) {
        if (isEmpty()) return false;
        int idx = front;
        for (int i = 0; i < count; i++) {
            if (arr[idx] == val)
                return true;
            idx = (idx + 1) % capacity;
        }
        return false;
    }

    // Display queue elements
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty." << endl;
            return;
        }
        cout << "Queue elements: ";
        int idx = front;
        for (int i = 0; i < count; i++) {
            cout << arr[idx] << " ";
            idx = (idx + 1) % capacity;
        }
        cout << endl;
    }
};

int main() {
    cout << "=======================" << endl;
    cout << "    Circular Queue     " << endl;
    cout << "=======================" << endl << endl;

    CircularQueue cq(5);

    cout << "Insert Operations:" << endl;
    cq.insert(10);
    cq.insert(20);
    cq.insert(30);
    cq.insert(40);
    cq.insert(50);
    cq.insert(60); // Should show overflow
    cq.display();

    cout << "\nDelete Operations:" << endl;
    cq.remove();
    cq.remove();
    cq.display();

    cout << "\nSearch Operations:" << endl;
    int val = 30;
    cout << "Searching for " << val << ": ";
    if (cq.search(val))
        cout << "Found in queue." << endl;
    else
        cout << "Not found in queue." << endl;

    val = 10;
    cout << "Searching for " << val << ": ";
    if (cq.search(val))
        cout << "Found in queue." << endl;
    else
        cout << "Not found in queue." << endl;

    return 0;
}
```


***

### Expected Console Output (README Style)

```
=======================
    Circular Queue     
=======================

Insert Operations:
Inserted 10 into the queue.
Inserted 20 into the queue.
Inserted 30 into the queue.
Inserted 40 into the queue.
Inserted 50 into the queue.
Queue Overflow! Cannot insert 60
Queue elements: 10 20 30 40 50 

Delete Operations:
Deleted 10 from the queue.
Deleted 20 from the queue.
Queue elements: 30 40 50 

Search Operations:
Searching for 30: Found in queue.
Searching for 10: Not found in queue.
```


***
