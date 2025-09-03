```cpp
#include <iostream>
#include <list>
using namespace std;

class HashTable {
private:
    int size;
    int numElements;
    list<int>* table;

    int hashFunction(int key) {
        return key % size;
    }

public:
    HashTable(int m) {
        size = m;
        numElements = 0;
        table = new list<int>[size];
    }

    ~HashTable() {
        delete[] table;
    }

    void insert(int key) {
        int index = hashFunction(key);
        table[index].push_back(key);
        numElements++;
    }

    bool search(int key) {
        int index = hashFunction(key);
        for (int elem : table[index]) {
            if (elem == key)
                return true;
        }
        return false;
    }

    void remove(int key) {
        int index = hashFunction(key);
        table[index].remove(key);
        numElements--;
    }

    double loadFactor() {
        return (double)numElements / size;
    }

    void display() {
        cout << "Hash Table with Separate Chaining:" << endl;
        for (int i = 0; i < size; i++) {
            cout << "Index " << i << ": ";
            for (int elem : table[i]) {
                cout << elem << " -> ";
            }
            cout << "NULL" << endl;
        }
        cout << "Load Factor: " << loadFactor() << endl;
    }
};

int main() {
    HashTable ht(5);

    ht.insert(12);
    ht.insert(25);
    ht.insert(35);
    ht.insert(20);
    ht.insert(30);
    ht.insert(45);

    ht.display();

    cout << "Search 25: " << (ht.search(25) ? "Found" : "Not Found") << endl;
    cout << "Search 50: " << (ht.search(50) ? "Found" : "Not Found") << endl;

    ht.remove(35);
    ht.remove(100);  // No effect if key not found

    ht.display();

    return 0;
}
```

