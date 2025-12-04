```cpp
#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>
#include <cstring>

// Structure for Student record
struct Student {
    int id;
    char name[^30];
    int age;
};

// Structure for Index Entry
struct IndexEntry {
    int key;             // Student ID
    std::streampos pos;  // Position in data file
};

// Function to write records and build an index file
void writeIndexedFile(const char* dataFilename, const char* indexFilename) {
    std::ofstream dataFile(dataFilename, std::ios::binary);
    std::ofstream indexFile(indexFilename, std::ios::binary);
    std::vector<IndexEntry> index;

    Student students[] = {
        {101, "Alice", 20},
        {102, "Bob", 21},
        {103, "Charlie", 22}
    };

    for (Student& s : students) {
        std::streampos pos = dataFile.tellp();
        dataFile.write(reinterpret_cast<char*>(&s), sizeof(s));
        index.push_back({s.id, pos});
    }

    std::sort(index.begin(), index.end(), [](const IndexEntry& a, const IndexEntry& b) {
        return a.key < b.key;
    });

    for (IndexEntry& entry : index) {
        indexFile.write(reinterpret_cast<char*>(&entry), sizeof(entry));
    }

    dataFile.close();
    indexFile.close();
}

// Function to search a record by key using the index file
void searchRecord(const char* dataFilename, const char* indexFilename, int searchId) {
    std::ifstream indexFile(indexFilename, std::ios::binary);
    std::vector<IndexEntry> index;
    IndexEntry entry;

    while (indexFile.read(reinterpret_cast<char*>(&entry), sizeof(entry))) {
        index.push_back(entry);
    }
    indexFile.close();

    auto it = std::lower_bound(index.begin(), index.end(), searchId,
        [](const IndexEntry& e, int val) {
            return e.key < val;
        });

    if (it != index.end() && it->key == searchId) {
        std::ifstream dataFile(dataFilename, std::ios::binary);
        Student s;
        dataFile.seekg(it->pos);
        dataFile.read(reinterpret_cast<char*>(&s), sizeof(s));
        std::cout << "Record found: ID=" << s.id << ", Name=" << s.name << ", Age=" << s.age << std::endl;
        dataFile.close();
    } else {
        std::cout << "Record with ID " << searchId << " not found." << std::endl;
    }
}

// Hash Table class using separate chaining
#include <list>
class HashTable {
    int buckets;
    std::list<int>* table;

    int hashFunction(int key) {
        return key % buckets;
    }

public:
    HashTable(int b) : buckets(b) {
        table = new std::list<int>[buckets];
    }

    ~HashTable() {
        delete[] table;
    }

    void insert(int key) {
        int idx = hashFunction(key);
        table[idx].push_back(key);
    }

    bool search(int key) {
        int idx = hashFunction(key);
        for (int k : table[idx]) {
            if (k == key) return true;
        }
        return false;
    }

    void remove(int key) {
        int idx = hashFunction(key);
        table[idx].remove(key);
    }

    void display() {
        for (int i = 0; i < buckets; i++) {
            std::cout << "Bucket " << i << ": ";
            for (int key : table[i]) {
                std::cout << key << " -> ";
            }
            std::cout << "nullptr\n";
        }
    }
};

int main() {
    // Indexed Sequential File Organization demo
    const char* dataFile = "students.dat";
    const char* indexFile = "students.idx";

    writeIndexedFile(dataFile, indexFile);
    std::cout << "Searching for student with ID 102:" << std::endl;
    searchRecord(dataFile, indexFile, 102);

    std::cout << "\nHash Table Demo:\n";
    HashTable ht(5);

    ht.insert(15);
    ht.insert(11);
    ht.insert(27);
    ht.insert(8);
    ht.insert(12);

    ht.display();

    std::cout << "Searching for 12: " << (ht.search(12) ? "Found" : "Not Found") << std::endl;
    std::cout << "Removing 12\n";
    ht.remove(12);
    ht.display();

    return 0;
}
```
