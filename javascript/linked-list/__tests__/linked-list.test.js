'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  let list = new LinkedList();
  list.add('a');
  list.add('b');
  list.add('c');

  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList).toBeInstanceOf(LinkedList);
  });
  it('accepts new nodes as expected', () => {
    // HEAD{a} -> {b} -> {c} -> null
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
  it('Can properly insert into the linked list', () => {
    list.insert('newHead');

    expect(list.head.value).toEqual('newHead');
  });
  it('The head property will properly point to the first node in the linked list', () =>{
    expect(list.head.value).toEqual('newHead');
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert('newHead4');
    list.insert('newHead3');
    list.insert('newHead2');

    expect(list.head.value).toEqual('newHead2');
    expect(list.head.next.value).toEqual('newHead3');
    expect(list.head.next.next.value).toEqual('newHead4');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let trueResult = list.includes('a');
    expect(trueResult).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let falseResult = list.includes('d');
    expect(falseResult).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {c} -> NULL');
  });
});
