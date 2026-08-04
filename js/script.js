// Sample statistics
const totalBooks = 120;
const borrowedBooks = 35;
const availableBooks = totalBooks - borrowedBooks;

// Display stats if the HTML contains these IDs
const total = document.getElementById("totalBooks");
const borrowed = document.getElementById("borrowedBooks");
const available = document.getElementById("availableBooks");

if (total) {
    total.textContent = totalBooks;
}

if (borrowed) {
    borrowed.textContent = borrowedBooks;
}

if (available) {
    available.textContent = availableBooks;
}

// Welcome message
console.log("Library Tracking System loaded successfully!");
