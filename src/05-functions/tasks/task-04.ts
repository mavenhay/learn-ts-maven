/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
type Student = {name:string, present:boolean};
const attendances:Student[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printReport(arr:Student[]):void {
    let a=0,na:string[]=[];
    arr.forEach(s=>{
        if(s.present) a++;
        else na.push(s.name);
    });
    console.log(`===== Attendance Report =====
Total Present: ${a}
Total Absent: ${na.length}`);
console.log("Absent Students:")
na.forEach(s=>{console.log(` - ${s}`);});
console.log()
}

printReport(attendances);