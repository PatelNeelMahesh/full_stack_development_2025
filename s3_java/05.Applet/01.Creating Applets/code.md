# HelloApplet.java (Applet Source File)

```java
import java.applet.Applet;     // Import Applet class for applet support
import java.awt.Graphics;      // Import Graphics class for drawing output

// The HelloApplet applet displays a text message passed from the HTML file via parameters
public class HelloApplet extends Applet {

    // Holds the message fetched from the HTML file through <param>
    private String message;

    // Applet initialization: this executes ONCE when the applet loads
    public void init() {
        // Fetch the "msg" parameter using HTML <param> tag within <applet>
        message = getParameter("msg");
        
        // Handling null parameter: fallback message is useful for debugging or missing data
        if (message == null) {
            message = "No message provided";   // Show a default message if none is set
        }
    }

    // The paint method: called whenever display is updated, to redraw applet contents
    public void paint(Graphics g) {
        // Draw the string inside the applet window at coordinates (20, 20)
        g.drawString(message, 20, 20);
        
        // Optionally, visualize some instructional border or background:
        // g.drawRect(5, 5, 290, 40);   // Uncomment for a visual box around the message
        
        // Displaying the applet name and parameter key
        g.drawString("Applet: HelloApplet", 20, 40);
        g.drawString("Param key: msg", 20, 60);
        g.drawString("Current value:", 20, 80);
        g.drawString(message, 40, 100);       // Redraw main message lower as well
    }
}
```


***

# HelloApplet.html (HTML Embedding File)

```html
<html>
  <head>
    <title>Java Applet Parameter Demonstration</title>
  </head>
  <body>
    <!--
      The <applet> tag loads the compiled applet HelloApplet.class.
      The width and height attributes set the applet's display size.
      <param> tags pass data to the applet; each has a name and value.
      Multiple <param> tags can be used for different data.
    -->
    <applet code="HelloApplet.class" width="320" height="120">
      <!-- Pass a message parameter to the applet -->
      <param name="msg" value="Welcome to Java Applets!"/>
      <!-- Demonstration parameters can be added for future scalability -->
      <!-- <param name="other" value="Additional parameter"/> -->

      <!-- Message for browsers without Java support -->
      Your browser does not support Java Applets.
    </applet>
  </body>
</html>
```


***

## How The Code Works

- **import java.applet.Applet;**: Ensures the class gets required lifecycle methods (`init()`, `paint()`) and parameter support.
- **getParameter("msg")**: Retrieves the string value for the parameter named `msg` configured in the HTML file, making it dynamically alterable without recompiling code.
- **paint(Graphics g)**: Renders the received message graphically inside the applet window; using coordinates allows flexible message placement for visual clarity.
- **HTML <param> tags**: Enable external configuration—developers or users can change the displayed message by simply updating the HTML.

***