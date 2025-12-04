```cpp
#include <iostream>
#include <fstream>
#include <cstring>

struct Record {
    int rrn;             // Relative Record Number
    char data[^50];       // Fixed-size data field
};

void initializeFile(const char* filename, int maxRecords) {
    std::ofstream file(filename, std::ios::binary);
    Record empty = {0, ""};

    for (int i = 1; i <= maxRecords; ++i) {
        empty.rrn = i;
        file.write(reinterpret_cast<char*>(&empty), sizeof(Record));
    }
    file.close();
}

void writeRecord(const char* filename, int rrn, const char* data) {
    std::fstream file(filename, std::ios::in | std::ios::out | std::ios::binary);
    if (!file) {
        std::cerr << "Failed to open file." << std::endl;
        return;
    }

    Record rec;
    rec.rrn = rrn;
    std::strncpy(rec.data, data, sizeof(rec.data) - 1);
    rec.data[sizeof(rec.data) - 1] = '\0';

    std::streampos pos = (rrn - 1) * sizeof(Record);
    file.seekp(pos);
    file.write(reinterpret_cast<char*>(&rec), sizeof(Record));
    file.close();
}

bool readRecord(const char* filename, int rrn, Record& rec) {
    std::ifstream file(filename, std::ios::binary);
    if (!file) return false;

    std::streampos pos = (rrn - 1) * sizeof(Record);
    file.seekg(pos);
    if (!file.read(reinterpret_cast<char*>(&rec), sizeof(Record))) {
        file.close();
        return false;
    }
    file.close();
    return true;
}

int main() {
    const char* filename = "relativefile.dat";
    int maxRecords = 5;

    initializeFile(filename, maxRecords);

    writeRecord(filename, 2, "Data at record 2");
    writeRecord(filename, 4, "Data at record 4");

    for (int rrn = 1; rrn <= maxRecords; ++rrn) {
        Record rec;
        bool found = readRecord(filename, rrn, rec);
        if (found && rec.data[^0] != '\0') {
            std::cout << "RRN " << rrn << ": " << rec.data << std::endl;
        } else {
            std::cout << "RRN " << rrn << ": <empty>" << std::endl;
        }
    }

    return 0;
}
```

