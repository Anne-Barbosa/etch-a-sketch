# Etch-a-Sketch

A browser-based Etch-a-Sketch application built with **HTML, CSS, and JavaScript** as part of **The Odin Project Foundations Curriculum**.

The goal of this project is to practice DOM manipulation, Flexbox, JavaScript events, and dynamic element creation without relying on external libraries.

---

## Features

- 16 × 16 grid generated entirely with JavaScript
- Grid squares created dynamically (no hardcoded HTML)
- Layout built with **Flexbox**
- Hover effect that colors each square as the mouse passes over it
- Button to generate a new grid
- User chooses the new grid size through a prompt
- Input validation (accepts values between **1** and **100**)
- Previous grid is removed before creating a new one
- Grid resizes while keeping the same drawing area
- Random RGB color generated on each interaction
- Progressive opacity effect with each interaction
- Squares reach full opacity after 10 interactions

---

## Built With

- HTML5
- CSS3
- JavaScript (ES6)

---

## What I Practiced

- DOM manipulation
- Creating elements with JavaScript
- Event listeners
- Mouse events
- Flexbox layouts
- Loops
- Functions
- User input validation
- Dynamic styling with JavaScript
- Math.random()
- RGB color generation
- dataset for storing interaction data
- CSS opacity
- Creating reusable functions
- Clearing and rebuilding DOM elements

---

## How It Works

### Grid Generation

The grid is generated dynamically using JavaScript rather than manually creating hundreds of <div> elements in HTML.

The createGrid() function receives the desired number of squares per side and creates the corresponding number of square elements.

For example:

16 → 16 × 16 = 256 squares
32 → 32 × 32 = 1,024 squares
64 → 64 × 64 = 4,096 squares
100 → 100 × 100 = 10,000 squares

The total drawing area remains 960 × 960 px, so increasing the number of squares makes each individual square smaller.

### Random Colors

When the mouse enters a square, JavaScript generates random values between 0 and 255 for red, green, and blue.

A new RGB color is then applied to that square.

### Progressive Opacity

Each square keeps track of how many times it has been interacted with using a data-count attribute.

The opacity increases by 10% per interaction, reaching full opacity after ten interactions.

This creates the progressive darkening/strengthening effect requested by the extra credit challenge.

---

## Project Structure

```
├── index.html

├── styles.css

├── script.js

└── README.md

```

---

## Upcoming Features

Although the Odin Project requirements and extra credit challenges are complete, I plan to continue developing the project as a personal project.

Possible improvements include:

- Improved UI design
- Responsive layout
- Reset/Clear Grid button
- Color picker
- Eraser mode
- Custom color mode
- Better mobile support
- Additional drawing modes
- Improved accessibility
- Visual controls instead of browser prompts

---

## Lessons Learned

This project helped reinforce:

- Creating hundreds of DOM elements dynamically
- Manipulating styles through JavaScript
- Working with mouse events
- Building reusable functions
- Separating responsibilities between HTML, CSS, and JavaScript
- Generating random values with JavaScript
- Using data-* attributes to store information on DOM elements
- Keeping a fixed drawing area while changing the number of grid cells
- Removing and rebuilding DOM content dynamically

The project also required researching JavaScript and CSS concepts beyond what had been explicitly covered in previous lessons, which was an important part of the learning process.

---

## Credits

Project assignment from **The Odin Project**

https://www.theodinproject.com/

