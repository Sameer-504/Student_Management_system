import inquirer from "inquirer";
class student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.courseEnrolled = courseEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseID = 1000;
let studentID = "";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            message: "Please select an Option:\n",
            choices: ["Enroll a Student", "Show Student status"]
        }
    ]);
    if (action.ans === "Enroll a Student") {
        let studentName = await inquirer.prompt({
            name: "ans",
            type: "input",
            message: "Please enter Your Name:\n"
        });
        let trimmedStudentName = (studentName.ans).trim().tolowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (trimmedStudentName !== "") {
            baseID++;
            studentID = "STID" + baseID;
            console.log("\n\tYour Account has been Created");
            console.log(`Wellcome, ${trimmedStudentName}!`);
        }
    }
} while (true);
