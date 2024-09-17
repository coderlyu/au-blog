/**
 * from
 * https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if(k === 0) return nums;
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};

const nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums, k)); // [5,6,7,1,2,3,4]