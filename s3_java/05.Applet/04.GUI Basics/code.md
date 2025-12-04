# MyGuiApp.java

```java
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JLabel;
import java.awt.FlowLayout;

// Main class for demonstrating basic Swing GUI components
public class MyGuiApp extends javax.swing.JApplet {

    // The init method is called by the browser or applet viewer to start the applet
    public void init() {
        try {
            // Run GUI initialization on the event-dispatching thread for thread safety
            javax.swing.SwingUtilities.invokeAndWait(new Runnable() {
                public void run() {
                    createGUI();
                }
            });
        } catch (Exception e) {
            System.err.println("GUI creation failed: " + e);
        }
    }

    // Method to build GUI components inside the applet
    private void createGUI() {
        // Step 1: Create a panel with FlowLayout to hold components sequentially
        JPanel panel = new JPanel(new FlowLayout());

        // Step 2: Create GUI components - button and label
        JButton button = new JButton("Click Me");
        JLabel label = new JLabel("Hello, GUI!");

        // Step 3: Add components to the panel
        panel.add(button);
        panel.add(label);

        // Step 4: Add the panel to the applet's content pane
        this.getContentPane().add(panel);
    }
}
```


***

# MyGuiApp.html

```html
<html>
  <head>
    <title>My GUI Applet</title>
  </head>
  <body>
    <!--
      Embed the Swing applet using the <applet> tag.
      The code attribute specifies the compiled class file.
      Width and height set the applet display size.
    -->
    <applet code="MyGuiApp.class" width="400" height="200">
      Your browser does not support Java Applets.
    </applet>
  </body>
</html>
```


***