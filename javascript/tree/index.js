'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    let results = [];
    const traverse = (node) => {
      results.push(node.value);

      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;

  }

  inOrder(){
    let results = [];
    const traverse = (node) => {
      if(node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder(){
    const results = [];
    const traverse = (node) => {
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value, node = this.root) {
    if(this.root === null){
      this.root = new Node(value);
      return;
    }
    if (value < node.value) {
      if (node.left){
        this.add(value, node.left);
      }
      else { node.left = new Node(value); }
    } else {
      if (node.right) {
        this.add(value, node.right);
      }
      else node.right = new Node(value);
    }
  }

  contains(value, node = this.root) {
    if (value === node.value) return true;
    if (value < node.value && node.left) {
      return this.contains(value, node.left);
    }
    if (value > node.value && node.right) {
      return this.contains(value, node.right);
    }
    return false;
  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};
