#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n \t Welcome to the code with Sameer Anis' - Student Management System\n"));
class student {
    id;
    name;
    coursesEnrolled;
    feesAmount;
    constructor(id, name, coursesEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.coursesEnrolled = coursesEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "Please select an Option:\n",
        choices: ["Enroll a Student", "Show Student status"]
    });
    if (action.ans === "Enroll a Student") {
        let studentName = await inquirer.prompt({
            name: "ans",
            type: "input",
            message: "Please enter Your Name:\n"
        });
        let trimmedStudentName = (studentName.ans).trim().toUpperCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(trimmedStudentName) === false) {
            if (trimmedStudentName !== "") {
                baseId++;
                studentId = "STID" + baseId;
                console.log("\n\tYour Account has been Created");
                console.log(`Wellcome, ${trimmedStudentName}!`);
                let cource = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please select a course to enroll:",
                    choices: ["Java", "Python", "TypeScript", "C++", "C#"]
                });
                let courceFees = 0;
                switch (cource.ans) {
                    case "Java":
                        courceFees = 12000;
                        break;
                    case "Python":
                        courceFees = 10000;
                        break;
                    case "TypeScript":
                        courceFees = 8000;
                        break;
                    case "C++":
                        courceFees = 9000;
                        break;
                    case "C#":
                        courceFees = 15000;
                        break;
                }
                let courceConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: "Do  you want to enroll  in this Course"
                });
                if (courceConfirm.ans === true) {
                    let Student = new student(studentId, trimmedStudentName, [cource.ans], courceFees);
                    students.push(Student);
                    console.log("You Have Enrolled in this Course");
                }
            }
            else {
                console.log("Please enter a valid name");
            }
        }
        else {
            console.log("Student already exists");
        }
    }
    else if (action.ans === "Show Student status") {
        if (students.length !== 0) {
            let studentNamesCheck = students.map(e => e.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please Select Name",
                choices: studentNamesCheck
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
} while (continueEnrollment);
