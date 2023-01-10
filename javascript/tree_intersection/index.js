'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  set(key, value) {
    const position = this.hash(key);
    if (!this.table[position]) {
      this.table[position] = { [key]: value };
    } else {
      this.table[position][key] = value;
    }
  }

  get(key) {
    const position = this.hash(key);
    if (this.table[position]) {
      return this.table[position][key];
    } else {
      return null;
    }
  }

  has(key) {
    const position = this.hash(key);
    if (this.table[position] && this.table[position][key]) {
      return true;
    } else {
      return false;
    }
  }

  keys() {
    const keys = [];
    this.table.forEach((item) => {
      if (item) keys.push(...Object.keys(item));
    });
    return keys;
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }
}

function tree_intersection(tree1, tree2) {

  let arr = [];
  const traverse = (node) => {
    if(!node) return;
    arr.push(node.value + '');
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(tree1.root);

  let hashTable = new HashTable(arr.length);

  for (let i = 0; i < arr.length; i++) {
    hashTable.set(arr[i], arr[i]);
  }

  let results = [];
  const inHashTable = (node) => {
    if(!node) return;
    if (hashTable.has(node.value + '')) results.push(node.value);
    if (node.left) inHashTable(node.left);
    if (node.right) inHashTable(node.right);
  };
  inHashTable(tree2.root);
  if(results.length === 0 ) return null;
  return results;

}

module.exports = { tree_intersection, HashTable };
