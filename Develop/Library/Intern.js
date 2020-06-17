// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//Require the Employee class properties.
const Employee = require("./Employee")

//Define Intern class information and methods by extending those pre-existing in the Employee class.
class Intern extends Employee {
    constructor (name,id,email, school) {
        super(name,id,email, "Intern");
        this.school = school;
    }
    getSchool() {
        return this.school
    }
}

//Make this information available to other files as a requirement.
module.exports = Intern;