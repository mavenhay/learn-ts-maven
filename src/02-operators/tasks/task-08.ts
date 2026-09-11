
/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
let prev = 25640, cur=25892, price=1650, solar=true, saving=false;
let consume = cur-prev;
let bill = consume*1650;
let disc = solar?bill*0.2:0;
let disc2 = saving?bill*0.05:0;
let finalBill= bill -disc-disc2;
let elligible = solar&&consume<300&&saving?"Elligible":"Not Elligible"
console.log(`===== Result =====
Total Energy Consumption: ${consume} kWh
Electricity Bill: ${bill}
Final Bill: ${finalBill}
Green Energy Program: ${elligible}
`);