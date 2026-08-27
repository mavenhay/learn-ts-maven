/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const products:[string,number,number][] = [["Mechanical Keyboard",850000,1], ["Wireless Mouse",275000,2], ["Mouse Pad",120000,1]];
let subtotal=0,finalPayment,discount
console.log(`
===== Product =====
[Product Name] _ [Price] _ [Quantity]`);
products.forEach(n=>{
    subtotal+=n[1]*n[2];
    console.log(`- ${n[0]} _ ${n[1]} _ ${n[2]}`);
});
discount = subtotal>1000000?subtotal*0.1:0;
finalPayment = subtotal-discount;
console.log(`
===== Payment Result =====
Subtotal: ${subtotal}
Discount: ${discount}
Final Payment: ${finalPayment}
`);