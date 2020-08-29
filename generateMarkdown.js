// function to generate markdown for README
function generateMarkdown(userinput) {
  return `

  ![GitHub repo size](https://img.shields.io/github/repo-size/${userinput.githubuser}/${userinput.githubrepo})

  # Project Title: ${userinput.title}

  ## Brief Description:
  ${userinput.description}

  ## Table of Contents:
  ${userinput.contents}
  - [title](#title)
  - [installation](#installation)
  - [tests](#tests)
  - [contributors](#contributors)
  - [usage](#usage)
  - [license](#license)

  ## Installation:
  > ${userinput.installation}

  ## Usage:
  > ${userinput.usage}

  ## Tests:
  > ${userinput.test}

  ## Contributors:
  > ${userinput.contributors}

  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions
  
  ${userinput.questions}

`;
}

module.exports = generateMarkdown;
