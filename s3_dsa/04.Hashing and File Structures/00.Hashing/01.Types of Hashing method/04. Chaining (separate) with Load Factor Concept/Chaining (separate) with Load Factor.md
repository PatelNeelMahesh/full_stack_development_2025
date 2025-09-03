# What is Chaining?

Chaining, or separate chaining, is a collision resolution technique used in hash tables where each slot in the hash table points to a linked list (or chain) of entries that hash to the same index. When multiple keys collide at the same index, they are stored in the linked list of that slot, preventing collision by allowing multiple elements per bucket.

***

## What is Load Factor?

The load factor $\alpha$ of a hash table with chaining is defined as:

$$
\alpha = \frac{n}{m}
$$

Where:

- $n$ is the number of keys inserted,
- $m$ is the number of slots (buckets) in the hash table.

The load factor represents the average number of elements per bucket (linked list) and helps estimate the expected search, insertion, or deletion cost.

***

## Steps and Example for Chaining with Load Factor Concept

Consider a hash table with $m = 5$ slots. We insert the keys: 12, 25, 35, 20, 30, 45.

***

### Step 1: Insert Key 12

Calculate the hash index:

$$
h(12) = 12 \bmod 5 = 2
$$

Insert 12 at bucket 2.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  |

Load factor $\alpha = \frac{1}{5} = 0.2$.

***

### Step 2: Insert Key 25

$$
h(25) = 25 \bmod 5 = 0
$$

Insert 25 at bucket 0.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 25 |  | 12 |  |  |

Load factor $\alpha = \frac{2}{5} = 0.4$.

***

### Step 3: Insert Key 35

$$
h(35) = 35 \bmod 5 = 0
$$

Bucket 0 already has 25, so add 35 to the chain at bucket 0.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 25 → 35 |  | 12 |  |  |

Load factor $\alpha = \frac{3}{5} = 0.6$.

***

### Step 4: Insert Key 20

$$
h(20) = 20 \bmod 5 = 0
$$

Add 20 to the chain at bucket 0: 25 → 35 → 20.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 25 → 35 → 20 |  | 12 |  |  |

Load factor $\alpha = \frac{4}{5} = 0.8$.

***

### Step 5: Insert Key 30

$$
h(30) = 30 \bmod 5 = 0
$$

Add 30 to bucket 0 chain.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 25 → 35 → 20 → 30 |  | 12 |  |  |

Load factor $\alpha = \frac{5}{5} = 1.0$.

***

### Step 6: Insert Key 45

$$
h(45) = 45 \bmod 5 = 0
$$

Insert 45 in chain at bucket 0: 25 → 35 → 20 → 30 → 45.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 25 → 35 → 20 → 30 → 45 |  | 12 |  |  |

Load factor $\alpha = \frac{6}{5} = 1.2$.

***

## Key Points About Chaining and Load Factor

- Each bucket stores a linked list of keys mapping to that index.
- Load factor $\alpha$ indicates the average chain length; higher $\alpha$ means more elements per bucket and potentially longer search times.
- Chaining can handle any number of keys, but performance may degrade as chains become long.
- Optimal performance happens when $\alpha$ stays near or below 1 for fast look-ups.
- Chaining avoids clustering issues seen in open addressing methods.

***

## Summary

Chaining uses linked lists to handle collisions by storing multiple elements per slot in a hash table. The load factor $\alpha = \frac{n}{m}$ measures how full the table is, impacting average search time. Keeping $\alpha$ low leads to efficient hash table operations even with collisions.

