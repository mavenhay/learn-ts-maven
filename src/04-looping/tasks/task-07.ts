/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];
let present=0,absent:string[]=[];
attendances.forEach(s=>{
  if (s.present) present++;
  else absent.push(s.name);
});
console.log(`
===== Attendance Report =====
Present Students: ${present}
Absent Students (${absent.length}):`);
for(const a in absent) console.log(` - ${a}`);