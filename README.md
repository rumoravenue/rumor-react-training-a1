# HTML + CSS + JS Practical

## Overview
Welcome! In this practical, we will apply the fundamentals of web development, using raw HTML, CSS and JS to build a simple todo list that stores information in the browser's local storage. 

##  Figma
Use [the figma](https://www.figma.com/file/jgwwR5Tdwd1JZOMKVPAGDN/React-Practicals?type=design&node-id=0%3A1&mode=dev&t=NF7A08PfE4qFjCcP-1) to see the details of the design. **Follow this design as closely as possible**. 

## Getting Started 

Clone this repository using 
```bash
git clone https://github.com/rumoravenue/rumor-react-training-a1.git
```

Make a branch for yourself using
```bash
git checkout -b <your-name>
```

Open the file in VSCode, and you can now open `index.html` in your browser. 

## Submission
After you complete each part, submit your assignment by completing the following:
- Open a pull request on the Github repository from your branch to main: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request 
- Record a video demo using Loom: https://www.loom.com/community/how-to-record-your-first-video
- Submit a link to your video demo and a link to the pull request to the Google Form in Google Classroom for this module. 

## Part 1: UI in HTML and CSS
Complete this **after** you complete module 1 of training, learning HTML and CSS. 

### Requirements

In this part, you will implement the basic elements of design of the todo list. Implement:
- Each todo list item, including:
  - The checkbox
  - The title (#1: Item #1)
  - The description
- The text input for adding items
- The "add to list" button

### The finer points
You may notice some small details in the Figma. Make sure to implement them. For example, some expected behaviour from the Figma:
- The items in the todo list have a minimum width.
- Some items in the todo list are formatted differently _based on their position in the list_. Pay attention to:
  - The background colour
  - The format of the text in the title
- Some items in the list may have a different format when they are completed. 
  - Wondering how to mark a checkbox as completed? See [here](https://www.w3schools.com/tags/att_input_checked.asp).

### A couple pointers
- It is tempting to hard-code as much of the styling as possible, however this will make the second part painful, as you will have **more than 3** to-do items. Instead, consider:
  - Using HTML classes for styling repeated elements, such as todo lists.
  - Separating your styling into the CSS file 
  - For styling based on positioning, consider intelligent use of [CSS selectors](https://www.w3schools.com/cssref/css_selectors.php). 
    - [first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)
    - [nth-child](https://www.w3schools.com/cssref/sel_nth-child.php)
- It is also tempting to write the code as quickly as possible. However, this will only make the second part more difficult. Take your time, think through your code, and make it _clean_. 

## Part 2: Add logic using JS

Now that you are aware of how to interact with the DOM and process data using JS, we are going to implement the following functionality:

- Render the to-do list by looping over a `data` variable in index.html
- When someone clicks the "Add to list" button, the title and description entered in the text field should be used to add a new item to the todo list.
  - You can add the item to the `data` array, but this will not reflect in the UI right away. You need to use the same procedure you use to render the list to add a new item onto it.
- The todo list items should be stored in local storage. **Delete the data variable** and load the todo list items from localstorage instead. 
  - Wondering how to load/store arrays in local storage? https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage 
  - When a new item is added into the todo list, it should be **both** shown in the UI and saved to local storage
  - When I reload the page, the new items added to the list should still show up.