// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  'What is the title of your project?',
  'Provide a description of the project.',
  'Provide any pertinent installation instructions.',
  'Provide information regarding usage of this project.',
  'Provide guidelines regarding how to contribute to this project.',
  'Provide instructions for testing this project.',
  'Please enter your GitHub username.',
  'Please enter your email address.'
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Your professional README file (README.md) has been created! You can find it in the root directory of this project.');
  })
};

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'project',
      message: questions[0]
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1]
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2]
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3]
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4]
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[5]
    },
    {
      type: 'input',
      name: 'github',
      message: questions[6]
    },
    {
      type: 'input',
      name: 'email',
      message: questions[7]
    }])
    .then((answers) => {
      console.log(answers);
      return generateMarkdown(answers);
    })
    .then((markdown) => {
      return writeToFile('README.md', markdown);
    })
};

// Function call to initialize app
init();
