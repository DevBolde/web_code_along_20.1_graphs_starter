class node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  const values = []
  const queue = []

  // your BFT code here
  // Enqueue: queue.push(value)
  // Dequeue: queue.shift()
  queue.push(root)
  while(queue.length){
    const data = queue.shift()
    values.push(data.value)
    if(data.left){
      queue.push(data.left)
    }
    if(data.right){
      queue.push(data.right)
    }
  }
  return values
}

// Implement a breadth-first traversal (BFT) for a binary tree.
// Inputs:
//   root: node (root of the binary tree)

// Output: list of values in the order of a breadth-first traversal

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)

console.log(traverse(head)) // 6, 3, 9
/*
      6
    / \
    3  9

Plan:
1: initialize an empty value list and empty queue
  values = [6, 3, 9]
  queue = [ ]

2: enqueue the root inside the queue

3: while we have values inside the queue start serving these values
by serving we mean 2 steps
 a) dequeue the queue and push the current node to the values list
  b) enqueue the children (left and right) to the queue

  4: once the queue is empty return the values list
*/