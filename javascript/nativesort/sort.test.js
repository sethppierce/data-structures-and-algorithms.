'use strict';

const { Movies } = require('./movies');
const { sortTitle, sortYear, compareTitle , compareYear } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('should return a positive number if the year of movie b is greater than the year of movie a', () => {
    const a = { year: 1990 };
    const b = { year: 2000 };
    expect(compareYear(a, b)).toBeGreaterThan(0);
  });

  it('should return a negative number if the year of movie b is less than the year of movie a', () => {
    const a = { year: 2000 };
    const b = { year: 1990 };
    expect(compareYear(a, b)).toBeLessThan(0);
  });

  it('should return 0 if the year of movie a and movie b are equal', () => {
    const a = { year: 2000 };
    const b = { year: 2000 };
    expect(compareYear(a, b)).toEqual(0);
  });

  it('should return a negative number if the first title comes before the second alphabetically', () => {
    const result = compareTitle({title: 'Avatar'}, {title: 'Spiderman'});
    expect(result).toBeLessThan(0);
  });

  it('should return a positive number if the first title comes after the second alphabetically', () => {
    const result = compareTitle({title: 'Spiderman'}, {title: 'Avatar'});
    expect(result).toBeGreaterThan(0);
  });

  it('should return 0 if the titles are the same', () => {
    const result = compareTitle({title: 'Avatar'}, {title: 'Avatar'});
    expect(result).toBe(0);
  });

  it('should ignore articles at the beginning of the title when comparing', () => {
    const result = compareTitle({title: 'The Avatar'}, {title: 'The Spiderman'});
    expect(result).toBeLessThan(0);
  });

  it('should be case-insensitive when comparing', () => {
    const result = compareTitle({title: 'The spiDerMan'}, {title: 'the SpidERman'});
    expect(result).toBe(0);
  });
});
