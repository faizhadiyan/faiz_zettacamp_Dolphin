function purchaseBook(bookTitle, author, price, discountPercentage, stock, purchasedAmount, taxPercentage = 10) {
  //   const TAX_RATE = 0.1;

  let isDiscountApplied = discountPercentage > 0;
  let discountAmount = price * (discountPercentage / 100);
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = priceAfterDiscount * (taxPercentage / 100);
  let priceAfterTax = priceAfterDiscount + taxAmount;

  console.log('Book Title:', bookTitle);
  console.log('Author:', author);
  console.log('\n');

  let totalPrice = 0;

  for (let i = 0; i < purchasedAmount; i++) {
    if (stock === 0) {
      console.log('Book is out of stock.');
      break; // IF using else not needed using break
    }

    console.log('--- Purchase', i + 1, '---');
    console.log('Original Price:', price);
    console.log('Discount Applied:', isDiscountApplied);
    console.log('Amount of Discount:', discountAmount);
    console.log('Price After Discount:', priceAfterDiscount);
    console.log('Amount of Tax:', taxAmount);

    totalPrice = totalPrice + priceAfterTax;
    stock--;

    console.log('Total Price:', totalPrice);

    if (stock > 0) {
      console.log('Amount of Book After Purchase:', stock);
      console.log('You can purchase more books.');
    } else {
      console.log('Book is out of stock.');
    }

    console.log('\n');
  }
}

// calling function
// (bookTitle, author, price, discountPercentage, stock, purchasedAmount, taxPercentage)
purchaseBook('The Alchemist', 'Paulo Coelho', 20000, 15, 3, 3, 10);
//

console.log('\n', '\n', 'using object below', '\n', '\n');

//
// OBJECT
const bookstore = {
  purchaseBook: function (bookTitle, author, price, discountPercentage, stock, purchasedAmount, taxPercentage = 10) {
    let isDiscountApplied = discountPercentage > 0;
    let discountAmount = price * (discountPercentage / 100);
    let priceAfterDiscount = price - discountAmount;
    let taxAmount = priceAfterDiscount * (taxPercentage / 100);
    let priceAfterTax = priceAfterDiscount + taxAmount;

    console.log('Book Title:', bookTitle);
    console.log('Author:', author);
    console.log('\n');

    let totalPrice = 0;

    for (let i = 0; i < purchasedAmount; i++) {
      if (stock === 0) {
        console.log('Book is out of stock.');
        break;
      }

      console.log('--- Purchase', i + 1, '---');
      console.log('Original Price:', price);
      console.log('Discount Applied:', isDiscountApplied);
      console.log('Amount of Discount:', discountAmount);
      console.log('Price After Discount:', priceAfterDiscount);
      console.log('Amount of Tax:', taxAmount);

      totalPrice = totalPrice + priceAfterTax;
      stock--;

      console.log('Total Price:', totalPrice);

      if (stock > 0) {
        console.log('Amount of Book After Purchase:', stock);
        console.log('You can purchase more books.');
      } else {
        console.log('Book is out of stock.');
      }

      console.log('\n');
    }
  },
};

// Calling the function from the object
bookstore.purchaseBook('The Alchemist', 'Paulo Coelho', 20000, 15, 3, 3, 10);
