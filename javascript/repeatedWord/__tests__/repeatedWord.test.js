'use strict';

const {repeatedWord} = require('../index');

describe('repeatedWord', () => {
  test('should return the first repeated word in a string', () => {
    const string = 'this is the test this is the test';
    expect(repeatedWord(string)).toBe('this');
  });

  test('should return null if no repeated words are found', () => {
    const string = 'This is a test string with no repeated words';
    expect(repeatedWord(string)).toBe(null);
  });

  test('should handle words with different casing', () => {
    const string = 'ThiS is a test string with different casing tHIs';
    expect(repeatedWord(string)).toBe('this');
  });
});
