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
        let trimmedStudentName = (studentName.ans).trim().toLowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(trimmedStudentName) === false) {
            if (trimmedStudentName !== "") {
                baseID++;
                studentID = "STID" + baseID;
                console.log("\n\tYour Account has been Created");
                console.log(`Wellcome, ${trimmedStudentName}!`);
                let course = await inquirer.prompt([{
                        type: "list",
                        name: "ans",
                        message: "Please select a course to enroll:",
                        choices: ["Java", "Python", "TypeScript", "C++", "C#"]
                    }]);
                let courseFees = 0;
                switch (course.ans) {
                    case "Java":
                        courseFees = 12000;
                        break;
                    case "Python":
                        courseFees = 10000;
                        break;
                    case "TypeScript":
                        courseFees = 8000;
                        break;
                    case "C++":
                        courseFees = 9000;
                        break;
                    case "C#":
                        courseFees = 15000;
                        break;
                }
                let courseConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: "Do  you want to enroll  in this Course"
                });
                if (courseConfirm.ans === true) {
                    let Student = new student(studentID, trimmedStudentName, [course.ans], courseFees);
                    students.push(Student);
                    console.log("You Have Enrolled in this Course");
                }
            }
        }
    }
    else if (action.ans === "Show Student status") {
        if (students.length == 0) {
            let studentNameCheck = students.map(e => e.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please Select Name",
                choices: studentNameCheck
            });
            let foundStudent = students.find(Student => Student.name === selectedStudent.ans);
            console.log("Student Information");
            console.log(foundStudent);
            console.log("\n");
        }
        else {
            console.log("Record is Empty");
        }
    }
    let userConfirm = await inquirer.prompt({
        type: "confirm",
        name: "ans",
        message: "Do you want to continue?"
    });
    if (userConfirm.ans === false) {
        continueEnrollment = false;
    }
} while (true);
