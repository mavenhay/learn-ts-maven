/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
interface Patient {id:string, name:string, age:number, department:string, admitted:boolean, bill:number};
const patients:Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatient(arr:Patient[]=patients):number {return arr.length};
function countTotalAdmitted(arr:Patient[]=patients):number {
    return arr.reduce((t,n)=>n.admitted?t+1:t,0);
}
function countTotalDischarged(arr:Patient[]=patients):number {
    return arr.reduce((t,n)=>!n.admitted?t+1:t,0);
}
function countPatientEachDepartment(arr:Patient[]=patients):[string[],number[]] {
    let a:[string[],number[]] = [[],[]]; 
    arr.forEach((s,i)=>{
        if (a[0].includes(s.department)) a[0].push(s.department);
        a[1][a[0].indexOf(s.department)]++;
    });
    return a;
}
function findHighestBill(arr:Patient[]=patients):number {
    return arr.sort()[0].bill;
}
function findLowestBill(arr:Patient[]=patients):number {
    return arr.sort()[arr.length-1].bill;
}
function calcRevenue(arr:Patient[]=patients):number {
    return arr.reduce((t,n)=>t+n.bill,0)
}
function calcBillAverage(arr:Patient[]=patients):number {
    return calcRevenue(arr)/arr.length
}
function admittedPatients(arr:Patient[]=patients):Patient[] {
    let a:Patient[] = [];
    arr.forEach(p=>{if(p.admitted) a.push(p)})
    return a
}
function printHospitalReport():void {
    console.log(`===== Hospital Report =====
Total Patients: ${countTotalPatient()}
Total Aditted Patients: ${countTotalAdmitted()}
Total Discharged Patients: ${countTotalDischarged()}

    `);
}
printHospitalReport()