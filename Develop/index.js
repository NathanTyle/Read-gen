// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "what is your GitHub username?",
    name: "GitHub"
}, {
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
    message: "What step is required to install your project?",
    name: "Installation",
    default: "npm i"
}, {
    type: "input",
    message: "What would the client use this for?",
    name: "Usage"
}, {
    type: "list",
    message: "What licenses does your project use?",
    name: "License",
    choices: ["APACHE2.0", "Boost1.0", "BSD2" , "MIT", "None"]
}, {
    type: "input",
    message: "List your collaborators.",
    name: "Credits"
}, {
    type: "input",
    message: "How do you run tests for your app?.",
    name: "Tests",
    default: "npm test"
}, {
    type: "input",
    message: "Leave your email in case anyone has any questions about your project and or README.",
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
