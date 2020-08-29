//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "githubuser",
  },
  {
    type: "input",
    message: "What is gitHub repo name?",
    name: "githubrepo",
  },
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "How can you describe the app?",
    name: "description",
  },
  {
    type: "input",
    message: "What contents does this app contain?",
    name: "contents",
  },
  {
    type: "input",
    message: "How do we install it?",
    name: "installation",
  },
  {
    type: "input",
    message: "How can we use it?",
    name: "usage",
  },
  {
    type: "input",
    message: "Can you name your license?",
    name: "license",
  },
  {
    type: "input",
    message: "Do you have any contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How can we test it?",
    name: "test",
  },
  {
    type: "input",
    message: "Any questions?",
    name: "questions",
  },
];
inquirer.prompt(questions).then(function (response) {
  
  
  response = generateMarkdown(response);
  // function to write README file
  // function writeToFile(fileName, data) {}
  fs.writeFile("readME.md", (response), function (err){
      console.log("YAY!!");
    });
});
    // function to initialize program
// function init() {}

// function call to initialize program
// init();
