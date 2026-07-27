/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
enum Category {
    CScience = "Computer Science",
    Math = "Mathematics",
    Novel = "Novel"
}

type Book = {isbn:number, title:string, author:string, pages:number, category:Category, available:boolean};

const book1:Book = {
    isbn:1,
    title:"Learn AI",
    author:"Maven",
    pages:136,
    category:Category.CScience,
    available:true
}

const book2:Book = {
    isbn:2,
    title:"Advanced Mathematics",
    author:"Maven",
    pages:239,
    category:Category.Math,
    available:true
}

const book3:Book = {
    isbn:3,
    title:"Learn TypeScript",
    author:"Maven",
    pages:127,
    category:Category.CScience,
    available:false
}

console.info("======= Book Infos =======");
console.info(book1);
console.info(book2);
console.info(book3);