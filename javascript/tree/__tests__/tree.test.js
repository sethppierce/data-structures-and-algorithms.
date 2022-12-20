'use strict';

const {BinaryTree, Node, BinarySearchTree, breadthFirst} = require('../index');

describe('Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree).toBeInstanceOf(BinaryTree);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    expect(tree.root).toBeInstanceOf(Node);
  });
  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let searchTree = new BinarySearchTree();
    searchTree.add(10);
    searchTree.add(5);
    searchTree.add(15);
    expect(searchTree.root.left.value).toBe(5);
    expect(searchTree.root.right.value).toBe(15);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    let searchTree = new BinarySearchTree();
    searchTree.add(10);
    searchTree.add(5);
    searchTree.add(15);
    expect(searchTree.preOrder()).toEqual([10,5,15]);
  });
  it('Can successfully return a collection from a inorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.inOrder()).toEqual([1,5,8,10,15,17]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.postOrder()).toEqual([1,8,5,17,15,10]);
  });
  it('Returns true or false for the contains method, given an existing or non-existing node value', () => {
    let searchTree = new BinarySearchTree();
    searchTree.add(10);
    searchTree.add(5);
    searchTree.add(15);
    expect(searchTree.contains(5)).toEqual(true);
    expect(searchTree.contains(7)).toEqual(false);
  });
  it('It can find the max value in the tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.treeMax()).toEqual(17);
  });
  it('It returns the values in breadth first order', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(breadthFirst(tree)).toEqual([ 10, 5, 15, 1, 8, 17 ]);
  });
});
