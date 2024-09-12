/**
 * from
 * https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = 0;
    while(right < nums.length) {
        if(nums[right] != val) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
};

const nums = [3,2,2,3], val = 3

console.log(removeElement(nums, val)); // 2