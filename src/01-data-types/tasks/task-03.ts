/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
type Student = {
    id:number,
    name:string,
    age:number,
    active:boolean
};

const std1:Student = {
    id:10,
    name:"Maven HAY",
    age:16,
    active:true
};

const std2:Student = {
    id:11,
    name: "Yah Nevam",
    age:16,
    active:true
};

const std3:Student = {
    id:12,
    name: "Dummy Dummy",
    age:99,
    active:false
};
console.info("============ Student Infos ============")
console.info(std1);
console.info(std2);
console.info(std3);