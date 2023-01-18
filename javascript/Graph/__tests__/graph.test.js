const { Graph, businessTrip } = require('../index');


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
    expect(graph.getNeighbors('A')).toEqual([{ node: 'B', weight: 5 }]);
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
    expect(graph.getNeighbors('A')).toEqual([{ node: 'B', weight: 5 }]);
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

describe('buisness trip', () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addNode('Metroville');
    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Monstropolis');
    graph.addEdge('Metroville', 'Pandora', 10);
    graph.addEdge('Metroville', 'Arendelle', 20);
    graph.addEdge('Metroville', 'Monstropolis', 30);
    graph.addEdge('Pandora', 'Arendelle', 40);
    graph.addEdge('Arendelle', 'Monstropolis', 50);
  });

  test('it returns the cost of the flights that are direct', () => {
    let flight = businessTrip(graph, ['Metroville', 'Pandora']);
    expect(flight).toEqual(10);
  });

  test('it returns null if it isn`t a direct flight', () => {
    let flight = businessTrip(graph, ['Pandora', 'Monstropolis']);
    expect(flight).toEqual(null);
  });

  test('it returns null if the destination is not in the graph', () => {
    let flight = businessTrip(graph, ['Pandora', 'Valdosta']);
    expect(flight).toEqual(null);
  });

  test('handles a single city input', () => {
    let flight = businessTrip(graph, ['Metroville']);
    expect(flight).toEqual(0);
  });
});

describe('depthFirst', () => {
  test('Test a graph with a single node', () => {
    let graph1 = new Graph();
    graph1.addNode(1);
    let cities1 = [1];
    let result1 = graph1.depthFirst(1);
    expect(result1).toEqual(cities1);
  });

  test('Test a graph with multiple nodes and edges', () => {
    let graph2 = new Graph();
    graph2.addNode(1);
    graph2.addNode(2);
    graph2.addNode(3);
    graph2.addNode(4);
    graph2.addEdge(1, 2);
    graph2.addEdge(1, 3);
    graph2.addEdge(2, 4);
    let cities2 = [1, 3, 2, 4];
    let result2 = graph2.depthFirst(1);
    expect(result2).toEqual(cities2);
  });

  test('Test a graph with a non-existing node', () => {
    let graph4 = new Graph();
    graph4.addNode(1);
    graph4.addNode(2);
    let result4 = graph4.depthFirst(3);
    expect(result4).toEqual(null);
  });
});
