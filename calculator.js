#!/usr/bin/env node
'use strict';
var inquirer = require('inquirer');
var output = [];

var questions = [{
    name: 'evaluate',
    type: 'input',
    message: 'Equation:',
    validate: function (equation) {
      var regex = /[a-z]/;
      if(regex.test(equation)) {
        return 'Please enter valid equation.';
      } else {
        return true;
      }
    },
    filter: function(equation) {
      try {
        var result = eval(equation.toString());
        output.push[result];
        return (equation.toString() + " = " + result.toString()); 
      }
      catch(e) {
        console.log(e.message)
      }
    }
},
{
    name: 'exit',
    type: 'confirm',
    message: 'Exit?',
    default: false
}];

function main() {
  inquirer.prompt(questions).then(answers => {
    if(answers.exit) {
      console.log("Exiting...");
      process.abort;
    } else {
      main();
    }
  });
}

main();