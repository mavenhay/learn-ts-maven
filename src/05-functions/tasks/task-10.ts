/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
interface Student {student:string, course:string, completed:boolean, score:number, duration:number};
const enrollments:Student[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function totalEnrollment(arr:Student[]) {
    return arr.length;
}
function countCompletedEnrollment(arr:Student[]) {
    return arr.filter(t=>t.completed).length;
}
function countIncompleteEnrollment(arr:Student[]) {
    return arr.filter(t=>!t.completed).length;
}
function findCompletionPercentage(arr:Student[]) {
    return (countCompletedEnrollment(arr)/totalEnrollment(arr))*100;
}
function avg(arr:number[]) {
    return arr.reduce((t,n)=>t+n,0)/arr.length;
}
function findHighest(arr:number[]) {
    return arr.sort((a,b)=>b-a)[0];
}
function findLowest(arr:number[]) {
    return arr.sort((a,b)=>b-a)[0];
}
function courseAvgScore(arr:Student[]):[string,number][] {
    let a:[string,number][] = [];
    arr.forEach(s=>{
        if(!a.find(n=>n[0]==s.course)){
            a.push([s.course,avg(arr.filter(n=>n.course==s.course).map(s=>s.score))]);
        }
    });
    return a
}
function filterPassStudents(arr:Student[]):string[] {
    return arr.filter(s=>s.score>=75).map(s=>s.student);
}
function countTotalHours(arr:Student[]):number {
    return arr.reduce((t,n)=>t+n.duration,0);
}
function printAvgEachCourse(arr:Student[]):string {
    let a:string = ``;
    courseAvgScore(arr).forEach(n=>{
        a+=`\n - ${n[0]}: ${n[1]}`;
    });
    return a
}
function dummyFn():void {
    console.log("WOKWOWKWWOKWKWWOOWKWKW");
}
function printPassed(arr:string[]):string {
    let a:string = ``;
    arr.forEach(n=>{
        a+=`\n - ${n}`;
    });
    return a
}

let simpan = filterPassStudents(enrollments)
function printReport():void {
    console.log(`
===== Enrollment Report =====

+++ Completion Statistics +++
Total Enrollments: ${totalEnrollment(enrollments)}
Completed Enrollments: ${countCompletedEnrollment(enrollments)}
Incomplete Enrollments: ${countIncompleteEnrollment(enrollments)}
Completion Percentage: ${findCompletionPercentage(enrollments)}%

+++ Academic Statistics +++
Highest Score: ${findHighest(enrollments.map(s=>s.score))}
Lowest Score: ${findLowest(enrollments.map(s=>s.score))}
Average Score: ${avg(enrollments.map(s=>s.score))}
Students with Passing Scores (${simpan.length}):${printPassed(simpan)}

+++ Course Statistics +++
Total Learning Hours: ${countTotalHours(enrollments)}
Each Course Average Score:${printAvgEachCourse(enrollments)}

+++ Learning Statistics +++
Total Learning Hours: ${countTotalHours(enrollments)}
Average Learning Duration: ${avg(enrollments.map(n=>n.duration))}
`);
}
dummyFn()
printReport()