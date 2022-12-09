'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.top === null){ return 'Exception';}
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.top === null){ return 'Exception';}
    return this.top.value;
  }

  isEmpty(){
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }

}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if(this.front === null){
      this.front = node;
      return this.rear = node;
    }
    if(this.rear === this.front){
      this.rear = node;
      return this.front.next = this.rear;
    }
    this.rear.next = node;
    this.rear = this.rear.next;
  }

  dequeue(){
    if(this.front === null){ return 'Exception'; }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.front === null){ return 'Exception'; }
    return this.front.value;
  }

  isEmpty(){
    if(this.front === null){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack, Queue };
