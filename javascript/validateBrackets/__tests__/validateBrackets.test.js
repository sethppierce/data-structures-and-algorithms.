'use strict';

const {validateBrackets} = require('../../stack-and-queue/index');

describe('Bracket Validation', () => {

  it('Can validate brackets', () =>{
    expect(validateBrackets('{[]}')).toEqual(true);
  });

  it('Can validate brackets with text', () =>{
    expect(validateBrackets('()[[Extra Characters]]')).toEqual(true);
  });

  it('Fails unbalanced brackets', () =>{
    expect(validateBrackets('{[}]')).toEqual(false);
    expect(validateBrackets('[({}]')).toEqual(false);
  });
});
