/**
 * from
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    for(let i = 0; i < prices.length; i ++) {
        if(prices[i] < min) {
            min = prices[i];
        } else {
            max += prices[i] - min;
            min = prices[i];
        }
    }
    return max;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // 7