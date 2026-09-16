/**
 * A company has different types of employees.
 * Every employee has:
 * - Name
 * - Employee ID
 * - Basic salary
 * 
 * However, the way their total salary is calculated differs.
 * - Full-Time Employee receive Basic Salary + Fixed Allowance
 * - Part-Time Employee receive Basic Salary + Hours Worked × Hourly Rate
 * 
 * example:
 * Fulltime Employee
 * Name: Mohamed Salah
 * Basic Salary: Rp8,000,000
 * Allowance: Rp1,500,000
 * 
 * ParttimeEmployee
 * Name: Erling Haaland
 * Basic Salary: Rp2,000,000
 * Hours Worked: 40
 * Hourly Rate: Rp50,000
 * 
 */

class Employee {
    public name: string;
    public employeeID: string;
    protected basicSalary: number;
    constructor(name:string, id:string, salary:number) { 
        this.name = name;
        this.employeeID = id;
        this.basicSalary = salary;
    }

    calculateSalary(): number {
        return this.basicSalary
    }
}

class FullTimeEmployee extends Employee {
    public allowance:number;
    constructor(name:string,id:string,salary:number,allowance:number){
        super(name,id,salary);
        this.allowance = allowance;
    }
    calculateSalary(): number {
        return this.basicSalary+this.allowance;
    }
}

class PartTimeEmployee extends Employee {
    public hours:number;
    public rate:number;
    constructor(name:string,id:string,salary:number,hours:number,rate:number){
        super(name,id,salary);
        this.hours = hours;
        this.rate = rate;
    }
    calculateSalary(): number {
        return this.basicSalary+(this.hours*this.rate)
    }
}

/** implement of polymorphism */
const employees: Employee[] = [
    new FullTimeEmployee(`Mohamed Salah`, `111`, 8000000, 1500000),
    new PartTimeEmployee(`Erling Haaland`, `112`, 2000000,50,40000)
];

for (const employee of employees) {
    console.log(`${employee.name} receive ${employee.calculateSalary()}`);
}