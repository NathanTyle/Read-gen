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
    message: "If you created an application or package and would like other developers to contribute it.",
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
