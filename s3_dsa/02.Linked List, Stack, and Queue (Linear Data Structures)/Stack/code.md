
```cpp
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// Function to return precedence of operators
int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    if (op == '^') return 3;
    return 0;
}

// Function to convert infix expression to postfix
string infixToPostfix(const string& infix) {
    stack<char> stk;
    string postfix = "";

    for (char ch : infix) {
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            postfix += ch;  // Operand goes directly to output
        }
        else if (ch == '(') {
            stk.push(ch);
        }
        else if (ch == ')') {
            while (!stk.empty() && stk.top() != '(') {
                postfix += stk.top();
                stk.pop();
            }
            if (!stk.empty()) stk.pop();  // Pop '(' from stack
        }
        else {  // Operator
            while (!stk.empty() && precedence(ch) <= precedence(stk.top())) {
                postfix += stk.top();
                stk.pop();
            }
            stk.push(ch);
        }
    }
    // Pop all remaining operators from stack
    while (!stk.empty()) {
        postfix += stk.top();
        stk.pop();
    }

    return postfix;
}

// Function to convert infix expression to prefix
string infixToPrefix(const string& infix) {
    string reversedInfix = "";
    // Reverse the infix expression
    for (int i = infix.length() - 1; i >= 0; i--) {
        if (infix[i] == '(') reversedInfix += ')';
        else if (infix[i] == ')') reversedInfix += '(';
        else reversedInfix += infix[i];
    }

    string reversedPostfix = infixToPostfix(reversedInfix);

    // Reverse the postfix to get prefix
    string prefix = "";
    for (int i = reversedPostfix.length() - 1; i >= 0; i--) {
        prefix += reversedPostfix[i];
    }
    return prefix;
}

int main() {
    cout << "======================" << endl;
    cout << "        Stack          " << endl;
    cout << "======================" << endl << endl;

    cout << "Introduction to Stack" << endl;
    cout << "---------------------" << endl;
    cout << "A stack is a linear data structure following LIFO (Last In First Out)." << endl << endl;

    cout << "**Operations:**" << endl;
    cout << "---------------" << endl;

    cout << "PUSH Operation Algorithm:" << endl;
    cout << "1. Check if stack is full." << endl;
    cout << "2. If full, report overflow." << endl;
    cout << "3. Else increment top and insert element." << endl << endl;

    cout << "POP Operation Algorithm:" << endl;
    cout << "1. Check if stack is empty." << endl;
    cout << "2. If empty, report underflow." << endl;
    cout << "3. Else remove top element and decrement top." << endl << endl;

    stack<char> stk;
    cout << "Demonstration of stack push and pop:" << endl;
    stk.push('A');
    stk.push('B');
    stk.push('C');
    cout << "Pushed elements: A, B, C" << endl;
    cout << "Current top element: " << stk.top() << endl;
    stk.pop();
    cout << "After one pop, new top element: " << stk.top() << endl << endl;

    cout << "**Applications:**" << endl;
    cout << "----------------" << endl;
    cout << "1. Expression Evaluation" << endl;
    cout << "2. Expression Conversion (Infix, Prefix, Postfix)" << endl << endl;

    cout << "Expression Conversion Using Stack" << endl;
    cout << "---------------------------------" << endl;

    string infixExpr = "(A-B/C)*(A/K-L)";
    cout << "Infix Expression: " << infixExpr << endl;

    string postfixExpr = infixToPostfix(infixExpr);
    cout << "Postfix Expression: " << postfixExpr << endl;

    string prefixExpr = infixToPrefix(infixExpr);
    cout << "Prefix Expression: " << prefixExpr << endl;

    return 0;
}
```


***

### Expected Console Output (README style)

```
======================
        Stack          
======================

Introduction to Stack
---------------------
A stack is a linear data structure following LIFO (Last In First Out).

**Operations:**
---------------
PUSH Operation Algorithm:
1. Check if stack is full.
2. If full, report overflow.
3. Else increment top and insert element.

POP Operation Algorithm:
1. Check if stack is empty.
2. If empty, report underflow.
3. Else remove top element and decrement top.

Demonstration of stack push and pop:
Pushed elements: A, B, C
Current top element: C
After one pop, new top element: B

**Applications:**
----------------
1. Expression Evaluation
2. Expression Conversion (Infix, Prefix, Postfix)

Expression Conversion Using Stack
---------------------------------
Infix Expression: (A-B/C)*(A/K-L)
Postfix Expression: ABC/-AK/L-*
Prefix Expression: *-A/BC-/AKL
```


***
