/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
**/
type Product = {name:string, id:string, price:number, quantity:number, discount:number, freeShipping:boolean};
enum Member {
    Premium = "Premium",
    Regular = "Regular",
    None = "No Member"
}
type Customer = {name:string, id:number, member:Member};
type Transaction = {id:number, total:number, totaldisc:number, customer:Customer};

const product:Product = {
    name:"Mechanical Keyboard RGB",
    id: "KBR-001",
    price: 850000,
    quantity: 2,
    discount: 25,
    freeShipping:false
};

const cust:Customer = {
    name: "Maven",
    id:1,
    member:Member.Premium
}

product.freeShipping = (cust.member == Member.Premium) ? true : false;
const products = [product];

console.info(`============= Product Info =============`);
console.info(product);

console.info(`============= Customer Info =============`);
console.info(cust);

const transaction:Transaction = {
    id:1,
    total:0,
    totaldisc:0,
    customer:cust
}

for (let i=0;i<products.length;i++) {
    transaction.total+=products[i].price*products[i].quantity;
}

console.info(`
============= Transaction Info =============
Transaction ID: ${transaction.id}
Customer: ${transaction.customer.name}
Total: ${transaction.total}
Total with Discount: ${transaction.total*(1-product.discount/100)}
`)