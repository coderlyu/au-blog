/**
 * from
 * https://leetcode.cn/problems/3sum/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) return result;
        let left = i + 1, right = nums.length - 1;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // 去重
                while(left + 1 < right && nums[left] === nums[left + 1]) left++;
                while(left < right - 1 && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]