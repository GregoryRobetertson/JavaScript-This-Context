"use strict";

// Object to handle messages and display them
const messageHandler = {
  message1: "The first button was clicked",
  message2: "The second button was clicked",
  message3: "The third button was clicked",

  // Method to display message1
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },

  // Method to display message2
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },

  // Method to display message3
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },

  // Generic method to display messages
  displayMessage: function (message) {
    // Create a new paragraph element
    const p = document.createElement("p");

    // Set the text content of the paragraph to the provided message
    p.textContent = message;

    // Append the paragraph to the body of the document
    document.body.appendChild(p);
  },
};

// Event listeners for button clicks, binding them to the messageHandler object
document
  .getElementById("btn1")
  .addEventListener(
    "click",
    messageHandler.displayMessage1.bind(messageHandler)
  );

document
  .getElementById("btn2")
  .addEventListener(
    "click",
    messageHandler.displayMessage2.bind(messageHandler)
  );

document
  .getElementById("btn3")
  .addEventListener(
    "click",
    messageHandler.displayMessage3.bind(messageHandler)
  );

// Object representing a person with a greet method
const person = {
  name: "Sam",

  // Method to greet the person
  greet: function () {
    console.log("Hello,", this.name);
  },
};

// Object representing another person with a greet method using arrow function
const person2 = {
  name: "Bill",

  // Arrow function does not have its own "this" binding, leading to potential issues
  greet: () => {
    console.log("Hello,", this.name);
  },
};
