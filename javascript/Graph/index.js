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
}

module.exports = {Graph};
