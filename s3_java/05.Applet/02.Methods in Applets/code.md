# DrawingDemoApplet.java

```java
import java.applet.Applet;
import java.awt.Graphics;

// DrawingDemoApplet demonstrates all major 2D drawing methods in an applet window
public class DrawingDemoApplet extends Applet {

    // The paint method is called every time the applet needs to render
    public void paint(Graphics g) {
        // 1. Drawing basic lines for axes or paths
        g.drawLine(10, 10, 150, 10);    // Horizontal line
        g.drawLine(10, 10, 10, 150);    // Vertical line

        // 2. Rectangle outlines and fills for boxes and UI elements
        g.drawRect(20, 20, 100, 50);    // Outlined rectangle
        g.fillRect(20, 80, 100, 50);    // Filled rectangle

        // 3. Ovals and circles for avatars or indicators
        g.drawOval(150, 20, 100, 50);   // Outlined oval
        g.fillOval(150, 80, 100, 50);   // Filled oval

        // 4. Arcs for pie charts or progress rings
        g.drawArc(280, 20, 100, 100, 0, 90);     // Quarter arc
        g.fillArc(280, 140, 100, 100, 0, 270);   // Filled arc

        // 5. Polygons (closed shapes), e.g., hexagons or triangles
        int[] xPointsPoly = {50, 70, 90, 90, 70, 50};
        int[] yPointsPoly = {150, 130, 130, 150, 170, 170};
        int nPointsPoly = 6;
        g.drawPolygon(xPointsPoly, yPointsPoly, nPointsPoly);     // Outlined polygon
        g.fillPolygon(xPointsPoly, yPointsPoly, nPointsPoly);     // Filled polygon

        // 6. Polylines (open shapes), e.g., charts or squiggles
        int[] xPointsLine = {150, 170, 190, 210, 230};
        int[] yPointsLine = {150, 130, 170, 130, 150};
        int nPointsLine = 5;
        g.drawPolyline(xPointsLine, yPointsLine, nPointsLine);    // Zigzag line
    }
}
```


***

# DrawingDemoApplet.html

```html
<html>
  <head>
    <title>DrawingDemoApplet Visualization</title>
  </head>
  <body>
    <!--
      This applet demo displays many graphic primitives.
      The code attribute points to the compiled DrawingDemoApplet.class file.
      Adjust width and height as needed for visibility.
    -->
    <applet code="DrawingDemoApplet.class" width="400" height="220">
      <!-- For older browsers: fallback message -->
      Your browser does not support Java applets.
    </applet>
  </body>
</html>
```


***