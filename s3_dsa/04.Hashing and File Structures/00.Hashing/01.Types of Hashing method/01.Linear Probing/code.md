
```cpp
#include <iostream>
using namespace std;

class HashTable {
private:
    int* table;
    int size;
    int empty_value;
    int deleted_value;

public:
    HashTable(int m) {
        size = m;
        empty_value = -1;   // Indicates empty slot
        deleted_value = -2; // Indicates deleted slot
        table = new int[size];
        for (int i = 0; i < size; i++) {
            table[i] = empty_value;
        }
    }

    ~HashTable() {
        delete[] table;
    }

    int hashFunction(int key) {
        return key % size;
    }

    void insert(int key) {
        int index = hashFunction(key);
        int original_index = index;
        while (table[index] != empty_value && table[index] != deleted_value && table[index] != key) {
            index = (index + 1) % size;
            if (index == original_index) {
                cout << "Hash table is full; cannot insert key " << key << endl;
                return;
            }
        }
        table[index] = key;
    }

    bool search(int key) {
        int index = hashFunction(key);
        int original_index = index;
        while (table[index] != empty_value) {
            if (table[index] == key)
                return true;
            index = (index + 1) % size;
            if (index == original_index)
                break;
        }
        return false;
    }

    void remove(int key) {
        int index = hashFunction(key);
        int original_index = index;
        while (table[index] != empty_value) {
            if (table[index] == key) {
                table[index] = deleted_value;
                return;
            }
            index = (index + 1) % size;
            if (index == original_index)
                break;
        }
        cout << "Key " << key << " not found; cannot remove." << endl;
    }

    void display() {
        cout << "Hash Table with Linear Probing:" << endl;
        for (int i = 0; i < size; i++) {
            if (table[i] == empty_value)
                cout << "Index " << i << ": Empty" << endl;
            else if (table[i] == deleted_value)
                cout << "Index " << i << ": Deleted" << endl;
            else
                cout << "Index " << i << ": " << table[i] << endl;
        }
    }
};

int main() {
    HashTable ht(10);

    ht.insert(23);
    ht.insert(43);
    ht.insert(33);
    ht.insert(53);
    ht.insert(13);
    ht.insert(27);

    ht.display();

    cout << "Search 43: " << (ht.search(43) ? "Found" : "Not Found") << endl;
    cout << "Search 50: " << (ht.search(50) ? "Found" : "Not Found") << endl;

    ht.remove(33);
    ht.remove(50);  // Key not found

    ht.display();

    return 0;
}
