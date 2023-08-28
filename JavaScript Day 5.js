function purchaseBook(bookTitle, author, price, discountPercentage, stock, purchasedAmount, creditTermMonths, taxPercentage = 10) {
  let isDiscountApplied = discountPercentage > 0;
  let discountAmount = price * (discountPercentage / 100);
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = priceAfterDiscount * (taxPercentage / 100);
  let priceAfterTax = priceAfterDiscount + taxAmount;

  console.log('Book Title:', bookTitle);
  console.log('Author:', author);
  console.log('\n');

  let totalPrice = 0;
  let paymentAmountPerDueDate = priceAfterTax / creditTermMonths; // Calculate payment amount per due date

  // Calculate due dates using array map function
  const dueDates = Array.from({ length: creditTermMonths }, (_, month) => {
    const dueDate = new Date();
    dueDate.setMonth(dueDate.getMonth() + month + 1);
    return dueDate;
  });

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

  console.log('Due Dates and Payment Amounts:');
  // Loop through dueDates array and display due date and payment amount
  for (const [index, dueDate] of dueDates.entries()) {
    const formattedDueDate = dueDate.toDateString();
    const paymentForDueDate = paymentAmountPerDueDate.toFixed(2);
    console.log(`Due Date ${index + 1}: ${formattedDueDate} - Payment Amount: ${paymentForDueDate}`);
  }
}

// calling function
// (bookTitle, author, price, discountPercentage, stock, purchasedAmount, creditTermMonths, taxPercentage)
purchaseBook('The Alchemist', 'Paulo Coelho', 20000, 15, 4, 3, 6, 10);

console.log('\n', '\n', 'using object below', '\n', '\n');

//
// OBJECT
const bookstore = {
  purchaseBook: function (bookTitle, author, price, discountPercentage, stock, purchasedAmount, creditTermMonths, taxPercentage = 10) {
    let isDiscountApplied = discountPercentage > 0;
    let discountAmount = price * (discountPercentage / 100);
    let priceAfterDiscount = price - discountAmount;
    let taxAmount = priceAfterDiscount * (taxPercentage / 100);
    let priceAfterTax = priceAfterDiscount + taxAmount;

    console.log('Book Title:', bookTitle);
    console.log('Author:', author);
    console.log('\n');

    let totalPrice = 0;
    let paymentAmountPerDueDate = priceAfterTax / creditTermMonths;

    // Calculate due dates using array map function
    const dueDates = Array.from({ length: creditTermMonths }, (_, month) => {
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + month + 1);
      return dueDate;
    });

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

      // Loop through dueDates array and display due date and payment amount

      console.log('\n');
    }
    console.log('Due Dates and Payment Amounts:');
    for (const [index, dueDate] of dueDates.entries()) {
      const formattedDueDate = dueDate.toDateString();
      const paymentForDueDate = paymentAmountPerDueDate.toFixed(2);
      console.log(`Due Date ${index + 1}: ${formattedDueDate} - Payment Amount: ${paymentForDueDate}`);
    }
  },
};

// Calling function from the object
// (bookTitle, author, price, discountPercentage, stock, purchasedAmount, creditTermMonths, taxPercentage)
bookstore.purchaseBook('The Alchemist', 'Paulo Coelho', 20000, 15, 3, 3, 6, 10);
