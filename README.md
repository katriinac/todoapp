# To Do app

**Author:** Katriina Chindjapin

## Project plan

### Project idea

An application for tracking tasks that need to be completed. Tasks are marked as finished once they are done. The app is suitable for a student who has a large number of course assignments.

### Planned features

- Feature 1: Add tasks.
- Feature 2: Remove tasks.
- Feature 3: Mark tasks as complete.
- Feature 4: Filter tasks using the "Completed" and "In Progress" buttons.

### Wireframe / sketch

![wireframe](img/todoapp.png)

## Web links

- **Published application:** [Link to GitHub Pages](https://katriinac.github.io/todoapp/)
- **GitHub-repository:** [Link to GitHub](https://github.com/katriinac/todoapp)
- **Project video presentation:** [Link to the video](https://www.youtube.com/watch?v=0_MObplMJPc)

## About the application

**[To Do]** is a web application where you can add tasks you wish to complete. Once tasks are finished, you can mark them as done. You can view completed or incomplete tasks using buttons, and tasks can be deleted if necessary. The application saves data automatically, meaning your information remains preserved even when you refresh the page.

## Technologies

- HTML – page structure.
- CSS – styling and layout.
- JavaScript – functionality, DOM scripting and form validation.
- LocalStorage – saving data in the browser.

## How to use the application

1. Open the published application via the link above.
2. Fill in the form field.
3. Add an item and mark it as complete.
4. Add another item.
5. Check the visibility of the items using the "Active" or "Completed" buttons.
6. Click the "All" button.
7. Delete the completed items.
8. Refresh the page and verify whether the data persists in the browser.

## Running the application locally

1. Clone or download this repository to your computer.
2. Open the project folder.
3. Open `index.html` in a web browser.

## Screenshots

![Screenshot of the application](img/completed.png)

## Known issues / limitations

- The red border around the input field disappears only once a new task has been added.
- If there are no active or completed tasks when the "active/completed" button is pressed, the application displays an empty state.

## Self-assessment and learning reflection

- What did I succeed at? I feel like I managed to build a functional application well, and all the requirements are met.

- What was challenging? Writing clean code. Towards the end, I had to figure out how to make the code clearer, as I had initially put almost everything into a single function, making the code look quite messy. Eventually, I managed to break the code down into separate functions, which significantly improved its clarity. Implementing localStorage was also a bit tricky, as I needed to store data consisting of more than just a single line (requiring a loop to iterate through everything).

- What would I improve if I had more time? I would put even more effort into the visual design.

- What did I learn about HTML, CSS, JavaScript, and DOM scripting? By using all of these, it is possible to build various types of small web applications.

- My self-assessed project grade: **10/10 points**

## Sources and acknowledgements

- I used the Workshop assignments I had completed earlier to help with creating the code (mostly Workshop04 and Workshop05). (https://github.com/katriinac/web-development-1)

- I also made use of W3Schools examples (mostly CSS).

- [HTML DOM Input Checkbox Object - GeeksForGeeks](https://www.geeksforgeeks.org/html/html-dom-input-checkbox-object/) I used the tutorial to help create the checkboxes.

- [How to get all checked checkbox values using JavaScript by Joshua Colvin](https://www.joshuacolvin.net/blog/selected-checkbox-values/) I learned from a tutorial that I can use querySelectorAll and input[type="checkbox"]:checked, which allowed me to add the checkboxes.

- [CSS Margins W3Schools](https://www.w3schools.com/css/css_margin.asp) I learned what the different margin properties do and which ones I need for my project.

- [CSS Fonts W3Schools](https://www.w3schools.com/css/css_font.asp) I used it to find a font for my project.

- I have created all the images used myself, using the program Paint.NET.

- AI tool used: ChatGPT

  - How the tool was used: After deleting a task, the "tasks done 0/2" counter failed to update (it continued to count tasks that had already been deleted). I asked the AI ​​what was wrong with the code, and it explained the location of the error. I had placed the function calls in the wrong spot, which prevented the task count from updating.

  - I asked how to assign an unique ID to each delete button. I provided a portion of my code to the AI, which suggested adding a snippet that increments an ID variable, ensuring every button gets a distinct ID (deleteButton.id = "btn" + deleteButtonId; deleteButtonId++).

  - I asked for help with customizing the appearance of a checkbox so that a checkmark (✓) remains visible after it has been clicked. The AI ​​suggested using the input[type="checkbox"]:checked::after selector in the CSS file.


  ## License

This project is licensed under the MIT License.