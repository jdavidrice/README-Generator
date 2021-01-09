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
      choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'],
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

// TODO: Create a function to write README file

const generateMD = (answers) => `
# ${answers.title}

[![GitHub license](https://img.shields.io/github/license/${answers.username}/${answers.title})](https://github.com/${answers.username}/${answers.title}/blob/master/LICENSE)

## Description 

${answers.description} 

[Link to published website](${answers.deploy})

## Table of Contents

* [Description](#Description)
* [Table of Contents](#Table-of-Contents)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${answers.installation}

* [Return to Top](#${answers.title})

## Usage 

${answers.usage}

* [Return to Top](#${answers.title})

## Questions

Please email me at the email address listed below with any questions about this app. 

[${answers.email}](mailto:${answers.email})

[Repository Owner GitHub Profile](https://github.com/${answers.username})

* [Return to Top](#${answers.title})

## License

${answers.license}

* [Return to Top](#${answers.title})

## Contributing

  ${answers.contributing}

* [Return to Top](#${answers.title})

## Tests

${answers.tests}

* [Return to Top](#${answers.title})
`;


// TODO: Create a function to initialize app
const init = async () => {
  console.log('hi');
  try {
    const answers = await promptUser();

    const md = generateMD(answers);

    await writeFileAsync('README.md', md);

    console.log('Successfully wrote to README.md');
  } catch (err) {
    console.log(err);
  }
};

// Function call to initialize app
init();
