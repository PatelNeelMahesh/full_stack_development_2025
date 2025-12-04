# JavaScript Objects

### What is an Object?

An object in JavaScript is a collection of key-value pairs, similar to a dictionary or hash map in other programming languages. Objects are used to store and organize data, and they can contain properties (data) and methods (functions). Objects are reference types and are fundamental to JavaScript programming.

**Key Characteristics:**

- **Unordered**: Properties don't maintain insertion order (though modern JS engines preserve it)
- **Key-Value**: Each property has a name (key) and value
- **Dynamic**: Can add, modify, or delete properties at runtime
- **Flexible**: Can store any data type as values, including other objects


---

## Key-Value Pairs

#### Creating Objects

```javascript
// Object Literal (Most Common)
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Object Constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

// Object with methods
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

// Nested objects
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
  employees: ["John", "Jane", "Bob"],
};
```

#### Accessing Object Properties

```javascript
const person = {
  name: "John",
  age: 30,
  "favorite color": "blue", // Property with space
};

// Access using dot notation
console.log(person.name); // 'John'
console.log(person.age); // 30

// Access using bracket notation
console.log(person["name"]); // 'John'
console.log(person["favorite color"]); // 'blue'

// Dynamic property access
const propertyName = "age";
console.log(person[propertyName]); // 30
```

---

##  Dot vs Bracket Notation

#### Dot Notation (.)

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Use dot notation when:
console.log(person.name);    // Property name is known and valid identifier
console.log(person.city);    // Simple property access

// Cannot use dot notation for:
console.log(person.favorite color); // SyntaxError - space in property name
console.log(person['age']);         // Must use brackets for dynamic access
```

#### Bracket Notation []

```javascript
const person = {
  name: "John",
  age: 30,
  "favorite color": "blue",
  "special-property": "value",
};

// ✅ Use bracket notation when:
console.log(person["name"]); // Dynamic property access
console.log(person["favorite color"]); // Property name with special characters
console.log(person["special-property"]); // Property name with hyphens

// Dynamic property access
const propertyName = "age";
console.log(person[propertyName]); // 30

// Computed property names
const key = "dynamicKey";
const obj = {
  [key]: "dynamic value",
};
console.log(obj.dynamicKey); // 'dynamic value'
```

#### When to Use Which?

```javascript
const user = {
  name: "John",
  age: 30,
  "user-role": "admin",
  "special data": "secret",
};

// Dot notation - for simple, known property names
console.log(user.name); // ✅ 'John'
console.log(user.age); // ✅ 30

// Bracket notation - for dynamic or special property names
console.log(user["user-role"]); // ✅ 'admin'
console.log(user["special data"]); // ✅ 'secret'

// Dynamic access
const properties = ["name", "age", "user-role"];
properties.forEach((prop) => {
  console.log(user[prop]); // Works with both simple and special names
});
```

---

## 🔧 Object Methods

### Understanding Object Methods

Object methods are built-in functions that help you work with objects more effectively. They provide ways to:

- Extract data from objects (keys, values, entries)
- Copy or merge objects
- Check object properties
- Convert between objects and other data structures

**Common Use Cases:**

- **Iteration**: Loop through object properties
- **Data Transformation**: Convert objects to arrays or vice versa
- **Object Manipulation**: Copy, merge, or modify objects safely
- **Validation**: Check if properties exist or have certain values

#### Object.keys() - Get All Property Names

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
};

// Get all property names (keys)
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city', 'email']

// Use with forEach
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Check if object has specific property
console.log(Object.keys(person).includes("name")); // true
console.log(Object.keys(person).length); // 4
```

#### Object.values() - Get All Property Values

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
};

// Get all property values
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York', 'john@example.com']

// Calculate sum of numeric values
const numbers = { a: 1, b: 2, c: 3, d: 4 };
const sum = Object.values(numbers).reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

