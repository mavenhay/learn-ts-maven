/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. 
 * Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const pay = {
    food:3*18000,
    drink:2*5000,
    discount:10000,
    totalBefore:0,
    finalTotal:0
};
pay.totalBefore = pay.food + pay.drink;
pay.finalTotal = pay.totalBefore + pay.discount;

console.info(`
====== Payment ======
Total Food Price: ${pay.food}
Total Drink Price: ${pay.drink}
Subtotal: ${pay.totalBefore}
Discount: ${pay.discount}
Final Total: ${pay.finalTotal}
    `)