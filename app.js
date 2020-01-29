const inquirer = require("inquirer");
const managerQs = require('./roles/ManagerQs.js')
const eQs = require('./roles/EngineerQs.js')
const iQs = require('./roles/InternQs.js')

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
    console.log(ans.member)
    let answer = ans.member
    let lowerAns = answer.toLowerCase()
    setTimeout(eval(lowerAns), 1) 
  
})
}

  async function manager () {
   await inquirer.prompt(managerQs)
    goAgain()
  }

  async function engineer () {
    await inquirer.prompt(eQs)
    goAgain()
  }

  async function intern () {
    await inquirer.prompt(iQs)
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
        console.log(ans)
        if(ans.another) {
          start()
        }
      
    })
  }

  start()