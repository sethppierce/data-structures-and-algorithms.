# Hashtables
<!-- Short summary or background information -->
A hashmap is a data structure that stores key-value pairs, and uses a hash function to map keys to indices in an array. Hashmaps offer fast insertion, deletion, and lookup times.

## Challenge
<!-- Description of the challenge -->
Implement a Hashtable Class with the following methods:

set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
get
Arguments: key
Returns: Value associated with that key in the table
has
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
keys
Returns: Collection of keys
hash
Arguments: key
Returns: Index in the collection for that key

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
When two keys hash to the same place in the hashmap, the new value will replace the old one.

The BigO for time for all the methods is O(1).
The BigO for space is O(n).

## API
<!-- Description of each method publicly available in each of your hashtable -->

- set
  - Arguments: key, value
  - Returns: nothing
  - Stores key value pair in hash table, replacing old value if the key already exists.
- get
  - Arguments: key
  - Returns: Value
  - returns value of the key provided
- has
  - Arguments: key
  - Returns: Boolean
  - checks the hash table to see if key already exists
- keys
  - Returns: Collection of keys
  - returns all keys in hash table
- hash
  - Arguments: key
  - Returns: Index
  - returns the index in the hash table the key is at.
