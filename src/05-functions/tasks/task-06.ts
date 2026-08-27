/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [125000,780000,250000,99000,540000,670000,180000,450000,310000,820000];


function calculateTotalSales(sales: number[]): number {
  return sales.reduce((t,n)=>t+n,0);;
}

function findHighestTransaction(sales: number[]): number {
  return sales.sort()[sales.length-1];
}

function findLowestTransaction(sales: number[]): number {
  return sales.sort()[0];
}

function calculateAverageSale(sales: number[]): number {
  return calculateTotalSales(sales)/sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  return sales.reduce((t,n,i)=>(sales[i]>=minimumAmount)?t+1:t,0);
}

console.log(calculateAverageSale(sales));
console.log(findLowestTransaction(sales));
console.log(findHighestTransaction(sales));
console.log(calculateAverageSale(sales));
console.log(countLargeTransactions(sales, 200000));