/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type Attendance = {employeeID:number, employeeName:string, date:string, ciTime:string, coTime:string, totalHours:number, present:boolean}

const attendances: Attendance[] = [
    {employeeID:2, employeeName:"Uhaynaten", date:"20/6/2025", ciTime:"07:00", coTime:"15:23", totalHours:6, present:true},
    {employeeID:32, employeeName:"Nevam", date:"23/6/2025", ciTime:"06:38", coTime:"13:45", totalHours:4, present:true},
    {employeeID:89, employeeName:"Dami", date:"23/6/2025", ciTime:"00:00", coTime:"00:00", totalHours:0, present:false}
]

attendances.forEach(obj => {
    console.info(`
===== ${obj.employeeName}'s Attendance =====
Employee ID: ${obj.employeeID}
Employee Name: ${obj.employeeName}
Date: ${obj.date}
Check-In Time: ${obj.ciTime}
Check-Out Time: ${obj.coTime}
Total Working Hours: ${obj.totalHours}
Present: ${obj.present?"Present":"Not Present"}`)
});