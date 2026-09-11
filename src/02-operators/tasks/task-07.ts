/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
let price = 650000, night=4, charge=120000, tax=0.11, vip=true, disc=0.12;
let sub = price*night+charge
disc = vip?price*disc:0;
let total = sub-disc;
tax*=sub;
total+=tax;


console.log(`===== Result =====
Subtotal: ${sub}
Discount: ${disc} (12%)
Tax: ${tax}
Final Payment: ${total}
Free Breakfast? ${vip||night>=3?"Yes":"No"}
`);