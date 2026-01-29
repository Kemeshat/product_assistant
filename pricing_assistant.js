let productName = "Wireless Mouse";
let costPerUnit = 10.50;
let basePrice = 25.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 500.00;


let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitable = profitPerUnit > 0;

console.log("Product Name: " + productName);
console.log ("Discounted Price:", discountedPrice.toFixed(2));
console.log ("Final Price with Tax:", finalPriceWithTax.toFixed(2));
console.log ("Profit per Unit:", profitPerUnit.toFixed(2));
console.log ("Break-even Units:", breakEvenUnits);
console.log ("Profitable per Unit:", isProfitable);
