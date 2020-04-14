const { program } = require('commander');
const process = require('process');
const https = require('https');
const inquirer = require('inquirer');
const superagent = require('superagent');

const { prompts } = require('../lib/prompts');

inquirer
  .prompt(prompts)
  .then((answers) => {
    console.log('answers==>>', answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log('this is error===>>', error);
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
