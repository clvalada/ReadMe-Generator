//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to initialize app
// Array of questions for user input
function generaterReadMe(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your application?',
      name: 'appname',
    },
    {
      type: 'input',
      message: 'Please provide a short description of your application explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please provide usage instructions.',
        name: 'usage',
      },
    {
      type: 'list',
      message: 'Please chose a license type.',
      name: 'license',
      choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause','unlicense','Other'],
    },
    {
        type: 'input',
        message: 'Please list any references, sources, or collaborators.',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'Please provide instructions for contributing',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub profile link',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
      },
  ])
// Function to write README file  
  .then((response) => {
      const ReadMeTemplate = `
# ${response.appname}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Credits

${response.credits}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

If you have any questions, please feel free to contact me at ${response.email}. 

Alternatively, you can view my other projects at ${response.profile}

        `;
        fs.writeFile('readme.md', ReadMeTemplate, (err) => {
            if (err) {
              console.error('Error generating ReadMe file:', err);
            } else {
              console.log('ReadMe file generated successfully!');
            }
          });
        });
    }


// Function call to initialize app
generaterReadMe();
