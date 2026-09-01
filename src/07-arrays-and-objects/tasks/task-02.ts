
interface Product {id:number, name:string, category:string, price:number, stock:number}
const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];

/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */
function display(ar:Product[],msg:string, call?: (a:Product)=>string) {
    console.log(msg);
    ar.forEach(p=>console.log(` - ${p.name}${call? call(p):""}`));
    console.info();
}

display(products.filter(p=>p.stock!=0), "Available Products:");
display(products.filter(p=>p.stock==0), "Unavailable Products:");
const onlyName = products.map(p=>p.name);
console.info("Product Names:")
onlyName.forEach(p=>console.info(` - ${p}`))
console.info(`All Values: ${products.reduce((t,n)=>t+n.price,0)}`);
display(products.sort((p1,p2)=>p2.price-p1.price), "Expensive -> Cheapest:", (a)=>` : ${a.price}`)

let a = [1,2,3,4,5]
console.info(a.splice(3,5))
console.info(a)