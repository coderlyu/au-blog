/**
 * from
 * https://leetcode.cn/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length <=1) return nums.map(String);
    const result = [];
    let left = 0, right = 0;
    while(right < nums.length) {
        if(right + 1 < nums.length && nums[right] + 1 === nums[right + 1]) {
            right++;
        } else {
            result.push(left === right ? `${nums[left]}` : `${nums[left]}->${nums[right]}`);
            right++;
            left = right;

        }
    }
    return result
};
const nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums)) // ["0->2","4->5","7"]

console.log(summaryRanges([0,2,3,4,6,8,9])) // ["0","2->4","6","8->9"]