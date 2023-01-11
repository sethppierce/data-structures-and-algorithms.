'use strict';

const { HashTable } = require('../../hashtable/index');
const { leftJoin } = require('../index');

describe('Left Join ', () => {
  it('returns the correct output', () => {
    const hashMap1 = new HashTable(10);
    hashMap1.set('a', '1');
    hashMap1.set('b', '2');
    hashMap1.set('c', '3');

    const hashMap2 = new HashTable(10);
    hashMap2.set('a', 'one');
    hashMap2.set('b', 'two');
    hashMap2.set('c', 'three');
    const expectedOutput = [ ['c', '3', 'three'],['b', '2', 'two'],['a', '1', 'one']];
    const result = leftJoin(hashMap1, hashMap2);
    expect(result).toEqual(expectedOutput);
  });
  it('returns null inside of array if second hashmap does not have a matching key', () => {
    const hashMap1 = new HashTable(10);
    hashMap1.set('a', '1');
    hashMap1.set('b', '2');
    hashMap1.set('c', '3');

    const hashMap2 = new HashTable(10);
    hashMap2.set('a', 'one');
    hashMap2.set('b', 'two');
    const expectedOutput = [ ['c', '3', null],['b', '2', 'two'],['a', '1', 'one']];
    const result = leftJoin(hashMap1, hashMap2);
    expect(result).toEqual(expectedOutput);
  });
  it('returns null if the first hashmap is empty', () => {
    const hashMap1 = new HashTable(10);

    const hashMap2 = new HashTable(10);
    hashMap2.set('a', 'one');
    hashMap2.set('b', 'two');
    const result = leftJoin(hashMap1, hashMap2);
    expect(result).toEqual(null);
  });
});
