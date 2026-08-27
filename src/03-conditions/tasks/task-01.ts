/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

<<<<<<< HEAD



=======
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement, 
 * will be display "Congratulations! You are eligible to graduate.", 
 * otherwise display "You are not eligible to graduate."
 */


// TODO: Return grade based on score:
//   90-100 → "A", 80-89 → "B", 70-79 → "C", 60-69 → "D", below 60 → "F"
function getGrade(score: number): string {
  if (score>=90) return "A"; 
  else if (score>=80) return "B"; 
  else if (score>=70) return "C"; 
  else if (score>=60) return "D"; 
  else return "F"; 
}

// TODO: Return the number of days in the given month (ignore leap years).
// Use a switch statement. month is 1-12.
function daysInMonth(month: number): number {
  switch (month) {
    case 1: return 31;
    case 2: return 28;
    case 3: return 31;
    case 4: return 30;
    case 5: return 31;
    case 6: return 30;
    case 7: return 31;
    case 8: return 31;
    case 9: return 30;
    case 10: return 31;
    case 11: return 30;
    case 12: return 31;
    default: return 0;
  }
  
}

// TODO: Return "positive", "negative", or "zero"
function checkSign(num: number): string {
  if (num>0) return "positive";
  else if (num<0) return "negative";
  else return "zero";
}

// --- Tests (do not modify) ---
console.log("getGrade(95):", getGrade(95)); // expected: "A"
console.log("getGrade(72):", getGrade(72)); // expected: "C"
console.log("getGrade(45):", getGrade(45)); // expected: "F"
console.log("daysInMonth(2):", daysInMonth(2)); // expected: 28
console.log("daysInMonth(4):", daysInMonth(4)); // expected: 30
console.log('checkSign(5):', checkSign(5)); // expected: "positive"
console.log('checkSign(-3):', checkSign(-3)); // expected: "negative"
console.log('checkSign(0):', checkSign(0)); // expected: "zero"