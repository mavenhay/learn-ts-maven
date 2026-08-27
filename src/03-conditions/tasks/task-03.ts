/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */
const name="Raka Saputra", usage=124
let pack = function() {
    if (usage<50) return "Basic";
    if (usage<=150) return "Standard";
    else return "Premium";
}

console.log(`
===== Recommended Package =====
Customer Name: ${name}
Monthly Usage: ${usage}GB
Package: ${pack()}
`);
