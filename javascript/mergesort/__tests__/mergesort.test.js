'use strict';

const {mergeSort} = require('../index');

describe('Merge Sort', () => {
  test('mergeSort sorts an array of integers', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  test('mergeSort sorts an array of negative integers', () => {
    expect(mergeSort([-8,-4,-23,-42,-16,-15])).toEqual([-42,-23,-16,-15,-8,-4]);
  });

  test('mergeSort sorts an array of strings', () => {
    expect(mergeSort(['zebra', 'apple', 'banana', 'cat'])).toEqual(['apple', 'banana', 'cat', 'zebra']);
  });

});
