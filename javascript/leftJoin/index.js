'use strict';

function leftJoin(hash1, hash2) {
  let result = [];
  let keys = hash1.keys();
  if(keys.length === 0) return null;
  for (const key of keys) {
    let row = [key, hash1.get(key)];
    if (hash2.has(key)) {
      row.push(hash2.get(key));
    } else {
      row.push(null);
    }
    result.push(row);
  }

  return result;
}


module.exports = {leftJoin};
