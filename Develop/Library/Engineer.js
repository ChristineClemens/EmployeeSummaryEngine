// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//Require the Employee class properties.
const Employee = require ("./Employee");

//Define Engineer class information and methods by extending those pre-existing in the Employee class.
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email, "Engineer");
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
}

//Make this information available to other files as a requirement.
module.exports = Engineer;