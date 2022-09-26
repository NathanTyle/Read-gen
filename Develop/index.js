// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const utils = require("utils");

const generateMarkdown = require('./util/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "Usage"
}, {
    type: "input",
    message: "List your collaborators.",
    name: "Credits"
}, {
    type: "input",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.",
    name: "Liscense"
}, {
    type: "input",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    name: "Contributors"
}, {
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "Tests"
}, {
    type: "input",
    message: "leave contact info in case anyone has any questions about your project and or README.",
    name: "Questions"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("dist\README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
