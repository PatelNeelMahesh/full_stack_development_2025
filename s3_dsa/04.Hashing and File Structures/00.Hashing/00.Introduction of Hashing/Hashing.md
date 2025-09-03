# Hashing

## Introduction to Hashing

Hashing is a fundamental technique in computer science used to efficiently map data of arbitrary size (like strings or numbers) to fixed-size values called **hash codes** or **hash values**. These hash codes act as unique identifiers to quickly access or store data in specialized data structures known as **hash tables**.

The goal of hashing is to provide **fast data retrieval** — ideally in constant time, O(1) — by converting complex keys into simple indices for arrays.

Hashing is widely used in:

- Databases for indexing
- Caches for quick lookups
- Password security (hashing passwords)
- Cryptography and data integrity verification

***

## Hash Tables and Functions

### Hash Table

A hash table is a **dynamic array-like data structure** where each position (called a bucket) stores data values associated with a key. When a key is given, a hash function is applied to compute an index where the value is stored or looked up.

**Representation of a Hash Table:**

Consider a hash table of size 10, initially empty:


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  |  |  |  |  |  |  |  |  |

As keys are hashed, values are inserted at computed indices.

***

### Time and Space Complexity of Hash Tables

- **Time Complexity:**
    - Average case: **O(1)** for search, insertion, and deletion due to direct indexing using hash codes.
    - Worst case: **O(n)** if many collisions cause chained or sequential searches.
- **Space Complexity:**
    - Space needed is **O(m)**, where " m " is the size of the hash table (number of buckets).
    - Additional space is required depending on collision handling strategies (like linked lists in chaining).


### Hash Function

A **hash function** takes input data (keys) and returns an integer hash code. The hash code is then used to calculate an array index.

**Important properties of a good hash function:**

- **Deterministic:** The same input produces the same output every time.
- **Uniform distribution:** Hash values spread evenly across the table to minimize collisions.
- **Fast to compute:** Must be efficient to keep overall operations fast.

***

### Explanation of a Normal Hash Function with Example

Consider the simplest and most common hash function using the modulo operation:

$$
h(k) = k \bmod m
$$

Where:

- $k$ is the key
- $m$ is the size of the hash table (number of buckets)
- $h(k)$ is the computed hash code which becomes the index for storage/retrieval

***

### Step-by-Step Example with Rich Representation

Suppose we want to insert keys 12, 25, 37, and 10 into a hash table of size 10. Our hash function is:

$$
h(k) = k \bmod 10
$$

***

#### Step 1: Calculate Hash for First Key (12)

$$
12 \bmod 10 = 2
$$

Place the value at index 2 in the hash table.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  |  |  |  |  |  |


***

#### Step 2: Calculate Hash for Second Key (25)

$$
25 \bmod 10 = 5
$$

Place the value at index 5.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  | 25 |  |  |  |  |


***

#### Step 3: Calculate Hash for Third Key (37)

$$
37 \bmod 10 = 7
$$

Place the value at index 7.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  | 25 |  | 37 |  |  |


***

#### Step 4: Calculate Hash for Fourth Key (10)

$$
10 \bmod 10 = 0
$$

Place the value at index 0.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 |  | 12 |  |  | 25 |  | 37 |  |  |


***

### Conceptual Visualization of the Hash Table After Insertions

```
Index 0: 10
Index 1: -
Index 2: 12
Index 3: -
Index 4: -
Index 5: 25
Index 6: -
Index 7: 37
Index 8: -
Index 9: -
```

Each key has been converted into an index via the hash function and stored in the hash table accordingly.

***

### Why Modulo as a Hash Function?

- **Keeps indices within table range:** The modulo operation ensures the hash code is between 0 and $m-1$.
- **Simple and fast:** Modulo is a quick enough operation for most keys.
- **Works well with a prime-sized table:** Choosing the table size $m$ as a prime number often distributes keys more uniformly.

## Hash Collisions

### What is a Collision?

A **collision** occurs in a hash table when two different keys produce the **same hash code** (index) after applying the hash function. Since the hash table uses this index to store data, collisions need to be handled carefully to avoid data loss or incorrect retrieval.

***

### Step-by-Step Example of a Collision

Using the same hash function:

$$
h(k) = k \bmod 10
$$

Suppose we want to insert the keys 12 and 22 into a hash table of size 10.

***

#### Step 1: Calculate Hash for Key 12

$$
12 \bmod 10 = 2
$$

Place the value at index 2.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  |  |  |  |  |  |


***

#### Step 2: Calculate Hash for Key 22

$$
22 \bmod 10 = 2
$$

This causes a **collision**, since index 2 is already occupied by key 12.

***

### Representation of the Collision Situation

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12, 22 ? |  |  |  |  |  |  |  |

Both keys **map to index 2**, so there must be a way to store or distinguish both values in the same slot.

***

### Why Collisions Matter

Collisions affect the efficiency of hash tables because they can cause:

- Longer search times if multiple keys share the same index.
- Potential data overwrites or loss if not handled properly.

***

### Summary

Collisions are unavoidable in most hashing scenarios because different keys can map to the same hash code. Handling collisions effectively is crucial to maintain the speed and reliability of hash tables. Basic understanding of collisions sets the stage to learn about collision resolution strategies such as chaining or open addressing.

---
