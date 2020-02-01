var questions = require("inquirer");
var HTML= require("./lib/generateHTML")

questions
  .prompt([
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
      name: "ID"
    },
  ])
  .then(function(response) {

    if (response.method === response.list) {
      console.log("Success!");
    }
    else {
      console.log("Wrong, sir!");
    }
  });