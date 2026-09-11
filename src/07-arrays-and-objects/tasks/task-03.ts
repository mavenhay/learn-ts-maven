/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];
let a = (str:string)=>students.filter((s,i)=>attendance[i].status==str).map(s=>s.name);
console.log(`Present: ${a("present")}`);
console.log(`Absent: ${a("absent")}`);
console.log(`Late: ${a("late")}`);
console.log(`\n{name, status} Array:`)
students.map((s,i)=>{ return {name:s.name, status:attendance[i].status}}).forEach(s=>{
    console.log(`${s.name}, ${s.status}`)
});