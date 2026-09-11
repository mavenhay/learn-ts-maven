

/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
let premium = true;
let subtotal = 850000*1+275000*2+420000*1;
let disc = premium?0.1*subtotal:0;
let voucher = 100000;
let before = subtotal-voucher;
let tax = 0.11*subtotal
let final = subtotal+tax;
let points = final%50000;
let ship = premium||final>1500000;


console.log(`===== Result =====
Product Subtotal: ${subtotal}
Membership Discount: ${disc}
Voucher Deduction: ${voucher}
Payment Before Tax: ${before}
VAT: ${tax}
Final Payment: ${final}
Reward Points: ${points}
Free Shipping; ${ship?"Elligible":"Not Elligible"}`);
