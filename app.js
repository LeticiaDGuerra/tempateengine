const util = require("util");
const fs = require('fs')
const inquirer = require("inquirer");
const HTML= require("./lib/generateHTML")
const jest = require("jest");
const writeFileAsync = util.promisify(fs.writeFile)


function prompt() {
   return inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
      },
    {
       type: "input",
       message: "What is your ID?",
       name: "ID"
    },
    {
      type: "list",
      message: "What's your role?",
      name: "role",
      choices: [
        "Engineer",
        "Intern",
        "Employee",
        "Manager"
      ]
    },
    {//if manager is picked
        type: "input",
        message: "What is your office #?",
        name: "office"
      },
      {
          //// if intern is picked
        type: "input",
        message: "What is your Universities Name?",
        name: "school"
      },
      {
      type: "input",
      message: "What is your ID #",
      name: "id"
    }
]);
}


   function init() {
      try {
        const data = await prompt();

        const html = HTML(data);

        await writeFileAsync("employee.html", html);
      }
      catch (err) {
        console.log(err)
      }
    }
    init();