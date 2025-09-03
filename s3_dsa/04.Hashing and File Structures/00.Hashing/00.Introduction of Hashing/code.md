
```cpp
#include <iostream>
using namespace std;

class HashTable {
private:
    int* table;
    int size;
    int empty_value;

public:
    HashTable(int m) {
        size = m;
        table = new int[size];
        empty_value = -1;  // Indicates empty slot
        for (int i = 0; i < size; i++) {
            table[i] = empty_value;
        }
    }

    ~HashTable() {
        delete[] table;
    }

    // Simple hash function
    int hashFunction(int key) {
        return key % size;
    }

    // Insert key into table; no collision resolution
    void insert(int key) {
        int index = hashFunction(key);
        if (table[index] == empty_value) {
            table[index] = key;
        } else {
            cout << "Collision occurred! Index " << index << " already occupied." << endl;
        }
    }

    // Search key in table; returns true if found
    bool search(int key) {
        int index = hashFunction(key);
        if (table[index] == key) {
            return true;
        }
        return false;
    }

    // Delete key from table
    void remove(int key) {
        int index = hashFunction(key);
        if (table[index] == key) {
            table[index] = empty_value;
        } else {
            cout << "Key not found at expected index." << endl;
        }
    }

    void display() {
        cout << "Hash Table:" << endl;
        for (int i = 0; i < size; i++) {
            if (table[i] != empty_value) {
                cout << "Index " << i << ": " << table[i] << endl;
            } else {
                cout << "Index " << i << ": " << "Empty" << endl;
            }
        }
    }
};

int main() {
    HashTable ht(10);

    ht.insert(23);
    ht.insert(43);  // Will cause collision with 23
    ht.insert(27);

    ht.display();

    cout << "Search 43: " << (ht.search(43) ? "Found" : "Not Found") << endl;
    cout << "Search 50: " << (ht.search(50) ? "Found" : "Not Found") << endl;

    ht.remove(23);
    ht.remove(50);  // Key not found

    ht.display();

    return 0;
}
