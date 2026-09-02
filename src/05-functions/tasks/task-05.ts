/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

function calc(nums: number[]):number {
    return nums.reduce((t,n,i)=>t+n,0);
}

function findHighestScore(scores: number[]): number {
    return scores.sort((a,b)=>b-a)[0];
}
function findLowestScore(scores: number[]): number {
    return scores.sort((a,b)=>a-b)[0];
}

function calculateAverage(scores: number[]): number {
    return calc(scores)/scores.length;
}

function countPassedStudents(scores: number[]): number {
    return scores.reduce((t,n,i)=>(scores[i]>=75)?t+1:t,0);
}
const thetable:number[] = [90,86,12,67,92];

console.log(countPassedStudents(thetable));
console.log(findLowestScore(thetable));
console.log(findHighestScore(thetable));
console.log(calculateAverage(thetable));