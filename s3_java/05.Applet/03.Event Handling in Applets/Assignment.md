# Problem 1: Mouse Click Coordinate Display

**Task:**
Create a Java applet that listens for mouse clicks. Every time the applet area is clicked, display the coordinates of the mouse pointer inside the applet.

**Requirements:**

- Implement `MouseListener`.
- Display updated coordinates (x, y) on the applet.
- Use `repaint()` to refresh the display after each click.

***

## Problem 2: Key Press Name Display

**Task:**
Extend the applet to listen for keyboard key presses. Display the name of the key pressed inside the applet window.

**Requirements:**

- Implement `KeyListener`.
- Show the key name using `KeyEvent.getKeyText()`.
- Ensure the applet is focusable to detect key presses.

***

## Problem 3: Mouse Enter and Exit Feedback

**Task:**
Add mouse event handlers to detect when the mouse pointer enters and leaves the applet area. Display messages such as "Mouse entered" or "Mouse exited" accordingly.

**Requirements:**

- Implement `mouseEntered()` and `mouseExited()` methods.
- Update a status message shown on the applet.
- Messages should clear or change as mouse moves in and out.

***

## Problem 4: Mouse Press and Release Detection

**Task:**
Handle mouse pressed and released events. Display messages like "Mouse pressed" or "Mouse released" along with the coordinates where the event occurred.

**Requirements:**

- Implement `mousePressed()` and `mouseReleased()`.
- Show messages and coordinates on the applet.
- Ensure smooth real-time updates.

***

## Problem 5: Key Typed and Released Handling

**Task:**
Respond to `keyTyped` and `keyReleased` events by showing a count of how many times keys have been typed and released during the applet session.

**Requirements:**

- Maintain two counters, one for typed and one for released keys.
- Display the counts dynamically in the applet.
- Use appropriate listener methods for updating counts.

***

## Problem 6: Combined Mouse and Keyboard Event Display

**Task:**
Create an applet that shows the last event type occurred: mouse click, key press, mouse enter, or mouse exit, updating dynamically.

**Requirements:**

- Implement both `MouseListener` and `KeyListener`.
- Keep a message string updated with the last event description.
- Use the applet's `paint()` method to show messages.

***

## Problem 7: Event-driven Color Changing Applet

**Task:**
Make the applet background color change on specific events: mouse clicked (change to red), key pressed (change to green), mouse entered (change to blue), mouse exited (change to gray).

**Requirements:**

- Override `update()` or use `repaint()` properly.
- Use event methods to change background color.
- Display the current color name as text in the applet.

***

## Problem 8: Event Handling with Sound or Visual Cue

**Task:**
Add sound or visual feedback for a mouse click or key press event in the applet.

**Requirements:**

- Play a beep or flash a graphical element when an event is detected.
- Use Java's built-in sound libraries or draw graphics inside `paint()`.
- Ensure event handling and feedback happen simultaneously.

***
