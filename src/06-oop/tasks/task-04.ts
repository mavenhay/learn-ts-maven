/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */
class Employee {
    public employeeId:string; public name:string; public position:string; private basicSalary:number; private bonus:number=0
    constructor(employeeId:string, name:string, position:string, basicSalary:number,  bonus:number=0) {
        this.employeeId = employeeId; this.name = name; this.position = position; this.basicSalary = basicSalary; this.bonus=bonus;
    }
    getBasicSalary() {
        return this.basicSalary
    }
    setBasicSalary(amount:number) {
        if(amount>0) this.basicSalary = amount;
    }
    addBonus(amount:number) {
        if(amount>0) this.bonus+=amount;
    }
    getTotalSalary() {
        return this.basicSalary+this.bonus
    }
    showProfile() {
        console.log(`===== Employee Profile =====
ID: ${this.employeeId}
Name: ${this.name}
Position: ${this.position}
Basic Salary: ${this.basicSalary}`);
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000
);

employee.addBonus(2000000);

console.log(employee.getTotalSalary());

employee.showProfile();