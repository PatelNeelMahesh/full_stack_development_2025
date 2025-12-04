```cpp
#include <iostream>
#include <list>
using namespace std;

class Graph {
private:
    int V;                  // Number of vertices
    list<int> *adj;         // Pointer to array of adjacency lists

    // Utility function for DFS traversal
    void DFSUtil(int v, bool visited[]) {
        visited[v] = true;           // Mark current vertex as visited
        cout << v << " ";            // Process the current vertex (print it)

        // Recursively visit all unvisited adjacent vertices
        for (int neighbor : adj[v]) {
            if (!visited[neighbor]) {
                DFSUtil(neighbor, visited);
            }
        }
    }

public:
    // Constructor to initialize graph with V vertices and adjacency list
    Graph(int vertices) {
        V = vertices;
        adj = new list<int>[V];      // Create adjacency lists for all vertices
    }

    // Destructor to clean up dynamically allocated memory
    ~Graph() {
        delete[] adj;
    }

    // Adds a directed edge from u to v
    void addEdge(int u, int v) {
        adj[u].push_back(v);
    }

    // Public function to perform DFS traversal starting from startVertex
    void DFS(int startVertex) {
        bool *visited = new bool[V];         // Create visited array
        for (int i = 0; i < V; i++) {
            visited[i] = false;              // Initialize all as unvisited
        }

        DFSUtil(startVertex, visited);       // Call recursive helper to start DFS

        delete[] visited;                    // Clean up visited array memory
    }

    // Public function to perform BFS traversal starting from startVertex
    void BFS(int startVertex) {
        bool *visited = new bool[V];         // Create visited array
        for (int i = 0; i < V; i++) {
            visited[i] = false;              // Initialize all as unvisited
        }

        list<int> queue;                     // Queue for BFS
        visited[startVertex] = true;         // Mark start vertex as visited
        queue.push_back(startVertex);        // Enqueue starting vertex

        while (!queue.empty()) {
            int current = queue.front();    // Dequeue front vertex
            cout << current << " ";         // Process current vertex
            queue.pop_front();

            // Enqueue all unvisited adjacent vertices
            for (int neighbor : adj[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;  // Mark neighbor visited
                    queue.push_back(neighbor); // Enqueue neighbor
                }
            }
        }

        delete[] visited;                   // Clean up visited array memory
    }
};
```