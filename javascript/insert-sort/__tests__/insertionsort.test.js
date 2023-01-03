'use strict';

const { insertionSort } = require('../index');

describe('Insertion Sort', () => {
  it('Sorts an array', () => {
    let arr = [3,4,2,1];

    expect(insertionSort(arr)).toEqual([1,2,3,4]);
  });
  it('works on an empty array', () => {
    const arr = [];
    insertionSort(arr);
    expect(arr).toEqual([]);
  });
  it('works on an array with a single element', () => {
    const arr = [3];
    insertionSort(arr);
    expect(arr).toEqual([3]);
  });
});
