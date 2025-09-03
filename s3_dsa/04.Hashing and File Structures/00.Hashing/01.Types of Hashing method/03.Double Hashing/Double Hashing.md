# Double Hashing

## What is Double Hashing?

Double hashing is a collision resolution method used in open addressing hash tables. When a collision occurs (i.e., the initially hashed index is already occupied), double hashing uses a second hash function to determine the step size for further probing. This reduces clustering and distributes keys more uniformly compared to linear or quadratic probing.

The probing function is:

$$
h(k, i) = (h_1(k) + i \times h_2(k)) \bmod m
$$

Where:

- $k$ is the key,
- $i$ is the probe attempt number (starting at 0, then 1, 2, etc.),
- $h_1(k)$ is the primary hash function,
- $h_2(k)$ is the secondary hash function, which must be non-zero and relatively prime to $m$,
- $m$ is the size of the hash table.

***

### Step-by-Step Example Using

$$
h(k, i) = (k \bmod m + i \times (1 + (k \bmod (m - 1)))) \bmod m
$$

Let the hash table size be $m = 13$, and the keys to insert are: 79, 69, 98, 72, 14, 50.

***

#### Step 1: Insert Key 79

Calculate the primary hash:

$$
h_1(79) = 79 \bmod 13 = 1
$$

Slot 1 is empty → insert 79 at index 1.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  |  |  |  |  |  |  |  |  |  |


***

#### Step 2: Insert Key 69

Calculate the primary hash:

$$
h_1(69) = 69 \bmod 13 = 4
$$

Slot 4 is empty → insert 69 at index 4.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  | 69 |  |  |  |  |  |  |  |  |


***

#### Step 3: Insert Key 98

Calculate the primary hash:

$$
h_1(98) = 98 \bmod 13 = 7
$$

Slot 7 is empty → insert 98 at index 7.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  | 69 |  |  | 98 |  |  |  |  |  |


***

#### Step 4: Insert Key 72 (Collision resolution needed)

Calculate the primary hash:

$$
h_1(72) = 72 \bmod 13 = 7
$$

Slot 7 is **already occupied** by 98 — collision!

Calculate the secondary hash:

$$
h_2(72) = 1 + (72 \bmod 12) = 1 + 0 = 1
$$

Probe for $i=1$:

$$
h(72,1) = (7 + 1 \times 1) \bmod 13 = 8
$$

Slot 8 is empty → insert 72 at index 8.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  | 69 |  |  | 98 | 72 |  |  |  |  |


***

#### Step 5: Insert Key 14 (Collision resolution needed)

Calculate primary hash:

$$
h_1(14) = 14 \bmod 13 = 1
$$

Slot 1 is **occupied** by 79 — collision!

Calculate secondary hash:

$$
h_2(14) = 1 + (14 \bmod 12) = 1 + 2 = 3
$$

Probe $i=1$:

$$
h(14,1) = (1 + 1 \times 3) \bmod 13 = 4
$$

Slot 4 is **occupied** by 69 — collision!

Probe $i=2$:

$$
h(14,2) = (1 + 2 \times 3) \bmod 13 = 7
$$

Slot 7 is **occupied** by 98 — collision!

Probe $i=3$:

$$
h(14,3) = (1 + 3 \times 3) \bmod 13 = 10
$$

Slot 10 is empty → insert 14 at index 10.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  | 69 |  |  | 98 | 72 |  | 14 |  |  |


***

#### Step 6: Insert Key 50

Calculate the primary hash:

$$
h_1(50) = 50 \bmod 13 = 11
$$

Slot 11 is empty → insert 50 at index 11.


| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Value |  | 79 |  |  | 69 |  |  | 98 | 72 |  | 14 | 50 |  |


***

### Visualization of Double Hashing

```
Index:  0    1    2    3    4    5    6    7    8    9    10   11   12
Value:  -   79    -    -   69    -    -   98   72    -   14   50    -
```


***

### Key Points About Double Hashing

- Uses two hash functions: the first to find the initial index, the second to calculate the step size for probing.
- Effectively reduces clustering compared to linear and quadratic probing.
- The secondary hash function must never evaluate to zero and should be relatively prime to the table size to ensure all slots can be probed.
- Provides a good trade-off between simplicity and performance in collision resolution.

***

### Summary

Double hashing resolves hash table collisions by applying a second hash function to compute a variable step size for probing empty slots:

$$
h(k, i) = (h_1(k) + i \times h_2(k)) \bmod m
$$

This method minimizes clustering and improves key distribution compared to simpler probing methods, making it highly efficient for open addressing hash tables.
