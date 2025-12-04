# Java_GUI_Components.Java:

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GUIComponentsExample {
    public static void main(String[] args) {
        // Create main window
        JFrame frame = new JFrame("GUI Components Example");
        frame.setSize(600, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new FlowLayout());

        // -------- JButton Section --------
        JButton button = new JButton("Click Me!");
        button.setToolTipText("This is a button that you can click.");

        // Add ActionListener to handle button clicks
        button.addActionListener(e -> {
            System.out.println("Button was clicked!");
        });

        // -------- JCheckBox Section --------
        JCheckBox cb1 = new JCheckBox("Option 1", false);
        JCheckBox cb2 = new JCheckBox("Option 2", true);
        JCheckBox cb3 = new JCheckBox("Option 3", false);

        ItemListener cbListener = e -> {
            JCheckBox source = (JCheckBox) e.getItemSelectable();
            if (e.getStateChange() == ItemEvent.SELECTED) {
                System.out.println(source.getText() + " selected");
            } else {
                System.out.println(source.getText() + " deselected");
            }
        };
        cb1.addItemListener(cbListener);
        cb2.addItemListener(cbListener);
        cb3.addItemListener(cbListener);

        // -------- JRadioButton Section --------
        JRadioButton rb1 = new JRadioButton("Choice A");
        JRadioButton rb2 = new JRadioButton("Choice B", true);
        JRadioButton rb3 = new JRadioButton("Choice C");

        // Group the radio buttons for mutual exclusivity
        ButtonGroup group = new ButtonGroup();
        group.add(rb1);
        group.add(rb2);
        group.add(rb3);

        ActionListener rbListener = e -> {
            JRadioButton source = (JRadioButton) e.getSource();
            if (source.isSelected()) {
                System.out.println("Selected: " + source.getText());
            }
        };
        rb1.addActionListener(rbListener);
        rb2.addActionListener(rbListener);
        rb3.addActionListener(rbListener);

        // -------- JLabel Section --------
        JLabel label = new JLabel("This is a label.");
        label.setToolTipText("Labels display information.");
        label.setFont(new Font("Arial", Font.BOLD, 16));
        label.setForeground(Color.BLUE);

        // -------- JTextField and JTextArea Section --------
        JTextField textField = new JTextField("Enter your name", 20);

        JTextArea textArea = new JTextArea(5, 20);
        textArea.setLineWrap(true);
        textArea.setWrapStyleWord(true);
        JScrollPane scrollPane = new JScrollPane(textArea);

        // -------- JComboBox Section --------
        String[] fruits = { "Apple", "Banana", "Orange", "Mango" };
        JComboBox<String> comboBox = new JComboBox<>(fruits);
        comboBox.setToolTipText("Select your favorite fruit");

        comboBox.addActionListener(e -> {
            System.out.println("ComboBox selected: " + comboBox.getSelectedItem());
        });

        // -------- JList Section --------
        String[] animals = { "Dog", "Cat", "Bird", "Fish" };
        JList<String> list = new JList<>(animals);
        list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        JScrollPane listScrollPane = new JScrollPane(list);
        list.setVisibleRowCount(4);

        list.addListSelectionListener(e -> {
            if (!e.getValueIsAdjusting()) {
                System.out.println("List selected: " + list.getSelectedValue());
            }
        });

        // Add components to the frame
        frame.add(button);

        frame.add(new JLabel("Check Boxes:"));
        frame.add(cb1);
        frame.add(cb2);
        frame.add(cb3);

        frame.add(new JLabel("Radio Buttons:"));
        frame.add(rb1);
        frame.add(rb2);
        frame.add(rb3);

        frame.add(label);

        frame.add(new JLabel("Text Field:"));
        frame.add(textField);

        frame.add(new JLabel("Text Area:"));
        frame.add(scrollPane);

        frame.add(new JLabel("Combo Box:"));
        frame.add(comboBox);

        frame.add(new JLabel("List:"));
        frame.add(listScrollPane);

        // Make the frame visible
        frame.setVisible(true);
    }
}
```


***

```html
<html>
  <head><title>GUI Components Applet</title></head>
  <body>
    <applet code="GUIComponentsExample.class" width="700" height="700">
      Your browser does not support Java Applets.
    </applet>
  </body>
</html>
```


***