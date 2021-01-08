// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the repo name?',
    },
    {
      type: 'input',
      name: 'deploy',
      message: 'What is the deployed site URL?',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'What is the screenshot link?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the app?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who gets credit for this app?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is the license?',
    },
  ]);
};

// TODO: Create a function to write README file

const generateMD = (answers) =>
`## ${answers.repo}

## Description 

This ${answers.repo} is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 

[Link to published website](${answers.deploy})

## Table of Contents

* [Description](#Description)
* [Table of Contents](#Table-of-Contents)
* [Photo](#Photo)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Contributing](#Contributing)

## Photo

![Screenshot of completed website.](${answers.screenshot})

* [Return to Top](#${answers.repo})

## Installation

${answers.install}

* [Return to Top](#${answers.repo})

## Usage 

${answers.usage}

* [Return to Top](#${answers.repo})

## Credits

${answers.credits}

* [Return to Top](#${answers.repo})

## License

${answers.license}

* [Return to Top](#${answers.repo})

## Contributing

  ${answers.name}

* [Return to Top](#${answers.repo})
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
