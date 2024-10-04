/**
 * from
 * https://leetcode.cn/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const result = new Array(len).fill(1);
    let left = 0, right = len - 1;
    while(left < right) {
        result[left] = result[left] * (nums[left - 1] || 1);
    }
};

const  nums = [1,2,3,4];
console.log(productExceptSelf(nums)); // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]