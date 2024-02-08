function traverse(graph, root) {
    // Implement
    
}

// Implement a breadth-first traversal (BFT) for a graph.
// Inputs:
//   graph: object (adjacency list representation)
//   root: int (starting point for the traverse)

// Output: list of values in the order of a breadth-first traversal

// Representing a graph as a JavaScript object provides a nice simplified version of an adjacency list implementation. The keys of the object/dictionary are vertices, and the key-value pairs map each vertex to a list of integers representing its neighbors.

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4
/*
      6
    / \
    3  9

Plan:
1: initialize an empty value list and empty queue
  values = [4, 2, 1, 5, 3 ]
  queue = [ ]
    visited = {4, 2, 1, 5, 3  }
2: enqueue the input root inside the queue and mark it visited

3: while we have values inside the queue start serving these values
by serving we mean 2 steps
 a) dequeue the queue and push the current node to the values list
  b) enqueue the neighbors to the queue (if its not already marked visited mark as visited and add it to queue)

  4: once the queue is empty return the values list
*/