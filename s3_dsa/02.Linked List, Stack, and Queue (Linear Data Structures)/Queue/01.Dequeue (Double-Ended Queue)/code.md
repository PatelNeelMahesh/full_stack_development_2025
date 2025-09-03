
```cpp
#include <iostream>
using namespace std;

class Dequeue {
private:
    int* arr;
    int front;
    int rear;
    int capacity;
    int size;

public:
    Dequeue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = -1;
        rear = 0;
        size = 0;
    }

    ~Dequeue() {
        delete[] arr;
    }

    bool isFull() {
        return size == capacity;
    }

    bool isEmpty() {
        return size == 0;
    }

    // Insert element at front
    void insertFront(int val) {
        if (isFull()) {
            cout << "Dequeue Overflow! Cannot insert " << val << endl;
            return;
        }
        if (front == -1) { // Empty deque
            front = 0;
            rear = 0;
        } else if (front == 0) {
            front = capacity - 1;
        } else {
            front = front - 1;
        }
        arr[front] = val;
        size++;
        cout << "Inserted " << val << " at front." << endl;
    }

    // Insert element at rear
    void insertRear(int val) {
        if (isFull()) {
            cout << "Dequeue Overflow! Cannot insert " << val << endl;
            return;
        }
        if (front == -1) { // Empty deque
            front = 0;
            rear = 0;
        } else if (rear == capacity - 1) {
            rear = 0;
        } else {
            rear = rear + 1;
        }
        arr[rear] = val;
        size++;
        cout << "Inserted " << val << " at rear." << endl;
    }

    // Delete element from front
    void deleteFront() {
        if (isEmpty()) {
            cout << "Dequeue Underflow! Cannot delete from front." << endl;
            return;
        }
        cout << "Deleted " << arr[front] << " from front." << endl;
        if (front == rear) { // Only 1 element
            front = -1;
            rear = -1;
        } else if (front == capacity - 1) {
            front = 0;
        } else {
            front = front + 1;
        }
        size--;
    }

    // Delete element from rear
    void deleteRear() {
        if (isEmpty()) {
            cout << "Dequeue Underflow! Cannot delete from rear." << endl;
            return;
        }
        cout << "Deleted " << arr[rear] << " from rear." << endl;
        if (front == rear) { // Only 1 element
            front = -1;
            rear = -1;
        } else if (rear == 0) {
            rear = capacity - 1;
        } else {
            rear = rear - 1;
        }
        size--;
    }

    // Search for element in dequeue
    bool search(int val) {
        if (isEmpty()) return false;
        int i = front;
        for (int count = 0; count < size; count++) {
            if (arr[i] == val) return true;
            i = (i + 1) % capacity;
        }
        return false;
    }

    // Display all elements
    void display() {
        if (isEmpty()) {
            cout << "Dequeue is empty." << endl;
            return;
        }
        cout << "Dequeue elements: ";
        int i = front;
        for (int count = 0; count < size; count++) {
            cout << arr[i] << " ";
            i = (i + 1) % capacity;
        }
        cout << endl;
    }
};

int main() {
    cout << "======================" << endl;
    cout << "     Double-Ended Queue " << endl;
    cout << "======================" << endl << endl;

    Dequeue dq(5);

    cout << "Insertion Operations:" << endl;
    dq.insertRear(10);
    dq.insertRear(20);
    dq.insertFront(5);
    dq.display();

    cout << "\nDelete Operations:" << endl;
    dq.deleteFront();
    dq.display();
    dq.deleteRear();
    dq.display();

    cout << "\nSearching in Dequeue:" << endl;
    int searchVal = 10;
    cout << "Searching for " << searchVal << ": ";
    if (dq.search(searchVal))
        cout << "Found in dequeue." << endl;
    else
        cout << "Not found in dequeue." << endl;

    searchVal = 50;
    cout << "Searching for " << searchVal << ": ";
    if (dq.search(searchVal))
        cout << "Found in dequeue." << endl;
    else
        cout << "Not found in dequeue." << endl;

    return 0;
}
```


***

### Expected Console Output (README style)

```
======================
     Double-Ended Queue 
======================

Insertion Operations:
Inserted 10 at rear.
Inserted 20 at rear.
Inserted 5 at front.
Dequeue elements: 5 10 20 

Delete Operations:
Deleted 5 from front.
Dequeue elements: 10 20 
Deleted 20 from rear.
Dequeue elements: 10 

Searching in Dequeue:
Searching for 10: Found in dequeue.
Searching for 50: Not found in dequeue.
```


***
