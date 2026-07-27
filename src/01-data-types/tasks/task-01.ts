/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

const name:string = "Nadia Putri";
const studentID:string = "ST2026045";
const isParticipatingExtracurricular:boolean = true;
const midtermExamScore:number = 84;
const finalExamScore:number = 91.5;
const assignmentsScore:number = 88.5;
const attendanceScore:number = 100;
let grade:string;

if (isParticipatingExtracurricular) {
    console.log("YES ikut ekskul\n");
} else {
    console.log("NO ikut ekskul\n");
}
let finalScore = (midtermExamScore+finalExamScore+assignmentsScore+attendanceScore)/4
console.log("============",name+"'s Data ============");
console.log("Student Name:",name);
console.log("Student ID:",studentID);
console.log("Midterm Exam Score:",midtermExamScore);
console.log("Final Exam Score:",finalExamScore);
console.log("AssignmentsScore:",assignmentsScore);
console.log("Attendance Score:", attendanceScore);
console.log("Is Participating Extracurricular:",(isParticipatingExtracurricular)?"Ikut Ekskul":"Tidak Ikut Ekskul");
console.log("Final Score",finalScore+"\n")

if (finalScore>=90) {
    grade = "A";
} else if (finalScore>=80){
    grade = "B";
} else if (finalScore>=75) {
    grade = "C";
} else {
    grade = "D";
}

console.log("Grade:",grade);