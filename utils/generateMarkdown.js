// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  if (!license) {
    return '';
  } else if (license) {
    const splitLicense = license.split(" ");
    if (splitLicense[0] === "BSD") {
      const splitLicenseBSD = splitLicense[1].split("-");
      let licenseBadgeAndLink = `[![License](https://img.shields.io/badge/License-${splitLicense[0]}_${splitLicenseBSD[0]}--${splitLicenseBSD[1]}-red.svg)](https://opensource.org/licenses/${splitLicense[0]}-${splitLicense[1]})`;
      return licenseBadgeAndLink;
    } else if (splitLicense[1]) {
      let licenseBadgeAndLink = `[![License](https://img.shields.io/badge/License-${splitLicense[0]}_${splitLicense[1]}-red.svg)](https://opensource.org/licenses/${splitLicense[0]}-${splitLicense[1]})`;
      return licenseBadgeAndLink;
    } else {
      let licenseBadgeAndLink = `[![License](https://img.shields.io/badge/License-${license}-red.svg)](https://opensource.org/licenses/${license})`;
      return licenseBadgeAndLink;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license) {
    const licenseSection =
`<a name="license"></a>
## License
Notice: this application is covered under the ${license} license.`
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseBadgeAndLink(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<a name="install"></a>
## Installation
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

${renderLicenseSection(data.license)}

<a name="contribute"></a>
## Contributing
${data.contribution}

<a name="tests"></a>
## Tests
${data.tests}

<a name="questions"></a>
## Questions
Have more questions about this particular project? Explore one or all of the following options:
* Shoot me an email at <a href = "mailto: ${data.email}">${data.email}</a>
* Explore my profile on Github by <a href="github.com/${data.github}">clicking this link</a>
`;
}

module.exports = generateMarkdown;
