const inquirer = require("inquirer");
const HTML= require("./lib/generateHTML")

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
      name: "ID"
    }
];
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions).then(({}) => {
      console.log(questions[0]);
  
    //   api
    //     .getUser(github)
    //     .then(response =>
    //       api.getTotalStars(github).then(stars => {
    //         return generateHTML({
    //           stars,
    //           color,
    //           ...response.data
    //         });
    //       })
    //     )
        // .then(html => {
        //   const conversion = convertFactory({
        //     converterPath: convertFactory.converters.PDF
        //   });
  
        //   conversion({ html }, function(err, result) {
        //     if (err) {
        //       return console.error(err);
        //     }
  
        //     result.stream.pipe(
        //       fs.createWriteStream(path.join(__dirname, "resume.pdf"))
        //     );
        //     conversion.kill();
        //   });
  
        //   open(path.join(process.cwd(), "resume.pdf"));
        // });
    });
  }
  
  init();
  