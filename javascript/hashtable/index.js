class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  set(key, value) {
    const position = this.hash(key);
    if (!this.table[position]) {
      this.table[position] = { [key]: value };
    } else {
      this.table[position][key] = value;
    }
  }

  get(key) {
    const position = this.hash(key);
    if (this.table[position]) {
      return this.table[position][key];
    } else {
      return null;
    }
  }

  has(key) {
    const position = this.hash(key);
    if (this.table[position] && this.table[position][key]) {
      return true;
    } else {
      return false;
    }
  }

  keys() {
    const keys = [];
    this.table.forEach((item) => {
      if (item) keys.push(...Object.keys(item));
    });
    return keys;
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }
}

module.exports = HashTable;
