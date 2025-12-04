# EventHandlingApplet.java

```java
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.MouseListener;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.KeyEvent;

// A demonstration applet for handling mouse and keyboard events interactively
public class EventHandlingApplet extends Applet implements MouseListener, KeyListener {

    // Message to display to the user
    private String message = "Interact with mouse or keyboard!";
    // Coordinates for where to display the message
    private int x = 20, y = 40;

    // Initialization: called once when the applet loads
    public void init() {
        // Register this applet to receive mouse and keyboard events
        addMouseListener(this);
        addKeyListener(this);

        // Enable keyboard events: applet must be focusable to receive key input
        setFocusable(true);
    }

    // The paint method draws the current message and coordinates
    public void paint(Graphics g) {
        g.drawString(message, x, y);
    }

    // MouseListener interface methods

    // Called when the mouse is clicked (pressed and released)
    public void mouseClicked(MouseEvent e) {
        // Get click coordinates and update message
        x = e.getX();
        y = e.getY();
        message = "Mouse clicked at (" + x + ", " + y + ")";
        repaint(); // Request a redraw right away
    }

    // Other MouseListener methods required by interface (but not used here)
    public void mousePressed(MouseEvent e) { }
    public void mouseReleased(MouseEvent e) { }
    public void mouseEntered(MouseEvent e) { }
    public void mouseExited(MouseEvent e) { }

    // KeyListener interface methods

    // Called when a key is pressed down
    public void keyPressed(KeyEvent e) {
        int keyCode = e.getKeyCode();
        message = "Key pressed: " + KeyEvent.getKeyText(keyCode);
        repaint();
    }

    // Other KeyListener methods required by interface (but not used here)
    public void keyReleased(KeyEvent e) { }
    public void keyTyped(KeyEvent e) { }
}
```


***

# EventHandlingApplet.html

```html
<html>
  <head>
    <title>Event Handling Applet Example</title>
  </head>
  <body>
    <!--
      This applet demonstrates mouse and keyboard event handling.
      code: the compiled Java class.
      width/height: the display area reserved for the applet.
      To interact, click inside the applet or press a key while it is focused.
    -->
    <applet code="EventHandlingApplet.class" width="400" height="150">
      Your browser does not support Java Applets.
    </applet>
  </body>
</html>
```


***