'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(value){
    let node = new Node(value);
    if(this.head === null){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let current = this.head;
    let str = '';
    while(current){
      str += `{${current.value}} -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  insertBefore(value,newValue){
    let current = this.head;
    if(current.value === value){
      this.insert(newValue);
      return;
    }
    while(current){
      if(current.next.value === value){
        let tempNode = current.next;
        current.next = new Node(newValue);
        return current.next.next = tempNode;
      }
      current = current.next;
    }
  }

  insertAfter(value,newValue){
    let current = this.head;
    if(current.value === value){
      let tempNode = current.next;
      current.next = new Node(newValue);
      current.next.next = tempNode;
      return;
    }
    while(current){
      if(current.value === value){
        let tempNode = current.next;
        current.next = new Node(newValue);
        current.next.next = tempNode;
        return;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
