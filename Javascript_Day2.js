let favoriteBookOne = 'The Alchemist';
const favoriteBookTwo = 'Harry Potter and the Prisoner of Azkaban';

// Compare names
let sameName = favoriteBookOne === favoriteBookTwo;

// Favorite book price
let priceFavoriteBookOne = 250000;
let priceFavoriteBookTwo = 350000;

// Compare prices and find the highest price
let highestPriceBook = priceFavoriteBookOne > priceFavoriteBookTwo ? favoriteBookOne : favoriteBookTwo;

// Calculate average price
let averagePrice = (priceFavoriteBookOne + priceFavoriteBookTwo) / 2;

// Determine if the books are expensive or cheap
let priceCategory = averagePrice > 500000 ? 'Expensive' : 'Cheap';

console.log('Do the favorite books have the same name?', sameName);
console.log('Favorite Book One:', favoriteBookOne);
console.log('Favorite Book Two:', favoriteBookTwo);
console.log('Price of Favorite Book One:', priceFavoriteBookOne);
console.log('Price of Favorite Book Two:', priceFavoriteBookTwo);
console.log('The book with the highest price:', highestPriceBook);
console.log('Average Price:', averagePrice);
console.log('Price Category:', priceCategory);
