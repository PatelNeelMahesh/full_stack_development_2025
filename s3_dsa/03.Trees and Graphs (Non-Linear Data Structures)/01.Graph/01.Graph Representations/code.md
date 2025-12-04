
```cpp
#include <iostream>
#include <list>
using namespace std;

// Graph using Adjacency Matrix
class GraphMatrix {
private:
    int V;                // Number of vertices
    int **adjMatrix;       // Pointer to 2D array for adjacency matrix
public:
    GraphMatrix(int vertices) {
        V = vertices;
        adjMatrix = new int*[V];
        for (int i = 0; i < V; i++) {
            adjMatrix[i] = new int[V];
        }
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                adjMatrix[i][j] = 0;
            }
        }
    }
    ~GraphMatrix() {
        for (int i = 0; i < V; i++) {
            delete[] adjMatrix[i];
        }
        delete[] adjMatrix;
    }
    void addEdge(int u, int v) {
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1;
    }
    void printMatrix() {
        cout << "Adjacency Matrix:\n  ";
        for (int i = 0; i < V; i++)
            cout << i << " ";
        cout << endl;
        for (int i = 0; i < V; i++) {
            cout << i << " ";
            for (int j = 0; j < V; j++) {
                cout << adjMatrix[i][j] << " ";
            }
            cout << endl;
        }
    }
};

// Graph using Adjacency List
class GraphList {
private:
    int V;                // Number of vertices
    list<int> *adj;       // Pointer to array of adjacency lists
public:
    GraphList(int vertices) {
        V = vertices;
        adj = new list<int>[V];
    }
    ~GraphList() {
        delete[] adj;
    }
    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    void printGraph() {
        cout << "Adjacency List:\n";
        for (int i = 0; i < V; i++) {
            cout << "Vertex " << i << ":";
            for (auto v : adj[i]) {
                cout << " -> " << v;
            }
            cout << endl;
        }
    }
};

int main() {
    int vertices = 4;

    // Using Adjacency Matrix
    GraphMatrix gm(vertices);
    gm.addEdge(0, 1);
    gm.addEdge(0, 2);
    gm.addEdge(1, 2);
    gm.addEdge(2, 3);
    cout << "Graph represented by Adjacency Matrix:\n";
    gm.printMatrix();
    cout << endl;

    // Using Adjacency List
    GraphList gl(vertices);
    gl.addEdge(0, 1);
    gl.addEdge(0, 2);
    gl.addEdge(1, 2);
    gl.addEdge(2, 3);
    cout << "Graph represented by Adjacency List:\n";
    gl.printGraph();

    return 0;
}
```

