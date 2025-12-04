# Problem 1: FlowLayout Toolbar Simulation

**Task:**
Create a toolbar-like panel using `FlowLayout` with left alignment, 10 pixels horizontal gap, and 20 pixels vertical gap. Add six buttons labeled "Button 1" to "Button 6". Buttons should wrap to the next line if the window is resized and becomes too narrow.

**Requirements:**

- Use `JPanel` with `FlowLayout`.
- Display all buttons with appropriate spacing.
- Ensure wrapping behavior when the window width is reduced.

***

## Problem 2: BorderLayout Main Frame

**Task:**
Design a main application window using `BorderLayout` with 5 pixels horizontal and vertical gaps. Add buttons to all five regions with labels "North", "South", "East", "West", and "Center".

**Requirements:**

- Use `JFrame` with `BorderLayout`.
- Place a button in each region.
- Window resizing should keep layout consistent with gaps.

***

## Problem 3: GridLayout Number Pad

**Task:**
Build a number pad GUI using `GridLayout` with 4 rows and 3 columns, 10 pixels horizontal gap and 15 pixels vertical gap. Fill the grid with buttons numbered from 1 to 12 (use labels 1-9, "*", 0, "\#").

**Requirements:**

- Use `JPanel` with `GridLayout`.
- Buttons should fill all grid cells equally.
- Add padding between buttons using gaps.

***

## Problem 4: Mixed Layout Container

**Task:**
Create a `JFrame` layout where the top part (North) is a `FlowLayout` panel containing three labeled buttons, and the center is a `GridLayout` panel with 2 rows and 2 columns holding four text fields. Add a button at the bottom (South) in the `BorderLayout`.

**Requirements:**

- Use nested layouts: `BorderLayout` on the frame.
- Top panel uses `FlowLayout`.
- Center panel uses `GridLayout`.
- Bottom has a single button across full width.

***

## Problem 5: Responsive FlowLayout Forms

**Task:**
Design a form using `FlowLayout` where inputs (text fields and labels) line up horizontally but wrap gracefully when resizing the window smaller.

**Requirements:**

- Use `FlowLayout` with center alignment and 5 px gaps.
- Add at least four input fields with labels.
- Window resizing should cause inputs to wrap to new lines as needed.

***

## Problem 6: Dashboard Using BorderLayout and GridLayout

**Task:**
Create a dashboard GUI where the main window uses `BorderLayout`. The top panel (North) shows a status label. The center panel uses `GridLayout` arranged in 3 rows and 2 columns with six buttons representing controls.

**Requirements:**

- Status label spans full width at the top using `BorderLayout`.
- 6 buttons evenly spaced in center using `GridLayout`.
- Add 10 pixel gaps in `GridLayout`.

***

## Problem 7: Customizing FlowLayout Alignments

**Task:**
Develop a GUI to demonstrate all three `FlowLayout` alignments: LEFT, CENTER, and RIGHT. Use three separate panels stacked vertically each showing five buttons aligned according to the layout type.

**Requirements:**

- Each panel uses `FlowLayout` with a distinct alignment.
- Buttons have labels indicating the panel alignment.
- Panels stacked with vertical gap spacing.

***

## Problem 8: Dynamic GridLayout Adjustment

**Task:**
Create a resizable window with a `GridLayout` panel that changes the number of rows dynamically based on the number of buttons added (start with 4 buttons in 2 rows x 2 columns).

**Requirements:**

- Grid updates rows/columns dynamically as buttons are added/removed.
- Provide control buttons to add or remove buttons from the grid.
- Grid cells remain uniform in size with 5px gaps.

***