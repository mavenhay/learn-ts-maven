/**
 * An online store has the following products:
 */
interface Product {name:string,price:number}
const products:Product[] = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */
function process(prods:Product[], cb: (prc:Product)=>void):void {
    prods.forEach(p=>cb(p));
}

function expensive(p:Product) {
    if(p.price>1000000)console.log(`Expensive Product: ${p.name}`);
}

function discount(p:Product) {
    if (p.price>500000) console.log(`Discount 10%: ${p.price} -> ${p.price*0.9}`);
}

process(products,expensive);
process(products,discount);