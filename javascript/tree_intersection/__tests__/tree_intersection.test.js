'use strict';

const { tree_intersection } = require('../index');
const { BinaryTree,Node } = require('../../tree/index');

describe('Tree intersection', () => {
  it('Returns the correct results when provided two trees', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    let tree2 = new BinaryTree();
    tree2.root = new Node(6);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(18);
    tree2.root.left.left = new Node(1);
    tree2.root.left.right = new Node(8);
    tree2.root.right.right = new Node(17);
    expect(tree_intersection(tree,tree2)).toEqual([5,1,8,17]);
  });
  it('Returns null when given two trees that dont match', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    let tree2 = new BinaryTree();
    tree2.root = new Node(11);
    tree2.root.left = new Node(6);
    tree2.root.right = new Node(16);
    tree2.root.left.left = new Node(2);
    tree2.root.left.right = new Node(9);
    tree2.root.right.right = new Node(18);
    expect(tree_intersection(tree,tree2)).toEqual(null);
  });
  it('Returns null when given two trees that are empty', () => {
    let tree = new BinaryTree();
    let tree2 = new BinaryTree();
    expect(tree_intersection(tree,tree2)).toEqual(null);
  });
});
