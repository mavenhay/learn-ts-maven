/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */
const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
        score:0
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
        score:0
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
        score:0
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];
console.log("Students Score:");
students.forEach((s)=>{
    s.score = s.answers.filter((a,i)=>a==correctAnswers[i]).length*20;
    console.log(` - ${s.name}:`,s.score);
});
console.log("Passed Students:");
students.filter(s=>s.score>70).forEach(s=>console.log(` - ${s.name}`));
console.log("Highest Score:", students.sort((a,b)=>b.score-a.score)[0].score);
console.log("Average Score:", students.reduce((t,n)=>t+n.score,0)/students.length);