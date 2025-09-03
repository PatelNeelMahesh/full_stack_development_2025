# Quadratic Probing

## What is Quadratic Probing?

Quadratic probing is a collision resolution technique for hash tables using open addressing. When a collision occurs (i.e., the target index is occupied), quadratic probing searches for an empty slot by adding a quadratic function of the probe number to the key’s hash.

The probing function is:

$$
h(k, i) = (k \times i^2) \bmod m
$$

Where:

- $k$ is the key,
- $i$ is the probe attempt number (starting at 0, then 1, 2, etc.),
- $m$ is the size of the hash table.

***

### Step-by-Step Example Using $h(k, i) = (k \times i^2) \bmod m$

Suppose a hash table of size $m = 7$ and keys to insert: 10, 17, 24, 31.

***

#### Step 1: Insert Key 10

$$
h(10,0) = (10 \times 0^2) \bmod 7 = 0
$$

Slot 0 is empty → insert 10 at index 0.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 |  |  |  |  |  |  |


***

#### Step 2: Insert Key 17

$$
h(17,0) = (17 \times 0^2) \bmod 7 = 0
$$

Slot 0 is occupied → probe next using $i=1$:

$$
h(17,1) = (17 \times 1^2) \bmod 7 = 17 \bmod 7 = 3
$$

Slot 3 is empty → insert 17 at index 3.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 |  |  | 17 |  |  |  |


***

#### Step 3: Insert Key 24

$$
h(24,0) = (24 \times 0^2) \bmod 7 = 0
$$

Slot 0 occupied → probe $i=1$:

$$
h(24,1) = (24 \times 1^2) \bmod 7 = 24 \bmod 7 = 3
$$

Slot 3 occupied → probe $i=2$:

$$
h(24,2) = (24 \times 2^2) \bmod 7 = (24 \times 4) \bmod 7 = 96 \bmod 7 = 5
$$

Slot 5 empty → insert 24 at index 5.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 |  |  | 17 |  | 24 |  |


***

#### Step 4: Insert Key 31

$$
h(31,0) = (31 \times 0^2) \bmod 7 = 0
$$

Slot 0 occupied → probe $i=1$:

$$
h(31,1) = (31 \times 1^2) \bmod 7 = 31 \bmod 7 = 3
$$

Slot 3 occupied → probe $i=2$:

$$
h(31,2) = (31 \times 4) \bmod 7 = 124 \bmod 7 = 5
$$

Slot 5 occupied → probe $i=3$:

$$
h(31,3) = (31 \times 9) \bmod 7 = 279 \bmod 7 = 6
$$

Slot 6 empty → insert 31 at index 6.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 10 |  |  | 17 |  | 24 | 31 |


***

### Visualization of Quadratic Probing

```
Index:  0    1    2    3    4    5    6
Value: 10    -    -   17    -   24   31
```


***

### Key Points About Quadratic Probing

- Uses squares of the probe number multiplied by the key to calculate the next index.
- Helps reduce clustering compared to linear probing.
- Can cover the hash table more widely depending on table size and key distribution.
- Requires careful design choices to guarantee finding an empty slot.

***

### Summary

Quadratic probing resolves collisions by probing hash table indices calculated as:

$$
h(k, i) = (k \times i^2) \bmod m
$$

This approach distributes probes more broadly than linear probing, reducing clustering and increasing efficiency for hash tables with moderate load.
