/**
 * A school wants to create a simple student profile system. 
 * Every student has a student ID, name, age, major, and current grade level. 
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 * 
 * The program should allow the school to create multiple student objects with different information.
 * Student Tasks
 * Create a class named with "Student"
 * 
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 * 
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */
class Student {
    private studentId:string;
    private name:string;
    private age:number;
    private major:string;
    private grade:number;

    constructor(id:string, name:string, age:number, major:string, grade:number) {
        this.studentId = id
        this.name = name;
        this.age = age;
        this.major = major;
        this.grade = grade;
    }

    showProfile():void {
        console.log(`===== Student Profile =====
Student ID: ${this.studentId}
Name: ${this.name}
Age: ${this.age}
Major: ${this.major}
Grade: ${this.grade}
`);
    }
}

const student1 = new Student("ST001", "Lionel Messi", 17, "Software Engineering", 11);
student1.showProfile()
