/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */


const temps = [24.5,25.1,26.8,28.4,30.2,31.1,30.7,29.3];
let lowest=0,highest=0,average,total=0;

for (let i = 0; i < temps.length; i++) {
    lowest = (lowest == 0 || temps[i] < lowest)?temps[i]:lowest;
    highest = (highest == 0 || temps[i] > highest)?temps[i]:highest;
    total+=temps[i];
}

average = total/temps.length;

console.info(`
====== Temperature Data ======
Lowest: ${lowest}
Highest: ${highest}
Average: ${average}`);