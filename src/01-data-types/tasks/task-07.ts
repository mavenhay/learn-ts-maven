/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
enum Grade {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced"
}

type Student = {id:number, name:string, level:Grade};
type Course = {id:string, title:string, instructor:string, totalLearningHours:number};
type Registration = {student:Student, course:Course,date:string, isPaid:boolean};

const courses:Course[] = [
    {id:"MLG-1", title: "English Course", instructor:"Zakaria", totalLearningHours:2},
    {id:"MLG-3", title: "Coding Course", instructor:"Alif", totalLearningHours:1.5}
];

const students:Student[] = [
    {id:20, name:"Maven", level:Grade.Intermediate},
    {id:7, name:"Popopo", level:Grade.Beginner},
    {id:92, name:"John", level:Grade.Beginner}
];

const registrations:Registration[] = [
    {student:students[0], course:courses[1], date:"2/5/2017", isPaid:true},
    {student:students[1], course:courses[1], date:"17/2/2023", isPaid:false},
    {student:students[2], course:courses[0], date:"30/11/2025", isPaid:true}
];

registrations.forEach(reg => {
    console.info(`
========== ${reg.student.name}'s Registration ==========
Student: ${reg.student.name} 
Course: ${reg.course.title} 
Date: ${reg.date} 
Payment Status: ${reg.isPaid?"Completed":"Not Completed"} 
`);
});