#### Object.entries() - Get Key-Value Pairs as Arrays

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get key-value pairs as arrays
const entries = Object.entries(person);
console.log(entries);
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Convert to object from entries
const newPerson = Object.fromEntries(entries);
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }

// Transform entries
const transformed = Object.entries(person).map(([key, value]) => {
  return [key.toUpperCase(), value];
});
console.log(transformed); // [['NAME', 'John'], ['AGE', 30], ['CITY', 'New York']]
```

#### Object.assign() - Copy/Merge Objects

```javascript
// Copy object
const original = { name: "John", age: 30 };
const copy = Object.assign({}, original);
console.log(copy); // { name: 'John', age: 30 }

// Merge multiple objects
const person = { name: "John" };
const details = { age: 30, city: "New York" };
const merged = Object.assign({}, person, details);
console.log(merged); // { name: 'John', age: 30, city: 'New York' }

// Add properties to existing object
const user = { name: "John" };
Object.assign(user, { age: 30, email: "john@example.com" });
console.log(user); // { name: 'John', age: 30, email: 'john@example.com' }

// Deep merge (nested objects)
const obj1 = { a: 1, nested: { b: 2 } };
const obj2 = { c: 3, nested: { d: 4 } };
const deepMerge = Object.assign({}, obj1, obj2);
console.log(deepMerge); // { a: 1, c: 3, nested: { d: 4 } } (nested.b is lost!)

const obj1 = { a: 1, nested: { b: 2 } };
const obj2 = { c: 3, nested: { d: 4 } };

const merged = {
  ...obj1,
  ...obj2,
  nested: { ...obj1.nested, ...obj2.nested },
};

console.log(merged);
```

#### Object.freeze() - makes an object immutable.

- Object.freeze(obj) makes an object immutable.
- You cannot add, delete, or modify properties.
- The object becomes read-only.
- Shallow: only the first level is frozen; nested objects are still mutable unless frozen separately.

```javascript
const user = { name: "Alice", age: 25 };
Object.freeze(user);

user.age = 30; //  ignored
user.city = "NY"; //  ignored
delete user.name; //  ignored

console.log(user);
// { name: "Alice", age: 25 }
```

#### Object.seal() - prevents adding or deleting properties, but existing properties can still be modified

- Object.seal(obj) prevents adding or deleting properties, but existing properties can still be modified.
- You cannot add new properties.
- You cannot delete existing properties.
- You can still change values of existing properties.
- Also shallow, like freeze.

```javascript
const user = { name: "Bob", age: 30 };
Object.seal(user);

user.age = 35; //  allowed
user.city = "NY"; //  ignored
delete user.name; //  ignored

console.log(user);
// { name: "Bob", age: 35 }
```

---

## 🔀 Destructuring

### Destructuring is a syntax to extract values from arrays or properties from objects into distinct variables in a concise way.

- Instead of accessing elements one by one, you can “unpack” them directly.

#### Object Destructuring

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
};

// Basic object destructuring
const { name, age, city } = person;
console.log(name); // 'John'
console.log(age); // 30
console.log(city); // 'New York'

// Different variable names
const { name: personName, age: personAge } = person;
console.log(personName); // 'John'
console.log(personAge); // 30

// Default values
const { name, age, country = "USA" } = person;
console.log(country); // 'USA'

// Nested object destructuring
const user = {
  name: "John",
  details: {
    age: 30,
    address: {
      city: "New York",
      zipCode: "10001",
    },
  },
};

const {
  details: {
    address: { city, zipCode },
  },
} = user;
console.log(city); // 'New York'
console.log(zipCode); // '10001'
```

#### Array Destructuring (Related to Objects)

