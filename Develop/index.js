// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Provide a short description of your project.",
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
    message: "Provide instructions for use.",
    name: "Usage"
}, {
    type: "input",
    message: "List your collaborators.",
    name: "Credits"
}, {
    type: "input",
    message: "Let other developers know what they can and cannot do with your project.",
    name: "Liscense"
}, {
    type: "input",
    message: "List contributors who contributed to your project.",
    name: "Contributors"
}, {
    type: "input",
    message: "How do you run tests for your app?.",
    name: "Tests"
}, {
    type: "input",
    message: "leave contact info in case anyone has any questions about your project and or README.",
    name: "Questions"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions)
    .then((inquirerAnswer) => {
        console.log("loading...")
        writeToFile("dist\README.md", generateMarkdown({ ...inquirerAnswer}))
    })
}


// Function call to initialize app
init();
