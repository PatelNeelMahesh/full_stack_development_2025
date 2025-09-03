# Stack


***

## Introduction to Stack

A **Stack** is a linear data structure following the **Last In, First Out (LIFO)** principle, meaning the last element added is the first one to be removed. Stacks manage data in a way similar to a stack of plates—only the top plate is accessible.

Stacks are fundamental in computer science, used for function call management, expression evaluation, backtracking, and more.

***

## Stack Operations

***

### 1. PUSH Operation


***

**Purpose:** Insert an element onto the **top** of the stack.

***

### Algorithm Steps (Push):

1. **Check Overflow:**
If `top == maxSize - 1`, the stack is full — report overflow.
2. **Increment Top:**
Move the top pointer up by one to the next free position.
3. **Insert Element:**
Place data at `stack[top]`.
4. **Confirm Push:**
Output a success message.

***

### Code:

```cpp
void push(int stack[], int &top, int maxSize, int data) {
    if (top == maxSize - 1) {                // Step 1: Overflow check
        cout << "Stack Overflow\n";
    } else {
        top++;                              // Step 2: Increment top
        stack[top] = data;                  // Step 3: Insert at top
        cout << "Element pushed: " << data << endl; // Step 4: Confirmation
    }
}
```


***

### Visual Representation:

If maxSize = 5 and stack is empty (top = -1):

```
Index:  0    1    2    3    4
Stack: [ ]  [ ]  [ ]  [ ]  [ ]
Top: -1
```

- After pushing 10:

```
Index:  0    1    2    3    4
Stack: [10] [ ]  [ ]  [ ]  [ ]
Top: 0
```

Each new push moves `top` index higher with the element stored on top.

***

### Time and Space Complexity:

- **Time Complexity:** $O(1)$ — direct insertion, no traversal.
- **Space Complexity:** $O(1)$ — new element stored within existing array space.

***

### 2. POP Operation


***

**Purpose:** Remove and return the element from the **top** of the stack.

***

### Algorithm Steps (Pop):

1. **Check Underflow:**
If `top == -1`, the stack is empty — report underflow.
2. **Retrieve Element:**
Read element at `stack[top]`.
3. **Decrement Top:**
Move the top pointer down by one.
4. **Return Element:**
Return the popped element.

***

### Code:

```cpp
int pop(int stack[], int &top) {
    if (top == -1) {                     // Step 1: Underflow check
        cout << "Stack Underflow\n";
        return -1;                      // Indicate error
    } else {
        int poppedElement = stack[top];  // Step 2: Retrieve top element
        top--;                          // Step 3: Decrement top
        return poppedElement;            // Step 4: Return it
    }
}
```


***

### Visual Representation:

Continuing from previous stack state with elements:

```
Index:  0    1    2    3    4
Stack: [10]   [ ]  [ ]
Top: 2
```

- Pop operation will return 30 and decrement top to 1.

***

### Time and Space Complexity:

- **Time Complexity:** $O(1)$ — direct removal, no traversal.
- **Space Complexity:** $O(1)$.

***

### 3. Complete Stack Example (Push \& Pop) in C++:


***

```cpp
#include <iostream>
using namespace std;

#define MAX 5

int main() {
    int stack[MAX];
    int top = -1;

    // Push elements onto stack
    for (int i = 1; i <= 5; i++) {
        if (top == MAX - 1) {
            cout << "Stack Overflow\n";
        } else {
            stack[++top] = i * 10;
            cout << "Pushed: " << stack[top] << endl;
        }
    }

    // Pop elements from stack
    while (top != -1) {
        cout << "Popped: " << stack[top--] << endl;
    }

    cout << "Stack is empty now\n";
    return 0;
}
```


***

### Explanation:

- Initially, `top` is -1 indicating an empty stack.
- Elements 10, 20, 30, 40, 50 are sequentially pushed.
- When full, further push calls are rejected with an overflow message.
- Popping removes elements beginning from the last inserted (LIFO).
- After all pops, stack empties, and a confirmation message is shown.

***

### Summary Table: Stack Operations Complexity

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| Push | $O(1)$ | $O(1)$ |
| Pop | $O(1)$ | $O(1)$ |