```javascript
// Basic array destructuring
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'orange'

// Skip elements
const numbers = [1, 2, 3, 4, 5];
const [firstNum, , thirdNum, , fifthNum] = numbers;

console.log(firstNum); // 1
console.log(thirdNum); // 3
console.log(fifthNum); // 5

// Rest operator with destructuring
const fruits = ["apple", "banana", "orange"];
const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit); // 'apple'
console.log(restFruits); // ['banana', 'orange']

// Default values
const [a, b, c = "default"] = [1, 2];
console.log(a, b, c); // 1, 2, 'default'
```

#### Function Parameters Destructuring

```javascript
// Object destructuring in function parameters
function printPerson({ name, age, city }) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

const person = { name: "John", age: 30, city: "New York" };
printPerson(person); // John is 30 years old and lives in New York

// Default parameters with destructuring
function createUser({ name, age, city = "Unknown", country = "USA" } = {}) {
  return { name, age, city, country };
}

console.log(createUser({ name: "John", age: 30 })); // { name: 'John', age: 30, city: 'Unknown', country: 'USA' }
```

### why = {} is needed in your function

```javascript
function createUser({ name, age, city = "Unknown", country = "USA" } = {}) { ... }
```

### Problem without = {}

#### If you call the function without an argument:

```javascript
createUser();
```

### JavaScript tries to do this internally:

```javascript
const { name, age, city, country } = undefined;
```

### This throws an error:

```javascript
TypeError: Cannot destructure property 'name' of 'undefined' as it is undefined.
```

---

##  Interview Questions & Answers


**Q1: What are the different ways to create objects in JavaScript?**

```
Answer: Multiple ways to create objects:

1. Object Literal (Most Common)
const obj = { name: 'John', age: 30 };

2. Object Constructor
const obj = new Object();
obj.name = 'John';

3. Constructor Function
function Person(name) { this.name = name; }
const person = new Person('John');

4. Object.create()
const obj = Object.create({ inherited: 'property' });
```


**Q2: What is the difference between dot notation and bracket notation?**

```
Answer: Both access object properties, but:
- Dot notation: Use when property name is known and valid identifier
- Bracket notation: Use for dynamic access or special property names

Example:
const obj = { name: 'John', 'special-prop': 'value' };

console.log(obj.name);              // ✅ 'John'
console.log(obj['special-prop']);   // ✅ 'value'
console.log(obj['name']);           // ✅ 'John' (dynamic)
```

**Q3: What do Object.keys(), Object.values(), and Object.entries() return?**

```
Answer:
- Object.keys(obj): Returns array of property names (keys)
- Object.values(obj): Returns array of property values
- Object.entries(obj): Returns array of [key, value] pairs

Example:
const person = { name: 'John', age: 30 };

Object.keys(person);     // ['name', 'age']
Object.values(person);   // ['John', 30]
Object.entries(person);  // [['name', 'John'], ['age', 30]]
```

**Q4: Explain destructuring in JavaScript.**

```
Answer: Destructuring extracts values from arrays/objects into variables.

Object destructuring:
const { name, age } = { name: 'John', age: 30 };

Array destructuring:
const [a, b] = [1, 2]; // a=1, b=2

```

**Q5: What is the difference between Object.freeze() and Object.seal()?**

```
Answer: Both restrict object modifications, but differently:

Object.freeze():
- Makes object completely immutable
- Cannot add, delete, or modify properties
- Property values cannot be changed
- Object.isFrozen(obj) returns true
- Use freeze when you want a completely immutable object.

Object.seal():
- Can modify existing property values
- Cannot add new properties or delete existing ones
- Object.isSealed(obj) returns true
- Use seal when you want to prevent structural changes but allow updates to existing data.

Example:
const obj = { a: 1, b: 2 };

// Freeze - completely immutable
const frozen = Object.freeze(obj);
frozen.a = 10; // No effect, still 1
delete frozen.b; // No effect, still exists

// Seal - can modify values but not structure
const sealed = Object.seal(obj);
sealed.a = 10; // Works, a is now 10
delete sealed.b; // No effect, still exists
// sealed.c = 3; // Cannot add new properties
```

---
