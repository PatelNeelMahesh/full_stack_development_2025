# Indexing and Hashing in Files:
## Why Use Indexing?

When dealing with large files, searching for a specific record sequentially can be slow and inefficient, especially as data grows. Indexing creates a **separate, smaller file (index)** storing keys and pointers to corresponding records in the main data file, allowing the program to jump directly to the location of the record when searched. This reduces search time from linear O(n) to logarithmic O(log n) or better, depending on the index structure.

***

#### Step 1: Define Data Structures

In C++, define the main record and an index entry:

```cpp
struct Student {
    int id;
    char name[30];
    int age;
};

struct IndexEntry {
    int key;            // Student ID
    std::streampos pos; // Position in data file
};
```

- `Student` holds the actual data.
- `IndexEntry` holds the key and where the data is located in the file.

***

#### Step 2: Writing Data and Building Index

Each time we write a `Student` record to the data file, we record its position (offset) and key in an index vector. After writing all records, we sort the index by key and write it to a separate index file.

```cpp
void writeIndexedFile(const char* dataFilename, const char* indexFilename) {
    std::ofstream dataFile(dataFilename, std::ios::binary);
    std::ofstream indexFile(indexFilename, std::ios::binary);

    std::vector<IndexEntry> index;
    Student students[] = {
        {101, "Alice", 20},
        {102, "Bob", 21},
        {103, "Charlie", 22}
    };

    for (auto& s : students) {
        std::streampos pos = dataFile.tellp(); // current valid position
        dataFile.write((char*)&s, sizeof(s));
        index.push_back({s.id, pos});
    }

    std::sort(index.begin(), index.end(), [](const IndexEntry& a, const IndexEntry& b) {
        return a.key < b.key;
    });

    for (auto& entry : index) {
        indexFile.write((char*)&entry, sizeof(entry));
    }

    dataFile.close();
    indexFile.close();
}
```

- Write records.
- Keep track of offsets.
- Sort and store index separately.

***

#### Step 3: Searching a Record Using the Index

To search a record by key:

1. Load the index file into memory.
2. Use **binary search** on the index to find the key.
3. Use the pointer in the index to jump directly to the record in the data file.
4. Read and return the record.
```cpp
void searchRecord(const char* dataFilename, const char* indexFilename, int searchId) {
    std::ifstream indexFile(indexFilename, std::ios::binary);
    std::vector<IndexEntry> index;
    IndexEntry entry;

    while (indexFile.read((char*)&entry, sizeof(entry))) {
        index.push_back(entry);
    }
    indexFile.close();

    auto it = std::lower_bound(index.begin(), index.end(), searchId, [](const IndexEntry& e, int val) {
        return e.key < val;
    });

    if (it != index.end() && it->key == searchId) {
        std::ifstream dataFile(dataFilename, std::ios::binary);
        Student s;
        dataFile.seekg(it->pos);
        dataFile.read((char*)&s, sizeof(s));
        std::cout << "ID: " << s.id << ", Name: " << s.name << ", Age: " << s.age << std::endl;
        dataFile.close();
    } else {
        std::cout << "Record not found." << std::endl;
    }
}
```

This efficiently locates the record by key, reducing disk I/O.

***
#### What is Hashing?

Hashing is a technique used to **directly map a data record's key to its storage location** using a **hash function**. This enables **near-instant access** to data without scanning the entire file or traversing an index, providing average time complexity $O(1)$ for lookups.

Hashing is especially powerful for exact-match queries, such as retrieving a record using a unique identifier.

***

### Step 1: Designing the Hash Table Class

We use an array of buckets to store keys. Each bucket handles collisions by maintaining a linked list (chaining). The **hash function** determines which bucket a key should go to.

***

```cpp
#include <iostream>
#include <list>
using namespace std;

class HashTable {
    int buckets;            // Number of buckets in hash table
    list<int>* table;       // Pointer to array of lists (buckets)

    // Hash function to compute bucket index for a key
    int hashFunction(int key) {
        return key % buckets;
    }

public:
    // Constructor: initializes hash table with given bucket count
    HashTable(int b) : buckets(b) {
        table = new list<int>[buckets];
    }
```


##### Why this method?

- The constructor sets the number of buckets and allocates dynamic memory for them.
- `hashFunction` maps keys uniformly to buckets using modulo operation.
- This design supports separate chaining to resolve collisions by using linked lists for each bucket.

***

