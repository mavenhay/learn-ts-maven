/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */
class Product {
    public id:string;
    public name:string; 
    private price:number;
    private stock:number;

    constructor(id:string, name:string, price:number, stock:number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity:number) {
        if (quantity>0) this.stock+=quantity ;
    }
    removeStock(quantity:number) {
        if (quantity>0 && quantity<=this.stock) this.stock+=quantity;
    }
    changePrice(price:number){
        if (price > 0) this.price = price;
    }
    isAvailable(){
        return this.stock>0;
    }
    getInventoryValue() {
        return this.price*this.stock;
    }
}

const laptop = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

laptop.addStock(5);

laptop.removeStock(3);

laptop.changePrice(14500000);

console.log(laptop.isAvailable());

console.log(laptop.getInventoryValue());