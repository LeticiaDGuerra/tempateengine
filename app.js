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
      name: "username1"
    }, 
    {
      type: "list",
      message: "What's your role?",
      name: "role1",
      choices: [
        "Engineer",
        "Intern",
        "Employee",
        "Manager"
      ]
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email1"
      },
      {
        type: "input",
        message: "What is your ID #",
        name: "id1"
      },
      {
        type: "input",
        message: "What is your office #?",
        name: "office1"
      },
      {
        type: "input",
        message: "What is your name?",
        name: "username2"
      }, 
      {
        type: "list",
        message: "What's your role?",
        name: "role2",
        choices: [
          "Engineer",
          "Intern",
          "Employee",
          "Manager"
        ]
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email2"
        },
        {
          type: "input",
          message: "What is your ID #",
          name: "id2"
        },
        {
          type: "input",
          message: "What is your Github Username?",
          name: "github2"
        },
        {
          type: "input",
          message: "What is your name?",
          name: "username3"
        }, 
        {
          type: "list",
          message: "What's your role?",
          name: "role3",
          choices: [
            "Engineer",
            "Intern",
            "Employee",
            "Manager"
          ]
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email3"
          },
          {
            type: "input",
            message: "What is your ID #",
            name: "id3"
          },
          {
            type: "input",
            message: "What is your Github username?",
            name: "github3"
          },
          {
            type: "input",
            message: "What is your name?",
            name: "username4"
          }, 
          {
            type: "list",
            message: "What's your role?",
            name: "role4",
            choices: [
              "Engineer",
              "Intern",
              "Employee",
              "Manager"
            ]
          },
          {
            type: "input",
            message: "What is your email?",
            name: "email4"
            },
            {
              type: "input",
              message: "What is your ID #",
              name: "id4"
            },
      
      {
          //// if intern is picked
        type: "input",
        message: "What is your Universities Name?",
        name: "school4"
      },
      {
        type: "input",
        message: "What is your name?",
        name: "username5"
      }, 
      {
        type: "list",
        message: "What's your role?",
        name: "role5",
        choices: [
          "Engineer",
          "Intern",
          "Employee",
          "Manager"
        ]
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email5"
        },
        {
          type: "input",
          message: "What is your ID #",
          name: "id5"
        },
        {
          type: "input",
          message: "What is your office #?",
          name: "office5"
        },
      
]);
}


   async function init() {
      try {
        const data = await prompt();

        const html = HTML(data);

        await writeFileAsync("./output/employee.html", html);
      }
      catch (err) {
        console.log(err)
      }
    }
    init();