const inquirer = require("inquirer");
const fs = require("fs");
const managerQs = require('./questions/ManagerQs.js')
const eQs = require('./questions/EngineerQs.js')
const iQs = require('./questions/InternQs.js')


const Manager = require('./roles/Manager.js')
const Engineer = require('./roles/Engineer.js')
const Intern = require('./roles/Intern.js')

const employees = []

function start () {
  inquirer.prompt(
    {
      type: 'list',
      name: 'member',
      message: 'What employee would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern']
    }
  )

  .then(ans => {
    let answer = ans.member
    let lowerAns = answer.toLowerCase()
    setTimeout(eval(lowerAns), 1) 
  })
}

  async function manager () {
   
    await inquirer.prompt(managerQs)
  .then(ans => {

      const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
      
      employees.push(manager)

    })
   
    goAgain()
  }

  async function engineer () {
    await inquirer.prompt(eQs)
    .then(ans => {
      
      const engineer = new Engineer(ans.name, ans.id, ans.email, ans.git);
      
      employees.push(engineer)

    })
    goAgain()
  }

  async function intern () {
    await inquirer.prompt(iQs)
    .then(ans => {
      
      const intern = new Intern (ans.name, ans.id, ans.email, ans.school);
      
      employees.push(intern)

    })
    goAgain()
  }

  function goAgain () {
    inquirer.prompt(
      {
        type: 'confirm',
        name: 'another',
        message: 'Would you like to add another Employee?',
      })

      .then(ans => {
    
        if(ans.another) {
          start()
        }
      })
    }

  start()