

/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */
type Book = { id: number, title:string, category: string, stock: number }
const books :Book[]= [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];
let infos:Book[] = [];
let a = (s:Book)=>{
    if (borrowings.map(b=>b.bookId).includes(s.id))
    infos.push(s);
};
console.log(`Andi's Borrowing Transactions:`,borrowings.filter(s=>s.student=="Andi"));
books.forEach(a);
console.log(`Borrowed Books Info:`,infos)
console.log(borrowings.filter(b=>books.filter(s=>s.category=="Programming").map(b=>b.id).includes(b.bookId)));
console.log(`Total Number of Borrowing Transaction: ${borrowings.length}`);
console.log(`Average Borrowing Duration (days):`,borrowings.map(b=>b.days).reduce((t,n)=>t+n,0)/borrowings.length);
console.log(`Students who borrowed more than 7 days:`,borrowings.filter(b=>b.days>7));