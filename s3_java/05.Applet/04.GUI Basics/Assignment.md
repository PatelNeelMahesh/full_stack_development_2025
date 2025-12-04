# Problem 1: JFrame with JPanel Containing Components

**Task:**
Write a Java Swing application that creates a `JFrame` with a `JPanel` inside. Put a `JButton` and a `JLabel` on the panel.

**Requirements:**

- Use `FlowLayout` for the panel.
- The button should be labeled "Click Me".
- The label should show "Hello, GUI!" initially.
- Frame size should be 400x200 pixels.
- Set the frame to exit the application on close.

***

## Problem 2: Frame vs Panel Event Handling

**Task:**
Create an application where clicking the button inside the panel updates the label text to "Button Clicked!".

**Requirements:**

- Use an `ActionListener` to respond to button clicks.
- The label should update dynamically inside the panel only.
- Frame should remain the main application window.

***

## Problem 3: Nested Panels for Grouping

**Task:**
Design a GUI with a main frame and two nested panels:

- The first panel contains two buttons side by side.
- The second panel contains two labels side by side.

**Requirements:**

- Use appropriate layout managers to achieve horizontal grouping.
- Add both panels into the main frame vertically.

***

## Problem 4: Customizing Frame Properties

**Task:**
Write a program to modify JFrame properties:

- Change the title to "Custom Frame".
- Resize frame to 500x300 pixels.
- Make the frame non-resizable.
- Set background color of the frame’s content pane.

***

## Problem 5: Dynamic Label Updates

**Task:**
Develop GUI where multiple buttons are placed on panel. Clicking each button updates a single label showing which button was pressed.

**Requirements:**

- 3 buttons named "Alpha", "Beta", "Gamma".
- Label initially empty.
- Use a single action listener or lambda expressions.

***

## Problem 6: Layout Manager Impact

**Task:**
Create the same GUI with button-label groups but using three different layout managers: FlowLayout, BorderLayout, GridLayout. Observe and report differences.

**Requirements:**

- Implement three versions of the application.
- Each uses one layout manager on the panel.
- Submit findings on component arrangement differences.

***

## Problem 7: Frame Hierarchy Visualization

**Task:**
Provide a visual representation (using ASCII art or Java Graphics) of the JFrame containing nested panels and components like buttons and labels.

**Requirements:**

- Dynamically draw the window and container hierarchy.
- Use comments to explain each level.

***

## Problem 8: Multi-Window Application

**Task:**
Create a main JFrame and a separate JFrame window that opens when a button in the main window is clicked.

**Requirements:**

- Main window contains a button "Open Dialog".
- Clicking opens a new smaller window with a message label.
- Both windows should be independently movable and closable.

***