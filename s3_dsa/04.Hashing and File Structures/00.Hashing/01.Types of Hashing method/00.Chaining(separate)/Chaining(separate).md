# What is Chaining?

**Chaining** is a widely used and effective collision resolution technique in hash tables. Instead of storing a single element in each bucket (index), **each bucket maintains its own linked list (chain)** of all keys mapping to that index.

When multiple keys produce the same hash code (collision), they are stored in the linked list attached to that bucket. This way, the hash table can hold multiple elements at the same index without data loss.

***

### Detailed Step-by-Step Example of Chaining

Assume a hash table of size 5 with the hash function:

$$
h(k) = k \bmod 5
$$

We want to insert keys: 12, 15, 22, 25, and 37.

***

#### Step 1: Insert Key 12

$$
12 \bmod 5 = 2
$$

Insert 12 at index 2.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value |  |  | 12 |  |  |


***

#### Step 2: Insert Key 15

$$
15 \bmod 5 = 0
$$

Insert 15 at index 0.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 15 |  | 12 |  |  |


***

#### Step 3: Insert Key 22

$$
22 \bmod 5 = 2
$$

Collision at index 2 (occupied by 12). Using chaining, append 22 to the linked list at index 2.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 15 |  | 12 -> 22 |  |  |


***

#### Step 4: Insert Key 25

$$
25 \bmod 5 = 0
$$

Collision at index 0 (occupied by 15). Append 25 to index 0's linked list.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 15 -> 25 |  | 12 -> 22 |  |  |


***

#### Step 5: Insert Key 37

$$
37 \bmod 5 = 2
$$

Another collision at index 2. Append 37 to the list at index 2.


| Index | 0 | 1 | 2 | 3 | 4 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Value | 15 -> 25 |  | 12 -> 22 -> 37 |  |  |


***

### Rich Representation of Chaining Structure

| Index | Bucket Contents |
| :-- | :-- |
| 0 | 15 -> 25 -> NULL |
| 1 | NULL |
| 2 | 12 -> 22 -> 37 -> NULL |
| 3 | NULL |
| 4 | NULL |

This structure shows linked lists at each bucket where collisions occurred.

***

### Insertion and Search in Chaining

- **Insertion:** Add new element at head or tail of linked list at the hashed index — constant time O(1).
- **Search:** Traverse linked list at the hashed index to find matching key — O(k) where k is length of chain at that bucket.

***

### Advantages of Chaining

- Efficient handling of collisions with simple linked lists.
- Performance is generally good if load factor is kept reasonable.
- The hash table is not limited by fixed size since chains can grow dynamically.
- Easy to implement and understand.

***

### Summary

Chaining effectively manages collisions by storing collided keys in linked lists for each hash table bucket. This approach allows multiple keys to coexist at the same index with straightforward insertion and search, preserving both simplicity and efficiency in hash table operations.

---
