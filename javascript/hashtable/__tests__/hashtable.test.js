'use strict';

const {HashTable} = require('../index');

describe('Hash table ', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const hashTable = new HashTable(15);
    hashTable.set('test', 'value');
    expect(hashTable.get('test')).toBe('value');
  });

  it('Retrieving based on a key returns the value stored', () => {
    const hashTable = new HashTable(15);
    hashTable.set('test', 'value');
    expect(hashTable.get('test')).toBe('value');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashTable = new HashTable(15);
    expect(hashTable.get('test')).toBe(null);
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const hashTable = new HashTable(15);
    hashTable.set('test1', 'value');
    hashTable.set('test2', 'value');
    hashTable.set('test3', 'value');
    expect(hashTable.keys()).toContain('test1');
    expect(hashTable.keys()).toContain('test2');
    expect(hashTable.keys()).toContain('test3');
  });

  it('Successfully handles a collision within the hashtable', () => {
    const hashTable = new HashTable(15);
    hashTable.set('test1', 'value');
    hashTable.set('test1', 'newValue');
    expect(hashTable.get('test1')).toBe('newValue');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashTable = new HashTable(15);
    hashTable.set('test1', 'value');
    hashTable.set('test2', 'value');
    hashTable.set('test2', 'newValue');
    hashTable.set('test3', 'value');
    expect(hashTable.get('test2')).toBe('newValue');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(15);
    expect(hashTable.hash('test')).toBeLessThan(15);
  });

});
