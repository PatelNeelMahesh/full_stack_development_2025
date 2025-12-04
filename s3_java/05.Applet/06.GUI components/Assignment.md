# Problem 1: Button Click Counter

**Task:**
Create a Java Swing application with a button labeled "Click Me!". Each time the button is clicked, increment and display a counter showing how many times it has been clicked.

**Requirements:**

- Use a `JButton` and implement an `ActionListener` for click events.
- Display the count in a `JLabel` below the button.
- Initialize the count to zero.
- Reset the count to zero when it reaches 10 and continue counting.

***

## Problem 2: Multi-Option Check Boxes

**Task:**
Design a GUI with at least three `JCheckBox` components, labeled "Option 1", "Option 2", and "Option 3".

**Requirements:**

- Display a message reflecting the current selections dynamically as boxes are checked or unchecked.
- Use an `ItemListener` to detect checkbox selection changes.
- Include a "Clear All" button that unchecks all checkboxes.

***

## Problem 3: Radio Button Group for Choices

**Task:**
Build a GUI that contains a group of three `JRadioButton`s labeled “Red”, “Green”, and “Blue” to select a color.

**Requirements:**

- Ensure mutual exclusivity using `ButtonGroup`.
- When a radio button is selected, change the background color of the window/panel to the selected color.
- Add a label to display the selected color’s name.

***

## Problem 4: Interactive Text Input Form

**Task:**
Create a GUI form using a `JTextField` for "Name" and a multi-line `JTextArea` for “Comments”.

**Requirements:**

- Add labels describing each text input area.
- Add a button labeled "Submit".
- On clicking "Submit", display the entered values in a dialog box.
- Use a `JScrollPane` to wrap the `JTextArea` to allow scrolling.

***

## Problem 5: Fruit Selection ComboBox

**Task:**
Build an application with a non-editable `JComboBox` listing several fruits (e.g., Apple, Banana, Mango, Orange).

**Requirements:**

- When a fruit is selected, display the selection in a label below the combo box.
- Implement an `ActionListener` to detect selection changes.
- Preselect "Apple" when the GUI is loaded.

***

## Problem 6: Animal List with Selection Events

**Task:**
Create a `JList` containing a list of animals (Dog, Cat, Bird, Fish).

**Requirements:**

- Allow single selection only.
- Display the selected animal name in a label below the list.
- Add scrollbars to the list using `JScrollPane`.
- Add a button "Show Selection" that shows a popup message with the currently selected animal.

***

## Problem 7: Label Styling and Custom Tooltip

**Task:**
Develop a GUI application featuring a `JLabel` that displays welcome text.

**Requirements:**

- Customize the font style, size, and color.
- Add a tooltip text that describes the purpose of the label.
- Change the label’s text color to a random color every time the label is clicked (use a mouse listener).

***

## Problem 8: Enable/Disable Components Interaction

**Task:**
Design a GUI with one checkbox labeled "Enable Inputs" and two input fields: a `JTextField` and a `JComboBox`.

**Requirements:**

- By default, disable the text field and combo box.
- When the checkbox is checked, enable both input fields.
- When unchecked, disable them again.
- Display a message or update a label showing the current enabled/disabled status.

***
