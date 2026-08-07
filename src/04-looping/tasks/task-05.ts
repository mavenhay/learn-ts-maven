/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let m:number[] = [0,0,0,0];
let total=0,n2=0;
scores.forEach(n => {
    for(let i=0; i<m.length;i++) {
        n2 = 95 - (i*10);
        if (n>=n2 || (n<75&&i==m.length-1)) { m[i]++; break;}
    }
    total+=n;
});


console.log(`
===== Competition Summary =====
Gold Medal: ${m[0]}    
Silver Medal: ${m[1]}    
Bronze Medal: ${m[2]}
No Medal: ${m[3]}
Average Competition Score: ${total/scores.length}
`);



/*
if (n>=95) {
    m[0]++;
} else if (n>=85) {
    m[1]++;
} ...... 
*/