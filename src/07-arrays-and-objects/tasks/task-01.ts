/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

let no1 = students.map(s=>s.name), no2=students.filter(s=>s.score>=70),no3=students.find(s=>s.name=="Citra"),no4=students.reduce((t,n)=>t+n.score,0)/students.length;
console.info(`${no1}`);
no2.forEach(s=>console.info(`${s.name} : ${s.score}`))
console.info(`${no3?.name} : ${no3?.score}`)
console.info(`${no4}`);