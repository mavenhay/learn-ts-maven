/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000,350000,78000,910000,150000,420000,275000,99000,640000,18000];
let total=0,highest=0,lowest=0,pinjam300=0,avg:number;

sales.forEach( sale => {
    total+=sale;
    highest=(sale>highest)?sale:highest;
    lowest=(sale<lowest || lowest==0)?sale:lowest;
    if(sale>=300000)pinjam300++;
});

avg = total/sales.length;

console.log(`
===== Sales Info =====
Total Sales Revenue: ${total}
Highest Transaction: ${highest}
Lowest Transaction: ${lowest}
Rp300,000+ Transactions: ${pinjam300}
Average Transaction Value: ${avg} 
`);