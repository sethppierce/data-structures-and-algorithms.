'use strict';

const { Stack, Queue } = require('../index');

describe('Stack', () => {
  let testStack = new Stack();

  it('Can successfully instantiate an empty Stack', () => {
    let stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('Can successfully push onto a stack', () => {
    testStack.push(1);
    expect(testStack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    testStack.push(2);
    testStack.push(3);
    expect(testStack.top.value).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    testStack.pop();
    expect(testStack.top.value).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    testStack.pop();
    testStack.pop();

    expect(testStack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    testStack.push(1);

    expect(testStack.peek()).toEqual(1);
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    testStack.pop();

    expect(testStack.pop()).toEqual('Exception');
    expect(testStack.peek()).toEqual('Exception');
  });
});

describe('Queue', () => {
  let testQueue = new Queue();

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('Can successfully enqueue into a queue', () => {
    testQueue.enqueue(1);
    expect(testQueue.front.value).toEqual(1);
    expect(testQueue.rear).toEqual(testQueue.front);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.rear.value).toEqual(3);
  });

  it('Can successfully dequeue out of a queue', () => {
    testQueue.dequeue();
    expect(testQueue.front.value).toEqual(2);
    expect(testQueue.rear.value).toEqual(3);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.isEmpty()).toEqual(true);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    testQueue.enqueue(1);
    expect(testQueue.peek()).toEqual(1);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    testQueue.dequeue();

    expect(testQueue.dequeue()).toEqual('Exception');
    expect(testQueue.peek()).toEqual('Exception');
  });
});
