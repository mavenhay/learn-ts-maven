
/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */
type Status = "Available" | "Borrowed"
class Book {
    public isbn:string; public title:string; public author:string; public totalPages:number; private status:Status
    constructor(isbn:string, title:string, author:string, totalPages:number, status:Status){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.status = status;
    }
    borrow() {
        if (this.isAvailable()) this.status = "Borrowed";
    }
    returnBook() {
        if (!this.isAvailable()) this.status = "Available";
    }
    showInfo() {
        console.log(`===== Book Info =====
ISBN: ${this.isbn}
Title: ${this.title}
Author: ${this.author}
Total Pages: ${this.totalPages}
Status: ${this.status}`);
    }
    isAvailable() {
        return this.status=="Available";
    }
}

const obj1 = new Book("123-456-789", "WAJAJA", "Maven", 67, "Available");
obj1.borrow()
console.log(obj1.isAvailable())
obj1.showInfo()

console.log()

const obj2 = new Book("5425-1515-241", "I Don't Know", "Not Me", 123, "Borrowed")
obj2.returnBook()
console.log(obj2.isAvailable())
obj2.showInfo()