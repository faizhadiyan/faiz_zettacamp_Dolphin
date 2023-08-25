function purchaseBook(bookTitle, author, price, discountPercentage, taxPercentage = 10) {
  const TAX_RATE = 0.1; // 10% tax rate

  let isDiscountApplied = discountPercentage > 0;
  let discountAmount = price * (discountPercentage / 100);
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = priceAfterDiscount * (taxPercentage / 100);
  let priceAfterTax = priceAfterDiscount + taxAmount;

  console.log('Book Title:', bookTitle);
  console.log('Author:', author);
  console.log('Original Price:', price);
  console.log('Discount Applied:', isDiscountApplied);
  console.log('Amount of Discount:', discountAmount);
  console.log('Price After Discount:', priceAfterDiscount);
  console.log('Amount of Tax:', taxAmount);
  console.log('Price After Tax:', priceAfterTax);
}

// calling
purchaseBook('The Alchemist', 'Paulo Coelho', 20, 15, 10);

const books = [
  {
    bookName: 'The Alchemist',
    price: 20,
    amount: 3,
    discount: 10,
    tax: 8,
  },
  {
    bookName: 'Harry Potter and the Prisoner of Azkaban',
    price: 25,
    amount: 2,
    discount: 15,
    tax: 10,
  },
  {
    bookName: 'To Kill a Mockingbird',
    price: 18,
    amount: 1,
    discount: 5,
    tax: 7,
  },
  {
    bookName: '1984',
    price: 22,
    amount: 4,
    discount: 20,
    tax: 8,
  },
  {
    bookName: 'The Great Gatsby',
    price: 15,
    amount: 2,
    discount: 12,
    tax: 6,
  },
];

console.log('Book 1:', books[0].bookName, ', Price:', books[0].price);
console.log('Book 2:', books[1].bookName, ', Amount:', books[1].amount);
console.log('Book 3:', books[2].bookName, ', Discount:', books[2].discount);

console.log(typeof String(5));
console.log(String(8888871));
console.log((1000).toString());
