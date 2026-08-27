/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function calculateFinalGrade(assignment:number, midterm:number, final:number):number {
    return (assignment*0.3)+(midterm*0.3)+(final*0.4)
}
interface Student {name:string, a:number, m:number, f:number};

const students:Student[] = [
    {name:"Alya",a:85,m:80,f:92},
    {name:"Budi",a:78,m:75,f:81},
    {name:"Citra",a:90,m:88,f:95},
];

console.log(`===== Students' Final Grade =====`);
students.forEach(s=>{
    console.log(`${s.name}: ${calculateFinalGrade(s.a,s.m,s.f)}`);
});
