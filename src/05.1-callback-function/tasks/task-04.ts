/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */
function pass(sc:number):string {
    let grade = "D";
    if (sc>=90) grade = "A";
    else if (sc>=80) grade = "B"; 
    else if (sc>=70) grade = "C";
    return grade;
}
function bonus(sc:number):number {
    return sc+5<=100?sc+5:sc;
}
function msg(sc:number):string{
    return sc>90?"Excellent":"Regular";
}

function convert<T>(arr:number[], call: (sc:number)=>T):T[] {
    let a:T[] = [];
    arr.forEach(s=>{
        a.push(call(s));
    });
    return a;
}

console.log("Passed:",convert(scores, pass));
console.log("+5 Bonus:",convert(scores, bonus));
console.log("Message:",convert(scores, msg));

