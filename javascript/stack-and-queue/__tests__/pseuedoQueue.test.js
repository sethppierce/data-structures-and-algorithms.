'use strict';

const {PseudoQueue} = require('../index');

describe('PseudoQueue', () => {
  let testPsuedoQueue = new PseudoQueue();

  it('Can successfully instantiate an empty PseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    expect(pseudoQueue).toBeInstanceOf(PseudoQueue);
  });

  it('Can add something to the queue', () => {
    testPsuedoQueue.enqueue(1);
    expect(testPsuedoQueue.stack1.top.value).toEqual(1);
  });

  it('Can add multiple things to the queue', () => {
    testPsuedoQueue.enqueue(2);
    testPsuedoQueue.enqueue(3);
    expect(testPsuedoQueue.stack1.top.value).toEqual(3);
  });

  it('Can remove item from the queue', () => {
    expect(testPsuedoQueue.dequeue()).toEqual(1);
  });

  it('Can remove multiple items from the queue', () => {
    testPsuedoQueue.dequeue();
    expect(testPsuedoQueue.dequeue()).toEqual(3);
  });

  it('Can\'t remove items when queue is empty', () => {
    expect(testPsuedoQueue.dequeue()).toEqual('Nothing to Dequeue');
  });
});
