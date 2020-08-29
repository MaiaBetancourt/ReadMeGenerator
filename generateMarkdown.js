// function to generate markdown for README
function generateMarkdown(userinput) {
  return `

  ![GitHub repo size](https://img.shields.io/github/repo-size/${userinput.githubuser}/${userinput.githubrepo})

  # Project Title: ${userinput.title}

  ## ${userinput.description}

  ${userinput.contents}
  ## Table of Contents:
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

  ${userinput.license}

  ## ${userinput.questions}

`;
}

module.exports = generateMarkdown;
