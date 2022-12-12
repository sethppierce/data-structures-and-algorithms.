'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top === null) { return 'Exception'; }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.top === null) { return 'Exception'; }
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

}
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    console.log(this.stack1);
  }
  dequeue() {
    if (this.stack1.top === null) { return 'Nothing to Dequeue' }
    while (this.stack1.top) {
      this.stack2.push(this.stack1.pop());
    }
    let val = this.stack2.pop();
    while (this.stack2.top) {
      this.stack1.push(this.stack2.pop());
    }
    return val;
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
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


module.exports = { Stack, Queue, PseudoQueue };
