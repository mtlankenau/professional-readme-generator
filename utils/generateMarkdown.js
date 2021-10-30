// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
## Description
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## License

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
Have more questions about this particular project?
Feel free to check out my GitHub repository for this particular project at github.com/${data.github}/${data.project}.
Also please visit my GitHub profile at github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
