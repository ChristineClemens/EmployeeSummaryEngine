// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//Require the Employee class properties.
const Employee = require("./Employee")

//Define Manager class information and methods by extending those pre-existing in the Employee class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber ) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

//Make this information available to other files as a requirement.
module.exports = Manager;