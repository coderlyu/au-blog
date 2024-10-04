/**
 * from
 * https://leetcode.cn/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0] >= target ? 1 : 0;
    let result = 0, minLen = 0
    let left = 0, right = 0, sum = 0
    while(right < nums.length) {
        sum += nums[right]
        while(sum >= target) {
            minLen = minLen === 0 ? right - left + 1 : Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return minLen
};

const target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums)) // 2