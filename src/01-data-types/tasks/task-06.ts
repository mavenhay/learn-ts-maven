/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    id:number,
    name:string,
    price:number,
    stocks:number,
    avgRating:number,
    weight:number,
    discount?:number
}

const products:Product[] = [
    {id:14,name:"Phone",price:2000000,stocks:30,avgRating:4.5,weight:500},
    {id:67,name:"IJaZAH JKw",price:999999999999,stocks:1,avgRating:1.67,weight:2},
    {id:20,name:"Laptop Gaming",price:30000000,stocks:10,avgRating:4.7,weight:1200},
];

products.forEach( ()=> {
    
});