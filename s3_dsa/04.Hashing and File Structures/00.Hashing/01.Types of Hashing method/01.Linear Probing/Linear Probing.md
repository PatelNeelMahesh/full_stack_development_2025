# Linear Probing Collision Resolution

### What is Linear Probing?

Linear probing is an **open addressing** collision resolution technique where, upon a collision, the algorithm sequentially searches for the next free slot in the hash table to store the key.

The probing function used is:

$$
h(k,i) = (h(k) + i) \bmod m
$$

Where:

- $h(k) = k \bmod m$ is the initial hash index
- $i$ is the probe number (starting from 0)
- $m$ is the size of the hash table

When inserting or searching for a key:

- Start at $h(k)$, check if slot is free or matches the key.
- If occupied and different key, increment $i$ and try slot $(h(k) + i) \bmod m$.
- Continue until an empty slot is found (insertion) or key is found (search), or all slots checked.

***

### Step-by-Step Example Using Linear Probing

Hash table size $m = 7$, hash function:

$$
h(k) = k \bmod 7
$$

***

Keys to insert: 10, 17, 24, 31, 38.

***

#### Step 1: Insert 10

$$
h(10, 0) = (10 \bmod 7 + 0) \bmod 7 = 3
$$

Slot 3 is empty → insert 10 at index 3.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  |  | 10 |  |  |  |


***

#### Step 2: Insert 17

$$
h(17,0) = (17 \bmod 7 + 0) \bmod 7 = 3
$$

Slot 3 occupied → probe next slot:

$$
h(17, 1) = (3 + 1) \bmod 7 = 4
$$

Slot 4 empty → insert 17 at index 4.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  |  | 10 | 17 |  |  |


***

#### Step 3: Insert 24

$$
h(24,0) = (24 \bmod 7 + 0) \bmod 7 = 3
$$

Slot 3 occupied → linear probe:

- $i=1$: $(3 + 1) \bmod 7 = 4$ → occupied
- $i=2$: $(3 + 2) \bmod 7 = 5$ → empty

Insert 24 at index 5.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  |  | 10 | 17 | 24 |  |


***

#### Step 4: Insert 31

$$
h(31,0) = (31 \bmod 7 + 0) \bmod 7 = 3
$$

Linear probe:

- $i=1$: index 4 occupied (17)
- $i=2$: index 5 occupied (24)
- $i=3$: $(3 + 3) \bmod 7 = 6$ empty

Insert 31 at index 6.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  |  | 10 | 17 | 24 | 31 |


***

#### Step 5: Insert 38

$$
h(38,0) = (38 \bmod 7 + 0) \bmod 7 = 3
$$

Linear probe:

- $i=1$: 4 occupied (17)
- $i=2$: 5 occupied (24)
- $i=3$: 6 occupied (31)
- $i=4$: $(3 + 4) \bmod 7 = 0$ empty

Insert 38 at index 0.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 38 |  |  | 10 | 17 | 24 | 31 |


***

### Visualization of the Final Hash Table

```
Index:  0    1    2    3     4     5     6
Value: 38   -    -   10    17    24    31
```


***

### Key Points About Linear Probing

- All keys are stored **within the hash table array itself**.
- When a collision occurs, a **sequential search** for the next free bucket happens.
- Probing wraps around the table because of modulo arithmetic.
- Deletion and searching use the same probing approach.
- Can suffer from **primary clustering**, where groups of filled slots form, increasing search time.

***

### Summary

Linear probing uses the formula:

$$
h(k,i) = (h(k) + i) \bmod m
$$

to resolve collisions by checking subsequent slots one by one until finding an empty slot. This preserves fast access and insertion as long as the load factor stays low, balancing simplicity and efficiency.
