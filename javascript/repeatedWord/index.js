const {HashTable} = require('../hashtable/index');

function repeatedWord(string){
  string = string.toLowerCase();
  const words = string.split(' ');

  const hashTable = new HashTable(words.length);
  for(let i = 0; i < words.length; i++){
    let hashedWord = hashTable.hash(words[i]);
    if(!hashTable.table[hashedWord]){
      hashTable.set(words[i],words[i]);
    } else if (hashTable.table[hashedWord][words[i]]){
      return words[i];
    }
  }
  return null;
}

module.exports = { repeatedWord };

