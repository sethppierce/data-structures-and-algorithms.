# Graphs

## Challenge
To create a Graph class in javascript represented as an adjacency list, and include methods for adding nodes and edges, getting nodes and neighbors, and determining the size of the graph.

## Approach & Efficiency

I approached the challenge by implementing a Graph class that uses a javascript Map to store the nodes and their corresponding edges, and an array to store the weights. The time and space complexity for this approach are O(1) for adding and retrieving nodes, O(n) for adding and retrieving edges, O(1) for size of graph.

## API

- `addNode(value)` : add a node to the graph and return its value
- `addEdge(node1, node2, weight)` : add an edge between two nodes, including an optional weight, and return nothing
- `getNodes()` : return all of the nodes in the graph
- `getNeighbors(node)` : return a collection of edges connected to the given node, including the weight of the connection
- `size()` : return the total number of nodes in the graph
- `breadthFirst()`: returns the nodes in the order they were visted.

### Whiteboards

#### breadthFirst

![uml](./CC-36.png)
