/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

interface Student {name:string,major:string,active:boolean};

const students:Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students:Student[]):number{
  return students.reduce((t,n,i)=>students[i].active?t+1:t,0);
}

function countInactiveStudents(students:Student[]):number{
  return students.reduce((t,n,i)=>students[i].active?t:t+1,0);
}

function enroll(students:Student[]):[string,Student[]][] {
  let a:string[] = [], b:[string,Student[]][] = [];
  students.forEach(s=>{
    if (!a.includes(s.major)){
      a.push(s.major);
      b.push([s.major,[]]);
    }
    // console.log(a,b)
    let temp = b[a.indexOf(s.major)][1];
    temp.push(s);
  });
  return b;
}
// function checkClass(sts:Student[],maj:string) {
//   console.log(`${maj} Students:`);
//   sts.forEach(s=> {if(s.major==maj)console.log(` - ${s.name}`)});
// }
// function countsad(sts:Student[],maj:string):number {
//   let a =0;
//   sts.forEach(s=> {if(s.major==maj)a++});
//   return a;
// }
function countStudentsByMajor(students:[string,Student[]][]):[string,number][]{
  let b:[string,number][]=[];
  students.forEach(s => {
    b.push([s[0],s[1].reduce((t)=>t+1,0)]);
  });
  return b;
}

function printEnrollment(enrollment:[string,Student[]][]):void{
  enrollment.forEach((e,id)=>{
    console.log(`${e[0]} Major Students:`);
    e[1].forEach(i=>{
      console.log(`- ${i.name}`);
    });
    console.log();
  });
}
let asd = enroll(students);
function printReport():void {
  console.log("===== Enrollment Report =====");
  console.log(`
Total Students: ${students.length}
Active Students: ${countActiveStudents(students)}
Inactive Students: ${countInactiveStudents(students)}
  `);
  printEnrollment(asd);
  // checkClass(students,"Software Engineering");
  // checkClass(students,"Networking");
  // checkClass(students,"Multimedia");
}

printReport()