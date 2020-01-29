const inquirer = require("inquirer");
var { Observable } = require("rxjs");

const managerQs = require('./roles/ManagerQs.js')
const eQs = require('./roles/EngineerQs.js')
const iQs = require('./roles/InternQs.js')

let emitter

var prompts = Observable.create(function yes (e) {
  emitter = e;

  emitter.next({
    
      type: 'list',
      name: 'member',
      message: 'What employee would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern']
    
  });
});
  
 inquirer.prompt(prompts).ui.process.subscribe(
  
    function(ans) {
      let answer = ans.answer 
      let lowerAns = answer.toLowerCase()
      setTimeout(eval(lowerAns), 1) 
    },
    function(err) {
      console.log('Error: ', err);
    }
  
  );
  
  
  
  function manager () {
    inquirer.prompt(managerQs).ui.process.subscribe(
      function(ans) {
        console.log('Answer is: ', ans);
      },
      function(err) {
        console.log('Error: ', err);
      },
      function() {
  
      }
    )
  }

  function engineer () {
    inquirer.prompt(eQs).ui.process.subscribe(
      function(ans) {
        console.log('Answer is: ', ans);
      },
      function(err) {
        console.log('Error: ', err);
      },
      function() {
  
      }
    )
  }

  function intern () {
    inquirer.prompt(iQs).ui.process.subscribe(
      function(ans) {
        console.log('Answer is: ', ans);
      },
      function(err) {
        console.log('Error: ', err);
      },
      function() {
    
      }
    )
  }

