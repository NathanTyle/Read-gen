function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.GitHub}/${data.Title}
  # Description
  ${data.Description}
  # Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependecies must be installed to run the aplication: ${data.Installation}
  # Usage
  In order to use this app, ${data.Usage}
  # License
  This project is licensed under the ${data.License} license.
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Credits
  Credits: ${data.Contributors}
  # Tests
  The folloing is needed to run the test: ${data.Tests}
  # Questions
  If you have any questions about the repo, contact ${data.Questions}
`
}

module.exports = generateMarkdown;
