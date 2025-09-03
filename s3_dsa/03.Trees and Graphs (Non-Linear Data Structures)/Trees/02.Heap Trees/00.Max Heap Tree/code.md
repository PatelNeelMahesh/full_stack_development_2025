```cpp
#include <iostream>
using namespace std;

class MaxHeap {
private:
    int* heapArr;
    int capacity;
    int size;

    // Heapify function to maintain max heap property from index i downwards
    void maxHeapify(int i) {
        int largest = i;              // Initialize largest as root
        int left = 2 * i + 1;        // left child index
        int right = 2 * i + 2;       // right child index

        if (left < size && heapArr[left] > heapArr[largest])
            largest = left;

        if (right < size && heapArr[right] > heapArr[largest])
            largest = right;

        if (largest != i) {
            swap(heapArr[i], heapArr[largest]);
            maxHeapify(largest);
        }
    }

    // Resize heap array dynamically when needed
    void resize() {
        int newCapacity = capacity * 2;
        int* newArr = new int[newCapacity];
        for (int i = 0; i < size; i++) {
            newArr[i] = heapArr[i];
        }
        delete[] heapArr;
        heapArr = newArr;
        capacity = newCapacity;
    }

public:
    MaxHeap(int cap = 10) : capacity(cap), size(0) {
        heapArr = new int[capacity];
    }

    ~MaxHeap() {
        delete[] heapArr;
    }

    // Insert a new element while maintaining max heap property
    void insert(int key) {
        if (size == capacity) {
            resize();
        }

        // Insert element at the end
        int i = size;
        heapArr[size++] = key;

        // Bubble the new element up to restore heap property
        while (i != 0 && heapArr[(i - 1)/2] < heapArr[i]) {
            swap(heapArr[i], heapArr[(i - 1)/2]);
            i = (i - 1) / 2;
        }
    }

    // Extract and return the maximum element from the heap
    int extractMax() {
        if (size <= 0)
            return INT_MIN;
        if (size == 1) {
            return heapArr[--size];
        }

        int root = heapArr[^0];
        heapArr[^0] = heapArr[size - 1];
        size--;
        maxHeapify(0);

        return root;
    }

    // Build max heap from arbitrary array
    void buildMaxHeap(int arr[], int n) {
        if (capacity < n) {
            delete[] heapArr;
            capacity = n;
            heapArr = new int[capacity];
        }

        for (int i = 0; i < n; i++) {
            heapArr[i] = arr[i];
        }
        size = n;

        int startIdx = (n / 2) - 1;
        for (int i = startIdx; i >= 0; i--) {
            maxHeapify(i);
        }
    }

    // Heap sort: sorts the array in ascending order using max heap
    void heapSort(int arr[], int n) {
        buildMaxHeap(arr, n);

        for (int i = n - 1; i > 0; i--) {
            swap(heapArr[^0], heapArr[i]);
            size--;
            maxHeapify(0);
        }

        // Copy sorted array back to original array
        for (int i = 0; i < n; i++) {
            arr[i] = heapArr[i];
        }
        size = n;  // Restore heap size
    }

    // Display the current state of heap array
    void displayHeap() {
        cout << "Heap array: ";
        for (int i = 0; i < size; i++) {
            cout << heapArr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    cout << "==========================" << endl;
    cout << "        Max Heap           " << endl;
    cout << "==========================" << endl << endl;

    MaxHeap heap;

    int arr[] = {10, 15, 20, 17, 25};
    int n = sizeof(arr)/sizeof(arr[^0]);

    cout << "Building max heap from array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    heap.buildMaxHeap(arr, n);
    cout << "Heap after buildMaxHeap:" << endl;
    heap.displayHeap();

    cout << "\nInserting 30 into heap." << endl;
    heap.insert(30);
    heap.displayHeap();

    cout << "\nExtracting max element: ";
    int maxVal = heap.extractMax();
    cout << maxVal << endl;
    heap.displayHeap();

    cout << "\nHeap sort on array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    heap.heapSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;

    return 0;
}
```


***

### Expected Console Output

```
==========================
        Max Heap           
==========================

Building max heap from array: 10 15 20 17 25 
Heap after buildMaxHeap:
Heap array: 25 17 20 10 15 

Inserting 30 into heap.
Heap array: 30 25 20 10 15 17 

Extracting max element: 30
Heap array: 25 17 20 10 15 

Heap sort on array: 10 15 20 17 25 
Sorted array: 10 15 17 20 25 
```