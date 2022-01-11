const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
  initHTML();
  addTeam();
}

function addTeam() {
  inquirer
    .prompt([
      {
        message: "Welcome to the Dunder Mifflin Regional Directory Generator. Please press enter add to your team!",
        name: "intro",
      },
      {
        message: "Enter the team member's name:",
        name: "name",
      },
      {
        type: "list",
        message: "Select the team member's role:",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "Enter the team member's work id:",
        name: "id",
      },
      {
        message: "Enter the team member's email address:",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "school name";
      } else {
        roleInfo = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Enter the team member's ${roleInfo}:`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add additional team members?",
            choices: ["yes", "no"],
            name: "moreMembers",
          },
        ])
        .then(function ({ roleInfo, moreMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addHTML(newMember).then(function () {
            if (moreMembers === "yes") {
              addTeam();
            } else {
              finishHTML();
            }
          });
        });
    });
}

function initHTML() {
  const HTML = `<!DOCTYPE HTML>
    <HTML lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><title>Dunder Mifflin Employee Directory</title>
        <script src="https://kit.fontawesome.com/36d0870215.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <hero>
        <img class="d-block mx-auto mb-4" src="../assets/dundermifflin.png" alt="Dunder Mifflin">
        <h1 class="display-5 fw-bold text-center">Office Directory</h1>
        <br />
    </hero>
    <div class="container">
            <div class="row">`;
  fs.writeFile("./dist/team.html", HTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("start");
}

function addHTML(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getID();
    const email = member.getEmail();
    let data = "";
    if (role === "Engineer") {
      const gitHub = member.getGitHub();
      data = `<div class="col-md-3 col-sm-12">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}</h5>
            <h6 class="card-header">Engineer</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="http://www.github.com/${gitHub}">${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      data = `<div class="col-md-3 col-sm-12">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}</h5>
            <h6 class="card-header">Intern</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
    } else {
      const officePhone = member.getOfficeNumber();
      data = `<div class="col-md-3 col-sm-12">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}</h5>
            <h6 class="card-header">Manager</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
    }
    console.log("Team member added!");
    fs.appendFile("./dist/team.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHTML() {
  const HTML = ` </div>
    </div>
 <footer class="text-center">Copyright <i class="fas fa-copyright"></i> 2022 Dunder Mifflin Paper Company</footer>
   
</body>
</HTML>`;

  fs.appendFile("./dist/team.html", HTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Your team page has been created. Please look in the dist folder.");
}

initApp();
