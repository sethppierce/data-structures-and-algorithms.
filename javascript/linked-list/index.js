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
  kthFromEnd(k){
    let length = 0;
    let current = this.head;
    while(current.next){
      length += 1;
      current = current.next;
    }
    if(k > length || k < 0){
      return 'Exception';
    }
    current = this.head;
    for(let i = 0; i < length-k; i++){
      current = current.next;
    }
    return current.value;
  }
}
function zipLists(list1,list2){
  let list1cur = list1.head;
  let list2cur = list2.head;
  if(list1cur === null){return list2;}
  if(list2cur === null){return list1;}
  let list3 = new LinkedList();
  while(list1cur && list2cur){
    list3.add(list1cur.value);
    list3.add(list2cur.value);
    list1cur = list1cur.next;
    list2cur = list2cur.next;
  }
  while(list1cur){
    list3.add(list1cur.value);
    list1cur = list1cur.next;
  }
  while(list2cur){
    list3.add(list2cur.value);
    list2cur = list2cur.next;
  }
  return list3;
}

module.exports = {LinkedList, zipLists};
