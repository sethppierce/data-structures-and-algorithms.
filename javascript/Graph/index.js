class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, []);
    }
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
      return 'both nodes must be in graph';
    }
    this.nodes.get(node1).push({ node: node2, weight });
    this.nodes.get(node2).push({ node: node1, weight });
  }

  getNodes() {
    return [...this.nodes.keys()];
  }

  getNeighbors(node) {
    if (!this.nodes.has(node)) {
      throw new Error(`${node} is not in the graph.`);
    }
    return this.nodes.get(node);
  }

  size() {
    return this.nodes.size;
  }

  breadthFirst(node) {
    let visited = new Set();
    let queue = [node];
    let result = [];
    if (!this.nodes.has(node)) return null;
    while (queue.length) {
      let current = queue.shift();
      if (!visited.has(current)) {
        visited.add(current);
        result.push(current);
        let neighbors = this.getNeighbors(current);
        for (let neighbor of neighbors) {
          queue.push(neighbor.node);
        }
      }
    }

    return result;
  }

  depthFirst(node) {
    let visited = new Set();
    let stack = [node];
    let result = [];
    if (!this.nodes.has(node)) return null;
    while (stack.length) {
      let current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        result.push(current);
        let neighbors = this.getNeighbors(current);
        for (let neighbor of neighbors) {
          stack.push(neighbor.node);
        }
      }
    }
    return result;
  }
}

function businessTrip(graph, cities) {
  let cost = 0;
  let currentCity = cities[0];
  for (let i = 1; i < cities.length; i++) {
    let destination = cities[i];
    let neighbors = graph.getNeighbors(currentCity);
    let flight = neighbors.find(n => n.node === destination);
    if (flight === undefined) {
      return null;
    } else {
      cost += flight.weight;
    }
    currentCity = destination;
  }
  return cost;
}

module.exports = { Graph, businessTrip };
