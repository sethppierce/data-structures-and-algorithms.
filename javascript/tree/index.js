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

  treeMax(){
    let max = 0;
    const traverse = (node) => {
      if(node.value > max) max = node.value;
      if(node.left){
        traverse(node.left);

      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return max;
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

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new QueueNode(value);
    if (this.front === null) {
      this.front = node;
      this.rear = node;
      return;
    }
    if (this.rear === this.front) {
      this.rear = node;
      this.front.next = this.rear;
      return;
    }
    this.rear.next = node;
    this.rear = this.rear.next;
  }

  dequeue() {
    if (this.front === null) { return 'Exception'; }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.front === null) { return 'Exception'; }
    return this.front.value;
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

function breadthFirst(tree){
  const queue = new Queue();
  queue.enqueue(tree.root);
  let values = [];
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    values.push(currentNode.value);
    if (currentNode.left) {
      queue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      queue.enqueue(currentNode.right);
    }
  }
  return values;
}
module.exports = {Node, BinaryTree, BinarySearchTree, Queue, breadthFirst};
