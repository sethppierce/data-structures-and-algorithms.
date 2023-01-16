const {Graph} = require('../index');


describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('addNode should add a node to the graph and return its value', () => {
    expect(graph.addNode('A')).toEqual('A');
  });

  test('addEdge should add an edge between two nodes and return nothing', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{node: 'B', weight: 5}]);
  });

  test('getNodes should return all of the nodes in the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
  });

  test('getNeighbors should return a collection of edges connected to the given node', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B', 5);
    graph.addEdge('B', 'C', 3);
    expect(graph.getNeighbors('A')).toEqual([{node: 'B', weight: 5}]);
  });

  test('getNeighbors should return the weight of the connection in the returned collection', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')[0].weight).toEqual(5);
  });

  test('size should return the total number of nodes in the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    expect(graph.size()).toEqual(3);
  });

  test('should handle a graph with only one node and edge', () => {
    graph.addNode('A');
    expect(graph.size()).toEqual(1);
  });

  test('should return an array of nodes in breadth-first order', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'C']);
  });

  test('should return the starting node if it is the only node in the graph', () => {
    graph.addNode('A');
    expect(graph.breadthFirst('A')).toEqual(['A']);
  });

  test('should return null if the starting node is not in the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.breadthFirst('D')).toEqual(null);
  });
});
