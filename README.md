# Job Application Tracker Dashboard

A simple and responsive Job Application Tracker built with **HTML**, Tailwind CSS, and JavaScript

# Features

Dynamic Dashboard: Real-time updates of Total, Interview, and Rejected job counts.

Tab Filtering: Easily toggle between "All", "Interview", and "Rejected" tabs to filter job cards.


# Answers to Technical Questions

#1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

getElementById: Targets a single element by its unique ID. It is very fast and returns one element.

getElementsByClassName: Returns a live HTMLCollection of all elements with a specific class name.

querySelector: Uses CSS selectors to find the first matching element.

querySelectorAll: Uses CSS selectors to find all matching elements and returns them as a static NodeList.

# 2. How do you create and insert a new element into the DOM?

To create an element, we use `document.createElement('tagName')`. To insert it into the DOM, we use methods like `appendChild()` (to add it as the last child) or `insertAdjacentHTML()` (to insert HTML strings directly into a specific position).

# 3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the deepest target element (the one you clicked)  to its parent elements in the DOM tree. 

# 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child.


# 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

preventDefault()`**: Stops the default behavior of an element (e.g., prevents a link from navigating or a form from refreshing the page).

stopPropagation(): Stops the event from bubbling up the DOM tree, preventing parent handlers from being notified of the event.



#  Tech Stack

**HTML5
***Tailwind CSS** (for styling and responsiveness)
***Vanilla JavaScript** (for DOM manipulation and logic)
