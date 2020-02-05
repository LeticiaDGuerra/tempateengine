var fs = require('fs')
const inquirer = require("inquirer");
const HTML= require("./lib/generateHTML")
const convertFactory = require("electron-html-to");




const questions = [
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
];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then(({ github, school, id, office, role, username, ID, email }) => {
    console.log(questions[0]);

    HTML
      .getUser("username")
      .then(response =>
        HTML.getTotalStars().then(stars => {
          return generateHTML({
            stars,
            color,
            github,
            school,
            id, 
            office,
            role, 
            username, 
            ID, 
            email,
            ...response.data
          });
        })
      )
      .then(html => {
        const conversion = convertFactory({
          converterPath: convertFactory.converters.html
        });

        conversion({ html }, function(err, result) {
          if (err) {
            return console.error(err);
          }

          result.stream.pipe(
            fs.createWriteStream(path.join(__dirname, "index.html"))
          );
          conversion.kill();
        });

        open(path.join(process.cwd(), "index.html"));
      });
  });
} 

init();