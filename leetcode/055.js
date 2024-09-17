/**
 * from
 * https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxLen = 0;
    let len = nums.length;
    for(let i = 0; i < nums.length -1; i++) {
        console.log(maxLen, i)
        if(maxLen <= i && nums[i] < 1) return false;
        if(nums[i] + i > maxLen) {
            maxLen = nums[i] + i;
        }
    }
    return true
};

const nums = [2,3,1,1,4];
console.log(canJump([3,2,1,0,4])); // true