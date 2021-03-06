const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Library/htmlRenderer");

//-------------------------------------------------------------------------------------

//Define employee ID number.
let ID = 1;


//Define manager properties.
async function main() {
    console.log(`[main] Starting...`)
    const team = [];

    //Question prompts regarding the manager position.
    const managerData = await inquirer.prompt([
    {   
        name: "name", 
        type: "input",
        message: "What is the name of the manager?" 
    },
    {
        name: "email", 
        type: "input", 
        message: "What is the manager's email address?"
    },
    {
        name: "officeNumber", 
        type: "input", 
        message: "What is the manager's office number?"
    },
    {
        name: "count", 
        type: "input", 
        message: "How many subordinates do they have?"
    }
    ])

    //Information gathered from the question prompts are pushed onto the team array to form the manager object.
    team.push (new Manager(managerData.name, ID++, managerData.email, managerData.officeNumber, managerData.count))


    //For loop to cycle through team members to determine their role and requirements.
    for (let userCount = 1; userCount <= managerData.count; userCount++) {
        
        const user = await inquirer.prompt([
            {
                name: "type",
                type: "list",
                message: `For person ${userCount}/${managerData.name}`,
                choices: ["Intern", "Engineer"] 
            }
        ])

        //Define properties if the selected option is "Engineer".
        if (user.type == "Engineer") {
            const userData = await inquirer.prompt([
                {   
                    name: "name", 
                    type: "input",
                    message: "What is the name of the engineer?" 
                },
                {
                    name: "email", 
                    type: "input", 
                    message: "What is the engineer's email address?"
                },
                {
                    name: "gitHub", 
                    type: "input", 
                    message: "What is the manager's gitHub account URL?"
                }
            ]);
            //Add a new Engineer and their property values to the existing team.
            team.push(new Engineer(userData.name, ID++, userData.email, userData.gitHub));

        //Define properties if the selected option is "Intern".
        } else {
            const userData = await inquirer.prompt ([
                {   
                    name: "name", 
                    type: "input",
                    message: "What is the name of the intern?" 
                },
                {
                    name: "email", 
                    type: "input", 
                    message: "What is the intern's email address?"
                },
                {
                    name: "school", 
                    type: "input", 
                    message: "What school does the intern attend?"
                }
            ]);
            //Add a new Intern and their property values to the existing team.
            team.push(new Intern(userData.name, ID++, userData.email, userData.school));
        }
    }    
    //Render the team information in the HTML file.
    const html = render(team);

    //Write file to the output file. 
    fs.writeFileSync (outputPath, html);
    console.log(`File writing now completed and available in ${outputPath}.`)
}

//Call the main function in order to run the program.
main();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
