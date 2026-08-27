"use strict";
const newElement = document.createElement("section");
const message = document.createTextNode("Welcome to my first app");

newElement.appendChild(message);
document.body.appendChild(newElement);

newElement.classList.add("box");

newElement.id = "box";

newElement.style.cssText = `color: white; background-color: purple; padding: 20px; text-align: center; border-radius: 10px;`;

//  Remove class using classList
// newElement.classList.remove("box");

//  Remove element - Method 1
// newElement.remove();

//  Remove element - Method 2
// newElement.parentElement.removeChild(newElement);

let userName = "Shrouq";
const appName = "My first app";
function welcome(username = "Guest") {
    console.log(`Welcome ${username} to ${appName}`);
}

welcome(userName);