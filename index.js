// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of this app?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a description of this app?',
    },
    {
      type: 'input',
      name: 'deploy',
      message: 'What is the URL of the deployed app?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should this app be used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license should be applied?',
      choices: ['null', 'MIT', 'GNU-GPL-v3.0', 'GNU-AGPLv3', 'BSD-2-Clause', 'BSD-3-Clause'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who has contributed to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests that can be performed on this app?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]);
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) return "";
  else {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen)](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
      break;
    case 'GNU-GPL-v3.0':
      return 'https://choosealicense.com/licenses/gpl-3.0';
      break;
    case 'GNU-AGPLv3':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
      break;
    case 'BSD-2-Clause':
      return 'https://choosealicense.com/licenses/bsd-2-clause';
      break;
    case 'BSD-3-Clause':
      return 'https://choosealicense.com/licenses/bsd-3-clause';
      break;
  }
}

// TODO: Create a function to generate markdown for README
const generateMD = (answers) => `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description 

${answers.description} 

[Link to published website](${answers.deploy})

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Questions](#Questions)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)

## Installation

${answers.installation}

* [Return to Top](#${answers.title})

## Usage 

${answers.usage}

* [Return to Top](#${answers.title})

## Questions

Please email me at the email address listed below with any questions about this app. 

[${answers.email}](mailto:${answers.email})

Or, take a look at some of my other projects.

[Repository Owner GitHub Profile](https://github.com/${answers.username})

* [Return to Top](#${answers.title})

## License

${renderLicenseSection(answers.license)}

* [Return to Top](#${answers.title})

## Contributing

  ${answers.contributing}

* [Return to Top](#${answers.title})

## Tests

${answers.tests}

* [Return to Top](#${answers.title})
`;


// TODO: Create a function to write README file
const init = async () => {
  console.log('Hello. Answer the following quetions to generate a README file.');
  try {
    const answers = await promptUser();

    const md = generateMD(answers);

    await writeFileAsync('README.md', md);

    console.log('Successfully wrote to README.md');
  } catch (err) {
    console.log(err);
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return "";
  } else {
    return `This software has been created under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}


module.exports = generateMD;


// Function call to initialize app
init();
