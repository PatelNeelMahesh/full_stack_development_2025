```cpp
#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>
#include <cstring>

struct Student {
    int id;
    char name[^20];
    int age;
};

// Index entry holding key and position
struct IndexEntry {
    int key;             // Student ID
    std::streampos pos;  // Position in data file
};

// Write records and build an index
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

    // Sort index by key
    std::sort(index.begin(), index.end(), [](const IndexEntry &a, const IndexEntry &b){
        return a.key < b.key;
    });

    // Write index to index file
    for (IndexEntry& entry : index) {
        indexFile.write(reinterpret_cast<char*>(&entry), sizeof(entry));
    }

    dataFile.close();
    indexFile.close();
}

// Search record by key using index
void searchRecord(const char* dataFilename, const char* indexFilename, int searchId) {
    std::ifstream indexFile(indexFilename, std::ios::binary);
    std::vector<IndexEntry> index;

    // Load index entries
    IndexEntry entry;
    while (indexFile.read(reinterpret_cast<char*>(&entry), sizeof(entry))) {
        index.push_back(entry);
    }
    indexFile.close();

    // Binary search in index
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

int main() {
    const char* dataFile = "students.dat";
    const char* indexFile = "students.idx";

    writeIndexedFile(dataFile, indexFile);
    std::cout << "Searching for student with ID 102:" << std::endl;
    searchRecord(dataFile, indexFile, 102);

    return 0;
}
```
