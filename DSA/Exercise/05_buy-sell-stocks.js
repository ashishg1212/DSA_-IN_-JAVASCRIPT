//              [ Best Time to Buy and Sell Stocks ]
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;


// 1. Brute force approche
var maxProfit = function(prices) {
    let globalProfit = 0;
    for(let i=0; i<prices.length-1; i++) {
        for(let j=i+1; j<prices.length; j++) {
            const currentPriofit = prices[j] - prices[i];
            globalProfit = Math.max(globalProfit, currentPriofit);
        }
    }
    return globalProfit;
};
console.log(maxProfit([7, 6, 4, 3, 1]));

// 2. Greedy Algorithm
var maxProfit = function(prices) {
    let minStockPrice = prices[0] || 0;
    let profit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < minStockPrice) {
            minStockPrice = prices[i];
        }
        profit = Math.max(profit, prices[i] - minStockPrice);
    }
    return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

