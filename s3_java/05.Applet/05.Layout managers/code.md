# LayoutExample.java

```java
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import javax.swing.JButton;
import javax.swing.JApplet;
import javax.swing.JPanel;

// This applet demonstrates FlowLayout, BorderLayout, and GridLayout in a single GUI
public class LayoutExample extends JApplet {

    public void init() {
        // Java Swing requires GUI code to run on the EDT (Event Dispatch Thread) for thread safety
        try {
            javax.swing.SwingUtilities.invokeAndWait(new Runnable() {
                public void run() {
                    createAndShowGUI();
                }
            });
        } catch (Exception e) {
            System.err.println("GUI creation failed: " + e);
        }
    }

    private void createAndShowGUI() {
        // Create a panel with FlowLayout (left-aligned, horizontal gap 10, vertical gap 20)
        JPanel flowPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 20));
        flowPanel.add(new JButton("Flow Btn 1"));
        flowPanel.add(new JButton("Flow Btn 2"));
        flowPanel.add(new JButton("Flow Btn 3"));
        flowPanel.add(new JButton("Flow Btn 4"));
        flowPanel.add(new JButton("Flow Btn 5"));
        flowPanel.add(new JButton("Flow Btn 6"));

        // Create a panel with GridLayout, 2 rows x 3 columns, with gaps
        JPanel gridPanel = new JPanel(new GridLayout(2, 3, 10, 15));
        for (int i = 1; i <= 6; i++) {
            gridPanel.add(new JButton("Grid Btn " + i));
        }

        // Set the applet's layout to BorderLayout with horizontal and vertical gaps
        getContentPane().setLayout(new BorderLayout(5, 5));
        // Add panels and a button to the BorderLayout positions
        getContentPane().add(flowPanel, BorderLayout.NORTH);
        getContentPane().add(gridPanel, BorderLayout.CENTER);
        getContentPane().add(new JButton("South Button"), BorderLayout.SOUTH);
    }
}
```


***
# LayoutExample.html

```html
<html>
  <head>
    <title>Layout Managers Applet</title>
  </head>
  <body>
    <!-- 
         Embed the compiled LayoutExample applet below 
         Set width and height according to the content size
    -->
    <applet code="LayoutExample.class" width="600" height="400">
      Your browser does not support Java applets.
    </applet>
  </body>
</html>
```


***