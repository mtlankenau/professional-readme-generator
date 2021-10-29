// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide any pertinent installation instructions.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide information regarding usage of this project.'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide guidelines regarding how to contribute to this project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for testing this project.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.'
    }])
    .then((answers) => {
      console.log(answers)
      generateMarkdown(answers);
    })
}

// Function call to initialize app
init();
