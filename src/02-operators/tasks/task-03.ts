/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculate and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

let basicSalary:number=5000000,overtimeHours:number=12,overtimeRate:number=500000,overtimePay:number=0, bonus:number=0, finalSalary:number=0;

overtimePay = overtimeRate*overtimeHours;
bonus = overtimeHours > 10 ? 300000:0;
finalSalary = overtimePay+overtimePay+bonus

console.log(`
===== Employee Information =====
Employee Name: Dimas
Overtime Pay: ${overtimePay}
Bonus: ${bonus}
Final Salary; ${finalSalary}
`)