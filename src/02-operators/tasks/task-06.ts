/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const playtimeMinutes = 35, playtimeHours = 7;
const playtimeCalc = playtimeHours*60+playtimeMinutes;
const bill = (playtimeHours+1)*8000
const remainings = (playtimeHours+1)*60-playtimeCalc;
const discount = playtimeCalc>=5?bill*0.15:0;
const final = bill-discount;
console.log(`===== Payment =====
Playtime in Minutes: ${playtimeCalc}
Remaining Minutes: ${remainings}
Billed Hours: ${playtimeHours+1} Hours
Subtotal: ${bill}\n${discount?`Discount: ${discount}`:""}
Final Payment: ${final}
`);