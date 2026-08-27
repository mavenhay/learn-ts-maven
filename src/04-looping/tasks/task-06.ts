/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
let out=0,low=0,safe=0,total=0,avg=0;
stocks.forEach(n =>{
    if (n<=0) out++;
    else if (n<10) low++;
    else safe++;
    total+=n
});
avg = total/stocks.length;
console.log(`
===== Stock Report =====
Out of Stock: ${out}
Low Stock: ${low}
Safe Stock: ${safe}
Total Inventory: ${stocks.length}
Average Stock Quantity: ${avg}
`);