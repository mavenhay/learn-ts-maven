/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
interface Student {student:string,submitted:boolean,score:number};

const submissions:Student[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function totalStudents(arr:Student[]):number {
    return arr.length;
}

function countSubmitted(arr:Student[]):number {
    return arr.reduce((t,n)=>n.submitted?t+1:t,0);
}

function countMissing(arr:Student[]):number {
    return arr.reduce((t,n)=>n.submitted?t:t+1,0);
}

function countPassed(arr:Student[]):Student[] {
    const a:Student[] = [];
    arr.reduce((t,n)=>n.score>=75?a.push(n):t,0);
    return a;
}
function countRevise(arr:Student[]):Student[] {
    const a:Student[] = [];
    arr.reduce((t,n)=>n.score<75?a.push(n):t,0);
    return a;
}

function countAvg(arr:Student[]):number {
    return arr.reduce((t,n)=>t+n.score,0)/arr.length;
}

function findHighest(arr:Student[]):number {
    const a:number[] = [];
    arr.forEach(s=>{a.push(s.score)});
    return a.sort((a,b)=>b-a)[0];
}

function findLowest(arr:Student[]):number {
    const a:number[] = [];
    arr.forEach(s=>{a.push(s.score)});
    return a.sort((a,b)=>a-b)[0];
}

function printReport():void {
console.log(`
===== Submission Report =====
Total Students: ${totalStudents(submissions)}
Submitted Assignments: ${countSubmitted(submissions)}
Missing Assignments: ${countMissing(submissions)}

Passed Students (${countPassed(submissions).length}):`);
countPassed(submissions).forEach(s =>{
    console.log(`   - ${s.student}`);
});
console.log(`
Must Revise Students (${countRevise(submissions).length}):`);
countRevise(submissions).forEach(s =>{
    console.log(`   - ${s.student}`);
});
console.log(`
Average Score: ${countAvg(submissions)}
Highest Score: ${findHighest(submissions)}
Lowest Score: ${findLowest(submissions)}
`);
}

printReport();