### Step 2: Inserting a Key

To insert a key:

- Calculate bucket index with the hash function.
- Append the key to the linked list at that bucket.

***

```cpp
    // Insert key into hash table
    void insert(int key) {
        int idx = hashFunction(key);
        table[idx].push_back(key);  // Add to bucket list
    }
```


##### Why this method?

- Directly places keys into their corresponding bucket.
- Uses chaining to handle collisions gracefully.
- Insertion is efficient: only calculating hash and inserting into a list.

***

### Step 3: Searching for a Key

To search:

- Use hash function to locate the bucket.
- Traverse the bucket list to find the key.

***

```cpp
    // Search for key in hash table, return true if found
    bool search(int key) {
        int idx = hashFunction(key);
        for (int k : table[idx]) {
            if (k == key)
                return true;
        }
        return false;
    }
```


##### Why this method?

- Focuses search only on one bucket reducing complexity.
- Uses linear scan within the bucket list which is usually short if hash function is good.
- Returns efficiently once found or after checking bucket.

***

### Step 4: Removing a Key

To remove a key:

- Find the bucket using hash function.
- Remove the key from the linked list.

***

```cpp
    // Remove key from hash table if exists
    void remove(int key) {
        int idx = hashFunction(key);
        table[idx].remove(key);
    }
```


##### Why this method?

- Again narrows the operation to a specific bucket.
- Uses built-in list removal to simplify deletion.
- Maintains the integrity of hash table structure.

***

### Step 5: Displaying the Hash Table Contents

To visualize the current state of the hash table:

***

```cpp
    // Display all buckets and their keys
    void display() {
        for (int i = 0; i < buckets; i++) {
            cout << "Bucket " << i << ": ";
            for (int key : table[i]) {
                cout << key << " -> ";
            }
            cout << "nullptr\n";
        }
    }
};
```


##### Why this method?

- Helps debug and understand distribution of keys.
- Shows chains for buckets with collisions.

***

### Complete Usage Example in `main()`


***

```cpp
int main() {
    HashTable ht(5);  // Create a hash table with 5 buckets

    ht.insert(15);
    ht.insert(11);
    ht.insert(27);
    ht.insert(8);
    ht.insert(12);

    cout << "Initial Hash Table:" << endl;
    ht.display();

    cout << "Searching for 12: " << (ht.search(12) ? "Found" : "Not Found") << endl;

    cout << "Removing 12" << endl;
    ht.remove(12);

    cout << "Hash Table after removal:" << endl;
    ht.display();

    return 0;
}
```


***

### Why this entire approach?

- Demonstrates basic hash table functionality clearly.
- Modular methods isolate concerns: construction, insertion, searching, deletion.
- Uses separate chaining to ensure collision handling.
- Easy to extend for more complex data types and hashing strategies.

***
### Visual Representation of Hashing with Separate Chaining (Improved)

```
Hash Table with 5 Buckets (Indexes 0 to 4)

+---------+-------------------------------+
| Bucket 0| 15 → nullptr                  |
+---------+-------------------------------+
| Bucket 1| 11 → nullptr                  |
+---------+-------------------------------+
| Bucket 2| 27 → 12 → nullptr             |
+---------+-------------------------------+
| Bucket 3| 8 → nullptr                   |
+---------+-------------------------------+
| Bucket 4| (empty)                      |
+---------+-------------------------------+

Hash Function: hash(key) = key % 5

Insertions:
- 15 hashes to bucket 0 (15 % 5 = 0)
- 11 hashes to bucket 1 (11 % 5 = 1)
- 27 hashes to bucket 2 (27 % 5 = 2)
- 8  hashes to bucket 3 (8  % 5 = 3)
- 12 hashes to bucket 2 (12 % 5 = 2), causes collision, added to linked list at bucket 2

Search Operation Example:
- To find key 12:
   - Compute hash: 12 % 5 = 2
   - Access bucket 2 linked list: traverse nodes [27 → 12]
   - Found key 12, read corresponding record

Deletion Operation Example:
- To delete key 12:
   - Locate bucket 2
   - Remove key 12 node from linked list
   - Bucket 2 now contains only key 27 -> nullptr
```


***

#### Summary

- Indexing: Uses an auxiliary index for fast lookups with sorted keys. Supports range queries.
- Hashing: Uses hash functions for instant address calculation. Fast but unsuitable for range queries.
- Both reduce search time and improve efficiency vs sequential searching.