***

## Applications of Stack

### 1. Expression Evaluation

Stacks are used to evaluate expressions, particularly those in postfix notation (Reverse Polish Notation). Operands are pushed onto the stack; operators pop operands, perform calculations, and push results.

### 2. Expression Conversion

Stacks facilitate conversion between infix, postfix, and prefix expressions, enabling easy evaluation and parsing.

***

## Expression Conversion: Infix, Prefix, Postfix

Expressions appear in three common forms:


| Notation | Example | Order of Operators |
| :-- | :-- | :-- |
| Infix | `A + B * C` | Operators between operands |
| Prefix | `+ A * B C` | Operators before operands |
| Postfix | `A B C * +` | Operators after operands |


***

### Why Conversion is Needed

- Infix expressions require precedence rules and parentheses for expression evaluation.
- Prefix/Postfix forms eliminate the need for parentheses and operator precedence is implicit.
- Postfix expressions are easier to evaluate using stacks.

***

### Infix to Postfix Conversion Algorithm

Use a stack to reorder operators based on precedence and associativity.

1. Scan infix expression left to right.
2. If an operand (A-Z or 0-9), add it directly to output.
3. If `(`, push onto stack.
4. If `)`, pop operators from stack to output until `(` is encountered; discard both parentheses.
5. If operator encountered:
    - Pop from stack to output all operators with higher or equal precedence.
    - Push current operator onto stack.
6. After the entire infix expression is scanned, pop all remaining operators to output.

***

### Operator Precedence and Associativity

| Operator | Precedence | Associativity |
| :-- | :-- | :-- |
| `^` | Highest | Right to Left |
| `*`, `/` | Higher | Left to Right |
| `+`, `-` | Lowest | Left to Right |


***

### Code for Infix to Postfix Conversion

```cpp
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// Function to return precedence
int precedence(char op) {
    if(op == '^') return 3;
    if(op == '*' || op == '/') return 2;
    if(op == '+' || op == '-') return 1;
    return 0;
}

// Function to check if character is operand
bool isOperand(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || isdigit(c);
}

// Infix to Postfix conversion function
string infixToPostfix(string infix) {
    stack<char> st;
    string postfix = "";

    for (char& ch : infix) {
        if (ch == ' ') continue;  // Skip spaces

        if (isOperand(ch)) {
            postfix += ch;
        } else if (ch == '(') {
            st.push(ch);
        } else if (ch == ')') {
            while (!st.empty() && st.top() != '(') {
                postfix += st.top();
                st.pop();
            }
            if (!st.empty()) st.pop();  // Remove '('
        } else {  // Operator encountered
            while (!st.empty() && precedence(st.top()) >= precedence(ch)) {
                postfix += st.top();
                st.pop();
            }
            st.push(ch);
        }
    }

    while (!st.empty()) {
        postfix += st.top();
        st.pop();
    }

    return postfix;
}

int main() {
    string infix = "A+B*C";
    string postfix = infixToPostfix(infix);
    cout << "Infix Expression: " << infix << endl;
    cout << "Postfix Expression: " << postfix << endl;
    return 0;
}
```


***

### Step-by-Step Working of Infix to Postfix on `A+B*C`

| Step | Character | Stack Content | Postfix Output |
| :-- | :-- | :-- | :-- |
| 1 | A | (empty) | A |
| 2 | + | + | A |
| 3 | B | + | AB |
| 4 | * | + * | AB |
| 5 | C | + * | ABC |
| End | (pop all) | (empty) | ABC*+ |


***

### Benefits of Using Stack in Expression Conversion

- Enables handling operator precedence naturally.
- Supports parentheses evaluation.
- Simplifies expression evaluation by transforming into postfix.

***

## Summary Table: Stack Operations and Expression Conversion

| Topic | Details |
| :-- | :-- |
| Stack Principle | LIFO (Last In, First Out) |
| PUSH Operation | Insert element at top of stack |
| POP Operation | Remove element from top of stack |
| Expression Evaluation | Evaluate postfix expressions using stack |
| Infix to Postfix Conversion | Convert infix to postfix using stack based on precedence and associativity |


***

