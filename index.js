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
  'Please enter your Github username.',
  'Please enter your email address.',
  'Which license is your application covered under?'
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
      message: questions[0],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter installation instructions for your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
      validate: input => {
        if (input) {
          return true
        } else {
          console.log('Please enter any instructions for usage of your projects (i.e. screenshots)!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please let us know how others may be able to contribute to this project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[5],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please let us know how one could test your project (i.e. JavaScript testing frameworks like Jest)!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: questions[6],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter your Github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: questions[7],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: questions[8],
      choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'EPL 1.0', 'IPL 1.0', 'ISC', 'MIT', 'MPL 2.0', 'Artistic 2.0', 'OFL 1.1', 'Zlib']
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