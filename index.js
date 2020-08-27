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
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "us",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "usern",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "user",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "usernam",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "userna",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "use",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "us",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "u",
  },
];
inquirer.prompt(questions).then(function (response) {
  let userinput = JSON.stringify(response, null, "\t");
  console.log(userinput);
  
  // function to write README file
  // function writeToFile(fileName, data) {}
  fs.writeFile("readME.md", (userinput), function (err){
      console.log("YAY!!");
    });
});
    // function to initialize program
// function init() {}

// function call to initialize program
// init();
