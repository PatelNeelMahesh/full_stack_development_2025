```cpp
#include <iostream>
#include <fstream>
#include <cstring>

struct Student {
    int id;
    char name[^20];
    int age;
};

void writeSequentialFile(const char* filename) {
    std::ofstream outFile(filename, std::ios::binary);
    Student students[] = {
        {101, "Alice", 20},
        {102, "Bob", 21},
        {103, "Charlie", 22}
    };
    for (int i = 0; i < 3; ++i) {
        outFile.write(reinterpret_cast<char*>(&students[i]), sizeof(Student));
    }
    outFile.close();
}

void readSequentialFile(const char* filename) {
    std::ifstream inFile(filename, std::ios::binary);
    Student s;
    while (inFile.read(reinterpret_cast<char*>(&s), sizeof(Student))) {
        std::cout << "ID: " << s.id << ", Name: " << s.name << ", Age: " << s.age << std::endl;
    }
    inFile.close();
}

int main() {
    const char* filename = "students.dat";
    writeSequentialFile(filename);
    std::cout << "Student File Content:" << std::endl;
    readSequentialFile(filename);
    return 0;
}
```
