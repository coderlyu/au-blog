/**
 * from
 * https://leetcode.cn/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxCount = 0;
    let start = 0;
    let end = 1;
    while(end < nums.length) {
        let maxPos = 0;
        for(let i = start; i < end; i++) {
            maxPos = Math.max(maxPos, i + nums[i]);
        }
        start = end;
        end = maxPos + 1;
        maxCount++;
    }
    return maxCount
};
const nums = [2,3,1,1,4];
console.log(jump(nums)); // true