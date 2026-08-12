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
  return students.reduce((t,n,i)=>students[i].active?t:t+i,0);
}

function enroll(students:Student[]):[string,Student[]][] {
  let a:string[] = [], b:[string,Student[]][] = [];
  students.forEach(s=>{
    if (!a.includes(s.major)){
      a[a.length] = s.major;
      b[b.length] = [s.major,[]];
    }
    // console.log(a,b)
    let temp = b[a.indexOf(s.major)][1];
    temp[temp.length] = s;
  });
  return b;
}

function countStudentsByMajor(students:[string,Student[]][]):[string,number][]{
  let b:[string,number][]=[];
  students.forEach(s => {
    b[b.length][0] = s[0];
    b[b.length][1] = s[1].reduce((t)=>t+1,0);
  });
  return b;
}

function printEnrollmentReport(enrollment:[string,Student[]][]):void{
  enrollment.forEach(e=>{
    console.log(`${e[0]} Major:`);
    e[1].forEach(i=>{
      console.log(`- ${i.name}`);
    });
    console.log();
  });
}

let asd = enroll(students);

printEnrollmentReport(asd);