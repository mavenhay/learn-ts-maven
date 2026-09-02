/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let g:number[] = [0,0,0,0];
students.forEach(s=>{
    if (s.score>=90) g[0]++;
    else if (s.score>=80) g[1]++;
    else if (s.score>=70) g[2]++;
    else g[3]++;
});


console.log(`===== Final Grades Report =====
A: ${g[0]}
B: ${g[1]}
C: ${g[2]}
D: ${g[3]}
Highest Score: ${students.sort((a,b)=>b.score-a.score)[0]}
Lowest Score: ${students.sort((a,b)=>a.score-b.score)[0]}
Average Score: ${students.reduce((t,n)=>t+n.score,0)}
`);