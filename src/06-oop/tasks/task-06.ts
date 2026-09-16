/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */
class Person {
    public name: string;
    public age: number;
    constructor(name:string, age:number) { 
        this.name = name;
        this.age = age;
    }

    showInfo(): void {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

class Student extends Person {
    public studentId:string;
    public grade:number;
    constructor(name:string,age:number,id:string,grade:number){
        super(name,age);
        this.studentId = id;
        this.grade = grade;
    }
}

class Teacher extends Person {
    public employeeId;
    public subject;
    constructor(name:string,age:number,id:string,subject:string){
        super(name,age);
        this.employeeId = id;
        this.subject = subject;
    }
}

const st1 = new Student("Kylian Mbappé",17,"ST001",11);
const tc1 = new Teacher("Cristiano Ronaldo",38,"EMP001","Programming");

st1.showInfo();
tc1.showInfo();