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

    int hash1(int key) {
        return key % size;
    }

    int hash2(int key) {
        return 1 + (key % (size - 1));
    }

    void insert(int key) {
        int index = hash1(key);
        int stepSize = hash2(key);
        int i = 0;

        while (i < size) {
            int newIndex = (index + i * stepSize) % size;
            if (table[newIndex] == empty_value || table[newIndex] == deleted_value) {
                table[newIndex] = key;
                return;
            } else if (table[newIndex] == key) {
                return;
            }
            i++;
        }
        cout << "Hash table is full; cannot insert key " << key << endl;
    }

    bool search(int key) {
        int index = hash1(key);
        int stepSize = hash2(key);
        int i = 0;

        while (i < size) {
            int newIndex = (index + i * stepSize) % size;
            if (table[newIndex] == empty_value) {
                return false;
            }
            if (table[newIndex] == key) {
                return true;
            }
            i++;
        }
        return false;
    }

    void remove(int key) {
        int index = hash1(key);
        int stepSize = hash2(key);
        int i = 0;

        while (i < size) {
            int newIndex = (index + i * stepSize) % size;
            if (table[newIndex] == empty_value) {
                break;
            }
            if (table[newIndex] == key) {
                table[newIndex] = deleted_value;
                return;
            }
            i++;
        }
        cout << "Key " << key << " not found; cannot remove." << endl;
    }

    void display() {
        cout << "Hash Table with Double Hashing:" << endl;
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
    HashTable ht(11);

    ht.insert(10);
    ht.insert(22);
    ht.insert(31);
    ht.insert(4);
    ht.insert(15);
    ht.insert(28);

    ht.display();

    cout << "Search 15: " << (ht.search(15) ? "Found" : "Not Found") << endl;
    cout << "Search 99: " << (ht.search(99) ? "Found" : "Not Found") << endl;

    ht.remove(22);
    ht.remove(99);

    ht.display();

    return 0;
}

