"use strict";
const input = document.querySelector(".input input");
const addNewItem = document.querySelector(".addNewItem");
const items = document.querySelector(".items");

// Add New Item on click
addNewItem.addEventListener("click", () => {
  // Make sure the input box stays selected
  input.focus();

  // Get the value of the input field
  const value = input.value;

  // Create a new container element
  const container = document.createElement("div");
  // Create a new list item element
  const label = document.createElement("label");
  // Create a new checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "done";

  //   Create a delete item buttom
  const trash = document.createElement("button");
  trash.className = "remove";

  // Set the text content of the list item
  label.textContent = value;

  // Append the checkbox, label and delete button to the container
  container.appendChild(trash);
  container.appendChild(checkbox);
  container.appendChild(label);
  items.appendChild(container);

  // Clear the input field
  input.value = "";

  // Deleting items
  items.addEventListener("click", (event) => {
    if (event.target.className === "remove") {
      const container = event.target.parentNode;
      const parent = container.parentNode;
      parent.removeChild(container);
    }
  });
});

// Add item when Enter Key pressed
input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    // Make sure the input box stays selected
    input.focus();

    // Get the value of the input field
    const value = input.value;

    // Create a new container element
    const container = document.createElement("div");
    // Create a new list item element
    const label = document.createElement("label");
    // Create a new checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "done";
    //   Create a delete item buttom
    const trash = document.createElement("button");
    trash.className = "remove";

    // Set the text content of the list item
    label.textContent = value;

    // Append the checkbox, label and delete button to the container
    container.appendChild(trash);
    container.appendChild(checkbox);
    container.appendChild(label);
    items.appendChild(container);

    // Clear the input field
    input.value = "";

    // Deleting items
    items.addEventListener("click", (event) => {
      if (event.target.className === "remove") {
        const container = event.target.parentNode;
        const parent = container.parentNode;
        parent.removeChild(container);
      }
    });
  }
});
