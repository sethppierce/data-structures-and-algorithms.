'use strict';

const { AnimalShelter, Node } = require('../index');

let dogObj = {
  species: 'dog',
  name: 'test',
  age: 'test',
};

let dogObj2 = {
  species: 'dog',
  name: 'test2',
  age: 'test',
};

let dogObj3 = {
  species: 'dog',
  name: 'test3',
  age: 'test',
};

let catObj = {
  species: 'cat',
  name: 'test',
  age: 'test',
};

let catObj2 = {
  species: 'cat',
  name: 'test2',
  age: 'test',
};
let catObj3 = {
  species: 'cat',
  name: 'test3',
  age: 'test',
};

describe('AnimalShelter', () => {
  let animalShelter = new AnimalShelter();

  it('Can successfully instantiate an empty AnimalShelter', () => {
    let testAnimalShelter = new AnimalShelter();
    expect(testAnimalShelter).toBeInstanceOf(AnimalShelter);
  });

  it('Can add something to the dog queue', () => {
    animalShelter.enqueue(dogObj);
    expect(animalShelter.dogQueue.front.value).toEqual(dogObj);
  });
  it('Can add multiple dogs to the dog queue', () => {
    animalShelter.enqueue(dogObj2);
    animalShelter.enqueue(dogObj3);
    expect(animalShelter.dogQueue.rear.value).toEqual(dogObj3);
  });

  it('Can add something to the cat queue', () => {
    animalShelter.enqueue(catObj);
    expect(animalShelter.catQueue.front.value).toEqual(catObj);
  });

  it('Can add multiple cats to the cat queue', () => {
    animalShelter.enqueue(catObj2);
    animalShelter.enqueue(catObj3);
    expect(animalShelter.catQueue.rear.value).toEqual(catObj3);
  });

  it('Can successfully dequeue out of the dog queue', () => {
    animalShelter.dequeue('dog');
    expect(animalShelter.dogQueue.front.value).toEqual(dogObj2);
    expect(animalShelter.dogQueue.rear.value).toEqual(dogObj3);
  });

  it('Can successfully empty the dog queue after multiple dequeues', () => {
    animalShelter.dequeue('dog');
    animalShelter.dequeue('dog');
    expect(animalShelter.dogQueue.isEmpty()).toEqual(true);
  });

  it('Can successfully dequeue out of the cat queue', () => {
    animalShelter.dequeue('cat');
    expect(animalShelter.catQueue.front.value).toEqual(catObj2);
    expect(animalShelter.catQueue.rear.value).toEqual(catObj3);
  });

  it('Can successfully empty the cat queue after multiple dequeues', () => {
    animalShelter.dequeue('cat');
    animalShelter.dequeue('cat');
    expect(animalShelter.catQueue.isEmpty()).toEqual(true);
  });

  it('Returns null when pref is not "dog" or "cat" ', () => {
    expect(animalShelter.dequeue('lizard')).toEqual(null);
    expect(animalShelter.dequeue('turtle')).toEqual(null);
  });
  
});

